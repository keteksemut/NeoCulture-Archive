/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var mC = Object.create;
	var Ri = Object.defineProperty;
	var gC = Object.getOwnPropertyDescriptor;
	var vC = Object.getOwnPropertyNames;
	var yC = Object.getPrototypeOf,
		EC = Object.prototype.hasOwnProperty;
	var bC = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
		get: (t, r) => (typeof require < "u" ? require : t)[r]
	}) : e)(function(e) {
		if (typeof require < "u") return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + e + '" is not supported')
	});
	var pe = (e, t) => () => (e && (t = e(e = 0)), t);
	var E = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		ze = (e, t) => {
			for (var r in t) Ri(e, r, {
				get: t[r],
				enumerable: !0
			})
		},
		lc = (e, t, r, n) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of vC(t)) !EC.call(e, i) && i !== r && Ri(e, i, {
					get: () => t[i],
					enumerable: !(n = gC(t, i)) || n.enumerable
				});
			return e
		};
	var oe = (e, t, r) => (r = e != null ? mC(yC(e)) : {}, lc(t || !e || !e.__esModule ? Ri(r, "default", {
			value: e,
			enumerable: !0
		}) : r, e)),
		ft = e => lc(Ri({}, "__esModule", {
			value: !0
		}), e);
	var Xs = E(() => {
		"use strict";
		window.tram = function(e) {
			function t(I, q) {
				var k = new U.Bare;
				return k.init(I, q)
			}

			function r(I) {
				return I.replace(/[A-Z]/g, function(q) {
					return "-" + q.toLowerCase()
				})
			}

			function n(I) {
				var q = parseInt(I.slice(1), 16),
					k = q >> 16 & 255,
					G = q >> 8 & 255,
					B = 255 & q;
				return [k, G, B]
			}

			function i(I, q, k) {
				return "#" + (1 << 24 | I << 16 | q << 8 | k).toString(16).slice(1)
			}

			function a() {}

			function s(I, q) {
				c("Type warning: Expected: [" + I + "] Got: [" + typeof q + "] " + q)
			}

			function o(I, q, k) {
				c("Units do not match [" + I + "]: " + q + ", " + k)
			}

			function l(I, q, k) {
				if (q !== void 0 && (k = q), I === void 0) return k;
				var G = k;
				return xt.test(I) || !tt.test(I) ? G = parseInt(I, 10) : tt.test(I) && (G = 1e3 * parseFloat(I)), 0 > G && (G = 0), G === G ? G : k
			}

			function c(I) {
				he.debug && window && window.console.warn(I)
			}

			function u(I) {
				for (var q = -1, k = I ? I.length : 0, G = []; ++q < k;) {
					var B = I[q];
					B && G.push(B)
				}
				return G
			}
			var f = function(I, q, k) {
					function G(Z) {
						return typeof Z == "object"
					}

					function B(Z) {
						return typeof Z == "function"
					}

					function V() {}

					function K(Z, le) {
						function W() {
							var Ve = new ie;
							return B(Ve.init) && Ve.init.apply(Ve, arguments), Ve
						}

						function ie() {}
						le === k && (le = Z, Z = Object), W.Bare = ie;
						var ae, ve = V[I] = Z[I],
							Tt = ie[I] = W[I] = new V;
						return Tt.constructor = W, W.mixin = function(Ve) {
							return ie[I] = W[I] = K(W, Ve)[I], W
						}, W.open = function(Ve) {
							if (ae = {}, B(Ve) ? ae = Ve.call(W, Tt, ve, W, Z) : G(Ve) && (ae = Ve), G(ae))
								for (var _n in ae) q.call(ae, _n) && (Tt[_n] = ae[_n]);
							return B(Tt.init) || (Tt.init = Z), W
						}, W.open(le)
					}
					return K
				}("prototype", {}.hasOwnProperty),
				m = {
					ease: ["ease", function(I, q, k, G) {
						var B = (I /= G) * I,
							V = B * I;
						return q + k * (-2.75 * V * B + 11 * B * B + -15.5 * V + 8 * B + .25 * I)
					}],
					"ease-in": ["ease-in", function(I, q, k, G) {
						var B = (I /= G) * I,
							V = B * I;
						return q + k * (-1 * V * B + 3 * B * B + -3 * V + 2 * B)
					}],
					"ease-out": ["ease-out", function(I, q, k, G) {
						var B = (I /= G) * I,
							V = B * I;
						return q + k * (.3 * V * B + -1.6 * B * B + 2.2 * V + -1.8 * B + 1.9 * I)
					}],
					"ease-in-out": ["ease-in-out", function(I, q, k, G) {
						var B = (I /= G) * I,
							V = B * I;
						return q + k * (2 * V * B + -5 * B * B + 2 * V + 2 * B)
					}],
					linear: ["linear", function(I, q, k, G) {
						return k * I / G + q
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(I, q, k, G) {
						return k * (I /= G) * I + q
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(I, q, k, G) {
						return -k * (I /= G) * (I - 2) + q
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(I, q, k, G) {
						return (I /= G / 2) < 1 ? k / 2 * I * I + q : -k / 2 * (--I * (I - 2) - 1) + q
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(I, q, k, G) {
						return k * (I /= G) * I * I + q
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(I, q, k, G) {
						return k * ((I = I / G - 1) * I * I + 1) + q
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(I, q, k, G) {
						return (I /= G / 2) < 1 ? k / 2 * I * I * I + q : k / 2 * ((I -= 2) * I * I + 2) + q
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(I, q, k, G) {
						return k * (I /= G) * I * I * I + q
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(I, q, k, G) {
						return -k * ((I = I / G - 1) * I * I * I - 1) + q
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(I, q, k, G) {
						return (I /= G / 2) < 1 ? k / 2 * I * I * I * I + q : -k / 2 * ((I -= 2) * I * I * I - 2) + q
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(I, q, k, G) {
						return k * (I /= G) * I * I * I * I + q
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(I, q, k, G) {
						return k * ((I = I / G - 1) * I * I * I * I + 1) + q
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(I, q, k, G) {
						return (I /= G / 2) < 1 ? k / 2 * I * I * I * I * I + q : k / 2 * ((I -= 2) * I * I * I * I + 2) + q
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(I, q, k, G) {
						return -k * Math.cos(I / G * (Math.PI / 2)) + k + q
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(I, q, k, G) {
						return k * Math.sin(I / G * (Math.PI / 2)) + q
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(I, q, k, G) {
						return -k / 2 * (Math.cos(Math.PI * I / G) - 1) + q
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(I, q, k, G) {
						return I === 0 ? q : k * Math.pow(2, 10 * (I / G - 1)) + q
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(I, q, k, G) {
						return I === G ? q + k : k * (-Math.pow(2, -10 * I / G) + 1) + q
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(I, q, k, G) {
						return I === 0 ? q : I === G ? q + k : (I /= G / 2) < 1 ? k / 2 * Math.pow(2, 10 * (I - 1)) + q : k / 2 * (-Math.pow(2, -10 * --I) + 2) + q
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(I, q, k, G) {
						return -k * (Math.sqrt(1 - (I /= G) * I) - 1) + q
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(I, q, k, G) {
						return k * Math.sqrt(1 - (I = I / G - 1) * I) + q
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(I, q, k, G) {
						return (I /= G / 2) < 1 ? -k / 2 * (Math.sqrt(1 - I * I) - 1) + q : k / 2 * (Math.sqrt(1 - (I -= 2) * I) + 1) + q
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(I, q, k, G, B) {
						return B === void 0 && (B = 1.70158), k * (I /= G) * I * ((B + 1) * I - B) + q
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(I, q, k, G, B) {
						return B === void 0 && (B = 1.70158), k * ((I = I / G - 1) * I * ((B + 1) * I + B) + 1) + q
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(I, q, k, G, B) {
						return B === void 0 && (B = 1.70158), (I /= G / 2) < 1 ? k / 2 * I * I * (((B *= 1.525) + 1) * I - B) + q : k / 2 * ((I -= 2) * I * (((B *= 1.525) + 1) * I + B) + 2) + q
					}]
				},
				d = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				p = document,
				g = window,
				h = "bkwld-tram",
				v = /[\-\.0-9]/g,
				y = /[A-Z]/,
				b = "number",
				S = /^(rgb|#)/,
				_ = /(em|cm|mm|in|pt|pc|px)$/,
				T = /(em|cm|mm|in|pt|pc|px|%)$/,
				x = /(deg|rad|turn)$/,
				P = "unitless",
				D = /(all|none) 0s ease 0s/,
				w = /^(width|height)$/,
				C = " ",
				R = p.createElement("a"),
				F = ["Webkit", "Moz", "O", "ms"],
				M = ["-webkit-", "-moz-", "-o-", "-ms-"],
				N = function(I) {
					if (I in R.style) return {
						dom: I,
						css: I
					};
					var q, k, G = "",
						B = I.split("-");
					for (q = 0; q < B.length; q++) G += B[q].charAt(0).toUpperCase() + B[q].slice(1);
					for (q = 0; q < F.length; q++)
						if (k = F[q] + G, k in R.style) return {
							dom: k,
							css: M[q] + I
						}
				},
				z = t.support = {
					bind: Function.prototype.bind,
					transform: N("transform"),
					transition: N("transition"),
					backface: N("backface-visibility"),
					timing: N("transition-timing-function")
				};
			if (z.transition) {
				var $ = z.timing.dom;
				if (R.style[$] = m["ease-in-back"][0], !R.style[$])
					for (var A in d) m[A][0] = d[A]
			}
			var O = t.frame = function() {
					var I = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame;
					return I && z.bind ? I.bind(g) : function(q) {
						g.setTimeout(q, 16)
					}
				}(),
				L = t.now = function() {
					var I = g.performance,
						q = I && (I.now || I.webkitNow || I.msNow || I.mozNow);
					return q && z.bind ? q.bind(I) : Date.now || function() {
						return +new Date
					}
				}(),
				H = f(function(I) {
					function q(ee, ue) {
						var be = u(("" + ee).split(C)),
							ce = be[0];
						ue = ue || {};
						var Ge = ne[ce];
						if (!Ge) return c("Unsupported property: " + ce);
						if (!ue.weak || !this.props[ce]) {
							var ct = Ge[0],
								Ke = this.props[ce];
							return Ke || (Ke = this.props[ce] = new ct.Bare), Ke.init(this.$el, be, Ge, ue), Ke
						}
					}

					function k(ee, ue, be) {
						if (ee) {
							var ce = typeof ee;
							if (ue || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ce == "number" && ue) return this.timer = new re({
								duration: ee,
								context: this,
								complete: V
							}), void(this.active = !0);
							if (ce == "string" && ue) {
								switch (ee) {
									case "hide":
										W.call(this);
										break;
									case "stop":
										K.call(this);
										break;
									case "redraw":
										ie.call(this);
										break;
									default:
										q.call(this, ee, be && be[1])
								}
								return V.call(this)
							}
							if (ce == "function") return void ee.call(this, this);
							if (ce == "object") {
								var Ge = 0;
								Tt.call(this, ee, function(Ce, dC) {
									Ce.span > Ge && (Ge = Ce.span), Ce.stop(), Ce.animate(dC)
								}, function(Ce) {
									"wait" in Ce && (Ge = l(Ce.wait, 0))
								}), ve.call(this), Ge > 0 && (this.timer = new re({
									duration: Ge,
									context: this
								}), this.active = !0, ue && (this.timer.complete = V));
								var ct = this,
									Ke = !1,
									Di = {};
								O(function() {
									Tt.call(ct, ee, function(Ce) {
										Ce.active && (Ke = !0, Di[Ce.name] = Ce.nextStyle)
									}), Ke && ct.$el.css(Di)
								})
							}
						}
					}

					function G(ee) {
						ee = l(ee, 0), this.active ? this.queue.push({
							options: ee
						}) : (this.timer = new re({
							duration: ee,
							context: this,
							complete: V
						}), this.active = !0)
					}

					function B(ee) {
						return this.active ? (this.queue.push({
							options: ee,
							args: arguments
						}), void(this.timer.complete = V)) : c("No active transition timer. Use start() or wait() before then().")
					}

					function V() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var ee = this.queue.shift();
							k.call(this, ee.options, !0, ee.args)
						}
					}

					function K(ee) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var ue;
						typeof ee == "string" ? (ue = {}, ue[ee] = 1) : ue = typeof ee == "object" && ee != null ? ee : this.props, Tt.call(this, ue, Ve), ve.call(this)
					}

					function Z(ee) {
						K.call(this, ee), Tt.call(this, ee, _n, fC)
					}

					function le(ee) {
						typeof ee != "string" && (ee = "block"), this.el.style.display = ee
					}

					function W() {
						K.call(this), this.el.style.display = "none"
					}

					function ie() {
						this.el.offsetHeight
					}

					function ae() {
						K.call(this), e.removeData(this.el, h), this.$el = this.el = null
					}

					function ve() {
						var ee, ue, be = [];
						this.upstream && be.push(this.upstream);
						for (ee in this.props) ue = this.props[ee], ue.active && be.push(ue.string);
						be = be.join(","), this.style !== be && (this.style = be, this.el.style[z.transition.dom] = be)
					}

					function Tt(ee, ue, be) {
						var ce, Ge, ct, Ke, Di = ue !== Ve,
							Ce = {};
						for (ce in ee) ct = ee[ce], ce in Me ? (Ce.transform || (Ce.transform = {}), Ce.transform[ce] = ct) : (y.test(ce) && (ce = r(ce)), ce in ne ? Ce[ce] = ct : (Ke || (Ke = {}), Ke[ce] = ct));
						for (ce in Ce) {
							if (ct = Ce[ce], Ge = this.props[ce], !Ge) {
								if (!Di) continue;
								Ge = q.call(this, ce)
							}
							ue.call(this, Ge, ct)
						}
						be && Ke && be.call(this, Ke)
					}

					function Ve(ee) {
						ee.stop()
					}

					function _n(ee, ue) {
						ee.set(ue)
					}

					function fC(ee) {
						this.$el.css(ee)
					}

					function ht(ee, ue) {
						I[ee] = function() {
							return this.children ? pC.call(this, ue, arguments) : (this.el && ue.apply(this, arguments), this)
						}
					}

					function pC(ee, ue) {
						var be, ce = this.children.length;
						for (be = 0; ce > be; be++) ee.apply(this.children[be], ue);
						return this
					}
					I.init = function(ee) {
						if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, he.keepInherited && !he.fallback) {
							var ue = Pe(this.el, "transition");
							ue && !D.test(ue) && (this.upstream = ue)
						}
						z.backface && he.hideBackface && Ee(this.el, z.backface.css, "hidden")
					}, ht("add", q), ht("start", k), ht("wait", G), ht("then", B), ht("next", V), ht("stop", K), ht("set", Z), ht("show", le), ht("hide", W), ht("redraw", ie), ht("destroy", ae)
				}),
				U = f(H, function(I) {
					function q(k, G) {
						var B = e.data(k, h) || e.data(k, h, new H.Bare);
						return B.el || B.init(k), G ? B.start(G) : B
					}
					I.init = function(k, G) {
						var B = e(k);
						if (!B.length) return this;
						if (B.length === 1) return q(B[0], G);
						var V = [];
						return B.each(function(K, Z) {
							V.push(q(Z, G))
						}), this.children = V, this
					}
				}),
				j = f(function(I) {
					function q() {
						var V = this.get();
						this.update("auto");
						var K = this.get();
						return this.update(V), K
					}

					function k(V, K, Z) {
						return K !== void 0 && (Z = K), V in m ? V : Z
					}

					function G(V) {
						var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(V);
						return (K ? i(K[1], K[2], K[3]) : V).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var B = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					I.init = function(V, K, Z, le) {
						this.$el = V, this.el = V[0];
						var W = K[0];
						Z[2] && (W = Z[2]), Te[W] && (W = Te[W]), this.name = W, this.type = Z[1], this.duration = l(K[1], this.duration, B.duration), this.ease = k(K[2], this.ease, B.ease), this.delay = l(K[3], this.delay, B.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = le.unit || this.unit || he.defaultUnit, this.angle = le.angle || this.angle || he.defaultAngle, he.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + C + this.duration + "ms" + (this.ease != "ease" ? C + m[this.ease][0] : "") + (this.delay ? C + this.delay + "ms" : ""))
					}, I.set = function(V) {
						V = this.convert(V, this.type), this.update(V), this.redraw()
					}, I.transition = function(V) {
						this.active = !0, V = this.convert(V, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), V == "auto" && (V = q.call(this))), this.nextStyle = V
					}, I.fallback = function(V) {
						var K = this.el.style[this.name] || this.convert(this.get(), this.type);
						V = this.convert(V, this.type), this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)), V == "auto" && (V = q.call(this))), this.tween = new X({
							from: K,
							to: V,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, I.get = function() {
						return Pe(this.el, this.name)
					}, I.update = function(V) {
						Ee(this.el, this.name, V)
					}, I.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Ee(this.el, this.name, this.get()));
						var V = this.tween;
						V && V.context && V.destroy()
					}, I.convert = function(V, K) {
						if (V == "auto" && this.auto) return V;
						var Z, le = typeof V == "number",
							W = typeof V == "string";
						switch (K) {
							case b:
								if (le) return V;
								if (W && V.replace(v, "") === "") return +V;
								Z = "number(unitless)";
								break;
							case S:
								if (W) {
									if (V === "" && this.original) return this.original;
									if (K.test(V)) return V.charAt(0) == "#" && V.length == 7 ? V : G(V)
								}
								Z = "hex or rgb string";
								break;
							case _:
								if (le) return V + this.unit;
								if (W && K.test(V)) return V;
								Z = "number(px) or string(unit)";
								break;
							case T:
								if (le) return V + this.unit;
								if (W && K.test(V)) return V;
								Z = "number(px) or string(unit or %)";
								break;
							case x:
								if (le) return V + this.angle;
								if (W && K.test(V)) return V;
								Z = "number(deg) or string(angle)";
								break;
							case P:
								if (le || W && T.test(V)) return V;
								Z = "number(unitless) or string(unit or %)"
						}
						return s(Z, V), V
					}, I.redraw = function() {
						this.el.offsetHeight
					}
				}),
				Y = f(j, function(I, q) {
					I.init = function() {
						q.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), S))
					}
				}),
				Q = f(j, function(I, q) {
					I.init = function() {
						q.init.apply(this, arguments), this.animate = this.fallback
					}, I.get = function() {
						return this.$el[this.name]()
					}, I.update = function(k) {
						this.$el[this.name](k)
					}
				}),
				J = f(j, function(I, q) {
					function k(G, B) {
						var V, K, Z, le, W;
						for (V in G) le = Me[V], Z = le[0], K = le[1] || V, W = this.convert(G[V], Z), B.call(this, K, W, Z)
					}
					I.init = function() {
						q.init.apply(this, arguments), this.current || (this.current = {}, Me.perspective && he.perspective && (this.current.perspective = he.perspective, Ee(this.el, this.name, this.style(this.current)), this.redraw()))
					}, I.set = function(G) {
						k.call(this, G, function(B, V) {
							this.current[B] = V
						}), Ee(this.el, this.name, this.style(this.current)), this.redraw()
					}, I.transition = function(G) {
						var B = this.values(G);
						this.tween = new Ae({
							current: this.current,
							values: B,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var V, K = {};
						for (V in this.current) K[V] = V in B ? B[V] : this.current[V];
						this.active = !0, this.nextStyle = this.style(K)
					}, I.fallback = function(G) {
						var B = this.values(G);
						this.tween = new Ae({
							current: this.current,
							values: B,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, I.update = function() {
						Ee(this.el, this.name, this.style(this.current))
					}, I.style = function(G) {
						var B, V = "";
						for (B in G) V += B + "(" + G[B] + ") ";
						return V
					}, I.values = function(G) {
						var B, V = {};
						return k.call(this, G, function(K, Z, le) {
							V[K] = Z, this.current[K] === void 0 && (B = 0, ~K.indexOf("scale") && (B = 1), this.current[K] = this.convert(B, le))
						}), V
					}
				}),
				X = f(function(I) {
					function q(W) {
						Z.push(W) === 1 && O(k)
					}

					function k() {
						var W, ie, ae, ve = Z.length;
						if (ve)
							for (O(k), ie = L(), W = ve; W--;) ae = Z[W], ae && ae.render(ie)
					}

					function G(W) {
						var ie, ae = e.inArray(W, Z);
						ae >= 0 && (ie = Z.slice(ae + 1), Z.length = ae, ie.length && (Z = Z.concat(ie)))
					}

					function B(W) {
						return Math.round(W * le) / le
					}

					function V(W, ie, ae) {
						return i(W[0] + ae * (ie[0] - W[0]), W[1] + ae * (ie[1] - W[1]), W[2] + ae * (ie[2] - W[2]))
					}
					var K = {
						ease: m.ease[1],
						from: 0,
						to: 1
					};
					I.init = function(W) {
						this.duration = W.duration || 0, this.delay = W.delay || 0;
						var ie = W.ease || K.ease;
						m[ie] && (ie = m[ie][1]), typeof ie != "function" && (ie = K.ease), this.ease = ie, this.update = W.update || a, this.complete = W.complete || a, this.context = W.context || this, this.name = W.name;
						var ae = W.from,
							ve = W.to;
						ae === void 0 && (ae = K.from), ve === void 0 && (ve = K.to), this.unit = W.unit || "", typeof ae == "number" && typeof ve == "number" ? (this.begin = ae, this.change = ve - ae) : this.format(ve, ae), this.value = this.begin + this.unit, this.start = L(), W.autoplay !== !1 && this.play()
					}, I.play = function() {
						this.active || (this.start || (this.start = L()), this.active = !0, q(this))
					}, I.stop = function() {
						this.active && (this.active = !1, G(this))
					}, I.render = function(W) {
						var ie, ae = W - this.start;
						if (this.delay) {
							if (ae <= this.delay) return;
							ae -= this.delay
						}
						if (ae < this.duration) {
							var ve = this.ease(ae, 0, 1, this.duration);
							return ie = this.startRGB ? V(this.startRGB, this.endRGB, ve) : B(this.begin + ve * this.change), this.value = ie + this.unit, void this.update.call(this.context, this.value)
						}
						ie = this.endHex || this.begin + this.change, this.value = ie + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, I.format = function(W, ie) {
						if (ie += "", W += "", W.charAt(0) == "#") return this.startRGB = n(ie), this.endRGB = n(W), this.endHex = W, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var ae = ie.replace(v, ""),
								ve = W.replace(v, "");
							ae !== ve && o("tween", ie, W), this.unit = ae
						}
						ie = parseFloat(ie), W = parseFloat(W), this.begin = this.value = ie, this.change = W - ie
					}, I.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = a
					};
					var Z = [],
						le = 1e3
				}),
				re = f(X, function(I) {
					I.init = function(q) {
						this.duration = q.duration || 0, this.complete = q.complete || a, this.context = q.context, this.play()
					}, I.render = function(q) {
						var k = q - this.start;
						k < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				Ae = f(X, function(I, q) {
					I.init = function(k) {
						this.context = k.context, this.update = k.update, this.tweens = [], this.current = k.current;
						var G, B;
						for (G in k.values) B = k.values[G], this.current[G] !== B && this.tweens.push(new X({
							name: G,
							from: this.current[G],
							to: B,
							duration: k.duration,
							delay: k.delay,
							ease: k.ease,
							autoplay: !1
						}));
						this.play()
					}, I.render = function(k) {
						var G, B, V = this.tweens.length,
							K = !1;
						for (G = V; G--;) B = this.tweens[G], B.context && (B.render(k), this.current[B.name] = B.value, K = !0);
						return K ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, I.destroy = function() {
						if (q.destroy.call(this), this.tweens) {
							var k, G = this.tweens.length;
							for (k = G; k--;) this.tweens[k].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				he = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !z.transition,
					agentTests: []
				};
			t.fallback = function(I) {
				if (!z.transition) return he.fallback = !0;
				he.agentTests.push("(" + I + ")");
				var q = new RegExp(he.agentTests.join("|"), "i");
				he.fallback = q.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(I) {
				return new X(I)
			}, t.delay = function(I, q, k) {
				return new re({
					complete: q,
					duration: I,
					context: k
				})
			}, e.fn.tram = function(I) {
				return t.call(null, this, I)
			};
			var Ee = e.style,
				Pe = e.css,
				Te = {
					transform: z.transform && z.transform.css
				},
				ne = {
					color: [Y, S],
					background: [Y, S, "background-color"],
					"outline-color": [Y, S],
					"border-color": [Y, S],
					"border-top-color": [Y, S],
					"border-right-color": [Y, S],
					"border-bottom-color": [Y, S],
					"border-left-color": [Y, S],
					"border-width": [j, _],
					"border-top-width": [j, _],
					"border-right-width": [j, _],
					"border-bottom-width": [j, _],
					"border-left-width": [j, _],
					"border-spacing": [j, _],
					"letter-spacing": [j, _],
					margin: [j, _],
					"margin-top": [j, _],
					"margin-right": [j, _],
					"margin-bottom": [j, _],
					"margin-left": [j, _],
					padding: [j, _],
					"padding-top": [j, _],
					"padding-right": [j, _],
					"padding-bottom": [j, _],
					"padding-left": [j, _],
					"outline-width": [j, _],
					opacity: [j, b],
					top: [j, T],
					right: [j, T],
					bottom: [j, T],
					left: [j, T],
					"font-size": [j, T],
					"text-indent": [j, T],
					"word-spacing": [j, T],
					width: [j, T],
					"min-width": [j, T],
					"max-width": [j, T],
					height: [j, T],
					"min-height": [j, T],
					"max-height": [j, T],
					"line-height": [j, P],
					"scroll-top": [Q, b, "scrollTop"],
					"scroll-left": [Q, b, "scrollLeft"]
				},
				Me = {};
			z.transform && (ne.transform = [J], Me = {
				x: [T, "translateX"],
				y: [T, "translateY"],
				rotate: [x],
				rotateX: [x],
				rotateY: [x],
				scale: [b],
				scaleX: [b],
				scaleY: [b],
				skew: [x],
				skewX: [x],
				skewY: [x]
			}), z.transform && z.backface && (Me.z = [T, "translateZ"], Me.rotateZ = [x], Me.scaleZ = [b], Me.perspective = [_]);
			var xt = /ms/,
				tt = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var hc = E((wee, uc) => {
		"use strict";
		var SC = window.$,
			_C = Xs() && SC.tram;
		uc.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				a = r.push,
				s = r.slice,
				o = r.concat,
				l = n.toString,
				c = n.hasOwnProperty,
				u = r.forEach,
				f = r.map,
				m = r.reduce,
				d = r.reduceRight,
				p = r.filter,
				g = r.every,
				h = r.some,
				v = r.indexOf,
				y = r.lastIndexOf,
				b = Array.isArray,
				S = Object.keys,
				_ = i.bind,
				T = e.each = e.forEach = function(F, M, N) {
					if (F == null) return F;
					if (u && F.forEach === u) F.forEach(M, N);
					else if (F.length === +F.length) {
						for (var z = 0, $ = F.length; z < $; z++)
							if (M.call(N, F[z], z, F) === t) return
					} else
						for (var A = e.keys(F), z = 0, $ = A.length; z < $; z++)
							if (M.call(N, F[A[z]], A[z], F) === t) return;
					return F
				};
			e.map = e.collect = function(F, M, N) {
				var z = [];
				return F == null ? z : f && F.map === f ? F.map(M, N) : (T(F, function($, A, O) {
					z.push(M.call(N, $, A, O))
				}), z)
			}, e.find = e.detect = function(F, M, N) {
				var z;
				return x(F, function($, A, O) {
					if (M.call(N, $, A, O)) return z = $, !0
				}), z
			}, e.filter = e.select = function(F, M, N) {
				var z = [];
				return F == null ? z : p && F.filter === p ? F.filter(M, N) : (T(F, function($, A, O) {
					M.call(N, $, A, O) && z.push($)
				}), z)
			};
			var x = e.some = e.any = function(F, M, N) {
				M || (M = e.identity);
				var z = !1;
				return F == null ? z : h && F.some === h ? F.some(M, N) : (T(F, function($, A, O) {
					if (z || (z = M.call(N, $, A, O))) return t
				}), !!z)
			};
			e.contains = e.include = function(F, M) {
				return F == null ? !1 : v && F.indexOf === v ? F.indexOf(M) != -1 : x(F, function(N) {
					return N === M
				})
			}, e.delay = function(F, M) {
				var N = s.call(arguments, 2);
				return setTimeout(function() {
					return F.apply(null, N)
				}, M)
			}, e.defer = function(F) {
				return e.delay.apply(e, [F, 1].concat(s.call(arguments, 1)))
			}, e.throttle = function(F) {
				var M, N, z;
				return function() {
					M || (M = !0, N = arguments, z = this, _C.frame(function() {
						M = !1, F.apply(z, N)
					}))
				}
			}, e.debounce = function(F, M, N) {
				var z, $, A, O, L, H = function() {
					var U = e.now() - O;
					U < M ? z = setTimeout(H, M - U) : (z = null, N || (L = F.apply(A, $), A = $ = null))
				};
				return function() {
					A = this, $ = arguments, O = e.now();
					var U = N && !z;
					return z || (z = setTimeout(H, M)), U && (L = F.apply(A, $), A = $ = null), L
				}
			}, e.defaults = function(F) {
				if (!e.isObject(F)) return F;
				for (var M = 1, N = arguments.length; M < N; M++) {
					var z = arguments[M];
					for (var $ in z) F[$] === void 0 && (F[$] = z[$])
				}
				return F
			}, e.keys = function(F) {
				if (!e.isObject(F)) return [];
				if (S) return S(F);
				var M = [];
				for (var N in F) e.has(F, N) && M.push(N);
				return M
			}, e.has = function(F, M) {
				return c.call(F, M)
			}, e.isObject = function(F) {
				return F === Object(F)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var P = /(.)^/,
				D = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				w = /\\|'|\r|\n|\u2028|\u2029/g,
				C = function(F) {
					return "\\" + D[F]
				},
				R = /^\s*(\w|\$)+\s*$/;
			return e.template = function(F, M, N) {
				!M && N && (M = N), M = e.defaults({}, M, e.templateSettings);
				var z = RegExp([(M.escape || P).source, (M.interpolate || P).source, (M.evaluate || P).source].join("|") + "|$", "g"),
					$ = 0,
					A = "__p+='";
				F.replace(z, function(U, j, Y, Q, J) {
					return A += F.slice($, J).replace(w, C), $ = J + U.length, j ? A += `'+
((__t=(` + j + `))==null?'':_.escape(__t))+
'` : Y ? A += `'+
((__t=(` + Y + `))==null?'':__t)+
'` : Q && (A += `';
` + Q + `
__p+='`), U
				}), A += `';
`;
				var O = M.variable;
				if (O) {
					if (!R.test(O)) throw new Error("variable is not a bare identifier: " + O)
				} else A = `with(obj||{}){
` + A + `}
`, O = "obj";
				A = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + A + `return __p;
`;
				var L;
				try {
					L = new Function(M.variable || "obj", "_", A)
				} catch (U) {
					throw U.source = A, U
				}
				var H = function(U) {
					return L.call(this, U, e)
				};
				return H.source = "function(" + O + `){
` + A + "}", H
			}, e
		}()
	});
	var rt = E((Mee, yc) => {
		"use strict";
		var fe = {},
			Or = {},
			Dr = [],
			Ks = window.Webflow || [],
			Yt = window.jQuery,
			dt = Yt(window),
			xC = Yt(document),
			It = Yt.isFunction,
			pt = fe._ = hc(),
			fc = fe.tram = Xs() && Yt.tram,
			Li = !1,
			Ys = !1;
		fc.config.hideBackface = !1;
		fc.config.keepInherited = !0;
		fe.define = function(e, t, r) {
			Or[e] && dc(Or[e]);
			var n = Or[e] = t(Yt, pt, r) || {};
			return pc(n), n
		};
		fe.require = function(e) {
			return Or[e]
		};

		function pc(e) {
			fe.env() && (It(e.design) && dt.on("__wf_design", e.design), It(e.preview) && dt.on("__wf_preview", e.preview)), It(e.destroy) && dt.on("__wf_destroy", e.destroy), e.ready && It(e.ready) && TC(e)
		}

		function TC(e) {
			if (Li) {
				e.ready();
				return
			}
			pt.contains(Dr, e.ready) || Dr.push(e.ready)
		}

		function dc(e) {
			It(e.design) && dt.off("__wf_design", e.design), It(e.preview) && dt.off("__wf_preview", e.preview), It(e.destroy) && dt.off("__wf_destroy", e.destroy), e.ready && It(e.ready) && IC(e)
		}

		function IC(e) {
			Dr = pt.filter(Dr, function(t) {
				return t !== e.ready
			})
		}
		fe.push = function(e) {
			if (Li) {
				It(e) && e();
				return
			}
			Ks.push(e)
		};
		fe.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var qi = navigator.userAgent.toLowerCase(),
			mc = fe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			AC = fe.env.chrome = /chrome/.test(qi) && /Google/.test(navigator.vendor) && parseInt(qi.match(/chrome\/(\d+)\./)[1], 10),
			PC = fe.env.ios = /(ipod|iphone|ipad)/.test(qi);
		fe.env.safari = /safari/.test(qi) && !AC && !PC;
		var $s;
		mc && xC.on("touchstart mousedown", function(e) {
			$s = e.target
		});
		fe.validClick = mc ? function(e) {
			return e === $s || Yt.contains(e, $s)
		} : function() {
			return !0
		};
		var gc = "resize.webflow orientationchange.webflow load.webflow",
			CC = "scroll.webflow " + gc;
		fe.resize = Qs(dt, gc);
		fe.scroll = Qs(dt, CC);
		fe.redraw = Qs();

		function Qs(e, t) {
			var r = [],
				n = {};
			return n.up = pt.throttle(function(i) {
				pt.each(r, function(a) {
					a(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (pt.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = pt.filter(r, function(a) {
					return a !== i
				})
			}, n
		}
		fe.location = function(e) {
			window.location = e
		};
		fe.env() && (fe.location = function() {});
		fe.ready = function() {
			Li = !0, Ys ? wC() : pt.each(Dr, cc), pt.each(Ks, cc), fe.resize.up()
		};

		function cc(e) {
			It(e) && e()
		}

		function wC() {
			Ys = !1, pt.each(Or, pc)
		}
		var pr;
		fe.load = function(e) {
			pr.then(e)
		};

		function vc() {
			pr && (pr.reject(), dt.off("load", pr.resolve)), pr = new Yt.Deferred, dt.on("load", pr.resolve)
		}
		fe.destroy = function(e) {
			e = e || {}, Ys = !0, dt.triggerHandler("__wf_destroy"), e.domready != null && (Li = e.domready), pt.each(Or, dc), fe.resize.off(), fe.scroll.off(), fe.redraw.off(), Dr = [], Ks = [], pr.state() === "pending" && vc()
		};
		Yt(fe.ready);
		vc();
		yc.exports = window.Webflow = fe
	});
	var Zs = E((Fee, Ec) => {
		function MC(e, t, r, n) {
			for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
				if (t(e[a], a, e)) return a;
			return -1
		}
		Ec.exports = MC
	});
	var Sc = E((Oee, bc) => {
		function FC() {
			this.__data__ = [], this.size = 0
		}
		bc.exports = FC
	});
	var ki = E((Dee, _c) => {
		function OC(e, t) {
			return e === t || e !== e && t !== t
		}
		_c.exports = OC
	});
	var xn = E((Ree, xc) => {
		var DC = ki();

		function RC(e, t) {
			for (var r = e.length; r--;)
				if (DC(e[r][0], t)) return r;
			return -1
		}
		xc.exports = RC
	});
	var Ic = E((qee, Tc) => {
		var qC = xn(),
			LC = Array.prototype,
			kC = LC.splice;

		function NC(e) {
			var t = this.__data__,
				r = qC(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : kC.call(t, r, 1), --this.size, !0
		}
		Tc.exports = NC
	});
	var Pc = E((Lee, Ac) => {
		var BC = xn();

		function VC(e) {
			var t = this.__data__,
				r = BC(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		Ac.exports = VC
	});
	var wc = E((kee, Cc) => {
		var GC = xn();

		function zC(e) {
			return GC(this.__data__, e) > -1
		}
		Cc.exports = zC
	});
	var Fc = E((Nee, Mc) => {
		var HC = xn();

		function jC(e, t) {
			var r = this.__data__,
				n = HC(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		Mc.exports = jC
	});
	var Tn = E((Bee, Oc) => {
		var UC = Sc(),
			WC = Ic(),
			XC = Pc(),
			$C = wc(),
			KC = Fc();

		function Rr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Rr.prototype.clear = UC;
		Rr.prototype.delete = WC;
		Rr.prototype.get = XC;
		Rr.prototype.has = $C;
		Rr.prototype.set = KC;
		Oc.exports = Rr
	});
	var Rc = E((Vee, Dc) => {
		var YC = Tn();

		function QC() {
			this.__data__ = new YC, this.size = 0
		}
		Dc.exports = QC
	});
	var Lc = E((Gee, qc) => {
		function ZC(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		qc.exports = ZC
	});
	var Nc = E((zee, kc) => {
		function JC(e) {
			return this.__data__.get(e)
		}
		kc.exports = JC
	});
	var Vc = E((Hee, Bc) => {
		function ew(e) {
			return this.__data__.has(e)
		}
		Bc.exports = ew
	});
	var Js = E((jee, Gc) => {
		var tw = typeof global == "object" && global && global.Object === Object && global;
		Gc.exports = tw
	});
	var mt = E((Uee, zc) => {
		var rw = Js(),
			nw = typeof self == "object" && self && self.Object === Object && self,
			iw = rw || nw || Function("return this")();
		zc.exports = iw
	});
	var qr = E((Wee, Hc) => {
		var aw = mt(),
			sw = aw.Symbol;
		Hc.exports = sw
	});
	var Xc = E((Xee, Wc) => {
		var jc = qr(),
			Uc = Object.prototype,
			ow = Uc.hasOwnProperty,
			lw = Uc.toString,
			In = jc ? jc.toStringTag : void 0;

		function uw(e) {
			var t = ow.call(e, In),
				r = e[In];
			try {
				e[In] = void 0;
				var n = !0
			} catch {}
			var i = lw.call(e);
			return n && (t ? e[In] = r : delete e[In]), i
		}
		Wc.exports = uw
	});
	var Kc = E(($ee, $c) => {
		var hw = Object.prototype,
			cw = hw.toString;

		function fw(e) {
			return cw.call(e)
		}
		$c.exports = fw
	});
	var Qt = E((Kee, Zc) => {
		var Yc = qr(),
			pw = Xc(),
			dw = Kc(),
			mw = "[object Null]",
			gw = "[object Undefined]",
			Qc = Yc ? Yc.toStringTag : void 0;

		function vw(e) {
			return e == null ? e === void 0 ? gw : mw : Qc && Qc in Object(e) ? pw(e) : dw(e)
		}
		Zc.exports = vw
	});
	var At = E((Yee, Jc) => {
		function yw(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		Jc.exports = yw
	});
	var eo = E((Qee, ef) => {
		var Ew = Qt(),
			bw = At(),
			Sw = "[object AsyncFunction]",
			_w = "[object Function]",
			xw = "[object GeneratorFunction]",
			Tw = "[object Proxy]";

		function Iw(e) {
			if (!bw(e)) return !1;
			var t = Ew(e);
			return t == _w || t == xw || t == Sw || t == Tw
		}
		ef.exports = Iw
	});
	var rf = E((Zee, tf) => {
		var Aw = mt(),
			Pw = Aw["__core-js_shared__"];
		tf.exports = Pw
	});
	var sf = E((Jee, af) => {
		var to = rf(),
			nf = function() {
				var e = /[^.]+$/.exec(to && to.keys && to.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function Cw(e) {
			return !!nf && nf in e
		}
		af.exports = Cw
	});
	var ro = E((ete, of ) => {
		var ww = Function.prototype,
			Mw = ww.toString;

		function Fw(e) {
			if (e != null) {
				try {
					return Mw.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		} of .exports = Fw
	});
	var uf = E((tte, lf) => {
		var Ow = eo(),
			Dw = sf(),
			Rw = At(),
			qw = ro(),
			Lw = /[\\^$.*+?()[\]{}|]/g,
			kw = /^\[object .+?Constructor\]$/,
			Nw = Function.prototype,
			Bw = Object.prototype,
			Vw = Nw.toString,
			Gw = Bw.hasOwnProperty,
			zw = RegExp("^" + Vw.call(Gw).replace(Lw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function Hw(e) {
			if (!Rw(e) || Dw(e)) return !1;
			var t = Ow(e) ? zw : kw;
			return t.test(qw(e))
		}
		lf.exports = Hw
	});
	var cf = E((rte, hf) => {
		function jw(e, t) {
			return e?. [t]
		}
		hf.exports = jw
	});
	var Zt = E((nte, ff) => {
		var Uw = uf(),
			Ww = cf();

		function Xw(e, t) {
			var r = Ww(e, t);
			return Uw(r) ? r : void 0
		}
		ff.exports = Xw
	});
	var Ni = E((ite, pf) => {
		var $w = Zt(),
			Kw = mt(),
			Yw = $w(Kw, "Map");
		pf.exports = Yw
	});
	var An = E((ate, df) => {
		var Qw = Zt(),
			Zw = Qw(Object, "create");
		df.exports = Zw
	});
	var vf = E((ste, gf) => {
		var mf = An();

		function Jw() {
			this.__data__ = mf ? mf(null) : {}, this.size = 0
		}
		gf.exports = Jw
	});
	var Ef = E((ote, yf) => {
		function eM(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		yf.exports = eM
	});
	var Sf = E((lte, bf) => {
		var tM = An(),
			rM = "__lodash_hash_undefined__",
			nM = Object.prototype,
			iM = nM.hasOwnProperty;

		function aM(e) {
			var t = this.__data__;
			if (tM) {
				var r = t[e];
				return r === rM ? void 0 : r
			}
			return iM.call(t, e) ? t[e] : void 0
		}
		bf.exports = aM
	});
	var xf = E((ute, _f) => {
		var sM = An(),
			oM = Object.prototype,
			lM = oM.hasOwnProperty;

		function uM(e) {
			var t = this.__data__;
			return sM ? t[e] !== void 0 : lM.call(t, e)
		}
		_f.exports = uM
	});
	var If = E((hte, Tf) => {
		var hM = An(),
			cM = "__lodash_hash_undefined__";

		function fM(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = hM && t === void 0 ? cM : t, this
		}
		Tf.exports = fM
	});
	var Pf = E((cte, Af) => {
		var pM = vf(),
			dM = Ef(),
			mM = Sf(),
			gM = xf(),
			vM = If();

		function Lr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Lr.prototype.clear = pM;
		Lr.prototype.delete = dM;
		Lr.prototype.get = mM;
		Lr.prototype.has = gM;
		Lr.prototype.set = vM;
		Af.exports = Lr
	});
	var Mf = E((fte, wf) => {
		var Cf = Pf(),
			yM = Tn(),
			EM = Ni();

		function bM() {
			this.size = 0, this.__data__ = {
				hash: new Cf,
				map: new(EM || yM),
				string: new Cf
			}
		}
		wf.exports = bM
	});
	var Of = E((pte, Ff) => {
		function SM(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		Ff.exports = SM
	});
	var Pn = E((dte, Df) => {
		var _M = Of();

		function xM(e, t) {
			var r = e.__data__;
			return _M(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		Df.exports = xM
	});
	var qf = E((mte, Rf) => {
		var TM = Pn();

		function IM(e) {
			var t = TM(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Rf.exports = IM
	});
	var kf = E((gte, Lf) => {
		var AM = Pn();

		function PM(e) {
			return AM(this, e).get(e)
		}
		Lf.exports = PM
	});
	var Bf = E((vte, Nf) => {
		var CM = Pn();

		function wM(e) {
			return CM(this, e).has(e)
		}
		Nf.exports = wM
	});
	var Gf = E((yte, Vf) => {
		var MM = Pn();

		function FM(e, t) {
			var r = MM(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Vf.exports = FM
	});
	var Bi = E((Ete, zf) => {
		var OM = Mf(),
			DM = qf(),
			RM = kf(),
			qM = Bf(),
			LM = Gf();

		function kr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		kr.prototype.clear = OM;
		kr.prototype.delete = DM;
		kr.prototype.get = RM;
		kr.prototype.has = qM;
		kr.prototype.set = LM;
		zf.exports = kr
	});
	var jf = E((bte, Hf) => {
		var kM = Tn(),
			NM = Ni(),
			BM = Bi(),
			VM = 200;

		function GM(e, t) {
			var r = this.__data__;
			if (r instanceof kM) {
				var n = r.__data__;
				if (!NM || n.length < VM - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new BM(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		Hf.exports = GM
	});
	var no = E((Ste, Uf) => {
		var zM = Tn(),
			HM = Rc(),
			jM = Lc(),
			UM = Nc(),
			WM = Vc(),
			XM = jf();

		function Nr(e) {
			var t = this.__data__ = new zM(e);
			this.size = t.size
		}
		Nr.prototype.clear = HM;
		Nr.prototype.delete = jM;
		Nr.prototype.get = UM;
		Nr.prototype.has = WM;
		Nr.prototype.set = XM;
		Uf.exports = Nr
	});
	var Xf = E((_te, Wf) => {
		var $M = "__lodash_hash_undefined__";

		function KM(e) {
			return this.__data__.set(e, $M), this
		}
		Wf.exports = KM
	});
	var Kf = E((xte, $f) => {
		function YM(e) {
			return this.__data__.has(e)
		}
		$f.exports = YM
	});
	var Qf = E((Tte, Yf) => {
		var QM = Bi(),
			ZM = Xf(),
			JM = Kf();

		function Vi(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new QM; ++t < r;) this.add(e[t])
		}
		Vi.prototype.add = Vi.prototype.push = ZM;
		Vi.prototype.has = JM;
		Yf.exports = Vi
	});
	var Jf = E((Ite, Zf) => {
		function eF(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		Zf.exports = eF
	});
	var tp = E((Ate, ep) => {
		function tF(e, t) {
			return e.has(t)
		}
		ep.exports = tF
	});
	var io = E((Pte, rp) => {
		var rF = Qf(),
			nF = Jf(),
			iF = tp(),
			aF = 1,
			sF = 2;

		function oF(e, t, r, n, i, a) {
			var s = r & aF,
				o = e.length,
				l = t.length;
			if (o != l && !(s && l > o)) return !1;
			var c = a.get(e),
				u = a.get(t);
			if (c && u) return c == t && u == e;
			var f = -1,
				m = !0,
				d = r & sF ? new rF : void 0;
			for (a.set(e, t), a.set(t, e); ++f < o;) {
				var p = e[f],
					g = t[f];
				if (n) var h = s ? n(g, p, f, t, e, a) : n(p, g, f, e, t, a);
				if (h !== void 0) {
					if (h) continue;
					m = !1;
					break
				}
				if (d) {
					if (!nF(t, function(v, y) {
							if (!iF(d, y) && (p === v || i(p, v, r, n, a))) return d.push(y)
						})) {
						m = !1;
						break
					}
				} else if (!(p === g || i(p, g, r, n, a))) {
					m = !1;
					break
				}
			}
			return a.delete(e), a.delete(t), m
		}
		rp.exports = oF
	});
	var ip = E((Cte, np) => {
		var lF = mt(),
			uF = lF.Uint8Array;
		np.exports = uF
	});
	var sp = E((wte, ap) => {
		function hF(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		ap.exports = hF
	});
	var lp = E((Mte, op) => {
		function cF(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		op.exports = cF
	});
	var pp = E((Fte, fp) => {
		var up = qr(),
			hp = ip(),
			fF = ki(),
			pF = io(),
			dF = sp(),
			mF = lp(),
			gF = 1,
			vF = 2,
			yF = "[object Boolean]",
			EF = "[object Date]",
			bF = "[object Error]",
			SF = "[object Map]",
			_F = "[object Number]",
			xF = "[object RegExp]",
			TF = "[object Set]",
			IF = "[object String]",
			AF = "[object Symbol]",
			PF = "[object ArrayBuffer]",
			CF = "[object DataView]",
			cp = up ? up.prototype : void 0,
			ao = cp ? cp.valueOf : void 0;

		function wF(e, t, r, n, i, a, s) {
			switch (r) {
				case CF:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case PF:
					return !(e.byteLength != t.byteLength || !a(new hp(e), new hp(t)));
				case yF:
				case EF:
				case _F:
					return fF(+e, +t);
				case bF:
					return e.name == t.name && e.message == t.message;
				case xF:
				case IF:
					return e == t + "";
				case SF:
					var o = dF;
				case TF:
					var l = n & gF;
					if (o || (o = mF), e.size != t.size && !l) return !1;
					var c = s.get(e);
					if (c) return c == t;
					n |= vF, s.set(e, t);
					var u = pF(o(e), o(t), n, i, a, s);
					return s.delete(e), u;
				case AF:
					if (ao) return ao.call(e) == ao.call(t)
			}
			return !1
		}
		fp.exports = wF
	});
	var Gi = E((Ote, dp) => {
		function MF(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		dp.exports = MF
	});
	var De = E((Dte, mp) => {
		var FF = Array.isArray;
		mp.exports = FF
	});
	var so = E((Rte, gp) => {
		var OF = Gi(),
			DF = De();

		function RF(e, t, r) {
			var n = t(e);
			return DF(e) ? n : OF(n, r(e))
		}
		gp.exports = RF
	});
	var yp = E((qte, vp) => {
		function qF(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
				var s = e[r];
				t(s, r, e) && (a[i++] = s)
			}
			return a
		}
		vp.exports = qF
	});
	var oo = E((Lte, Ep) => {
		function LF() {
			return []
		}
		Ep.exports = LF
	});
	var lo = E((kte, Sp) => {
		var kF = yp(),
			NF = oo(),
			BF = Object.prototype,
			VF = BF.propertyIsEnumerable,
			bp = Object.getOwnPropertySymbols,
			GF = bp ? function(e) {
				return e == null ? [] : (e = Object(e), kF(bp(e), function(t) {
					return VF.call(e, t)
				}))
			} : NF;
		Sp.exports = GF
	});
	var xp = E((Nte, _p) => {
		function zF(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		_p.exports = zF
	});
	var Lt = E((Bte, Tp) => {
		function HF(e) {
			return e != null && typeof e == "object"
		}
		Tp.exports = HF
	});
	var Ap = E((Vte, Ip) => {
		var jF = Qt(),
			UF = Lt(),
			WF = "[object Arguments]";

		function XF(e) {
			return UF(e) && jF(e) == WF
		}
		Ip.exports = XF
	});
	var Cn = E((Gte, wp) => {
		var Pp = Ap(),
			$F = Lt(),
			Cp = Object.prototype,
			KF = Cp.hasOwnProperty,
			YF = Cp.propertyIsEnumerable,
			QF = Pp(function() {
				return arguments
			}()) ? Pp : function(e) {
				return $F(e) && KF.call(e, "callee") && !YF.call(e, "callee")
			};
		wp.exports = QF
	});
	var Fp = E((zte, Mp) => {
		function ZF() {
			return !1
		}
		Mp.exports = ZF
	});
	var zi = E((wn, Br) => {
		var JF = mt(),
			eO = Fp(),
			Rp = typeof wn == "object" && wn && !wn.nodeType && wn,
			Op = Rp && typeof Br == "object" && Br && !Br.nodeType && Br,
			tO = Op && Op.exports === Rp,
			Dp = tO ? JF.Buffer : void 0,
			rO = Dp ? Dp.isBuffer : void 0,
			nO = rO || eO;
		Br.exports = nO
	});
	var Hi = E((Hte, qp) => {
		var iO = 9007199254740991,
			aO = /^(?:0|[1-9]\d*)$/;

		function sO(e, t) {
			var r = typeof e;
			return t = t ? ? iO, !!t && (r == "number" || r != "symbol" && aO.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		qp.exports = sO
	});
	var ji = E((jte, Lp) => {
		var oO = 9007199254740991;

		function lO(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oO
		}
		Lp.exports = lO
	});
	var Np = E((Ute, kp) => {
		var uO = Qt(),
			hO = ji(),
			cO = Lt(),
			fO = "[object Arguments]",
			pO = "[object Array]",
			dO = "[object Boolean]",
			mO = "[object Date]",
			gO = "[object Error]",
			vO = "[object Function]",
			yO = "[object Map]",
			EO = "[object Number]",
			bO = "[object Object]",
			SO = "[object RegExp]",
			_O = "[object Set]",
			xO = "[object String]",
			TO = "[object WeakMap]",
			IO = "[object ArrayBuffer]",
			AO = "[object DataView]",
			PO = "[object Float32Array]",
			CO = "[object Float64Array]",
			wO = "[object Int8Array]",
			MO = "[object Int16Array]",
			FO = "[object Int32Array]",
			OO = "[object Uint8Array]",
			DO = "[object Uint8ClampedArray]",
			RO = "[object Uint16Array]",
			qO = "[object Uint32Array]",
			me = {};
		me[PO] = me[CO] = me[wO] = me[MO] = me[FO] = me[OO] = me[DO] = me[RO] = me[qO] = !0;
		me[fO] = me[pO] = me[IO] = me[dO] = me[AO] = me[mO] = me[gO] = me[vO] = me[yO] = me[EO] = me[bO] = me[SO] = me[_O] = me[xO] = me[TO] = !1;

		function LO(e) {
			return cO(e) && hO(e.length) && !!me[uO(e)]
		}
		kp.exports = LO
	});
	var Vp = E((Wte, Bp) => {
		function kO(e) {
			return function(t) {
				return e(t)
			}
		}
		Bp.exports = kO
	});
	var zp = E((Mn, Vr) => {
		var NO = Js(),
			Gp = typeof Mn == "object" && Mn && !Mn.nodeType && Mn,
			Fn = Gp && typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
			BO = Fn && Fn.exports === Gp,
			uo = BO && NO.process,
			VO = function() {
				try {
					var e = Fn && Fn.require && Fn.require("util").types;
					return e || uo && uo.binding && uo.binding("util")
				} catch {}
			}();
		Vr.exports = VO
	});
	var Ui = E((Xte, Up) => {
		var GO = Np(),
			zO = Vp(),
			Hp = zp(),
			jp = Hp && Hp.isTypedArray,
			HO = jp ? zO(jp) : GO;
		Up.exports = HO
	});
	var ho = E(($te, Wp) => {
		var jO = xp(),
			UO = Cn(),
			WO = De(),
			XO = zi(),
			$O = Hi(),
			KO = Ui(),
			YO = Object.prototype,
			QO = YO.hasOwnProperty;

		function ZO(e, t) {
			var r = WO(e),
				n = !r && UO(e),
				i = !r && !n && XO(e),
				a = !r && !n && !i && KO(e),
				s = r || n || i || a,
				o = s ? jO(e.length, String) : [],
				l = o.length;
			for (var c in e)(t || QO.call(e, c)) && !(s && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || $O(c, l))) && o.push(c);
			return o
		}
		Wp.exports = ZO
	});
	var Wi = E((Kte, Xp) => {
		var JO = Object.prototype;

		function eD(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || JO;
			return e === r
		}
		Xp.exports = eD
	});
	var co = E((Yte, $p) => {
		function tD(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		$p.exports = tD
	});
	var Yp = E((Qte, Kp) => {
		var rD = co(),
			nD = rD(Object.keys, Object);
		Kp.exports = nD
	});
	var Xi = E((Zte, Qp) => {
		var iD = Wi(),
			aD = Yp(),
			sD = Object.prototype,
			oD = sD.hasOwnProperty;

		function lD(e) {
			if (!iD(e)) return aD(e);
			var t = [];
			for (var r in Object(e)) oD.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		Qp.exports = lD
	});
	var dr = E((Jte, Zp) => {
		var uD = eo(),
			hD = ji();

		function cD(e) {
			return e != null && hD(e.length) && !uD(e)
		}
		Zp.exports = cD
	});
	var On = E((ere, Jp) => {
		var fD = ho(),
			pD = Xi(),
			dD = dr();

		function mD(e) {
			return dD(e) ? fD(e) : pD(e)
		}
		Jp.exports = mD
	});
	var td = E((tre, ed) => {
		var gD = so(),
			vD = lo(),
			yD = On();

		function ED(e) {
			return gD(e, yD, vD)
		}
		ed.exports = ED
	});
	var id = E((rre, nd) => {
		var rd = td(),
			bD = 1,
			SD = Object.prototype,
			_D = SD.hasOwnProperty;

		function xD(e, t, r, n, i, a) {
			var s = r & bD,
				o = rd(e),
				l = o.length,
				c = rd(t),
				u = c.length;
			if (l != u && !s) return !1;
			for (var f = l; f--;) {
				var m = o[f];
				if (!(s ? m in t : _D.call(t, m))) return !1
			}
			var d = a.get(e),
				p = a.get(t);
			if (d && p) return d == t && p == e;
			var g = !0;
			a.set(e, t), a.set(t, e);
			for (var h = s; ++f < l;) {
				m = o[f];
				var v = e[m],
					y = t[m];
				if (n) var b = s ? n(y, v, m, t, e, a) : n(v, y, m, e, t, a);
				if (!(b === void 0 ? v === y || i(v, y, r, n, a) : b)) {
					g = !1;
					break
				}
				h || (h = m == "constructor")
			}
			if (g && !h) {
				var S = e.constructor,
					_ = t.constructor;
				S != _ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (g = !1)
			}
			return a.delete(e), a.delete(t), g
		}
		nd.exports = xD
	});
	var sd = E((nre, ad) => {
		var TD = Zt(),
			ID = mt(),
			AD = TD(ID, "DataView");
		ad.exports = AD
	});
	var ld = E((ire, od) => {
		var PD = Zt(),
			CD = mt(),
			wD = PD(CD, "Promise");
		od.exports = wD
	});
	var hd = E((are, ud) => {
		var MD = Zt(),
			FD = mt(),
			OD = MD(FD, "Set");
		ud.exports = OD
	});
	var fo = E((sre, cd) => {
		var DD = Zt(),
			RD = mt(),
			qD = DD(RD, "WeakMap");
		cd.exports = qD
	});
	var $i = E((ore, yd) => {
		var po = sd(),
			mo = Ni(),
			go = ld(),
			vo = hd(),
			yo = fo(),
			vd = Qt(),
			Gr = ro(),
			fd = "[object Map]",
			LD = "[object Object]",
			pd = "[object Promise]",
			dd = "[object Set]",
			md = "[object WeakMap]",
			gd = "[object DataView]",
			kD = Gr(po),
			ND = Gr(mo),
			BD = Gr(go),
			VD = Gr(vo),
			GD = Gr(yo),
			mr = vd;
		(po && mr(new po(new ArrayBuffer(1))) != gd || mo && mr(new mo) != fd || go && mr(go.resolve()) != pd || vo && mr(new vo) != dd || yo && mr(new yo) != md) && (mr = function(e) {
			var t = vd(e),
				r = t == LD ? e.constructor : void 0,
				n = r ? Gr(r) : "";
			if (n) switch (n) {
				case kD:
					return gd;
				case ND:
					return fd;
				case BD:
					return pd;
				case VD:
					return dd;
				case GD:
					return md
			}
			return t
		});
		yd.exports = mr
	});
	var Ad = E((lre, Id) => {
		var Eo = no(),
			zD = io(),
			HD = pp(),
			jD = id(),
			Ed = $i(),
			bd = De(),
			Sd = zi(),
			UD = Ui(),
			WD = 1,
			_d = "[object Arguments]",
			xd = "[object Array]",
			Ki = "[object Object]",
			XD = Object.prototype,
			Td = XD.hasOwnProperty;

		function $D(e, t, r, n, i, a) {
			var s = bd(e),
				o = bd(t),
				l = s ? xd : Ed(e),
				c = o ? xd : Ed(t);
			l = l == _d ? Ki : l, c = c == _d ? Ki : c;
			var u = l == Ki,
				f = c == Ki,
				m = l == c;
			if (m && Sd(e)) {
				if (!Sd(t)) return !1;
				s = !0, u = !1
			}
			if (m && !u) return a || (a = new Eo), s || UD(e) ? zD(e, t, r, n, i, a) : HD(e, t, l, r, n, i, a);
			if (!(r & WD)) {
				var d = u && Td.call(e, "__wrapped__"),
					p = f && Td.call(t, "__wrapped__");
				if (d || p) {
					var g = d ? e.value() : e,
						h = p ? t.value() : t;
					return a || (a = new Eo), i(g, h, r, n, a)
				}
			}
			return m ? (a || (a = new Eo), jD(e, t, r, n, i, a)) : !1
		}
		Id.exports = $D
	});
	var bo = E((ure, wd) => {
		var KD = Ad(),
			Pd = Lt();

		function Cd(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !Pd(e) && !Pd(t) ? e !== e && t !== t : KD(e, t, r, n, Cd, i)
		}
		wd.exports = Cd
	});
	var Fd = E((hre, Md) => {
		var YD = no(),
			QD = bo(),
			ZD = 1,
			JD = 2;

		function eR(e, t, r, n) {
			var i = r.length,
				a = i,
				s = !n;
			if (e == null) return !a;
			for (e = Object(e); i--;) {
				var o = r[i];
				if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
			}
			for (; ++i < a;) {
				o = r[i];
				var l = o[0],
					c = e[l],
					u = o[1];
				if (s && o[2]) {
					if (c === void 0 && !(l in e)) return !1
				} else {
					var f = new YD;
					if (n) var m = n(c, u, l, e, t, f);
					if (!(m === void 0 ? QD(u, c, ZD | JD, n, f) : m)) return !1
				}
			}
			return !0
		}
		Md.exports = eR
	});
	var So = E((cre, Od) => {
		var tR = At();

		function rR(e) {
			return e === e && !tR(e)
		}
		Od.exports = rR
	});
	var Rd = E((fre, Dd) => {
		var nR = So(),
			iR = On();

		function aR(e) {
			for (var t = iR(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, nR(i)]
			}
			return t
		}
		Dd.exports = aR
	});
	var _o = E((pre, qd) => {
		function sR(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		qd.exports = sR
	});
	var kd = E((dre, Ld) => {
		var oR = Fd(),
			lR = Rd(),
			uR = _o();

		function hR(e) {
			var t = lR(e);
			return t.length == 1 && t[0][2] ? uR(t[0][0], t[0][1]) : function(r) {
				return r === e || oR(r, e, t)
			}
		}
		Ld.exports = hR
	});
	var Dn = E((mre, Nd) => {
		var cR = Qt(),
			fR = Lt(),
			pR = "[object Symbol]";

		function dR(e) {
			return typeof e == "symbol" || fR(e) && cR(e) == pR
		}
		Nd.exports = dR
	});
	var Yi = E((gre, Bd) => {
		var mR = De(),
			gR = Dn(),
			vR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			yR = /^\w*$/;

		function ER(e, t) {
			if (mR(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || gR(e) ? !0 : yR.test(e) || !vR.test(e) || t != null && e in Object(t)
		}
		Bd.exports = ER
	});
	var zd = E((vre, Gd) => {
		var Vd = Bi(),
			bR = "Expected a function";

		function xo(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(bR);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					a = r.cache;
				if (a.has(i)) return a.get(i);
				var s = e.apply(this, n);
				return r.cache = a.set(i, s) || a, s
			};
			return r.cache = new(xo.Cache || Vd), r
		}
		xo.Cache = Vd;
		Gd.exports = xo
	});
	var jd = E((yre, Hd) => {
		var SR = zd(),
			_R = 500;

		function xR(e) {
			var t = SR(e, function(n) {
					return r.size === _R && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		Hd.exports = xR
	});
	var Wd = E((Ere, Ud) => {
		var TR = jd(),
			IR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			AR = /\\(\\)?/g,
			PR = TR(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(IR, function(r, n, i, a) {
					t.push(i ? a.replace(AR, "$1") : n || r)
				}), t
			});
		Ud.exports = PR
	});
	var To = E((bre, Xd) => {
		function CR(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		Xd.exports = CR
	});
	var Jd = E((Sre, Zd) => {
		var $d = qr(),
			wR = To(),
			MR = De(),
			FR = Dn(),
			OR = 1 / 0,
			Kd = $d ? $d.prototype : void 0,
			Yd = Kd ? Kd.toString : void 0;

		function Qd(e) {
			if (typeof e == "string") return e;
			if (MR(e)) return wR(e, Qd) + "";
			if (FR(e)) return Yd ? Yd.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -OR ? "-0" : t
		}
		Zd.exports = Qd
	});
	var tm = E((_re, em) => {
		var DR = Jd();

		function RR(e) {
			return e == null ? "" : DR(e)
		}
		em.exports = RR
	});
	var Rn = E((xre, rm) => {
		var qR = De(),
			LR = Yi(),
			kR = Wd(),
			NR = tm();

		function BR(e, t) {
			return qR(e) ? e : LR(e, t) ? [e] : kR(NR(e))
		}
		rm.exports = BR
	});
	var zr = E((Tre, nm) => {
		var VR = Dn(),
			GR = 1 / 0;

		function zR(e) {
			if (typeof e == "string" || VR(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -GR ? "-0" : t
		}
		nm.exports = zR
	});
	var Qi = E((Ire, im) => {
		var HR = Rn(),
			jR = zr();

		function UR(e, t) {
			t = HR(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[jR(t[r++])];
			return r && r == n ? e : void 0
		}
		im.exports = UR
	});
	var Zi = E((Are, am) => {
		var WR = Qi();

		function XR(e, t, r) {
			var n = e == null ? void 0 : WR(e, t);
			return n === void 0 ? r : n
		}
		am.exports = XR
	});
	var om = E((Pre, sm) => {
		function $R(e, t) {
			return e != null && t in Object(e)
		}
		sm.exports = $R
	});
	var um = E((Cre, lm) => {
		var KR = Rn(),
			YR = Cn(),
			QR = De(),
			ZR = Hi(),
			JR = ji(),
			eq = zr();

		function tq(e, t, r) {
			t = KR(t, e);
			for (var n = -1, i = t.length, a = !1; ++n < i;) {
				var s = eq(t[n]);
				if (!(a = e != null && r(e, s))) break;
				e = e[s]
			}
			return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && JR(i) && ZR(s, i) && (QR(e) || YR(e)))
		}
		lm.exports = tq
	});
	var cm = E((wre, hm) => {
		var rq = om(),
			nq = um();

		function iq(e, t) {
			return e != null && nq(e, t, rq)
		}
		hm.exports = iq
	});
	var pm = E((Mre, fm) => {
		var aq = bo(),
			sq = Zi(),
			oq = cm(),
			lq = Yi(),
			uq = So(),
			hq = _o(),
			cq = zr(),
			fq = 1,
			pq = 2;

		function dq(e, t) {
			return lq(e) && uq(t) ? hq(cq(e), t) : function(r) {
				var n = sq(r, e);
				return n === void 0 && n === t ? oq(r, e) : aq(t, n, fq | pq)
			}
		}
		fm.exports = dq
	});
	var Ji = E((Fre, dm) => {
		function mq(e) {
			return e
		}
		dm.exports = mq
	});
	var Io = E((Ore, mm) => {
		function gq(e) {
			return function(t) {
				return t?. [e]
			}
		}
		mm.exports = gq
	});
	var vm = E((Dre, gm) => {
		var vq = Qi();

		function yq(e) {
			return function(t) {
				return vq(t, e)
			}
		}
		gm.exports = yq
	});
	var Em = E((Rre, ym) => {
		var Eq = Io(),
			bq = vm(),
			Sq = Yi(),
			_q = zr();

		function xq(e) {
			return Sq(e) ? Eq(_q(e)) : bq(e)
		}
		ym.exports = xq
	});
	var Jt = E((qre, bm) => {
		var Tq = kd(),
			Iq = pm(),
			Aq = Ji(),
			Pq = De(),
			Cq = Em();

		function wq(e) {
			return typeof e == "function" ? e : e == null ? Aq : typeof e == "object" ? Pq(e) ? Iq(e[0], e[1]) : Tq(e) : Cq(e)
		}
		bm.exports = wq
	});
	var _m = E((Lre, Sm) => {
		var Mq = /\s/;

		function Fq(e) {
			for (var t = e.length; t-- && Mq.test(e.charAt(t)););
			return t
		}
		Sm.exports = Fq
	});
	var Tm = E((kre, xm) => {
		var Oq = _m(),
			Dq = /^\s+/;

		function Rq(e) {
			return e && e.slice(0, Oq(e) + 1).replace(Dq, "")
		}
		xm.exports = Rq
	});
	var ea = E((Nre, Pm) => {
		var qq = Tm(),
			Im = At(),
			Lq = Dn(),
			Am = 0 / 0,
			kq = /^[-+]0x[0-9a-f]+$/i,
			Nq = /^0b[01]+$/i,
			Bq = /^0o[0-7]+$/i,
			Vq = parseInt;

		function Gq(e) {
			if (typeof e == "number") return e;
			if (Lq(e)) return Am;
			if (Im(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = Im(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = qq(e);
			var r = Nq.test(e);
			return r || Bq.test(e) ? Vq(e.slice(2), r ? 2 : 8) : kq.test(e) ? Am : +e
		}
		Pm.exports = Gq
	});
	var Mm = E((Bre, wm) => {
		var zq = ea(),
			Cm = 1 / 0,
			Hq = 17976931348623157e292;

		function jq(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = zq(e), e === Cm || e === -Cm) {
				var t = e < 0 ? -1 : 1;
				return t * Hq
			}
			return e === e ? e : 0
		}
		wm.exports = jq
	});
	var Ao = E((Vre, Fm) => {
		var Uq = Mm();

		function Wq(e) {
			var t = Uq(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		Fm.exports = Wq
	});
	var Po = E((Gre, Om) => {
		var Xq = Zs(),
			$q = Jt(),
			Kq = Ao(),
			Yq = Math.max;

		function Qq(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : Kq(r);
			return i < 0 && (i = Yq(n + i, 0)), Xq(e, $q(t, 3), i)
		}
		Om.exports = Qq
	});
	var te = E((zre, Dm) => {
		var ta = function(e) {
			return e && e.Math == Math && e
		};
		Dm.exports = ta(typeof globalThis == "object" && globalThis) || ta(typeof window == "object" && window) || ta(typeof self == "object" && self) || ta(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var Fe = E((Hre, Rm) => {
		Rm.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var gt = E((jre, qm) => {
		var Zq = Fe();
		qm.exports = !Zq(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var nt = E((Ure, Lm) => {
		var qn = Function.prototype.call;
		Lm.exports = qn.bind ? qn.bind(qn) : function() {
			return qn.apply(qn, arguments)
		}
	});
	var Vm = E(Bm => {
		"use strict";
		var km = {}.propertyIsEnumerable,
			Nm = Object.getOwnPropertyDescriptor,
			Jq = Nm && !km.call({
				1: 2
			}, 1);
		Bm.f = Jq ? function(t) {
			var r = Nm(this, t);
			return !!r && r.enumerable
		} : km
	});
	var Ln = E((Xre, Gm) => {
		Gm.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var ge = E(($re, Hm) => {
		var zm = Function.prototype,
			Co = zm.bind,
			wo = zm.call,
			e2 = Co && Co.bind(wo);
		Hm.exports = Co ? function(e) {
			return e && e2(wo, e)
		} : function(e) {
			return e && function() {
				return wo.apply(e, arguments)
			}
		}
	});
	var Hr = E((Kre, Um) => {
		var jm = ge(),
			t2 = jm({}.toString),
			r2 = jm("".slice);
		Um.exports = function(e) {
			return r2(t2(e), 8, -1)
		}
	});
	var gr = E((Yre, Wm) => {
		var n2 = te(),
			i2 = ge(),
			a2 = Fe(),
			s2 = Hr(),
			Mo = n2.Object,
			o2 = i2("".split);
		Wm.exports = a2(function() {
			return !Mo("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return s2(e) == "String" ? o2(e, "") : Mo(e)
		} : Mo
	});
	var ra = E((Qre, Xm) => {
		var l2 = te(),
			u2 = l2.TypeError;
		Xm.exports = function(e) {
			if (e == null) throw u2("Can't call method on " + e);
			return e
		}
	});
	var Pt = E((Zre, $m) => {
		var h2 = gr(),
			c2 = ra();
		$m.exports = function(e) {
			return h2(c2(e))
		}
	});
	var Se = E((Jre, Km) => {
		Km.exports = function(e) {
			return typeof e == "function"
		}
	});
	var He = E((ene, Ym) => {
		var f2 = Se();
		Ym.exports = function(e) {
			return typeof e == "object" ? e !== null : f2(e)
		}
	});
	var it = E((tne, Qm) => {
		var Fo = te(),
			p2 = Se(),
			d2 = function(e) {
				return p2(e) ? e : void 0
			};
		Qm.exports = function(e, t) {
			return arguments.length < 2 ? d2(Fo[e]) : Fo[e] && Fo[e][t]
		}
	});
	var na = E((rne, Zm) => {
		var m2 = ge();
		Zm.exports = m2({}.isPrototypeOf)
	});
	var er = E((nne, Jm) => {
		var g2 = it();
		Jm.exports = g2("navigator", "userAgent") || ""
	});
	var tr = E((ine, ag) => {
		var ig = te(),
			Oo = er(),
			eg = ig.process,
			tg = ig.Deno,
			rg = eg && eg.versions || tg && tg.version,
			ng = rg && rg.v8,
			vt, ia;
		ng && (vt = ng.split("."), ia = vt[0] > 0 && vt[0] < 4 ? 1 : +(vt[0] + vt[1]));
		!ia && Oo && (vt = Oo.match(/Edge\/(\d+)/), (!vt || vt[1] >= 74) && (vt = Oo.match(/Chrome\/(\d+)/), vt && (ia = +vt[1])));
		ag.exports = ia
	});
	var Do = E((ane, og) => {
		var sg = tr(),
			v2 = Fe();
		og.exports = !!Object.getOwnPropertySymbols && !v2(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && sg && sg < 41
		})
	});
	var Ro = E((sne, lg) => {
		var y2 = Do();
		lg.exports = y2 && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var qo = E((one, ug) => {
		var E2 = te(),
			b2 = it(),
			S2 = Se(),
			_2 = na(),
			x2 = Ro(),
			T2 = E2.Object;
		ug.exports = x2 ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = b2("Symbol");
			return S2(t) && _2(t.prototype, T2(e))
		}
	});
	var kn = E((lne, hg) => {
		var I2 = te(),
			A2 = I2.String;
		hg.exports = function(e) {
			try {
				return A2(e)
			} catch {
				return "Object"
			}
		}
	});
	var yt = E((une, cg) => {
		var P2 = te(),
			C2 = Se(),
			w2 = kn(),
			M2 = P2.TypeError;
		cg.exports = function(e) {
			if (C2(e)) return e;
			throw M2(w2(e) + " is not a function")
		}
	});
	var rr = E((hne, fg) => {
		var F2 = yt();
		fg.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : F2(r)
		}
	});
	var dg = E((cne, pg) => {
		var O2 = te(),
			Lo = nt(),
			ko = Se(),
			No = He(),
			D2 = O2.TypeError;
		pg.exports = function(e, t) {
			var r, n;
			if (t === "string" && ko(r = e.toString) && !No(n = Lo(r, e)) || ko(r = e.valueOf) && !No(n = Lo(r, e)) || t !== "string" && ko(r = e.toString) && !No(n = Lo(r, e))) return n;
			throw D2("Can't convert object to primitive value")
		}
	});
	var jr = E((fne, mg) => {
		mg.exports = !1
	});
	var aa = E((pne, vg) => {
		var gg = te(),
			R2 = Object.defineProperty;
		vg.exports = function(e, t) {
			try {
				R2(gg, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				gg[e] = t
			}
			return t
		}
	});
	var Nn = E((dne, Eg) => {
		var q2 = te(),
			L2 = aa(),
			yg = "__core-js_shared__",
			k2 = q2[yg] || L2(yg, {});
		Eg.exports = k2
	});
	var Bo = E((mne, Sg) => {
		var N2 = jr(),
			bg = Nn();
		(Sg.exports = function(e, t) {
			return bg[e] || (bg[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: N2 ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var Ie = E((gne, _g) => {
		var B2 = te(),
			V2 = ra(),
			G2 = B2.Object;
		_g.exports = function(e) {
			return G2(V2(e))
		}
	});
	var at = E((vne, xg) => {
		var z2 = ge(),
			H2 = Ie(),
			j2 = z2({}.hasOwnProperty);
		xg.exports = Object.hasOwn || function(t, r) {
			return j2(H2(t), r)
		}
	});
	var sa = E((yne, Tg) => {
		var U2 = ge(),
			W2 = 0,
			X2 = Math.random(),
			$2 = U2(1.toString);
		Tg.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + $2(++W2 + X2, 36)
		}
	});
	var _e = E((Ene, wg) => {
		var K2 = te(),
			Y2 = Bo(),
			Ig = at(),
			Q2 = sa(),
			Ag = Do(),
			Cg = Ro(),
			Ur = Y2("wks"),
			vr = K2.Symbol,
			Pg = vr && vr.for,
			Z2 = Cg ? vr : vr && vr.withoutSetter || Q2;
		wg.exports = function(e) {
			if (!Ig(Ur, e) || !(Ag || typeof Ur[e] == "string")) {
				var t = "Symbol." + e;
				Ag && Ig(vr, e) ? Ur[e] = vr[e] : Cg && Pg ? Ur[e] = Pg(t) : Ur[e] = Z2(t)
			}
			return Ur[e]
		}
	});
	var Dg = E((bne, Og) => {
		var J2 = te(),
			eL = nt(),
			Mg = He(),
			Fg = qo(),
			tL = rr(),
			rL = dg(),
			nL = _e(),
			iL = J2.TypeError,
			aL = nL("toPrimitive");
		Og.exports = function(e, t) {
			if (!Mg(e) || Fg(e)) return e;
			var r = tL(e, aL),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = eL(r, e, t), !Mg(n) || Fg(n)) return n;
				throw iL("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), rL(e, t)
		}
	});
	var Bn = E((Sne, Rg) => {
		var sL = Dg(),
			oL = qo();
		Rg.exports = function(e) {
			var t = sL(e, "string");
			return oL(t) ? t : t + ""
		}
	});
	var oa = E((_ne, Lg) => {
		var lL = te(),
			qg = He(),
			Vo = lL.document,
			uL = qg(Vo) && qg(Vo.createElement);
		Lg.exports = function(e) {
			return uL ? Vo.createElement(e) : {}
		}
	});
	var Go = E((xne, kg) => {
		var hL = gt(),
			cL = Fe(),
			fL = oa();
		kg.exports = !hL && !cL(function() {
			return Object.defineProperty(fL("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var la = E(Bg => {
		var pL = gt(),
			dL = nt(),
			mL = Vm(),
			gL = Ln(),
			vL = Pt(),
			yL = Bn(),
			EL = at(),
			bL = Go(),
			Ng = Object.getOwnPropertyDescriptor;
		Bg.f = pL ? Ng : function(t, r) {
			if (t = vL(t), r = yL(r), bL) try {
				return Ng(t, r)
			} catch {}
			if (EL(t, r)) return gL(!dL(mL.f, t, r), t[r])
		}
	});
	var Ne = E((Ine, Gg) => {
		var Vg = te(),
			SL = He(),
			_L = Vg.String,
			xL = Vg.TypeError;
		Gg.exports = function(e) {
			if (SL(e)) return e;
			throw xL(_L(e) + " is not an object")
		}
	});
	var st = E(jg => {
		var TL = te(),
			IL = gt(),
			AL = Go(),
			zg = Ne(),
			PL = Bn(),
			CL = TL.TypeError,
			Hg = Object.defineProperty;
		jg.f = IL ? Hg : function(t, r, n) {
			if (zg(t), r = PL(r), zg(n), AL) try {
				return Hg(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw CL("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var Vn = E((Pne, Ug) => {
		var wL = gt(),
			ML = st(),
			FL = Ln();
		Ug.exports = wL ? function(e, t, r) {
			return ML.f(e, t, FL(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var Gn = E((Cne, Wg) => {
		var OL = ge(),
			DL = Se(),
			zo = Nn(),
			RL = OL(Function.toString);
		DL(zo.inspectSource) || (zo.inspectSource = function(e) {
			return RL(e)
		});
		Wg.exports = zo.inspectSource
	});
	var Kg = E((wne, $g) => {
		var qL = te(),
			LL = Se(),
			kL = Gn(),
			Xg = qL.WeakMap;
		$g.exports = LL(Xg) && /native code/.test(kL(Xg))
	});
	var ua = E((Mne, Qg) => {
		var NL = Bo(),
			BL = sa(),
			Yg = NL("keys");
		Qg.exports = function(e) {
			return Yg[e] || (Yg[e] = BL(e))
		}
	});
	var zn = E((Fne, Zg) => {
		Zg.exports = {}
	});
	var Er = E((One, nv) => {
		var VL = Kg(),
			rv = te(),
			Ho = ge(),
			GL = He(),
			zL = Vn(),
			jo = at(),
			Uo = Nn(),
			HL = ua(),
			jL = zn(),
			Jg = "Object already initialized",
			Xo = rv.TypeError,
			UL = rv.WeakMap,
			ha, Hn, ca, WL = function(e) {
				return ca(e) ? Hn(e) : ha(e, {})
			},
			XL = function(e) {
				return function(t) {
					var r;
					if (!GL(t) || (r = Hn(t)).type !== e) throw Xo("Incompatible receiver, " + e + " required");
					return r
				}
			};
		VL || Uo.state ? (nr = Uo.state || (Uo.state = new UL), ev = Ho(nr.get), Wo = Ho(nr.has), tv = Ho(nr.set), ha = function(e, t) {
			if (Wo(nr, e)) throw new Xo(Jg);
			return t.facade = e, tv(nr, e, t), t
		}, Hn = function(e) {
			return ev(nr, e) || {}
		}, ca = function(e) {
			return Wo(nr, e)
		}) : (yr = HL("state"), jL[yr] = !0, ha = function(e, t) {
			if (jo(e, yr)) throw new Xo(Jg);
			return t.facade = e, zL(e, yr, t), t
		}, Hn = function(e) {
			return jo(e, yr) ? e[yr] : {}
		}, ca = function(e) {
			return jo(e, yr)
		});
		var nr, ev, Wo, tv, yr;
		nv.exports = {
			set: ha,
			get: Hn,
			has: ca,
			enforce: WL,
			getterFor: XL
		}
	});
	var Yo = E((Dne, av) => {
		var $o = gt(),
			$L = at(),
			iv = Function.prototype,
			KL = $o && Object.getOwnPropertyDescriptor,
			Ko = $L(iv, "name"),
			YL = Ko && function() {}.name === "something",
			QL = Ko && (!$o || $o && KL(iv, "name").configurable);
		av.exports = {
			EXISTS: Ko,
			PROPER: YL,
			CONFIGURABLE: QL
		}
	});
	var kt = E((Rne, uv) => {
		var ZL = te(),
			sv = Se(),
			JL = at(),
			ov = Vn(),
			ek = aa(),
			tk = Gn(),
			lv = Er(),
			rk = Yo().CONFIGURABLE,
			nk = lv.get,
			ik = lv.enforce,
			ak = String(String).split("String");
		(uv.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				a = n ? !!n.enumerable : !1,
				s = n ? !!n.noTargetGet : !1,
				o = n && n.name !== void 0 ? n.name : t,
				l;
			if (sv(r) && (String(o).slice(0, 7) === "Symbol(" && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!JL(r, "name") || rk && r.name !== o) && ov(r, "name", o), l = ik(r), l.source || (l.source = ak.join(typeof o == "string" ? o : ""))), e === ZL) {
				a ? e[t] = r : ek(t, r);
				return
			} else i ? !s && e[t] && (a = !0) : delete e[t];
			a ? e[t] = r : ov(e, t, r)
		})(Function.prototype, "toString", function() {
			return sv(this) && nk(this).source || tk(this)
		})
	});
	var ir = E((qne, hv) => {
		var sk = Math.ceil,
			ok = Math.floor;
		hv.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? ok : sk)(t)
		}
	});
	var Wr = E((Lne, cv) => {
		var lk = ir(),
			uk = Math.max,
			hk = Math.min;
		cv.exports = function(e, t) {
			var r = lk(e);
			return r < 0 ? uk(r + t, 0) : hk(r, t)
		}
	});
	var pv = E((kne, fv) => {
		var ck = ir(),
			fk = Math.min;
		fv.exports = function(e) {
			return e > 0 ? fk(ck(e), 9007199254740991) : 0
		}
	});
	var ye = E((Nne, dv) => {
		var pk = pv();
		dv.exports = function(e) {
			return pk(e.length)
		}
	});
	var fa = E((Bne, gv) => {
		var dk = Pt(),
			mk = Wr(),
			gk = ye(),
			mv = function(e) {
				return function(t, r, n) {
					var i = dk(t),
						a = gk(i),
						s = mk(n, a),
						o;
					if (e && r != r) {
						for (; a > s;)
							if (o = i[s++], o != o) return !0
					} else
						for (; a > s; s++)
							if ((e || s in i) && i[s] === r) return e || s || 0;
					return !e && -1
				}
			};
		gv.exports = {
			includes: mv(!0),
			indexOf: mv(!1)
		}
	});
	var Zo = E((Vne, yv) => {
		var vk = ge(),
			Qo = at(),
			yk = Pt(),
			Ek = fa().indexOf,
			bk = zn(),
			vv = vk([].push);
		yv.exports = function(e, t) {
			var r = yk(e),
				n = 0,
				i = [],
				a;
			for (a in r) !Qo(bk, a) && Qo(r, a) && vv(i, a);
			for (; t.length > n;) Qo(r, a = t[n++]) && (~Ek(i, a) || vv(i, a));
			return i
		}
	});
	var pa = E((Gne, Ev) => {
		Ev.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var da = E(bv => {
		var Sk = Zo(),
			_k = pa(),
			xk = _k.concat("length", "prototype");
		bv.f = Object.getOwnPropertyNames || function(t) {
			return Sk(t, xk)
		}
	});
	var _v = E(Sv => {
		Sv.f = Object.getOwnPropertySymbols
	});
	var Tv = E((jne, xv) => {
		var Tk = it(),
			Ik = ge(),
			Ak = da(),
			Pk = _v(),
			Ck = Ne(),
			wk = Ik([].concat);
		xv.exports = Tk("Reflect", "ownKeys") || function(t) {
			var r = Ak.f(Ck(t)),
				n = Pk.f;
			return n ? wk(r, n(t)) : r
		}
	});
	var Av = E((Une, Iv) => {
		var Mk = at(),
			Fk = Tv(),
			Ok = la(),
			Dk = st();
		Iv.exports = function(e, t) {
			for (var r = Fk(t), n = Dk.f, i = Ok.f, a = 0; a < r.length; a++) {
				var s = r[a];
				Mk(e, s) || n(e, s, i(t, s))
			}
		}
	});
	var ma = E((Wne, Pv) => {
		var Rk = Fe(),
			qk = Se(),
			Lk = /#|\.prototype\./,
			jn = function(e, t) {
				var r = Nk[kk(e)];
				return r == Vk ? !0 : r == Bk ? !1 : qk(t) ? Rk(t) : !!t
			},
			kk = jn.normalize = function(e) {
				return String(e).replace(Lk, ".").toLowerCase()
			},
			Nk = jn.data = {},
			Bk = jn.NATIVE = "N",
			Vk = jn.POLYFILL = "P";
		Pv.exports = jn
	});
	var se = E((Xne, Cv) => {
		var Jo = te(),
			Gk = la().f,
			zk = Vn(),
			Hk = kt(),
			jk = aa(),
			Uk = Av(),
			Wk = ma();
		Cv.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				a, s, o, l, c, u;
			if (n ? s = Jo : i ? s = Jo[r] || jk(r, {}) : s = (Jo[r] || {}).prototype, s)
				for (o in t) {
					if (c = t[o], e.noTargetGet ? (u = Gk(s, o), l = u && u.value) : l = s[o], a = Wk(n ? o : r + (i ? "." : "#") + o, e.forced), !a && l !== void 0) {
						if (typeof c == typeof l) continue;
						Uk(c, l)
					}(e.sham || l && l.sham) && zk(c, "sham", !0), Hk(s, o, c, e)
				}
		}
	});
	var Et = E(($ne, Fv) => {
		var wv = ge(),
			Xk = yt(),
			Mv = wv(wv.bind);
		Fv.exports = function(e, t) {
			return Xk(e), t === void 0 ? e : Mv ? Mv(e, t) : function() {
				return e.apply(t, arguments)
			}
		}
	});
	var el = E((Kne, Dv) => {
		var $k = nt(),
			Ov = Ne(),
			Kk = rr();
		Dv.exports = function(e, t, r) {
			var n, i;
			Ov(e);
			try {
				if (n = Kk(e, "return"), !n) {
					if (t === "throw") throw r;
					return r
				}
				n = $k(n, e)
			} catch (a) {
				i = !0, n = a
			}
			if (t === "throw") throw r;
			if (i) throw n;
			return Ov(n), r
		}
	});
	var qv = E((Yne, Rv) => {
		var Yk = Ne(),
			Qk = el();
		Rv.exports = function(e, t, r, n) {
			try {
				return n ? t(Yk(r)[0], r[1]) : t(r)
			} catch (i) {
				Qk(e, "throw", i)
			}
		}
	});
	var Xr = E((Qne, Lv) => {
		Lv.exports = {}
	});
	var tl = E((Zne, kv) => {
		var Zk = _e(),
			Jk = Xr(),
			eN = Zk("iterator"),
			tN = Array.prototype;
		kv.exports = function(e) {
			return e !== void 0 && (Jk.Array === e || tN[eN] === e)
		}
	});
	var ga = E((Jne, Bv) => {
		var rN = _e(),
			nN = rN("toStringTag"),
			Nv = {};
		Nv[nN] = "z";
		Bv.exports = String(Nv) === "[object z]"
	});
	var Un = E((eie, Vv) => {
		var iN = te(),
			aN = ga(),
			sN = Se(),
			va = Hr(),
			oN = _e(),
			lN = oN("toStringTag"),
			uN = iN.Object,
			hN = va(function() {
				return arguments
			}()) == "Arguments",
			cN = function(e, t) {
				try {
					return e[t]
				} catch {}
			};
		Vv.exports = aN ? va : function(e) {
			var t, r, n;
			return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = cN(t = uN(e), lN)) == "string" ? r : hN ? va(t) : (n = va(t)) == "Object" && sN(t.callee) ? "Arguments" : n
		}
	});
	var br = E((tie, jv) => {
		var fN = ge(),
			pN = Fe(),
			Gv = Se(),
			dN = Un(),
			mN = it(),
			gN = Gn(),
			zv = function() {},
			vN = [],
			Hv = mN("Reflect", "construct"),
			rl = /^\s*(?:class|function)\b/,
			yN = fN(rl.exec),
			EN = !rl.exec(zv),
			Wn = function(e) {
				if (!Gv(e)) return !1;
				try {
					return Hv(zv, vN, e), !0
				} catch {
					return !1
				}
			},
			bN = function(e) {
				if (!Gv(e)) return !1;
				switch (dN(e)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return !1
				}
				return EN || !!yN(rl, gN(e))
			};
		jv.exports = !Hv || pN(function() {
			var e;
			return Wn(Wn.call) || !Wn(Object) || !Wn(function() {
				e = !0
			}) || e
		}) ? bN : Wn
	});
	var $r = E((rie, Uv) => {
		"use strict";
		var SN = Bn(),
			_N = st(),
			xN = Ln();
		Uv.exports = function(e, t, r) {
			var n = SN(t);
			n in e ? _N.f(e, n, xN(0, r)) : e[n] = r
		}
	});
	var Xn = E((nie, Xv) => {
		var TN = Un(),
			Wv = rr(),
			IN = Xr(),
			AN = _e(),
			PN = AN("iterator");
		Xv.exports = function(e) {
			if (e != null) return Wv(e, PN) || Wv(e, "@@iterator") || IN[TN(e)]
		}
	});
	var $n = E((iie, $v) => {
		var CN = te(),
			wN = nt(),
			MN = yt(),
			FN = Ne(),
			ON = kn(),
			DN = Xn(),
			RN = CN.TypeError;
		$v.exports = function(e, t) {
			var r = arguments.length < 2 ? DN(e) : t;
			if (MN(r)) return FN(wN(r, e));
			throw RN(ON(e) + " is not iterable")
		}
	});
	var Zv = E((aie, Qv) => {
		"use strict";
		var qN = te(),
			LN = Et(),
			kN = nt(),
			NN = Ie(),
			BN = qv(),
			VN = tl(),
			GN = br(),
			zN = ye(),
			Kv = $r(),
			HN = $n(),
			jN = Xn(),
			Yv = qN.Array;
		Qv.exports = function(t) {
			var r = NN(t),
				n = GN(this),
				i = arguments.length,
				a = i > 1 ? arguments[1] : void 0,
				s = a !== void 0;
			s && (a = LN(a, i > 2 ? arguments[2] : void 0));
			var o = jN(r),
				l = 0,
				c, u, f, m, d, p;
			if (o && !(this == Yv && VN(o)))
				for (m = HN(r, o), d = m.next, u = n ? new this : []; !(f = kN(d, m)).done; l++) p = s ? BN(m, a, [f.value, l], !0) : f.value, Kv(u, l, p);
			else
				for (c = zN(r), u = n ? new this(c) : Yv(c); c > l; l++) p = s ? a(r[l], l) : r[l], Kv(u, l, p);
			return u.length = l, u
		}
	});
	var ya = E((sie, ry) => {
		var UN = _e(),
			ey = UN("iterator"),
			ty = !1;
		try {
			Jv = 0, nl = {
				next: function() {
					return {
						done: !!Jv++
					}
				},
				return: function() {
					ty = !0
				}
			}, nl[ey] = function() {
				return this
			}, Array.from(nl, function() {
				throw 2
			})
		} catch {}
		var Jv, nl;
		ry.exports = function(e, t) {
			if (!t && !ty) return !1;
			var r = !1;
			try {
				var n = {};
				n[ey] = function() {
					return {
						next: function() {
							return {
								done: r = !0
							}
						}
					}
				}, e(n)
			} catch {}
			return r
		}
	});
	var ny = E(() => {
		var WN = se(),
			XN = Zv(),
			$N = ya(),
			KN = !$N(function(e) {
				Array.from(e)
			});
		WN({
			target: "Array",
			stat: !0,
			forced: KN
		}, {
			from: XN
		})
	});
	var ar = E((uie, iy) => {
		var YN = Hr();
		iy.exports = Array.isArray || function(t) {
			return YN(t) == "Array"
		}
	});
	var ay = E(() => {
		var QN = se(),
			ZN = ar();
		QN({
			target: "Array",
			stat: !0
		}, {
			isArray: ZN
		})
	});
	var oy = E(() => {
		"use strict";
		var JN = se(),
			eB = te(),
			tB = Fe(),
			rB = br(),
			nB = $r(),
			sy = eB.Array,
			iB = tB(function() {
				function e() {}
				return !(sy.of.call(e) instanceof e)
			});
		JN({
			target: "Array",
			stat: !0,
			forced: iB
		}, {
			of: function() {
				for (var t = 0, r = arguments.length, n = new(rB(this) ? this : sy)(r); r > t;) nB(n, t, arguments[t++]);
				return n.length = r, n
			}
		})
	});
	var uy = E((die, ly) => {
		var aB = Zo(),
			sB = pa();
		ly.exports = Object.keys || function(t) {
			return aB(t, sB)
		}
	});
	var cy = E((mie, hy) => {
		var oB = gt(),
			lB = st(),
			uB = Ne(),
			hB = Pt(),
			cB = uy();
		hy.exports = oB ? Object.defineProperties : function(t, r) {
			uB(t);
			for (var n = hB(r), i = cB(r), a = i.length, s = 0, o; a > s;) lB.f(t, o = i[s++], n[o]);
			return t
		}
	});
	var il = E((gie, fy) => {
		var fB = it();
		fy.exports = fB("document", "documentElement")
	});
	var sr = E((vie, Ey) => {
		var pB = Ne(),
			dB = cy(),
			py = pa(),
			mB = zn(),
			gB = il(),
			vB = oa(),
			yB = ua(),
			dy = ">",
			my = "<",
			sl = "prototype",
			ol = "script",
			vy = yB("IE_PROTO"),
			al = function() {},
			yy = function(e) {
				return my + ol + dy + e + my + "/" + ol + dy
			},
			gy = function(e) {
				e.write(yy("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			EB = function() {
				var e = vB("iframe"),
					t = "java" + ol + ":",
					r;
				return e.style.display = "none", gB.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(yy("document.F=Object")), r.close(), r.F
			},
			Ea, ba = function() {
				try {
					Ea = new ActiveXObject("htmlfile")
				} catch {}
				ba = typeof document < "u" ? document.domain && Ea ? gy(Ea) : EB() : gy(Ea);
				for (var e = py.length; e--;) delete ba[sl][py[e]];
				return ba()
			};
		mB[vy] = !0;
		Ey.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (al[sl] = pB(t), n = new al, al[sl] = null, n[vy] = t) : n = ba(), r === void 0 ? n : dB(n, r)
		}
	});
	var we = E((yie, by) => {
		var bB = _e(),
			SB = sr(),
			_B = st(),
			ll = bB("unscopables"),
			ul = Array.prototype;
		ul[ll] == null && _B.f(ul, ll, {
			configurable: !0,
			value: SB(null)
		});
		by.exports = function(e) {
			ul[ll][e] = !0
		}
	});
	var hl = E(() => {
		"use strict";
		var xB = se(),
			TB = Ie(),
			IB = ye(),
			AB = ir(),
			PB = we();
		xB({
			target: "Array",
			proto: !0
		}, {
			at: function(t) {
				var r = TB(this),
					n = IB(r),
					i = AB(t),
					a = i >= 0 ? i : n + i;
				return a < 0 || a >= n ? void 0 : r[a]
			}
		});
		PB("at")
	});
	var cl = E((Sie, xy) => {
		var CB = te(),
			Sy = ar(),
			wB = br(),
			MB = He(),
			FB = _e(),
			OB = FB("species"),
			_y = CB.Array;
		xy.exports = function(e) {
			var t;
			return Sy(e) && (t = e.constructor, wB(t) && (t === _y || Sy(t.prototype)) ? t = void 0 : MB(t) && (t = t[OB], t === null && (t = void 0))), t === void 0 ? _y : t
		}
	});
	var Sr = E((_ie, Ty) => {
		var DB = cl();
		Ty.exports = function(e, t) {
			return new(DB(e))(t === 0 ? 0 : t)
		}
	});
	var Kr = E((xie, Iy) => {
		var RB = Fe(),
			qB = _e(),
			LB = tr(),
			kB = qB("species");
		Iy.exports = function(e) {
			return LB >= 51 || !RB(function() {
				var t = [],
					r = t.constructor = {};
				return r[kB] = function() {
					return {
						foo: 1
					}
				}, t[e](Boolean).foo !== 1
			})
		}
	});
	var Fy = E(() => {
		"use strict";
		var NB = se(),
			BB = te(),
			VB = Fe(),
			GB = ar(),
			zB = He(),
			HB = Ie(),
			jB = ye(),
			Ay = $r(),
			UB = Sr(),
			WB = Kr(),
			XB = _e(),
			$B = tr(),
			My = XB("isConcatSpreadable"),
			Py = 9007199254740991,
			Cy = "Maximum allowed index exceeded",
			wy = BB.TypeError,
			KB = $B >= 51 || !VB(function() {
				var e = [];
				return e[My] = !1, e.concat()[0] !== e
			}),
			YB = WB("concat"),
			QB = function(e) {
				if (!zB(e)) return !1;
				var t = e[My];
				return t !== void 0 ? !!t : GB(e)
			},
			ZB = !KB || !YB;
		NB({
			target: "Array",
			proto: !0,
			forced: ZB
		}, {
			concat: function(t) {
				var r = HB(this),
					n = UB(r, 0),
					i = 0,
					a, s, o, l, c;
				for (a = -1, o = arguments.length; a < o; a++)
					if (c = a === -1 ? r : arguments[a], QB(c)) {
						if (l = jB(c), i + l > Py) throw wy(Cy);
						for (s = 0; s < l; s++, i++) s in c && Ay(n, i, c[s])
					} else {
						if (i >= Py) throw wy(Cy);
						Ay(n, i++, c)
					} return n.length = i, n
			}
		})
	});
	var Dy = E((Aie, Oy) => {
		"use strict";
		var JB = Ie(),
			fl = Wr(),
			eV = ye(),
			tV = Math.min;
		Oy.exports = [].copyWithin || function(t, r) {
			var n = JB(this),
				i = eV(n),
				a = fl(t, i),
				s = fl(r, i),
				o = arguments.length > 2 ? arguments[2] : void 0,
				l = tV((o === void 0 ? i : fl(o, i)) - s, i - a),
				c = 1;
			for (s < a && a < s + l && (c = -1, s += l - 1, a += l - 1); l-- > 0;) s in n ? n[a] = n[s] : delete n[a], a += c, s += c;
			return n
		}
	});
	var Ry = E(() => {
		var rV = se(),
			nV = Dy(),
			iV = we();
		rV({
			target: "Array",
			proto: !0
		}, {
			copyWithin: nV
		});
		iV("copyWithin")
	});
	var Ct = E((wie, Ly) => {
		var aV = Et(),
			sV = ge(),
			oV = gr(),
			lV = Ie(),
			uV = ye(),
			hV = Sr(),
			qy = sV([].push),
			or = function(e) {
				var t = e == 1,
					r = e == 2,
					n = e == 3,
					i = e == 4,
					a = e == 6,
					s = e == 7,
					o = e == 5 || a;
				return function(l, c, u, f) {
					for (var m = lV(l), d = oV(m), p = aV(c, u), g = uV(d), h = 0, v = f || hV, y = t ? v(l, g) : r || s ? v(l, 0) : void 0, b, S; g > h; h++)
						if ((o || h in d) && (b = d[h], S = p(b, h, m), e))
							if (t) y[h] = S;
							else if (S) switch (e) {
						case 3:
							return !0;
						case 5:
							return b;
						case 6:
							return h;
						case 2:
							qy(y, b)
					} else switch (e) {
						case 4:
							return !1;
						case 7:
							qy(y, b)
					}
					return a ? -1 : n || i ? i : y
				}
			};
		Ly.exports = {
			forEach: or(0),
			map: or(1),
			filter: or(2),
			some: or(3),
			every: or(4),
			find: or(5),
			findIndex: or(6),
			filterReject: or(7)
		}
	});
	var wt = E((Mie, ky) => {
		"use strict";
		var cV = Fe();
		ky.exports = function(e, t) {
			var r = [][e];
			return !!r && cV(function() {
				r.call(null, t || function() {
					throw 1
				}, 1)
			})
		}
	});
	var Ny = E(() => {
		"use strict";
		var fV = se(),
			pV = Ct().every,
			dV = wt(),
			mV = dV("every");
		fV({
			target: "Array",
			proto: !0,
			forced: !mV
		}, {
			every: function(t) {
				return pV(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Gy = E((Die, Vy) => {
		"use strict";
		var gV = Ie(),
			By = Wr(),
			vV = ye();
		Vy.exports = function(t) {
			for (var r = gV(this), n = vV(r), i = arguments.length, a = By(i > 1 ? arguments[1] : void 0, n), s = i > 2 ? arguments[2] : void 0, o = s === void 0 ? n : By(s, n); o > a;) r[a++] = t;
			return r
		}
	});
	var zy = E(() => {
		var yV = se(),
			EV = Gy(),
			bV = we();
		yV({
			target: "Array",
			proto: !0
		}, {
			fill: EV
		});
		bV("fill")
	});
	var Hy = E(() => {
		"use strict";
		var SV = se(),
			_V = Ct().filter,
			xV = Kr(),
			TV = xV("filter");
		SV({
			target: "Array",
			proto: !0,
			forced: !TV
		}, {
			filter: function(t) {
				return _V(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Uy = E(() => {
		"use strict";
		var IV = se(),
			AV = Ct().find,
			PV = we(),
			pl = "find",
			jy = !0;
		pl in [] && Array(1)[pl](function() {
			jy = !1
		});
		IV({
			target: "Array",
			proto: !0,
			forced: jy
		}, {
			find: function(t) {
				return AV(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		PV(pl)
	});
	var Xy = E(() => {
		"use strict";
		var CV = se(),
			wV = Ct().findIndex,
			MV = we(),
			dl = "findIndex",
			Wy = !0;
		dl in [] && Array(1)[dl](function() {
			Wy = !1
		});
		CV({
			target: "Array",
			proto: !0,
			forced: Wy
		}, {
			findIndex: function(t) {
				return wV(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		MV(dl)
	});
	var ml = E((zie, Ky) => {
		"use strict";
		var FV = te(),
			OV = ar(),
			DV = ye(),
			RV = Et(),
			qV = FV.TypeError,
			$y = function(e, t, r, n, i, a, s, o) {
				for (var l = i, c = 0, u = s ? RV(s, o) : !1, f, m; c < n;) {
					if (c in r) {
						if (f = u ? u(r[c], c, t) : r[c], a > 0 && OV(f)) m = DV(f), l = $y(e, t, f, m, l, a - 1) - 1;
						else {
							if (l >= 9007199254740991) throw qV("Exceed the acceptable array length");
							e[l] = f
						}
						l++
					}
					c++
				}
				return l
			};
		Ky.exports = $y
	});
	var Yy = E(() => {
		"use strict";
		var LV = se(),
			kV = ml(),
			NV = Ie(),
			BV = ye(),
			VV = ir(),
			GV = Sr();
		LV({
			target: "Array",
			proto: !0
		}, {
			flat: function() {
				var t = arguments.length ? arguments[0] : void 0,
					r = NV(this),
					n = BV(r),
					i = GV(r, 0);
				return i.length = kV(i, r, r, n, 0, t === void 0 ? 1 : VV(t)), i
			}
		})
	});
	var Qy = E(() => {
		"use strict";
		var zV = se(),
			HV = ml(),
			jV = yt(),
			UV = Ie(),
			WV = ye(),
			XV = Sr();
		zV({
			target: "Array",
			proto: !0
		}, {
			flatMap: function(t) {
				var r = UV(this),
					n = WV(r),
					i;
				return jV(t), i = XV(r, 0), i.length = HV(i, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), i
			}
		})
	});
	var Jy = E((Xie, Zy) => {
		"use strict";
		var $V = Ct().forEach,
			KV = wt(),
			YV = KV("forEach");
		Zy.exports = YV ? [].forEach : function(t) {
			return $V(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var t0 = E(() => {
		"use strict";
		var QV = se(),
			e0 = Jy();
		QV({
			target: "Array",
			proto: !0,
			forced: [].forEach != e0
		}, {
			forEach: e0
		})
	});
	var gl = E(() => {
		"use strict";
		var ZV = se(),
			JV = fa().includes,
			e3 = we();
		ZV({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return JV(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		e3("includes")
	});
	var n0 = E(() => {
		"use strict";
		var t3 = se(),
			r3 = ge(),
			n3 = fa().indexOf,
			i3 = wt(),
			vl = r3([].indexOf),
			r0 = !!vl && 1 / vl([1], 1, -0) < 0,
			a3 = i3("indexOf");
		t3({
			target: "Array",
			proto: !0,
			forced: r0 || !a3
		}, {
			indexOf: function(t) {
				var r = arguments.length > 1 ? arguments[1] : void 0;
				return r0 ? vl(this, t, r) || 0 : n3(this, t, r)
			}
		})
	});
	var a0 = E((eae, i0) => {
		var s3 = Fe();
		i0.exports = !s3(function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		})
	});
	var Sa = E((tae, o0) => {
		var o3 = te(),
			l3 = at(),
			u3 = Se(),
			h3 = Ie(),
			c3 = ua(),
			f3 = a0(),
			s0 = c3("IE_PROTO"),
			yl = o3.Object,
			p3 = yl.prototype;
		o0.exports = f3 ? yl.getPrototypeOf : function(e) {
			var t = h3(e);
			if (l3(t, s0)) return t[s0];
			var r = t.constructor;
			return u3(r) && t instanceof r ? r.prototype : t instanceof yl ? p3 : null
		}
	});
	var _l = E((rae, h0) => {
		"use strict";
		var d3 = Fe(),
			m3 = Se(),
			g3 = sr(),
			l0 = Sa(),
			v3 = kt(),
			y3 = _e(),
			E3 = jr(),
			Sl = y3("iterator"),
			u0 = !1,
			Nt, El, bl;
		[].keys && (bl = [].keys(), "next" in bl ? (El = l0(l0(bl)), El !== Object.prototype && (Nt = El)) : u0 = !0);
		var b3 = Nt == null || d3(function() {
			var e = {};
			return Nt[Sl].call(e) !== e
		});
		b3 ? Nt = {} : E3 && (Nt = g3(Nt));
		m3(Nt[Sl]) || v3(Nt, Sl, function() {
			return this
		});
		h0.exports = {
			IteratorPrototype: Nt,
			BUGGY_SAFARI_ITERATORS: u0
		}
	});
	var Kn = E((nae, f0) => {
		var S3 = st().f,
			_3 = at(),
			x3 = _e(),
			c0 = x3("toStringTag");
		f0.exports = function(e, t, r) {
			e && !_3(e = r ? e : e.prototype, c0) && S3(e, c0, {
				configurable: !0,
				value: t
			})
		}
	});
	var d0 = E((iae, p0) => {
		"use strict";
		var T3 = _l().IteratorPrototype,
			I3 = sr(),
			A3 = Ln(),
			P3 = Kn(),
			C3 = Xr(),
			w3 = function() {
				return this
			};
		p0.exports = function(e, t, r) {
			var n = t + " Iterator";
			return e.prototype = I3(T3, {
				next: A3(1, r)
			}), P3(e, n, !1, !0), C3[n] = w3, e
		}
	});
	var v0 = E((aae, g0) => {
		var m0 = te(),
			M3 = Se(),
			F3 = m0.String,
			O3 = m0.TypeError;
		g0.exports = function(e) {
			if (typeof e == "object" || M3(e)) return e;
			throw O3("Can't set " + F3(e) + " as a prototype")
		}
	});
	var _a = E((sae, y0) => {
		var D3 = ge(),
			R3 = Ne(),
			q3 = v0();
		y0.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e = !1,
				t = {},
				r;
			try {
				r = D3(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), r(t, []), e = t instanceof Array
			} catch {}
			return function(i, a) {
				return R3(i), q3(a), e ? r(i, a) : i.__proto__ = a, i
			}
		}() : void 0)
	});
	var Ia = E((oae, C0) => {
		"use strict";
		var L3 = se(),
			k3 = nt(),
			xa = jr(),
			A0 = Yo(),
			N3 = Se(),
			B3 = d0(),
			E0 = Sa(),
			b0 = _a(),
			V3 = Kn(),
			G3 = Vn(),
			xl = kt(),
			z3 = _e(),
			S0 = Xr(),
			P0 = _l(),
			H3 = A0.PROPER,
			j3 = A0.CONFIGURABLE,
			_0 = P0.IteratorPrototype,
			Ta = P0.BUGGY_SAFARI_ITERATORS,
			Yn = z3("iterator"),
			x0 = "keys",
			Qn = "values",
			T0 = "entries",
			I0 = function() {
				return this
			};
		C0.exports = function(e, t, r, n, i, a, s) {
			B3(r, t, n);
			var o = function(v) {
					if (v === i && m) return m;
					if (!Ta && v in u) return u[v];
					switch (v) {
						case x0:
							return function() {
								return new r(this, v)
							};
						case Qn:
							return function() {
								return new r(this, v)
							};
						case T0:
							return function() {
								return new r(this, v)
							}
					}
					return function() {
						return new r(this)
					}
				},
				l = t + " Iterator",
				c = !1,
				u = e.prototype,
				f = u[Yn] || u["@@iterator"] || i && u[i],
				m = !Ta && f || o(i),
				d = t == "Array" && u.entries || f,
				p, g, h;
			if (d && (p = E0(d.call(new e)), p !== Object.prototype && p.next && (!xa && E0(p) !== _0 && (b0 ? b0(p, _0) : N3(p[Yn]) || xl(p, Yn, I0)), V3(p, l, !0, !0), xa && (S0[l] = I0))), H3 && i == Qn && f && f.name !== Qn && (!xa && j3 ? G3(u, "name", Qn) : (c = !0, m = function() {
					return k3(f, this)
				})), i)
				if (g = {
						values: o(Qn),
						keys: a ? m : o(x0),
						entries: o(T0)
					}, s)
					for (h in g)(Ta || c || !(h in u)) && xl(u, h, g[h]);
				else L3({
					target: t,
					proto: !0,
					forced: Ta || c
				}, g);
			return (!xa || s) && u[Yn] !== m && xl(u, Yn, m, {
				name: i
			}), S0[t] = m, g
		}
	});
	var D0 = E((lae, O0) => {
		"use strict";
		var U3 = Pt(),
			Tl = we(),
			w0 = Xr(),
			M0 = Er(),
			W3 = Ia(),
			F0 = "Array Iterator",
			X3 = M0.set,
			$3 = M0.getterFor(F0);
		O0.exports = W3(Array, "Array", function(e, t) {
			X3(this, {
				type: F0,
				target: U3(e),
				index: 0,
				kind: t
			})
		}, function() {
			var e = $3(this),
				t = e.target,
				r = e.kind,
				n = e.index++;
			return !t || n >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : r == "keys" ? {
				value: n,
				done: !1
			} : r == "values" ? {
				value: t[n],
				done: !1
			} : {
				value: [n, t[n]],
				done: !1
			}
		}, "values");
		w0.Arguments = w0.Array;
		Tl("keys");
		Tl("values");
		Tl("entries")
	});
	var R0 = E(() => {
		"use strict";
		var K3 = se(),
			Y3 = ge(),
			Q3 = gr(),
			Z3 = Pt(),
			J3 = wt(),
			eG = Y3([].join),
			tG = Q3 != Object,
			rG = J3("join", ",");
		K3({
			target: "Array",
			proto: !0,
			forced: tG || !rG
		}, {
			join: function(t) {
				return eG(Z3(this), t === void 0 ? "," : t)
			}
		})
	});
	var Aa = E((cae, k0) => {
		var Il = Function.prototype,
			q0 = Il.apply,
			nG = Il.bind,
			L0 = Il.call;
		k0.exports = typeof Reflect == "object" && Reflect.apply || (nG ? L0.bind(q0) : function() {
			return L0.apply(q0, arguments)
		})
	});
	var V0 = E((fae, B0) => {
		"use strict";
		var iG = Aa(),
			aG = Pt(),
			sG = ir(),
			oG = ye(),
			lG = wt(),
			uG = Math.min,
			Al = [].lastIndexOf,
			N0 = !!Al && 1 / [1].lastIndexOf(1, -0) < 0,
			hG = lG("lastIndexOf"),
			cG = N0 || !hG;
		B0.exports = cG ? function(t) {
			if (N0) return iG(Al, this, arguments) || 0;
			var r = aG(this),
				n = oG(r),
				i = n - 1;
			for (arguments.length > 1 && (i = uG(i, sG(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
				if (i in r && r[i] === t) return i || 0;
			return -1
		} : Al
	});
	var z0 = E(() => {
		var fG = se(),
			G0 = V0();
		fG({
			target: "Array",
			proto: !0,
			forced: G0 !== [].lastIndexOf
		}, {
			lastIndexOf: G0
		})
	});
	var H0 = E(() => {
		"use strict";
		var pG = se(),
			dG = Ct().map,
			mG = Kr(),
			gG = mG("map");
		pG({
			target: "Array",
			proto: !0,
			forced: !gG
		}, {
			map: function(t) {
				return dG(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Pl = E((vae, U0) => {
		var vG = te(),
			yG = yt(),
			EG = Ie(),
			bG = gr(),
			SG = ye(),
			_G = vG.TypeError,
			j0 = function(e) {
				return function(t, r, n, i) {
					yG(r);
					var a = EG(t),
						s = bG(a),
						o = SG(a),
						l = e ? o - 1 : 0,
						c = e ? -1 : 1;
					if (n < 2)
						for (;;) {
							if (l in s) {
								i = s[l], l += c;
								break
							}
							if (l += c, e ? l < 0 : o <= l) throw _G("Reduce of empty array with no initial value")
						}
					for (; e ? l >= 0 : o > l; l += c) l in s && (i = r(i, s[l], l, a));
					return i
				}
			};
		U0.exports = {
			left: j0(!1),
			right: j0(!0)
		}
	});
	var Yr = E((yae, W0) => {
		var xG = Hr(),
			TG = te();
		W0.exports = xG(TG.process) == "process"
	});
	var $0 = E(() => {
		"use strict";
		var IG = se(),
			AG = Pl().left,
			PG = wt(),
			X0 = tr(),
			CG = Yr(),
			wG = PG("reduce"),
			MG = !CG && X0 > 79 && X0 < 83;
		IG({
			target: "Array",
			proto: !0,
			forced: !wG || MG
		}, {
			reduce: function(t) {
				var r = arguments.length;
				return AG(this, t, r, r > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Y0 = E(() => {
		"use strict";
		var FG = se(),
			OG = Pl().right,
			DG = wt(),
			K0 = tr(),
			RG = Yr(),
			qG = DG("reduceRight"),
			LG = !RG && K0 > 79 && K0 < 83;
		FG({
			target: "Array",
			proto: !0,
			forced: !qG || LG
		}, {
			reduceRight: function(t) {
				return OG(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Z0 = E(() => {
		"use strict";
		var kG = se(),
			NG = ge(),
			BG = ar(),
			VG = NG([].reverse),
			Q0 = [1, 2];
		kG({
			target: "Array",
			proto: !0,
			forced: String(Q0) === String(Q0.reverse())
		}, {
			reverse: function() {
				return BG(this) && (this.length = this.length), VG(this)
			}
		})
	});
	var Zn = E((Iae, J0) => {
		var GG = ge();
		J0.exports = GG([].slice)
	});
	var r1 = E(() => {
		"use strict";
		var zG = se(),
			HG = te(),
			e1 = ar(),
			jG = br(),
			UG = He(),
			t1 = Wr(),
			WG = ye(),
			XG = Pt(),
			$G = $r(),
			KG = _e(),
			YG = Kr(),
			QG = Zn(),
			ZG = YG("slice"),
			JG = KG("species"),
			Cl = HG.Array,
			e5 = Math.max;
		zG({
			target: "Array",
			proto: !0,
			forced: !ZG
		}, {
			slice: function(t, r) {
				var n = XG(this),
					i = WG(n),
					a = t1(t, i),
					s = t1(r === void 0 ? i : r, i),
					o, l, c;
				if (e1(n) && (o = n.constructor, jG(o) && (o === Cl || e1(o.prototype)) ? o = void 0 : UG(o) && (o = o[JG], o === null && (o = void 0)), o === Cl || o === void 0)) return QG(n, a, s);
				for (l = new(o === void 0 ? Cl : o)(e5(s - a, 0)), c = 0; a < s; a++, c++) a in n && $G(l, c, n[a]);
				return l.length = c, l
			}
		})
	});
	var n1 = E(() => {
		"use strict";
		var t5 = se(),
			r5 = Ct().some,
			n5 = wt(),
			i5 = n5("some");
		t5({
			target: "Array",
			proto: !0,
			forced: !i5
		}, {
			some: function(t) {
				return r5(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	});
	var Pa = E((Mae, i1) => {
		var a5 = te(),
			s5 = Un(),
			o5 = a5.String;
		i1.exports = function(e) {
			if (s5(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
			return o5(e)
		}
	});
	var o1 = E((Fae, s1) => {
		var a1 = Zn(),
			l5 = Math.floor,
			wl = function(e, t) {
				var r = e.length,
					n = l5(r / 2);
				return r < 8 ? u5(e, t) : h5(e, wl(a1(e, 0, n), t), wl(a1(e, n), t), t)
			},
			u5 = function(e, t) {
				for (var r = e.length, n = 1, i, a; n < r;) {
					for (a = n, i = e[n]; a && t(e[a - 1], i) > 0;) e[a] = e[--a];
					a !== n++ && (e[a] = i)
				}
				return e
			},
			h5 = function(e, t, r, n) {
				for (var i = t.length, a = r.length, s = 0, o = 0; s < i || o < a;) e[s + o] = s < i && o < a ? n(t[s], r[o]) <= 0 ? t[s++] : r[o++] : s < i ? t[s++] : r[o++];
				return e
			};
		s1.exports = wl
	});
	var h1 = E((Oae, u1) => {
		var c5 = er(),
			l1 = c5.match(/firefox\/(\d+)/i);
		u1.exports = !!l1 && +l1[1]
	});
	var f1 = E((Dae, c1) => {
		var f5 = er();
		c1.exports = /MSIE|Trident/.test(f5)
	});
	var m1 = E((Rae, d1) => {
		var p5 = er(),
			p1 = p5.match(/AppleWebKit\/(\d+)\./);
		d1.exports = !!p1 && +p1[1]
	});
	var x1 = E(() => {
		"use strict";
		var d5 = se(),
			S1 = ge(),
			m5 = yt(),
			g5 = Ie(),
			v5 = ye(),
			g1 = Pa(),
			Ml = Fe(),
			y5 = o1(),
			E5 = wt(),
			v1 = h1(),
			b5 = f1(),
			y1 = tr(),
			E1 = m1(),
			lr = [],
			b1 = S1(lr.sort),
			S5 = S1(lr.push),
			_5 = Ml(function() {
				lr.sort(void 0)
			}),
			x5 = Ml(function() {
				lr.sort(null)
			}),
			T5 = E5("sort"),
			_1 = !Ml(function() {
				if (y1) return y1 < 70;
				if (!(v1 && v1 > 3)) {
					if (b5) return !0;
					if (E1) return E1 < 603;
					var e = "",
						t, r, n, i;
					for (t = 65; t < 76; t++) {
						switch (r = String.fromCharCode(t), t) {
							case 66:
							case 69:
							case 70:
							case 72:
								n = 3;
								break;
							case 68:
							case 71:
								n = 4;
								break;
							default:
								n = 2
						}
						for (i = 0; i < 47; i++) lr.push({
							k: r + i,
							v: n
						})
					}
					for (lr.sort(function(a, s) {
							return s.v - a.v
						}), i = 0; i < lr.length; i++) r = lr[i].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
					return e !== "DGBEFHACIJK"
				}
			}),
			I5 = _5 || !x5 || !T5 || !_1,
			A5 = function(e) {
				return function(t, r) {
					return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : g1(t) > g1(r) ? 1 : -1
				}
			};
		d5({
			target: "Array",
			proto: !0,
			forced: I5
		}, {
			sort: function(t) {
				t !== void 0 && m5(t);
				var r = g5(this);
				if (_1) return t === void 0 ? b1(r) : b1(r, t);
				var n = [],
					i = v5(r),
					a, s;
				for (s = 0; s < i; s++) s in r && S5(n, r[s]);
				for (y5(n, A5(t)), a = n.length, s = 0; s < a;) r[s] = n[s++];
				for (; s < i;) delete r[s++];
				return r
			}
		})
	});
	var Ca = E((kae, I1) => {
		"use strict";
		var P5 = it(),
			C5 = st(),
			w5 = _e(),
			M5 = gt(),
			T1 = w5("species");
		I1.exports = function(e) {
			var t = P5(e),
				r = C5.f;
			M5 && t && !t[T1] && r(t, T1, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	});
	var A1 = E(() => {
		var F5 = Ca();
		F5("Array")
	});
	var P1 = E(() => {
		"use strict";
		var O5 = se(),
			D5 = te(),
			R5 = Wr(),
			q5 = ir(),
			L5 = ye(),
			k5 = Ie(),
			N5 = Sr(),
			B5 = $r(),
			V5 = Kr(),
			G5 = V5("splice"),
			z5 = D5.TypeError,
			H5 = Math.max,
			j5 = Math.min,
			U5 = 9007199254740991,
			W5 = "Maximum allowed length exceeded";
		O5({
			target: "Array",
			proto: !0,
			forced: !G5
		}, {
			splice: function(t, r) {
				var n = k5(this),
					i = L5(n),
					a = R5(t, i),
					s = arguments.length,
					o, l, c, u, f, m;
				if (s === 0 ? o = l = 0 : s === 1 ? (o = 0, l = i - a) : (o = s - 2, l = j5(H5(q5(r), 0), i - a)), i + o - l > U5) throw z5(W5);
				for (c = N5(n, l), u = 0; u < l; u++) f = a + u, f in n && B5(c, u, n[f]);
				if (c.length = l, o < l) {
					for (u = a; u < i - l; u++) f = u + l, m = u + o, f in n ? n[m] = n[f] : delete n[m];
					for (u = i; u > i - l + o; u--) delete n[u - 1]
				} else if (o > l)
					for (u = i - l; u > a; u--) f = u + l - 1, m = u + o - 1, f in n ? n[m] = n[f] : delete n[m];
				for (u = 0; u < o; u++) n[u + a] = arguments[u + 2];
				return n.length = i - l + o, c
			}
		})
	});
	var C1 = E(() => {
		var X5 = we();
		X5("flat")
	});
	var w1 = E(() => {
		var $5 = we();
		$5("flatMap")
	});
	var F1 = E((Wae, M1) => {
		"use strict";
		var K5 = ga(),
			Y5 = Un();
		M1.exports = K5 ? {}.toString : function() {
			return "[object " + Y5(this) + "]"
		}
	});
	var O1 = E(() => {
		var Q5 = ga(),
			Z5 = kt(),
			J5 = F1();
		Q5 || Z5(Object.prototype, "toString", J5, {
			unsafe: !0
		})
	});
	var L1 = E((Kae, q1) => {
		var Fl = ge(),
			ez = ir(),
			tz = Pa(),
			rz = ra(),
			nz = Fl("".charAt),
			D1 = Fl("".charCodeAt),
			iz = Fl("".slice),
			R1 = function(e) {
				return function(t, r) {
					var n = tz(rz(t)),
						i = ez(r),
						a = n.length,
						s, o;
					return i < 0 || i >= a ? e ? "" : void 0 : (s = D1(n, i), s < 55296 || s > 56319 || i + 1 === a || (o = D1(n, i + 1)) < 56320 || o > 57343 ? e ? nz(n, i) : s : e ? iz(n, i, i + 2) : (s - 55296 << 10) + (o - 56320) + 65536)
				}
			};
		q1.exports = {
			codeAt: R1(!1),
			charAt: R1(!0)
		}
	});
	var B1 = E(() => {
		"use strict";
		var az = L1().charAt,
			sz = Pa(),
			k1 = Er(),
			oz = Ia(),
			N1 = "String Iterator",
			lz = k1.set,
			uz = k1.getterFor(N1);
		oz(String, "String", function(e) {
			lz(this, {
				type: N1,
				string: sz(e),
				index: 0
			})
		}, function() {
			var t = uz(this),
				r = t.string,
				n = t.index,
				i;
			return n >= r.length ? {
				value: void 0,
				done: !0
			} : (i = az(r, n), t.index += i.length, {
				value: i,
				done: !1
			})
		})
	});
	var G1 = E((Zae, V1) => {
		var hz = te();
		V1.exports = hz
	});
	var H1 = E((Jae, z1) => {
		ny();
		ay();
		oy();
		hl();
		Fy();
		Ry();
		Ny();
		zy();
		Hy();
		Uy();
		Xy();
		Yy();
		Qy();
		t0();
		gl();
		n0();
		D0();
		R0();
		z0();
		H0();
		$0();
		Y0();
		Z0();
		r1();
		n1();
		x1();
		A1();
		P1();
		C1();
		w1();
		O1();
		B1();
		var cz = G1();
		z1.exports = cz.Array
	});
	var U1 = E((ese, j1) => {
		var fz = H1();
		j1.exports = fz
	});
	var K1 = E((tse, $1) => {
		var pz = Hr(),
			dz = Pt(),
			W1 = da().f,
			mz = Zn(),
			X1 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			gz = function(e) {
				try {
					return W1(e)
				} catch {
					return mz(X1)
				}
			};
		$1.exports.f = function(t) {
			return X1 && pz(t) == "Window" ? gz(t) : W1(dz(t))
		}
	});
	var Q1 = E((rse, Y1) => {
		var vz = Fe();
		Y1.exports = !vz(function() {
			return Object.isExtensible(Object.preventExtensions({}))
		})
	});
	var ql = E((nse, eE) => {
		var yz = se(),
			Ez = ge(),
			bz = zn(),
			Sz = He(),
			Ol = at(),
			_z = st().f,
			Z1 = da(),
			xz = K1(),
			Tz = sa(),
			Iz = Q1(),
			J1 = !1,
			Bt = Tz("meta"),
			Az = 0,
			Dl = Object.isExtensible || function() {
				return !0
			},
			Rl = function(e) {
				_z(e, Bt, {
					value: {
						objectID: "O" + Az++,
						weakData: {}
					}
				})
			},
			Pz = function(e, t) {
				if (!Sz(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
				if (!Ol(e, Bt)) {
					if (!Dl(e)) return "F";
					if (!t) return "E";
					Rl(e)
				}
				return e[Bt].objectID
			},
			Cz = function(e, t) {
				if (!Ol(e, Bt)) {
					if (!Dl(e)) return !0;
					if (!t) return !1;
					Rl(e)
				}
				return e[Bt].weakData
			},
			wz = function(e) {
				return Iz && J1 && Dl(e) && !Ol(e, Bt) && Rl(e), e
			},
			Mz = function() {
				Fz.enable = function() {}, J1 = !0;
				var e = Z1.f,
					t = Ez([].splice),
					r = {};
				r[Bt] = 1, e(r).length && (Z1.f = function(n) {
					for (var i = e(n), a = 0, s = i.length; a < s; a++)
						if (i[a] === Bt) {
							t(i, a, 1);
							break
						} return i
				}, yz({
					target: "Object",
					stat: !0,
					forced: !0
				}, {
					getOwnPropertyNames: xz.f
				}))
			},
			Fz = eE.exports = {
				enable: Mz,
				fastKey: Pz,
				getWeakData: Cz,
				onFreeze: wz
			};
		bz[Bt] = !0
	});
	var Ma = E((ise, iE) => {
		var Oz = te(),
			Dz = Et(),
			Rz = nt(),
			qz = Ne(),
			Lz = kn(),
			kz = tl(),
			Nz = ye(),
			tE = na(),
			Bz = $n(),
			Vz = Xn(),
			rE = el(),
			Gz = Oz.TypeError,
			wa = function(e, t) {
				this.stopped = e, this.result = t
			},
			nE = wa.prototype;
		iE.exports = function(e, t, r) {
			var n = r && r.that,
				i = !!(r && r.AS_ENTRIES),
				a = !!(r && r.IS_ITERATOR),
				s = !!(r && r.INTERRUPTED),
				o = Dz(t, n),
				l, c, u, f, m, d, p, g = function(v) {
					return l && rE(l, "normal", v), new wa(!0, v)
				},
				h = function(v) {
					return i ? (qz(v), s ? o(v[0], v[1], g) : o(v[0], v[1])) : s ? o(v, g) : o(v)
				};
			if (a) l = e;
			else {
				if (c = Vz(e), !c) throw Gz(Lz(e) + " is not iterable");
				if (kz(c)) {
					for (u = 0, f = Nz(e); f > u; u++)
						if (m = h(e[u]), m && tE(nE, m)) return m;
					return new wa(!1)
				}
				l = Bz(e, c)
			}
			for (d = l.next; !(p = Rz(d, l)).done;) {
				try {
					m = h(p.value)
				} catch (v) {
					rE(l, "throw", v)
				}
				if (typeof m == "object" && m && tE(nE, m)) return m
			}
			return new wa(!1)
		}
	});
	var Fa = E((ase, aE) => {
		var zz = te(),
			Hz = na(),
			jz = zz.TypeError;
		aE.exports = function(e, t) {
			if (Hz(t, e)) return e;
			throw jz("Incorrect invocation")
		}
	});
	var lE = E((sse, oE) => {
		var Uz = Se(),
			Wz = He(),
			sE = _a();
		oE.exports = function(e, t, r) {
			var n, i;
			return sE && Uz(n = t.constructor) && n !== r && Wz(i = n.prototype) && i !== r.prototype && sE(e, i), e
		}
	});
	var cE = E((ose, hE) => {
		"use strict";
		var Xz = se(),
			$z = te(),
			Kz = ge(),
			uE = ma(),
			Yz = kt(),
			Qz = ql(),
			Zz = Ma(),
			Jz = Fa(),
			eH = Se(),
			Ll = He(),
			kl = Fe(),
			tH = ya(),
			rH = Kn(),
			nH = lE();
		hE.exports = function(e, t, r) {
			var n = e.indexOf("Map") !== -1,
				i = e.indexOf("Weak") !== -1,
				a = n ? "set" : "add",
				s = $z[e],
				o = s && s.prototype,
				l = s,
				c = {},
				u = function(v) {
					var y = Kz(o[v]);
					Yz(o, v, v == "add" ? function(S) {
						return y(this, S === 0 ? 0 : S), this
					} : v == "delete" ? function(b) {
						return i && !Ll(b) ? !1 : y(this, b === 0 ? 0 : b)
					} : v == "get" ? function(S) {
						return i && !Ll(S) ? void 0 : y(this, S === 0 ? 0 : S)
					} : v == "has" ? function(S) {
						return i && !Ll(S) ? !1 : y(this, S === 0 ? 0 : S)
					} : function(S, _) {
						return y(this, S === 0 ? 0 : S, _), this
					})
				},
				f = uE(e, !eH(s) || !(i || o.forEach && !kl(function() {
					new s().entries().next()
				})));
			if (f) l = r.getConstructor(t, e, n, a), Qz.enable();
			else if (uE(e, !0)) {
				var m = new l,
					d = m[a](i ? {} : -0, 1) != m,
					p = kl(function() {
						m.has(1)
					}),
					g = tH(function(v) {
						new s(v)
					}),
					h = !i && kl(function() {
						for (var v = new s, y = 5; y--;) v[a](y, y);
						return !v.has(-0)
					});
				g || (l = t(function(v, y) {
					Jz(v, o);
					var b = nH(new s, v, l);
					return y != null && Zz(y, b[a], {
						that: b,
						AS_ENTRIES: n
					}), b
				}), l.prototype = o, o.constructor = l), (p || h) && (u("delete"), u("has"), n && u("get")), (h || d) && u(a), i && o.clear && delete o.clear
			}
			return c[e] = l, Xz({
				global: !0,
				forced: l != s
			}, c), rH(l, e), i || r.setStrong(l, e, n), l
		}
	});
	var Oa = E((lse, fE) => {
		var iH = kt();
		fE.exports = function(e, t, r) {
			for (var n in t) iH(e, n, t[n], r);
			return e
		}
	});
	var yE = E((use, vE) => {
		"use strict";
		var aH = st().f,
			sH = sr(),
			pE = Oa(),
			oH = Et(),
			lH = Fa(),
			uH = Ma(),
			hH = Ia(),
			cH = Ca(),
			Jn = gt(),
			dE = ql().fastKey,
			gE = Er(),
			mE = gE.set,
			Nl = gE.getterFor;
		vE.exports = {
			getConstructor: function(e, t, r, n) {
				var i = e(function(c, u) {
						lH(c, a), mE(c, {
							type: t,
							index: sH(null),
							first: void 0,
							last: void 0,
							size: 0
						}), Jn || (c.size = 0), u != null && uH(u, c[n], {
							that: c,
							AS_ENTRIES: r
						})
					}),
					a = i.prototype,
					s = Nl(t),
					o = function(c, u, f) {
						var m = s(c),
							d = l(c, u),
							p, g;
						return d ? d.value = f : (m.last = d = {
							index: g = dE(u, !0),
							key: u,
							value: f,
							previous: p = m.last,
							next: void 0,
							removed: !1
						}, m.first || (m.first = d), p && (p.next = d), Jn ? m.size++ : c.size++, g !== "F" && (m.index[g] = d)), c
					},
					l = function(c, u) {
						var f = s(c),
							m = dE(u),
							d;
						if (m !== "F") return f.index[m];
						for (d = f.first; d; d = d.next)
							if (d.key == u) return d
					};
				return pE(a, {
					clear: function() {
						for (var u = this, f = s(u), m = f.index, d = f.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = void 0), delete m[d.index], d = d.next;
						f.first = f.last = void 0, Jn ? f.size = 0 : u.size = 0
					},
					delete: function(c) {
						var u = this,
							f = s(u),
							m = l(u, c);
						if (m) {
							var d = m.next,
								p = m.previous;
							delete f.index[m.index], m.removed = !0, p && (p.next = d), d && (d.previous = p), f.first == m && (f.first = d), f.last == m && (f.last = p), Jn ? f.size-- : u.size--
						}
						return !!m
					},
					forEach: function(u) {
						for (var f = s(this), m = oH(u, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : f.first;)
							for (m(d.value, d.key, this); d && d.removed;) d = d.previous
					},
					has: function(u) {
						return !!l(this, u)
					}
				}), pE(a, r ? {
					get: function(u) {
						var f = l(this, u);
						return f && f.value
					},
					set: function(u, f) {
						return o(this, u === 0 ? 0 : u, f)
					}
				} : {
					add: function(u) {
						return o(this, u = u === 0 ? 0 : u, u)
					}
				}), Jn && aH(a, "size", {
					get: function() {
						return s(this).size
					}
				}), i
			},
			setStrong: function(e, t, r) {
				var n = t + " Iterator",
					i = Nl(t),
					a = Nl(n);
				hH(e, t, function(s, o) {
					mE(this, {
						type: n,
						target: s,
						state: i(s),
						kind: o,
						last: void 0
					})
				}, function() {
					for (var s = a(this), o = s.kind, l = s.last; l && l.removed;) l = l.previous;
					return !s.target || !(s.last = l = l ? l.next : s.state.first) ? (s.target = void 0, {
						value: void 0,
						done: !0
					}) : o == "keys" ? {
						value: l.key,
						done: !1
					} : o == "values" ? {
						value: l.value,
						done: !1
					} : {
						value: [l.key, l.value],
						done: !1
					}
				}, r ? "entries" : "values", !r, !0), cH(t)
			}
		}
	});
	var EE = E(() => {
		"use strict";
		var fH = cE(),
			pH = yE();
		fH("Map", function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}, pH)
	});
	var SE = E((fse, bE) => {
		var dH = te();
		bE.exports = dH.Promise
	});
	var xE = E((pse, _E) => {
		var mH = te(),
			gH = br(),
			vH = kn(),
			yH = mH.TypeError;
		_E.exports = function(e) {
			if (gH(e)) return e;
			throw yH(vH(e) + " is not a constructor")
		}
	});
	var AE = E((dse, IE) => {
		var TE = Ne(),
			EH = xE(),
			bH = _e(),
			SH = bH("species");
		IE.exports = function(e, t) {
			var r = TE(e).constructor,
				n;
			return r === void 0 || (n = TE(r)[SH]) == null ? t : EH(n)
		}
	});
	var Bl = E((mse, PE) => {
		var _H = er();
		PE.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(_H)
	});
	var $l = E((gse, qE) => {
		var Ye = te(),
			xH = Aa(),
			TH = Et(),
			CE = Se(),
			IH = at(),
			AH = Fe(),
			wE = il(),
			PH = Zn(),
			ME = oa(),
			CH = Bl(),
			wH = Yr(),
			Ul = Ye.setImmediate,
			Wl = Ye.clearImmediate,
			MH = Ye.process,
			Vl = Ye.Dispatch,
			FH = Ye.Function,
			FE = Ye.MessageChannel,
			OH = Ye.String,
			Gl = 0,
			ei = {},
			OE = "onreadystatechange",
			ti, _r, zl, Hl;
		try {
			ti = Ye.location
		} catch {}
		var Xl = function(e) {
				if (IH(ei, e)) {
					var t = ei[e];
					delete ei[e], t()
				}
			},
			jl = function(e) {
				return function() {
					Xl(e)
				}
			},
			DE = function(e) {
				Xl(e.data)
			},
			RE = function(e) {
				Ye.postMessage(OH(e), ti.protocol + "//" + ti.host)
			};
		(!Ul || !Wl) && (Ul = function(t) {
			var r = PH(arguments, 1);
			return ei[++Gl] = function() {
				xH(CE(t) ? t : FH(t), void 0, r)
			}, _r(Gl), Gl
		}, Wl = function(t) {
			delete ei[t]
		}, wH ? _r = function(e) {
			MH.nextTick(jl(e))
		} : Vl && Vl.now ? _r = function(e) {
			Vl.now(jl(e))
		} : FE && !CH ? (zl = new FE, Hl = zl.port2, zl.port1.onmessage = DE, _r = TH(Hl.postMessage, Hl)) : Ye.addEventListener && CE(Ye.postMessage) && !Ye.importScripts && ti && ti.protocol !== "file:" && !AH(RE) ? (_r = RE, Ye.addEventListener("message", DE, !1)) : OE in ME("script") ? _r = function(e) {
			wE.appendChild(ME("script"))[OE] = function() {
				wE.removeChild(this), Xl(e)
			}
		} : _r = function(e) {
			setTimeout(jl(e), 0)
		});
		qE.exports = {
			set: Ul,
			clear: Wl
		}
	});
	var kE = E((vse, LE) => {
		var DH = er(),
			RH = te();
		LE.exports = /ipad|iphone|ipod/i.test(DH) && RH.Pebble !== void 0
	});
	var BE = E((yse, NE) => {
		var qH = er();
		NE.exports = /web0s(?!.*chrome)/i.test(qH)
	});
	var $E = E((Ese, XE) => {
		var Tr = te(),
			VE = Et(),
			LH = la().f,
			Kl = $l().set,
			kH = Bl(),
			NH = kE(),
			BH = BE(),
			Yl = Yr(),
			GE = Tr.MutationObserver || Tr.WebKitMutationObserver,
			zE = Tr.document,
			HE = Tr.process,
			Da = Tr.Promise,
			jE = LH(Tr, "queueMicrotask"),
			WE = jE && jE.value,
			ri, xr, ni, Qr, Ql, Zl, Ra, UE;
		WE || (ri = function() {
			var e, t;
			for (Yl && (e = HE.domain) && e.exit(); xr;) {
				t = xr.fn, xr = xr.next;
				try {
					t()
				} catch (r) {
					throw xr ? Qr() : ni = void 0, r
				}
			}
			ni = void 0, e && e.enter()
		}, !kH && !Yl && !BH && GE && zE ? (Ql = !0, Zl = zE.createTextNode(""), new GE(ri).observe(Zl, {
			characterData: !0
		}), Qr = function() {
			Zl.data = Ql = !Ql
		}) : !NH && Da && Da.resolve ? (Ra = Da.resolve(void 0), Ra.constructor = Da, UE = VE(Ra.then, Ra), Qr = function() {
			UE(ri)
		}) : Yl ? Qr = function() {
			HE.nextTick(ri)
		} : (Kl = VE(Kl, Tr), Qr = function() {
			Kl(ri)
		}));
		XE.exports = WE || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			ni && (ni.next = t), xr || (xr = t, Qr()), ni = t
		}
	});
	var Jl = E((bse, YE) => {
		"use strict";
		var KE = yt(),
			VH = function(e) {
				var t, r;
				this.promise = new e(function(n, i) {
					if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
					t = n, r = i
				}), this.resolve = KE(t), this.reject = KE(r)
			};
		YE.exports.f = function(e) {
			return new VH(e)
		}
	});
	var ZE = E((Sse, QE) => {
		var GH = Ne(),
			zH = He(),
			HH = Jl();
		QE.exports = function(e, t) {
			if (GH(e), zH(t) && t.constructor === e) return t;
			var r = HH.f(e),
				n = r.resolve;
			return n(t), r.promise
		}
	});
	var eb = E((_se, JE) => {
		var jH = te();
		JE.exports = function(e, t) {
			var r = jH.console;
			r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t))
		}
	});
	var rb = E((xse, tb) => {
		tb.exports = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (t) {
				return {
					error: !0,
					value: t
				}
			}
		}
	});
	var ib = E((Tse, nb) => {
		nb.exports = typeof window == "object"
	});
	var Ib = E(() => {
		"use strict";
		var Ba = se(),
			La = jr(),
			Vt = te(),
			UH = it(),
			Gt = nt(),
			ka = SE(),
			ab = kt(),
			WH = Oa(),
			sb = _a(),
			XH = Kn(),
			$H = Ca(),
			eu = yt(),
			ii = Se(),
			KH = He(),
			YH = Fa(),
			QH = Gn(),
			lb = Ma(),
			ZH = ya(),
			JH = AE(),
			mb = $l().set,
			gb = $E(),
			ej = ZE(),
			tj = eb(),
			vb = Jl(),
			tu = rb(),
			au = Er(),
			rj = ma(),
			nj = _e(),
			ij = ib(),
			Na = Yr(),
			ub = tr(),
			aj = nj("species"),
			zt = "Promise",
			hb = au.get,
			sj = au.set,
			oj = au.getterFor(zt),
			Ir = ka && ka.prototype,
			ot = ka,
			Zr = Ir,
			yb = Vt.TypeError,
			ru = Vt.document,
			su = Vt.process,
			tn = vb.f,
			lj = tn,
			uj = !!(ru && ru.createEvent && Vt.dispatchEvent),
			Eb = ii(Vt.PromiseRejectionEvent),
			bb = "unhandledrejection",
			hj = "rejectionhandled",
			cb = 0,
			Sb = 1,
			cj = 2,
			ou = 1,
			_b = 2,
			nu = !1,
			qa, fb, lu, pb, ai = rj(zt, function() {
				var e = QH(ot),
					t = e !== String(ot);
				if (!t && ub === 66 || La && !Zr.finally) return !0;
				if (ub >= 51 && /native code/.test(e)) return !1;
				var r = new ot(function(a) {
						a(1)
					}),
					n = function(a) {
						a(function() {}, function() {})
					},
					i = r.constructor = {};
				return i[aj] = n, nu = r.then(function() {}) instanceof n, nu ? !t && ij && !Eb : !0
			}),
			fj = ai || !ZH(function(e) {
				ot.all(e).catch(function() {})
			}),
			xb = function(e) {
				var t;
				return KH(e) && ii(t = e.then) ? t : !1
			},
			uu = function(e, t) {
				if (!e.notified) {
					e.notified = !0;
					var r = e.reactions;
					gb(function() {
						for (var n = e.value, i = e.state == Sb, a = 0; r.length > a;) {
							var s = r[a++],
								o = i ? s.ok : s.fail,
								l = s.resolve,
								c = s.reject,
								u = s.domain,
								f, m, d;
							try {
								o ? (i || (e.rejection === _b && dj(e), e.rejection = ou), o === !0 ? f = n : (u && u.enter(), f = o(n), u && (u.exit(), d = !0)), f === s.promise ? c(yb("Promise-chain cycle")) : (m = xb(f)) ? Gt(m, f, l, c) : l(f)) : c(n)
							} catch (p) {
								u && !d && u.exit(), c(p)
							}
						}
						e.reactions = [], e.notified = !1, t && !e.rejection && pj(e)
					})
				}
			},
			Tb = function(e, t, r) {
				var n, i;
				uj ? (n = ru.createEvent("Event"), n.promise = t, n.reason = r, n.initEvent(e, !1, !0), Vt.dispatchEvent(n)) : n = {
					promise: t,
					reason: r
				}, !Eb && (i = Vt["on" + e]) ? i(n) : e === bb && tj("Unhandled promise rejection", r)
			},
			pj = function(e) {
				Gt(mb, Vt, function() {
					var t = e.facade,
						r = e.value,
						n = db(e),
						i;
					if (n && (i = tu(function() {
							Na ? su.emit("unhandledRejection", r, t) : Tb(bb, t, r)
						}), e.rejection = Na || db(e) ? _b : ou, i.error)) throw i.value
				})
			},
			db = function(e) {
				return e.rejection !== ou && !e.parent
			},
			dj = function(e) {
				Gt(mb, Vt, function() {
					var t = e.facade;
					Na ? su.emit("rejectionHandled", t) : Tb(hj, t, e.value)
				})
			},
			Jr = function(e, t, r) {
				return function(n) {
					e(t, n, r)
				}
			},
			en = function(e, t, r) {
				e.done || (e.done = !0, r && (e = r), e.value = t, e.state = cj, uu(e, !0))
			},
			iu = function(e, t, r) {
				if (!e.done) {
					e.done = !0, r && (e = r);
					try {
						if (e.facade === t) throw yb("Promise can't be resolved itself");
						var n = xb(t);
						n ? gb(function() {
							var i = {
								done: !1
							};
							try {
								Gt(n, t, Jr(iu, i, e), Jr(en, i, e))
							} catch (a) {
								en(i, a, e)
							}
						}) : (e.value = t, e.state = Sb, uu(e, !1))
					} catch (i) {
						en({
							done: !1
						}, i, e)
					}
				}
			};
		if (ai && (ot = function(t) {
				YH(this, Zr), eu(t), Gt(qa, this);
				var r = hb(this);
				try {
					t(Jr(iu, r), Jr(en, r))
				} catch (n) {
					en(r, n)
				}
			}, Zr = ot.prototype, qa = function(t) {
				sj(this, {
					type: zt,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: [],
					rejection: !1,
					state: cb,
					value: void 0
				})
			}, qa.prototype = WH(Zr, {
				then: function(t, r) {
					var n = oj(this),
						i = n.reactions,
						a = tn(JH(this, ot));
					return a.ok = ii(t) ? t : !0, a.fail = ii(r) && r, a.domain = Na ? su.domain : void 0, n.parent = !0, i[i.length] = a, n.state != cb && uu(n, !1), a.promise
				},
				catch: function(e) {
					return this.then(void 0, e)
				}
			}), fb = function() {
				var e = new qa,
					t = hb(e);
				this.promise = e, this.resolve = Jr(iu, t), this.reject = Jr(en, t)
			}, vb.f = tn = function(e) {
				return e === ot || e === lu ? new fb(e) : lj(e)
			}, !La && ii(ka) && Ir !== Object.prototype)) {
			pb = Ir.then, nu || (ab(Ir, "then", function(t, r) {
				var n = this;
				return new ot(function(i, a) {
					Gt(pb, n, i, a)
				}).then(t, r)
			}, {
				unsafe: !0
			}), ab(Ir, "catch", Zr.catch, {
				unsafe: !0
			}));
			try {
				delete Ir.constructor
			} catch {}
			sb && sb(Ir, Zr)
		}
		Ba({
			global: !0,
			wrap: !0,
			forced: ai
		}, {
			Promise: ot
		});
		XH(ot, zt, !1, !0);
		$H(zt);
		lu = UH(zt);
		Ba({
			target: zt,
			stat: !0,
			forced: ai
		}, {
			reject: function(t) {
				var r = tn(this);
				return Gt(r.reject, void 0, t), r.promise
			}
		});
		Ba({
			target: zt,
			stat: !0,
			forced: La || ai
		}, {
			resolve: function(t) {
				return ej(La && this === lu ? ot : this, t)
			}
		});
		Ba({
			target: zt,
			stat: !0,
			forced: fj
		}, {
			all: function(t) {
				var r = this,
					n = tn(r),
					i = n.resolve,
					a = n.reject,
					s = tu(function() {
						var o = eu(r.resolve),
							l = [],
							c = 0,
							u = 1;
						lb(t, function(f) {
							var m = c++,
								d = !1;
							u++, Gt(o, r, f).then(function(p) {
								d || (d = !0, l[m] = p, --u || i(l))
							}, a)
						}), --u || i(l)
					});
				return s.error && a(s.value), n.promise
			},
			race: function(t) {
				var r = this,
					n = tn(r),
					i = n.reject,
					a = tu(function() {
						var s = eu(r.resolve);
						lb(t, function(o) {
							Gt(s, r, o).then(n.resolve, i)
						})
					});
				return a.error && i(a.value), n.promise
			}
		})
	});
	var Rb = E((Pse, Db) => {
		var Mb = te(),
			Fb = Nn(),
			Ob = Se(),
			mj = sr(),
			Va = Sa(),
			gj = kt(),
			vj = _e(),
			yj = jr(),
			Ab = "USE_FUNCTION_CONSTRUCTOR",
			Pb = vj("asyncIterator"),
			Cb = Mb.AsyncIterator,
			wb = Fb.AsyncIteratorPrototype,
			Mt, hu;
		if (wb) Mt = wb;
		else if (Ob(Cb)) Mt = Cb.prototype;
		else if (Fb[Ab] || Mb[Ab]) try {
			hu = Va(Va(Va(Function("return async function*(){}()")()))), Va(hu) === Object.prototype && (Mt = hu)
		} catch {}
		Mt ? yj && (Mt = mj(Mt)) : Mt = {};
		Ob(Mt[Pb]) || gj(Mt, Pb, function() {
			return this
		});
		Db.exports = Mt
	});
	var du = E((Cse, Nb) => {
		"use strict";
		var cu = Aa(),
			Ga = Ne(),
			Ej = sr(),
			qb = rr(),
			bj = Oa(),
			Lb = Er(),
			Sj = it(),
			_j = Rb(),
			za = Sj("Promise"),
			xj = Lb.set,
			fu = Lb.get,
			pu = function(e, t, r) {
				var n = e.done;
				za.resolve(e.value).then(function(i) {
					t({
						done: n,
						value: i
					})
				}, r)
			},
			kb = function(t) {
				xj(this, {
					iterator: Ga(t),
					next: t.next
				})
			};
		kb.prototype = bj(Ej(_j), {
			next: function(t) {
				var r = fu(this),
					n = !!arguments.length;
				return new za(function(i, a) {
					var s = Ga(cu(r.next, r.iterator, n ? [t] : []));
					pu(s, i, a)
				})
			},
			return: function(e) {
				var t = fu(this).iterator,
					r = !!arguments.length;
				return new za(function(n, i) {
					var a = qb(t, "return");
					if (a === void 0) return n({
						done: !0,
						value: e
					});
					var s = Ga(cu(a, t, r ? [e] : []));
					pu(s, n, i)
				})
			},
			throw: function(e) {
				var t = fu(this).iterator,
					r = !!arguments.length;
				return new za(function(n, i) {
					var a = qb(t, "throw");
					if (a === void 0) return i(e);
					var s = Ga(cu(a, t, r ? [e] : []));
					pu(s, n, i)
				})
			}
		});
		Nb.exports = kb
	});
	var Vb = E((wse, Bb) => {
		var Tj = nt(),
			Ij = du(),
			Aj = Ne(),
			Pj = $n(),
			Cj = rr(),
			wj = _e(),
			Mj = wj("asyncIterator");
		Bb.exports = function(e, t) {
			var r = arguments.length < 2 ? Cj(e, Mj) : t;
			return r ? Aj(Tj(r, e)) : new Ij(Pj(e))
		}
	});
	var zb = E((Mse, Gb) => {
		var Fj = te();
		Gb.exports = function(e) {
			return Fj[e].prototype
		}
	});
	var Wb = E((Fse, Ub) => {
		"use strict";
		var Oj = te(),
			Hb = nt(),
			jb = yt(),
			mu = Ne(),
			Dj = it(),
			Rj = rr(),
			qj = 9007199254740991,
			Lj = Oj.TypeError,
			si = function(e) {
				var t = e == 0,
					r = e == 1,
					n = e == 2,
					i = e == 3;
				return function(a, s, o) {
					mu(a);
					var l = Dj("Promise"),
						c = jb(a.next),
						u = 0,
						f = s !== void 0;
					return (f || !t) && jb(s), new l(function(m, d) {
						var p = function(v, y) {
								try {
									var b = Rj(a, "return");
									if (b) return l.resolve(Hb(b, a)).then(function() {
										v(y)
									}, function(S) {
										d(S)
									})
								} catch (S) {
									return d(S)
								}
								v(y)
							},
							g = function(v) {
								p(d, v)
							},
							h = function() {
								try {
									if (t && u > qj && f) throw Lj("The allowed number of iterations has been exceeded");
									l.resolve(mu(Hb(c, a))).then(function(v) {
										try {
											if (mu(v).done) t ? (o.length = u, m(o)) : m(i ? !1 : n || void 0);
											else {
												var y = v.value;
												f ? l.resolve(t ? s(y, u) : s(y)).then(function(b) {
													r ? h() : n ? b ? h() : p(m, !1) : t ? (o[u++] = b, h()) : b ? p(m, i || y) : h()
												}, g) : (o[u++] = y, h())
											}
										} catch (b) {
											g(b)
										}
									}, g)
								} catch (v) {
									g(v)
								}
							};
						h()
					})
				}
			};
		Ub.exports = {
			toArray: si(0),
			forEach: si(1),
			every: si(2),
			some: si(3),
			find: si(4)
		}
	});
	var $b = E((Ose, Xb) => {
		"use strict";
		var kj = Et(),
			Nj = Ie(),
			Bj = br(),
			Vj = Vb(),
			Gj = $n(),
			zj = Xn(),
			Hj = rr(),
			jj = zb(),
			Uj = it(),
			Wj = _e(),
			Xj = du(),
			$j = Wb().toArray,
			Kj = Wj("asyncIterator"),
			Yj = jj("Array").values;
		Xb.exports = function(t) {
			var r = this,
				n = arguments.length,
				i = n > 1 ? arguments[1] : void 0,
				a = n > 2 ? arguments[2] : void 0;
			return new(Uj("Promise"))(function(s) {
				var o = Nj(t);
				i !== void 0 && (i = kj(i, a));
				var l = Hj(o, Kj),
					c = l ? void 0 : zj(o) || Yj,
					u = Bj(r) ? new r : [],
					f = l ? Vj(o, l) : new Xj(Gj(o, c));
				s($j(f, i, u))
			})
		}
	});
	var Kb = E(() => {
		var Qj = se(),
			Zj = $b();
		Qj({
			target: "Array",
			stat: !0
		}, {
			fromAsync: Zj
		})
	});
	var Yb = E(() => {
		hl()
	});
	var Qb = E(() => {
		"use strict";
		var Jj = se(),
			eU = Ct().filterReject,
			tU = we();
		Jj({
			target: "Array",
			proto: !0
		}, {
			filterOut: function(t) {
				return eU(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		tU("filterOut")
	});
	var Zb = E(() => {
		"use strict";
		var rU = se(),
			nU = Ct().filterReject,
			iU = we();
		rU({
			target: "Array",
			proto: !0
		}, {
			filterReject: function(t) {
				return nU(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		iU("filterReject")
	});
	var gu = E((Gse, eS) => {
		var aU = Et(),
			sU = gr(),
			oU = Ie(),
			lU = ye(),
			Jb = function(e) {
				var t = e == 1;
				return function(r, n, i) {
					for (var a = oU(r), s = sU(a), o = aU(n, i), l = lU(s), c, u; l-- > 0;)
						if (c = s[l], u = o(c, l, a), u) switch (e) {
							case 0:
								return c;
							case 1:
								return l
						}
					return t ? -1 : void 0
				}
			};
		eS.exports = {
			findLast: Jb(0),
			findLastIndex: Jb(1)
		}
	});
	var tS = E(() => {
		"use strict";
		var uU = se(),
			hU = gu().findLast,
			cU = we();
		uU({
			target: "Array",
			proto: !0
		}, {
			findLast: function(t) {
				return hU(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		cU("findLast")
	});
	var rS = E(() => {
		"use strict";
		var fU = se(),
			pU = gu().findLastIndex,
			dU = we();
		fU({
			target: "Array",
			proto: !0
		}, {
			findLastIndex: function(t) {
				return pU(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		dU("findLastIndex")
	});
	var iS = E((Wse, nS) => {
		nS.exports = function(e, t) {
			for (var r = 0, n = t.length, i = new e(n); n > r;) i[r] = t[r++];
			return i
		}
	});
	var sS = E((Xse, aS) => {
		var mU = te(),
			gU = Et(),
			vU = ge(),
			yU = gr(),
			EU = Ie(),
			bU = Bn(),
			SU = ye(),
			_U = sr(),
			xU = iS(),
			TU = mU.Array,
			IU = vU([].push);
		aS.exports = function(e, t, r, n) {
			for (var i = EU(e), a = yU(i), s = gU(t, r), o = _U(null), l = SU(a), c = 0, u, f, m; l > c; c++) m = a[c], f = bU(s(m, c, i)), f in o ? IU(o[f], m) : o[f] = [m];
			if (n && (u = n(i), u !== TU))
				for (f in o) o[f] = xU(u, o[f]);
			return o
		}
	});
	var oS = E(() => {
		"use strict";
		var AU = se(),
			PU = sS(),
			CU = cl(),
			wU = we();
		AU({
			target: "Array",
			proto: !0
		}, {
			groupBy: function(t) {
				var r = arguments.length > 1 ? arguments[1] : void 0;
				return PU(this, t, r, CU)
			}
		});
		wU("groupBy")
	});
	var hS = E(() => {
		var MU = se(),
			FU = ar(),
			lS = Object.isFrozen,
			uS = function(e, t) {
				if (!lS || !FU(e) || !lS(e)) return !1;
				for (var r = 0, n = e.length, i; r < n;)
					if (i = e[r++], !(typeof i == "string" || t && typeof i > "u")) return !1;
				return n !== 0
			};
		MU({
			target: "Array",
			stat: !0
		}, {
			isTemplateObject: function(t) {
				if (!uS(t, !0)) return !1;
				var r = t.raw;
				return !(r.length !== t.length || !uS(r, !1))
			}
		})
	});
	var pS = E(() => {
		"use strict";
		var OU = gt(),
			DU = we(),
			cS = Ie(),
			fS = ye(),
			RU = st().f;
		OU && !("lastItem" in []) && (RU(Array.prototype, "lastItem", {
			configurable: !0,
			get: function() {
				var t = cS(this),
					r = fS(t);
				return r == 0 ? void 0 : t[r - 1]
			},
			set: function(t) {
				var r = cS(this),
					n = fS(r);
				return r[n == 0 ? 0 : n - 1] = t
			}
		}), DU("lastItem"))
	});
	var dS = E(() => {
		"use strict";
		var qU = gt(),
			LU = we(),
			kU = Ie(),
			NU = ye(),
			BU = st().f;
		qU && !("lastIndex" in []) && (BU(Array.prototype, "lastIndex", {
			configurable: !0,
			get: function() {
				var t = kU(this),
					r = NU(t);
				return r == 0 ? 0 : r - 1
			}
		}), LU("lastIndex"))
	});
	var vS = E((roe, gS) => {
		"use strict";
		var VU = it(),
			Ha = ge(),
			GU = yt(),
			zU = ye(),
			HU = Ie(),
			jU = Sr(),
			mS = VU("Map"),
			vu = mS.prototype,
			UU = Ha(vu.forEach),
			WU = Ha(vu.has),
			XU = Ha(vu.set),
			$U = Ha([].push);
		gS.exports = function(t) {
			var r = HU(this),
				n = zU(r),
				i = jU(r, 0),
				a = new mS,
				s = t != null ? GU(t) : function(u) {
					return u
				},
				o, l, c;
			for (o = 0; o < n; o++) l = r[o], c = s(l), WU(a, c) || XU(a, c, l);
			return UU(a, function(u) {
				$U(i, u)
			}), i
		}
	});
	var yS = E(() => {
		"use strict";
		var KU = se(),
			YU = we(),
			QU = vS();
		KU({
			target: "Array",
			proto: !0
		}, {
			uniqueBy: QU
		});
		YU("uniqueBy")
	});
	var bS = E((aoe, ES) => {
		var ZU = U1();
		EE();
		Ib();
		Kb();
		Yb();
		Qb();
		Zb();
		tS();
		rS();
		oS();
		hS();
		pS();
		dS();
		yS();
		ES.exports = ZU
	});
	var NS = E(Ka => {
		"use strict";
		Object.defineProperty(Ka, "__esModule", {
			value: !0
		});
		Ka.strFromU8 = kS;
		Ka.unzip = cW;
		var SS = {},
			JU = function(e, t, r, n, i) {
				let a = new Worker(SS[t] || (SS[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
					type: "text/javascript"
				}))));
				return a.onmessage = function(s) {
					let o = s.data,
						l = o.$e$;
					if (l) {
						let c = new Error(l[0]);
						c.code = l[1], c.stack = l[2], i(c, null)
					} else i(null, o)
				}, a.postMessage(r, n), a
			},
			Ue = Uint8Array,
			hr = Uint16Array,
			yu = Uint32Array,
			Eu = new Ue([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
			bu = new Ue([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
			IS = new Ue([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
			AS = function(e, t) {
				let r = new hr(31);
				for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
				let i = new yu(r[30]);
				for (n = 1; n < 30; ++n)
					for (let a = r[n]; a < r[n + 1]; ++a) i[a] = a - r[n] << 5 | n;
				return [r, i]
			},
			PS = AS(Eu, 2),
			Su = PS[0],
			eW = PS[1];
		Su[28] = 258, eW[258] = 28;
		var tW = AS(bu, 0),
			CS = tW[0],
			Xa = new hr(32768);
		for (de = 0; de < 32768; ++de) {
			let e = (43690 & de) >>> 1 | (21845 & de) << 1;
			e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, Xa[de] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
		}
		var de, rn = function(e, t, r) {
				let n = e.length,
					i = 0,
					a = new hr(t);
				for (; i < n; ++i) e[i] && ++a[e[i] - 1];
				let s = new hr(t);
				for (i = 0; i < t; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
				let o;
				if (r) {
					o = new hr(1 << t);
					let l = 15 - t;
					for (i = 0; i < n; ++i)
						if (e[i]) {
							let c = i << 4 | e[i],
								u = t - e[i],
								f = s[e[i] - 1]++ << u;
							for (let m = f | (1 << u) - 1; f <= m; ++f) o[Xa[f] >>> l] = c
						}
				} else
					for (o = new hr(n), i = 0; i < n; ++i) e[i] && (o[i] = Xa[s[e[i] - 1]++] >>> 15 - e[i]);
				return o
			},
			oi = new Ue(288);
		for (de = 0; de < 144; ++de) oi[de] = 8;
		for (de = 144; de < 256; ++de) oi[de] = 9;
		for (de = 256; de < 280; ++de) oi[de] = 7;
		for (de = 280; de < 288; ++de) oi[de] = 8;
		var wS = new Ue(32);
		for (de = 0; de < 32; ++de) wS[de] = 5;
		var MS = rn(oi, 9, 1),
			FS = rn(wS, 5, 1),
			Ua = function(e) {
				let t = e[0];
				for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
				return t
			},
			lt = function(e, t, r) {
				let n = t / 8 | 0;
				return (e[n] | e[n + 1] << 8) >> (7 & t) & r
			},
			Wa = function(e, t) {
				let r = t / 8 | 0;
				return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
			},
			OS = function(e) {
				return (e + 7) / 8 | 0
			},
			$a = function(e, t, r) {
				(t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
				let n = new(e.BYTES_PER_ELEMENT === 2 ? hr : e.BYTES_PER_ELEMENT === 4 ? yu : Ue)(r - t);
				return n.set(e.subarray(t, r)), n
			},
			DS = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
			je = function(e, t, r) {
				let n = new Error(t || DS[e]);
				if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, je), !r) throw n;
				return n
			},
			RS = function(e, t, r) {
				let n = e.length;
				if (!n || r && r.f && !r.l) return t || new Ue(0);
				let i = !t || r,
					a = !r || r.i;
				r || (r = {}), t || (t = new Ue(3 * n));
				let s = function(S) {
						let _ = t.length;
						if (S > _) {
							let T = new Ue(Math.max(2 * _, S));
							T.set(t), t = T
						}
					},
					o = r.f || 0,
					l = r.p || 0,
					c = r.b || 0,
					u = r.l,
					f = r.d,
					m = r.m,
					d = r.n,
					p = 8 * n;
				do {
					if (!u) {
						o = lt(e, l, 1);
						let x = lt(e, l + 1, 3);
						if (l += 3, !x) {
							let P = e[(h = OS(l) + 4) - 4] | e[h - 3] << 8,
								D = h + P;
							if (D > n) {
								a && je(0);
								break
							}
							i && s(c + P), t.set(e.subarray(h, D), c), r.b = c += P, r.p = l = 8 * D, r.f = o;
							continue
						}
						if (x === 1) u = MS, f = FS, m = 9, d = 5;
						else if (x === 2) {
							let P = lt(e, l, 31) + 257,
								D = lt(e, l + 10, 15) + 4,
								w = P + lt(e, l + 5, 31) + 1;
							l += 14;
							let C = new Ue(w),
								R = new Ue(19);
							for (var g = 0; g < D; ++g) R[IS[g]] = lt(e, l + 3 * g, 7);
							l += 3 * D;
							let F = Ua(R),
								M = (1 << F) - 1,
								N = rn(R, F, 1);
							for (g = 0; g < w;) {
								let $ = N[lt(e, l, M)];
								var h;
								if (l += 15 & $, (h = $ >>> 4) < 16) C[g++] = h;
								else {
									var v = 0;
									let A = 0;
									for (h === 16 ? (A = 3 + lt(e, l, 3), l += 2, v = C[g - 1]) : h === 17 ? (A = 3 + lt(e, l, 7), l += 3) : h === 18 && (A = 11 + lt(e, l, 127), l += 7); A--;) C[g++] = v
								}
							}
							let z = C.subarray(0, P);
							var y = C.subarray(P);
							m = Ua(z), d = Ua(y), u = rn(z, m, 1), f = rn(y, d, 1)
						} else je(1);
						if (l > p) {
							a && je(0);
							break
						}
					}
					i && s(c + 131072);
					let S = (1 << m) - 1,
						_ = (1 << d) - 1,
						T = l;
					for (;; T = l) {
						let x = (v = u[Wa(e, l) & S]) >>> 4;
						if (l += 15 & v, l > p) {
							a && je(0);
							break
						}
						if (v || je(2), x < 256) t[c++] = x;
						else {
							if (x === 256) {
								T = l, u = null;
								break
							} {
								let P = x - 254;
								if (x > 264) {
									var b = Eu[g = x - 257];
									P = lt(e, l, (1 << b) - 1) + Su[g], l += b
								}
								let D = f[Wa(e, l) & _],
									w = D >>> 4;
								if (D || je(3), l += 15 & D, y = CS[w], w > 3 && (b = bu[w], y += Wa(e, l) & (1 << b) - 1, l += b), l > p) {
									a && je(0);
									break
								}
								i && s(c + 131072);
								let C = c + P;
								for (; c < C; c += 4) t[c] = t[c - y], t[c + 1] = t[c + 1 - y], t[c + 2] = t[c + 2 - y], t[c + 3] = t[c + 3 - y];
								c = C
							}
						}
					}
					r.l = u, r.p = T, r.b = c, r.f = o, u && (o = 1, r.m = m, r.d = f, r.n = d)
				} while (!o);
				return c === t.length ? t : $a(t, 0, c)
			},
			rW = function(e, t) {
				let r = {};
				for (var n in e) r[n] = e[n];
				for (var n in t) r[n] = t[n];
				return r
			},
			_S = function(e, t, r) {
				let n = e(),
					i = e.toString(),
					a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(",");
				for (let s = 0; s < n.length; ++s) {
					let o = n[s],
						l = a[s];
					if (typeof o == "function") {
						t += ";" + l + "=";
						let c = o.toString();
						if (o.prototype)
							if (c.indexOf("[native code]") !== -1) {
								let u = c.indexOf(" ", 8) + 1;
								t += c.slice(u, c.indexOf("(", u))
							} else {
								t += c;
								for (let u in o.prototype) t += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString()
							}
						else t += c
					} else r[l] = o
				}
				return [t, r]
			},
			ja = [],
			nW = function(e) {
				let t = [];
				for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
				return t
			},
			iW = function(e, t, r, n) {
				let i;
				if (!ja[r]) {
					let s = "",
						o = {},
						l = e.length - 1;
					for (let c = 0; c < l; ++c) i = _S(e[c], s, o), s = i[0], o = i[1];
					ja[r] = _S(e[l], s, o)
				}
				let a = rW({}, ja[r][1]);
				return JU(ja[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, nW(a), n)
			},
			aW = function() {
				return [Ue, hr, yu, Eu, bu, IS, Su, CS, MS, FS, Xa, DS, rn, Ua, lt, Wa, OS, $a, je, RS, _u, qS, LS]
			},
			qS = function(e) {
				return postMessage(e, [e.buffer])
			},
			LS = function(e) {
				return e && e.size && new Ue(e.size)
			},
			sW = function(e, t, r, n, i, a) {
				var s = iW(r, n, i, function(o, l) {
					s.terminate(), a(o, l)
				});
				return s.postMessage([e, t], t.consume ? [e.buffer] : []),
					function() {
						s.terminate()
					}
			},
			ur = function(e, t) {
				return e[t] | e[t + 1] << 8
			},
			Ht = function(e, t) {
				return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
			};

		function oW(e, t, r) {
			return r || (r = t, t = {}), typeof r != "function" && je(7), sW(e, t, [aW], function(n) {
				return qS(_u(n.data[0], LS(n.data[1])))
			}, 1, r)
		}

		function _u(e, t) {
			return RS(e, t)
		}
		var xS = typeof TextDecoder < "u" && new TextDecoder,
			lW = function(e) {
				for (let t = "", r = 0;;) {
					let n = e[r++],
						i = (n > 127) + (n > 223) + (n > 239);
					if (r + i > e.length) return [t, $a(e, r - 1)];
					i ? i === 3 ? (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : t += 1 & i ? String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
				}
			};

		function kS(e, t) {
			if (t) {
				let r = "";
				for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
				return r
			}
			if (xS) return xS.decode(e); {
				let r = lW(e),
					n = r[0];
				return r[1].length && je(8), n
			}
		}
		var uW = function(e, t) {
				return t + 30 + ur(e, t + 26) + ur(e, t + 28)
			},
			hW = function(e, t, r) {
				let n = ur(e, t + 28),
					i = kS(e.subarray(t + 46, t + 46 + n), !(2048 & ur(e, t + 8))),
					a = t + 46 + n,
					s = Ht(e, t + 20),
					o = r && s === 4294967295 ? z64e(e, a) : [s, Ht(e, t + 24), Ht(e, t + 42)],
					l = o[0],
					c = o[1],
					u = o[2];
				return [ur(e, t + 10), l, c, i, a + ur(e, t + 30) + ur(e, t + 32), u]
			},
			TS = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
				e()
			};

		function cW(e, t, r) {
			r || (r = t, t = {}), typeof r != "function" && je(7);
			let n = [],
				i = function() {
					for (let c = 0; c < n.length; ++c) n[c]()
				},
				a = {},
				s = function(c, u) {
					TS(function() {
						r(c, u)
					})
				};
			TS(function() {
				s = r
			});
			let o = e.length - 22;
			for (; Ht(e, o) !== 101010256; --o)
				if (!o || e.length - o > 65558) return s(je(13, 0, 1), null), i;
			let l = ur(e, o + 8);
			if (l) {
				let c = l,
					u = Ht(e, o + 16),
					f = u === 4294967295 || c === 65535;
				if (f) {
					let p = Ht(e, o - 12);
					f = Ht(e, p) === 101075792, f && (c = l = Ht(e, p + 32), u = Ht(e, p + 48))
				}
				let m = t && t.filter,
					d = function() {
						let p = hW(e, u, f),
							g = p[0],
							h = p[1],
							v = p[2],
							y = p[3],
							b = p[4],
							S = p[5],
							_ = uW(e, S);
						u = b;
						let T = function(x, P) {
							x ? (i(), s(x, null)) : (P && (a[y] = P), --l || s(null, a))
						};
						if (!m || m({
								name: y,
								size: h,
								originalSize: v,
								compression: g
							}))
							if (g)
								if (g === 8) {
									let x = e.subarray(_, _ + h);
									if (h < 32e4) try {
										T(null, _u(x, new Ue(v)))
									} catch (P) {
										T(P, null)
									} else n.push(oW(x, {
										size: v
									}, T))
								} else T(je(14, "unknown compression type " + g, 1), null);
						else T(null, $a(e, _, _ + h));
						else T(null, null)
					};
				for (let p = 0; p < c; ++p) d(p)
			} else s(null, {});
			return i
		}
	});

	function fW(e) {
		let t = JSON.parse(e);
		if (!("animations" in t)) throw new Error("Manifest not found");
		if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
		return t
	}

	function pW(e) {
		let t = new Uint8Array(e, 0, 32);
		return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
	}
	async function dW(e) {
		return await fetch(new URL(e).href).then(t => t.arrayBuffer())
	}
	async function mW(e) {
		return (await new Promise(r => {
			let n = new FileReader;
			n.readAsDataURL(new Blob([e])), n.onload = () => r(n.result)
		})).split(",", 2)[1]
	}
	async function gW(e) {
		let t = new Uint8Array(e),
			r = await new Promise((n, i) => {
				(0, Ya.unzip)(t, (a, s) => a ? i(a) : n(s))
			});
		return {
			read: n => (0, Ya.strFromU8)(r[n]),
			readB64: async n => await mW(r[n])
		}
	}
	async function vW(e, t) {
		if (!("assets" in e)) return e;
		async function r(i) {
			let {
				p: a
			} = i;
			if (a == null || t.read(`images/${a}`) == null) return i;
			let s = a.split(".").pop(),
				o = await t.readB64(`images/${a}`);
			if (s?.startsWith("data:")) return i.p = s, i.e = 1, i;
			switch (s) {
				case "svg":
				case "svg+xml":
					i.p = `data:image/svg+xml;base64,${o}`;
					break;
				case "png":
				case "jpg":
				case "jpeg":
				case "gif":
				case "webp":
					i.p = `data:image/${s};base64,${o}`;
					break;
				default:
					i.p = `data:;base64,${o}`
			}
			return i.e = 1, i
		}
		return (await Promise.all(e.assets.map(r))).map((i, a) => {
			e.assets[a] = i
		}), e
	}
	async function yW(e) {
		let t = await gW(e),
			r = fW(t.read("manifest.json"));
		return (await Promise.all(r.animations.map(i => {
			let a = JSON.parse(t.read(`animations/${i.id}.json`));
			return vW(a, t)
		})))[0]
	}
	async function BS(e) {
		let t = await dW(e);
		return pW(t) ? await yW(t) : JSON.parse(new TextDecoder().decode(t))
	}
	var Ya, VS = pe(() => {
		"use strict";
		Ya = oe(NS())
	});
	var US = {};
	ze(US, {
		cleanupElement: () => Iu,
		createInstance: () => HS,
		destroy: () => SW,
		init: () => jS,
		ready: () => _W
	});
	var Qa, loe, EW, bW, li, xu, Za, GS, Tu, zS, HS, Iu, jS, SW, _W, WS = pe(() => {
		"use strict";
		Qa = oe(Po()), loe = oe(bS());
		VS();
		EW = () => window.Webflow.require("lottie").lottie, bW = () => !!(window.Webflow.env("design") || window.Webflow.env("preview")), li = {
			Playing: "playing",
			Stopped: "stopped"
		}, xu = class {
			_cache = [];
			set(t, r) {
				let n = (0, Qa.default)(this._cache, ({
					wrapper: i
				}) => i === t);
				n !== -1 && this._cache.splice(n, 1), this._cache.push({
					wrapper: t,
					instance: r
				})
			}
			delete(t) {
				let r = (0, Qa.default)(this._cache, ({
					wrapper: n
				}) => n === t);
				r !== -1 && this._cache.splice(r, 1)
			}
			get(t) {
				let r = (0, Qa.default)(this._cache, ({
					wrapper: n
				}) => n === t);
				return r !== -1 ? this._cache[r].instance : null
			}
		}, Za = new xu, GS = {}, Tu = class {
			config = null;
			currentState = li.Stopped;
			animationItem;
			handlers = {
				enterFrame: [],
				complete: [],
				loop: [],
				dataReady: [],
				destroy: [],
				error: []
			};
			load(t) {
				let n = (t.dataset || GS).src || "";
				n.endsWith(".lottie") ? BS(n).then(i => {
					this._loadAnimation(t, i)
				}) : this._loadAnimation(t, void 0), Za.set(t, this), this.container = t
			}
			_loadAnimation(t, r) {
				let n = t.dataset || GS,
					i = n.src || "",
					a = n.preserveAspectRatio || "xMidYMid meet",
					s = n.renderer || "svg",
					o = parseFloat(n.loop) === 1,
					l = parseFloat(n.direction) || 1,
					c = parseFloat(n.autoplay) === 1,
					u = parseFloat(n.duration) || 0,
					f = parseFloat(n.isIx2Target) === 1,
					m = parseFloat(n.ix2InitialState);
				isNaN(m) && (m = null);
				let d = {
					src: i,
					loop: o,
					autoplay: c,
					renderer: s,
					direction: l,
					duration: u,
					hasIx2: f,
					ix2InitialValue: m,
					preserveAspectRatio: a
				};
				if (this.animationItem && this.config && this.config.src === i && s === this.config.renderer && a === this.config.preserveAspectRatio) {
					if (o !== this.config.loop && this.setLooping(o), f || (l !== this.config.direction && this.setDirection(l), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), c && this.play(), m && m !== this.config.ix2InitialValue) {
						let g = m / 100;
						this.goToFrame(this.frames * g)
					}
					this.config = d;
					return
				}
				let p = {
					container: t,
					loop: o,
					autoplay: c,
					renderer: s,
					rendererSettings: {
						preserveAspectRatio: a,
						progressiveLoad: !0,
						hideOnTransparent: !0
					}
				};
				try {
					this.animationItem && this.destroy(), this.animationItem = EW().loadAnimation({
						...p,
						...r ? {
							animationData: r
						} : {
							path: i
						}
					})
				} catch (g) {
					this.handlers.error.forEach(h => h(g));
					return
				}
				this.animationItem && (bW() && (this.animationItem.addEventListener("enterFrame", () => {
					if (!this.isPlaying) return;
					let {
						currentFrame: g,
						totalFrames: h,
						playDirection: v
					} = this.animationItem, y = g / h * 100, b = Math.round(v === 1 ? y : 100 - y);
					this.handlers.enterFrame.forEach(S => S(b, g))
				}), this.animationItem.addEventListener("complete", () => {
					if (this.currentState !== li.Playing) {
						this.handlers.complete.forEach(g => g());
						return
					}
					if (!this.animationItem.loop) {
						this.handlers.complete.forEach(g => g());
						return
					}
					this.currentState = li.Stopped
				}), this.animationItem.addEventListener("loopComplete", g => {
					this.handlers.loop.forEach(h => h(g))
				}), this.animationItem.addEventListener("data_failed", g => {
					this.handlers.error.forEach(h => h(g))
				}), this.animationItem.addEventListener("error", g => {
					this.handlers.error.forEach(h => h(g))
				})), this.isLoaded ? (this.handlers.dataReady.forEach(g => g()), c && this.play()) : this.animationItem.addEventListener("data_ready", () => {
					if (this.handlers.dataReady.forEach(g => g()), f || (this.setDirection(l), u > 0 && u !== this.duration && this.setSpeed(this.duration / u), c && this.play()), m) {
						let g = m / 100;
						this.goToFrame(this.frames * g)
					}
				}), this.config = d)
			}
			onFrameChange(t) {
				this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
			}
			onPlaybackComplete(t) {
				this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
			}
			onLoopComplete(t) {
				this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
			}
			onDestroy(t) {
				this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
			}
			onDataReady(t) {
				this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
			}
			onError(t) {
				this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
			}
			play() {
				if (!this.animationItem) return;
				let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
				this.animationItem.goToAndPlay(t, !0), this.currentState = li.Playing
			}
			stop() {
				if (this.animationItem) {
					if (this.isPlaying) {
						let {
							playDirection: t
						} = this.animationItem, r = t === 1 ? 0 : this.frames;
						this.animationItem.goToAndStop(r, !0)
					}
					this.currentState = li.Stopped
				}
			}
			destroy() {
				this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && Za.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
			}
			get isPlaying() {
				return this.animationItem ? !this.animationItem.isPaused : !1
			}
			get isPaused() {
				return this.animationItem ? this.animationItem.isPaused : !1
			}
			get duration() {
				return this.animationItem ? this.animationItem.getDuration() : 0
			}
			get frames() {
				return this.animationItem ? this.animationItem.totalFrames : 0
			}
			get direction() {
				return this.animationItem ? this.animationItem.playDirection : 1
			}
			get isLoaded() {
				return this.animationItem, this.animationItem.isLoaded
			}
			get ix2InitialValue() {
				return this.config ? this.config.ix2InitialValue : null
			}
			goToFrame(t) {
				this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
			}
			setSubframe(t) {
				this.animationItem && this.animationItem.setSubframe(t)
			}
			setSpeed(t = 1) {
				this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
			}
			setLooping(t) {
				this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
			}
			setDirection(t) {
				this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
			}
		}, zS = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')), HS = e => {
			let t = Za.get(e);
			return t == null && (t = new Tu), t.load(e), t
		}, Iu = e => {
			let t = Za.get(e);
			t && t.destroy()
		}, jS = () => {
			zS().forEach(e => {
				parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Iu(e), HS(e)
			})
		}, SW = () => {
			zS().forEach(Iu)
		}, _W = jS
	});
	var XS = E((exports, module) => {
		typeof navigator < "u" && function(e, t) {
			typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
		}(exports, function() {
			"use strict";
			var svgNS = "http://www.w3.org/2000/svg",
				locationHref = "",
				_useWebWorker = !1,
				initialDefaultFrame = -999999,
				setWebWorker = function(e) {
					_useWebWorker = !!e
				},
				getWebWorker = function() {
					return _useWebWorker
				},
				setLocationHref = function(e) {
					locationHref = e
				},
				getLocationHref = function() {
					return locationHref
				};

			function createTag(e) {
				return document.createElement(e)
			}

			function extendPrototype(e, t) {
				var r, n, i = e.length;
				for (r = 0; r < i; r += 1)
					for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
			}

			function getDescriptor(e, t) {
				return Object.getOwnPropertyDescriptor(e, t)
			}

			function createProxyFunction(e) {
				function t() {}
				return t.prototype = e, t
			}
			var audioControllerFactory = function() {
					function e(t) {
						this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
					}
					return e.prototype = {
							addAudio: function(t) {
								this.audios.push(t)
							},
							pause: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].pause()
							},
							resume: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].resume()
							},
							setRate: function(t) {
								var r, n = this.audios.length;
								for (r = 0; r < n; r += 1) this.audios[r].setRate(t)
							},
							createAudio: function(t) {
								return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
									src: [t]
								}) : {
									isPlaying: !1,
									play: function() {
										this.isPlaying = !0
									},
									seek: function() {
										this.isPlaying = !1
									},
									playing: function() {},
									rate: function() {},
									setVolume: function() {}
								}
							},
							setAudioFactory: function(t) {
								this.audioFactory = t
							},
							setVolume: function(t) {
								this._volume = t, this._updateVolume()
							},
							mute: function() {
								this._isMuted = !0, this._updateVolume()
							},
							unmute: function() {
								this._isMuted = !1, this._updateVolume()
							},
							getVolume: function() {
								return this._volume
							},
							_updateVolume: function() {
								var t, r = this.audios.length;
								for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
							}
						},
						function() {
							return new e
						}
				}(),
				createTypedArray = function() {
					function e(t, r) {
						var n, i = 0,
							a = [];
						switch (t) {
							case "int16":
							case "uint8c":
								n = 1;
								break;
							default:
								n = 1.1
						}
						for (i = 0; i < r; i += 1) a.push(n);
						return a
					}
					return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(t, r) {
						return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
					} : e
				}();

			function createSizedArray(e) {
				return Array.apply(null, {
					length: e
				})
			}

			function _typeof$6(e) {
				return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$6(e)
			}
			var subframeEnabled = !0,
				expressionsPlugin = null,
				expressionsInterfaces = null,
				idPrefix$1 = "",
				isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
				_shouldRoundValues = !1,
				bmPow = Math.pow,
				bmSqrt = Math.sqrt,
				bmFloor = Math.floor,
				bmMax = Math.max,
				bmMin = Math.min,
				BMMath = {};

			function ProjectInterface$1() {
				return {}
			}(function() {
				var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
					r = t.length;
				for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
			})(), BMMath.random = Math.random, BMMath.abs = function(e) {
				if (_typeof$6(e) === "object" && e.length) {
					var t, r = createSizedArray(e.length),
						n = e.length;
					for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
					return r
				}
				return Math.abs(e)
			};
			var defaultCurveSegments = 150,
				degToRads = Math.PI / 180,
				roundCorner = .5519;

			function roundValues(e) {
				_shouldRoundValues = !!e
			}

			function bmRnd(e) {
				return _shouldRoundValues ? Math.round(e) : e
			}

			function styleDiv(e) {
				e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
			}

			function BMEnterFrameEvent(e, t, r, n) {
				this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
			}

			function BMCompleteEvent(e, t) {
				this.type = e, this.direction = t < 0 ? -1 : 1
			}

			function BMCompleteLoopEvent(e, t, r, n) {
				this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
			}

			function BMSegmentStartEvent(e, t, r) {
				this.type = e, this.firstFrame = t, this.totalFrames = r
			}

			function BMDestroyEvent(e, t) {
				this.type = e, this.target = t
			}

			function BMRenderFrameErrorEvent(e, t) {
				this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
			}

			function BMConfigErrorEvent(e) {
				this.type = "configError", this.nativeError = e
			}

			function BMAnimationConfigErrorEvent(e, t) {
				this.type = e, this.nativeError = t
			}
			var createElementID = (_count = 0, function() {
					return idPrefix$1 + "__lottie_element_" + (_count += 1)
				}),
				_count;

			function HSVtoRGB(e, t, r) {
				var n, i, a, s, o, l, c, u;
				switch (l = r * (1 - t), c = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
					case 0:
						n = r, i = u, a = l;
						break;
					case 1:
						n = c, i = r, a = l;
						break;
					case 2:
						n = l, i = r, a = u;
						break;
					case 3:
						n = l, i = c, a = r;
						break;
					case 4:
						n = u, i = l, a = r;
						break;
					case 5:
						n = r, i = l, a = c
				}
				return [n, i, a]
			}

			function RGBtoHSV(e, t, r) {
				var n, i = Math.max(e, t, r),
					a = Math.min(e, t, r),
					s = i - a,
					o = i === 0 ? 0 : s / i,
					l = i / 255;
				switch (i) {
					case a:
						n = 0;
						break;
					case e:
						n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
						break;
					case t:
						n = r - e + 2 * s, n /= 6 * s;
						break;
					case r:
						n = e - t + 4 * s, n /= 6 * s
				}
				return [n, o, l]
			}

			function addSaturationToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
			}

			function addBrightnessToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
			}

			function addHueToRGB(e, t) {
				var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
				return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
			}
			var rgbToHex = function() {
					var e, t, r = [];
					for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
					return function(n, i, a) {
						return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a]
					}
				}(),
				setSubframeEnabled = function(e) {
					subframeEnabled = !!e
				},
				getSubframeEnabled = function() {
					return subframeEnabled
				},
				setExpressionsPlugin = function(e) {
					expressionsPlugin = e
				},
				getExpressionsPlugin = function() {
					return expressionsPlugin
				},
				setExpressionInterfaces = function(e) {
					expressionsInterfaces = e
				},
				getExpressionInterfaces = function() {
					return expressionsInterfaces
				},
				setDefaultCurveSegments = function(e) {
					defaultCurveSegments = e
				},
				getDefaultCurveSegments = function() {
					return defaultCurveSegments
				},
				setIdPrefix = function(e) {
					idPrefix$1 = e
				},
				getIdPrefix = function() {
					return idPrefix$1
				};

			function createNS(e) {
				return document.createElementNS(svgNS, e)
			}

			function _typeof$5(e) {
				return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$5(e)
			}
			var dataManager = function() {
					var e, t, r = 1,
						n = [],
						i = {
							onmessage: function() {},
							postMessage: function(l) {
								e({
									data: l
								})
							}
						},
						a = {
							postMessage: function(l) {
								i.onmessage({
									data: l
								})
							}
						};

					function s() {
						t || (t = function(l) {
							if (window.Worker && window.Blob && getWebWorker()) {
								var c = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
										type: "text/javascript"
									}),
									u = URL.createObjectURL(c);
								return new Worker(u)
							}
							return e = l, i
						}(function(l) {
							if (a.dataManager || (a.dataManager = function() {
									function u(x, P) {
										var D, w, C, R, F, M, N = x.length;
										for (w = 0; w < N; w += 1)
											if ("ks" in (D = x[w]) && !D.completed) {
												if (D.completed = !0, D.hasMask) {
													var z = D.masksProperties;
													for (R = z.length, C = 0; C < R; C += 1)
														if (z[C].pt.k.i) d(z[C].pt.k);
														else
															for (M = z[C].pt.k.length, F = 0; F < M; F += 1) z[C].pt.k[F].s && d(z[C].pt.k[F].s[0]), z[C].pt.k[F].e && d(z[C].pt.k[F].e[0])
												}
												D.ty === 0 ? (D.layers = f(D.refId, P), u(D.layers, P)) : D.ty === 4 ? m(D.shapes) : D.ty === 5 && _(D)
											}
									}

									function f(x, P) {
										var D = function(w, C) {
											for (var R = 0, F = C.length; R < F;) {
												if (C[R].id === w) return C[R];
												R += 1
											}
											return null
										}(x, P);
										return D ? D.layers.__used ? JSON.parse(JSON.stringify(D.layers)) : (D.layers.__used = !0, D.layers) : null
									}

									function m(x) {
										var P, D, w;
										for (P = x.length - 1; P >= 0; P -= 1)
											if (x[P].ty === "sh")
												if (x[P].ks.k.i) d(x[P].ks.k);
												else
													for (w = x[P].ks.k.length, D = 0; D < w; D += 1) x[P].ks.k[D].s && d(x[P].ks.k[D].s[0]), x[P].ks.k[D].e && d(x[P].ks.k[D].e[0]);
										else x[P].ty === "gr" && m(x[P].it)
									}

									function d(x) {
										var P, D = x.i.length;
										for (P = 0; P < D; P += 1) x.i[P][0] += x.v[P][0], x.i[P][1] += x.v[P][1], x.o[P][0] += x.v[P][0], x.o[P][1] += x.v[P][1]
									}

									function p(x, P) {
										var D = P ? P.split(".") : [100, 100, 100];
										return x[0] > D[0] || !(D[0] > x[0]) && (x[1] > D[1] || !(D[1] > x[1]) && (x[2] > D[2] || !(D[2] > x[2]) && null))
									}
									var g, h = function() {
											var x = [4, 4, 14];

											function P(D) {
												var w, C, R, F = D.length;
												for (w = 0; w < F; w += 1) D[w].ty === 5 && (R = void 0, R = (C = D[w]).t.d, C.t.d = {
													k: [{
														s: R,
														t: 0
													}]
												})
											}
											return function(D) {
												if (p(x, D.v) && (P(D.layers), D.assets)) {
													var w, C = D.assets.length;
													for (w = 0; w < C; w += 1) D.assets[w].layers && P(D.assets[w].layers)
												}
											}
										}(),
										v = (g = [4, 7, 99], function(x) {
											if (x.chars && !p(g, x.v)) {
												var P, D = x.chars.length;
												for (P = 0; P < D; P += 1) {
													var w = x.chars[P];
													w.data && w.data.shapes && (m(w.data.shapes), w.data.ip = 0, w.data.op = 99999, w.data.st = 0, w.data.sr = 1, w.data.ks = {
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														}
													}, x.chars[P].t || (w.data.shapes.push({
														ty: "no"
													}), w.data.shapes[0].it.push({
														p: {
															k: [0, 0],
															a: 0
														},
														s: {
															k: [100, 100],
															a: 0
														},
														a: {
															k: [0, 0],
															a: 0
														},
														r: {
															k: 0,
															a: 0
														},
														o: {
															k: 100,
															a: 0
														},
														sk: {
															k: 0,
															a: 0
														},
														sa: {
															k: 0,
															a: 0
														},
														ty: "tr"
													})))
												}
											}
										}),
										y = function() {
											var x = [5, 7, 15];

											function P(D) {
												var w, C, R = D.length;
												for (w = 0; w < R; w += 1) D[w].ty === 5 && (C = void 0, typeof(C = D[w].t.p).a == "number" && (C.a = {
													a: 0,
													k: C.a
												}), typeof C.p == "number" && (C.p = {
													a: 0,
													k: C.p
												}), typeof C.r == "number" && (C.r = {
													a: 0,
													k: C.r
												}))
											}
											return function(D) {
												if (p(x, D.v) && (P(D.layers), D.assets)) {
													var w, C = D.assets.length;
													for (w = 0; w < C; w += 1) D.assets[w].layers && P(D.assets[w].layers)
												}
											}
										}(),
										b = function() {
											var x = [4, 1, 9];

											function P(w) {
												var C, R, F, M = w.length;
												for (C = 0; C < M; C += 1)
													if (w[C].ty === "gr") P(w[C].it);
													else if (w[C].ty === "fl" || w[C].ty === "st")
													if (w[C].c.k && w[C].c.k[0].i)
														for (F = w[C].c.k.length, R = 0; R < F; R += 1) w[C].c.k[R].s && (w[C].c.k[R].s[0] /= 255, w[C].c.k[R].s[1] /= 255, w[C].c.k[R].s[2] /= 255, w[C].c.k[R].s[3] /= 255), w[C].c.k[R].e && (w[C].c.k[R].e[0] /= 255, w[C].c.k[R].e[1] /= 255, w[C].c.k[R].e[2] /= 255, w[C].c.k[R].e[3] /= 255);
													else w[C].c.k[0] /= 255, w[C].c.k[1] /= 255, w[C].c.k[2] /= 255, w[C].c.k[3] /= 255
											}

											function D(w) {
												var C, R = w.length;
												for (C = 0; C < R; C += 1) w[C].ty === 4 && P(w[C].shapes)
											}
											return function(w) {
												if (p(x, w.v) && (D(w.layers), w.assets)) {
													var C, R = w.assets.length;
													for (C = 0; C < R; C += 1) w.assets[C].layers && D(w.assets[C].layers)
												}
											}
										}(),
										S = function() {
											var x = [4, 4, 18];

											function P(w) {
												var C, R, F;
												for (C = w.length - 1; C >= 0; C -= 1)
													if (w[C].ty === "sh")
														if (w[C].ks.k.i) w[C].ks.k.c = w[C].closed;
														else
															for (F = w[C].ks.k.length, R = 0; R < F; R += 1) w[C].ks.k[R].s && (w[C].ks.k[R].s[0].c = w[C].closed), w[C].ks.k[R].e && (w[C].ks.k[R].e[0].c = w[C].closed);
												else w[C].ty === "gr" && P(w[C].it)
											}

											function D(w) {
												var C, R, F, M, N, z, $ = w.length;
												for (R = 0; R < $; R += 1) {
													if ((C = w[R]).hasMask) {
														var A = C.masksProperties;
														for (M = A.length, F = 0; F < M; F += 1)
															if (A[F].pt.k.i) A[F].pt.k.c = A[F].cl;
															else
																for (z = A[F].pt.k.length, N = 0; N < z; N += 1) A[F].pt.k[N].s && (A[F].pt.k[N].s[0].c = A[F].cl), A[F].pt.k[N].e && (A[F].pt.k[N].e[0].c = A[F].cl)
													}
													C.ty === 4 && P(C.shapes)
												}
											}
											return function(w) {
												if (p(x, w.v) && (D(w.layers), w.assets)) {
													var C, R = w.assets.length;
													for (C = 0; C < R; C += 1) w.assets[C].layers && D(w.assets[C].layers)
												}
											}
										}();

									function _(x) {
										x.t.a.length === 0 && x.t.p
									}
									var T = {
										completeData: function(x) {
											x.__complete || (b(x), h(x), v(x), y(x), S(x), u(x.layers, x.assets), function(P, D) {
												if (P) {
													var w = 0,
														C = P.length;
													for (w = 0; w < C; w += 1) P[w].t === 1 && (P[w].data.layers = f(P[w].data.refId, D), u(P[w].data.layers, D))
												}
											}(x.chars, x.assets), x.__complete = !0)
										}
									};
									return T.checkColors = b, T.checkChars = v, T.checkPathProperties = y, T.checkShapes = S, T.completeLayers = u, T
								}()), a.assetLoader || (a.assetLoader = function() {
									function u(f) {
										var m = f.getResponseHeader("content-type");
										return m && f.responseType === "json" && m.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null
									}
									return {
										load: function(f, m, d, p) {
											var g, h = new XMLHttpRequest;
											try {
												h.responseType = "json"
											} catch {}
											h.onreadystatechange = function() {
												if (h.readyState === 4)
													if (h.status === 200) g = u(h), d(g);
													else try {
														g = u(h), d(g)
													} catch (v) {
														p && p(v)
													}
											};
											try {
												h.open(["G", "E", "T"].join(""), f, !0)
											} catch {
												h.open(["G", "E", "T"].join(""), m + "/" + f, !0)
											}
											h.send()
										}
									}
								}()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
								a.dataManager.completeData(u), a.postMessage({
									id: l.data.id,
									payload: u,
									status: "success"
								})
							}, function() {
								a.postMessage({
									id: l.data.id,
									status: "error"
								})
							});
							else if (l.data.type === "complete") {
								var c = l.data.animation;
								a.dataManager.completeData(c), a.postMessage({
									id: l.data.id,
									payload: c,
									status: "success"
								})
							} else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
								a.postMessage({
									id: l.data.id,
									payload: u,
									status: "success"
								})
							}, function() {
								a.postMessage({
									id: l.data.id,
									status: "error"
								})
							})
						}), t.onmessage = function(l) {
							var c = l.data,
								u = c.id,
								f = n[u];
							n[u] = null, c.status === "success" ? f.onComplete(c.payload) : f.onError && f.onError()
						})
					}

					function o(l, c) {
						var u = "processId_" + (r += 1);
						return n[u] = {
							onComplete: l,
							onError: c
						}, u
					}
					return {
						loadAnimation: function(l, c, u) {
							s();
							var f = o(c, u);
							t.postMessage({
								type: "loadAnimation",
								path: l,
								fullPath: window.location.origin + window.location.pathname,
								id: f
							})
						},
						loadData: function(l, c, u) {
							s();
							var f = o(c, u);
							t.postMessage({
								type: "loadData",
								path: l,
								fullPath: window.location.origin + window.location.pathname,
								id: f
							})
						},
						completeAnimation: function(l, c, u) {
							s();
							var f = o(c, u);
							t.postMessage({
								type: "complete",
								animation: l,
								id: f
							})
						}
					}
				}(),
				ImagePreloader = function() {
					var e = function() {
						var o = createTag("canvas");
						o.width = 1, o.height = 1;
						var l = o.getContext("2d");
						return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), o
					}();

					function t() {
						this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function r() {
						this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}

					function n(o, l, c) {
						var u = "";
						if (o.e) u = o.p;
						else if (l) {
							var f = o.p;
							f.indexOf("images/") !== -1 && (f = f.split("/")[1]), u = l + f
						} else u = c, u += o.u ? o.u : "", u += o.p;
						return u
					}

					function i(o) {
						var l = 0,
							c = setInterval(function() {
								(o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(c)), l += 1
							}.bind(this), 50)
					}

					function a(o) {
						var l = {
								assetData: o
							},
							c = n(o, this.assetsPath, this.path);
						return dataManager.loadData(c, function(u) {
							l.img = u, this._footageLoaded()
						}.bind(this), function() {
							l.img = {}, this._footageLoaded()
						}.bind(this)), l
					}

					function s() {
						this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
					}
					return s.prototype = {
						loadAssets: function(o, l) {
							var c;
							this.imagesLoadedCb = l;
							var u = o.length;
							for (c = 0; c < u; c += 1) o[c].layers || (o[c].t && o[c].t !== "seq" ? o[c].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[c]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[c]))))
						},
						setAssetsPath: function(o) {
							this.assetsPath = o || ""
						},
						setPath: function(o) {
							this.path = o || ""
						},
						loadedImages: function() {
							return this.totalImages === this.loadedAssets
						},
						loadedFootages: function() {
							return this.totalFootages === this.loadedFootagesCount
						},
						destroy: function() {
							this.imagesLoadedCb = null, this.images.length = 0
						},
						getAsset: function(o) {
							for (var l = 0, c = this.images.length; l < c;) {
								if (this.images[l].assetData === o) return this.images[l].img;
								l += 1
							}
							return null
						},
						createImgData: function(o) {
							var l = n(o, this.assetsPath, this.path),
								c = createTag("img");
							c.crossOrigin = "anonymous", c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
								u.img = e, this._imageLoaded()
							}.bind(this), !1), c.src = l;
							var u = {
								img: c,
								assetData: o
							};
							return u
						},
						createImageData: function(o) {
							var l = n(o, this.assetsPath, this.path),
								c = createNS("image");
							isSafari ? this.testImageLoaded(c) : c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
								u.img = e, this._imageLoaded()
							}.bind(this), !1), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(c) : this._elementHelper.appendChild(c);
							var u = {
								img: c,
								assetData: o
							};
							return u
						},
						imageLoaded: t,
						footageLoaded: r,
						setCacheType: function(o, l) {
							o === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
						}
					}, s
				}();

			function BaseEvent() {}
			BaseEvent.prototype = {
				triggerEvent: function(e, t) {
					if (this._cbs[e])
						for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
				},
				addEventListener: function(e, t) {
					return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
						function() {
							this.removeEventListener(e, t)
						}.bind(this)
				},
				removeEventListener: function(e, t) {
					if (t) {
						if (this._cbs[e]) {
							for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
							this._cbs[e].length || (this._cbs[e] = null)
						}
					} else this._cbs[e] = null
				}
			};
			var markerParser = function() {
					function e(t) {
						for (var r, n = t.split(`\r
`), i = {}, a = 0, s = 0; s < n.length; s += 1)(r = n[s].split(":")).length === 2 && (i[r[0]] = r[1].trim(), a += 1);
						if (a === 0) throw new Error;
						return i
					}
					return function(t) {
						for (var r = [], n = 0; n < t.length; n += 1) {
							var i = t[n],
								a = {
									time: i.tm,
									duration: i.dr
								};
							try {
								a.payload = JSON.parse(t[n].cm)
							} catch {
								try {
									a.payload = e(t[n].cm)
								} catch {
									a.payload = {
										name: t[n].cm
									}
								}
							}
							r.push(a)
						}
						return r
					}
				}(),
				ProjectInterface = function() {
					function e(t) {
						this.compositions.push(t)
					}
					return function() {
						function t(r) {
							for (var n = 0, i = this.compositions.length; n < i;) {
								if (this.compositions[n].data && this.compositions[n].data.nm === r) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
								n += 1
							}
							return null
						}
						return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
					}
				}(),
				renderers = {},
				registerRenderer = function(e, t) {
					renderers[e] = t
				};

			function getRenderer(e) {
				return renderers[e]
			}

			function getRegisteredRenderer() {
				if (renderers.canvas) return "canvas";
				for (var e in renderers)
					if (renderers[e]) return e;
				return ""
			}

			function _typeof$4(e) {
				return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$4(e)
			}
			var AnimationItem = function() {
				this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
			};
			extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
				(e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
				var t = "svg";
				e.animType ? t = e.animType : e.renderer && (t = e.renderer);
				var r = getRenderer(t);
				this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
			}, AnimationItem.prototype.onSetupError = function() {
				this.trigger("data_failed")
			}, AnimationItem.prototype.setupAnimation = function(e) {
				dataManager.completeAnimation(e, this.configAnimation)
			}, AnimationItem.prototype.setData = function(e, t) {
				t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
				var r = {
						wrapper: e,
						animationData: t
					},
					n = e.attributes;
				r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
				var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
				i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
				var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
				r.autoplay = a !== "false", r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
			}, AnimationItem.prototype.includeLayers = function(e) {
				e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
				var t, r, n = this.animationData.layers,
					i = n.length,
					a = e.layers,
					s = a.length;
				for (r = 0; r < s; r += 1)
					for (t = 0; t < i;) {
						if (n[t].id === a[r].id) {
							n[t] = a[r];
							break
						}
						t += 1
					}
				if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
					for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
				this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
			}, AnimationItem.prototype.onSegmentComplete = function(e) {
				this.animationData = e;
				var t = getExpressionsPlugin();
				t && t.initExpressions(this), this.loadNextSegment()
			}, AnimationItem.prototype.loadNextSegment = function() {
				var e = this.animationData.segments;
				if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
				var t = e.shift();
				this.timeCompleted = t.time * this.frameRate;
				var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
				this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
					this.trigger("data_failed")
				}.bind(this))
			}, AnimationItem.prototype.loadSegments = function() {
				this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
			}, AnimationItem.prototype.imagesLoaded = function() {
				this.trigger("loaded_images"), this.checkLoaded()
			}, AnimationItem.prototype.preloadImages = function() {
				this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
			}, AnimationItem.prototype.configAnimation = function(e) {
				if (this.renderer) try {
					this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
				} catch (t) {
					this.triggerConfigError(t)
				}
			}, AnimationItem.prototype.waitForFontsLoaded = function() {
				this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
			}, AnimationItem.prototype.checkLoaded = function() {
				if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
					this.isLoaded = !0;
					var e = getExpressionsPlugin();
					e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
						this.trigger("DOMLoaded")
					}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
				}
			}, AnimationItem.prototype.resize = function(e, t) {
				var r = typeof e == "number" ? e : void 0,
					n = typeof t == "number" ? t : void 0;
				this.renderer.updateContainerSize(r, n)
			}, AnimationItem.prototype.setSubframe = function(e) {
				this.isSubframeEnabled = !!e
			}, AnimationItem.prototype.gotoFrame = function() {
				this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
			}, AnimationItem.prototype.renderFrame = function() {
				if (this.isLoaded !== !1 && this.renderer) try {
					this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
				} catch (e) {
					this.triggerRenderFrameError(e)
				}
			}, AnimationItem.prototype.play = function(e) {
				e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
			}, AnimationItem.prototype.pause = function(e) {
				e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
			}, AnimationItem.prototype.togglePause = function(e) {
				e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
			}, AnimationItem.prototype.stop = function(e) {
				e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
			}, AnimationItem.prototype.getMarkerData = function(e) {
				for (var t, r = 0; r < this.markers.length; r += 1)
					if ((t = this.markers[r]).payload && t.payload.name === e) return t;
				return null
			}, AnimationItem.prototype.goToAndStop = function(e, t, r) {
				if (!r || this.name === r) {
					var n = Number(e);
					if (isNaN(n)) {
						var i = this.getMarkerData(e);
						i && this.goToAndStop(i.time, !0)
					} else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
					this.pause()
				}
			}, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
				if (!r || this.name === r) {
					var n = Number(e);
					if (isNaN(n)) {
						var i = this.getMarkerData(e);
						i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
					} else this.goToAndStop(n, t, r);
					this.play()
				}
			}, AnimationItem.prototype.advanceTime = function(e) {
				if (this.isPaused !== !0 && this.isLoaded !== !1) {
					var t = this.currentRawFrame + e * this.frameModifier,
						r = !1;
					t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
				}
			}, AnimationItem.prototype.adjustSegment = function(e, t) {
				this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
			}, AnimationItem.prototype.setSegment = function(e, t) {
				var r = -1;
				this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
			}, AnimationItem.prototype.playSegments = function(e, t) {
				if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
					var r, n = e.length;
					for (r = 0; r < n; r += 1) this.segments.push(e[r])
				} else this.segments.push(e);
				this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
			}, AnimationItem.prototype.resetSegments = function(e) {
				this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
			}, AnimationItem.prototype.checkSegments = function(e) {
				return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
			}, AnimationItem.prototype.destroy = function(e) {
				e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
			}, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
				this.currentRawFrame = e, this.gotoFrame()
			}, AnimationItem.prototype.setSpeed = function(e) {
				this.playSpeed = e, this.updaFrameModifier()
			}, AnimationItem.prototype.setDirection = function(e) {
				this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
			}, AnimationItem.prototype.setLoop = function(e) {
				this.loop = e
			}, AnimationItem.prototype.setVolume = function(e, t) {
				t && this.name !== t || this.audioController.setVolume(e)
			}, AnimationItem.prototype.getVolume = function() {
				return this.audioController.getVolume()
			}, AnimationItem.prototype.mute = function(e) {
				e && this.name !== e || this.audioController.mute()
			}, AnimationItem.prototype.unmute = function(e) {
				e && this.name !== e || this.audioController.unmute()
			}, AnimationItem.prototype.updaFrameModifier = function() {
				this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
			}, AnimationItem.prototype.getPath = function() {
				return this.path
			}, AnimationItem.prototype.getAssetsPath = function(e) {
				var t = "";
				if (e.e) t = e.p;
				else if (this.assetsPath) {
					var r = e.p;
					r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
				} else t = this.path, t += e.u ? e.u : "", t += e.p;
				return t
			}, AnimationItem.prototype.getAssetData = function(e) {
				for (var t = 0, r = this.assets.length; t < r;) {
					if (e === this.assets[t].id) return this.assets[t];
					t += 1
				}
				return null
			}, AnimationItem.prototype.hide = function() {
				this.renderer.hide()
			}, AnimationItem.prototype.show = function() {
				this.renderer.show()
			}, AnimationItem.prototype.getDuration = function(e) {
				return e ? this.totalFrames : this.totalFrames / this.frameRate
			}, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
				try {
					this.renderer.getElementByPath(e).updateDocumentData(t, r)
				} catch {}
			}, AnimationItem.prototype.trigger = function(e) {
				if (this._cbs && this._cbs[e]) switch (e) {
					case "enterFrame":
						this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
						break;
					case "drawnFrame":
						this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
						break;
					case "loopComplete":
						this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
						break;
					case "complete":
						this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
						break;
					case "segmentStart":
						this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
						break;
					case "destroy":
						this.triggerEvent(e, new BMDestroyEvent(e, this));
						break;
					default:
						this.triggerEvent(e)
				}
				e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
			}, AnimationItem.prototype.triggerRenderFrameError = function(e) {
				var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
				this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
			}, AnimationItem.prototype.triggerConfigError = function(e) {
				var t = new BMConfigErrorEvent(e, this.currentFrame);
				this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
			};
			var animationManager = function() {
					var e = {},
						t = [],
						r = 0,
						n = 0,
						i = 0,
						a = !0,
						s = !1;

					function o(g) {
						for (var h = 0, v = g.target; h < n;) t[h].animation === v && (t.splice(h, 1), h -= 1, n -= 1, v.isPaused || u()), h += 1
					}

					function l(g, h) {
						if (!g) return null;
						for (var v = 0; v < n;) {
							if (t[v].elem === g && t[v].elem !== null) return t[v].animation;
							v += 1
						}
						var y = new AnimationItem;
						return f(y, g), y.setData(g, h), y
					}

					function c() {
						i += 1, p()
					}

					function u() {
						i -= 1
					}

					function f(g, h) {
						g.addEventListener("destroy", o), g.addEventListener("_active", c), g.addEventListener("_idle", u), t.push({
							elem: h,
							animation: g
						}), n += 1
					}

					function m(g) {
						var h, v = g - r;
						for (h = 0; h < n; h += 1) t[h].animation.advanceTime(v);
						r = g, i && !s ? window.requestAnimationFrame(m) : a = !0
					}

					function d(g) {
						r = g, window.requestAnimationFrame(m)
					}

					function p() {
						!s && i && a && (window.requestAnimationFrame(d), a = !1)
					}
					return e.registerAnimation = l, e.loadAnimation = function(g) {
						var h = new AnimationItem;
						return f(h, null), h.setParams(g), h
					}, e.setSpeed = function(g, h) {
						var v;
						for (v = 0; v < n; v += 1) t[v].animation.setSpeed(g, h)
					}, e.setDirection = function(g, h) {
						var v;
						for (v = 0; v < n; v += 1) t[v].animation.setDirection(g, h)
					}, e.play = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.play(g)
					}, e.pause = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.pause(g)
					}, e.stop = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.stop(g)
					}, e.togglePause = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.togglePause(g)
					}, e.searchAnimations = function(g, h, v) {
						var y, b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
							S = b.length;
						for (y = 0; y < S; y += 1) v && b[y].setAttribute("data-bm-type", v), l(b[y], g);
						if (h && S === 0) {
							v || (v = "svg");
							var _ = document.getElementsByTagName("body")[0];
							_.innerText = "";
							var T = createTag("div");
							T.style.width = "100%", T.style.height = "100%", T.setAttribute("data-bm-type", v), _.appendChild(T), l(T, g)
						}
					}, e.resize = function() {
						var g;
						for (g = 0; g < n; g += 1) t[g].animation.resize()
					}, e.goToAndStop = function(g, h, v) {
						var y;
						for (y = 0; y < n; y += 1) t[y].animation.goToAndStop(g, h, v)
					}, e.destroy = function(g) {
						var h;
						for (h = n - 1; h >= 0; h -= 1) t[h].animation.destroy(g)
					}, e.freeze = function() {
						s = !0
					}, e.unfreeze = function() {
						s = !1, p()
					}, e.setVolume = function(g, h) {
						var v;
						for (v = 0; v < n; v += 1) t[v].animation.setVolume(g, h)
					}, e.mute = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.mute(g)
					}, e.unmute = function(g) {
						var h;
						for (h = 0; h < n; h += 1) t[h].animation.unmute(g)
					}, e.getRegisteredAnimations = function() {
						var g, h = t.length,
							v = [];
						for (g = 0; g < h; g += 1) v.push(t[g].animation);
						return v
					}, e
				}(),
				BezierFactory = function() {
					var e = {
							getBezierEasing: function(u, f, m, d, p) {
								var g = p || ("bez_" + u + "_" + f + "_" + m + "_" + d).replace(/\./g, "p");
								if (t[g]) return t[g];
								var h = new c([u, f, m, d]);
								return t[g] = h, h
							}
						},
						t = {},
						r = .1,
						n = typeof Float32Array == "function";

					function i(u, f) {
						return 1 - 3 * f + 3 * u
					}

					function a(u, f) {
						return 3 * f - 6 * u
					}

					function s(u) {
						return 3 * u
					}

					function o(u, f, m) {
						return ((i(f, m) * u + a(f, m)) * u + s(f)) * u
					}

					function l(u, f, m) {
						return 3 * i(f, m) * u * u + 2 * a(f, m) * u + s(f)
					}

					function c(u) {
						this._p = u, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
					}
					return c.prototype = {
						get: function(u) {
							var f = this._p[0],
								m = this._p[1],
								d = this._p[2],
								p = this._p[3];
							return this._precomputed || this._precompute(), f === m && d === p ? u : u === 0 ? 0 : u === 1 ? 1 : o(this._getTForX(u), m, p)
						},
						_precompute: function() {
							var u = this._p[0],
								f = this._p[1],
								m = this._p[2],
								d = this._p[3];
							this._precomputed = !0, u === f && m === d || this._calcSampleValues()
						},
						_calcSampleValues: function() {
							for (var u = this._p[0], f = this._p[2], m = 0; m < 11; ++m) this._mSampleValues[m] = o(m * r, u, f)
						},
						_getTForX: function(u) {
							for (var f = this._p[0], m = this._p[2], d = this._mSampleValues, p = 0, g = 1; g !== 10 && d[g] <= u; ++g) p += r;
							var h = p + (u - d[--g]) / (d[g + 1] - d[g]) * r,
								v = l(h, f, m);
							return v >= .001 ? function(y, b, S, _) {
								for (var T = 0; T < 4; ++T) {
									var x = l(b, S, _);
									if (x === 0) return b;
									b -= (o(b, S, _) - y) / x
								}
								return b
							}(u, h, f, m) : v === 0 ? h : function(y, b, S, _, T) {
								var x, P, D = 0;
								do(x = o(P = b + (S - b) / 2, _, T) - y) > 0 ? S = P : b = P; while (Math.abs(x) > 1e-7 && ++D < 10);
								return P
							}(u, p, p + r, f, m)
						}
					}, e
				}(),
				pooling = {
					double: function(e) {
						return e.concat(createSizedArray(e.length))
					}
				},
				poolFactory = function(e, t, r) {
					var n = 0,
						i = e,
						a = createSizedArray(i);
					return {
						newElement: function() {
							return n ? a[n -= 1] : t()
						},
						release: function(s) {
							n === i && (a = pooling.double(a), i *= 2), r && r(s), a[n] = s, n += 1
						}
					}
				},
				bezierLengthPool = poolFactory(8, function() {
					return {
						addedLength: 0,
						percents: createTypedArray("float32", getDefaultCurveSegments()),
						lengths: createTypedArray("float32", getDefaultCurveSegments())
					}
				}),
				segmentsLengthPool = poolFactory(8, function() {
					return {
						lengths: [],
						totalLength: 0
					}
				}, function(e) {
					var t, r = e.lengths.length;
					for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
					e.lengths.length = 0
				});

			function bezFunction() {
				var e = Math;

				function t(c, u, f, m, d, p) {
					var g = c * m + u * d + f * p - d * m - p * c - f * u;
					return g > -.001 && g < .001
				}
				var r = function(c, u, f, m) {
					var d, p, g, h, v, y, b = getDefaultCurveSegments(),
						S = 0,
						_ = [],
						T = [],
						x = bezierLengthPool.newElement();
					for (g = f.length, d = 0; d < b; d += 1) {
						for (v = d / (b - 1), y = 0, p = 0; p < g; p += 1) h = bmPow(1 - v, 3) * c[p] + 3 * bmPow(1 - v, 2) * v * f[p] + 3 * (1 - v) * bmPow(v, 2) * m[p] + bmPow(v, 3) * u[p], _[p] = h, T[p] !== null && (y += bmPow(_[p] - T[p], 2)), T[p] = _[p];
						y && (S += y = bmSqrt(y)), x.percents[d] = v, x.lengths[d] = S
					}
					return x.addedLength = S, x
				};

				function n(c) {
					this.segmentLength = 0, this.points = new Array(c)
				}

				function i(c, u) {
					this.partialLength = c, this.point = u
				}
				var a, s = (a = {}, function(c, u, f, m) {
					var d = (c[0] + "_" + c[1] + "_" + u[0] + "_" + u[1] + "_" + f[0] + "_" + f[1] + "_" + m[0] + "_" + m[1]).replace(/\./g, "p");
					if (!a[d]) {
						var p, g, h, v, y, b, S, _ = getDefaultCurveSegments(),
							T = 0,
							x = null;
						c.length === 2 && (c[0] !== u[0] || c[1] !== u[1]) && t(c[0], c[1], u[0], u[1], c[0] + f[0], c[1] + f[1]) && t(c[0], c[1], u[0], u[1], u[0] + m[0], u[1] + m[1]) && (_ = 2);
						var P = new n(_);
						for (h = f.length, p = 0; p < _; p += 1) {
							for (S = createSizedArray(h), y = p / (_ - 1), b = 0, g = 0; g < h; g += 1) v = bmPow(1 - y, 3) * c[g] + 3 * bmPow(1 - y, 2) * y * (c[g] + f[g]) + 3 * (1 - y) * bmPow(y, 2) * (u[g] + m[g]) + bmPow(y, 3) * u[g], S[g] = v, x !== null && (b += bmPow(S[g] - x[g], 2));
							T += b = bmSqrt(b), P.points[p] = new i(b, S), x = S
						}
						P.segmentLength = T, a[d] = P
					}
					return a[d]
				});

				function o(c, u) {
					var f = u.percents,
						m = u.lengths,
						d = f.length,
						p = bmFloor((d - 1) * c),
						g = c * u.addedLength,
						h = 0;
					if (p === d - 1 || p === 0 || g === m[p]) return f[p];
					for (var v = m[p] > g ? -1 : 1, y = !0; y;)
						if (m[p] <= g && m[p + 1] > g ? (h = (g - m[p]) / (m[p + 1] - m[p]), y = !1) : p += v, p < 0 || p >= d - 1) {
							if (p === d - 1) return f[p];
							y = !1
						} return f[p] + (f[p + 1] - f[p]) * h
				}
				var l = createTypedArray("float32", 8);
				return {
					getSegmentsLength: function(c) {
						var u, f = segmentsLengthPool.newElement(),
							m = c.c,
							d = c.v,
							p = c.o,
							g = c.i,
							h = c._length,
							v = f.lengths,
							y = 0;
						for (u = 0; u < h - 1; u += 1) v[u] = r(d[u], d[u + 1], p[u], g[u + 1]), y += v[u].addedLength;
						return m && h && (v[u] = r(d[u], d[0], p[u], g[0]), y += v[u].addedLength), f.totalLength = y, f
					},
					getNewSegment: function(c, u, f, m, d, p, g) {
						d < 0 ? d = 0 : d > 1 && (d = 1);
						var h, v = o(d, g),
							y = o(p = p > 1 ? 1 : p, g),
							b = c.length,
							S = 1 - v,
							_ = 1 - y,
							T = S * S * S,
							x = v * S * S * 3,
							P = v * v * S * 3,
							D = v * v * v,
							w = S * S * _,
							C = v * S * _ + S * v * _ + S * S * y,
							R = v * v * _ + S * v * y + v * S * y,
							F = v * v * y,
							M = S * _ * _,
							N = v * _ * _ + S * y * _ + S * _ * y,
							z = v * y * _ + S * y * y + v * _ * y,
							$ = v * y * y,
							A = _ * _ * _,
							O = y * _ * _ + _ * y * _ + _ * _ * y,
							L = y * y * _ + _ * y * y + y * _ * y,
							H = y * y * y;
						for (h = 0; h < b; h += 1) l[4 * h] = e.round(1e3 * (T * c[h] + x * f[h] + P * m[h] + D * u[h])) / 1e3, l[4 * h + 1] = e.round(1e3 * (w * c[h] + C * f[h] + R * m[h] + F * u[h])) / 1e3, l[4 * h + 2] = e.round(1e3 * (M * c[h] + N * f[h] + z * m[h] + $ * u[h])) / 1e3, l[4 * h + 3] = e.round(1e3 * (A * c[h] + O * f[h] + L * m[h] + H * u[h])) / 1e3;
						return l
					},
					getPointInSegment: function(c, u, f, m, d, p) {
						var g = o(d, p),
							h = 1 - g;
						return [e.round(1e3 * (h * h * h * c[0] + (g * h * h + h * g * h + h * h * g) * f[0] + (g * g * h + h * g * g + g * h * g) * m[0] + g * g * g * u[0])) / 1e3, e.round(1e3 * (h * h * h * c[1] + (g * h * h + h * g * h + h * h * g) * f[1] + (g * g * h + h * g * g + g * h * g) * m[1] + g * g * g * u[1])) / 1e3]
					},
					buildBezierData: s,
					pointOnLine2D: t,
					pointOnLine3D: function(c, u, f, m, d, p, g, h, v) {
						if (f === 0 && p === 0 && v === 0) return t(c, u, m, d, g, h);
						var y, b = e.sqrt(e.pow(m - c, 2) + e.pow(d - u, 2) + e.pow(p - f, 2)),
							S = e.sqrt(e.pow(g - c, 2) + e.pow(h - u, 2) + e.pow(v - f, 2)),
							_ = e.sqrt(e.pow(g - m, 2) + e.pow(h - d, 2) + e.pow(v - p, 2));
						return (y = b > S ? b > _ ? b - S - _ : _ - S - b : _ > S ? _ - S - b : S - b - _) > -1e-4 && y < 1e-4
					}
				}
			}
			var bez = bezFunction(),
				initFrame = initialDefaultFrame,
				mathAbs = Math.abs;

			function interpolateValue(e, t) {
				var r, n = this.offsetTime;
				this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
				for (var i, a, s, o, l, c, u, f, m, d = t.lastIndex, p = d, g = this.keyframes.length - 1, h = !0; h;) {
					if (i = this.keyframes[p], a = this.keyframes[p + 1], p === g - 1 && e >= a.t - n) {
						i.h && (i = a), d = 0;
						break
					}
					if (a.t - n > e) {
						d = p;
						break
					}
					p < g - 1 ? p += 1 : (d = 0, h = !1)
				}
				s = this.keyframesMetadata[p] || {};
				var v, y = a.t - n,
					b = i.t - n;
				if (i.to) {
					s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
					var S = s.bezierData;
					if (e >= y || e < b) {
						var _ = e >= y ? S.points.length - 1 : 0;
						for (l = S.points[_].point.length, o = 0; o < l; o += 1) r[o] = S.points[_].point[o]
					} else {
						s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = m), c = m((e - b) / (y - b));
						var T, x = S.segmentLength * c,
							P = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastAddedLength : 0;
						for (f = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastPoint : 0, h = !0, u = S.points.length; h;) {
							if (P += S.points[f].partialLength, x === 0 || c === 0 || f === S.points.length - 1) {
								for (l = S.points[f].point.length, o = 0; o < l; o += 1) r[o] = S.points[f].point[o];
								break
							}
							if (x >= P && x < P + S.points[f + 1].partialLength) {
								for (T = (x - P) / S.points[f + 1].partialLength, l = S.points[f].point.length, o = 0; o < l; o += 1) r[o] = S.points[f].point[o] + (S.points[f + 1].point[o] - S.points[f].point[o]) * T;
								break
							}
							f < u - 1 ? f += 1 : h = !1
						}
						t._lastPoint = f, t._lastAddedLength = P - S.points[f].partialLength, t._lastKeyframeIndex = p
					}
				} else {
					var D, w, C, R, F;
					if (g = i.s.length, v = a.s || i.e, this.sh && i.h !== 1) e >= y ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : e <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(v), (e - b) / (y - b)));
					else
						for (p = 0; p < g; p += 1) i.h !== 1 && (e >= y ? c = 1 : e < b ? c = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[p] ? m = s.__fnct[p] : (D = i.o.x[p] === void 0 ? i.o.x[0] : i.o.x[p], w = i.o.y[p] === void 0 ? i.o.y[0] : i.o.y[p], C = i.i.x[p] === void 0 ? i.i.x[0] : i.i.x[p], R = i.i.y[p] === void 0 ? i.i.y[0] : i.i.y[p], m = BezierFactory.getBezierEasing(D, w, C, R).get, s.__fnct[p] = m)) : s.__fnct ? m = s.__fnct : (D = i.o.x, w = i.o.y, C = i.i.x, R = i.i.y, m = BezierFactory.getBezierEasing(D, w, C, R).get, i.keyframeMetadata = m), c = m((e - b) / (y - b)))), v = a.s || i.e, F = i.h === 1 ? i.s[p] : i.s[p] + (v[p] - i.s[p]) * c, this.propType === "multidimensional" ? r[p] = F : r = F
				}
				return t.lastIndex = d, r
			}

			function slerp(e, t, r) {
				var n, i, a, s, o, l = [],
					c = e[0],
					u = e[1],
					f = e[2],
					m = e[3],
					d = t[0],
					p = t[1],
					g = t[2],
					h = t[3];
				return (i = c * d + u * p + f * g + m * h) < 0 && (i = -i, d = -d, p = -p, g = -g, h = -h), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * c + o * d, l[1] = s * u + o * p, l[2] = s * f + o * g, l[3] = s * m + o * h, l
			}

			function quaternionToEuler(e, t) {
				var r = t[0],
					n = t[1],
					i = t[2],
					a = t[3],
					s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
					o = Math.asin(2 * r * n + 2 * i * a),
					l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
				e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
			}

			function createQuaternion(e) {
				var t = e[0] * degToRads,
					r = e[1] * degToRads,
					n = e[2] * degToRads,
					i = Math.cos(t / 2),
					a = Math.cos(r / 2),
					s = Math.cos(n / 2),
					o = Math.sin(t / 2),
					l = Math.sin(r / 2),
					c = Math.sin(n / 2);
				return [o * l * s + i * a * c, o * a * s + i * l * c, i * l * s - o * a * c, i * a * s - o * l * c]
			}

			function getValueAtCurrentTime() {
				var e = this.comp.renderedFrame - this.offsetTime,
					t = this.keyframes[0].t - this.offsetTime,
					r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
				if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
					this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
					var n = this.interpolateValue(e, this._caching);
					this.pv = n
				}
				return this._caching.lastFrame = e, this.pv
			}

			function setVValue(e) {
				var t;
				if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
				else
					for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
			}

			function processEffectsSequence() {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
					if (this.lock) this.setVValue(this.pv);
					else {
						var e;
						this.lock = !0, this._mdf = this._isFirstFrame;
						var t = this.effectsSequence.length,
							r = this.kf ? this.pv : this.data.k;
						for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
						this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
			}

			function addEffect(e) {
				this.effectsSequence.push(e), this.container.addDynamicProperty(this)
			}

			function ValueProperty(e, t, r, n) {
				this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
			}

			function MultiDimensionalProperty(e, t, r, n) {
				var i;
				this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
				var a = t.k.length;
				for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
				this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
			}

			function KeyframedValueProperty(e, t, r, n) {
				this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
					lastFrame: initFrame,
					lastIndex: 0,
					value: 0,
					_lastKeyframeIndex: -1
				}, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
			}

			function KeyframedMultidimensionalProperty(e, t, r, n) {
				var i;
				this.propType = "multidimensional";
				var a, s, o, l, c = t.k.length;
				for (i = 0; i < c - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, s = t.k[i + 1].s, o = t.k[i].to, l = t.k[i].ti, (a.length === 2 && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || a.length === 3 && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === s[2] && o[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
				this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
				var u = t.k[0].s.length;
				for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
				this._caching = {
					lastFrame: initFrame,
					lastIndex: 0,
					value: createTypedArray("float32", u)
				}, this.addEffect = addEffect
			}
			var PropertyFactory = {
				getProp: function(e, t, r, n, i) {
					var a;
					if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
						if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
						else switch (r) {
							case 0:
								a = new KeyframedValueProperty(e, t, n, i);
								break;
							case 1:
								a = new KeyframedMultidimensionalProperty(e, t, n, i)
						} else a = new ValueProperty(e, t, n, i);
					return a.effectsSequence.length && i.addDynamicProperty(a), a
				}
			};

			function DynamicPropertyContainer() {}
			DynamicPropertyContainer.prototype = {
				addDynamicProperty: function(e) {
					this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
				},
				iterateDynamicProperties: function() {
					var e;
					this._mdf = !1;
					var t = this.dynamicProperties.length;
					for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
				},
				initDynamicPropertyContainer: function(e) {
					this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
				}
			};
			var pointPool = poolFactory(8, function() {
				return createTypedArray("float32", 2)
			});

			function ShapePath() {
				this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
			}
			ShapePath.prototype.setPathData = function(e, t) {
				this.c = e, this.setLength(t);
				for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
			}, ShapePath.prototype.setLength = function(e) {
				for (; this._maxLength < e;) this.doubleArrayLength();
				this._length = e
			}, ShapePath.prototype.doubleArrayLength = function() {
				this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
			}, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
				var a;
				switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
					case "v":
						a = this.v;
						break;
					case "i":
						a = this.i;
						break;
					case "o":
						a = this.o;
						break;
					default:
						a = []
				}(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
			}, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, s, o) {
				this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
			}, ShapePath.prototype.reverse = function() {
				var e = new ShapePath;
				e.setPathData(this.c, this._length);
				var t = this.v,
					r = this.o,
					n = this.i,
					i = 0;
				this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
				var a, s = this._length - 1,
					o = this._length;
				for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
				return e
			}, ShapePath.prototype.length = function() {
				return this._length
			};
			var shapePool = (factory = poolFactory(4, function() {
					return new ShapePath
				}, function(e) {
					var t, r = e._length;
					for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
					e._length = 0, e.c = !1
				}), factory.clone = function(e) {
					var t, r = factory.newElement(),
						n = e._length === void 0 ? e.v.length : e._length;
					for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
					return r
				}, factory),
				factory;

			function ShapeCollection() {
				this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
			}
			ShapeCollection.prototype.addShape = function(e) {
				this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
			}, ShapeCollection.prototype.releaseShapes = function() {
				var e;
				for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
				this._length = 0
			};
			var shapeCollectionPool = (ob = {
					newShapeCollection: function() {
						return _length ? pool[_length -= 1] : new ShapeCollection
					},
					release: function(e) {
						var t, r = e._length;
						for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
						e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
					}
				}, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
				ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
					var e = -999999;

					function t(d, p, g) {
						var h, v, y, b, S, _, T, x, P, D = g.lastIndex,
							w = this.keyframes;
						if (d < w[0].t - this.offsetTime) h = w[0].s[0], y = !0, D = 0;
						else if (d >= w[w.length - 1].t - this.offsetTime) h = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], y = !0;
						else {
							for (var C, R, F, M = D, N = w.length - 1, z = !0; z && (C = w[M], !((R = w[M + 1]).t - this.offsetTime > d));) M < N - 1 ? M += 1 : z = !1;
							if (F = this.keyframesMetadata[M] || {}, D = M, !(y = C.h === 1)) {
								if (d >= R.t - this.offsetTime) x = 1;
								else if (d < C.t - this.offsetTime) x = 0;
								else {
									var $;
									F.__fnct ? $ = F.__fnct : ($ = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, F.__fnct = $), x = $((d - (C.t - this.offsetTime)) / (R.t - this.offsetTime - (C.t - this.offsetTime)))
								}
								v = R.s ? R.s[0] : C.e[0]
							}
							h = C.s[0]
						}
						for (_ = p._length, T = h.i[0].length, g.lastIndex = D, b = 0; b < _; b += 1)
							for (S = 0; S < T; S += 1) P = y ? h.i[b][S] : h.i[b][S] + (v.i[b][S] - h.i[b][S]) * x, p.i[b][S] = P, P = y ? h.o[b][S] : h.o[b][S] + (v.o[b][S] - h.o[b][S]) * x, p.o[b][S] = P, P = y ? h.v[b][S] : h.v[b][S] + (v.v[b][S] - h.v[b][S]) * x, p.v[b][S] = P
					}

					function r() {
						var d = this.comp.renderedFrame - this.offsetTime,
							p = this.keyframes[0].t - this.offsetTime,
							g = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
							h = this._caching.lastFrame;
						return h !== e && (h < p && d < p || h > g && d > g) || (this._caching.lastIndex = h < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
					}

					function n() {
						this.paths = this.localShapeCollection
					}

					function i(d) {
						(function(p, g) {
							if (p._length !== g._length || p.c !== g.c) return !1;
							var h, v = p._length;
							for (h = 0; h < v; h += 1)
								if (p.v[h][0] !== g.v[h][0] || p.v[h][1] !== g.v[h][1] || p.o[h][0] !== g.o[h][0] || p.o[h][1] !== g.o[h][1] || p.i[h][0] !== g.i[h][0] || p.i[h][1] !== g.i[h][1]) return !1;
							return !0
						})(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
					}

					function a() {
						if (this.elem.globalData.frameId !== this.frameId)
							if (this.effectsSequence.length)
								if (this.lock) this.setVValue(this.pv);
								else {
									var d, p;
									this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
									var g = this.effectsSequence.length;
									for (p = 0; p < g; p += 1) d = this.effectsSequence[p](d);
									this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
								}
						else this._mdf = !1
					}

					function s(d, p, g) {
						this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = p, this.k = !1, this.kf = !1, this._mdf = !1;
						var h = g === 3 ? p.pt.k : p.ks.k;
						this.v = shapePool.clone(h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
					}

					function o(d) {
						this.effectsSequence.push(d), this.container.addDynamicProperty(this)
					}

					function l(d, p, g) {
						this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = g === 3 ? p.pt.k : p.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
						var h = this.keyframes[0].s[0].i.length;
						this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
							lastFrame: e,
							lastIndex: 0
						}, this.effectsSequence = [r.bind(this)]
					}
					s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
					var c = function() {
							var d = roundCorner;

							function p(g, h) {
								this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = h.d, this.elem = g, this.comp = g.comp, this.frameId = -1, this.initDynamicPropertyContainer(g), this.p = PropertyFactory.getProp(g, h.p, 1, 0, this), this.s = PropertyFactory.getProp(g, h.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
							}
							return p.prototype = {
								reset: n,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
								},
								convertEllToPath: function() {
									var g = this.p.v[0],
										h = this.p.v[1],
										v = this.s.v[0] / 2,
										y = this.s.v[1] / 2,
										b = this.d !== 3,
										S = this.v;
									S.v[0][0] = g, S.v[0][1] = h - y, S.v[1][0] = b ? g + v : g - v, S.v[1][1] = h, S.v[2][0] = g, S.v[2][1] = h + y, S.v[3][0] = b ? g - v : g + v, S.v[3][1] = h, S.i[0][0] = b ? g - v * d : g + v * d, S.i[0][1] = h - y, S.i[1][0] = b ? g + v : g - v, S.i[1][1] = h - y * d, S.i[2][0] = b ? g + v * d : g - v * d, S.i[2][1] = h + y, S.i[3][0] = b ? g - v : g + v, S.i[3][1] = h + y * d, S.o[0][0] = b ? g + v * d : g - v * d, S.o[0][1] = h - y, S.o[1][0] = b ? g + v : g - v, S.o[1][1] = h + y * d, S.o[2][0] = b ? g - v * d : g + v * d, S.o[2][1] = h + y, S.o[3][0] = b ? g - v : g + v, S.o[3][1] = h - y * d
								}
							}, extendPrototype([DynamicPropertyContainer], p), p
						}(),
						u = function() {
							function d(p, g) {
								this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = p, this.comp = p.comp, this.data = g, this.frameId = -1, this.d = g.d, this.initDynamicPropertyContainer(p), g.sy === 1 ? (this.ir = PropertyFactory.getProp(p, g.ir, 0, 0, this), this.is = PropertyFactory.getProp(p, g.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(p, g.pt, 0, 0, this), this.p = PropertyFactory.getProp(p, g.p, 1, 0, this), this.r = PropertyFactory.getProp(p, g.r, 0, degToRads, this), this.or = PropertyFactory.getProp(p, g.or, 0, 0, this), this.os = PropertyFactory.getProp(p, g.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
							}
							return d.prototype = {
								reset: n,
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
								},
								convertStarToPath: function() {
									var p, g, h, v, y = 2 * Math.floor(this.pt.v),
										b = 2 * Math.PI / y,
										S = !0,
										_ = this.or.v,
										T = this.ir.v,
										x = this.os.v,
										P = this.is.v,
										D = 2 * Math.PI * _ / (2 * y),
										w = 2 * Math.PI * T / (2 * y),
										C = -Math.PI / 2;
									C += this.r.v;
									var R = this.data.d === 3 ? -1 : 1;
									for (this.v._length = 0, p = 0; p < y; p += 1) {
										h = S ? x : P, v = S ? D : w;
										var F = (g = S ? _ : T) * Math.cos(C),
											M = g * Math.sin(C),
											N = F === 0 && M === 0 ? 0 : M / Math.sqrt(F * F + M * M),
											z = F === 0 && M === 0 ? 0 : -F / Math.sqrt(F * F + M * M);
										F += +this.p.v[0], M += +this.p.v[1], this.v.setTripleAt(F, M, F - N * v * h * R, M - z * v * h * R, F + N * v * h * R, M + z * v * h * R, p, !0), S = !S, C += b * R
									}
								},
								convertPolygonToPath: function() {
									var p, g = Math.floor(this.pt.v),
										h = 2 * Math.PI / g,
										v = this.or.v,
										y = this.os.v,
										b = 2 * Math.PI * v / (4 * g),
										S = .5 * -Math.PI,
										_ = this.data.d === 3 ? -1 : 1;
									for (S += this.r.v, this.v._length = 0, p = 0; p < g; p += 1) {
										var T = v * Math.cos(S),
											x = v * Math.sin(S),
											P = T === 0 && x === 0 ? 0 : x / Math.sqrt(T * T + x * x),
											D = T === 0 && x === 0 ? 0 : -T / Math.sqrt(T * T + x * x);
										T += +this.p.v[0], x += +this.p.v[1], this.v.setTripleAt(T, x, T - P * b * y * _, x - D * b * y * _, T + P * b * y * _, x + D * b * y * _, p, !0), S += h * _
									}
									this.paths.length = 0, this.paths[0] = this.v
								}
							}, extendPrototype([DynamicPropertyContainer], d), d
						}(),
						f = function() {
							function d(p, g) {
								this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = p, this.comp = p.comp, this.frameId = -1, this.d = g.d, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, g.p, 1, 0, this), this.s = PropertyFactory.getProp(p, g.s, 1, 0, this), this.r = PropertyFactory.getProp(p, g.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
							}
							return d.prototype = {
								convertRectToPath: function() {
									var p = this.p.v[0],
										g = this.p.v[1],
										h = this.s.v[0] / 2,
										v = this.s.v[1] / 2,
										y = bmMin(h, v, this.r.v),
										b = y * (1 - roundCorner);
									this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + h, g - v + y, p + h, g - v + y, p + h, g - v + b, 0, !0), this.v.setTripleAt(p + h, g + v - y, p + h, g + v - b, p + h, g + v - y, 1, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, g + v, p + h - y, g + v, p + h - b, g + v, 2, !0), this.v.setTripleAt(p - h + y, g + v, p - h + b, g + v, p - h + y, g + v, 3, !0), this.v.setTripleAt(p - h, g + v - y, p - h, g + v - y, p - h, g + v - b, 4, !0), this.v.setTripleAt(p - h, g - v + y, p - h, g - v + b, p - h, g - v + y, 5, !0), this.v.setTripleAt(p - h + y, g - v, p - h + y, g - v, p - h + b, g - v, 6, !0), this.v.setTripleAt(p + h - y, g - v, p + h - b, g - v, p + h - y, g - v, 7, !0)) : (this.v.setTripleAt(p - h, g + v, p - h + b, g + v, p - h, g + v, 2), this.v.setTripleAt(p - h, g - v, p - h, g - v + b, p - h, g - v, 3))) : (this.v.setTripleAt(p + h, g - v + y, p + h, g - v + b, p + h, g - v + y, 0, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, g - v, p + h - y, g - v, p + h - b, g - v, 1, !0), this.v.setTripleAt(p - h + y, g - v, p - h + b, g - v, p - h + y, g - v, 2, !0), this.v.setTripleAt(p - h, g - v + y, p - h, g - v + y, p - h, g - v + b, 3, !0), this.v.setTripleAt(p - h, g + v - y, p - h, g + v - b, p - h, g + v - y, 4, !0), this.v.setTripleAt(p - h + y, g + v, p - h + y, g + v, p - h + b, g + v, 5, !0), this.v.setTripleAt(p + h - y, g + v, p + h - b, g + v, p + h - y, g + v, 6, !0), this.v.setTripleAt(p + h, g + v - y, p + h, g + v - y, p + h, g + v - b, 7, !0)) : (this.v.setTripleAt(p - h, g - v, p - h + b, g - v, p - h, g - v, 1, !0), this.v.setTripleAt(p - h, g + v, p - h, g + v - b, p - h, g + v, 2, !0), this.v.setTripleAt(p + h, g + v, p + h - b, g + v, p + h, g + v, 3, !0)))
								},
								getValue: function() {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
								},
								reset: n
							}, extendPrototype([DynamicPropertyContainer], d), d
						}(),
						m = {
							getShapeProp: function(d, p, g) {
								var h;
								return g === 3 || g === 4 ? h = (g === 3 ? p.pt : p.ks).k.length ? new l(d, p, g) : new s(d, p, g) : g === 5 ? h = new f(d, p) : g === 6 ? h = new c(d, p) : g === 7 && (h = new u(d, p)), h.k && d.addDynamicProperty(h), h
							},
							getConstructorFunction: function() {
								return s
							},
							getKeyframedConstructorFunction: function() {
								return l
							}
						};
					return m
				}(),
				Matrix = function() {
					var e = Math.cos,
						t = Math.sin,
						r = Math.tan,
						n = Math.round;

					function i() {
						return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
					}

					function a(A) {
						if (A === 0) return this;
						var O = e(A),
							L = t(A);
						return this._t(O, -L, 0, 0, L, O, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function s(A) {
						if (A === 0) return this;
						var O = e(A),
							L = t(A);
						return this._t(1, 0, 0, 0, 0, O, -L, 0, 0, L, O, 0, 0, 0, 0, 1)
					}

					function o(A) {
						if (A === 0) return this;
						var O = e(A),
							L = t(A);
						return this._t(O, 0, L, 0, 0, 1, 0, 0, -L, 0, O, 0, 0, 0, 0, 1)
					}

					function l(A) {
						if (A === 0) return this;
						var O = e(A),
							L = t(A);
						return this._t(O, -L, 0, 0, L, O, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function c(A, O) {
						return this._t(1, O, A, 1, 0, 0)
					}

					function u(A, O) {
						return this.shear(r(A), r(O))
					}

					function f(A, O) {
						var L = e(O),
							H = t(O);
						return this._t(L, H, 0, 0, -H, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(A), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(L, -H, 0, 0, H, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}

					function m(A, O, L) {
						return L || L === 0 || (L = 1), A === 1 && O === 1 && L === 1 ? this : this._t(A, 0, 0, 0, 0, O, 0, 0, 0, 0, L, 0, 0, 0, 0, 1)
					}

					function d(A, O, L, H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te) {
						return this.props[0] = A, this.props[1] = O, this.props[2] = L, this.props[3] = H, this.props[4] = U, this.props[5] = j, this.props[6] = Y, this.props[7] = Q, this.props[8] = J, this.props[9] = X, this.props[10] = re, this.props[11] = Ae, this.props[12] = he, this.props[13] = Ee, this.props[14] = Pe, this.props[15] = Te, this
					}

					function p(A, O, L) {
						return L = L || 0, A !== 0 || O !== 0 || L !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, A, O, L, 1) : this
					}

					function g(A, O, L, H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te) {
						var ne = this.props;
						if (A === 1 && O === 0 && L === 0 && H === 0 && U === 0 && j === 1 && Y === 0 && Q === 0 && J === 0 && X === 0 && re === 1 && Ae === 0) return ne[12] = ne[12] * A + ne[15] * he, ne[13] = ne[13] * j + ne[15] * Ee, ne[14] = ne[14] * re + ne[15] * Pe, ne[15] *= Te, this._identityCalculated = !1, this;
						var Me = ne[0],
							xt = ne[1],
							tt = ne[2],
							I = ne[3],
							q = ne[4],
							k = ne[5],
							G = ne[6],
							B = ne[7],
							V = ne[8],
							K = ne[9],
							Z = ne[10],
							le = ne[11],
							W = ne[12],
							ie = ne[13],
							ae = ne[14],
							ve = ne[15];
						return ne[0] = Me * A + xt * U + tt * J + I * he, ne[1] = Me * O + xt * j + tt * X + I * Ee, ne[2] = Me * L + xt * Y + tt * re + I * Pe, ne[3] = Me * H + xt * Q + tt * Ae + I * Te, ne[4] = q * A + k * U + G * J + B * he, ne[5] = q * O + k * j + G * X + B * Ee, ne[6] = q * L + k * Y + G * re + B * Pe, ne[7] = q * H + k * Q + G * Ae + B * Te, ne[8] = V * A + K * U + Z * J + le * he, ne[9] = V * O + K * j + Z * X + le * Ee, ne[10] = V * L + K * Y + Z * re + le * Pe, ne[11] = V * H + K * Q + Z * Ae + le * Te, ne[12] = W * A + ie * U + ae * J + ve * he, ne[13] = W * O + ie * j + ae * X + ve * Ee, ne[14] = W * L + ie * Y + ae * re + ve * Pe, ne[15] = W * H + ie * Q + ae * Ae + ve * Te, this._identityCalculated = !1, this
					}

					function h(A) {
						var O = A.props;
						return this.transform(O[0], O[1], O[2], O[3], O[4], O[5], O[6], O[7], O[8], O[9], O[10], O[11], O[12], O[13], O[14], O[15])
					}

					function v() {
						return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
					}

					function y(A) {
						for (var O = 0; O < 16;) {
							if (A.props[O] !== this.props[O]) return !1;
							O += 1
						}
						return !0
					}

					function b(A) {
						var O;
						for (O = 0; O < 16; O += 1) A.props[O] = this.props[O];
						return A
					}

					function S(A) {
						var O;
						for (O = 0; O < 16; O += 1) this.props[O] = A[O]
					}

					function _(A, O, L) {
						return {
							x: A * this.props[0] + O * this.props[4] + L * this.props[8] + this.props[12],
							y: A * this.props[1] + O * this.props[5] + L * this.props[9] + this.props[13],
							z: A * this.props[2] + O * this.props[6] + L * this.props[10] + this.props[14]
						}
					}

					function T(A, O, L) {
						return A * this.props[0] + O * this.props[4] + L * this.props[8] + this.props[12]
					}

					function x(A, O, L) {
						return A * this.props[1] + O * this.props[5] + L * this.props[9] + this.props[13]
					}

					function P(A, O, L) {
						return A * this.props[2] + O * this.props[6] + L * this.props[10] + this.props[14]
					}

					function D() {
						var A = this.props[0] * this.props[5] - this.props[1] * this.props[4],
							O = this.props[5] / A,
							L = -this.props[1] / A,
							H = -this.props[4] / A,
							U = this.props[0] / A,
							j = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / A,
							Y = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / A,
							Q = new Matrix;
						return Q.props[0] = O, Q.props[1] = L, Q.props[4] = H, Q.props[5] = U, Q.props[12] = j, Q.props[13] = Y, Q
					}

					function w(A) {
						return this.getInverseMatrix().applyToPointArray(A[0], A[1], A[2] || 0)
					}

					function C(A) {
						var O, L = A.length,
							H = [];
						for (O = 0; O < L; O += 1) H[O] = w(A[O]);
						return H
					}

					function R(A, O, L) {
						var H = createTypedArray("float32", 6);
						if (this.isIdentity()) H[0] = A[0], H[1] = A[1], H[2] = O[0], H[3] = O[1], H[4] = L[0], H[5] = L[1];
						else {
							var U = this.props[0],
								j = this.props[1],
								Y = this.props[4],
								Q = this.props[5],
								J = this.props[12],
								X = this.props[13];
							H[0] = A[0] * U + A[1] * Y + J, H[1] = A[0] * j + A[1] * Q + X, H[2] = O[0] * U + O[1] * Y + J, H[3] = O[0] * j + O[1] * Q + X, H[4] = L[0] * U + L[1] * Y + J, H[5] = L[0] * j + L[1] * Q + X
						}
						return H
					}

					function F(A, O, L) {
						return this.isIdentity() ? [A, O, L] : [A * this.props[0] + O * this.props[4] + L * this.props[8] + this.props[12], A * this.props[1] + O * this.props[5] + L * this.props[9] + this.props[13], A * this.props[2] + O * this.props[6] + L * this.props[10] + this.props[14]]
					}

					function M(A, O) {
						if (this.isIdentity()) return A + "," + O;
						var L = this.props;
						return Math.round(100 * (A * L[0] + O * L[4] + L[12])) / 100 + "," + Math.round(100 * (A * L[1] + O * L[5] + L[13])) / 100
					}

					function N() {
						for (var A = 0, O = this.props, L = "matrix3d("; A < 16;) L += n(1e4 * O[A]) / 1e4, L += A === 15 ? ")" : ",", A += 1;
						return L
					}

					function z(A) {
						return A < 1e-6 && A > 0 || A > -1e-6 && A < 0 ? n(1e4 * A) / 1e4 : A
					}

					function $() {
						var A = this.props;
						return "matrix(" + z(A[0]) + "," + z(A[1]) + "," + z(A[4]) + "," + z(A[5]) + "," + z(A[12]) + "," + z(A[13]) + ")"
					}
					return function() {
						this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = f, this.shear = c, this.scale = m, this.setTransform = d, this.translate = p, this.transform = g, this.multiply = h, this.applyToPoint = _, this.applyToX = T, this.applyToY = x, this.applyToZ = P, this.applyToPointArray = F, this.applyToTriplePoints = R, this.applyToPointStringified = M, this.toCSS = N, this.to2dCSS = $, this.clone = b, this.cloneFromProps = S, this.equals = y, this.inversePoints = C, this.inversePoint = w, this.getInverseMatrix = D, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
					}
				}();

			function _typeof$3(e) {
				return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$3(e)
			}
			var lottie = {},
				standalone = "__[STANDALONE]__",
				animationData = "__[ANIMATIONDATA]__",
				renderer = "";

			function setLocation(e) {
				setLocationHref(e)
			}

			function searchAnimations() {
				standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
			}

			function setSubframeRendering(e) {
				setSubframeEnabled(e)
			}

			function setPrefix(e) {
				setIdPrefix(e)
			}

			function loadAnimation(e) {
				return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
			}

			function setQuality(e) {
				if (typeof e == "string") switch (e) {
					case "high":
						setDefaultCurveSegments(200);
						break;
					default:
					case "medium":
						setDefaultCurveSegments(50);
						break;
					case "low":
						setDefaultCurveSegments(10)
				} else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
				getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
			}

			function inBrowser() {
				return typeof navigator < "u"
			}

			function installPlugin(e, t) {
				e === "expressions" && setExpressionsPlugin(t)
			}

			function getFactory(e) {
				switch (e) {
					case "propertyFactory":
						return PropertyFactory;
					case "shapePropertyFactory":
						return ShapePropertyFactory;
					case "matrix":
						return Matrix;
					default:
						return null
				}
			}

			function checkReady() {
				document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
			}

			function getQueryVariable(e) {
				for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
					var n = t[r].split("=");
					if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
				}
				return null
			}
			lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
			var queryString = "";
			if (standalone) {
				var scripts = document.getElementsByTagName("script"),
					index = scripts.length - 1,
					myScript = scripts[index] || {
						src: ""
					};
				queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
			}
			var readyStateCheckInterval = setInterval(checkReady, 100);
			try {
				(typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
			} catch (e) {}
			var ShapeModifiers = function() {
				var e = {},
					t = {};
				return e.registerModifier = function(r, n) {
					t[r] || (t[r] = n)
				}, e.getModifier = function(r, n, i) {
					return new t[r](n, i)
				}, e
			}();

			function ShapeModifier() {}

			function TrimModifier() {}

			function PuckerAndBloatModifier() {}
			ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
				if (!this.closed) {
					e.sh.container.addDynamicProperty(e.sh);
					var t = {
						shape: e.sh,
						data: e,
						localShapeCollection: shapeCollectionPool.newShapeCollection()
					};
					this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
				}
			}, ShapeModifier.prototype.init = function(e, t) {
				this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, ShapeModifier.prototype.processKeys = function() {
				this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
			}, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
				this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
			}, TrimModifier.prototype.addShapeToModifier = function(e) {
				e.pathsData = []
			}, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
				var a = [];
				t <= 1 ? a.push({
					s: e,
					e: t
				}) : e >= 1 ? a.push({
					s: e - 1,
					e: t - 1
				}) : (a.push({
					s: e,
					e: 1
				}), a.push({
					s: 0,
					e: t - 1
				}));
				var s, o, l = [],
					c = a.length;
				for (s = 0; s < c; s += 1) {
					var u, f;
					(o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, f = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, f]))
				}
				return l.length || l.push([0, 0]), l
			}, TrimModifier.prototype.releasePathsData = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
				return e.length = 0, e
			}, TrimModifier.prototype.processShapes = function(e) {
				var t, r, n, i;
				if (this._mdf || e) {
					var a = this.o.v % 360 / 360;
					if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
						var s = t;
						t = r, r = s
					}
					t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
				} else t = this.sValue, r = this.eValue;
				var o, l, c, u, f, m = this.shapes.length,
					d = 0;
				if (r === t)
					for (i = 0; i < m; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
				else if (r === 1 && t === 0 || r === 0 && t === 1) {
					if (this._mdf)
						for (i = 0; i < m; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
				} else {
					var p, g, h = [];
					for (i = 0; i < m; i += 1)
						if ((p = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
							if (l = (n = p.shape.paths)._length, f = 0, !p.shape._mdf && p.pathsData.length) f = p.totalShapeLength;
							else {
								for (c = this.releasePathsData(p.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), c.push(u), f += u.totalLength;
								p.totalShapeLength = f, p.pathsData = c
							}
							d += f, p.shape._mdf = !0
						} else p.shape.paths = p.localShapeCollection;
					var v, y = t,
						b = r,
						S = 0;
					for (i = m - 1; i >= 0; i -= 1)
						if ((p = this.shapes[i]).shape._mdf) {
							for ((g = p.localShapeCollection).releaseShapes(), this.m === 2 && m > 1 ? (v = this.calculateShapeEdges(t, r, p.totalShapeLength, S, d), S += p.totalShapeLength) : v = [
									[y, b]
								], l = v.length, o = 0; o < l; o += 1) {
								y = v[o][0], b = v[o][1], h.length = 0, b <= 1 ? h.push({
									s: p.totalShapeLength * y,
									e: p.totalShapeLength * b
								}) : y >= 1 ? h.push({
									s: p.totalShapeLength * (y - 1),
									e: p.totalShapeLength * (b - 1)
								}) : (h.push({
									s: p.totalShapeLength * y,
									e: p.totalShapeLength
								}), h.push({
									s: 0,
									e: p.totalShapeLength * (b - 1)
								}));
								var _ = this.addShapes(p, h[0]);
								if (h[0].s !== h[0].e) {
									if (h.length > 1)
										if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
											var T = _.pop();
											this.addPaths(_, g), _ = this.addShapes(p, h[1], T)
										} else this.addPaths(_, g), _ = this.addShapes(p, h[1]);
									this.addPaths(_, g)
								}
							}
							p.shape.paths = g
						}
				}
			}, TrimModifier.prototype.addPaths = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) t.addShape(e[r])
			}, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, s) {
				i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
			}, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
				t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
			}, TrimModifier.prototype.addShapes = function(e, t, r) {
				var n, i, a, s, o, l, c, u, f = e.pathsData,
					m = e.shape.paths.shapes,
					d = e.shape.paths._length,
					p = 0,
					g = [],
					h = !0;
				for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), g.push(r), n = 0; n < d; n += 1) {
					for (l = f[n].lengths, r.c = m[n].c, a = m[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
						if (p + (s = l[i - 1]).addedLength < t.s) p += s.addedLength, r.c = !1;
						else {
							if (p > t.e) {
								r.c = !1;
								break
							}
							t.s <= p && t.e >= p + s.addedLength ? (this.addSegment(m[n].v[i - 1], m[n].o[i - 1], m[n].i[i], m[n].v[i], r, o, h), h = !1) : (c = bez.getNewSegment(m[n].v[i - 1], m[n].v[i], m[n].o[i - 1], m[n].i[i], (t.s - p) / s.addedLength, (t.e - p) / s.addedLength, l[i - 1]), this.addSegmentFromArray(c, r, o, h), h = !1, r.c = !1), p += s.addedLength, o += 1
						} if (m[n].c && l.length) {
						if (s = l[i - 1], p <= t.e) {
							var v = l[i - 1].addedLength;
							t.s <= p && t.e >= p + v ? (this.addSegment(m[n].v[i - 1], m[n].o[i - 1], m[n].i[0], m[n].v[0], r, o, h), h = !1) : (c = bez.getNewSegment(m[n].v[i - 1], m[n].v[0], m[n].o[i - 1], m[n].i[0], (t.s - p) / v, (t.e - p) / v, l[i - 1]), this.addSegmentFromArray(c, r, o, h), h = !1, r.c = !1)
						} else r.c = !1;
						p += s.addedLength, o += 1
					}
					if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e) break;
					n < d - 1 && (r = shapePool.newElement(), h = !0, g.push(r), o = 0)
				}
				return g
			}, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
			}, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
				var r = t / 100,
					n = [0, 0],
					i = e._length,
					a = 0;
				for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
				n[0] /= i, n[1] /= i;
				var s, o, l, c, u, f, m = shapePool.newElement();
				for (m.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, c = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, f = e.i[a][1] + (n[1] - e.i[a][1]) * -r, m.setTripleAt(s, o, l, c, u, f, a);
				return m
			}, PuckerAndBloatModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amount.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			var TransformPropertyFactory = function() {
				var e = [0, 0];

				function t(r, n, i) {
					if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = n, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || r), n.p && n.p.s ? (this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this), n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, n.p || {
							k: [0, 0, 0]
						}, 1, 0, this), n.rx) {
						if (this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this), n.or.k[0].ti) {
							var a, s = n.or.k.length;
							for (a = 0; a < s; a += 1) n.or.k[a].to = null, n.or.k[a].ti = null
						}
						this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this), this.or.sh = !0
					} else this.r = PropertyFactory.getProp(r, n.r || {
						k: 0
					}, 0, degToRads, this);
					n.sk && (this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, n.a || {
						k: [0, 0, 0]
					}, 1, 0, this), this.s = PropertyFactory.getProp(r, n.s || {
						k: [100, 100, 100]
					}, 1, .01, this), n.o ? this.o = PropertyFactory.getProp(r, n.o, 0, .01, r) : this.o = {
						_mdf: !1,
						v: 1
					}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
				}
				return t.prototype = {
					applyToMatrix: function(r) {
						var n = this._mdf;
						this.iterateDynamicProperties(), this._mdf = this._mdf || n, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
					},
					getValue: function(r) {
						if (this.elem.globalData.frameId !== this.frameId) {
							if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
								var n;
								if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
									var i, a;
									if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
									else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
										i = [], a = [];
										var s = this.px,
											o = this.py;
										s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), i[1] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / n, 0), a[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), i[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0), a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0)) : (i = [s.pv, o.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime), a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime))
									} else i = a = e;
									this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
								}
								this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							}
							this.frameId = this.elem.globalData.frameId
						}
					},
					precalculateMatrix: function() {
						if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
							if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
								if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
								this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
							}
							this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
						}
					},
					autoOrient: function() {}
				}, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(r) {
					this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
				}, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
					getTransformProperty: function(r, n, i) {
						return new t(r, n, i)
					}
				}
			}();

			function RepeaterModifier() {}

			function RoundCornersModifier() {}

			function floatEqual(e, t) {
				return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
			}

			function floatZero(e) {
				return Math.abs(e) <= 1e-5
			}

			function lerp(e, t, r) {
				return e * (1 - r) + t * r
			}

			function lerpPoint(e, t, r) {
				return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
			}

			function quadRoots(e, t, r) {
				if (e === 0) return [];
				var n = t * t - 4 * e * r;
				if (n < 0) return [];
				var i = -t / (2 * e);
				if (n === 0) return [i];
				var a = Math.sqrt(n) / (2 * e);
				return [i - a, i + a]
			}

			function polynomialCoefficients(e, t, r, n) {
				return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
			}

			function singlePoint(e) {
				return new PolynomialBezier(e, e, e, e, !1)
			}

			function PolynomialBezier(e, t, r, n, i) {
				i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
				var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
					s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
				this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
			}

			function extrema(e, t) {
				var r = e.points[0][t],
					n = e.points[e.points.length - 1][t];
				if (r > n) {
					var i = n;
					n = r, r = i
				}
				for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
					if (a[s] > 0 && a[s] < 1) {
						var o = e.point(a[s])[t];
						o < r ? r = o : o > n && (n = o)
					} return {
					min: r,
					max: n
				}
			}

			function intersectData(e, t, r) {
				var n = e.boundingBox();
				return {
					cx: n.cx,
					cy: n.cy,
					width: n.width,
					height: n.height,
					bez: e,
					t: (t + r) / 2,
					t1: t,
					t2: r
				}
			}

			function splitData(e) {
				var t = e.bez.split(.5);
				return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
			}

			function boxIntersect(e, t) {
				return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
			}

			function intersectsImpl(e, t, r, n, i, a) {
				if (boxIntersect(e, t))
					if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
					else {
						var s = splitData(e),
							o = splitData(t);
						intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
					}
			}

			function crossProduct(e, t) {
				return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
			}

			function lineIntersection(e, t, r, n) {
				var i = [e[0], e[1], 1],
					a = [t[0], t[1], 1],
					s = [r[0], r[1], 1],
					o = [n[0], n[1], 1],
					l = crossProduct(crossProduct(i, a), crossProduct(s, o));
				return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
			}

			function polarOffset(e, t, r) {
				return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
			}

			function pointDistance(e, t) {
				return Math.hypot(e[0] - t[0], e[1] - t[1])
			}

			function pointEqual(e, t) {
				return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
			}

			function ZigZagModifier() {}

			function setPoint(e, t, r, n, i, a, s) {
				var o = r - Math.PI / 2,
					l = r + Math.PI / 2,
					c = t[0] + Math.cos(r) * n * i,
					u = t[1] - Math.sin(r) * n * i;
				e.setTripleAt(c, u, c + Math.cos(o) * a, u - Math.sin(o) * a, c + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
			}

			function getPerpendicularVector(e, t) {
				var r = [t[0] - e[0], t[1] - e[1]],
					n = .5 * -Math.PI;
				return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
			}

			function getProjectingAngle(e, t) {
				var r = t === 0 ? e.length() - 1 : t - 1,
					n = (t + 1) % e.length(),
					i = getPerpendicularVector(e.v[r], e.v[n]);
				return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
			}

			function zigZagCorner(e, t, r, n, i, a, s) {
				var o = getProjectingAngle(t, r),
					l = t.v[r % t._length],
					c = t.v[r === 0 ? t._length - 1 : r - 1],
					u = t.v[(r + 1) % t._length],
					f = a === 2 ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0,
					m = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
				setPoint(e, t.v[r % t._length], o, s, n, m / (2 * (i + 1)), f / (2 * (i + 1)), a)
			}

			function zigZagSegment(e, t, r, n, i, a) {
				for (var s = 0; s < n; s += 1) {
					var o = (s + 1) / (n + 1),
						l = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
						c = t.normalAngle(o);
					setPoint(e, t.point(o), c, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
				}
				return a
			}

			function linearOffset(e, t, r) {
				var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
				return [polarOffset(e, n, r), polarOffset(t, n, r)]
			}

			function offsetSegment(e, t) {
				var r, n, i, a, s, o, l;
				r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
				var c = lineIntersection(r, n, i, a);
				c === null && (c = n);
				var u = lineIntersection(s, o, i, a);
				return u === null && (u = s), new PolynomialBezier(r, c, u, o)
			}

			function joinLines(e, t, r, n, i) {
				var a = t.points[3],
					s = r.points[0];
				if (n === 3 || pointEqual(a, s)) return a;
				if (n === 2) {
					var o = -t.tangentAngle(1),
						l = -r.tangentAngle(0) + Math.PI,
						c = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
						u = c ? pointDistance(c, a) : pointDistance(a, s) / 2,
						f = polarOffset(a, o, 2 * u * roundCorner);
					return e.setXYAt(f[0], f[1], "o", e.length() - 1), f = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], f[0], f[1], e.length()), s
				}
				var m = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
				return m && pointDistance(m, a) < i ? (e.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], e.length()), m) : a
			}

			function getIntersection(e, t) {
				var r = e.intersections(t);
				return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
			}

			function pruneSegmentIntersection(e, t) {
				var r = e.slice(),
					n = t.slice(),
					i = getIntersection(e[e.length - 1], t[0]);
				return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
					[e[0].split(i[0])[0]],
					[t[t.length - 1].split(i[1])[1]]
				] : [r, n]
			}

			function pruneIntersections(e) {
				for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
				return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
			}

			function offsetSegmentSplit(e, t) {
				var r, n, i, a, s = e.inflectionPoints();
				if (s.length === 0) return [offsetSegment(e, t)];
				if (s.length === 1 || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
				r = (i = e.split(s[0]))[0];
				var o = (s[1] - s[0]) / (1 - s[0]);
				return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
			}

			function OffsetPathModifier() {}

			function getFontProperties(e) {
				for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
					case "italic":
						n = "italic";
						break;
					case "bold":
						r = "700";
						break;
					case "black":
						r = "900";
						break;
					case "medium":
						r = "500";
						break;
					case "regular":
					case "normal":
						r = "400";
						break;
					case "light":
					case "thin":
						r = "200"
				}
				return {
					style: n,
					weight: e.fWeight || r
				}
			}
			extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
			}, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
				var s = a ? -1 : 1,
					o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
					l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
				e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
			}, RepeaterModifier.prototype.init = function(e, t, r, n) {
				for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
				this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
			}, RepeaterModifier.prototype.resetElements = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
			}, RepeaterModifier.prototype.cloneElements = function(e) {
				var t = JSON.parse(JSON.stringify(e));
				return this.resetElements(t), t
			}, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
			}, RepeaterModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s = !1;
				if (this._mdf || e) {
					var o, l = Math.ceil(this.c.v);
					if (this._groups.length < l) {
						for (; this._groups.length < l;) {
							var c = {
								it: this.cloneElements(this._elements),
								ty: "gr"
							};
							c.it.push({
								a: {
									a: 0,
									ix: 1,
									k: [0, 0]
								},
								nm: "Transform",
								o: {
									a: 0,
									ix: 7,
									k: 100
								},
								p: {
									a: 0,
									ix: 2,
									k: [0, 0]
								},
								r: {
									a: 1,
									ix: 6,
									k: [{
										s: 0,
										e: 0,
										t: 0
									}, {
										s: 0,
										e: 0,
										t: 1
									}]
								},
								s: {
									a: 0,
									ix: 3,
									k: [100, 100]
								},
								sa: {
									a: 0,
									ix: 5,
									k: 0
								},
								sk: {
									a: 0,
									ix: 4,
									k: 0
								},
								ty: "tr"
							}), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
						}
						this.elem.reloadShapes(), s = !0
					}
					for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
						if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
							var u = this.elemsData[n].it,
								f = u[u.length - 1];
							f.transform.op.v !== 0 ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
						}
						a += 1
					}
					this._currentCopies = l;
					var m = this.o.v,
						d = m % 1,
						p = m > 0 ? Math.floor(m) : Math.ceil(m),
						g = this.pMatrix.props,
						h = this.rMatrix.props,
						v = this.sMatrix.props;
					this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
					var y, b, S = 0;
					if (m > 0) {
						for (; S < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), S += d)
					} else if (m < 0) {
						for (; S > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
						d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), S -= d)
					}
					for (n = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
						if (b = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), S !== 0) {
							for ((n !== 0 && i === 1 || n !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
							this.matrix.reset()
						} else
							for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
						S += 1, a -= 1, n += i
					}
				} else
					for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
				return s
			}, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
			}, RoundCornersModifier.prototype.processPath = function(e, t) {
				var r, n = shapePool.newElement();
				n.c = e.c;
				var i, a, s, o, l, c, u, f, m, d, p, g, h = e._length,
					v = 0;
				for (r = 0; r < h; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? r !== 0 && r !== h - 1 || e.c ? (o = r === 0 ? e.v[h - 1] : e.v[r - 1], c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * c, f = g = i[1] - (i[1] - o[1]) * c, m = u - (u - i[0]) * roundCorner, d = f - (f - i[1]) * roundCorner, n.setTripleAt(u, f, m, d, p, g, v), v += 1, o = r === h - 1 ? e.v[0] : e.v[r + 1], c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = m = i[0] + (o[0] - i[0]) * c, f = d = i[1] + (o[1] - i[1]) * c, p = u - (u - i[0]) * roundCorner, g = f - (f - i[1]) * roundCorner, n.setTripleAt(u, f, m, d, p, g, v), v += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], v), v += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], v), v += 1);
				return n
			}, RoundCornersModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.rd.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, PolynomialBezier.prototype.point = function(e) {
				return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
			}, PolynomialBezier.prototype.derivative = function(e) {
				return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
			}, PolynomialBezier.prototype.tangentAngle = function(e) {
				var t = this.derivative(e);
				return Math.atan2(t[1], t[0])
			}, PolynomialBezier.prototype.normalAngle = function(e) {
				var t = this.derivative(e);
				return Math.atan2(t[0], t[1])
			}, PolynomialBezier.prototype.inflectionPoints = function() {
				var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
				if (floatZero(e)) return [];
				var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
					r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
				if (r < 0) return [];
				var n = Math.sqrt(r);
				return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter(function(i) {
					return i > 0 && i < 1
				})
			}, PolynomialBezier.prototype.split = function(e) {
				if (e <= 0) return [singlePoint(this.points[0]), this];
				if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
				var t = lerpPoint(this.points[0], this.points[1], e),
					r = lerpPoint(this.points[1], this.points[2], e),
					n = lerpPoint(this.points[2], this.points[3], e),
					i = lerpPoint(t, r, e),
					a = lerpPoint(r, n, e),
					s = lerpPoint(i, a, e);
				return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
			}, PolynomialBezier.prototype.bounds = function() {
				return {
					x: extrema(this, 0),
					y: extrema(this, 1)
				}
			}, PolynomialBezier.prototype.boundingBox = function() {
				var e = this.bounds();
				return {
					left: e.x.min,
					right: e.x.max,
					top: e.y.min,
					bottom: e.y.max,
					width: e.x.max - e.x.min,
					height: e.y.max - e.y.min,
					cx: (e.x.max + e.x.min) / 2,
					cy: (e.y.max + e.y.min) / 2
				}
			}, PolynomialBezier.prototype.intersections = function(e, t, r) {
				t === void 0 && (t = 2), r === void 0 && (r = 7);
				var n = [];
				return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
			}, PolynomialBezier.shapeSegment = function(e, t) {
				var r = (t + 1) % e.length();
				return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
			}, PolynomialBezier.shapeSegmentInverted = function(e, t) {
				var r = (t + 1) % e.length();
				return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
			}, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
			}, ZigZagModifier.prototype.processPath = function(e, t, r, n) {
				var i = e._length,
					a = shapePool.newElement();
				if (a.c = e.c, e.c || (i -= 1), i === 0) return a;
				var s = -1,
					o = PolynomialBezier.shapeSegment(e, 0);
				zigZagCorner(a, e, 0, t, r, n, s);
				for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
				return a
			}, ZigZagModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amplitude.v,
					c = Math.max(0, Math.round(this.frequency.v)),
					u = this.pointsType.v;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, c, u));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			}, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
				this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
			}, OffsetPathModifier.prototype.processPath = function(e, t, r, n) {
				var i = shapePool.newElement();
				i.c = e.c;
				var a, s, o, l = e.length();
				e.c || (l -= 1);
				var c = [];
				for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), c.push(offsetSegmentSplit(o, t));
				if (!e.c)
					for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), c.push(offsetSegmentSplit(o, t));
				c = pruneIntersections(c);
				var u = null,
					f = null;
				for (a = 0; a < c.length; a += 1) {
					var m = c[a];
					for (f && (u = joinLines(i, f, m[0], r, n)), f = m[m.length - 1], s = 0; s < m.length; s += 1) o = m[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
				}
				return c.length && joinLines(i, f, c[0][0], r, n), i
			}, OffsetPathModifier.prototype.processShapes = function(e) {
				var t, r, n, i, a, s, o = this.shapes.length,
					l = this.amount.v,
					c = this.miterLimit.v,
					u = this.lineJoin;
				if (l !== 0)
					for (r = 0; r < o; r += 1) {
						if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
							for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, u, c));
						a.shape.paths = a.localShapeCollection
					}
				this.dynamicProperties.length || (this._mdf = !1)
			};
			var FontManager = function() {
				var e = {
						w: 0,
						size: 0,
						shapes: [],
						data: {
							shapes: []
						}
					},
					t = [];
				t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
				var r = 127988,
					n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

				function i(u, f) {
					var m = createTag("span");
					m.setAttribute("aria-hidden", !0), m.style.fontFamily = f;
					var d = createTag("span");
					d.innerText = "giItT1WQy@!-/#", m.style.position = "absolute", m.style.left = "-10000px", m.style.top = "-10000px", m.style.fontSize = "300px", m.style.fontVariant = "normal", m.style.fontStyle = "normal", m.style.fontWeight = "normal", m.style.letterSpacing = "0", m.appendChild(d), document.body.appendChild(m);
					var p = d.offsetWidth;
					return d.style.fontFamily = function(g) {
						var h, v = g.split(","),
							y = v.length,
							b = [];
						for (h = 0; h < y; h += 1) v[h] !== "sans-serif" && v[h] !== "monospace" && b.push(v[h]);
						return b.join(",")
					}(u) + ", " + f, {
						node: d,
						w: p,
						parent: m
					}
				}

				function a(u, f) {
					var m, d = document.body && f ? "svg" : "canvas",
						p = getFontProperties(u);
					if (d === "svg") {
						var g = createNS("text");
						g.style.fontSize = "100px", g.setAttribute("font-family", u.fFamily), g.setAttribute("font-style", p.style), g.setAttribute("font-weight", p.weight), g.textContent = "1", u.fClass ? (g.style.fontFamily = "inherit", g.setAttribute("class", u.fClass)) : g.style.fontFamily = u.fFamily, f.appendChild(g), m = g
					} else {
						var h = new OffscreenCanvas(500, 500).getContext("2d");
						h.font = p.style + " " + p.weight + " 100px " + u.fFamily, m = h
					}
					return {
						measureText: function(v) {
							return d === "svg" ? (m.textContent = v, m.getComputedTextLength()) : m.measureText(v).width
						}
					}
				}

				function s(u) {
					var f = 0,
						m = u.charCodeAt(0);
					if (m >= 55296 && m <= 56319) {
						var d = u.charCodeAt(1);
						d >= 56320 && d <= 57343 && (f = 1024 * (m - 55296) + d - 56320 + 65536)
					}
					return f
				}

				function o(u) {
					var f = s(u);
					return f >= 127462 && f <= 127487
				}
				var l = function() {
					this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
				};
				l.isModifier = function(u, f) {
					var m = u.toString(16) + f.toString(16);
					return n.indexOf(m) !== -1
				}, l.isZeroWidthJoiner = function(u) {
					return u === 8205
				}, l.isFlagEmoji = function(u) {
					return o(u.substr(0, 2)) && o(u.substr(2, 2))
				}, l.isRegionalCode = o, l.isCombinedCharacter = function(u) {
					return t.indexOf(u) !== -1
				}, l.isRegionalFlag = function(u, f) {
					var m = s(u.substr(f, 2));
					if (m !== r) return !1;
					var d = 0;
					for (f += 2; d < 5;) {
						if ((m = s(u.substr(f, 2))) < 917601 || m > 917626) return !1;
						d += 1, f += 2
					}
					return s(u.substr(f, 2)) === 917631
				}, l.isVariationSelector = function(u) {
					return u === 65039
				}, l.BLACK_FLAG_CODE_POINT = r;
				var c = {
					addChars: function(u) {
						if (u) {
							var f;
							this.chars || (this.chars = []);
							var m, d, p = u.length,
								g = this.chars.length;
							for (f = 0; f < p; f += 1) {
								for (m = 0, d = !1; m < g;) this.chars[m].style === u[f].style && this.chars[m].fFamily === u[f].fFamily && this.chars[m].ch === u[f].ch && (d = !0), m += 1;
								d || (this.chars.push(u[f]), g += 1)
							}
						}
					},
					addFonts: function(u, f) {
						if (u) {
							if (this.chars) return this.isLoaded = !0, void(this.fonts = u.list);
							if (!document.body) return this.isLoaded = !0, u.list.forEach(function(T) {
								T.helper = a(T), T.cache = {}
							}), void(this.fonts = u.list);
							var m, d = u.list,
								p = d.length,
								g = p;
							for (m = 0; m < p; m += 1) {
								var h, v, y = !0;
								if (d[m].loaded = !1, d[m].monoCase = i(d[m].fFamily, "monospace"), d[m].sansCase = i(d[m].fFamily, "sans-serif"), d[m].fPath) {
									if (d[m].fOrigin === "p" || d[m].origin === 3) {
										if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[m].fFamily + '"], style[f-origin="3"][f-family="' + d[m].fFamily + '"]')).length > 0 && (y = !1), y) {
											var b = createTag("style");
											b.setAttribute("f-forigin", d[m].fOrigin), b.setAttribute("f-origin", d[m].origin), b.setAttribute("f-family", d[m].fFamily), b.type = "text/css", b.innerText = "@font-face {font-family: " + d[m].fFamily + "; font-style: normal; src: url('" + d[m].fPath + "');}", f.appendChild(b)
										}
									} else if (d[m].fOrigin === "g" || d[m].origin === 1) {
										for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), v = 0; v < h.length; v += 1) h[v].href.indexOf(d[m].fPath) !== -1 && (y = !1);
										if (y) {
											var S = createTag("link");
											S.setAttribute("f-forigin", d[m].fOrigin), S.setAttribute("f-origin", d[m].origin), S.type = "text/css", S.rel = "stylesheet", S.href = d[m].fPath, document.body.appendChild(S)
										}
									} else if (d[m].fOrigin === "t" || d[m].origin === 2) {
										for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), v = 0; v < h.length; v += 1) d[m].fPath === h[v].src && (y = !1);
										if (y) {
											var _ = createTag("link");
											_.setAttribute("f-forigin", d[m].fOrigin), _.setAttribute("f-origin", d[m].origin), _.setAttribute("rel", "stylesheet"), _.setAttribute("href", d[m].fPath), f.appendChild(_)
										}
									}
								} else d[m].loaded = !0, g -= 1;
								d[m].helper = a(d[m], f), d[m].cache = {}, this.fonts.push(d[m])
							}
							g === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
						} else this.isLoaded = !0
					},
					getCharData: function(u, f, m) {
						for (var d = 0, p = this.chars.length; d < p;) {
							if (this.chars[d].ch === u && this.chars[d].style === f && this.chars[d].fFamily === m) return this.chars[d];
							d += 1
						}
						return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, f, m)), e
					},
					getFontByName: function(u) {
						for (var f = 0, m = this.fonts.length; f < m;) {
							if (this.fonts[f].fName === u) return this.fonts[f];
							f += 1
						}
						return this.fonts[0]
					},
					measureText: function(u, f, m) {
						var d = this.getFontByName(f),
							p = u;
						if (!d.cache[p]) {
							var g = d.helper;
							if (u === " ") {
								var h = g.measureText("|" + u + "|"),
									v = g.measureText("||");
								d.cache[p] = (h - v) / 100
							} else d.cache[p] = g.measureText(u) / 100
						}
						return d.cache[p] * m
					},
					checkLoadedFonts: function() {
						var u, f, m, d = this.fonts.length,
							p = d;
						for (u = 0; u < d; u += 1) this.fonts[u].loaded ? p -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (f = this.fonts[u].monoCase.node, m = this.fonts[u].monoCase.w, f.offsetWidth !== m ? (p -= 1, this.fonts[u].loaded = !0) : (f = this.fonts[u].sansCase.node, m = this.fonts[u].sansCase.w, f.offsetWidth !== m && (p -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
						p !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
					},
					setIsLoaded: function() {
						this.isLoaded = !0
					}
				};
				return l.prototype = c, l
			}();

			function SlotManager(e) {
				this.animationData = e
			}

			function slotFactory(e) {
				return new SlotManager(e)
			}

			function RenderableElement() {}
			SlotManager.prototype.getProp = function(e) {
				return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
			}, RenderableElement.prototype = {
				initRenderable: function() {
					this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
				},
				addRenderableComponent: function(e) {
					this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
				},
				removeRenderableComponent: function(e) {
					this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
				},
				prepareRenderableFrame: function(e) {
					this.checkLayerLimits(e)
				},
				checkTransparency: function() {
					this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
				},
				checkLayerLimits: function(e) {
					this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
				},
				renderRenderable: function() {
					var e, t = this.renderableComponents.length;
					for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
				},
				sourceRectAtTime: function() {
					return {
						top: 0,
						left: 0,
						width: 100,
						height: 100
					}
				},
				getLayerSize: function() {
					return this.data.ty === 5 ? {
						w: this.data.textData.width,
						h: this.data.textData.height
					} : {
						w: this.data.width,
						h: this.data.height
					}
				}
			};
			var getBlendMode = (blendModeEnums = {
					0: "source-over",
					1: "multiply",
					2: "screen",
					3: "overlay",
					4: "darken",
					5: "lighten",
					6: "color-dodge",
					7: "color-burn",
					8: "hard-light",
					9: "soft-light",
					10: "difference",
					11: "exclusion",
					12: "hue",
					13: "saturation",
					14: "color",
					15: "luminosity"
				}, function(e) {
					return blendModeEnums[e] || ""
				}),
				blendModeEnums;

			function SliderEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function AngleEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function ColorEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
			}

			function PointEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
			}

			function LayerIndexEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function MaskIndexEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function CheckboxEffect(e, t, r) {
				this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
			}

			function NoValueEffect() {
				this.p = {}
			}

			function EffectsManager(e, t) {
				var r, n = e.ef || [];
				this.effectElements = [];
				var i, a = n.length;
				for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
			}

			function GroupEffect(e, t) {
				this.init(e, t)
			}

			function BaseElement() {}

			function FrameElement() {}

			function FootageElement(e, t, r) {
				this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
			}

			function AudioElement(e, t, r) {
				this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
				var n = this.globalData.getAssetsPath(this.assetData);
				this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
					k: [100]
				}, 1, .01, this)
			}

			function BaseRenderer() {}
			extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
				var r;
				this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
				var n, i = this.data.ef.length,
					a = this.data.ef;
				for (r = 0; r < i; r += 1) {
					switch (n = null, a[r].ty) {
						case 0:
							n = new SliderEffect(a[r], t, this);
							break;
						case 1:
							n = new AngleEffect(a[r], t, this);
							break;
						case 2:
							n = new ColorEffect(a[r], t, this);
							break;
						case 3:
							n = new PointEffect(a[r], t, this);
							break;
						case 4:
						case 7:
							n = new CheckboxEffect(a[r], t, this);
							break;
						case 10:
							n = new LayerIndexEffect(a[r], t, this);
							break;
						case 11:
							n = new MaskIndexEffect(a[r], t, this);
							break;
						case 5:
							n = new EffectsManager(a[r], t, this);
							break;
						default:
							n = new NoValueEffect(a[r], t, this)
					}
					n && this.effectElements.push(n)
				}
			}, BaseElement.prototype = {
				checkMasks: function() {
					if (!this.data.hasMask) return !1;
					for (var e = 0, t = this.data.masksProperties.length; e < t;) {
						if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
						e += 1
					}
					return !1
				},
				initExpressions: function() {
					var e = getExpressionInterfaces();
					if (e) {
						var t = e("layer"),
							r = e("effects"),
							n = e("shape"),
							i = e("text"),
							a = e("comp");
						this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
						var s = r.createEffectsInterface(this, this.layerInterface);
						this.layerInterface.registerEffectsInterface(s), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
					}
				},
				setBlendMode: function() {
					var e = getBlendMode(this.data.bm);
					(this.baseElement || this.layerElement).style["mix-blend-mode"] = e
				},
				initBaseData: function(e, t, r) {
					this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
				},
				getType: function() {
					return this.type
				},
				sourceRectAtTime: function() {}
			}, FrameElement.prototype = {
				initFrame: function() {
					this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
				},
				prepareProperties: function(e, t) {
					var r, n = this.dynamicProperties.length;
					for (r = 0; r < n; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
				},
				addDynamicProperty: function(e) {
					this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
				}
			}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
				return null
			}, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
				var e = getExpressionInterfaces();
				if (e) {
					var t = e("footage");
					this.layerInterface = t(this)
				}
			}, FootageElement.prototype.getFootageData = function() {
				return this.footageData
			}, AudioElement.prototype.prepareFrame = function(e) {
				if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
				else {
					var t = this.tm.v;
					this._currentTime = t
				}
				this._volume = this.lv.v[0];
				var r = this._volume * this._volumeMultiplier;
				this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
			}, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
				this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
			}, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
				this.audio.pause(), this._isPlaying = !1
			}, AudioElement.prototype.pause = function() {
				this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
			}, AudioElement.prototype.resume = function() {
				this._canPlay = !0
			}, AudioElement.prototype.setRate = function(e) {
				this.audio.rate(e)
			}, AudioElement.prototype.volume = function(e) {
				this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
			}, AudioElement.prototype.getBaseElement = function() {
				return null
			}, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
				var t, r, n = this.layers.length;
				for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
				this.checkPendingElements()
			}, BaseRenderer.prototype.createItem = function(e) {
				switch (e.ty) {
					case 2:
						return this.createImage(e);
					case 0:
						return this.createComp(e);
					case 1:
						return this.createSolid(e);
					case 3:
					default:
						return this.createNull(e);
					case 4:
						return this.createShape(e);
					case 5:
						return this.createText(e);
					case 6:
						return this.createAudio(e);
					case 13:
						return this.createCamera(e);
					case 15:
						return this.createFootage(e)
				}
			}, BaseRenderer.prototype.createCamera = function() {
				throw new Error("You're using a 3d camera. Try the html renderer.")
			}, BaseRenderer.prototype.createAudio = function(e) {
				return new AudioElement(e, this.globalData, this)
			}, BaseRenderer.prototype.createFootage = function(e) {
				return new FootageElement(e, this.globalData, this)
			}, BaseRenderer.prototype.buildAllItems = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1) this.buildItem(e);
				this.checkPendingElements()
			}, BaseRenderer.prototype.includeLayers = function(e) {
				var t;
				this.completeLayers = !1;
				var r, n = e.length,
					i = this.layers.length;
				for (t = 0; t < n; t += 1)
					for (r = 0; r < i;) {
						if (this.layers[r].id === e[t].id) {
							this.layers[r] = e[t];
							break
						}
						r += 1
					}
			}, BaseRenderer.prototype.setProjectInterface = function(e) {
				this.globalData.projectInterface = e
			}, BaseRenderer.prototype.initItems = function() {
				this.globalData.progressiveLoad || this.buildAllItems()
			}, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
				for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && n[a] !== !0 ? (r.push(n[a]), n[a].setAsParent(), i[a].parent !== void 0 ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
			}, BaseRenderer.prototype.addPendingElement = function(e) {
				this.pendingElements.push(e)
			}, BaseRenderer.prototype.searchExtraCompositions = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1)
					if (e[t].xt) {
						var n = this.createComp(e[t]);
						n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
					}
			}, BaseRenderer.prototype.getElementById = function(e) {
				var t, r = this.elements.length;
				for (t = 0; t < r; t += 1)
					if (this.elements[t].data.ind === e) return this.elements[t];
				return null
			}, BaseRenderer.prototype.getElementByPath = function(e) {
				var t, r = e.shift();
				if (typeof r == "number") t = this.elements[r];
				else {
					var n, i = this.elements.length;
					for (n = 0; n < i; n += 1)
						if (this.elements[n].data.nm === r) {
							t = this.elements[n];
							break
						}
				}
				return e.length === 0 ? t : t.getElementByPath(e)
			}, BaseRenderer.prototype.setupGlobalData = function(e, t) {
				this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
					w: e.w,
					h: e.h
				}
			};
			var effectTypes = {
				TRANSFORM_EFFECT: "transformEFfect"
			};

			function TransformElement() {}

			function MaskElement(e, t, r) {
				this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
				var n, i, a = this.globalData.defs,
					s = this.masksProperties ? this.masksProperties.length : 0;
				this.viewData = createSizedArray(s), this.solidPath = "";
				var o, l, c, u, f, m, d = this.masksProperties,
					p = 0,
					g = [],
					h = createElementID(),
					v = "clipPath",
					y = "clip-path";
				for (n = 0; n < s; n += 1)
					if ((d[n].mode !== "a" && d[n].mode !== "n" || d[n].inv || d[n].o.k !== 100 || d[n].o.x) && (v = "mask", y = "mask"), d[n].mode !== "s" && d[n].mode !== "i" || p !== 0 ? c = null : ((c = createNS("rect")).setAttribute("fill", "#ffffff"), c.setAttribute("width", this.element.comp.data.w || 0), c.setAttribute("height", this.element.comp.data.h || 0), g.push(c)), i = createNS("path"), d[n].mode === "n") this.viewData[n] = {
						op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
						prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
						elem: i,
						lastPath: ""
					}, a.appendChild(i);
					else {
						var b;
						if (p += 1, i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), d[n].x.k !== 0 ? (v = "mask", y = "mask", m = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), u.appendChild(f), a.appendChild(u), i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[n] = {
								elem: i,
								x: m,
								expan: f,
								lastPath: "",
								lastOperator: "",
								filterId: b,
								lastRadius: 0
							}, d[n].mode === "i") {
							l = g.length;
							var S = createNS("g");
							for (o = 0; o < l; o += 1) S.appendChild(g[o]);
							var _ = createNS("mask");
							_.setAttribute("mask-type", "alpha"), _.setAttribute("id", h + "_" + p), _.appendChild(i), a.appendChild(_), S.setAttribute("mask", "url(" + getLocationHref() + "#" + h + "_" + p + ")"), g.length = 0, g.push(S)
						} else g.push(i);
						d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
							elem: i,
							lastPath: "",
							op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
							prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
							invRect: c
						}, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
					} for (this.maskElement = createNS(v), s = g.length, n = 0; n < s; n += 1) this.maskElement.appendChild(g[n]);
				p > 0 && (this.maskElement.setAttribute("id", h), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + h + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
			}
			TransformElement.prototype = {
				initTransform: function() {
					var e = new Matrix;
					this.finalTransform = {
						mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
							o: 0
						},
						_matMdf: !1,
						_localMatMdf: !1,
						_opMdf: !1,
						mat: e,
						localMat: e,
						localOpacity: 1
					}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
				},
				renderTransform: function() {
					if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
						var e, t = this.finalTransform.mat,
							r = 0,
							n = this.hierarchy.length;
						if (!this.finalTransform._matMdf)
							for (; r < n;) {
								if (this.hierarchy[r].finalTransform.mProp._mdf) {
									this.finalTransform._matMdf = !0;
									break
								}
								r += 1
							}
						if (this.finalTransform._matMdf)
							for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
					}
					this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
				},
				renderLocalTransform: function() {
					if (this.localTransforms) {
						var e = 0,
							t = this.localTransforms.length;
						if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
							for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
						if (this.finalTransform._localMatMdf) {
							var r = this.finalTransform.localMat;
							for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
								var n = this.localTransforms[e].matrix;
								r.multiply(n)
							}
							r.multiply(this.finalTransform.mat)
						}
						if (this.finalTransform._opMdf) {
							var i = this.finalTransform.localOpacity;
							for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
							this.finalTransform.localOpacity = i
						}
					}
				},
				searchEffectTransforms: function() {
					if (this.renderableEffectsManager) {
						var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
						if (e.length) {
							this.localTransforms = [], this.finalTransform.localMat = new Matrix;
							var t = 0,
								r = e.length;
							for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
						}
					}
				},
				globalToLocal: function(e) {
					var t = [];
					t.push(this.finalTransform);
					for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
					var a, s = t.length;
					for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
					return e
				},
				mHelper: new Matrix
			}, MaskElement.prototype.getMaskProperty = function(e) {
				return this.viewData[e].prop
			}, MaskElement.prototype.renderFrame = function(e) {
				var t, r = this.element.finalTransform.mat,
					n = this.masksProperties.length;
				for (t = 0; t < n; t += 1)
					if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
						var i = this.storedData[t].expan;
						this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
					}
			}, MaskElement.prototype.getMaskelement = function() {
				return this.maskElement
			}, MaskElement.prototype.createLayerSolidPath = function() {
				var e = "M0,0 ";
				return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
			}, MaskElement.prototype.drawPath = function(e, t, r) {
				var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
				for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
				if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
					var s = "";
					r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
				}
			}, MaskElement.prototype.destroy = function() {
				this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
			};
			var filtersFactory = function() {
					var e = {};
					return e.createFilter = function(t, r) {
						var n = createNS("filter");
						return n.setAttribute("id", t), r !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
					}, e.createAlphaToLuminanceFilter = function() {
						var t = createNS("feColorMatrix");
						return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
					}, e
				}(),
				featureSupport = function() {
					var e = {
						maskType: !0,
						svgLumaHidden: !0,
						offscreenCanvas: typeof OffscreenCanvas < "u"
					};
					return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
				}(),
				registeredEffects$1 = {},
				idPrefix = "filter_result_";

			function SVGEffects(e) {
				var t, r, n = "SourceGraphic",
					i = e.data.ef ? e.data.ef.length : 0,
					a = createElementID(),
					s = filtersFactory.createFilter(a, !0),
					o = 0;
				for (this.filters = [], t = 0; t < i; t += 1) {
					r = null;
					var l = e.data.ef[t].ty;
					registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
				}
				o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
			}

			function registerEffect$1(e, t, r) {
				registeredEffects$1[e] = {
					effect: t,
					countsAsEffect: r
				}
			}

			function SVGBaseElement() {}

			function HierarchyElement() {}

			function RenderableDOMElement() {}

			function IImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
					top: 0,
					left: 0,
					width: this.assetData.w,
					height: this.assetData.h
				}
			}

			function ProcessedElement(e, t) {
				this.elem = e, this.pos = t
			}

			function IShapeElement() {}
			SVGEffects.prototype.renderFrame = function(e) {
				var t, r = this.filters.length;
				for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
			}, SVGEffects.prototype.getEffects = function(e) {
				var t, r = this.filters.length,
					n = [];
				for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
				return n
			}, SVGBaseElement.prototype = {
				initRendererElement: function() {
					this.layerElement = createNS("g")
				},
				createContainerElements: function() {
					this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
					var e = null;
					if (this.data.td) {
						this.matteMasks = {};
						var t = createNS("g");
						t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
					} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
					if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
						var r = createNS("clipPath"),
							n = createNS("path");
						n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
						var i = createElementID();
						if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
							var a = createNS("g");
							a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
						} else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
					}
					this.data.bm !== 0 && this.setBlendMode()
				},
				renderElement: function() {
					this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
				},
				destroyBaseElement: function() {
					this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
				},
				getBaseElement: function() {
					return this.data.hd ? null : this.baseElement
				},
				createRenderableComponents: function() {
					this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
				},
				getMatte: function(e) {
					if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
						var t, r, n, i, a = this.layerId + "_" + e;
						if (e === 1 || e === 3) {
							var s = createNS("mask");
							s.setAttribute("id", a), s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || e !== 1 || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
						} else if (e === 2) {
							var o = createNS("mask");
							o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
							var l = createNS("g");
							o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
							var c = createNS("feComponentTransfer");
							c.setAttribute("in", "SourceGraphic"), r.appendChild(c);
							var u = createNS("feFuncA");
							u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), c.appendChild(u), this.globalData.defs.appendChild(r);
							var f = createNS("rect");
							f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(f), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(f), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
						}
						this.matteMasks[e] = a
					}
					return this.matteMasks[e]
				},
				setMatte: function(e) {
					this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
				}
			}, HierarchyElement.prototype = {
				initHierarchy: function() {
					this.hierarchy = [], this._isParent = !1, this.checkParenting()
				},
				setHierarchy: function(e) {
					this.hierarchy = e
				},
				setAsParent: function() {
					this._isParent = !0
				},
				checkParenting: function() {
					this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
				}
			}, extendPrototype([RenderableElement, createProxyFunction({
				initElement: function(e, t, r) {
					this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
				},
				hide: function() {
					this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
				},
				show: function() {
					this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
				},
				renderInnerContent: function() {},
				prepareFrame: function(e) {
					this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
				},
				destroy: function() {
					this.innerElem = null, this.destroyBaseElement()
				}
			})], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
				var e = this.globalData.getAssetsPath(this.assetData);
				this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
			}, IImageElement.prototype.sourceRectAtTime = function() {
				return this.sourceRect
			}, IShapeElement.prototype = {
				addShapeToModifiers: function(e) {
					var t, r = this.shapeModifiers.length;
					for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
				},
				isShapeInAnimatedModifiers: function(e) {
					for (var t = this.shapeModifiers.length; 0 < t;)
						if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
					return !1
				},
				renderModifiers: function() {
					if (this.shapeModifiers.length) {
						var e, t = this.shapes.length;
						for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
						for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
					}
				},
				searchProcessedElement: function(e) {
					for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
						if (t[r].elem === e) return t[r].pos;
						r += 1
					}
					return 0
				},
				addProcessedElement: function(e, t) {
					for (var r = this.processedElements, n = r.length; n;)
						if (r[n -= 1].elem === e) return void(r[n].pos = t);
					r.push(new ProcessedElement(e, t))
				},
				prepareFrame: function(e) {
					this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
				}
			};
			var lineCapEnum = {
					1: "butt",
					2: "round",
					3: "square"
				},
				lineJoinEnum = {
					1: "miter",
					2: "round",
					3: "bevel"
				};

			function SVGShapeData(e, t, r) {
				this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
				for (var n = 0, i = e.length; n < i;) {
					if (e[n].mProps.dynamicProperties.length) {
						this._isAnimated = !0;
						break
					}
					n += 1
				}
			}

			function SVGStyleData(e, t) {
				this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
			}

			function DashProperty(e, t, r, n) {
				var i;
				this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
				var a, s = t.length || 0;
				for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
					n: t[i].n,
					p: a
				};
				this.k || this.getValue(!0), this._isAnimated = this.k
			}

			function SVGStrokeStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
			}

			function SVGFillStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
			}

			function SVGNoStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
			}

			function GradientProperty(e, t, r) {
				this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
				var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
				this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
			}

			function SVGGradientFillStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
			}

			function SVGGradientStrokeStyleData(e, t, r) {
				this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
			}

			function ShapeGroupData() {
				this.it = [], this.prevViewData = [], this.gr = createNS("g")
			}

			function SVGTransformData(e, t, r) {
				this.transform = {
					mProps: e,
					op: t,
					container: r
				}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
			}
			SVGShapeData.prototype.setAsAnimated = function() {
				this._isAnimated = !0
			}, SVGStyleData.prototype.reset = function() {
				this.d = "", this._mdf = !1
			}, DashProperty.prototype.getValue = function(e) {
				if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
					var t = 0,
						r = this.dataProps.length;
					for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
				}
			}, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
				for (var r = 0, n = this.o.length / 2; r < n;) {
					if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
					r += 1
				}
				return !0
			}, GradientProperty.prototype.checkCollapsable = function() {
				if (this.o.length / 2 != this.c.length / 4) return !1;
				if (this.data.k.k[0].s)
					for (var e = 0, t = this.data.k.k.length; e < t;) {
						if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
						e += 1
					} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
				return !0
			}, GradientProperty.prototype.getValue = function(e) {
				if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
					var t, r, n, i = 4 * this.data.p;
					for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
					if (this.o.length)
						for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
					this._mdf = !e
				}
			}, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
				this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
					k: 0
				}, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
					k: 0
				}, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
			}, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
				var r = createElementID(),
					n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
				n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
				var i, a, s, o = [];
				for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
				e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
			}, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
				if (this.g._hasOpacity && !this.g._collapsable) {
					var r, n, i, a = createNS("mask"),
						s = createNS("path");
					a.appendChild(s);
					var o = createElementID(),
						l = createElementID();
					a.setAttribute("id", l);
					var c = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
					c.setAttribute("id", o), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
					var u = this.stops;
					for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(r), u.push(r);
					s.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), e.ty === "gs" && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), this.of = c, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
				}
			}, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
			var buildShapeString = function(e, t, r, n) {
					if (t === 0) return "";
					var i, a = e.o,
						s = e.i,
						o = e.v,
						l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
					for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
					return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
				},
				SVGElementsRenderer = function() {
					var e = new Matrix,
						t = new Matrix;

					function r(c, u, f) {
						(f || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (f || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
					}

					function n() {}

					function i(c, u, f) {
						var m, d, p, g, h, v, y, b, S, _, T = u.styles.length,
							x = u.lvl;
						for (v = 0; v < T; v += 1) {
							if (g = u.sh._mdf || f, u.styles[v].lvl < x) {
								for (b = t.reset(), S = x - u.styles[v].lvl, _ = u.transformers.length - 1; !g && S > 0;) g = u.transformers[_].mProps._mdf || g, S -= 1, _ -= 1;
								if (g)
									for (S = x - u.styles[v].lvl, _ = u.transformers.length - 1; S > 0;) b.multiply(u.transformers[_].mProps.v), S -= 1, _ -= 1
							} else b = e;
							if (d = (y = u.sh.paths)._length, g) {
								for (p = "", m = 0; m < d; m += 1)(h = y.shapes[m]) && h._length && (p += buildShapeString(h, h._length, h.c, b));
								u.caches[v] = p
							} else p = u.caches[v];
							u.styles[v].d += c.hd === !0 ? "" : p, u.styles[v]._mdf = g || u.styles[v]._mdf
						}
					}

					function a(c, u, f) {
						var m = u.style;
						(u.c._mdf || f) && m.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || f) && m.pElem.setAttribute("fill-opacity", u.o.v)
					}

					function s(c, u, f) {
						o(c, u, f), l(c, u, f)
					}

					function o(c, u, f) {
						var m, d, p, g, h, v = u.gf,
							y = u.g._hasOpacity,
							b = u.s.v,
							S = u.e.v;
						if (u.o._mdf || f) {
							var _ = c.ty === "gf" ? "fill-opacity" : "stroke-opacity";
							u.style.pElem.setAttribute(_, u.o.v)
						}
						if (u.s._mdf || f) {
							var T = c.t === 1 ? "x1" : "cx",
								x = T === "x1" ? "y1" : "cy";
							v.setAttribute(T, b[0]), v.setAttribute(x, b[1]), y && !u.g._collapsable && (u.of.setAttribute(T, b[0]), u.of.setAttribute(x, b[1]))
						}
						if (u.g._cmdf || f) {
							m = u.cst;
							var P = u.g.c;
							for (p = m.length, d = 0; d < p; d += 1)(g = m[d]).setAttribute("offset", P[4 * d] + "%"), g.setAttribute("stop-color", "rgb(" + P[4 * d + 1] + "," + P[4 * d + 2] + "," + P[4 * d + 3] + ")")
						}
						if (y && (u.g._omdf || f)) {
							var D = u.g.o;
							for (p = (m = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < p; d += 1) g = m[d], u.g._collapsable || g.setAttribute("offset", D[2 * d] + "%"), g.setAttribute("stop-opacity", D[2 * d + 1])
						}
						if (c.t === 1)(u.e._mdf || f) && (v.setAttribute("x2", S[0]), v.setAttribute("y2", S[1]), y && !u.g._collapsable && (u.of.setAttribute("x2", S[0]), u.of.setAttribute("y2", S[1])));
						else if ((u.s._mdf || u.e._mdf || f) && (h = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)), v.setAttribute("r", h), y && !u.g._collapsable && u.of.setAttribute("r", h)), u.e._mdf || u.h._mdf || u.a._mdf || f) {
							h || (h = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)));
							var w = Math.atan2(S[1] - b[1], S[0] - b[0]),
								C = u.h.v;
							C >= 1 ? C = .99 : C <= -1 && (C = -.99);
							var R = h * C,
								F = Math.cos(w + u.a.v) * R + b[0],
								M = Math.sin(w + u.a.v) * R + b[1];
							v.setAttribute("fx", F), v.setAttribute("fy", M), y && !u.g._collapsable && (u.of.setAttribute("fx", F), u.of.setAttribute("fy", M))
						}
					}

					function l(c, u, f) {
						var m = u.style,
							d = u.d;
						d && (d._mdf || f) && d.dashStr && (m.pElem.setAttribute("stroke-dasharray", d.dashStr), m.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), u.c && (u.c._mdf || f) && m.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || f) && m.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || f) && (m.pElem.setAttribute("stroke-width", u.w.v), m.msElem && m.msElem.setAttribute("stroke-width", u.w.v))
					}
					return {
						createRenderFunction: function(c) {
							switch (c.ty) {
								case "fl":
									return a;
								case "gf":
									return o;
								case "gs":
									return s;
								case "st":
									return l;
								case "sh":
								case "el":
								case "rc":
								case "sr":
									return i;
								case "tr":
									return r;
								case "no":
									return n;
								default:
									return null
							}
						}
					}
				}();

			function SVGShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
			}

			function LetterProps(e, t, r, n, i, a) {
				this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
					o: !0,
					sw: !!t,
					sc: !!r,
					fc: !!n,
					m: !0,
					p: !0
				}
			}

			function TextProperty(e, t) {
				this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
					ascent: 0,
					boxWidth: this.defaultBoxWidth,
					f: "",
					fStyle: "",
					fWeight: "",
					fc: "",
					j: "",
					justifyOffset: "",
					l: [],
					lh: 0,
					lineWidths: [],
					ls: "",
					of: "",
					s: "",
					sc: "",
					sw: 0,
					t: 0,
					tr: 0,
					sz: 0,
					ps: null,
					fillColorAnim: !1,
					strokeColorAnim: !1,
					strokeWidthAnim: !1,
					yOffset: 0,
					finalSize: 0,
					finalText: [],
					finalLineHeight: 0,
					__complete: !1
				}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
			}, SVGShapeElement.prototype.filterUniqueShapes = function() {
				var e, t, r, n, i = this.shapes.length,
					a = this.stylesList.length,
					s = [],
					o = !1;
				for (r = 0; r < a; r += 1) {
					for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1)(t = this.shapes[e]).styles.indexOf(n) !== -1 && (s.push(t), o = t._isAnimated || o);
					s.length > 1 && o && this.setShapesAsAnimated(s)
				}
			}, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t].setAsAnimated()
			}, SVGShapeElement.prototype.createStyleElement = function(e, t) {
				var r, n = new SVGStyleData(e, t),
					i = n.pElem;
				return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, n) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, n) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, n)), e.ty !== "st" && e.ty !== "gs" || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
			}, SVGShapeElement.prototype.createGroupElement = function(e) {
				var t = new ShapeGroupData;
				return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
			}, SVGShapeElement.prototype.createTransformElement = function(e, t) {
				var r = TransformPropertyFactory.getTransformProperty(this, e, this),
					n = new SVGTransformData(r, r.o, t);
				return this.addToAnimatedContents(e, n), n
			}, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
				var n = 4;
				e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7);
				var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
				return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
			}, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
				for (var r = 0, n = this.animatedContents.length; r < n;) {
					if (this.animatedContents[r].element === t) return;
					r += 1
				}
				this.animatedContents.push({
					fn: SVGElementsRenderer.createRenderFunction(e),
					element: t,
					data: e
				})
			}, SVGShapeElement.prototype.setElementStyles = function(e) {
				var t, r = e.styles,
					n = this.stylesList.length;
				for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
			}, SVGShapeElement.prototype.reloadShapes = function() {
				var e;
				this._isFirstFrame = !0;
				var t = this.itemsData.length;
				for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
				for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
				this.renderModifiers()
			}, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, s) {
				var o, l, c, u, f, m, d = [].concat(a),
					p = e.length - 1,
					g = [],
					h = [];
				for (o = p; o >= 0; o -= 1) {
					if ((m = this.searchProcessedElement(e[o])) ? t[o] = r[m - 1] : e[o]._render = s, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") m ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), g.push(t[o].style);
					else if (e[o].ty === "gr") {
						if (m)
							for (c = t[o].it.length, l = 0; l < c; l += 1) t[o].prevViewData[l] = t[o].it[l];
						else t[o] = this.createGroupElement(e[o]);
						this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, d, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
					} else e[o].ty === "tr" ? (m || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, d.push(u)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (m || (t[o] = this.createShapeElement(e[o], d, i)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (m ? (f = t[o]).closed = !1 : ((f = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = f, this.shapeModifiers.push(f)), h.push(f)) : e[o].ty === "rp" && (m ? (f = t[o]).closed = !0 : (f = ShapeModifiers.getModifier(e[o].ty), t[o] = f, f.init(this, e, o, t), this.shapeModifiers.push(f), s = !1), h.push(f));
					this.addProcessedElement(e[o], o + 1)
				}
				for (p = g.length, o = 0; o < p; o += 1) g[o].closed = !0;
				for (p = h.length, o = 0; o < p; o += 1) h[o].closed = !0
			}, SVGShapeElement.prototype.renderInnerContent = function() {
				var e;
				this.renderModifiers();
				var t = this.stylesList.length;
				for (e = 0; e < t; e += 1) this.stylesList[e].reset();
				for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
			}, SVGShapeElement.prototype.renderShape = function() {
				var e, t, r = this.animatedContents.length;
				for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
			}, SVGShapeElement.prototype.destroy = function() {
				this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
			}, LetterProps.prototype.update = function(e, t, r, n, i, a) {
				this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
				var s = !1;
				return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
			}, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
				for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}, TextProperty.prototype.setCurrentData = function(e) {
				e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
			}, TextProperty.prototype.searchProperty = function() {
				return this.searchKeyframes()
			}, TextProperty.prototype.searchKeyframes = function() {
				return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
			}, TextProperty.prototype.addEffect = function(e) {
				this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.getValue = function(e) {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
					this.currentData.t = this.data.d.k[this.keysIndex].s.t;
					var t = this.currentData,
						r = this.keysIndex;
					if (this.lock) this.setCurrentData(this.currentData);
					else {
						var n;
						this.lock = !0, this._mdf = !1;
						var i = this.effectsSequence.length,
							a = e || this.data.d.k[this.keysIndex].s;
						for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
						t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
				}
			}, TextProperty.prototype.getKeyframeValue = function() {
				for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
				return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
			}, TextProperty.prototype.buildFinalText = function(e) {
				for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
				return n
			}, TextProperty.prototype.completeTextData = function(e) {
				e.__complete = !0;
				var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
					c = this.data,
					u = [],
					f = 0,
					m = c.m.g,
					d = 0,
					p = 0,
					g = 0,
					h = [],
					v = 0,
					y = 0,
					b = l.getFontByName(e.f),
					S = 0,
					_ = getFontProperties(b);
				e.fWeight = _.weight, e.fStyle = _.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
				var T, x = e.tr / 1e3 * e.finalSize;
				if (e.sz)
					for (var P, D, w = !0, C = e.sz[0], R = e.sz[1]; w;) {
						P = 0, v = 0, r = (D = this.buildFinalText(e.t)).length, x = e.tr / 1e3 * e.finalSize;
						var F = -1;
						for (t = 0; t < r; t += 1) T = D[t].charCodeAt(0), n = !1, D[t] === " " ? F = t : T !== 13 && T !== 3 || (v = 0, n = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(D[t], b.fStyle, b.fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(D[t], e.f, e.finalSize), v + S > C && D[t] !== " " ? (F === -1 ? r += 1 : t = F, P += e.finalLineHeight || 1.2 * e.finalSize, D.splice(t, F === t ? 1 : 0, "\r"), F = -1, v = 0) : (v += S, v += x);
						P += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && R < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = D, r = e.finalText.length, w = !1)
					}
				v = -x, S = 0;
				var M, N = 0;
				for (t = 0; t < r; t += 1)
					if (n = !1, (T = (M = e.finalText[t]).charCodeAt(0)) === 13 || T === 3 ? (N = 0, h.push(v), y = v > y ? v : y, v = -2 * x, i = "", n = !0, g += 1) : i = M, l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(e.f).fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(i, e.f, e.finalSize), M === " " ? N += S + x : (v += S + x + N, N = 0), u.push({
							l: S,
							an: S,
							add: d,
							n,
							anIndexes: [],
							val: i,
							line: g,
							animatorJustifyOffset: 0
						}), m == 2) {
						if (d += S, i === "" || i === " " || t === r - 1) {
							for (i !== "" && i !== " " || (d -= S); p <= t;) u[p].an = d, u[p].ind = f, u[p].extra = S, p += 1;
							f += 1, d = 0
						}
					} else if (m == 3) {
					if (d += S, i === "" || t === r - 1) {
						for (i === "" && (d -= S); p <= t;) u[p].an = d, u[p].ind = f, u[p].extra = S, p += 1;
						d = 0, f += 1
					}
				} else u[f].ind = f, u[f].extra = 0, f += 1;
				if (e.l = u, y = v > y ? v : y, h.push(v), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
				else switch (e.boxWidth = y, e.j) {
					case 1:
						e.justifyOffset = -e.boxWidth;
						break;
					case 2:
						e.justifyOffset = -e.boxWidth / 2;
						break;
					default:
						e.justifyOffset = 0
				}
				e.lineWidths = h;
				var z, $, A, O, L = c.a;
				s = L.length;
				var H = [];
				for (a = 0; a < s; a += 1) {
					for ((z = L[a]).a.sc && (e.strokeColorAnim = !0), z.a.sw && (e.strokeWidthAnim = !0), (z.a.fc || z.a.fh || z.a.fs || z.a.fb) && (e.fillColorAnim = !0), O = 0, A = z.s.b, t = 0; t < r; t += 1)($ = u[t]).anIndexes[a] = O, (A == 1 && $.val !== "" || A == 2 && $.val !== "" && $.val !== " " || A == 3 && ($.n || $.val == " " || t == r - 1) || A == 4 && ($.n || t == r - 1)) && (z.s.rn === 1 && H.push(O), O += 1);
					c.a[a].s.totalChars = O;
					var U, j = -1;
					if (z.s.rn === 1)
						for (t = 0; t < r; t += 1) j != ($ = u[t]).anIndexes[a] && (j = $.anIndexes[a], U = H.splice(Math.floor(Math.random() * H.length), 1)[0]), $.anIndexes[a] = U
				}
				e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
			}, TextProperty.prototype.updateDocumentData = function(e, t) {
				t = t === void 0 ? this.keysIndex : t;
				var r = this.copyData({}, this.data.d.k[t].s);
				r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.recalculate = function(e) {
				var t = this.data.d.k[e].s;
				t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
			}, TextProperty.prototype.canResizeFont = function(e) {
				this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			}, TextProperty.prototype.setMinimumFontSize = function(e) {
				this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
			};
			var TextSelectorProp = function() {
				var e = Math.max,
					t = Math.min,
					r = Math.floor;

				function n(i, a) {
					this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(i), this.s = PropertyFactory.getProp(i, a.s || {
						k: 0
					}, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : {
						v: 100
					}, this.o = PropertyFactory.getProp(i, a.o || {
						k: 0
					}, 0, 0, this), this.xe = PropertyFactory.getProp(i, a.xe || {
						k: 0
					}, 0, 0, this), this.ne = PropertyFactory.getProp(i, a.ne || {
						k: 0
					}, 0, 0, this), this.sm = PropertyFactory.getProp(i, a.sm || {
						k: 100
					}, 0, 0, this), this.a = PropertyFactory.getProp(i, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
				}
				return n.prototype = {
					getMult: function(i) {
						this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
						var a = 0,
							s = 0,
							o = 1,
							l = 1;
						this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
						var c = BezierFactory.getBezierEasing(a, s, o, l).get,
							u = 0,
							f = this.finalS,
							m = this.finalE,
							d = this.data.sh;
						if (d === 2) u = c(u = m === f ? i >= m ? 1 : 0 : e(0, t(.5 / (m - f) + (i - f) / (m - f), 1)));
						else if (d === 3) u = c(u = m === f ? i >= m ? 0 : 1 : 1 - e(0, t(.5 / (m - f) + (i - f) / (m - f), 1)));
						else if (d === 4) m === f ? u = 0 : (u = e(0, t(.5 / (m - f) + (i - f) / (m - f), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = c(u);
						else if (d === 5) {
							if (m === f) u = 0;
							else {
								var p = m - f,
									g = -p / 2 + (i = t(e(0, i + .5 - f), m - f)),
									h = p / 2;
								u = Math.sqrt(1 - g * g / (h * h))
							}
							u = c(u)
						} else d === 6 ? (m === f ? u = 0 : (i = t(e(0, i + .5 - f), m - f), u = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (m - f))) / 2), u = c(u)) : (i >= r(f) && (u = e(0, t(i - f < 0 ? t(m, 1) - (f - i) : m - i, 1))), u = c(u));
						if (this.sm.v !== 100) {
							var v = .01 * this.sm.v;
							v === 0 && (v = 1e-8);
							var y = .5 - .5 * v;
							u < y ? u = 0 : (u = (u - y) / v) > 1 && (u = 1)
						}
						return u * this.a.v
					},
					getValue: function(i) {
						this.iterateDynamicProperties(), this._mdf = i || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, i && this.data.r === 2 && (this.e.v = this._currentTextLength);
						var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
							s = this.o.v / a,
							o = this.s.v / a + s,
							l = this.e.v / a + s;
						if (o > l) {
							var c = o;
							o = l, l = c
						}
						this.finalS = o, this.finalE = l
					}
				}, extendPrototype([DynamicPropertyContainer], n), {
					getTextSelectorProp: function(i, a, s) {
						return new n(i, a, s)
					}
				}
			}();

			function TextAnimatorDataProperty(e, t, r) {
				var n = {
						propType: !1
					},
					i = PropertyFactory.getProp,
					a = t.a;
				this.a = {
					r: a.r ? i(e, a.r, 0, degToRads, r) : n,
					rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
					ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
					sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
					sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
					s: a.s ? i(e, a.s, 1, .01, r) : n,
					a: a.a ? i(e, a.a, 1, 0, r) : n,
					o: a.o ? i(e, a.o, 0, .01, r) : n,
					p: a.p ? i(e, a.p, 1, 0, r) : n,
					sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
					sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
					fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
					fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
					fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
					fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
					t: a.t ? i(e, a.t, 0, 0, r) : n
				}, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
			}

			function TextAnimatorProperty(e, t, r) {
				this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
					alignment: {}
				}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
			}

			function ITextElement() {}
			TextAnimatorProperty.prototype.searchProperties = function() {
				var e, t, r = this._textData.a.length,
					n = PropertyFactory.getProp;
				for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
				this._textData.p && "m" in this._textData.p ? (this._pathData = {
					a: n(this._elem, this._textData.p.a, 0, 0, this),
					f: n(this._elem, this._textData.p.f, 0, 0, this),
					l: n(this._elem, this._textData.p.l, 0, 0, this),
					r: n(this._elem, this._textData.p.r, 0, 0, this),
					p: n(this._elem, this._textData.p.p, 0, 0, this),
					m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
				}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
			}, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
				if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
					this._isFirstFrame = !1;
					var r, n, i, a, s, o, l, c, u, f, m, d, p, g, h, v, y, b, S, _ = this._moreOptions.alignment.v,
						T = this._animatorsData,
						x = this._textData,
						P = this.mHelper,
						D = this._renderType,
						w = this.renderedLetters.length,
						C = e.l;
					if (this._hasMaskedPath) {
						if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
							var R, F = S.v;
							for (this._pathData.r.v && (F = F.reverse()), s = {
									tLength: 0,
									segments: []
								}, a = F._length - 1, v = 0, i = 0; i < a; i += 1) R = bez.buildBezierData(F.v[i], F.v[i + 1], [F.o[i][0] - F.v[i][0], F.o[i][1] - F.v[i][1]], [F.i[i + 1][0] - F.v[i + 1][0], F.i[i + 1][1] - F.v[i + 1][1]]), s.tLength += R.segmentLength, s.segments.push(R), v += R.segmentLength;
							i = a, S.v.c && (R = bez.buildBezierData(F.v[i], F.v[0], [F.o[i][0] - F.v[i][0], F.o[i][1] - F.v[i][1]], [F.i[0][0] - F.v[0][0], F.i[0][1] - F.v[0][1]]), s.tLength += R.segmentLength, s.segments.push(R), v += R.segmentLength), this._pathData.pi = s
						}
						if (s = this._pathData.pi, o = this._pathData.f.v, m = 0, f = 1, c = 0, u = !0, g = s.segments, o < 0 && S.v.c)
							for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), f = (p = g[m = g.length - 1].points).length - 1; o < 0;) o += p[f].partialLength, (f -= 1) < 0 && (f = (p = g[m -= 1].points).length - 1);
						d = (p = g[m].points)[f - 1], h = (l = p[f]).partialLength
					}
					a = C.length, r = 0, n = 0;
					var M, N, z, $, A, O = 1.2 * e.finalSize * .714,
						L = !0;
					z = T.length;
					var H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te = -1,
						ne = o,
						Me = m,
						xt = f,
						tt = -1,
						I = "",
						q = this.defaultPropsArray;
					if (e.j === 2 || e.j === 1) {
						var k = 0,
							G = 0,
							B = e.j === 2 ? -.5 : -1,
							V = 0,
							K = !0;
						for (i = 0; i < a; i += 1)
							if (C[i].n) {
								for (k && (k += G); V < i;) C[V].animatorJustifyOffset = k, V += 1;
								k = 0, K = !0
							} else {
								for (N = 0; N < z; N += 1)(M = T[N].a).t.propType && (K && e.j === 2 && (G += M.t.v * B), (A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars)).length ? k += M.t.v * A[0] * B : k += M.t.v * A * B);
								K = !1
							} for (k && (k += G); V < i;) C[V].animatorJustifyOffset = k, V += 1
					}
					for (i = 0; i < a; i += 1) {
						if (P.reset(), Y = 1, C[i].n) r = 0, n += e.yOffset, n += L ? 1 : 0, o = ne, L = !1, this._hasMaskedPath && (f = xt, d = (p = g[m = Me].points)[f - 1], h = (l = p[f]).partialLength, c = 0), I = "", Ee = "", Ae = "", Pe = "", q = this.defaultPropsArray;
						else {
							if (this._hasMaskedPath) {
								if (tt !== C[i].line) {
									switch (e.j) {
										case 1:
											o += v - e.lineWidths[C[i].line];
											break;
										case 2:
											o += (v - e.lineWidths[C[i].line]) / 2
									}
									tt = C[i].line
								}
								Te !== C[i].ind && (C[Te] && (o += C[Te].extra), o += C[i].an / 2, Te = C[i].ind), o += _[0] * C[i].an * .005;
								var Z = 0;
								for (N = 0; N < z; N += 1)(M = T[N].a).p.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars)).length ? Z += M.p.v[0] * A[0] : Z += M.p.v[0] * A), M.a.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars)).length ? Z += M.a.v[0] * A[0] : Z += M.a.v[0] * A);
								for (u = !0, this._pathData.a.v && (o = .5 * C[0].an + (v - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * Te / (a - 1), o += this._pathData.f.v); u;) c + h >= o + Z || !p ? (y = (o + Z - c) / l.partialLength, U = d.point[0] + (l.point[0] - d.point[0]) * y, j = d.point[1] + (l.point[1] - d.point[1]) * y, P.translate(-_[0] * C[i].an * .005, -_[1] * O * .01), u = !1) : p && (c += l.partialLength, (f += 1) >= p.length && (f = 0, g[m += 1] ? p = g[m].points : S.v.c ? (f = 0, p = g[m = 0].points) : (c -= l.partialLength, p = null)), p && (d = l, h = (l = p[f]).partialLength));
								H = C[i].an / 2 - C[i].add, P.translate(-H, 0, 0)
							} else H = C[i].an / 2 - C[i].add, P.translate(-H, 0, 0), P.translate(-_[0] * C[i].an * .005, -_[1] * O * .01, 0);
							for (N = 0; N < z; N += 1)(M = T[N].a).t.propType && (A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? A.length ? o += M.t.v * A[0] : o += M.t.v * A : A.length ? r += M.t.v * A[0] : r += M.t.v * A));
							for (e.strokeWidthAnim && (J = e.sw || 0), e.strokeColorAnim && (Q = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (X = [e.fc[0], e.fc[1], e.fc[2]]), N = 0; N < z; N += 1)(M = T[N].a).a.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars)).length ? P.translate(-M.a.v[0] * A[0], -M.a.v[1] * A[1], M.a.v[2] * A[2]) : P.translate(-M.a.v[0] * A, -M.a.v[1] * A, M.a.v[2] * A));
							for (N = 0; N < z; N += 1)(M = T[N].a).s.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars)).length ? P.scale(1 + (M.s.v[0] - 1) * A[0], 1 + (M.s.v[1] - 1) * A[1], 1) : P.scale(1 + (M.s.v[0] - 1) * A, 1 + (M.s.v[1] - 1) * A, 1));
							for (N = 0; N < z; N += 1) {
								if (M = T[N].a, A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars), M.sk.propType && (A.length ? P.skewFromAxis(-M.sk.v * A[0], M.sa.v * A[1]) : P.skewFromAxis(-M.sk.v * A, M.sa.v * A)), M.r.propType && (A.length ? P.rotateZ(-M.r.v * A[2]) : P.rotateZ(-M.r.v * A)), M.ry.propType && (A.length ? P.rotateY(M.ry.v * A[1]) : P.rotateY(M.ry.v * A)), M.rx.propType && (A.length ? P.rotateX(M.rx.v * A[0]) : P.rotateX(M.rx.v * A)), M.o.propType && (A.length ? Y += (M.o.v * A[0] - Y) * A[0] : Y += (M.o.v * A - Y) * A), e.strokeWidthAnim && M.sw.propType && (A.length ? J += M.sw.v * A[0] : J += M.sw.v * A), e.strokeColorAnim && M.sc.propType)
									for (re = 0; re < 3; re += 1) A.length ? Q[re] += (M.sc.v[re] - Q[re]) * A[0] : Q[re] += (M.sc.v[re] - Q[re]) * A;
								if (e.fillColorAnim && e.fc) {
									if (M.fc.propType)
										for (re = 0; re < 3; re += 1) A.length ? X[re] += (M.fc.v[re] - X[re]) * A[0] : X[re] += (M.fc.v[re] - X[re]) * A;
									M.fh.propType && (X = A.length ? addHueToRGB(X, M.fh.v * A[0]) : addHueToRGB(X, M.fh.v * A)), M.fs.propType && (X = A.length ? addSaturationToRGB(X, M.fs.v * A[0]) : addSaturationToRGB(X, M.fs.v * A)), M.fb.propType && (X = A.length ? addBrightnessToRGB(X, M.fb.v * A[0]) : addBrightnessToRGB(X, M.fb.v * A))
								}
							}
							for (N = 0; N < z; N += 1)(M = T[N].a).p.propType && (A = T[N].s.getMult(C[i].anIndexes[N], x.a[N].s.totalChars), this._hasMaskedPath ? A.length ? P.translate(0, M.p.v[1] * A[0], -M.p.v[2] * A[1]) : P.translate(0, M.p.v[1] * A, -M.p.v[2] * A) : A.length ? P.translate(M.p.v[0] * A[0], M.p.v[1] * A[1], -M.p.v[2] * A[2]) : P.translate(M.p.v[0] * A, M.p.v[1] * A, -M.p.v[2] * A));
							if (e.strokeWidthAnim && (Ae = J < 0 ? 0 : J), e.strokeColorAnim && (he = "rgb(" + Math.round(255 * Q[0]) + "," + Math.round(255 * Q[1]) + "," + Math.round(255 * Q[2]) + ")"), e.fillColorAnim && e.fc && (Ee = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), this._hasMaskedPath) {
								if (P.translate(0, -e.ls), P.translate(0, _[1] * O * .01 + n, 0), this._pathData.p.v) {
									b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
									var le = 180 * Math.atan(b) / Math.PI;
									l.point[0] < d.point[0] && (le += 180), P.rotate(-le * Math.PI / 180)
								}
								P.translate(U, j, 0), o -= _[0] * C[i].an * .005, C[i + 1] && Te !== C[i + 1].ind && (o += C[i].an / 2, o += .001 * e.tr * e.finalSize)
							} else {
								switch (P.translate(r, n, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
									case 1:
										P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]), 0, 0);
										break;
									case 2:
										P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]) / 2, 0, 0)
								}
								P.translate(0, -e.ls), P.translate(H, 0, 0), P.translate(_[0] * C[i].an * .005, _[1] * O * .01, 0), r += C[i].l + .001 * e.tr * e.finalSize
							}
							D === "html" ? I = P.toCSS() : D === "svg" ? I = P.to2dCSS() : q = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], Pe = Y
						}
						w <= i ? ($ = new LetterProps(Pe, Ae, he, Ee, I, q), this.renderedLetters.push($), w += 1, this.lettersChangedFlag = !0) : ($ = this.renderedLetters[i], this.lettersChangedFlag = $.update(Pe, Ae, he, Ee, I, q) || this.lettersChangedFlag)
					}
				}
			}, TextAnimatorProperty.prototype.getValue = function() {
				this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
			}, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
				this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
			}, ITextElement.prototype.prepareFrame = function(e) {
				this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
			}, ITextElement.prototype.createPathShape = function(e, t) {
				var r, n, i = t.length,
					a = "";
				for (r = 0; r < i; r += 1) t[r].ty === "sh" && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
				return a
			}, ITextElement.prototype.updateDocumentData = function(e, t) {
				this.textProperty.updateDocumentData(e, t)
			}, ITextElement.prototype.canResizeFont = function(e) {
				this.textProperty.canResizeFont(e)
			}, ITextElement.prototype.setMinimumFontSize = function(e) {
				this.textProperty.setMinimumFontSize(e)
			}, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
				switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
					case 1:
						t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
						break;
					case 2:
						t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
				}
				t.translate(n, i, 0)
			}, ITextElement.prototype.buildColor = function(e) {
				return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
			}, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
				(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
			};
			var emptyShapeData = {
				shapes: []
			};

			function SVGTextLottieElement(e, t, r) {
				this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
			}

			function ISolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function NullElement(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
			}

			function SVGRendererBase() {}

			function ICompElement() {}

			function SVGCompElement(e, t, r) {
				this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function SVGRenderer(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
				var r = "";
				if (t && t.title) {
					var n = createNS("title"),
						i = createElementID();
					n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
				}
				if (t && t.description) {
					var a = createNS("desc"),
						s = createElementID();
					a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
				}
				r && this.svgElement.setAttribute("aria-labelledby", r);
				var o = createNS("defs");
				this.svgElement.appendChild(o);
				var l = createNS("g");
				this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
					preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					contentVisibility: t && t.contentVisibility || "visible",
					progressiveLoad: t && t.progressiveLoad || !1,
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					viewBoxOnly: t && t.viewBoxOnly || !1,
					viewBoxSize: t && t.viewBoxSize || !1,
					className: t && t.className || "",
					id: t && t.id || "",
					focusable: t && t.focusable,
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "100%",
						height: t && t.filterSize && t.filterSize.height || "100%",
						x: t && t.filterSize && t.filterSize.x || "0%",
						y: t && t.filterSize && t.filterSize.y || "0%"
					},
					width: t && t.width,
					height: t && t.height,
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					defs: o,
					renderConfig: this.renderConfig
				}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
			}

			function ShapeTransformManager() {
				this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
				this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
			}, SVGTextLottieElement.prototype.buildTextContents = function(e) {
				for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
				return n.push(i), n
			}, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
				if (e.shapes && e.shapes.length) {
					var r = e.shapes[0];
					if (r.it) {
						var n = r.it[r.it.length - 1];
						n.s && (n.s.k[0] = t, n.s.k[1] = t)
					}
				}
				return e
			}, SVGTextLottieElement.prototype.buildNewText = function() {
				var e, t;
				this.addDynamicProperty(this);
				var r = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
				var n = this.globalData.fontManager.getFontByName(r.f);
				if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
				else {
					this.layerElement.setAttribute("font-family", n.fFamily);
					var i = r.fWeight,
						a = r.fStyle;
					this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
				}
				this.layerElement.setAttribute("aria-label", r.t);
				var s, o = r.l || [],
					l = !!this.globalData.fontManager.chars;
				t = o.length;
				var c = this.mHelper,
					u = this.data.singleShape,
					f = 0,
					m = 0,
					d = !0,
					p = .001 * r.tr * r.finalSize;
				if (!u || l || r.sz) {
					var g, h = this.textSpans.length;
					for (e = 0; e < t; e += 1) {
						if (this.textSpans[e] || (this.textSpans[e] = {
								span: null,
								childSpan: null,
								glyph: null
							}), !l || !u || e === 0) {
							if (s = h > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), h <= e) {
								if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
									var v = createNS("g");
									s.appendChild(v), this.textSpans[e].childSpan = v
								}
								this.textSpans[e].span = s, this.layerElement.appendChild(s)
							}
							s.style.display = "inherit"
						}
						if (c.reset(), u && (o[e].n && (f = -p, m += r.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, c, o[e].line, f, m), f += o[e].l || 0, f += p), l) {
							var y;
							if ((g = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) y = new SVGCompElement(g.data, this.globalData, this);
							else {
								var b = emptyShapeData;
								g.data && g.data.shapes && (b = this.buildShapeData(g.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
							}
							if (this.textSpans[e].glyph) {
								var S = this.textSpans[e].glyph;
								this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
							}
							this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), g.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
						} else u && s.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
					}
					u && s && s.setAttribute("d", "")
				} else {
					var _ = this.textContainer,
						T = "start";
					switch (r.j) {
						case 1:
							T = "end";
							break;
						case 2:
							T = "middle";
							break;
						default:
							T = "start"
					}
					_.setAttribute("text-anchor", T), _.setAttribute("letter-spacing", p);
					var x = this.buildTextContents(r.finalText);
					for (t = x.length, m = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = x[e], s.setAttribute("x", 0), s.setAttribute("y", m), s.style.display = "inherit", _.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
						span: null,
						glyph: null
					}), this.textSpans[e].span = s, m += r.finalLineHeight;
					this.layerElement.appendChild(_)
				}
				for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
				this._sizeChanged = !0
			}, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
				if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
					this._sizeChanged = !1;
					var e = this.layerElement.getBBox();
					this.bbox = {
						top: e.y,
						left: e.x,
						width: e.width,
						height: e.height
					}
				}
				return this.bbox
			}, SVGTextLottieElement.prototype.getValue = function() {
				var e, t, r = this.textSpans.length;
				for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
			}, SVGTextLottieElement.prototype.renderInnerContent = function() {
				if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
					var e, t;
					this._sizeChanged = !0;
					var r, n, i, a = this.textAnimator.renderedLetters,
						s = this.textProperty.currentData.l;
					for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
				}
			}, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
				var e = createNS("rect");
				e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
			}, NullElement.prototype.prepareFrame = function(e) {
				this.prepareProperties(e, !0)
			}, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
				return null
			}, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
				return new NullElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createShape = function(e) {
				return new SVGShapeElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createText = function(e) {
				return new SVGTextLottieElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createImage = function(e) {
				return new IImageElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.createSolid = function(e) {
				return new ISolidElement(e, this.globalData, this)
			}, SVGRendererBase.prototype.configAnimation = function(e) {
				this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
				var t = this.globalData.defs;
				this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
				var r = createNS("clipPath"),
					n = createNS("rect");
				n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
				var i = createElementID();
				r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
			}, SVGRendererBase.prototype.destroy = function() {
				var e;
				this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
				var t = this.layers ? this.layers.length : 0;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.destroyed = !0, this.animationItem = null
			}, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
				var t = 0,
					r = this.layers.length;
				for (t = 0; t < r; t += 1)
					if (this.layers[t].ind === e) return t;
				return -1
			}, SVGRendererBase.prototype.buildItem = function(e) {
				var t = this.elements;
				if (!t[e] && this.layers[e].ty !== 99) {
					t[e] = !0;
					var r = this.createItem(this.layers[e]);
					if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
						var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
						if (n === -1) return;
						if (this.elements[n] && this.elements[n] !== !0) {
							var i = t[n].getMatte(this.layers[e].tt);
							r.setMatte(i)
						} else this.buildItem(n), this.addPendingElement(r)
					}
				}
			}, SVGRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) {
					var e = this.pendingElements.pop();
					if (e.checkParenting(), e.data.tt)
						for (var t = 0, r = this.elements.length; t < r;) {
							if (this.elements[t] === e) {
								var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
									i = this.elements[n].getMatte(this.layers[t].tt);
								e.setMatte(i);
								break
							}
							t += 1
						}
				}
			}, SVGRendererBase.prototype.renderFrame = function(e) {
				if (this.renderedFrame !== e && !this.destroyed) {
					var t;
					e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
					var r = this.layers.length;
					for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
					if (this.globalData._mdf)
						for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				}
			}, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
				var r = e.getBaseElement();
				if (r) {
					for (var n, i = 0; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
					n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
				}
			}, SVGRendererBase.prototype.hide = function() {
				this.layerElement.style.display = "none"
			}, SVGRendererBase.prototype.show = function() {
				this.layerElement.style.display = "block"
			}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
			}, ICompElement.prototype.prepareFrame = function(e) {
				if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
					if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
					else {
						var t = this.tm.v;
						t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
					}
					var r, n = this.elements.length;
					for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
				}
			}, ICompElement.prototype.renderInnerContent = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
			}, ICompElement.prototype.setElements = function(e) {
				this.elements = e
			}, ICompElement.prototype.getElements = function() {
				return this.elements
			}, ICompElement.prototype.destroyElements = function() {
				var e, t = this.layers.length;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
			}, ICompElement.prototype.destroy = function() {
				this.destroyElements(), this.destroyBaseElement()
			}, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
				return new SVGCompElement(e, this.globalData, this)
			}, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
				return new SVGCompElement(e, this.globalData, this)
			}, ShapeTransformManager.prototype = {
				addTransformSequence: function(e) {
					var t, r = e.length,
						n = "_";
					for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
					var i = this.sequences[n];
					return i || (i = {
						transforms: [].concat(e),
						finalTransform: new Matrix,
						_mdf: !1
					}, this.sequences[n] = i, this.sequenceList.push(i)), i
				},
				processSequence: function(e, t) {
					for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
						if (e.transforms[r].transform.mProps._mdf) {
							i = !0;
							break
						}
						r += 1
					}
					if (i)
						for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
					e._mdf = i
				},
				processSequences: function(e) {
					var t, r = this.sequenceList.length;
					for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
				},
				getNewKey: function() {
					return this.transform_key_count += 1, "_" + this.transform_key_count
				}
			};
			var lumaLoader = function() {
				var e = "__lottie_element_luma_buffer",
					t = null,
					r = null,
					n = null;

				function i() {
					var a, s, o;
					t || (a = createNS("svg"), s = createNS("filter"), o = createNS("feColorMatrix"), s.setAttribute("id", e), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(o), a.appendChild(s), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), n = a, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
				}
				return {
					load: i,
					get: function(a) {
						return t || i(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
					}
				}
			};

			function createCanvas(e, t) {
				if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
				var r = createTag("canvas");
				return r.width = e, r.height = t, r
			}
			var assetLoader = {
					loadLumaCanvas: lumaLoader.load,
					getLumaCanvas: lumaLoader.get,
					createCanvas
				},
				registeredEffects = {};

			function CVEffects(e) {
				var t, r, n = e.data.ef ? e.data.ef.length : 0;
				for (this.filters = [], t = 0; t < n; t += 1) {
					r = null;
					var i = e.data.ef[t].ty;
					registeredEffects[i] && (r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
				}
				this.filters.length && e.addRenderableComponent(this)
			}

			function registerEffect(e, t) {
				registeredEffects[e] = {
					effect: t
				}
			}

			function CVMaskElement(e, t) {
				var r;
				this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
				var n = this.masksProperties.length,
					i = !1;
				for (r = 0; r < n; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
				this.hasMasks = i, i && this.element.addRenderableComponent(this)
			}

			function CVBaseElement() {}
			CVEffects.prototype.renderFrame = function(e) {
				var t, r = this.filters.length;
				for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
			}, CVEffects.prototype.getEffects = function(e) {
				var t, r = this.filters.length,
					n = [];
				for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
				return n
			}, CVMaskElement.prototype.renderFrame = function() {
				if (this.hasMasks) {
					var e, t, r, n, i = this.element.finalTransform.mat,
						a = this.element.canvasContext,
						s = this.masksProperties.length;
					for (a.beginPath(), e = 0; e < s; e += 1)
						if (this.masksProperties[e].mode !== "n") {
							var o;
							this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
							var l = n._length;
							for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
							r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
						} this.element.globalData.renderer.save(!0), a.clip()
				}
			}, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
				this.element = null
			};
			var operationsMap = {
				1: "source-in",
				2: "source-out",
				3: "source-in",
				4: "source-out"
			};

			function CVShapeData(e, t, r, n) {
				this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
				var i, a = 4;
				t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
				var s, o = r.length;
				for (i = 0; i < o; i += 1) r[i].closed || (s = {
					transforms: n.addTransformSequence(r[i].transforms),
					trNodes: []
				}, this.styledShapes.push(s), r[i].elements.push(s))
			}

			function CVShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
			}

			function CVTextElement(e, t, r) {
				this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
					fill: "rgba(0,0,0,0)",
					stroke: "rgba(0,0,0,0)",
					sWidth: 0,
					fValue: ""
				}, this.initElement(e, t, r)
			}

			function CVImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
			}

			function CVSolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function CanvasRendererBase() {}

			function CanvasContext() {
				this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
			}

			function CVContextData() {
				var e;
				for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
					var t = new CanvasContext;
					this.stack[e] = t
				}
				this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
			}

			function CVCompElement(e, t, r) {
				this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function CanvasRenderer(e, t) {
				this.animationItem = e, this.renderConfig = {
					clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
					context: t && t.context || null,
					progressiveLoad: t && t.progressiveLoad || !1,
					preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					contentVisibility: t && t.contentVisibility || "visible",
					className: t && t.className || "",
					id: t && t.id || "",
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
					frameNum: -1,
					_mdf: !1,
					renderConfig: this.renderConfig,
					currentGlobalAlpha: -1
				}, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
			}

			function HBaseElement() {}

			function HSolidElement(e, t, r) {
				this.initElement(e, t, r)
			}

			function HShapeElement(e, t, r) {
				this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
					x: 999999,
					y: -999999,
					h: 0,
					w: 0
				}
			}

			function HTextElement(e, t, r) {
				this.textSpans = [], this.textPaths = [], this.currentBBox = {
					x: 999999,
					y: -999999,
					h: 0,
					w: 0
				}, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
			}

			function HCameraElement(e, t, r) {
				this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
				var n = PropertyFactory.getProp;
				if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
					var i, a = e.ks.or.k.length;
					for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
				}
				this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
					mProp: this
				}
			}

			function HImageElement(e, t, r) {
				this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
			}

			function HybridRendererBase(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
					className: t && t.className || "",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "400%",
						height: t && t.filterSize && t.filterSize.height || "400%",
						x: t && t.filterSize && t.filterSize.x || "-100%",
						y: t && t.filterSize && t.filterSize.y || "-100%"
					}
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					renderConfig: this.renderConfig
				}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
			}

			function HCompElement(e, t, r) {
				this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
					_placeholder: !0
				}
			}

			function HybridRenderer(e, t) {
				this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
					className: t && t.className || "",
					imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
					hideOnTransparent: !(t && t.hideOnTransparent === !1),
					filterSize: {
						width: t && t.filterSize && t.filterSize.width || "400%",
						height: t && t.filterSize && t.filterSize.height || "400%",
						x: t && t.filterSize && t.filterSize.x || "-100%",
						y: t && t.filterSize && t.filterSize.y || "-100%"
					},
					runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
				}, this.globalData = {
					_mdf: !1,
					frameNum: -1,
					renderConfig: this.renderConfig
				}, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
			}
			CVBaseElement.prototype = {
				createElements: function() {},
				initRendererElement: function() {},
				createContainerElements: function() {
					if (this.data.tt >= 1) {
						this.buffers = [];
						var e = this.globalData.canvasContext,
							t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
						this.buffers.push(t);
						var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
						this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
					}
					this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
				},
				createContent: function() {},
				setBlendMode: function() {
					var e = this.globalData;
					if (e.blendMode !== this.data.bm) {
						e.blendMode = this.data.bm;
						var t = getBlendMode(this.data.bm);
						e.canvasContext.globalCompositeOperation = t
					}
				},
				createRenderableComponents: function() {
					this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
				},
				hideElement: function() {
					this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
				},
				showElement: function() {
					this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
				},
				clearCanvas: function(e) {
					e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
				},
				prepareLayer: function() {
					if (this.data.tt >= 1) {
						var e = this.buffers[0].getContext("2d");
						this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
					}
				},
				exitLayer: function() {
					if (this.data.tt >= 1) {
						var e = this.buffers[1],
							t = e.getContext("2d");
						if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
							var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
							r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
						}
						this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
					}
				},
				renderFrame: function(e) {
					if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
						this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
						var t = this.data.ty === 0;
						this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
					}
				},
				destroy: function() {
					this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
				},
				mHelper: new Matrix
			}, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
				opacity: 1,
				_opMdf: !1
			}, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
			}, CVShapeElement.prototype.createStyleElement = function(e, t) {
				var r = {
						data: e,
						type: e.ty,
						preTransforms: this.transformsManager.addTransformSequence(t),
						transforms: [],
						elements: [],
						closed: e.hd === !0
					},
					n = {};
				if (e.ty === "fl" || e.ty === "st" ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
						k: 0
					}, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
						k: 0
					}, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
					if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
						var i = new DashProperty(this, e.d, "canvas", this);
						n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
					}
				} else r.r = e.r === 2 ? "evenodd" : "nonzero";
				return this.stylesList.push(r), n.style = r, n
			}, CVShapeElement.prototype.createGroupElement = function() {
				return {
					it: [],
					prevViewData: []
				}
			}, CVShapeElement.prototype.createTransformElement = function(e) {
				return {
					transform: {
						opacity: 1,
						_opMdf: !1,
						key: this.transformsManager.getNewKey(),
						op: PropertyFactory.getProp(this, e.o, 0, .01, this),
						mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
					}
				}
			}, CVShapeElement.prototype.createShapeElement = function(e) {
				var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
				return this.shapes.push(t), this.addShapeToModifiers(t), t
			}, CVShapeElement.prototype.reloadShapes = function() {
				var e;
				this._isFirstFrame = !0;
				var t = this.itemsData.length;
				for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
				for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
				this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
			}, CVShapeElement.prototype.addTransformToStyleList = function(e) {
				var t, r = this.stylesList.length;
				for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
			}, CVShapeElement.prototype.removeTransformFromStyleList = function() {
				var e, t = this.stylesList.length;
				for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
			}, CVShapeElement.prototype.closeStyles = function(e) {
				var t, r = e.length;
				for (t = 0; t < r; t += 1) e[t].closed = !0
			}, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
				var a, s, o, l, c, u, f = e.length - 1,
					m = [],
					d = [],
					p = [].concat(i);
				for (a = f; a >= 0; a -= 1) {
					if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], p), m.push(t[a].style);
					else if (e[a].ty === "gr") {
						if (l)
							for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
						else t[a] = this.createGroupElement(e[a]);
						this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, p)
					} else e[a].ty === "tr" ? (l || (u = this.createTransformElement(e[a]), t[a] = u), p.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (c = t[a]).closed = !1 : ((c = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = c, this.shapeModifiers.push(c)), d.push(c)) : e[a].ty === "rp" && (l ? (c = t[a]).closed = !0 : (c = ShapeModifiers.getModifier(e[a].ty), t[a] = c, c.init(this, e, a, t), this.shapeModifiers.push(c), n = !1), d.push(c));
					this.addProcessedElement(e[a], a + 1)
				}
				for (this.removeTransformFromStyleList(), this.closeStyles(m), f = d.length, a = 0; a < f; a += 1) d[a].closed = !0
			}, CVShapeElement.prototype.renderInnerContent = function() {
				this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
			}, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
				(e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
			}, CVShapeElement.prototype.drawLayer = function() {
				var e, t, r, n, i, a, s, o, l, c = this.stylesList.length,
					u = this.globalData.renderer,
					f = this.globalData.canvasContext;
				for (e = 0; e < c; e += 1)
					if (((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
						for (u.save(), a = l.elements, o === "st" || o === "gs" ? (u.ctxStrokeStyle(o === "st" ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle(o === "fl" ? l.co : l.grd), u.ctxOpacity(l.coOp), o !== "st" && o !== "gs" && f.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
							for (o !== "st" && o !== "gs" || (f.beginPath(), l.da && (f.setLineDash(l.da), f.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) s[n].t === "m" ? f.moveTo(s[n].p[0], s[n].p[1]) : s[n].t === "c" ? f.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : f.closePath();
							o !== "st" && o !== "gs" || (u.ctxStroke(), l.da && f.setLineDash(this.dashResetter))
						}
						o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore()
					}
			}, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
				var i, a;
				for (a = e, i = t.length - 1; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
				n && this.drawLayer()
			}, CVShapeElement.prototype.renderStyledShape = function(e, t) {
				if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
					var r, n, i, a = e.trNodes,
						s = t.paths,
						o = s._length;
					a.length = 0;
					var l = e.transforms.finalTransform;
					for (i = 0; i < o; i += 1) {
						var c = s.shapes[i];
						if (c && c.v) {
							for (n = c._length, r = 1; r < n; r += 1) r === 1 && a.push({
								t: "m",
								p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
							}), a.push({
								t: "c",
								pts: l.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r])
							});
							n === 1 && a.push({
								t: "m",
								p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
							}), c.c && n && (a.push({
								t: "c",
								pts: l.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0])
							}), a.push({
								t: "z"
							}))
						}
					}
					e.trNodes = a
				}
			}, CVShapeElement.prototype.renderPath = function(e, t) {
				if (e.hd !== !0 && e._shouldRender) {
					var r, n = t.styledShapes.length;
					for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
				}
			}, CVShapeElement.prototype.renderFill = function(e, t, r) {
				var n = t.style;
				(t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
			}, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
				var n, i = t.style;
				if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
					var a, s = this.globalData.canvasContext,
						o = t.s.v,
						l = t.e.v;
					if (e.t === 1) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
					else {
						var c = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
							u = Math.atan2(l[1] - o[1], l[0] - o[0]),
							f = t.h.v;
						f >= 1 ? f = .99 : f <= -1 && (f = -.99);
						var m = c * f,
							d = Math.cos(u + t.a.v) * m + o[0],
							p = Math.sin(u + t.a.v) * m + o[1];
						n = s.createRadialGradient(d, p, 0, o[0], o[1], c)
					}
					var g = e.g.p,
						h = t.g.c,
						v = 1;
					for (a = 0; a < g; a += 1) t.g._hasOpacity && t.g._collapsable && (v = t.g.o[2 * a + 1]), n.addColorStop(h[4 * a] / 100, "rgba(" + h[4 * a + 1] + "," + h[4 * a + 2] + "," + h[4 * a + 3] + "," + v + ")");
					i.grd = n
				}
				i.coOp = t.o.v * r.opacity
			}, CVShapeElement.prototype.renderStroke = function(e, t, r) {
				var n = t.style,
					i = t.d;
				i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
			}, CVShapeElement.prototype.destroy = function() {
				this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
				var e = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
				var t = !1;
				e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
				var r = !1;
				e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
				var n, i, a, s, o, l, c, u, f, m, d, p, g = this.globalData.fontManager.getFontByName(e.f),
					h = e.l,
					v = this.mHelper;
				this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
				var y = this.data.singleShape,
					b = .001 * e.tr * e.finalSize,
					S = 0,
					_ = 0,
					T = !0,
					x = 0;
				for (n = 0; n < i; n += 1) {
					s = (a = this.globalData.fontManager.getCharData(e.finalText[n], g.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, v.reset(), y && h[n].n && (S = -b, _ += e.yOffset, _ += T ? 1 : 0, T = !1), f = (c = s.shapes ? s.shapes[0].it : []).length, v.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, v, h[n].line, S, _), d = createSizedArray(f - 1);
					var P = 0;
					for (u = 0; u < f; u += 1)
						if (c[u].ty === "sh") {
							for (l = c[u].ks.k.i.length, m = c[u].ks.k, p = [], o = 1; o < l; o += 1) o === 1 && p.push(v.applyToX(m.v[0][0], m.v[0][1], 0), v.applyToY(m.v[0][0], m.v[0][1], 0)), p.push(v.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0), v.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0), v.applyToX(m.i[o][0], m.i[o][1], 0), v.applyToY(m.i[o][0], m.i[o][1], 0), v.applyToX(m.v[o][0], m.v[o][1], 0), v.applyToY(m.v[o][0], m.v[o][1], 0));
							p.push(v.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0), v.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0), v.applyToX(m.i[0][0], m.i[0][1], 0), v.applyToY(m.i[0][0], m.i[0][1], 0), v.applyToX(m.v[0][0], m.v[0][1], 0), v.applyToY(m.v[0][0], m.v[0][1], 0)), d[P] = p, P += 1
						} y && (S += h[n].l, S += b), this.textSpans[x] ? this.textSpans[x].elem = d : this.textSpans[x] = {
						elem: d
					}, x += 1
				}
			}, CVTextElement.prototype.renderInnerContent = function() {
				var e, t, r, n, i, a;
				this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
				var s, o = this.textAnimator.renderedLetters,
					l = this.textProperty.currentData.l;
				t = l.length;
				var c, u, f = null,
					m = null,
					d = null,
					p = this.globalData.renderer;
				for (e = 0; e < t; e += 1)
					if (!l[e].n) {
						if ((s = o[e]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill) {
							for (s && s.fc ? f !== s.fc && (p.ctxFillStyle(s.fc), f = s.fc) : f !== this.values.fill && (f = this.values.fill, p.ctxFillStyle(this.values.fill)), n = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
								for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
							this.globalData.canvasContext.closePath(), p.ctxFill()
						}
						if (this.stroke) {
							for (s && s.sw ? d !== s.sw && (d = s.sw, p.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, p.ctxLineWidth(this.values.sWidth)), s && s.sc ? m !== s.sc && (m = s.sc, p.ctxStrokeStyle(s.sc)) : m !== this.values.stroke && (m = this.values.stroke, p.ctxStrokeStyle(this.values.stroke)), n = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
								for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
							this.globalData.canvasContext.closePath(), p.ctxStroke()
						}
						s && this.globalData.renderer.restore()
					}
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
				if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
					var e = createTag("canvas");
					e.width = this.assetData.w, e.height = this.assetData.h;
					var t, r, n = e.getContext("2d"),
						i = this.img.width,
						a = this.img.height,
						s = i / a,
						o = this.assetData.w / this.assetData.h,
						l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
					s > o && l === "xMidYMid slice" || s < o && l !== "xMidYMid slice" ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
				}
			}, CVImageElement.prototype.renderInnerContent = function() {
				this.canvasContext.drawImage(this.img, 0, 0)
			}, CVImageElement.prototype.destroy = function() {
				this.img = null
			}, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
				this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
			}, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
				return new CVShapeElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createText = function(e) {
				return new CVTextElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createImage = function(e) {
				return new CVImageElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createSolid = function(e) {
				return new CVSolidElement(e, this.globalData, this)
			}, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
				e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
			}, CanvasRendererBase.prototype.ctxOpacity = function(e) {
				this.canvasContext.globalAlpha *= e < 0 ? 0 : e
			}, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
				this.canvasContext.fillStyle = e
			}, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
				this.canvasContext.strokeStyle = e
			}, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
				this.canvasContext.lineWidth = e
			}, CanvasRendererBase.prototype.ctxLineCap = function(e) {
				this.canvasContext.lineCap = e
			}, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
				this.canvasContext.lineJoin = e
			}, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
				this.canvasContext.miterLimit = e
			}, CanvasRendererBase.prototype.ctxFill = function(e) {
				this.canvasContext.fill(e)
			}, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, n) {
				this.canvasContext.fillRect(e, t, r, n)
			}, CanvasRendererBase.prototype.ctxStroke = function() {
				this.canvasContext.stroke()
			}, CanvasRendererBase.prototype.reset = function() {
				this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
			}, CanvasRendererBase.prototype.save = function() {
				this.canvasContext.save()
			}, CanvasRendererBase.prototype.restore = function(e) {
				this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
			}, CanvasRendererBase.prototype.configAnimation = function(e) {
				if (this.animationItem.wrapper) {
					this.animationItem.container = createTag("canvas");
					var t = this.animationItem.container.style;
					t.width = "100%", t.height = "100%";
					var r = "0px 0px 0px";
					t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
				} else this.canvasContext = this.renderConfig.context;
				this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
					w: e.w,
					h: e.h,
					sx: 0,
					sy: 0,
					tx: 0,
					ty: 0
				}, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
			}, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
				var r, n, i, a;
				if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
					var s = this.renderConfig.preserveAspectRatio.split(" "),
						o = s[1] || "meet",
						l = s[0] || "xMidYMid",
						c = l.substr(0, 4),
						u = l.substr(4);
					i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && o === "meet" || a < i && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = c === "xMid" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = u === "YMid" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : u === "YMax" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
				} else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
				this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
			}, CanvasRendererBase.prototype.destroy = function() {
				var e;
				for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
			}, CanvasRendererBase.prototype.renderFrame = function(e, t) {
				if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
					var r;
					this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
					var n = this.layers.length;
					for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
					if (this.globalData._mdf) {
						for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
						this.renderConfig.clearCanvas !== !0 && this.restore()
					}
				}
			}, CanvasRendererBase.prototype.buildItem = function(e) {
				var t = this.elements;
				if (!t[e] && this.layers[e].ty !== 99) {
					var r = this.createItem(this.layers[e], this, this.globalData);
					t[e] = r, r.initExpressions()
				}
			}, CanvasRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
			}, CanvasRendererBase.prototype.hide = function() {
				this.animationItem.container.style.display = "none"
			}, CanvasRendererBase.prototype.show = function() {
				this.animationItem.container.style.display = "block"
			}, CVContextData.prototype.duplicate = function() {
				var e = 2 * this._length,
					t = 0;
				for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
				this._length = e
			}, CVContextData.prototype.reset = function() {
				this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
			}, CVContextData.prototype.restore = function(e) {
				this.cArrPos -= 1;
				var t, r = this.stack[this.cArrPos],
					n = r.transform,
					i = this.cTr.props;
				for (t = 0; t < 16; t += 1) i[t] = n[t];
				if (e) {
					this.nativeContext.restore();
					var a = this.stack[this.cArrPos + 1];
					this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
				}
				this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
			}, CVContextData.prototype.save = function(e) {
				e && this.nativeContext.save();
				var t = this.cTr.props;
				this._length <= this.cArrPos && this.duplicate();
				var r, n = this.stack[this.cArrPos];
				for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
				this.cArrPos += 1;
				var i = this.stack[this.cArrPos];
				i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
			}, CVContextData.prototype.setOpacity = function(e) {
				this.stack[this.cArrPos].opacity = e
			}, CVContextData.prototype.setContext = function(e) {
				this.nativeContext = e
			}, CVContextData.prototype.fillStyle = function(e) {
				this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
			}, CVContextData.prototype.strokeStyle = function(e) {
				this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
			}, CVContextData.prototype.lineWidth = function(e) {
				this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
			}, CVContextData.prototype.lineCap = function(e) {
				this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
			}, CVContextData.prototype.lineJoin = function(e) {
				this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
			}, CVContextData.prototype.miterLimit = function(e) {
				this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
			}, CVContextData.prototype.transform = function(e) {
				this.transformMat.cloneFromProps(e);
				var t = this.cTr;
				this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
				var r = t.props;
				this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
			}, CVContextData.prototype.opacity = function(e) {
				var t = this.stack[this.cArrPos].opacity;
				t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
			}, CVContextData.prototype.fill = function(e) {
				this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
			}, CVContextData.prototype.fillRect = function(e, t, r, n) {
				this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
			}, CVContextData.prototype.stroke = function() {
				this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
			}, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
				var e, t = this.canvasContext;
				for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
			}, CVCompElement.prototype.destroy = function() {
				var e;
				for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
				this.layers = null, this.elements = null
			}, CVCompElement.prototype.createComp = function(e) {
				return new CVCompElement(e, this.globalData, this)
			}, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
				return new CVCompElement(e, this.globalData, this)
			}, HBaseElement.prototype = {
				checkBlendMode: function() {},
				initRendererElement: function() {
					this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
				},
				createContainerElements: function() {
					this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
				},
				renderElement: function() {
					var e = this.transformedElement ? this.transformedElement.style : {};
					if (this.finalTransform._matMdf) {
						var t = this.finalTransform.mat.toCSS();
						e.transform = t, e.webkitTransform = t
					}
					this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
				},
				renderFrame: function() {
					this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
				},
				destroy: function() {
					this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
				},
				createRenderableComponents: function() {
					this.maskManager = new MaskElement(this.data, this, this.globalData)
				},
				addEffects: function() {},
				setMatte: function() {}
			}, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
				var e;
				this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
			}, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
				var e;
				if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
				else {
					e = createNS("svg");
					var t = this.comp.data ? this.comp.data : this.globalData.compSize;
					e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
				}
				this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
			}, HShapeElement.prototype.getTransformedPoint = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
				return t
			}, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
				var r, n, i, a, s, o = e.sh.v,
					l = e.transformers,
					c = o._length;
				if (!(c <= 1)) {
					for (r = 0; r < c - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
					o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
				}
			}, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
				this.getBoundsOfCurve(e, t, r, n);
				var a = this.shapeBoundingBox;
				i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
			}, HShapeElement.prototype.shapeBoundingBox = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, HShapeElement.prototype.tempBoundingBox = {
				x: 0,
				xMax: 0,
				y: 0,
				yMax: 0,
				width: 0,
				height: 0
			}, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
				for (var i, a, s, o, l, c, u, f = [
						[e[0], n[0]],
						[e[1], n[1]]
					], m = 0; m < 2; ++m) a = 6 * e[m] - 12 * t[m] + 6 * r[m], i = -3 * e[m] + 9 * t[m] - 9 * r[m] + 3 * n[m], s = 3 * t[m] - 3 * e[m], a |= 0, s |= 0, (i |= 0) === 0 && a === 0 || (i === 0 ? (o = -s / a) > 0 && o < 1 && f[m].push(this.calculateF(o, e, t, r, n, m)) : (l = a * a - 4 * s * i) >= 0 && ((c = (-a + bmSqrt(l)) / (2 * i)) > 0 && c < 1 && f[m].push(this.calculateF(c, e, t, r, n, m)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && f[m].push(this.calculateF(u, e, t, r, n, m))));
				this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
			}, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
				return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
			}, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
				var r, n = e.length;
				for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
			}, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
				var r = 0;
				if (e.keyframes) {
					for (var n = 0; n < e.keyframes.length; n += 1) {
						var i = e.keyframes[n].s;
						i > r && (r = i)
					}
					r *= e.mult
				} else r = e.v * e.mult;
				t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
			}, HShapeElement.prototype.currentBoxContains = function(e) {
				return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
			}, HShapeElement.prototype.renderInnerContent = function() {
				if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
					var e = this.tempBoundingBox,
						t = 999999;
					if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
					var r = !1;
					if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
						this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
						var n = this.shapeCont.style,
							i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
						n.transform = i, n.webkitTransform = i
					}
				}
			}, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
				if (this.isMasked = this.checkMasks(), this.isMasked) {
					this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
					var e = createNS("g");
					this.maskedElement.appendChild(e), this.innerElem = e
				} else this.renderType = "html", this.innerElem = this.layerElement;
				this.checkParenting()
			}, HTextElement.prototype.buildNewText = function() {
				var e = this.textProperty.currentData;
				this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
				var t = this.innerElem.style,
					r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
				t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
				var n, i, a = this.globalData.fontManager.getFontByName(e.f);
				if (!this.globalData.fontManager.chars)
					if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
					else {
						t.fontFamily = a.fFamily;
						var s = e.fWeight,
							o = e.fStyle;
						t.fontStyle = o, t.fontWeight = s
					} var l, c, u, f = e.l;
				i = f.length;
				var m, d = this.mHelper,
					p = "",
					g = 0;
				for (n = 0; n < i; n += 1) {
					if (this.globalData.fontManager.chars ? (this.textPaths[g] ? l = this.textPaths[g] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[g] ? u = (c = this.textSpans[g]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(c)))) : this.isMasked ? l = this.textPaths[g] ? this.textPaths[g] : createNS("text") : this.textSpans[g] ? (c = this.textSpans[g], l = this.textPaths[g]) : (styleDiv(c = createTag("span")), styleDiv(l = createTag("span")), c.appendChild(l)), this.globalData.fontManager.chars) {
						var h, v = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
						if (h = v ? v.data : null, d.reset(), h && h.shapes && h.shapes.length && (m = h.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), p = this.createPathShape(d, m), l.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(l);
						else {
							if (this.innerElem.appendChild(c), h && h.shapes) {
								document.body.appendChild(u);
								var y = u.getBBox();
								u.setAttribute("width", y.width + 2), u.setAttribute("height", y.height + 2), u.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
								var b = u.style,
									S = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
								b.transform = S, b.webkitTransform = S, f[n].yOffset = y.y - 1
							} else u.setAttribute("width", 1), u.setAttribute("height", 1);
							c.appendChild(u)
						}
					} else if (l.textContent = f[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
					else {
						this.innerElem.appendChild(c);
						var _ = l.style,
							T = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
						_.transform = T, _.webkitTransform = T
					}
					this.isMasked ? this.textSpans[g] = l : this.textSpans[g] = c, this.textSpans[g].style.display = "block", this.textPaths[g] = l, g += 1
				}
				for (; g < this.textSpans.length;) this.textSpans[g].style.display = "none", g += 1
			}, HTextElement.prototype.renderInnerContent = function() {
				var e;
				if (this.validateText(), this.data.singleShape) {
					if (!this._isFirstFrame && !this.lettersChangedFlag) return;
					if (this.isMasked && this.finalTransform._matMdf) {
						this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
						var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
						e.transform = t, e.webkitTransform = t
					}
				}
				if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
					var r, n, i, a, s, o = 0,
						l = this.textAnimator.renderedLetters,
						c = this.textProperty.currentData.l;
					for (n = c.length, r = 0; r < n; r += 1) c[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
					if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
						var u = this.innerElem.getBBox();
						if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
							this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
							var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
							e.transform = f, e.webkitTransform = f
						}
					}
				}
			}, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
				var e, t, r, n, i = this.comp.threeDElements.length;
				for (e = 0; e < i; e += 1)
					if ((t = this.comp.threeDElements[e]).type === "3d") {
						r = t.perspectiveElem.style, n = t.container.style;
						var a = this.pe.v + "px",
							s = "0px 0px 0px",
							o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
						r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
					}
			}, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
				var e, t, r = this._isFirstFrame;
				if (this.hierarchy)
					for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
				if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
					if (this.mat.reset(), this.hierarchy)
						for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
							var n = this.hierarchy[e].finalTransform.mProp;
							this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
						}
					if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
						var i;
						i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
						var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
							s = [i[0] / a, i[1] / a, i[2] / a],
							o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
							l = Math.atan2(s[1], o),
							c = Math.atan2(s[0], -s[2]);
						this.mat.rotateY(c).rotateX(-l)
					}
					this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
					var u = !this._prevMat.equals(this.mat);
					if ((u || this.pe._mdf) && this.comp.threeDElements) {
						var f, m, d;
						for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
							if ((f = this.comp.threeDElements[e]).type === "3d") {
								if (u) {
									var p = this.mat.toCSS();
									(d = f.container.style).transform = p, d.webkitTransform = p
								}
								this.pe._mdf && ((m = f.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px")
							} this.mat.clone(this._prevMat)
					}
				}
				this._isFirstFrame = !1
			}, HCameraElement.prototype.prepareFrame = function(e) {
				this.prepareProperties(e, !0)
			}, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
				return null
			}, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
				var e = this.globalData.getAssetsPath(this.assetData),
					t = new Image;
				this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
			}, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
				for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
			}, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
				var r = e.getBaseElement();
				if (r) {
					var n = this.layers[t];
					if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
					else if (this.threeDElements) this.addTo3dContainer(r, t);
					else {
						for (var i, a, s = 0; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
						i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
					}
				}
			}, HybridRendererBase.prototype.createShape = function(e) {
				return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createText = function(e) {
				return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createCamera = function(e) {
				return this.camera = new HCameraElement(e, this.globalData, this), this.camera
			}, HybridRendererBase.prototype.createImage = function(e) {
				return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createSolid = function(e) {
				return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
			}, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
				for (var t = 0, r = this.threeDElements.length; t < r;) {
					if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
					t += 1
				}
				return null
			}, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
				var r, n, i = createTag("div");
				styleDiv(i);
				var a = createTag("div");
				if (styleDiv(a), t === "3d") {
					(r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
					var s = "50% 50%";
					r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
					var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
					(n = a.style).transform = o, n.webkitTransform = o
				}
				i.appendChild(a);
				var l = {
					container: a,
					perspectiveElem: i,
					startPos: e,
					endPos: e,
					type: t
				};
				return this.threeDElements.push(l), l
			}, HybridRendererBase.prototype.build3dContainers = function() {
				var e, t, r = this.layers.length,
					n = "";
				for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (n !== "3d" && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (n !== "2d" && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
				for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
			}, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
				for (var r = 0, n = this.threeDElements.length; r < n;) {
					if (t <= this.threeDElements[r].endPos) {
						for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
						i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
						break
					}
					r += 1
				}
			}, HybridRendererBase.prototype.configAnimation = function(e) {
				var t = createTag("div"),
					r = this.animationItem.wrapper,
					n = t.style;
				n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
				var i = createNS("svg");
				i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
				var a = createNS("defs");
				i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
			}, HybridRendererBase.prototype.destroy = function() {
				var e;
				this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
				var t = this.layers ? this.layers.length : 0;
				for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
				this.elements.length = 0, this.destroyed = !0, this.animationItem = null
			}, HybridRendererBase.prototype.updateContainerSize = function() {
				var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
					a = this.animationItem.wrapper.offsetHeight,
					s = i / a;
				this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
				var o = this.resizerElem.style;
				o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
			}, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
				this.resizerElem.style.display = "none"
			}, HybridRendererBase.prototype.show = function() {
				this.resizerElem.style.display = "block"
			}, HybridRendererBase.prototype.initItems = function() {
				if (this.buildAllItems(), this.camera) this.camera.setup();
				else {
					var e, t = this.globalData.compSize.w,
						r = this.globalData.compSize.h,
						n = this.threeDElements.length;
					for (e = 0; e < n; e += 1) {
						var i = this.threeDElements[e].perspectiveElem.style;
						i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
					}
				}
			}, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
				var t, r = e.length,
					n = createTag("div");
				for (t = 0; t < r; t += 1)
					if (e[t].xt) {
						var i = this.createComp(e[t], n, this.globalData.comp, null);
						i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
					}
			}, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
				this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
			}, HCompElement.prototype.addTo3dContainer = function(e, t) {
				for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
				r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
			}, HCompElement.prototype.createComp = function(e) {
				return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
			}, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
				return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
			};
			var CompExpressionInterface = function(e) {
				function t(r) {
					for (var n = 0, i = e.layers.length; n < i;) {
						if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
						n += 1
					}
					return null
				}
				return Object.defineProperty(t, "_name", {
					value: e.data.nm
				}), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
			};

			function _typeof$2(e) {
				return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$2(e)
			}

			function seedRandom(e, t) {
				var r, n = this,
					i = 256,
					a = t.pow(i, 6),
					s = t.pow(2, 52),
					o = 2 * s,
					l = 255;

				function c(p) {
					var g, h = p.length,
						v = this,
						y = 0,
						b = v.i = v.j = 0,
						S = v.S = [];
					for (h || (p = [h++]); y < i;) S[y] = y++;
					for (y = 0; y < i; y++) S[y] = S[b = l & b + p[y % h] + (g = S[y])], S[b] = g;
					v.g = function(_) {
						for (var T, x = 0, P = v.i, D = v.j, w = v.S; _--;) T = w[P = l & P + 1], x = x * i + w[l & (w[P] = w[D = l & D + T]) + (w[D] = T)];
						return v.i = P, v.j = D, x
					}
				}

				function u(p, g) {
					return g.i = p.i, g.j = p.j, g.S = p.S.slice(), g
				}

				function f(p, g) {
					var h, v = [],
						y = _typeof$2(p);
					if (g && y == "object")
						for (h in p) try {
							v.push(f(p[h], g - 1))
						} catch {}
					return v.length ? v : y == "string" ? p : p + "\0"
				}

				function m(p, g) {
					for (var h, v = p + "", y = 0; y < v.length;) g[l & y] = l & (h ^= 19 * g[l & y]) + v.charCodeAt(y++);
					return d(g)
				}

				function d(p) {
					return String.fromCharCode.apply(0, p)
				}
				t.seedrandom = function(p, g, h) {
					var v = [],
						y = m(f((g = g === !0 ? {
							entropy: !0
						} : g || {}).entropy ? [p, d(e)] : p === null ? function() {
							try {
								var _ = new Uint8Array(i);
								return (n.crypto || n.msCrypto).getRandomValues(_), d(_)
							} catch {
								var T = n.navigator,
									x = T && T.plugins;
								return [+new Date, n, x, n.screen, d(e)]
							}
						}() : p, 3), v),
						b = new c(v),
						S = function() {
							for (var _ = b.g(6), T = a, x = 0; _ < s;) _ = (_ + x) * i, T *= i, x = b.g(1);
							for (; _ >= o;) _ /= 2, T /= 2, x >>>= 1;
							return (_ + x) / T
						};
					return S.int32 = function() {
						return 0 | b.g(4)
					}, S.quick = function() {
						return b.g(4) / 4294967296
					}, S.double = S, m(d(b.S), e), (g.pass || h || function(_, T, x, P) {
						return P && (P.S && u(P, b), _.state = function() {
							return u(b, {})
						}), x ? (t.random = _, T) : _
					})(S, y, "global" in g ? g.global : this == t, g.state)
				}, m(t.random(), e)
			}

			function initialize$2(e) {
				seedRandom([], e)
			}
			var propTypes = {
				SHAPE: "shape"
			};

			function _typeof$1(e) {
				return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof$1(e)
			}
			var ExpressionManager = function() {
					var ob = {},
						Math = BMMath,
						window = null,
						document = null,
						XMLHttpRequest = null,
						fetch = null,
						frames = null,
						_lottieGlobal = {};

					function resetFrame() {
						_lottieGlobal = {}
					}

					function $bm_isInstanceOfArray(e) {
						return e.constructor === Array || e.constructor === Float32Array
					}

					function isNumerable(e, t) {
						return e === "number" || t instanceof Number || e === "boolean" || e === "string"
					}

					function $bm_neg(e) {
						var t = _typeof$1(e);
						if (t === "number" || e instanceof Number || t === "boolean") return -e;
						if ($bm_isInstanceOfArray(e)) {
							var r, n = e.length,
								i = [];
							for (r = 0; r < n; r += 1) i[r] = -e[r];
							return i
						}
						return e.propType ? e.v : -e
					}
					initialize$2(BMMath);
					var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
						easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
						easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

					function sum(e, t) {
						var r = _typeof$1(e),
							n = _typeof$1(t);
						if (isNumerable(r, e) && isNumerable(n, t) || r === "string" || n === "string") return e + t;
						if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
						if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
						if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
							for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
							return o
						}
						return 0
					}
					var add = sum;

					function sub(e, t) {
						var r = _typeof$1(e),
							n = _typeof$1(t);
						if (isNumerable(r, e) && isNumerable(n, t)) return r === "string" && (e = parseInt(e, 10)), n === "string" && (t = parseInt(t, 10)), e - t;
						if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
						if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
						if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
							for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
							return o
						}
						return 0
					}

					function mul(e, t) {
						var r, n, i, a = _typeof$1(e),
							s = _typeof$1(t);
						if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
						if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
							for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
							return r
						}
						if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
							for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
							return r
						}
						return 0
					}

					function div(e, t) {
						var r, n, i, a = _typeof$1(e),
							s = _typeof$1(t);
						if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
						if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
							for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
							return r
						}
						if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
							for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
							return r
						}
						return 0
					}

					function mod(e, t) {
						return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
					}
					var $bm_sum = sum,
						$bm_sub = sub,
						$bm_mul = mul,
						$bm_div = div,
						$bm_mod = mod;

					function clamp(e, t, r) {
						if (t > r) {
							var n = r;
							r = t, t = n
						}
						return Math.min(Math.max(e, t), r)
					}

					function radiansToDegrees(e) {
						return e / degToRads
					}
					var radians_to_degrees = radiansToDegrees;

					function degreesToRadians(e) {
						return e * degToRads
					}
					var degrees_to_radians = radiansToDegrees,
						helperLengthArray = [0, 0, 0, 0, 0, 0];

					function length(e, t) {
						if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
						var r;
						t || (t = helperLengthArray);
						var n = Math.min(e.length, t.length),
							i = 0;
						for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
						return Math.sqrt(i)
					}

					function normalize(e) {
						return div(e, length(e))
					}

					function rgbToHsl(e) {
						var t, r, n = e[0],
							i = e[1],
							a = e[2],
							s = Math.max(n, i, a),
							o = Math.min(n, i, a),
							l = (s + o) / 2;
						if (s === o) t = 0, r = 0;
						else {
							var c = s - o;
							switch (r = l > .5 ? c / (2 - s - o) : c / (s + o), s) {
								case n:
									t = (i - a) / c + (i < a ? 6 : 0);
									break;
								case i:
									t = (a - n) / c + 2;
									break;
								case a:
									t = (n - i) / c + 4
							}
							t /= 6
						}
						return [t, r, l, e[3]]
					}

					function hue2rgb(e, t, r) {
						return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
					}

					function hslToRgb(e) {
						var t, r, n, i = e[0],
							a = e[1],
							s = e[2];
						if (a === 0) t = s, n = s, r = s;
						else {
							var o = s < .5 ? s * (1 + a) : s + a - s * a,
								l = 2 * s - o;
							t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
						}
						return [t, r, n, e[3]]
					}

					function linear(e, t, r, n, i) {
						if (n !== void 0 && i !== void 0 || (n = t, i = r, t = 0, r = 1), r < t) {
							var a = r;
							r = t, t = a
						}
						if (e <= t) return n;
						if (e >= r) return i;
						var s, o = r === t ? 0 : (e - t) / (r - t);
						if (!n.length) return n + (i - n) * o;
						var l = n.length,
							c = createTypedArray("float32", l);
						for (s = 0; s < l; s += 1) c[s] = n[s] + (i[s] - n[s]) * o;
						return c
					}

					function random(e, t) {
						if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
							var r, n = t.length;
							e || (e = createTypedArray("float32", n));
							var i = createTypedArray("float32", n),
								a = BMMath.random();
							for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
							return i
						}
						return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
					}

					function createPath(e, t, r, n) {
						var i, a = e.length,
							s = shapePool.newElement();
						s.setPathData(!!n, a);
						var o, l, c = [0, 0];
						for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : c, l = r && r[i] ? r[i] : c, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
						return s
					}

					function initiateExpression(elem, data, property) {
						function noOp(e) {
							return e
						}
						if (!elem.globalData.renderConfig.runExpressions) return noOp;
						var val = data.x,
							needsVelocity = /velocity(?![\w\d])/.test(val),
							_needsRandom = val.indexOf("random") !== -1,
							elemType = elem.data.ty,
							transform, $bm_transform, content, effect, thisProperty = property;
						thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
							get: function() {
								return thisProperty.v
							}
						}), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
						var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
							outPoint = elem.data.op / elem.comp.globalData.frameRate,
							width = elem.data.sw ? elem.data.sw : 0,
							height = elem.data.sh ? elem.data.sh : 0,
							name = elem.data.nm,
							loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
							numKeys = property.kf ? data.k.length : 0,
							active = !this.data || this.data.hd !== !0,
							wiggle = function(e, t) {
								var r, n, i = this.pv.length ? this.pv.length : 1,
									a = createTypedArray("float32", i),
									s = Math.floor(5 * time);
								for (r = 0, n = 0; r < s;) {
									for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
									r += 1
								}
								var o = 5 * time,
									l = o - Math.floor(o),
									c = createTypedArray("float32", i);
								if (i > 1) {
									for (n = 0; n < i; n += 1) c[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
									return c
								}
								return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
							}.bind(this);

						function loopInDuration(e, t) {
							return loopIn(e, t, !0)
						}

						function loopOutDuration(e, t) {
							return loopOut(e, t, !0)
						}
						thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
						var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
							time, velocity, value, text, textIndex, textTotal, selectorValue;

						function lookAt(e, t) {
							var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
								n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
							return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
						}

						function easeOut(e, t, r, n, i) {
							return applyEase(easeOutBez, e, t, r, n, i)
						}

						function easeIn(e, t, r, n, i) {
							return applyEase(easeInBez, e, t, r, n, i)
						}

						function ease(e, t, r, n, i) {
							return applyEase(easeInOutBez, e, t, r, n, i)
						}

						function applyEase(e, t, r, n, i, a) {
							i === void 0 ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
							var s = e(t);
							if ($bm_isInstanceOfArray(i)) {
								var o, l = i.length,
									c = createTypedArray("float32", l);
								for (o = 0; o < l; o += 1) c[o] = (a[o] - i[o]) * s + i[o];
								return c
							}
							return (a - i) * s + i
						}

						function nearestKey(e) {
							var t, r, n, i = data.k.length;
							if (data.k.length && typeof data.k[0] != "number")
								if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
								else {
									for (t = 0; t < i - 1; t += 1) {
										if (e === data.k[t].t) {
											r = t + 1, n = data.k[t].t;
											break
										}
										if (e > data.k[t].t && e < data.k[t + 1].t) {
											e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
											break
										}
									}
									r === -1 && (r = t + 1, n = data.k[t].t)
								}
							else r = 0, n = 0;
							var a = {};
							return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
						}

						function key(e) {
							var t, r, n;
							if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
							e -= 1, t = {
								time: data.k[e].t / elem.comp.globalData.frameRate,
								value: []
							};
							var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
							for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
							return t
						}

						function framesToTime(e, t) {
							return t || (t = elem.comp.globalData.frameRate), e / t
						}

						function timeToFrames(e, t) {
							return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
						}

						function seedRandom(e) {
							BMMath.seedrandom(randSeed + e)
						}

						function sourceRectAtTime() {
							return elem.sourceRectAtTime()
						}

						function substring(e, t) {
							return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
						}

						function substr(e, t) {
							return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
						}

						function posterizeTime(e) {
							time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
						}
						var index = elem.data.ind,
							hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
							parent, randSeed = Math.floor(1e6 * Math.random()),
							globalData = elem.globalData;

						function executeExpression(e) {
							return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
						}
						return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
					}
					return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
				}(),
				Expressions = function() {
					var e = {};
					return e.initExpressions = function(t) {
						var r = 0,
							n = [];
						t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
							r += 1
						}, t.renderer.globalData.popExpression = function() {
							(r -= 1) == 0 && function() {
								var i, a = n.length;
								for (i = 0; i < a; i += 1) n[i].release();
								n.length = 0
							}()
						}, t.renderer.globalData.registerExpressionProperty = function(i) {
							n.indexOf(i) === -1 && n.push(i)
						}
					}, e.resetFrame = ExpressionManager.resetFrame, e
				}(),
				MaskManagerInterface = function() {
					function e(t, r) {
						this._mask = t, this._data = r
					}
					return Object.defineProperty(e.prototype, "maskPath", {
							get: function() {
								return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
							}
						}), Object.defineProperty(e.prototype, "maskOpacity", {
							get: function() {
								return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
							}
						}),
						function(t) {
							var r, n = createSizedArray(t.viewData.length),
								i = t.viewData.length;
							for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
							return function(a) {
								for (r = 0; r < i;) {
									if (t.masksProperties[r].nm === a) return n[r];
									r += 1
								}
								return null
							}
						}
				}(),
				ExpressionPropertyInterface = function() {
					var e = {
							pv: 0,
							v: 0,
							mult: 1
						},
						t = {
							pv: [0, 0, 0],
							v: [0, 0, 0],
							mult: 1
						};

					function r(i, a, s) {
						Object.defineProperty(i, "velocity", {
							get: function() {
								return a.getVelocityAtTime(a.comp.currentFrame)
							}
						}), i.numKeys = a.keyframes ? a.keyframes.length : 0, i.key = function(o) {
							if (!i.numKeys) return 0;
							var l = "";
							l = "s" in a.keyframes[o - 1] ? a.keyframes[o - 1].s : "e" in a.keyframes[o - 2] ? a.keyframes[o - 2].e : a.keyframes[o - 2].s;
							var c = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
							return c.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate, c.value = s === "unidimensional" ? l[0] : l, c
						}, i.valueAtTime = a.getValueAtTime, i.speedAtTime = a.getSpeedAtTime, i.velocityAtTime = a.getVelocityAtTime, i.propertyGroup = a.propertyGroup
					}

					function n() {
						return e
					}
					return function(i) {
						return i ? i.propType === "unidimensional" ? function(a) {
							a && "pv" in a || (a = e);
							var s = 1 / a.mult,
								o = a.pv * s,
								l = new Number(o);
							return l.value = o, r(l, a, "unidimensional"),
								function() {
									return a.k && a.getValue(), o = a.v * s, l.value !== o && ((l = new Number(o)).value = o, r(l, a, "unidimensional")), l
								}
						}(i) : function(a) {
							a && "pv" in a || (a = t);
							var s = 1 / a.mult,
								o = a.data && a.data.l || a.pv.length,
								l = createTypedArray("float32", o),
								c = createTypedArray("float32", o);
							return l.value = c, r(l, a, "multidimensional"),
								function() {
									a.k && a.getValue();
									for (var u = 0; u < o; u += 1) c[u] = a.v[u] * s, l[u] = c[u];
									return l
								}
						}(i) : n
					}
				}(),
				TransformExpressionInterface = function(e) {
					function t(s) {
						switch (s) {
							case "scale":
							case "Scale":
							case "ADBE Scale":
							case 6:
								return t.scale;
							case "rotation":
							case "Rotation":
							case "ADBE Rotation":
							case "ADBE Rotate Z":
							case 10:
								return t.rotation;
							case "ADBE Rotate X":
								return t.xRotation;
							case "ADBE Rotate Y":
								return t.yRotation;
							case "position":
							case "Position":
							case "ADBE Position":
							case 2:
								return t.position;
							case "ADBE Position_0":
								return t.xPosition;
							case "ADBE Position_1":
								return t.yPosition;
							case "ADBE Position_2":
								return t.zPosition;
							case "anchorPoint":
							case "AnchorPoint":
							case "Anchor Point":
							case "ADBE AnchorPoint":
							case 1:
								return t.anchorPoint;
							case "opacity":
							case "Opacity":
							case 11:
								return t.opacity;
							default:
								return null
						}
					}
					var r, n, i, a;
					return Object.defineProperty(t, "rotation", {
						get: ExpressionPropertyInterface(e.r || e.rz)
					}), Object.defineProperty(t, "zRotation", {
						get: ExpressionPropertyInterface(e.rz || e.r)
					}), Object.defineProperty(t, "xRotation", {
						get: ExpressionPropertyInterface(e.rx)
					}), Object.defineProperty(t, "yRotation", {
						get: ExpressionPropertyInterface(e.ry)
					}), Object.defineProperty(t, "scale", {
						get: ExpressionPropertyInterface(e.s)
					}), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
						get: function() {
							return e.p ? a() : [r(), n(), i ? i() : 0]
						}
					}), Object.defineProperty(t, "xPosition", {
						get: ExpressionPropertyInterface(e.px)
					}), Object.defineProperty(t, "yPosition", {
						get: ExpressionPropertyInterface(e.py)
					}), Object.defineProperty(t, "zPosition", {
						get: ExpressionPropertyInterface(e.pz)
					}), Object.defineProperty(t, "anchorPoint", {
						get: ExpressionPropertyInterface(e.a)
					}), Object.defineProperty(t, "opacity", {
						get: ExpressionPropertyInterface(e.o)
					}), Object.defineProperty(t, "skew", {
						get: ExpressionPropertyInterface(e.sk)
					}), Object.defineProperty(t, "skewAxis", {
						get: ExpressionPropertyInterface(e.sa)
					}), Object.defineProperty(t, "orientation", {
						get: ExpressionPropertyInterface(e.or)
					}), t
				},
				LayerExpressionInterface = function() {
					function e(c) {
						var u = new Matrix;
						return c !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(c).clone(u) : this._elem.finalTransform.mProp.applyToMatrix(u), u
					}

					function t(c, u) {
						var f = this.getMatrix(u);
						return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.applyPoint(f, c)
					}

					function r(c, u) {
						var f = this.getMatrix(u);
						return this.applyPoint(f, c)
					}

					function n(c, u) {
						var f = this.getMatrix(u);
						return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.invertPoint(f, c)
					}

					function i(c, u) {
						var f = this.getMatrix(u);
						return this.invertPoint(f, c)
					}

					function a(c, u) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var f, m = this._elem.hierarchy.length;
							for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c)
						}
						return c.applyToPointArray(u[0], u[1], u[2] || 0)
					}

					function s(c, u) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var f, m = this._elem.hierarchy.length;
							for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c)
						}
						return c.inversePoint(u)
					}

					function o(c) {
						var u = new Matrix;
						if (u.reset(), this._elem.finalTransform.mProp.applyToMatrix(u), this._elem.hierarchy && this._elem.hierarchy.length) {
							var f, m = this._elem.hierarchy.length;
							for (f = 0; f < m; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(u);
							return u.inversePoint(c)
						}
						return u.inversePoint(c)
					}

					function l() {
						return [1, 1, 1, 1]
					}
					return function(c) {
						var u;

						function f(d) {
							switch (d) {
								case "ADBE Root Vectors Group":
								case "Contents":
								case 2:
									return f.shapeInterface;
								case 1:
								case 6:
								case "Transform":
								case "transform":
								case "ADBE Transform Group":
									return u;
								case 4:
								case "ADBE Effect Parade":
								case "effects":
								case "Effects":
									return f.effect;
								case "ADBE Text Properties":
									return f.textInterface;
								default:
									return null
							}
						}
						f.getMatrix = e, f.invertPoint = s, f.applyPoint = a, f.toWorld = r, f.toWorldVec = t, f.fromWorld = i, f.fromWorldVec = n, f.toComp = r, f.fromComp = o, f.sampleImage = l, f.sourceRectAtTime = c.sourceRectAtTime.bind(c), f._elem = c;
						var m = getDescriptor(u = TransformExpressionInterface(c.finalTransform.mProp), "anchorPoint");
						return Object.defineProperties(f, {
							hasParent: {
								get: function() {
									return c.hierarchy.length
								}
							},
							parent: {
								get: function() {
									return c.hierarchy[0].layerInterface
								}
							},
							rotation: getDescriptor(u, "rotation"),
							scale: getDescriptor(u, "scale"),
							position: getDescriptor(u, "position"),
							opacity: getDescriptor(u, "opacity"),
							anchorPoint: m,
							anchor_point: m,
							transform: {
								get: function() {
									return u
								}
							},
							active: {
								get: function() {
									return c.isInRange
								}
							}
						}), f.startTime = c.data.st, f.index = c.data.ind, f.source = c.data.refId, f.height = c.data.ty === 0 ? c.data.h : 100, f.width = c.data.ty === 0 ? c.data.w : 100, f.inPoint = c.data.ip / c.comp.globalData.frameRate, f.outPoint = c.data.op / c.comp.globalData.frameRate, f._name = c.data.nm, f.registerMaskInterface = function(d) {
							f.mask = new MaskManagerInterface(d, c)
						}, f.registerEffectsInterface = function(d) {
							f.effect = d
						}, f
					}
				}(),
				propertyGroupFactory = function(e, t) {
					return function(r) {
						return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
					}
				},
				PropertyInterface = function(e, t) {
					var r = {
						_name: e
					};
					return function(n) {
						return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1)
					}
				},
				EffectsExpressionInterface = function() {
					function e(r, n, i, a) {
						function s(f) {
							for (var m = r.ef, d = 0, p = m.length; d < p;) {
								if (f === m[d].nm || f === m[d].mn || f === m[d].ix) return m[d].ty === 5 ? c[d] : c[d]();
								d += 1
							}
							throw new Error
						}
						var o, l = propertyGroupFactory(s, i),
							c = [],
							u = r.ef.length;
						for (o = 0; o < u; o += 1) r.ef[o].ty === 5 ? c.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : c.push(t(n.effectElements[o], r.ef[o].ty, a, l));
						return r.mn === "ADBE Color Control" && Object.defineProperty(s, "color", {
							get: function() {
								return c[0]()
							}
						}), Object.defineProperties(s, {
							numProperties: {
								get: function() {
									return r.np
								}
							},
							_name: {
								value: r.nm
							},
							propertyGroup: {
								value: l
							}
						}), s.enabled = r.en !== 0, s.active = s.enabled, s
					}

					function t(r, n, i, a) {
						var s = ExpressionPropertyInterface(r.p);
						return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
							function() {
								return n === 10 ? i.comp.compInterface(r.p.v) : s()
							}
					}
					return {
						createEffectsInterface: function(r, n) {
							if (r.effectsManager) {
								var i, a = [],
									s = r.data.ef,
									o = r.effectsManager.effectElements.length;
								for (i = 0; i < o; i += 1) a.push(e(s[i], r.effectsManager.effectElements[i], n, r));
								var l = r.data.ef || [],
									c = function(u) {
										for (i = 0, o = l.length; i < o;) {
											if (u === l[i].nm || u === l[i].mn || u === l[i].ix) return a[i];
											i += 1
										}
										return null
									};
								return Object.defineProperty(c, "numProperties", {
									get: function() {
										return l.length
									}
								}), c
							}
							return null
						}
					}
				}(),
				ShapePathInterface = function(e, t, r) {
					var n = t.sh;

					function i(s) {
						return s === "Shape" || s === "shape" || s === "Path" || s === "path" || s === "ADBE Vector Shape" || s === 2 ? i.path : null
					}
					var a = propertyGroupFactory(i, r);
					return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
						path: {
							get: function() {
								return n.k && n.getValue(), n
							}
						},
						shape: {
							get: function() {
								return n.k && n.getValue(), n
							}
						},
						_name: {
							value: e.nm
						},
						ix: {
							value: e.ix
						},
						propertyIndex: {
							value: e.ix
						},
						mn: {
							value: e.mn
						},
						propertyGroup: {
							value: r
						}
					}), i
				},
				ShapeExpressionInterface = function() {
					function e(d, p, g) {
						var h, v = [],
							y = d ? d.length : 0;
						for (h = 0; h < y; h += 1) d[h].ty === "gr" ? v.push(t(d[h], p[h], g)) : d[h].ty === "fl" ? v.push(r(d[h], p[h], g)) : d[h].ty === "st" ? v.push(a(d[h], p[h], g)) : d[h].ty === "tm" ? v.push(s(d[h], p[h], g)) : d[h].ty === "tr" || (d[h].ty === "el" ? v.push(l(d[h], p[h], g)) : d[h].ty === "sr" ? v.push(c(d[h], p[h], g)) : d[h].ty === "sh" ? v.push(ShapePathInterface(d[h], p[h], g)) : d[h].ty === "rc" ? v.push(u(d[h], p[h], g)) : d[h].ty === "rd" ? v.push(f(d[h], p[h], g)) : d[h].ty === "rp" ? v.push(m(d[h], p[h], g)) : d[h].ty === "gf" ? v.push(n(d[h], p[h], g)) : v.push(i(d[h], p[h])));
						return v
					}

					function t(d, p, g) {
						var h = function(b) {
							switch (b) {
								case "ADBE Vectors Group":
								case "Contents":
								case 2:
									return h.content;
								default:
									return h.transform
							}
						};
						h.propertyGroup = propertyGroupFactory(h, g);
						var v = function(b, S, _) {
								var T, x = function(D) {
									for (var w = 0, C = T.length; w < C;) {
										if (T[w]._name === D || T[w].mn === D || T[w].propertyIndex === D || T[w].ix === D || T[w].ind === D) return T[w];
										w += 1
									}
									return typeof D == "number" ? T[D - 1] : null
								};
								x.propertyGroup = propertyGroupFactory(x, _), T = e(b.it, S.it, x.propertyGroup), x.numProperties = T.length;
								var P = o(b.it[b.it.length - 1], S.it[S.it.length - 1], x.propertyGroup);
								return x.transform = P, x.propertyIndex = b.cix, x._name = b.nm, x
							}(d, p, h.propertyGroup),
							y = o(d.it[d.it.length - 1], p.it[p.it.length - 1], h.propertyGroup);
						return h.content = v, h.transform = y, Object.defineProperty(h, "_name", {
							get: function() {
								return d.nm
							}
						}), h.numProperties = d.np, h.propertyIndex = d.ix, h.nm = d.nm, h.mn = d.mn, h
					}

					function r(d, p, g) {
						function h(v) {
							return v === "Color" || v === "color" ? h.color : v === "Opacity" || v === "opacity" ? h.opacity : null
						}
						return Object.defineProperties(h, {
							color: {
								get: ExpressionPropertyInterface(p.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.c.setGroupProperty(PropertyInterface("Color", g)), p.o.setGroupProperty(PropertyInterface("Opacity", g)), h
					}

					function n(d, p, g) {
						function h(v) {
							return v === "Start Point" || v === "start point" ? h.startPoint : v === "End Point" || v === "end point" ? h.endPoint : v === "Opacity" || v === "opacity" ? h.opacity : null
						}
						return Object.defineProperties(h, {
							startPoint: {
								get: ExpressionPropertyInterface(p.s)
							},
							endPoint: {
								get: ExpressionPropertyInterface(p.e)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							type: {
								get: function() {
									return "a"
								}
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.s.setGroupProperty(PropertyInterface("Start Point", g)), p.e.setGroupProperty(PropertyInterface("End Point", g)), p.o.setGroupProperty(PropertyInterface("Opacity", g)), h
					}

					function i() {
						return function() {
							return null
						}
					}

					function a(d, p, g) {
						var h, v = propertyGroupFactory(T, g),
							y = propertyGroupFactory(_, v);

						function b(x) {
							Object.defineProperty(_, d.d[x].nm, {
								get: ExpressionPropertyInterface(p.d.dataProps[x].p)
							})
						}
						var S = d.d ? d.d.length : 0,
							_ = {};
						for (h = 0; h < S; h += 1) b(h), p.d.dataProps[h].p.setGroupProperty(y);

						function T(x) {
							return x === "Color" || x === "color" ? T.color : x === "Opacity" || x === "opacity" ? T.opacity : x === "Stroke Width" || x === "stroke width" ? T.strokeWidth : null
						}
						return Object.defineProperties(T, {
							color: {
								get: ExpressionPropertyInterface(p.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(p.o)
							},
							strokeWidth: {
								get: ExpressionPropertyInterface(p.w)
							},
							dash: {
								get: function() {
									return _
								}
							},
							_name: {
								value: d.nm
							},
							mn: {
								value: d.mn
							}
						}), p.c.setGroupProperty(PropertyInterface("Color", v)), p.o.setGroupProperty(PropertyInterface("Opacity", v)), p.w.setGroupProperty(PropertyInterface("Stroke Width", v)), T
					}

					function s(d, p, g) {
						function h(y) {
							return y === d.e.ix || y === "End" || y === "end" ? h.end : y === d.s.ix ? h.start : y === d.o.ix ? h.offset : null
						}
						var v = propertyGroupFactory(h, g);
						return h.propertyIndex = d.ix, p.s.setGroupProperty(PropertyInterface("Start", v)), p.e.setGroupProperty(PropertyInterface("End", v)), p.o.setGroupProperty(PropertyInterface("Offset", v)), h.propertyIndex = d.ix, h.propertyGroup = g, Object.defineProperties(h, {
							start: {
								get: ExpressionPropertyInterface(p.s)
							},
							end: {
								get: ExpressionPropertyInterface(p.e)
							},
							offset: {
								get: ExpressionPropertyInterface(p.o)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function o(d, p, g) {
						function h(y) {
							return d.a.ix === y || y === "Anchor Point" ? h.anchorPoint : d.o.ix === y || y === "Opacity" ? h.opacity : d.p.ix === y || y === "Position" ? h.position : d.r.ix === y || y === "Rotation" || y === "ADBE Vector Rotation" ? h.rotation : d.s.ix === y || y === "Scale" ? h.scale : d.sk && d.sk.ix === y || y === "Skew" ? h.skew : d.sa && d.sa.ix === y || y === "Skew Axis" ? h.skewAxis : null
						}
						var v = propertyGroupFactory(h, g);
						return p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", v)), p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", v)), p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", v)), p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", v)), p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", v)), p.transform.mProps.sk && (p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", v)), p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", v))), p.transform.op.setGroupProperty(PropertyInterface("Opacity", v)), Object.defineProperties(h, {
							opacity: {
								get: ExpressionPropertyInterface(p.transform.mProps.o)
							},
							position: {
								get: ExpressionPropertyInterface(p.transform.mProps.p)
							},
							anchorPoint: {
								get: ExpressionPropertyInterface(p.transform.mProps.a)
							},
							scale: {
								get: ExpressionPropertyInterface(p.transform.mProps.s)
							},
							rotation: {
								get: ExpressionPropertyInterface(p.transform.mProps.r)
							},
							skew: {
								get: ExpressionPropertyInterface(p.transform.mProps.sk)
							},
							skewAxis: {
								get: ExpressionPropertyInterface(p.transform.mProps.sa)
							},
							_name: {
								value: d.nm
							}
						}), h.ty = "tr", h.mn = d.mn, h.propertyGroup = g, h
					}

					function l(d, p, g) {
						function h(b) {
							return d.p.ix === b ? h.position : d.s.ix === b ? h.size : null
						}
						var v = propertyGroupFactory(h, g);
						h.propertyIndex = d.ix;
						var y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return y.s.setGroupProperty(PropertyInterface("Size", v)), y.p.setGroupProperty(PropertyInterface("Position", v)), Object.defineProperties(h, {
							size: {
								get: ExpressionPropertyInterface(y.s)
							},
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function c(d, p, g) {
						function h(b) {
							return d.p.ix === b ? h.position : d.r.ix === b ? h.rotation : d.pt.ix === b ? h.points : d.or.ix === b || b === "ADBE Vector Star Outer Radius" ? h.outerRadius : d.os.ix === b ? h.outerRoundness : !d.ir || d.ir.ix !== b && b !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === b ? h.innerRoundness : null : h.innerRadius
						}
						var v = propertyGroupFactory(h, g),
							y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return h.propertyIndex = d.ix, y.or.setGroupProperty(PropertyInterface("Outer Radius", v)), y.os.setGroupProperty(PropertyInterface("Outer Roundness", v)), y.pt.setGroupProperty(PropertyInterface("Points", v)), y.p.setGroupProperty(PropertyInterface("Position", v)), y.r.setGroupProperty(PropertyInterface("Rotation", v)), d.ir && (y.ir.setGroupProperty(PropertyInterface("Inner Radius", v)), y.is.setGroupProperty(PropertyInterface("Inner Roundness", v))), Object.defineProperties(h, {
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							rotation: {
								get: ExpressionPropertyInterface(y.r)
							},
							points: {
								get: ExpressionPropertyInterface(y.pt)
							},
							outerRadius: {
								get: ExpressionPropertyInterface(y.or)
							},
							outerRoundness: {
								get: ExpressionPropertyInterface(y.os)
							},
							innerRadius: {
								get: ExpressionPropertyInterface(y.ir)
							},
							innerRoundness: {
								get: ExpressionPropertyInterface(y.is)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function u(d, p, g) {
						function h(b) {
							return d.p.ix === b ? h.position : d.r.ix === b ? h.roundness : d.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size" ? h.size : null
						}
						var v = propertyGroupFactory(h, g),
							y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
						return h.propertyIndex = d.ix, y.p.setGroupProperty(PropertyInterface("Position", v)), y.s.setGroupProperty(PropertyInterface("Size", v)), y.r.setGroupProperty(PropertyInterface("Rotation", v)), Object.defineProperties(h, {
							position: {
								get: ExpressionPropertyInterface(y.p)
							},
							roundness: {
								get: ExpressionPropertyInterface(y.r)
							},
							size: {
								get: ExpressionPropertyInterface(y.s)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function f(d, p, g) {
						function h(b) {
							return d.r.ix === b || b === "Round Corners 1" ? h.radius : null
						}
						var v = propertyGroupFactory(h, g),
							y = p;
						return h.propertyIndex = d.ix, y.rd.setGroupProperty(PropertyInterface("Radius", v)), Object.defineProperties(h, {
							radius: {
								get: ExpressionPropertyInterface(y.rd)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}

					function m(d, p, g) {
						function h(b) {
							return d.c.ix === b || b === "Copies" ? h.copies : d.o.ix === b || b === "Offset" ? h.offset : null
						}
						var v = propertyGroupFactory(h, g),
							y = p;
						return h.propertyIndex = d.ix, y.c.setGroupProperty(PropertyInterface("Copies", v)), y.o.setGroupProperty(PropertyInterface("Offset", v)), Object.defineProperties(h, {
							copies: {
								get: ExpressionPropertyInterface(y.c)
							},
							offset: {
								get: ExpressionPropertyInterface(y.o)
							},
							_name: {
								value: d.nm
							}
						}), h.mn = d.mn, h
					}
					return function(d, p, g) {
						var h;

						function v(y) {
							if (typeof y == "number") return (y = y === void 0 ? 1 : y) === 0 ? g : h[y - 1];
							for (var b = 0, S = h.length; b < S;) {
								if (h[b]._name === y) return h[b];
								b += 1
							}
							return null
						}
						return v.propertyGroup = propertyGroupFactory(v, function() {
							return g
						}), h = e(d, p, v.propertyGroup), v.numProperties = h.length, v._name = "Contents", v
					}
				}(),
				TextExpressionInterface = function(e) {
					var t;

					function r(n) {
						return n === "ADBE Text Document" ? r.sourceText : null
					}
					return Object.defineProperty(r, "sourceText", {
						get: function() {
							e.textProperty.getValue();
							var n = e.textProperty.currentData.t;
							return t && n === t.value || ((t = new String(n)).value = n || new String(n), Object.defineProperty(t, "style", {
								get: function() {
									return {
										fillColor: e.textProperty.currentData.fc
									}
								}
							})), t
						}
					}), r
				};

			function _typeof(e) {
				return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
					return typeof t
				} : function(t) {
					return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				}, _typeof(e)
			}
			var FootageInterface = (dataInterfaceFactory = function(e) {
					function t(r) {
						return r === "Outline" ? t.outlineInterface() : null
					}
					return t._name = "Outline", t.outlineInterface = function(r) {
						var n = "",
							i = r.getFootageData();

						function a(s) {
							if (i[s]) return n = s, _typeof(i = i[s]) === "object" ? a : i;
							var o = s.indexOf(n);
							if (o !== -1) {
								var l = parseInt(s.substr(o + n.length), 10);
								return _typeof(i = i[l]) === "object" ? a : i
							}
							return ""
						}
						return function() {
							return n = "", i = r.getFootageData(), a
						}
					}(e), t
				}, function(e) {
					function t(r) {
						return r === "Data" ? t.dataInterface : null
					}
					return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
				}),
				dataInterfaceFactory, interfaces = {
					layer: LayerExpressionInterface,
					effects: EffectsExpressionInterface,
					comp: CompExpressionInterface,
					shape: ShapeExpressionInterface,
					text: TextExpressionInterface,
					footage: FootageInterface
				};

			function getInterface(e) {
				return interfaces[e] || null
			}
			var expressionHelpers = {
				searchExpressions: function(e, t, r) {
					t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
				},
				getSpeedAtTime: function(e) {
					var t = this.getValueAtTime(e),
						r = this.getValueAtTime(e + -.01),
						n = 0;
					if (t.length) {
						var i;
						for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
						n = 100 * Math.sqrt(n)
					} else n = 0;
					return n
				},
				getVelocityAtTime: function(e) {
					if (this.vel !== void 0) return this.vel;
					var t, r, n = -.001,
						i = this.getValueAtTime(e),
						a = this.getValueAtTime(e + n);
					if (i.length)
						for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
					else t = (a - i) / n;
					return t
				},
				getValueAtTime: function(e) {
					return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
				},
				getStaticValueAtTime: function() {
					return this.pv
				},
				setGroupProperty: function(e) {
					this.propertyGroup = e
				}
			};

			function addPropertyDecorator() {
				function e(f, m, d) {
					if (!this.k || !this.keyframes) return this.pv;
					f = f ? f.toLowerCase() : "";
					var p, g, h, v, y, b = this.comp.renderedFrame,
						S = this.keyframes,
						_ = S[S.length - 1].t;
					if (b <= _) return this.pv;
					if (d ? g = _ - (p = m ? Math.abs(_ - this.elem.comp.globalData.frameRate * m) : Math.max(0, _ - this.elem.data.ip)) : ((!m || m > S.length - 1) && (m = S.length - 1), p = _ - (g = S[S.length - 1 - m].t)), f === "pingpong") {
						if (Math.floor((b - g) / p) % 2 != 0) return this.getValueAtTime((p - (b - g) % p + g) / this.comp.globalData.frameRate, 0)
					} else {
						if (f === "offset") {
							var T = this.getValueAtTime(g / this.comp.globalData.frameRate, 0),
								x = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
								P = this.getValueAtTime(((b - g) % p + g) / this.comp.globalData.frameRate, 0),
								D = Math.floor((b - g) / p);
							if (this.pv.length) {
								for (v = (y = new Array(T.length)).length, h = 0; h < v; h += 1) y[h] = (x[h] - T[h]) * D + P[h];
								return y
							}
							return (x - T) * D + P
						}
						if (f === "continue") {
							var w = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
								C = this.getValueAtTime((_ - .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1) y[h] = w[h] + (w[h] - C[h]) * ((b - _) / this.comp.globalData.frameRate) / 5e-4;
								return y
							}
							return w + (b - _) / .001 * (w - C)
						}
					}
					return this.getValueAtTime(((b - g) % p + g) / this.comp.globalData.frameRate, 0)
				}

				function t(f, m, d) {
					if (!this.k) return this.pv;
					f = f ? f.toLowerCase() : "";
					var p, g, h, v, y, b = this.comp.renderedFrame,
						S = this.keyframes,
						_ = S[0].t;
					if (b >= _) return this.pv;
					if (d ? g = _ + (p = m ? Math.abs(this.elem.comp.globalData.frameRate * m) : Math.max(0, this.elem.data.op - _)) : ((!m || m > S.length - 1) && (m = S.length - 1), p = (g = S[m].t) - _), f === "pingpong") {
						if (Math.floor((_ - b) / p) % 2 == 0) return this.getValueAtTime(((_ - b) % p + _) / this.comp.globalData.frameRate, 0)
					} else {
						if (f === "offset") {
							var T = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
								x = this.getValueAtTime(g / this.comp.globalData.frameRate, 0),
								P = this.getValueAtTime((p - (_ - b) % p + _) / this.comp.globalData.frameRate, 0),
								D = Math.floor((_ - b) / p) + 1;
							if (this.pv.length) {
								for (v = (y = new Array(T.length)).length, h = 0; h < v; h += 1) y[h] = P[h] - (x[h] - T[h]) * D;
								return y
							}
							return P - (x - T) * D
						}
						if (f === "continue") {
							var w = this.getValueAtTime(_ / this.comp.globalData.frameRate, 0),
								C = this.getValueAtTime((_ + .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1) y[h] = w[h] + (w[h] - C[h]) * (_ - b) / .001;
								return y
							}
							return w + (w - C) * (_ - b) / .001
						}
					}
					return this.getValueAtTime((p - ((_ - b) % p + _)) / this.comp.globalData.frameRate, 0)
				}

				function r(f, m) {
					if (!this.k) return this.pv;
					if (f = .5 * (f || .4), (m = Math.floor(m || 5)) <= 1) return this.pv;
					var d, p, g = this.comp.renderedFrame / this.comp.globalData.frameRate,
						h = g - f,
						v = m > 1 ? (g + f - h) / (m - 1) : 1,
						y = 0,
						b = 0;
					for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; y < m;) {
						if (p = this.getValueAtTime(h + y * v), this.pv.length)
							for (b = 0; b < this.pv.length; b += 1) d[b] += p[b];
						else d += p;
						y += 1
					}
					if (this.pv.length)
						for (b = 0; b < this.pv.length; b += 1) d[b] /= m;
					else d /= m;
					return d
				}

				function n(f) {
					this._transformCachingAtTime || (this._transformCachingAtTime = {
						v: new Matrix
					});
					var m = this._transformCachingAtTime.v;
					if (m.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
						var d = this.a.getValueAtTime(f);
						m.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
					}
					if (this.appliedTransformations < 2) {
						var p = this.s.getValueAtTime(f);
						m.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult)
					}
					if (this.sk && this.appliedTransformations < 3) {
						var g = this.sk.getValueAtTime(f),
							h = this.sa.getValueAtTime(f);
						m.skewFromAxis(-g * this.sk.mult, h * this.sa.mult)
					}
					if (this.r && this.appliedTransformations < 4) {
						var v = this.r.getValueAtTime(f);
						m.rotate(-v * this.r.mult)
					} else if (!this.r && this.appliedTransformations < 4) {
						var y = this.rz.getValueAtTime(f),
							b = this.ry.getValueAtTime(f),
							S = this.rx.getValueAtTime(f),
							_ = this.or.getValueAtTime(f);
						m.rotateZ(-y * this.rz.mult).rotateY(b * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-_[2] * this.or.mult).rotateY(_[1] * this.or.mult).rotateX(_[0] * this.or.mult)
					}
					if (this.data.p && this.data.p.s) {
						var T = this.px.getValueAtTime(f),
							x = this.py.getValueAtTime(f);
						if (this.data.p.z) {
							var P = this.pz.getValueAtTime(f);
							m.translate(T * this.px.mult, x * this.py.mult, -P * this.pz.mult)
						} else m.translate(T * this.px.mult, x * this.py.mult, 0)
					} else {
						var D = this.p.getValueAtTime(f);
						m.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult)
					}
					return m
				}

				function i() {
					return this.v.clone(new Matrix)
				}
				var a = TransformPropertyFactory.getTransformProperty;
				TransformPropertyFactory.getTransformProperty = function(f, m, d) {
					var p = a(f, m, d);
					return p.dynamicProperties.length ? p.getValueAtTime = n.bind(p) : p.getValueAtTime = i.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p
				};
				var s = PropertyFactory.getProp;
				PropertyFactory.getProp = function(f, m, d, p, g) {
					var h = s(f, m, d, p, g);
					h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = m.a === 1 ? m.k.length : 0, h.propertyIndex = m.ix;
					var v = 0;
					return d !== 0 && (v = createTypedArray("float32", m.a === 1 ? m.k[0].s.length : m.k.length)), h._cachingAtTime = {
						lastFrame: initialDefaultFrame,
						lastIndex: 0,
						value: v
					}, expressionHelpers.searchExpressions(f, m, h), h.k && g.addDynamicProperty(h), h
				};
				var o = ShapePropertyFactory.getConstructorFunction(),
					l = ShapePropertyFactory.getKeyframedConstructorFunction();

				function c() {}
				c.prototype = {
					vertices: function(f, m) {
						this.k && this.getValue();
						var d, p = this.v;
						m !== void 0 && (p = this.getValueAtTime(m, 0));
						var g = p._length,
							h = p[f],
							v = p.v,
							y = createSizedArray(g);
						for (d = 0; d < g; d += 1) y[d] = f === "i" || f === "o" ? [h[d][0] - v[d][0], h[d][1] - v[d][1]] : [h[d][0], h[d][1]];
						return y
					},
					points: function(f) {
						return this.vertices("v", f)
					},
					inTangents: function(f) {
						return this.vertices("i", f)
					},
					outTangents: function(f) {
						return this.vertices("o", f)
					},
					isClosed: function() {
						return this.v.c
					},
					pointOnPath: function(f, m) {
						var d = this.v;
						m !== void 0 && (d = this.getValueAtTime(m, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
						for (var p, g = this._segmentsLength, h = g.lengths, v = g.totalLength * f, y = 0, b = h.length, S = 0; y < b;) {
							if (S + h[y].addedLength > v) {
								var _ = y,
									T = d.c && y === b - 1 ? 0 : y + 1,
									x = (v - S) / h[y].addedLength;
								p = bez.getPointInSegment(d.v[_], d.v[T], d.o[_], d.i[T], x, h[y]);
								break
							}
							S += h[y].addedLength, y += 1
						}
						return p || (p = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), p
					},
					vectorOnPath: function(f, m, d) {
						f == 1 ? f = this.v.c : f == 0 && (f = .999);
						var p = this.pointOnPath(f, m),
							g = this.pointOnPath(f + .001, m),
							h = g[0] - p[0],
							v = g[1] - p[1],
							y = Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2));
						return y === 0 ? [0, 0] : d === "tangent" ? [h / y, v / y] : [-v / y, h / y]
					},
					tangentOnPath: function(f, m) {
						return this.vectorOnPath(f, m, "tangent")
					},
					normalOnPath: function(f, m) {
						return this.vectorOnPath(f, m, "normal")
					},
					setGroupProperty: expressionHelpers.setGroupProperty,
					getValueAtTime: expressionHelpers.getStaticValueAtTime
				}, extendPrototype([c], o), extendPrototype([c], l), l.prototype.getValueAtTime = function(f) {
					return this._cachingAtTime || (this._cachingAtTime = {
						shapeValue: shapePool.clone(this.pv),
						lastIndex: 0,
						lastTime: initialDefaultFrame
					}), f *= this.elem.globalData.frameRate, (f -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
				}, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
				var u = ShapePropertyFactory.getShapeProp;
				ShapePropertyFactory.getShapeProp = function(f, m, d, p, g) {
					var h = u(f, m, d, p, g);
					return h.propertyIndex = m.ix, h.lock = !1, d === 3 ? expressionHelpers.searchExpressions(f, m.pt, h) : d === 4 && expressionHelpers.searchExpressions(f, m.ks, h), h.k && f.addDynamicProperty(h), h
				}
			}

			function initialize$1() {
				addPropertyDecorator()
			}

			function addDecorator() {
				TextProperty.prototype.getExpressionValue = function(e, t) {
					var r = this.calculateExpression(t);
					if (e.t !== r) {
						var n = {};
						return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
					}
					return e
				}, TextProperty.prototype.searchProperty = function() {
					var e = this.searchKeyframes(),
						t = this.searchExpressions();
					return this.kf = e || t, this.kf
				}, TextProperty.prototype.searchExpressions = function() {
					return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
				}
			}

			function initialize() {
				addDecorator()
			}

			function SVGComposableEffect() {}
			SVGComposableEffect.prototype = {
				createMergeNode: function(e, t) {
					var r, n, i = createNS("feMerge");
					for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
					return i
				}
			};
			var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

			function SVGTintFilter(e, t, r, n, i) {
				this.filterManager = t;
				var a = createNS("feColorMatrix");
				a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
				var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
				e.appendChild(s)
			}

			function SVGFillFilter(e, t, r, n) {
				this.filterManager = t;
				var i = createNS("feColorMatrix");
				i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
			}

			function SVGStrokeEffect(e, t, r) {
				this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
			}

			function SVGTritoneFilter(e, t, r, n) {
				this.filterManager = t;
				var i = createNS("feColorMatrix");
				i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
				var a = createNS("feComponentTransfer");
				a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
				var s = createNS("feFuncR");
				s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
				var o = createNS("feFuncG");
				o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
				var l = createNS("feFuncB");
				l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
			}

			function SVGProLevelsFilter(e, t, r, n) {
				this.filterManager = t;
				var i = this.filterManager.effectElements,
					a = createNS("feComponentTransfer");
				(i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
			}

			function SVGDropShadowEffect(e, t, r, n, i) {
				var a = t.container.globalData.renderConfig.filterSize,
					s = t.data.fs || a;
				e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
				var o = createNS("feGaussianBlur");
				o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
				var l = createNS("feOffset");
				l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
				var c = createNS("feFlood");
				c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = c, e.appendChild(c);
				var u = createNS("feComposite");
				u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
				var f = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
				e.appendChild(f)
			}
			extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = this.filterManager.effectElements[2].p.v / 100;
					this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
				}
			}, SVGFillFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[2].p.v,
						r = this.filterManager.effectElements[6].p.v;
					this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
				}
			}, SVGStrokeEffect.prototype.initialize = function() {
				var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
				for (this.filterManager.effectElements[1].p.v === 1 ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
					p: e,
					m: r
				});
				if (this.filterManager.effectElements[10].p.v === 3) {
					var a = createNS("mask"),
						s = createElementID();
					a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
					var o = createNS("g");
					for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
					this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
				} else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
					if (this.filterManager.effectElements[10].p.v === 2)
						for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
					this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
				}
				this.initialized = !0, this.pathMasker = t
			}, SVGStrokeEffect.prototype.renderFrame = function(e) {
				var t;
				this.initialized || this.initialize();
				var r, n, i = this.paths.length;
				for (t = 0; t < i; t += 1)
					if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
						var a;
						if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
							var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
								o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
								l = n.getTotalLength();
							a = "0 0 0 " + l * s + " ";
							var c, u = l * (o - s),
								f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
								m = Math.floor(u / f);
							for (c = 0; c < m; c += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
							a += "0 " + 10 * l + " 0 0"
						} else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
						n.setAttribute("stroke-dasharray", a)
					} if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
					var d = this.filterManager.effectElements[3].p.v;
					this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
				}
			}, SVGTritoneFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = this.filterManager.effectElements[2].p.v,
						i = n[0] + " " + r[0] + " " + t[0],
						a = n[1] + " " + r[1] + " " + t[1],
						s = n[2] + " " + r[2] + " " + t[2];
					this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
				}
			}, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
				var r = createNS(e);
				return r.setAttribute("type", "table"), t.appendChild(r), r
			}, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
				for (var a, s, o = 0, l = Math.min(e, t), c = Math.max(e, t), u = Array.call(null, {
						length: 256
					}), f = 0, m = i - n, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? i : n : a >= c ? d < 0 ? n : i : n + m * Math.pow((a - e) / d, 1 / r), u[f] = s, f += 1, o += 256 / 255;
				return u.join(" ")
			}, SVGProLevelsFilter.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t, r = this.filterManager.effectElements;
					this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
				}
			}, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
						var t = this.filterManager.effectElements[0].p.v;
						this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
					}
					if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
						var r = this.filterManager.effectElements[3].p.v,
							n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
							i = r * Math.cos(n),
							a = r * Math.sin(n);
						this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
					}
				}
			};
			var _svgMatteSymbols = [];

			function SVGMatte3Effect(e, t, r) {
				this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
			}

			function SVGGaussianBlurEffect(e, t, r, n) {
				e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
				var i = createNS("feGaussianBlur");
				i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
			}

			function TransformEffect() {}

			function SVGTransformEffect(e, t) {
				this.init(t)
			}

			function CVTransformEffect(e) {
				this.init(e)
			}
			return SVGMatte3Effect.prototype.findSymbol = function(e) {
				for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
					if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
					t += 1
				}
				return null
			}, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
				var r = e.layerElement.parentNode;
				if (r) {
					for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
					a <= s - 2 && (n = i[a + 1]);
					var o = createNS("use");
					o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
				}
			}, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
				if (!this.findSymbol(t)) {
					var r = createElementID(),
						n = createNS("mask");
					n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
					var i = e.globalData.defs;
					i.appendChild(n);
					var a = createNS("symbol");
					a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
					var s = createNS("use");
					s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
				}
				e.setMatte(t.layerId)
			}, SVGMatte3Effect.prototype.initialize = function() {
				for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
				this.initialized = !0
			}, SVGMatte3Effect.prototype.renderFrame = function() {
				this.initialized || this.initialize()
			}, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
				if (e || this.filterManager._mdf) {
					var t = .3 * this.filterManager.effectElements[0].p.v,
						r = this.filterManager.effectElements[1].p.v,
						n = r == 3 ? 0 : t,
						i = r == 2 ? 0 : t;
					this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
					var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
					this.feGaussianBlur.setAttribute("edgeMode", a)
				}
			}, TransformEffect.prototype.init = function(e) {
				this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
			}, TransformEffect.prototype.renderFrame = function(e) {
				if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
					var t = this.effectsManager.effectElements,
						r = t[0].p.v,
						n = t[1].p.v,
						i = t[2].p.v === 1,
						a = t[3].p.v,
						s = i ? a : t[4].p.v,
						o = t[5].p.v,
						l = t[6].p.v,
						c = t[7].p.v;
					this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
				}
			}, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
		})
	});
	var KS = E((hoe, $S) => {
		"use strict";
		var xW = rt(),
			ui = (WS(), ft(US)),
			TW = XS();
		xW.define("lottie", $S.exports = function() {
			return {
				lottie: TW,
				createInstance: ui.createInstance,
				cleanupElement: ui.cleanupElement,
				init: ui.init,
				destroy: ui.destroy,
				ready: ui.ready
			}
		})
	});
	var Au = E((coe, hi) => {
		function IW(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		hi.exports = IW, hi.exports.__esModule = !0, hi.exports.default = hi.exports
	});
	var Ja = E((foe, jt) => {
		function Pu(e) {
			return jt.exports = Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, jt.exports.__esModule = !0, jt.exports.default = jt.exports, Pu(e)
		}
		jt.exports = Pu, jt.exports.__esModule = !0, jt.exports.default = jt.exports
	});
	var QS = E((poe, ci) => {
		var YS = Ja().default;

		function AW(e, t) {
			if (YS(e) != "object" || !e) return e;
			var r = e[Symbol.toPrimitive];
			if (r !== void 0) {
				var n = r.call(e, t || "default");
				if (YS(n) != "object") return n;
				throw new TypeError("@@toPrimitive must return a primitive value.")
			}
			return (t === "string" ? String : Number)(e)
		}
		ci.exports = AW, ci.exports.__esModule = !0, ci.exports.default = ci.exports
	});
	var ZS = E((doe, fi) => {
		var PW = Ja().default,
			CW = QS();

		function wW(e) {
			var t = CW(e, "string");
			return PW(t) == "symbol" ? t : t + ""
		}
		fi.exports = wW, fi.exports.__esModule = !0, fi.exports.default = fi.exports
	});
	var JS = E((moe, pi) => {
		var MW = ZS();

		function FW(e, t, r) {
			return t = MW(t), t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e
		}
		pi.exports = FW, pi.exports.__esModule = !0, pi.exports.default = pi.exports
	});
	var a_ = E(Re => {
		"use strict";
		var OW = Au().default;
		Object.defineProperty(Re, "__esModule", {
			value: !0
		});
		Re.setLoadHandler = Re.ready = Re.init = Re.getInstance = Re.destroyInstance = Re.destroy = Re.createInstance = void 0;
		var e_ = OW(JS()),
			Cu;
		async function DW() {
			let {
				Application: e
			} = await import("https://unpkg.com/@splinetool/runtime/build/runtime.js");
			Cu = e
		}
		var mi = new Map,
			di = new Map,
			RW = new Event("w-spline-load"),
			wu = class {
				constructor() {
					(0, e_.default)(this, "spline", void 0), (0, e_.default)(this, "container", void 0)
				}
				destroy() {
					var t, r;
					this.container && (mi.delete(this.container), di.delete(this.container)), (t = this.spline) === null || t === void 0 || (r = t.dispose) === null || r === void 0 || r.call(t)
				}
				async load(t, r) {
					Cu || await DW();
					let n = t.querySelector("canvas"),
						i = new Cu(n);
					await i.load(r), mi.set(t, this), this.container = t, this.spline = i, t.dispatchEvent(RW), di.has(t) && (di.get(t)(i), di.delete(t))
				}
			},
			t_ = () => Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
			r_ = async (e, t) => {
				let r = mi.get(e);
				return r == null && (r = new wu), await r.load(e, t), r
			};
		Re.createInstance = r_;
		var n_ = e => {
			let t = mi.get(e);
			t?.destroy()
		};
		Re.destroyInstance = n_;
		var qW = e => mi.get(e);
		Re.getInstance = qW;
		var LW = (e, t) => {
			di.set(e, t)
		};
		Re.setLoadHandler = LW;
		var i_ = () => {
			t_().forEach(e => {
				let t = e.getAttribute("data-spline-url");
				t && r_(e, t)
			})
		};
		Re.init = i_;
		var kW = () => {
			t_().forEach(n_)
		};
		Re.destroy = kW;
		var goe = Re.ready = i_
	});
	var o_ = E((yoe, s_) => {
		"use strict";
		var NW = rt(),
			Ar = a_();
		NW.define("spline", s_.exports = function() {
			return {
				createInstance: Ar.createInstance,
				destroyInstance: Ar.destroyInstance,
				getInstance: Ar.getInstance,
				setLoadHandler: Ar.setLoadHandler,
				init: Ar.init,
				destroy: Ar.destroy,
				ready: Ar.ready
			}
		})
	});
	var h_ = E((Eoe, u_) => {
		"use strict";
		var l_ = rt();
		l_.define("brand", u_.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				a = ".w-webflow-badge",
				s = window.location,
				o = /PhantomJS/i.test(navigator.userAgent),
				l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				c;
			t.ready = function() {
				var d = n.attr("data-wf-status"),
					p = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(p) && s.hostname !== p && (d = !0), d && !o && (c = c || f(), m(), setTimeout(m, 500), e(r).off(l, u).on(l, u))
			};

			function u() {
				var d = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(c).attr("style", d ? "display: none !important;" : "")
			}

			function f() {
				var d = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
					p = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
						marginRight: "4px",
						width: "26px"
					}),
					g = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
				return d.append(p, g), d[0]
			}

			function m() {
				var d = i.children(a),
					p = d.length && d.get(0) === c,
					g = l_.env("editor");
				if (p) {
					g && d.remove();
					return
				}
				d.length && d.remove(), g || i.append(c)
			}
			return t
		})
	});
	var f_ = E((boe, c_) => {
		"use strict";
		var Mu = rt();
		Mu.define("edit", c_.exports = function(e, t, r) {
			if (r = r || {}, (Mu.env("test") || Mu.env("frame")) && !r.fixture && !BW()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				a = e(document.documentElement),
				s = document.location,
				o = "hashchange",
				l, c = r.load || m,
				u = !1;
			try {
				u = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			u ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : i.on(o, f).triggerHandler(o);

			function f() {
				l || /\?edit/.test(s.hash) && c()
			}

			function m() {
				l = !0, window.WebflowEditor = !0, i.off(o, f), y(function(S) {
					e.ajax({
						url: v("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: a.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: d(S)
					})
				})
			}

			function d(S) {
				return function(_) {
					if (!_) {
						console.error("Could not load editor data");
						return
					}
					_.thirdPartyCookiesSupported = S, p(h(_.scriptPath), function() {
						window.WebflowEditor(_)
					})
				}
			}

			function p(S, _) {
				e.ajax({
					type: "GET",
					url: S,
					dataType: "script",
					cache: !0
				}).then(_, g)
			}

			function g(S, _, T) {
				throw console.error("Could not load editor script: " + _), T
			}

			function h(S) {
				return S.indexOf("//") >= 0 ? S : v("https://editor-api.webflow.com" + S)
			}

			function v(S) {
				return S.replace(/([^:])\/\//g, "$1/")
			}

			function y(S) {
				var _ = window.document.createElement("iframe");
				_.src = "https://webflow.com/site/third-party-cookie-check.html", _.style.display = "none", _.sandbox = "allow-scripts allow-same-origin";
				var T = function(x) {
					x.data === "WF_third_party_cookies_unsupported" ? (b(_, T), S(!1)) : x.data === "WF_third_party_cookies_supported" && (b(_, T), S(!0))
				};
				_.onerror = function() {
					b(_, T), S(!1)
				}, window.addEventListener("message", T, !1), window.document.body.appendChild(_)
			}

			function b(S, _) {
				window.removeEventListener("message", _, !1), S.remove()
			}
			return n
		});

		function BW() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var d_ = E((Soe, p_) => {
		"use strict";
		var VW = rt();
		VW.define("focus-visible", p_.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					a = null,
					s = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function o(b) {
					return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
				}

				function l(b) {
					var S = b.type,
						_ = b.tagName;
					return !!(_ === "INPUT" && s[S] && !b.readOnly || _ === "TEXTAREA" && !b.readOnly || b.isContentEditable)
				}

				function c(b) {
					b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true")
				}

				function u(b) {
					b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible")
				}

				function f(b) {
					b.metaKey || b.altKey || b.ctrlKey || (o(r.activeElement) && c(r.activeElement), n = !0)
				}

				function m() {
					n = !1
				}

				function d(b) {
					o(b.target) && (n || l(b.target)) && c(b.target)
				}

				function p(b) {
					o(b.target) && b.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(a), a = window.setTimeout(function() {
						i = !1
					}, 100), u(b.target))
				}

				function g() {
					document.visibilityState === "hidden" && (i && (n = !0), h())
				}

				function h() {
					document.addEventListener("mousemove", y), document.addEventListener("mousedown", y), document.addEventListener("mouseup", y), document.addEventListener("pointermove", y), document.addEventListener("pointerdown", y), document.addEventListener("pointerup", y), document.addEventListener("touchmove", y), document.addEventListener("touchstart", y), document.addEventListener("touchend", y)
				}

				function v() {
					document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", y), document.removeEventListener("mouseup", y), document.removeEventListener("pointermove", y), document.removeEventListener("pointerdown", y), document.removeEventListener("pointerup", y), document.removeEventListener("touchmove", y), document.removeEventListener("touchstart", y), document.removeEventListener("touchend", y)
				}

				function y(b) {
					b.target.nodeName && b.target.nodeName.toLowerCase() === "html" || (n = !1, v())
				}
				document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("visibilitychange", g, !0), h(), r.addEventListener("focus", d, !0), r.addEventListener("blur", p, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var v_ = E((_oe, g_) => {
		"use strict";
		var m_ = rt();
		m_.define("focus", g_.exports = function() {
			var e = [],
				t = !1;

			function r(s) {
				t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
			}

			function n(s) {
				var o = s.target,
					l = o.tagName;
				return /^a$/i.test(l) && o.href != null || /^(button|textarea)$/i.test(l) && o.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(o.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && o.controls === !0
			}

			function i(s) {
				n(s) && (t = !0, setTimeout(() => {
					for (t = !1, s.target.focus(); e.length > 0;) {
						var o = e.pop();
						o.target.dispatchEvent(new MouseEvent(o.type, o))
					}
				}, 0))
			}

			function a() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && m_.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: a
			}
		})
	});
	var b_ = E((xoe, E_) => {
		"use strict";
		var Fu = window.jQuery,
			Ft = {},
			es = [],
			y_ = ".w-ix",
			ts = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Fu(t).triggerHandler(Ft.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Fu(t).triggerHandler(Ft.types.OUTRO))
				}
			};
		Ft.triggers = {};
		Ft.types = {
			INTRO: "w-ix-intro" + y_,
			OUTRO: "w-ix-outro" + y_
		};
		Ft.init = function() {
			for (var e = es.length, t = 0; t < e; t++) {
				var r = es[t];
				r[0](0, r[1])
			}
			es = [], Fu.extend(Ft.triggers, ts)
		};
		Ft.async = function() {
			for (var e in ts) {
				var t = ts[e];
				ts.hasOwnProperty(e) && (Ft.triggers[e] = function(r, n) {
					es.push([t, n])
				})
			}
		};
		Ft.async();
		E_.exports = Ft
	});
	var T_ = E((Toe, x_) => {
		"use strict";
		var Ou = b_();

		function S_(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var GW = window.jQuery,
			rs = {},
			__ = ".w-ix",
			zW = {
				reset: function(e, t) {
					Ou.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Ou.triggers.intro(e, t), S_(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Ou.triggers.outro(e, t), S_(t, "COMPONENT_INACTIVE")
				}
			};
		rs.triggers = {};
		rs.types = {
			INTRO: "w-ix-intro" + __,
			OUTRO: "w-ix-outro" + __
		};
		GW.extend(rs.triggers, zW);
		x_.exports = rs
	});
	var ns = E((Ioe, gi) => {
		var HW = Ja().default;

		function I_(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (I_ = function(i) {
				return i ? r : t
			})(e)
		}

		function jW(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || HW(e) != "object" && typeof e != "function") return {
				default: e
			};
			var r = I_(t);
			if (r && r.has(e)) return r.get(e);
			var n = {
					__proto__: null
				},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var a in e)
				if (a !== "default" && {}.hasOwnProperty.call(e, a)) {
					var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
					s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
				} return n.default = e, r && r.set(e, n), n
		}
		gi.exports = jW, gi.exports.__esModule = !0, gi.exports.default = gi.exports
	});
	var P_ = E((Aoe, A_) => {
		var UW = te(),
			WW = ge();
		A_.exports = function(e, t) {
			return WW(UW[e].prototype[t])
		}
	});
	var w_ = E((Poe, C_) => {
		gl();
		var XW = P_();
		C_.exports = XW("Array", "includes")
	});
	var F_ = E((Coe, M_) => {
		var $W = w_();
		M_.exports = $W
	});
	var D_ = E((woe, O_) => {
		var KW = F_();
		O_.exports = KW
	});
	var Du = E((Moe, R_) => {
		var YW = co(),
			QW = YW(Object.getPrototypeOf, Object);
		R_.exports = QW
	});
	var Ru = E((Foe, L_) => {
		var ZW = Qt(),
			JW = Du(),
			e4 = Lt(),
			t4 = "[object Object]",
			r4 = Function.prototype,
			n4 = Object.prototype,
			q_ = r4.toString,
			i4 = n4.hasOwnProperty,
			a4 = q_.call(Object);

		function s4(e) {
			if (!e4(e) || ZW(e) != t4) return !1;
			var t = JW(e);
			if (t === null) return !0;
			var r = i4.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && q_.call(r) == a4
		}
		L_.exports = s4
	});
	var k_ = E(qu => {
		"use strict";
		Object.defineProperty(qu, "__esModule", {
			value: !0
		});
		qu.default = o4;

		function o4(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var N_ = E((ku, Lu) => {
		"use strict";
		Object.defineProperty(ku, "__esModule", {
			value: !0
		});
		var l4 = k_(),
			u4 = h4(l4);

		function h4(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var nn;
		typeof self < "u" ? nn = self : typeof window < "u" ? nn = window : typeof global < "u" ? nn = global : typeof Lu < "u" ? nn = Lu : nn = Function("return this")();
		var c4 = (0, u4.default)(nn);
		ku.default = c4
	});
	var Nu = E(vi => {
		"use strict";
		vi.__esModule = !0;
		vi.ActionTypes = void 0;
		vi.default = z_;
		var f4 = Ru(),
			p4 = G_(f4),
			d4 = N_(),
			B_ = G_(d4);

		function G_(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var V_ = vi.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function z_(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(z_)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				a = t,
				s = [],
				o = s,
				l = !1;

			function c() {
				o === s && (o = s.slice())
			}

			function u() {
				return a
			}

			function f(g) {
				if (typeof g != "function") throw new Error("Expected listener to be a function.");
				var h = !0;
				return c(), o.push(g),
					function() {
						if (h) {
							h = !1, c();
							var y = o.indexOf(g);
							o.splice(y, 1)
						}
					}
			}

			function m(g) {
				if (!(0, p4.default)(g)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof g.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (l) throw new Error("Reducers may not dispatch actions.");
				try {
					l = !0, a = i(a, g)
				} finally {
					l = !1
				}
				for (var h = s = o, v = 0; v < h.length; v++) h[v]();
				return g
			}

			function d(g) {
				if (typeof g != "function") throw new Error("Expected the nextReducer to be a function.");
				i = g, m({
					type: V_.INIT
				})
			}

			function p() {
				var g, h = f;
				return g = {
					subscribe: function(y) {
						if (typeof y != "object") throw new TypeError("Expected the observer to be an object.");

						function b() {
							y.next && y.next(u())
						}
						b();
						var S = h(b);
						return {
							unsubscribe: S
						}
					}
				}, g[B_.default] = function() {
					return this
				}, g
			}
			return m({
				type: V_.INIT
			}), n = {
				dispatch: m,
				subscribe: f,
				getState: u,
				replaceReducer: d
			}, n[B_.default] = p, n
		}
	});
	var Vu = E(Bu => {
		"use strict";
		Bu.__esModule = !0;
		Bu.default = m4;

		function m4(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var U_ = E(Gu => {
		"use strict";
		Gu.__esModule = !0;
		Gu.default = b4;
		var H_ = Nu(),
			g4 = Ru(),
			qoe = j_(g4),
			v4 = Vu(),
			Loe = j_(v4);

		function j_(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function y4(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function E4(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: H_.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + H_.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function b4(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var a = Object.keys(r);
			if (!1) var s;
			var o;
			try {
				E4(r)
			} catch (l) {
				o = l
			}
			return function() {
				var c = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					u = arguments[1];
				if (o) throw o;
				if (!1) var f;
				for (var m = !1, d = {}, p = 0; p < a.length; p++) {
					var g = a[p],
						h = r[g],
						v = c[g],
						y = h(v, u);
					if (typeof y > "u") {
						var b = y4(g, u);
						throw new Error(b)
					}
					d[g] = y, m = m || y !== v
				}
				return m ? d : c
			}
		}
	});
	var X_ = E(zu => {
		"use strict";
		zu.__esModule = !0;
		zu.default = S4;

		function W_(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function S4(e, t) {
			if (typeof e == "function") return W_(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var a = r[i],
					s = e[a];
				typeof s == "function" && (n[a] = W_(s, t))
			}
			return n
		}
	});
	var ju = E(Hu => {
		"use strict";
		Hu.__esModule = !0;
		Hu.default = _4;

		function _4() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(a) {
				return a
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(a, s) {
					return s(a)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var $_ = E(Uu => {
		"use strict";
		Uu.__esModule = !0;
		var x4 = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Uu.default = P4;
		var T4 = ju(),
			I4 = A4(T4);

		function A4(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function P4() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, a, s) {
					var o = n(i, a, s),
						l = o.dispatch,
						c = [],
						u = {
							getState: o.getState,
							dispatch: function(m) {
								return l(m)
							}
						};
					return c = t.map(function(f) {
						return f(u)
					}), l = I4.default.apply(void 0, c)(o.dispatch), x4({}, o, {
						dispatch: l
					})
				}
			}
		}
	});
	var Wu = E(ut => {
		"use strict";
		ut.__esModule = !0;
		ut.compose = ut.applyMiddleware = ut.bindActionCreators = ut.combineReducers = ut.createStore = void 0;
		var C4 = Nu(),
			w4 = an(C4),
			M4 = U_(),
			F4 = an(M4),
			O4 = X_(),
			D4 = an(O4),
			R4 = $_(),
			q4 = an(R4),
			L4 = ju(),
			k4 = an(L4),
			N4 = Vu(),
			Goe = an(N4);

		function an(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		ut.createStore = w4.default;
		ut.combineReducers = F4.default;
		ut.bindActionCreators = D4.default;
		ut.applyMiddleware = q4.default;
		ut.compose = k4.default
	});
	var bt, Xu, Ot, B4, V4, is, G4, $u = pe(() => {
		"use strict";
		bt = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		}, Xu = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		}, Ot = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		}, B4 = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		}, V4 = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		}, is = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		}, G4 = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		}
	});
	var Qe, z4, as = pe(() => {
		"use strict";
		Qe = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			OBJECT_VALUE: "OBJECT_VALUE",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			PLUGIN_SPLINE: "PLUGIN_SPLINE",
			PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		}, z4 = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		}
	});
	var H4, K_ = pe(() => {
		"use strict";
		H4 = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		}
	});
	var j4, U4, W4, X4, $4, K4, Y4, Ku, Y_ = pe(() => {
		"use strict";
		as();
		({
			TRANSFORM_MOVE: j4,
			TRANSFORM_SCALE: U4,
			TRANSFORM_ROTATE: W4,
			TRANSFORM_SKEW: X4,
			STYLE_SIZE: $4,
			STYLE_FILTER: K4,
			STYLE_FONT_VARIATION: Y4
		} = Qe), Ku = {
			[j4]: !0,
			[U4]: !0,
			[W4]: !0,
			[X4]: !0,
			[$4]: !0,
			[K4]: !0,
			[Y4]: !0
		}
	});
	var Oe = {};
	ze(Oe, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => p6,
		IX2_ANIMATION_FRAME_CHANGED: () => o6,
		IX2_CLEAR_REQUESTED: () => i6,
		IX2_ELEMENT_STATE_CHANGED: () => f6,
		IX2_EVENT_LISTENER_ADDED: () => a6,
		IX2_EVENT_STATE_CHANGED: () => s6,
		IX2_INSTANCE_ADDED: () => u6,
		IX2_INSTANCE_REMOVED: () => c6,
		IX2_INSTANCE_STARTED: () => h6,
		IX2_MEDIA_QUERIES_DEFINED: () => m6,
		IX2_PARAMETER_CHANGED: () => l6,
		IX2_PLAYBACK_REQUESTED: () => r6,
		IX2_PREVIEW_REQUESTED: () => t6,
		IX2_RAW_DATA_IMPORTED: () => Q4,
		IX2_SESSION_INITIALIZED: () => Z4,
		IX2_SESSION_STARTED: () => J4,
		IX2_SESSION_STOPPED: () => e6,
		IX2_STOP_REQUESTED: () => n6,
		IX2_TEST_FRAME_RENDERED: () => g6,
		IX2_VIEWPORT_WIDTH_CHANGED: () => d6
	});
	var Q4, Z4, J4, e6, t6, r6, n6, i6, a6, s6, o6, l6, u6, h6, c6, f6, p6, d6, m6, g6, Q_ = pe(() => {
		"use strict";
		Q4 = "IX2_RAW_DATA_IMPORTED", Z4 = "IX2_SESSION_INITIALIZED", J4 = "IX2_SESSION_STARTED", e6 = "IX2_SESSION_STOPPED", t6 = "IX2_PREVIEW_REQUESTED", r6 = "IX2_PLAYBACK_REQUESTED", n6 = "IX2_STOP_REQUESTED", i6 = "IX2_CLEAR_REQUESTED", a6 = "IX2_EVENT_LISTENER_ADDED", s6 = "IX2_EVENT_STATE_CHANGED", o6 = "IX2_ANIMATION_FRAME_CHANGED", l6 = "IX2_PARAMETER_CHANGED", u6 = "IX2_INSTANCE_ADDED", h6 = "IX2_INSTANCE_STARTED", c6 = "IX2_INSTANCE_REMOVED", f6 = "IX2_ELEMENT_STATE_CHANGED", p6 = "IX2_ACTION_LIST_PLAYBACK_CHANGED", d6 = "IX2_VIEWPORT_WIDTH_CHANGED", m6 = "IX2_MEDIA_QUERIES_DEFINED", g6 = "IX2_TEST_FRAME_RENDERED"
	});
	var Be = {};
	ze(Be, {
		ABSTRACT_NODE: () => dX,
		AUTO: () => nX,
		BACKGROUND: () => Q6,
		BACKGROUND_COLOR: () => Y6,
		BAR_DELIMITER: () => sX,
		BORDER_COLOR: () => Z6,
		BOUNDARY_SELECTOR: () => S6,
		CHILDREN: () => oX,
		COLON_DELIMITER: () => aX,
		COLOR: () => J6,
		COMMA_DELIMITER: () => iX,
		CONFIG_UNIT: () => w6,
		CONFIG_VALUE: () => I6,
		CONFIG_X_UNIT: () => A6,
		CONFIG_X_VALUE: () => _6,
		CONFIG_Y_UNIT: () => P6,
		CONFIG_Y_VALUE: () => x6,
		CONFIG_Z_UNIT: () => C6,
		CONFIG_Z_VALUE: () => T6,
		DISPLAY: () => eX,
		FILTER: () => W6,
		FLEX: () => tX,
		FONT_VARIATION_SETTINGS: () => X6,
		HEIGHT: () => K6,
		HTML_ELEMENT: () => fX,
		IMMEDIATE_CHILDREN: () => lX,
		IX2_ID_DELIMITER: () => v6,
		OPACITY: () => U6,
		PARENT: () => hX,
		PLAIN_OBJECT: () => pX,
		PRESERVE_3D: () => cX,
		RENDER_GENERAL: () => gX,
		RENDER_PLUGIN: () => yX,
		RENDER_STYLE: () => vX,
		RENDER_TRANSFORM: () => mX,
		ROTATE_X: () => B6,
		ROTATE_Y: () => V6,
		ROTATE_Z: () => G6,
		SCALE_3D: () => N6,
		SCALE_X: () => q6,
		SCALE_Y: () => L6,
		SCALE_Z: () => k6,
		SIBLINGS: () => uX,
		SKEW: () => z6,
		SKEW_X: () => H6,
		SKEW_Y: () => j6,
		TRANSFORM: () => M6,
		TRANSLATE_3D: () => R6,
		TRANSLATE_X: () => F6,
		TRANSLATE_Y: () => O6,
		TRANSLATE_Z: () => D6,
		WF_PAGE: () => y6,
		WIDTH: () => $6,
		WILL_CHANGE: () => rX,
		W_MOD_IX: () => b6,
		W_MOD_JS: () => E6
	});
	var v6, y6, E6, b6, S6, _6, x6, T6, I6, A6, P6, C6, w6, M6, F6, O6, D6, R6, q6, L6, k6, N6, B6, V6, G6, z6, H6, j6, U6, W6, X6, $6, K6, Y6, Q6, Z6, J6, eX, tX, rX, nX, iX, aX, sX, oX, lX, uX, hX, cX, fX, pX, dX, mX, gX, vX, yX, Z_ = pe(() => {
		"use strict";
		v6 = "|", y6 = "data-wf-page", E6 = "w-mod-js", b6 = "w-mod-ix", S6 = ".w-dyn-item", _6 = "xValue", x6 = "yValue", T6 = "zValue", I6 = "value", A6 = "xUnit", P6 = "yUnit", C6 = "zUnit", w6 = "unit", M6 = "transform", F6 = "translateX", O6 = "translateY", D6 = "translateZ", R6 = "translate3d", q6 = "scaleX", L6 = "scaleY", k6 = "scaleZ", N6 = "scale3d", B6 = "rotateX", V6 = "rotateY", G6 = "rotateZ", z6 = "skew", H6 = "skewX", j6 = "skewY", U6 = "opacity", W6 = "filter", X6 = "font-variation-settings", $6 = "width", K6 = "height", Y6 = "backgroundColor", Q6 = "background", Z6 = "borderColor", J6 = "color", eX = "display", tX = "flex", rX = "willChange", nX = "AUTO", iX = ",", aX = ":", sX = "|", oX = "CHILDREN", lX = "IMMEDIATE_CHILDREN", uX = "SIBLINGS", hX = "PARENT", cX = "preserve-3d", fX = "HTML_ELEMENT", pX = "PLAIN_OBJECT", dX = "ABSTRACT_NODE", mX = "RENDER_TRANSFORM", gX = "RENDER_GENERAL", vX = "RENDER_STYLE", yX = "RENDER_PLUGIN"
	});
	var J_ = {};
	ze(J_, {
		ActionAppliesTo: () => z4,
		ActionTypeConsts: () => Qe,
		EventAppliesTo: () => Xu,
		EventBasedOn: () => Ot,
		EventContinuousMouseAxes: () => B4,
		EventLimitAffectedElements: () => V4,
		EventTypeConsts: () => bt,
		IX2EngineActionTypes: () => Oe,
		IX2EngineConstants: () => Be,
		InteractionTypeConsts: () => H4,
		QuickEffectDirectionConsts: () => G4,
		QuickEffectIds: () => is,
		ReducedMotionTypes: () => Ku
	});
	var Ze = pe(() => {
		"use strict";
		$u();
		as();
		K_();
		Y_();
		Q_();
		Z_();
		as();
		$u()
	});
	var EX, ex, tx = pe(() => {
		"use strict";
		Ze();
		({
			IX2_RAW_DATA_IMPORTED: EX
		} = Oe), ex = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case EX:
					return t.payload.ixData || Object.freeze({});
				default:
					return e
			}
		}
	});
	var sn = E(xe => {
		"use strict";
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		var bX = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		xe.clone = os;
		xe.addLast = ix;
		xe.addFirst = ax;
		xe.removeLast = sx;
		xe.removeFirst = ox;
		xe.insert = lx;
		xe.removeAt = ux;
		xe.replaceAt = hx;
		xe.getIn = ls;
		xe.set = us;
		xe.setIn = hs;
		xe.update = fx;
		xe.updateIn = px;
		xe.merge = dx;
		xe.mergeDeep = mx;
		xe.mergeIn = gx;
		xe.omit = vx;
		xe.addDefaults = yx;
		var rx = "INVALID_ARGS";

		function nx(e) {
			throw new Error(e)
		}

		function Yu(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var SX = {}.hasOwnProperty;

		function os(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = Yu(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function Je(e, t, r) {
			var n = r;
			n == null && nx(rx);
			for (var i = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o];
			for (var l = 0; l < s.length; l++) {
				var c = s[l];
				if (c != null) {
					var u = Yu(c);
					if (u.length)
						for (var f = 0; f <= u.length; f++) {
							var m = u[f];
							if (!(e && n[m] !== void 0)) {
								var d = c[m];
								t && ss(n[m]) && ss(d) && (d = Je(e, t, n[m], d)), !(d === void 0 || d === n[m]) && (i || (i = !0, n = os(n)), n[m] = d)
							}
						}
				}
			}
			return n
		}

		function ss(e) {
			var t = typeof e > "u" ? "undefined" : bX(e);
			return e != null && (t === "object" || t === "function")
		}

		function ix(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function ax(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function sx(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function ox(e) {
			return e.length ? e.slice(1) : e
		}

		function lx(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function ux(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function hx(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
			return i[t] = r, i
		}

		function ls(e, t) {
			if (!Array.isArray(t) && nx(rx), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?. [i], r === void 0) return r
				}
				return r
			}
		}

		function us(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ? ? n;
			if (i[t] === r) return i;
			var a = os(i);
			return a[t] = r, a
		}

		function cx(e, t, r, n) {
			var i = void 0,
				a = t[n];
			if (n === t.length - 1) i = r;
			else {
				var s = ss(e) && ss(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
				i = cx(s, t, r, n + 1)
			}
			return us(e, a, i)
		}

		function hs(e, t, r) {
			return t.length ? cx(e, t, r, 0) : r
		}

		function fx(e, t, r) {
			var n = e?. [t],
				i = r(n);
			return us(e, t, i)
		}

		function px(e, t, r) {
			var n = ls(e, t),
				i = r(n);
			return hs(e, t, i)
		}

		function dx(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? Je.call.apply(Je, [null, !1, !1, e, t, r, n, i, a].concat(o)) : Je(!1, !1, e, t, r, n, i, a)
		}

		function mx(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? Je.call.apply(Je, [null, !1, !0, e, t, r, n, i, a].concat(o)) : Je(!1, !0, e, t, r, n, i, a)
		}

		function gx(e, t, r, n, i, a, s) {
			var o = ls(e, t);
			o == null && (o = {});
			for (var l = void 0, c = arguments.length, u = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) u[f - 7] = arguments[f];
			return u.length ? l = Je.call.apply(Je, [null, !1, !1, o, r, n, i, a, s].concat(u)) : l = Je(!1, !1, o, r, n, i, a, s), hs(e, t, l)
		}

		function vx(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (SX.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var a = {}, s = Yu(e), o = 0; o < s.length; o++) {
				var l = s[o];
				r.indexOf(l) >= 0 || (a[l] = e[l])
			}
			return a
		}

		function yx(e, t, r, n, i, a) {
			for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
			return o.length ? Je.call.apply(Je, [null, !0, !1, e, t, r, n, i, a].concat(o)) : Je(!0, !1, e, t, r, n, i, a)
		}
		var _X = {
			clone: os,
			addLast: ix,
			addFirst: ax,
			removeLast: sx,
			removeFirst: ox,
			insert: lx,
			removeAt: ux,
			replaceAt: hx,
			getIn: ls,
			set: us,
			setIn: hs,
			update: fx,
			updateIn: px,
			merge: dx,
			mergeDeep: mx,
			mergeIn: gx,
			omit: vx,
			addDefaults: yx
		};
		xe.default = _X
	});
	var bx, xX, TX, IX, AX, PX, Ex, Sx, _x = pe(() => {
		"use strict";
		Ze();
		bx = oe(sn()), {
			IX2_PREVIEW_REQUESTED: xX,
			IX2_PLAYBACK_REQUESTED: TX,
			IX2_STOP_REQUESTED: IX,
			IX2_CLEAR_REQUESTED: AX
		} = Oe, PX = {
			preview: {},
			playback: {},
			stop: {},
			clear: {}
		}, Ex = Object.create(null, {
			[xX]: {
				value: "preview"
			},
			[TX]: {
				value: "playback"
			},
			[IX]: {
				value: "stop"
			},
			[AX]: {
				value: "clear"
			}
		}), Sx = (e = PX, t) => {
			if (t.type in Ex) {
				let r = [Ex[t.type]];
				return (0, bx.setIn)(e, [r], {
					...t.payload
				})
			}
			return e
		}
	});
	var We, CX, wX, MX, FX, OX, DX, RX, qX, LX, kX, xx, NX, Tx, Ix = pe(() => {
		"use strict";
		Ze();
		We = oe(sn()), {
			IX2_SESSION_INITIALIZED: CX,
			IX2_SESSION_STARTED: wX,
			IX2_TEST_FRAME_RENDERED: MX,
			IX2_SESSION_STOPPED: FX,
			IX2_EVENT_LISTENER_ADDED: OX,
			IX2_EVENT_STATE_CHANGED: DX,
			IX2_ANIMATION_FRAME_CHANGED: RX,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: qX,
			IX2_VIEWPORT_WIDTH_CHANGED: LX,
			IX2_MEDIA_QUERIES_DEFINED: kX
		} = Oe, xx = {
			active: !1,
			tick: 0,
			eventListeners: [],
			eventState: {},
			playbackState: {},
			viewportWidth: 0,
			mediaQueryKey: null,
			hasBoundaryNodes: !1,
			hasDefinedMediaQueries: !1,
			reducedMotion: !1
		}, NX = 20, Tx = (e = xx, t) => {
			switch (t.type) {
				case CX: {
					let {
						hasBoundaryNodes: r,
						reducedMotion: n
					} = t.payload;
					return (0, We.merge)(e, {
						hasBoundaryNodes: r,
						reducedMotion: n
					})
				}
				case wX:
					return (0, We.set)(e, "active", !0);
				case MX: {
					let {
						payload: {
							step: r = NX
						}
					} = t;
					return (0, We.set)(e, "tick", e.tick + r)
				}
				case FX:
					return xx;
				case RX: {
					let {
						payload: {
							now: r
						}
					} = t;
					return (0, We.set)(e, "tick", r)
				}
				case OX: {
					let r = (0, We.addLast)(e.eventListeners, t.payload);
					return (0, We.set)(e, "eventListeners", r)
				}
				case DX: {
					let {
						stateKey: r,
						newState: n
					} = t.payload;
					return (0, We.setIn)(e, ["eventState", r], n)
				}
				case qX: {
					let {
						actionListId: r,
						isPlaying: n
					} = t.payload;
					return (0, We.setIn)(e, ["playbackState", r], n)
				}
				case LX: {
					let {
						width: r,
						mediaQueries: n
					} = t.payload, i = n.length, a = null;
					for (let s = 0; s < i; s++) {
						let {
							key: o,
							min: l,
							max: c
						} = n[s];
						if (r >= l && r <= c) {
							a = o;
							break
						}
					}
					return (0, We.merge)(e, {
						viewportWidth: r,
						mediaQueryKey: a
					})
				}
				case kX:
					return (0, We.set)(e, "hasDefinedMediaQueries", !0);
				default:
					return e
			}
		}
	});
	var Qu = E((ole, Ax) => {
		var BX = Jt(),
			VX = dr(),
			GX = On();

		function zX(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!VX(t)) {
					var a = BX(r, 3);
					t = GX(t), r = function(o) {
						return a(i[o], o, i)
					}
				}
				var s = e(t, r, n);
				return s > -1 ? i[a ? t[s] : s] : void 0
			}
		}
		Ax.exports = zX
	});
	var Zu = E((lle, Px) => {
		var HX = Qu(),
			jX = Po(),
			UX = HX(jX);
		Px.exports = UX
	});
	var Mx = {};
	ze(Mx, {
		ELEMENT_MATCHES: () => WX,
		FLEX_PREFIXED: () => Ju,
		IS_BROWSER_ENV: () => St,
		TRANSFORM_PREFIXED: () => cr,
		TRANSFORM_STYLE_PREFIXED: () => fs,
		withBrowser: () => cs
	});
	var wx, St, cs, WX, Ju, cr, Cx, fs, ps = pe(() => {
		"use strict";
		wx = oe(Zu()), St = typeof window < "u", cs = (e, t) => St ? e() : t, WX = cs(() => (0, wx.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ju = cs(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let a = t[i];
					if (e.style.display = a, e.style.display === a) return a
				}
				return r
			} catch {
				return r
			}
		}, "flex"), cr = cs(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let a = t[i] + r;
					if (e.style[a] !== void 0) return a
				}
			}
			return "transform"
		}, "transform"), Cx = cr.split("transform")[0], fs = Cx ? Cx + "TransformStyle" : "transformStyle"
	});
	var eh = E((ule, qx) => {
		var XX = 4,
			$X = .001,
			KX = 1e-7,
			YX = 10,
			yi = 11,
			ds = 1 / (yi - 1),
			QX = typeof Float32Array == "function";

		function Fx(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function Ox(e, t) {
			return 3 * t - 6 * e
		}

		function Dx(e) {
			return 3 * e
		}

		function ms(e, t, r) {
			return ((Fx(t, r) * e + Ox(t, r)) * e + Dx(t)) * e
		}

		function Rx(e, t, r) {
			return 3 * Fx(t, r) * e * e + 2 * Ox(t, r) * e + Dx(t)
		}

		function ZX(e, t, r, n, i) {
			var a, s, o = 0;
			do s = t + (r - t) / 2, a = ms(s, n, i) - e, a > 0 ? r = s : t = s; while (Math.abs(a) > KX && ++o < YX);
			return s
		}

		function JX(e, t, r, n) {
			for (var i = 0; i < XX; ++i) {
				var a = Rx(t, r, n);
				if (a === 0) return t;
				var s = ms(t, r, n) - e;
				t -= s / a
			}
			return t
		}
		qx.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var a = QX ? new Float32Array(yi) : new Array(yi);
			if (t !== r || n !== i)
				for (var s = 0; s < yi; ++s) a[s] = ms(s * ds, t, n);

			function o(l) {
				for (var c = 0, u = 1, f = yi - 1; u !== f && a[u] <= l; ++u) c += ds;
				--u;
				var m = (l - a[u]) / (a[u + 1] - a[u]),
					d = c + m * ds,
					p = Rx(d, t, n);
				return p >= $X ? JX(l, d, t, n) : p === 0 ? d : ZX(l, c, c + ds, t, n)
			}
			return function(c) {
				return t === r && n === i ? c : c === 0 ? 0 : c === 1 ? 1 : ms(o(c), r, i)
			}
		}
	});
	var bi = {};
	ze(bi, {
		bounce: () => q8,
		bouncePast: () => L8,
		ease: () => e8,
		easeIn: () => t8,
		easeInOut: () => n8,
		easeOut: () => r8,
		inBack: () => A8,
		inCirc: () => _8,
		inCubic: () => o8,
		inElastic: () => w8,
		inExpo: () => E8,
		inOutBack: () => C8,
		inOutCirc: () => T8,
		inOutCubic: () => u8,
		inOutElastic: () => F8,
		inOutExpo: () => S8,
		inOutQuad: () => s8,
		inOutQuart: () => f8,
		inOutQuint: () => m8,
		inOutSine: () => y8,
		inQuad: () => i8,
		inQuart: () => h8,
		inQuint: () => p8,
		inSine: () => g8,
		outBack: () => P8,
		outBounce: () => I8,
		outCirc: () => x8,
		outCubic: () => l8,
		outElastic: () => M8,
		outExpo: () => b8,
		outQuad: () => a8,
		outQuart: () => c8,
		outQuint: () => d8,
		outSine: () => v8,
		swingFrom: () => D8,
		swingFromTo: () => O8,
		swingTo: () => R8
	});

	function i8(e) {
		return Math.pow(e, 2)
	}

	function a8(e) {
		return -(Math.pow(e - 1, 2) - 1)
	}

	function s8(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
	}

	function o8(e) {
		return Math.pow(e, 3)
	}

	function l8(e) {
		return Math.pow(e - 1, 3) + 1
	}

	function u8(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
	}

	function h8(e) {
		return Math.pow(e, 4)
	}

	function c8(e) {
		return -(Math.pow(e - 1, 4) - 1)
	}

	function f8(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
	}

	function p8(e) {
		return Math.pow(e, 5)
	}

	function d8(e) {
		return Math.pow(e - 1, 5) + 1
	}

	function m8(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
	}

	function g8(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1
	}

	function v8(e) {
		return Math.sin(e * (Math.PI / 2))
	}

	function y8(e) {
		return -.5 * (Math.cos(Math.PI * e) - 1)
	}

	function E8(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
	}

	function b8(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
	}

	function S8(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
	}

	function _8(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	}

	function x8(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2))
	}

	function T8(e) {
		return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	}

	function I8(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function A8(e) {
		let t = Ut;
		return e * e * ((t + 1) * e - t)
	}

	function P8(e) {
		let t = Ut;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function C8(e) {
		let t = Ut;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function w8(e) {
		let t = Ut,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
	}

	function M8(e) {
		let t = Ut,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
	}

	function F8(e) {
		let t = Ut,
			r = 0,
			n = 1;
		return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
	}

	function O8(e) {
		let t = Ut;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function D8(e) {
		let t = Ut;
		return e * e * ((t + 1) * e - t)
	}

	function R8(e) {
		let t = Ut;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function q8(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function L8(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
	}
	var Ei, Ut, e8, t8, r8, n8, th = pe(() => {
		"use strict";
		Ei = oe(eh()), Ut = 1.70158, e8 = (0, Ei.default)(.25, .1, .25, 1), t8 = (0, Ei.default)(.42, 0, 1, 1), r8 = (0, Ei.default)(0, 0, .58, 1), n8 = (0, Ei.default)(.42, 0, .58, 1)
	});
	var kx = {};
	ze(kx, {
		applyEasing: () => N8,
		createBezierEasing: () => k8,
		optimizeFloat: () => Si
	});

	function Si(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n);
		return Math.abs(i) > 1e-4 ? i : 0
	}

	function k8(e) {
		return (0, Lx.default)(...e)
	}

	function N8(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : Si(r ? t > 0 ? r(t) : t : t > 0 && e && bi[e] ? bi[e](t) : t)
	}
	var Lx, rh = pe(() => {
		"use strict";
		th();
		Lx = oe(eh())
	});
	var Vx = {};
	ze(Vx, {
		createElementState: () => Bx,
		ixElements: () => Z8,
		mergeActionState: () => nh
	});

	function Bx(e, t, r, n, i) {
		let a = r === B8 ? (0, on.getIn)(i, ["config", "target", "objectId"]) : null;
		return (0, on.mergeIn)(e, [n], {
			id: n,
			ref: t,
			refId: a,
			refType: r
		})
	}

	function nh(e, t, r, n, i) {
		let a = e$(i);
		return (0, on.mergeIn)(e, [t, Q8, r], n, a)
	}

	function e$(e) {
		let {
			config: t
		} = e;
		return J8.reduce((r, n) => {
			let i = n[0],
				a = n[1],
				s = t[i],
				o = t[a];
			return s != null && o != null && (r[a] = o), r
		}, {})
	}
	var on, cle, B8, fle, V8, G8, z8, H8, j8, U8, W8, X8, $8, K8, Y8, Nx, Q8, Z8, J8, Gx = pe(() => {
		"use strict";
		on = oe(sn());
		Ze();
		({
			HTML_ELEMENT: cle,
			PLAIN_OBJECT: B8,
			ABSTRACT_NODE: fle,
			CONFIG_X_VALUE: V8,
			CONFIG_Y_VALUE: G8,
			CONFIG_Z_VALUE: z8,
			CONFIG_VALUE: H8,
			CONFIG_X_UNIT: j8,
			CONFIG_Y_UNIT: U8,
			CONFIG_Z_UNIT: W8,
			CONFIG_UNIT: X8
		} = Be), {
			IX2_SESSION_STOPPED: $8,
			IX2_INSTANCE_ADDED: K8,
			IX2_ELEMENT_STATE_CHANGED: Y8
		} = Oe, Nx = {}, Q8 = "refState", Z8 = (e = Nx, t = {}) => {
			switch (t.type) {
				case $8:
					return Nx;
				case K8: {
					let {
						elementId: r,
						element: n,
						origin: i,
						actionItem: a,
						refType: s
					} = t.payload, {
						actionTypeId: o
					} = a, l = e;
					return (0, on.getIn)(l, [r, n]) !== n && (l = Bx(l, n, s, r, a)), nh(l, r, o, i, a)
				}
				case Y8: {
					let {
						elementId: r,
						actionTypeId: n,
						current: i,
						actionItem: a
					} = t.payload;
					return nh(e, r, n, i, a)
				}
				default:
					return e
			}
		};
		J8 = [
			[V8, j8],
			[G8, U8],
			[z8, W8],
			[H8, X8]
		]
	});
	var zx = E(qe => {
		"use strict";
		Object.defineProperty(qe, "__esModule", {
			value: !0
		});
		qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
		var t$ = e => e.value;
		qe.getPluginConfig = t$;
		var r$ = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		qe.getPluginDuration = r$;
		var n$ = e => e || {
			value: 0
		};
		qe.getPluginOrigin = n$;
		var i$ = e => ({
			value: e.value
		});
		qe.getPluginDestination = i$;
		var a$ = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		qe.createPluginInstance = a$;
		var s$ = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		qe.renderPlugin = s$;
		var o$ = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		qe.clearPlugin = o$
	});
	var jx = E(Le => {
		"use strict";
		Object.defineProperty(Le, "__esModule", {
			value: !0
		});
		Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
		var l$ = e => document.querySelector(`[data-w-id="${e}"]`),
			u$ = () => window.Webflow.require("spline"),
			h$ = (e, t) => e.filter(r => !t.includes(r)),
			c$ = (e, t) => e.value[t];
		Le.getPluginConfig = c$;
		var f$ = () => null;
		Le.getPluginDuration = f$;
		var Hx = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			p$ = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let a = Object.keys(e),
						s = h$(n, a);
					return s.length ? s.reduce((l, c) => (l[c] = Hx[c], l), e) : e
				}
				return n.reduce((a, s) => (a[s] = Hx[s], a), {})
			};
		Le.getPluginOrigin = p$;
		var d$ = e => e.value;
		Le.getPluginDestination = d$;
		var m$ = (e, t) => {
			var r;
			let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
			return n ? l$(n) : null
		};
		Le.createPluginInstance = m$;
		var g$ = (e, t, r) => {
			let n = u$(),
				i = n.getInstance(e),
				a = r.config.target.objectId,
				s = o => {
					if (!o) throw new Error("Invalid spline app passed to renderSpline");
					let l = a && o.findObjectById(a);
					if (!l) return;
					let {
						PLUGIN_SPLINE: c
					} = t;
					c.positionX != null && (l.position.x = c.positionX), c.positionY != null && (l.position.y = c.positionY), c.positionZ != null && (l.position.z = c.positionZ), c.rotationX != null && (l.rotation.x = c.rotationX), c.rotationY != null && (l.rotation.y = c.rotationY), c.rotationZ != null && (l.rotation.z = c.rotationZ), c.scaleX != null && (l.scale.x = c.scaleX), c.scaleY != null && (l.scale.y = c.scaleY), c.scaleZ != null && (l.scale.z = c.scaleZ)
				};
			i ? s(i.spline) : n.setLoadHandler(e, s)
		};
		Le.renderPlugin = g$;
		var v$ = () => null;
		Le.clearPlugin = v$
	});
	var ah = E(ih => {
		"use strict";
		Object.defineProperty(ih, "__esModule", {
			value: !0
		});
		ih.normalizeColor = y$;
		var Ux = {
			aliceblue: "#F0F8FF",
			antiquewhite: "#FAEBD7",
			aqua: "#00FFFF",
			aquamarine: "#7FFFD4",
			azure: "#F0FFFF",
			beige: "#F5F5DC",
			bisque: "#FFE4C4",
			black: "#000000",
			blanchedalmond: "#FFEBCD",
			blue: "#0000FF",
			blueviolet: "#8A2BE2",
			brown: "#A52A2A",
			burlywood: "#DEB887",
			cadetblue: "#5F9EA0",
			chartreuse: "#7FFF00",
			chocolate: "#D2691E",
			coral: "#FF7F50",
			cornflowerblue: "#6495ED",
			cornsilk: "#FFF8DC",
			crimson: "#DC143C",
			cyan: "#00FFFF",
			darkblue: "#00008B",
			darkcyan: "#008B8B",
			darkgoldenrod: "#B8860B",
			darkgray: "#A9A9A9",
			darkgreen: "#006400",
			darkgrey: "#A9A9A9",
			darkkhaki: "#BDB76B",
			darkmagenta: "#8B008B",
			darkolivegreen: "#556B2F",
			darkorange: "#FF8C00",
			darkorchid: "#9932CC",
			darkred: "#8B0000",
			darksalmon: "#E9967A",
			darkseagreen: "#8FBC8F",
			darkslateblue: "#483D8B",
			darkslategray: "#2F4F4F",
			darkslategrey: "#2F4F4F",
			darkturquoise: "#00CED1",
			darkviolet: "#9400D3",
			deeppink: "#FF1493",
			deepskyblue: "#00BFFF",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1E90FF",
			firebrick: "#B22222",
			floralwhite: "#FFFAF0",
			forestgreen: "#228B22",
			fuchsia: "#FF00FF",
			gainsboro: "#DCDCDC",
			ghostwhite: "#F8F8FF",
			gold: "#FFD700",
			goldenrod: "#DAA520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#ADFF2F",
			grey: "#808080",
			honeydew: "#F0FFF0",
			hotpink: "#FF69B4",
			indianred: "#CD5C5C",
			indigo: "#4B0082",
			ivory: "#FFFFF0",
			khaki: "#F0E68C",
			lavender: "#E6E6FA",
			lavenderblush: "#FFF0F5",
			lawngreen: "#7CFC00",
			lemonchiffon: "#FFFACD",
			lightblue: "#ADD8E6",
			lightcoral: "#F08080",
			lightcyan: "#E0FFFF",
			lightgoldenrodyellow: "#FAFAD2",
			lightgray: "#D3D3D3",
			lightgreen: "#90EE90",
			lightgrey: "#D3D3D3",
			lightpink: "#FFB6C1",
			lightsalmon: "#FFA07A",
			lightseagreen: "#20B2AA",
			lightskyblue: "#87CEFA",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#B0C4DE",
			lightyellow: "#FFFFE0",
			lime: "#00FF00",
			limegreen: "#32CD32",
			linen: "#FAF0E6",
			magenta: "#FF00FF",
			maroon: "#800000",
			mediumaquamarine: "#66CDAA",
			mediumblue: "#0000CD",
			mediumorchid: "#BA55D3",
			mediumpurple: "#9370DB",
			mediumseagreen: "#3CB371",
			mediumslateblue: "#7B68EE",
			mediumspringgreen: "#00FA9A",
			mediumturquoise: "#48D1CC",
			mediumvioletred: "#C71585",
			midnightblue: "#191970",
			mintcream: "#F5FFFA",
			mistyrose: "#FFE4E1",
			moccasin: "#FFE4B5",
			navajowhite: "#FFDEAD",
			navy: "#000080",
			oldlace: "#FDF5E6",
			olive: "#808000",
			olivedrab: "#6B8E23",
			orange: "#FFA500",
			orangered: "#FF4500",
			orchid: "#DA70D6",
			palegoldenrod: "#EEE8AA",
			palegreen: "#98FB98",
			paleturquoise: "#AFEEEE",
			palevioletred: "#DB7093",
			papayawhip: "#FFEFD5",
			peachpuff: "#FFDAB9",
			peru: "#CD853F",
			pink: "#FFC0CB",
			plum: "#DDA0DD",
			powderblue: "#B0E0E6",
			purple: "#800080",
			rebeccapurple: "#663399",
			red: "#FF0000",
			rosybrown: "#BC8F8F",
			royalblue: "#4169E1",
			saddlebrown: "#8B4513",
			salmon: "#FA8072",
			sandybrown: "#F4A460",
			seagreen: "#2E8B57",
			seashell: "#FFF5EE",
			sienna: "#A0522D",
			silver: "#C0C0C0",
			skyblue: "#87CEEB",
			slateblue: "#6A5ACD",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#FFFAFA",
			springgreen: "#00FF7F",
			steelblue: "#4682B4",
			tan: "#D2B48C",
			teal: "#008080",
			thistle: "#D8BFD8",
			tomato: "#FF6347",
			turquoise: "#40E0D0",
			violet: "#EE82EE",
			wheat: "#F5DEB3",
			white: "#FFFFFF",
			whitesmoke: "#F5F5F5",
			yellow: "#FFFF00",
			yellowgreen: "#9ACD32"
		};

		function y$(e) {
			let t, r, n, i = 1,
				a = e.replace(/\s/g, "").toLowerCase(),
				o = (typeof Ux[a] == "string" ? Ux[a].toLowerCase() : null) || a;
			if (o.startsWith("#")) {
				let l = o.substring(1);
				l.length === 3 ? (t = parseInt(l[0] + l[0], 16), r = parseInt(l[1] + l[1], 16), n = parseInt(l[2] + l[2], 16)) : l.length === 6 && (t = parseInt(l.substring(0, 2), 16), r = parseInt(l.substring(2, 4), 16), n = parseInt(l.substring(4, 6), 16))
			} else if (o.startsWith("rgba")) {
				let l = o.match(/rgba\(([^)]+)\)/)[1].split(",");
				t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10), i = parseFloat(l[3])
			} else if (o.startsWith("rgb")) {
				let l = o.match(/rgb\(([^)]+)\)/)[1].split(",");
				t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10)
			} else if (o.startsWith("hsla")) {
				let l = o.match(/hsla\(([^)]+)\)/)[1].split(","),
					c = parseFloat(l[0]),
					u = parseFloat(l[1].replace("%", "")) / 100,
					f = parseFloat(l[2].replace("%", "")) / 100;
				i = parseFloat(l[3]);
				let m = (1 - Math.abs(2 * f - 1)) * u,
					d = m * (1 - Math.abs(c / 60 % 2 - 1)),
					p = f - m / 2,
					g, h, v;
				c >= 0 && c < 60 ? (g = m, h = d, v = 0) : c >= 60 && c < 120 ? (g = d, h = m, v = 0) : c >= 120 && c < 180 ? (g = 0, h = m, v = d) : c >= 180 && c < 240 ? (g = 0, h = d, v = m) : c >= 240 && c < 300 ? (g = d, h = 0, v = m) : (g = m, h = 0, v = d), t = Math.round((g + p) * 255), r = Math.round((h + p) * 255), n = Math.round((v + p) * 255)
			} else if (o.startsWith("hsl")) {
				let l = o.match(/hsl\(([^)]+)\)/)[1].split(","),
					c = parseFloat(l[0]),
					u = parseFloat(l[1].replace("%", "")) / 100,
					f = parseFloat(l[2].replace("%", "")) / 100,
					m = (1 - Math.abs(2 * f - 1)) * u,
					d = m * (1 - Math.abs(c / 60 % 2 - 1)),
					p = f - m / 2,
					g, h, v;
				c >= 0 && c < 60 ? (g = m, h = d, v = 0) : c >= 60 && c < 120 ? (g = d, h = m, v = 0) : c >= 120 && c < 180 ? (g = 0, h = m, v = d) : c >= 180 && c < 240 ? (g = 0, h = d, v = m) : c >= 240 && c < 300 ? (g = d, h = 0, v = m) : (g = m, h = 0, v = d), t = Math.round((g + p) * 255), r = Math.round((h + p) * 255), n = Math.round((v + p) * 255)
			}
			if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
			return {
				red: t,
				green: r,
				blue: n,
				alpha: i
			}
		}
	});
	var Wx = E(ke => {
		"use strict";
		Object.defineProperty(ke, "__esModule", {
			value: !0
		});
		ke.renderPlugin = ke.getPluginOrigin = ke.getPluginDuration = ke.getPluginDestination = ke.getPluginConfig = ke.createPluginInstance = ke.clearPlugin = void 0;
		var E$ = ah(),
			b$ = (e, t) => e.value[t];
		ke.getPluginConfig = b$;
		var S$ = () => null;
		ke.getPluginDuration = S$;
		var _$ = (e, t) => {
			if (e) return e;
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n);
			if (r.size != null) return {
				size: parseInt(i, 10)
			};
			if (r.red != null && r.green != null && r.blue != null) return (0, E$.normalizeColor)(i)
		};
		ke.getPluginOrigin = _$;
		var x$ = e => e.value;
		ke.getPluginDestination = x$;
		var T$ = () => null;
		ke.createPluginInstance = T$;
		var I$ = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{
					PLUGIN_VARIABLE: a
				} = t,
				{
					size: s,
					red: o,
					green: l,
					blue: c,
					alpha: u
				} = a,
				f;
			s != null && (f = s + i), o != null && c != null && l != null && u != null && (f = `rgba(${o}, ${l}, ${c}, ${u})`), f != null && document.documentElement.style.setProperty(n, f)
		};
		ke.renderPlugin = I$;
		var A$ = (e, t) => {
			let r = t.config.target.objectId;
			document.documentElement.style.removeProperty(r)
		};
		ke.clearPlugin = A$
	});
	var Xx = E(gs => {
		"use strict";
		var oh = ns().default;
		Object.defineProperty(gs, "__esModule", {
			value: !0
		});
		gs.pluginMethodMap = void 0;
		var sh = (Ze(), ft(J_)),
			P$ = oh(zx()),
			C$ = oh(jx()),
			w$ = oh(Wx()),
			vle = gs.pluginMethodMap = new Map([
				[sh.ActionTypeConsts.PLUGIN_LOTTIE, {
					...P$
				}],
				[sh.ActionTypeConsts.PLUGIN_SPLINE, {
					...C$
				}],
				[sh.ActionTypeConsts.PLUGIN_VARIABLE, {
					...w$
				}]
			])
	});
	var $x = {};
	ze($x, {
		clearPlugin: () => ph,
		createPluginInstance: () => F$,
		getPluginConfig: () => uh,
		getPluginDestination: () => ch,
		getPluginDuration: () => M$,
		getPluginOrigin: () => hh,
		isPluginType: () => Pr,
		renderPlugin: () => fh
	});

	function Pr(e) {
		return lh.pluginMethodMap.has(e)
	}
	var lh, Cr, uh, hh, M$, ch, F$, fh, ph, dh = pe(() => {
		"use strict";
		ps();
		lh = oe(Xx());
		Cr = e => t => {
			if (!St) return () => null;
			let r = lh.pluginMethodMap.get(t);
			if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
			let n = r[e];
			if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
			return n
		}, uh = Cr("getPluginConfig"), hh = Cr("getPluginOrigin"), M$ = Cr("getPluginDuration"), ch = Cr("getPluginDestination"), F$ = Cr("createPluginInstance"), fh = Cr("renderPlugin"), ph = Cr("clearPlugin")
	});
	var Yx = E((ble, Kx) => {
		function O$(e, t) {
			return e == null || e !== e ? t : e
		}
		Kx.exports = O$
	});
	var Zx = E((Sle, Qx) => {
		function D$(e, t, r, n) {
			var i = -1,
				a = e == null ? 0 : e.length;
			for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
			return r
		}
		Qx.exports = D$
	});
	var eT = E((_le, Jx) => {
		function R$(e) {
			return function(t, r, n) {
				for (var i = -1, a = Object(t), s = n(t), o = s.length; o--;) {
					var l = s[e ? o : ++i];
					if (r(a[l], l, a) === !1) break
				}
				return t
			}
		}
		Jx.exports = R$
	});
	var rT = E((xle, tT) => {
		var q$ = eT(),
			L$ = q$();
		tT.exports = L$
	});
	var mh = E((Tle, nT) => {
		var k$ = rT(),
			N$ = On();

		function B$(e, t) {
			return e && k$(e, t, N$)
		}
		nT.exports = B$
	});
	var aT = E((Ile, iT) => {
		var V$ = dr();

		function G$(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!V$(r)) return e(r, n);
				for (var i = r.length, a = t ? i : -1, s = Object(r);
					(t ? a-- : ++a < i) && n(s[a], a, s) !== !1;);
				return r
			}
		}
		iT.exports = G$
	});
	var gh = E((Ale, sT) => {
		var z$ = mh(),
			H$ = aT(),
			j$ = H$(z$);
		sT.exports = j$
	});
	var lT = E((Ple, oT) => {
		function U$(e, t, r, n, i) {
			return i(e, function(a, s, o) {
				r = n ? (n = !1, a) : t(r, a, s, o)
			}), r
		}
		oT.exports = U$
	});
	var hT = E((Cle, uT) => {
		var W$ = Zx(),
			X$ = gh(),
			$$ = Jt(),
			K$ = lT(),
			Y$ = De();

		function Q$(e, t, r) {
			var n = Y$(e) ? W$ : K$,
				i = arguments.length < 3;
			return n(e, $$(t, 4), r, i, X$)
		}
		uT.exports = Q$
	});
	var fT = E((wle, cT) => {
		var Z$ = Zs(),
			J$ = Jt(),
			e9 = Ao(),
			t9 = Math.max,
			r9 = Math.min;

		function n9(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = e9(r), i = r < 0 ? t9(n + i, 0) : r9(i, n - 1)), Z$(e, J$(t, 3), i, !0)
		}
		cT.exports = n9
	});
	var dT = E((Mle, pT) => {
		var i9 = Qu(),
			a9 = fT(),
			s9 = i9(a9);
		pT.exports = s9
	});

	function mT(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
	}

	function o9(e, t) {
		if (mT(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		let r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (let i = 0; i < r.length; i++)
			if (!Object.hasOwn(t, r[i]) || !mT(e[r[i]], t[r[i]])) return !1;
		return !0
	}
	var vh, gT = pe(() => {
		"use strict";
		vh = o9
	});
	var RT = {};
	ze(RT, {
		cleanupHTMLElement: () => i7,
		clearAllStyles: () => n7,
		clearObjectCache: () => T9,
		getActionListProgress: () => s7,
		getAffectedElements: () => _h,
		getComputedStyle: () => O9,
		getDestinationValues: () => B9,
		getElementId: () => C9,
		getInstanceId: () => A9,
		getInstanceOrigin: () => q9,
		getItemConfigByKey: () => N9,
		getMaxDurationItemIndex: () => DT,
		getNamespacedParameterId: () => u7,
		getRenderType: () => MT,
		getStyleProp: () => V9,
		mediaQueriesEqual: () => c7,
		observeStore: () => F9,
		reduceListToGroup: () => o7,
		reifyState: () => w9,
		renderHTMLElement: () => G9,
		shallowEqual: () => vh,
		shouldAllowMediaQuery: () => h7,
		shouldNamespaceEventParameter: () => l7,
		stringifyTarget: () => f7
	});

	function T9() {
		vs.clear()
	}

	function A9() {
		return "i" + I9++
	}

	function C9(e, t) {
		for (let r in e) {
			let n = e[r];
			if (n && n.ref === t) return n.id
		}
		return "e" + P9++
	}

	function w9({
		events: e,
		actionLists: t,
		site: r
	} = {}) {
		let n = (0, Ss.default)(e, (s, o) => {
				let {
					eventTypeId: l
				} = o;
				return s[l] || (s[l] = {}), s[l][o.id] = o, s
			}, {}),
			i = r && r.mediaQueries,
			a = [];
		return i ? a = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
			ixData: {
				events: e,
				actionLists: t,
				eventTypeMap: n,
				mediaQueries: i,
				mediaQueryKeys: a
			}
		}
	}

	function F9({
		store: e,
		select: t,
		onChange: r,
		comparator: n = M9
	}) {
		let {
			getState: i,
			subscribe: a
		} = e, s = a(l), o = t(i());

		function l() {
			let c = t(i());
			if (c == null) {
				s();
				return
			}
			n(c, o) || (o = c, r(o, e))
		}
		return s
	}

	function ET(e) {
		let t = typeof e;
		if (t === "string") return {
			id: e
		};
		if (e != null && t === "object") {
			let {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: a,
				appliesTo: s,
				useEventTarget: o
			} = e;
			return {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: a,
				appliesTo: s,
				useEventTarget: o
			}
		}
		return {}
	}

	function _h({
		config: e,
		event: t,
		eventTarget: r,
		elementRoot: n,
		elementApi: i
	}) {
		if (!i) throw new Error("IX2 missing elementApi");
		let {
			targets: a
		} = e;
		if (Array.isArray(a) && a.length > 0) return a.reduce((R, F) => R.concat(_h({
			config: {
				target: F
			},
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		})), []);
		let {
			getValidDocument: s,
			getQuerySelector: o,
			queryDocument: l,
			getChildElements: c,
			getSiblingElements: u,
			matchSelector: f,
			elementContains: m,
			isSiblingNode: d
		} = i, {
			target: p
		} = e;
		if (!p) return [];
		let {
			id: g,
			objectId: h,
			selector: v,
			selectorGuids: y,
			appliesTo: b,
			useEventTarget: S
		} = ET(p);
		if (h) return [vs.has(h) ? vs.get(h) : vs.set(h, {}).get(h)];
		if (b === Xu.PAGE) {
			let R = s(g);
			return R ? [R] : []
		}
		let T = (t?.action?.config?.affectedElements ? ? {})[g || v] || {},
			x = !!(T.id || T.selector),
			P, D, w, C = t && o(ET(t.target));
		if (x ? (P = T.limitAffectedElements, D = C, w = o(T)) : D = w = o({
				id: g,
				selector: v,
				selectorGuids: y
			}), t && S) {
			let R = r && (w || S === !0) ? [r] : l(C);
			if (w) {
				if (S === S9) return l(w).filter(F => R.some(M => m(F, M)));
				if (S === vT) return l(w).filter(F => R.some(M => m(M, F)));
				if (S === yT) return l(w).filter(F => R.some(M => d(M, F)))
			}
			return R
		}
		return D == null || w == null ? [] : St && n ? l(w).filter(R => n.contains(R)) : P === vT ? l(D, w) : P === b9 ? c(l(D)).filter(f(w)) : P === yT ? u(l(D)).filter(f(w)) : l(w)
	}

	function O9({
		element: e,
		actionItem: t
	}) {
		if (!St) return {};
		let {
			actionTypeId: r
		} = t;
		switch (r) {
			case fn:
			case pn:
			case dn:
			case mn:
			case xs:
				return window.getComputedStyle(e);
			default:
				return {}
		}
	}

	function q9(e, t = {}, r = {}, n, i) {
		let {
			getStyle: a
		} = i, {
			actionTypeId: s
		} = n;
		if (Pr(s)) return hh(s)(t[s], n);
		switch (n.actionTypeId) {
			case un:
			case hn:
			case cn:
			case Ii:
				return t[n.actionTypeId] || xh[n.actionTypeId];
			case Ai:
				return D9(t[n.actionTypeId], n.config.filters);
			case Pi:
				return R9(t[n.actionTypeId], n.config.fontVariations);
			case PT:
				return {
					value: (0, Wt.default)(parseFloat(a(e, Es)), 1)
				};
			case fn: {
				let o = a(e, Dt),
					l = a(e, Rt),
					c, u;
				return n.config.widthUnit === fr ? c = bT.test(o) ? parseFloat(o) : parseFloat(r.width) : c = (0, Wt.default)(parseFloat(o), parseFloat(r.width)), n.config.heightUnit === fr ? u = bT.test(l) ? parseFloat(l) : parseFloat(r.height) : u = (0, Wt.default)(parseFloat(l), parseFloat(r.height)), {
					widthValue: c,
					heightValue: u
				}
			}
			case pn:
			case dn:
			case mn:
				return e7({
					element: e,
					actionTypeId: n.actionTypeId,
					computedStyle: r,
					getStyle: a
				});
			case xs:
				return {
					value: (0, Wt.default)(a(e, bs), r.display)
				};
			case x9:
				return t[n.actionTypeId] || {
					value: 0
				};
			default:
				return
		}
	}

	function B9({
		element: e,
		actionItem: t,
		elementApi: r
	}) {
		if (Pr(t.actionTypeId)) return ch(t.actionTypeId)(t.config);
		switch (t.actionTypeId) {
			case un:
			case hn:
			case cn:
			case Ii: {
				let {
					xValue: n,
					yValue: i,
					zValue: a
				} = t.config;
				return {
					xValue: n,
					yValue: i,
					zValue: a
				}
			}
			case fn: {
				let {
					getStyle: n,
					setStyle: i,
					getProperty: a
				} = r, {
					widthUnit: s,
					heightUnit: o
				} = t.config, {
					widthValue: l,
					heightValue: c
				} = t.config;
				if (!St) return {
					widthValue: l,
					heightValue: c
				};
				if (s === fr) {
					let u = n(e, Dt);
					i(e, Dt, ""), l = a(e, "offsetWidth"), i(e, Dt, u)
				}
				if (o === fr) {
					let u = n(e, Rt);
					i(e, Rt, ""), c = a(e, "offsetHeight"), i(e, Rt, u)
				}
				return {
					widthValue: l,
					heightValue: c
				}
			}
			case pn:
			case dn:
			case mn: {
				let {
					rValue: n,
					gValue: i,
					bValue: a,
					aValue: s,
					globalSwatchId: o
				} = t.config;
				if (o && o.startsWith("--")) {
					let {
						getStyle: l
					} = r, c = l(e, o), u = (0, xT.normalizeColor)(c);
					return {
						rValue: u.red,
						gValue: u.green,
						bValue: u.blue,
						aValue: u.alpha
					}
				}
				return {
					rValue: n,
					gValue: i,
					bValue: a,
					aValue: s
				}
			}
			case Ai:
				return t.config.filters.reduce(L9, {});
			case Pi:
				return t.config.fontVariations.reduce(k9, {});
			default: {
				let {
					value: n
				} = t.config;
				return {
					value: n
				}
			}
		}
	}

	function MT(e) {
		if (/^TRANSFORM_/.test(e)) return IT;
		if (/^STYLE_/.test(e)) return bh;
		if (/^GENERAL_/.test(e)) return Eh;
		if (/^PLUGIN_/.test(e)) return AT
	}

	function V9(e, t) {
		return e === bh ? t.replace("STYLE_", "").toLowerCase() : null
	}

	function G9(e, t, r, n, i, a, s, o, l) {
		switch (o) {
			case IT:
				return W9(e, t, r, i, s);
			case bh:
				return t7(e, t, r, i, a, s);
			case Eh:
				return r7(e, i, s);
			case AT: {
				let {
					actionTypeId: c
				} = i;
				if (Pr(c)) return fh(c)(l, t, i)
			}
		}
	}

	function W9(e, t, r, n, i) {
		let a = U9.map(o => {
				let l = xh[o],
					{
						xValue: c = l.xValue,
						yValue: u = l.yValue,
						zValue: f = l.zValue,
						xUnit: m = "",
						yUnit: d = "",
						zUnit: p = ""
					} = t[o] || {};
				switch (o) {
					case un:
						return `${h9}(${c}${m}, ${u}${d}, ${f}${p})`;
					case hn:
						return `${c9}(${c}${m}, ${u}${d}, ${f}${p})`;
					case cn:
						return `${f9}(${c}${m}) ${p9}(${u}${d}) ${d9}(${f}${p})`;
					case Ii:
						return `${m9}(${c}${m}, ${u}${d})`;
					default:
						return ""
				}
			}).join(" "),
			{
				setStyle: s
			} = i;
		wr(e, cr, i), s(e, cr, a), K9(n, r) && s(e, fs, g9)
	}

	function X9(e, t, r, n) {
		let i = (0, Ss.default)(t, (s, o, l) => `${s} ${l}(${o}${j9(l, r)})`, ""),
			{
				setStyle: a
			} = n;
		wr(e, _i, n), a(e, _i, i)
	}

	function $9(e, t, r, n) {
		let i = (0, Ss.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
			{
				setStyle: a
			} = n;
		wr(e, xi, n), a(e, xi, i)
	}

	function K9({
		actionTypeId: e
	}, {
		xValue: t,
		yValue: r,
		zValue: n
	}) {
		return e === un && n !== void 0 || e === hn && n !== void 0 || e === cn && (t !== void 0 || r !== void 0)
	}

	function J9(e, t) {
		let r = e.exec(t);
		return r ? r[1] : ""
	}

	function e7({
		element: e,
		actionTypeId: t,
		computedStyle: r,
		getStyle: n
	}) {
		let i = Sh[t],
			a = n(e, i),
			s = Q9.test(a) ? a : r[i],
			o = J9(Z9, s).split(Ti);
		return {
			rValue: (0, Wt.default)(parseInt(o[0], 10), 255),
			gValue: (0, Wt.default)(parseInt(o[1], 10), 255),
			bValue: (0, Wt.default)(parseInt(o[2], 10), 255),
			aValue: (0, Wt.default)(parseFloat(o[3]), 1)
		}
	}

	function t7(e, t, r, n, i, a) {
		let {
			setStyle: s
		} = a;
		switch (n.actionTypeId) {
			case fn: {
				let {
					widthUnit: o = "",
					heightUnit: l = ""
				} = n.config, {
					widthValue: c,
					heightValue: u
				} = r;
				c !== void 0 && (o === fr && (o = "px"), wr(e, Dt, a), s(e, Dt, c + o)), u !== void 0 && (l === fr && (l = "px"), wr(e, Rt, a), s(e, Rt, u + l));
				break
			}
			case Ai: {
				X9(e, r, n.config, a);
				break
			}
			case Pi: {
				$9(e, r, n.config, a);
				break
			}
			case pn:
			case dn:
			case mn: {
				let o = Sh[n.actionTypeId],
					l = Math.round(r.rValue),
					c = Math.round(r.gValue),
					u = Math.round(r.bValue),
					f = r.aValue;
				wr(e, o, a), s(e, o, f >= 1 ? `rgb(${l},${c},${u})` : `rgba(${l},${c},${u},${f})`);
				break
			}
			default: {
				let {
					unit: o = ""
				} = n.config;
				wr(e, i, a), s(e, i, r.value + o);
				break
			}
		}
	}

	function r7(e, t, r) {
		let {
			setStyle: n
		} = r;
		switch (t.actionTypeId) {
			case xs: {
				let {
					value: i
				} = t.config;
				i === v9 && St ? n(e, bs, Ju) : n(e, bs, i);
				return
			}
		}
	}

	function wr(e, t, r) {
		if (!St) return;
		let n = wT[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: a
		} = r, s = i(e, ln);
		if (!s) {
			a(e, ln, n);
			return
		}
		let o = s.split(Ti).map(CT);
		o.indexOf(n) === -1 && a(e, ln, o.concat(n).join(Ti))
	}

	function FT(e, t, r) {
		if (!St) return;
		let n = wT[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: a
		} = r, s = i(e, ln);
		!s || s.indexOf(n) === -1 || a(e, ln, s.split(Ti).map(CT).filter(o => o !== n).join(Ti))
	}

	function n7({
		store: e,
		elementApi: t
	}) {
		let {
			ixData: r
		} = e.getState(), {
			events: n = {},
			actionLists: i = {}
		} = r;
		Object.keys(n).forEach(a => {
			let s = n[a],
				{
					config: o
				} = s.action,
				{
					actionListId: l
				} = o,
				c = i[l];
			c && ST({
				actionList: c,
				event: s,
				elementApi: t
			})
		}), Object.keys(i).forEach(a => {
			ST({
				actionList: i[a],
				elementApi: t
			})
		})
	}

	function ST({
		actionList: e = {},
		event: t,
		elementApi: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e;
		n && n.forEach(a => {
			_T({
				actionGroup: a,
				event: t,
				elementApi: r
			})
		}), i && i.forEach(a => {
			let {
				continuousActionGroups: s
			} = a;
			s.forEach(o => {
				_T({
					actionGroup: o,
					event: t,
					elementApi: r
				})
			})
		})
	}

	function _T({
		actionGroup: e,
		event: t,
		elementApi: r
	}) {
		let {
			actionItems: n
		} = e;
		n.forEach(i => {
			let {
				actionTypeId: a,
				config: s
			} = i, o;
			Pr(a) ? o = l => ph(a)(l, i) : o = OT({
				effect: a7,
				actionTypeId: a,
				elementApi: r
			}), _h({
				config: s,
				event: t,
				elementApi: r
			}).forEach(o)
		})
	}

	function i7(e, t, r) {
		let {
			setStyle: n,
			getStyle: i
		} = r, {
			actionTypeId: a
		} = t;
		if (a === fn) {
			let {
				config: s
			} = t;
			s.widthUnit === fr && n(e, Dt, ""), s.heightUnit === fr && n(e, Rt, "")
		}
		i(e, ln) && OT({
			effect: FT,
			actionTypeId: a,
			elementApi: r
		})(e)
	}

	function a7(e, t, r) {
		let {
			setStyle: n
		} = r;
		FT(e, t, r), n(e, t, ""), t === cr && n(e, fs, "")
	}

	function DT(e) {
		let t = 0,
			r = 0;
		return e.forEach((n, i) => {
			let {
				config: a
			} = n, s = a.delay + a.duration;
			s >= t && (t = s, r = i)
		}), r
	}

	function s7(e, t) {
		let {
			actionItemGroups: r,
			useFirstGroupAsInitialState: n
		} = e, {
			actionItem: i,
			verboseTimeElapsed: a = 0
		} = t, s = 0, o = 0;
		return r.forEach((l, c) => {
			if (n && c === 0) return;
			let {
				actionItems: u
			} = l, f = u[DT(u)], {
				config: m,
				actionTypeId: d
			} = f;
			i.id === f.id && (o = s + a);
			let p = MT(d) === Eh ? 0 : m.duration;
			s += m.delay + p
		}), s > 0 ? Si(o / s) : 0
	}

	function o7({
		actionList: e,
		actionItemId: t,
		rawData: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e, a = [], s = o => (a.push((0, _s.mergeIn)(o, ["config"], {
			delay: 0,
			duration: 0
		})), o.id === t);
		return n && n.some(({
			actionItems: o
		}) => o.some(s)), i && i.some(o => {
			let {
				continuousActionGroups: l
			} = o;
			return l.some(({
				actionItems: c
			}) => c.some(s))
		}), (0, _s.setIn)(r, ["actionLists"], {
			[e.id]: {
				id: e.id,
				actionItemGroups: [{
					actionItems: a
				}]
			}
		})
	}

	function l7(e, {
		basedOn: t
	}) {
		return e === bt.SCROLLING_IN_VIEW && (t === Ot.ELEMENT || t == null) || e === bt.MOUSE_MOVE && t === Ot.ELEMENT
	}

	function u7(e, t) {
		return e + _9 + t
	}

	function h7(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1
	}

	function c7(e, t) {
		return vh(e && e.sort(), t && t.sort())
	}

	function f7(e) {
		if (typeof e == "string") return e;
		if (e.pluginElement && e.objectId) return e.pluginElement + yh + e.objectId;
		if (e.objectId) return e.objectId;
		let {
			id: t = "",
			selector: r = "",
			useEventTarget: n = ""
		} = e;
		return t + yh + r + yh + n
	}
	var Wt, Ss, ys, _s, xT, l9, u9, h9, c9, f9, p9, d9, m9, g9, v9, Es, _i, xi, Dt, Rt, TT, y9, E9, vT, b9, yT, S9, bs, ln, fr, Ti, _9, yh, IT, Eh, bh, AT, un, hn, cn, Ii, PT, Ai, Pi, fn, pn, dn, mn, xs, x9, CT, Sh, wT, vs, I9, P9, M9, bT, D9, R9, L9, k9, N9, xh, z9, H9, j9, U9, Y9, Q9, Z9, OT, qT = pe(() => {
		"use strict";
		Wt = oe(Yx()), Ss = oe(hT()), ys = oe(dT()), _s = oe(sn());
		Ze();
		gT();
		rh();
		xT = oe(ah());
		dh();
		ps();
		({
			BACKGROUND: l9,
			TRANSFORM: u9,
			TRANSLATE_3D: h9,
			SCALE_3D: c9,
			ROTATE_X: f9,
			ROTATE_Y: p9,
			ROTATE_Z: d9,
			SKEW: m9,
			PRESERVE_3D: g9,
			FLEX: v9,
			OPACITY: Es,
			FILTER: _i,
			FONT_VARIATION_SETTINGS: xi,
			WIDTH: Dt,
			HEIGHT: Rt,
			BACKGROUND_COLOR: TT,
			BORDER_COLOR: y9,
			COLOR: E9,
			CHILDREN: vT,
			IMMEDIATE_CHILDREN: b9,
			SIBLINGS: yT,
			PARENT: S9,
			DISPLAY: bs,
			WILL_CHANGE: ln,
			AUTO: fr,
			COMMA_DELIMITER: Ti,
			COLON_DELIMITER: _9,
			BAR_DELIMITER: yh,
			RENDER_TRANSFORM: IT,
			RENDER_GENERAL: Eh,
			RENDER_STYLE: bh,
			RENDER_PLUGIN: AT
		} = Be), {
			TRANSFORM_MOVE: un,
			TRANSFORM_SCALE: hn,
			TRANSFORM_ROTATE: cn,
			TRANSFORM_SKEW: Ii,
			STYLE_OPACITY: PT,
			STYLE_FILTER: Ai,
			STYLE_FONT_VARIATION: Pi,
			STYLE_SIZE: fn,
			STYLE_BACKGROUND_COLOR: pn,
			STYLE_BORDER: dn,
			STYLE_TEXT_COLOR: mn,
			GENERAL_DISPLAY: xs,
			OBJECT_VALUE: x9
		} = Qe, CT = e => e.trim(), Sh = Object.freeze({
			[pn]: TT,
			[dn]: y9,
			[mn]: E9
		}), wT = Object.freeze({
			[cr]: u9,
			[TT]: l9,
			[Es]: Es,
			[_i]: _i,
			[Dt]: Dt,
			[Rt]: Rt,
			[xi]: xi
		}), vs = new Map;
		I9 = 1;
		P9 = 1;
		M9 = (e, t) => e === t;
		bT = /px/, D9 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = z9[n.type]), r), e || {}), R9 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = H9[n.type] || n.defaultValue || 0), r), e || {});
		L9 = (e, t) => (t && (e[t.type] = t.value || 0), e), k9 = (e, t) => (t && (e[t.type] = t.value || 0), e), N9 = (e, t, r) => {
			if (Pr(e)) return uh(e)(r, t);
			switch (e) {
				case Ai: {
					let n = (0, ys.default)(r.filters, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				case Pi: {
					let n = (0, ys.default)(r.fontVariations, ({
						type: i
					}) => i === t);
					return n ? n.value : 0
				}
				default:
					return r[t]
			}
		};
		xh = {
			[un]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[hn]: Object.freeze({
				xValue: 1,
				yValue: 1,
				zValue: 1
			}),
			[cn]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[Ii]: Object.freeze({
				xValue: 0,
				yValue: 0
			})
		}, z9 = Object.freeze({
			blur: 0,
			"hue-rotate": 0,
			invert: 0,
			grayscale: 0,
			saturate: 100,
			sepia: 0,
			contrast: 100,
			brightness: 100
		}), H9 = Object.freeze({
			wght: 0,
			opsz: 0,
			wdth: 0,
			slnt: 0
		}), j9 = (e, t) => {
			let r = (0, ys.default)(t.filters, ({
				type: n
			}) => n === e);
			if (r && r.unit) return r.unit;
			switch (e) {
				case "blur":
					return "px";
				case "hue-rotate":
					return "deg";
				default:
					return "%"
			}
		}, U9 = Object.keys(xh);
		Y9 = "\\(([^)]+)\\)", Q9 = /^rgb/, Z9 = RegExp(`rgba?${Y9}`);
		OT = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case un:
				case hn:
				case cn:
				case Ii:
					e(n, cr, r);
					break;
				case Ai:
					e(n, _i, r);
					break;
				case Pi:
					e(n, xi, r);
					break;
				case PT:
					e(n, Es, r);
					break;
				case fn:
					e(n, Dt, r), e(n, Rt, r);
					break;
				case pn:
				case dn:
				case mn:
					e(n, Sh[t], r);
					break;
				case xs:
					e(n, bs, r);
					break
			}
		}
	});
	var Mr = E(Xe => {
		"use strict";
		var gn = ns().default;
		Object.defineProperty(Xe, "__esModule", {
			value: !0
		});
		Xe.IX2VanillaUtils = Xe.IX2VanillaPlugins = Xe.IX2ElementsReducer = Xe.IX2Easings = Xe.IX2EasingUtils = Xe.IX2BrowserSupport = void 0;
		var p7 = gn((ps(), ft(Mx)));
		Xe.IX2BrowserSupport = p7;
		var d7 = gn((th(), ft(bi)));
		Xe.IX2Easings = d7;
		var m7 = gn((rh(), ft(kx)));
		Xe.IX2EasingUtils = m7;
		var g7 = gn((Gx(), ft(Vx)));
		Xe.IX2ElementsReducer = g7;
		var v7 = gn((dh(), ft($x)));
		Xe.IX2VanillaPlugins = v7;
		var y7 = gn((qT(), ft(RT)));
		Xe.IX2VanillaUtils = y7
	});
	var Is, Xt, E7, b7, S7, _7, x7, T7, Ts, LT, I7, A7, Th, P7, C7, w7, M7, kT, NT = pe(() => {
		"use strict";
		Ze();
		Is = oe(Mr()), Xt = oe(sn()), {
			IX2_RAW_DATA_IMPORTED: E7,
			IX2_SESSION_STOPPED: b7,
			IX2_INSTANCE_ADDED: S7,
			IX2_INSTANCE_STARTED: _7,
			IX2_INSTANCE_REMOVED: x7,
			IX2_ANIMATION_FRAME_CHANGED: T7
		} = Oe, {
			optimizeFloat: Ts,
			applyEasing: LT,
			createBezierEasing: I7
		} = Is.IX2EasingUtils, {
			RENDER_GENERAL: A7
		} = Be, {
			getItemConfigByKey: Th,
			getRenderType: P7,
			getStyleProp: C7
		} = Is.IX2VanillaUtils, w7 = (e, t) => {
			let {
				position: r,
				parameterId: n,
				actionGroups: i,
				destinationKeys: a,
				smoothing: s,
				restingValue: o,
				actionTypeId: l,
				customEasingFn: c,
				skipMotion: u,
				skipToValue: f
			} = e, {
				parameters: m
			} = t.payload, d = Math.max(1 - s, .01), p = m[n];
			p == null && (d = 1, p = o);
			let g = Math.max(p, 0) || 0,
				h = Ts(g - r),
				v = u ? f : Ts(r + h * d),
				y = v * 100;
			if (v === r && e.current) return e;
			let b, S, _, T;
			for (let P = 0, {
					length: D
				} = i; P < D; P++) {
				let {
					keyframe: w,
					actionItems: C
				} = i[P];
				if (P === 0 && (b = C[0]), y >= w) {
					b = C[0];
					let R = i[P + 1],
						F = R && y !== w;
					S = F ? R.actionItems[0] : null, F && (_ = w / 100, T = (R.keyframe - w) / 100)
				}
			}
			let x = {};
			if (b && !S)
				for (let P = 0, {
						length: D
					} = a; P < D; P++) {
					let w = a[P];
					x[w] = Th(l, w, b.config)
				} else if (b && S && _ !== void 0 && T !== void 0) {
					let P = (v - _) / T,
						D = b.config.easing,
						w = LT(D, P, c);
					for (let C = 0, {
							length: R
						} = a; C < R; C++) {
						let F = a[C],
							M = Th(l, F, b.config),
							$ = (Th(l, F, S.config) - M) * w + M;
						x[F] = $
					}
				} return (0, Xt.merge)(e, {
				position: v,
				current: x
			})
		}, M7 = (e, t) => {
			let {
				active: r,
				origin: n,
				start: i,
				immediate: a,
				renderType: s,
				verbose: o,
				actionItem: l,
				destination: c,
				destinationKeys: u,
				pluginDuration: f,
				instanceDelay: m,
				customEasingFn: d,
				skipMotion: p
			} = e, g = l.config.easing, {
				duration: h,
				delay: v
			} = l.config;
			f != null && (h = f), v = m ? ? v, s === A7 ? h = 0 : (a || p) && (h = v = 0);
			let {
				now: y
			} = t.payload;
			if (r && n) {
				let b = y - (i + v);
				if (o) {
					let P = y - i,
						D = h + v,
						w = Ts(Math.min(Math.max(0, P / D), 1));
					e = (0, Xt.set)(e, "verboseTimeElapsed", D * w)
				}
				if (b < 0) return e;
				let S = Ts(Math.min(Math.max(0, b / h), 1)),
					_ = LT(g, S, d),
					T = {},
					x = null;
				return u.length && (x = u.reduce((P, D) => {
					let w = c[D],
						C = parseFloat(n[D]) || 0,
						F = (parseFloat(w) - C) * _ + C;
					return P[D] = F, P
				}, {})), T.current = x, T.position = S, S === 1 && (T.active = !1, T.complete = !0), (0, Xt.merge)(e, T)
			}
			return e
		}, kT = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case E7:
					return t.payload.ixInstances || Object.freeze({});
				case b7:
					return Object.freeze({});
				case S7: {
					let {
						instanceId: r,
						elementId: n,
						actionItem: i,
						eventId: a,
						eventTarget: s,
						eventStateKey: o,
						actionListId: l,
						groupIndex: c,
						isCarrier: u,
						origin: f,
						destination: m,
						immediate: d,
						verbose: p,
						continuous: g,
						parameterId: h,
						actionGroups: v,
						smoothing: y,
						restingValue: b,
						pluginInstance: S,
						pluginDuration: _,
						instanceDelay: T,
						skipMotion: x,
						skipToValue: P
					} = t.payload, {
						actionTypeId: D
					} = i, w = P7(D), C = C7(w, D), R = Object.keys(m).filter(M => m[M] != null && typeof m[M] != "string"), {
						easing: F
					} = i.config;
					return (0, Xt.set)(e, r, {
						id: r,
						elementId: n,
						active: !1,
						position: 0,
						start: 0,
						origin: f,
						destination: m,
						destinationKeys: R,
						immediate: d,
						verbose: p,
						current: null,
						actionItem: i,
						actionTypeId: D,
						eventId: a,
						eventTarget: s,
						eventStateKey: o,
						actionListId: l,
						groupIndex: c,
						renderType: w,
						isCarrier: u,
						styleProp: C,
						continuous: g,
						parameterId: h,
						actionGroups: v,
						smoothing: y,
						restingValue: b,
						pluginInstance: S,
						pluginDuration: _,
						instanceDelay: T,
						skipMotion: x,
						skipToValue: P,
						customEasingFn: Array.isArray(F) && F.length === 4 ? I7(F) : void 0
					})
				}
				case _7: {
					let {
						instanceId: r,
						time: n
					} = t.payload;
					return (0, Xt.mergeIn)(e, [r], {
						active: !0,
						complete: !1,
						start: n
					})
				}
				case x7: {
					let {
						instanceId: r
					} = t.payload;
					if (!e[r]) return e;
					let n = {},
						i = Object.keys(e),
						{
							length: a
						} = i;
					for (let s = 0; s < a; s++) {
						let o = i[s];
						o !== r && (n[o] = e[o])
					}
					return n
				}
				case T7: {
					let r = e,
						n = Object.keys(e),
						{
							length: i
						} = n;
					for (let a = 0; a < i; a++) {
						let s = n[a],
							o = e[s],
							l = o.continuous ? w7 : M7;
						r = (0, Xt.set)(r, s, l(o, t))
					}
					return r
				}
				default:
					return e
			}
		}
	});
	var F7, O7, D7, BT, VT = pe(() => {
		"use strict";
		Ze();
		({
			IX2_RAW_DATA_IMPORTED: F7,
			IX2_SESSION_STOPPED: O7,
			IX2_PARAMETER_CHANGED: D7
		} = Oe), BT = (e = {}, t) => {
			switch (t.type) {
				case F7:
					return t.payload.ixParameters || {};
				case O7:
					return {};
				case D7: {
					let {
						key: r,
						value: n
					} = t.payload;
					return e[r] = n, e
				}
				default:
					return e
			}
		}
	});
	var HT = {};
	ze(HT, {
		default: () => q7
	});
	var GT, zT, R7, q7, jT = pe(() => {
		"use strict";
		GT = oe(Wu());
		tx();
		_x();
		Ix();
		zT = oe(Mr());
		NT();
		VT();
		({
			ixElements: R7
		} = zT.IX2ElementsReducer), q7 = (0, GT.combineReducers)({
			ixData: ex,
			ixRequest: Sx,
			ixSession: Tx,
			ixElements: R7,
			ixInstances: kT,
			ixParameters: BT
		})
	});
	var WT = E((Xle, UT) => {
		var L7 = Qt(),
			k7 = De(),
			N7 = Lt(),
			B7 = "[object String]";

		function V7(e) {
			return typeof e == "string" || !k7(e) && N7(e) && L7(e) == B7
		}
		UT.exports = V7
	});
	var $T = E(($le, XT) => {
		var G7 = Io(),
			z7 = G7("length");
		XT.exports = z7
	});
	var YT = E((Kle, KT) => {
		var H7 = "\\ud800-\\udfff",
			j7 = "\\u0300-\\u036f",
			U7 = "\\ufe20-\\ufe2f",
			W7 = "\\u20d0-\\u20ff",
			X7 = j7 + U7 + W7,
			$7 = "\\ufe0e\\ufe0f",
			K7 = "\\u200d",
			Y7 = RegExp("[" + K7 + H7 + X7 + $7 + "]");

		function Q7(e) {
			return Y7.test(e)
		}
		KT.exports = Q7
	});
	var aI = E((Yle, iI) => {
		var ZT = "\\ud800-\\udfff",
			Z7 = "\\u0300-\\u036f",
			J7 = "\\ufe20-\\ufe2f",
			eK = "\\u20d0-\\u20ff",
			tK = Z7 + J7 + eK,
			rK = "\\ufe0e\\ufe0f",
			nK = "[" + ZT + "]",
			Ih = "[" + tK + "]",
			Ah = "\\ud83c[\\udffb-\\udfff]",
			iK = "(?:" + Ih + "|" + Ah + ")",
			JT = "[^" + ZT + "]",
			eI = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			tI = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			aK = "\\u200d",
			rI = iK + "?",
			nI = "[" + rK + "]?",
			sK = "(?:" + aK + "(?:" + [JT, eI, tI].join("|") + ")" + nI + rI + ")*",
			oK = nI + rI + sK,
			lK = "(?:" + [JT + Ih + "?", Ih, eI, tI, nK].join("|") + ")",
			QT = RegExp(Ah + "(?=" + Ah + ")|" + lK + oK, "g");

		function uK(e) {
			for (var t = QT.lastIndex = 0; QT.test(e);) ++t;
			return t
		}
		iI.exports = uK
	});
	var oI = E((Qle, sI) => {
		var hK = $T(),
			cK = YT(),
			fK = aI();

		function pK(e) {
			return cK(e) ? fK(e) : hK(e)
		}
		sI.exports = pK
	});
	var uI = E((Zle, lI) => {
		var dK = Xi(),
			mK = $i(),
			gK = dr(),
			vK = WT(),
			yK = oI(),
			EK = "[object Map]",
			bK = "[object Set]";

		function SK(e) {
			if (e == null) return 0;
			if (gK(e)) return vK(e) ? yK(e) : e.length;
			var t = mK(e);
			return t == EK || t == bK ? e.size : dK(e).length
		}
		lI.exports = SK
	});
	var cI = E((Jle, hI) => {
		var _K = "Expected a function";

		function xK(e) {
			if (typeof e != "function") throw new TypeError(_K);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		hI.exports = xK
	});
	var Ph = E((eue, fI) => {
		var TK = Zt(),
			IK = function() {
				try {
					var e = TK(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		fI.exports = IK
	});
	var Ch = E((tue, dI) => {
		var pI = Ph();

		function AK(e, t, r) {
			t == "__proto__" && pI ? pI(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		dI.exports = AK
	});
	var gI = E((rue, mI) => {
		var PK = Ch(),
			CK = ki(),
			wK = Object.prototype,
			MK = wK.hasOwnProperty;

		function FK(e, t, r) {
			var n = e[t];
			(!(MK.call(e, t) && CK(n, r)) || r === void 0 && !(t in e)) && PK(e, t, r)
		}
		mI.exports = FK
	});
	var EI = E((nue, yI) => {
		var OK = gI(),
			DK = Rn(),
			RK = Hi(),
			vI = At(),
			qK = zr();

		function LK(e, t, r, n) {
			if (!vI(e)) return e;
			t = DK(t, e);
			for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a;) {
				var l = qK(t[i]),
					c = r;
				if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
				if (i != s) {
					var u = o[l];
					c = n ? n(u, l, o) : void 0, c === void 0 && (c = vI(u) ? u : RK(t[i + 1]) ? [] : {})
				}
				OK(o, l, c), o = o[l]
			}
			return e
		}
		yI.exports = LK
	});
	var SI = E((iue, bI) => {
		var kK = Qi(),
			NK = EI(),
			BK = Rn();

		function VK(e, t, r) {
			for (var n = -1, i = t.length, a = {}; ++n < i;) {
				var s = t[n],
					o = kK(e, s);
				r(o, s) && NK(a, BK(s, e), o)
			}
			return a
		}
		bI.exports = VK
	});
	var xI = E((aue, _I) => {
		var GK = Gi(),
			zK = Du(),
			HK = lo(),
			jK = oo(),
			UK = Object.getOwnPropertySymbols,
			WK = UK ? function(e) {
				for (var t = []; e;) GK(t, HK(e)), e = zK(e);
				return t
			} : jK;
		_I.exports = WK
	});
	var II = E((sue, TI) => {
		function XK(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		TI.exports = XK
	});
	var PI = E((oue, AI) => {
		var $K = At(),
			KK = Wi(),
			YK = II(),
			QK = Object.prototype,
			ZK = QK.hasOwnProperty;

		function JK(e) {
			if (!$K(e)) return YK(e);
			var t = KK(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !ZK.call(e, n)) || r.push(n);
			return r
		}
		AI.exports = JK
	});
	var wI = E((lue, CI) => {
		var eY = ho(),
			tY = PI(),
			rY = dr();

		function nY(e) {
			return rY(e) ? eY(e, !0) : tY(e)
		}
		CI.exports = nY
	});
	var FI = E((uue, MI) => {
		var iY = so(),
			aY = xI(),
			sY = wI();

		function oY(e) {
			return iY(e, sY, aY)
		}
		MI.exports = oY
	});
	var DI = E((hue, OI) => {
		var lY = To(),
			uY = Jt(),
			hY = SI(),
			cY = FI();

		function fY(e, t) {
			if (e == null) return {};
			var r = lY(cY(e), function(n) {
				return [n]
			});
			return t = uY(t), hY(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		OI.exports = fY
	});
	var qI = E((cue, RI) => {
		var pY = Jt(),
			dY = cI(),
			mY = DI();

		function gY(e, t) {
			return mY(e, dY(pY(t)))
		}
		RI.exports = gY
	});
	var kI = E((fue, LI) => {
		var vY = Xi(),
			yY = $i(),
			EY = Cn(),
			bY = De(),
			SY = dr(),
			_Y = zi(),
			xY = Wi(),
			TY = Ui(),
			IY = "[object Map]",
			AY = "[object Set]",
			PY = Object.prototype,
			CY = PY.hasOwnProperty;

		function wY(e) {
			if (e == null) return !0;
			if (SY(e) && (bY(e) || typeof e == "string" || typeof e.splice == "function" || _Y(e) || TY(e) || EY(e))) return !e.length;
			var t = yY(e);
			if (t == IY || t == AY) return !e.size;
			if (xY(e)) return !vY(e).length;
			for (var r in e)
				if (CY.call(e, r)) return !1;
			return !0
		}
		LI.exports = wY
	});
	var BI = E((pue, NI) => {
		var MY = Ch(),
			FY = mh(),
			OY = Jt();

		function DY(e, t) {
			var r = {};
			return t = OY(t, 3), FY(e, function(n, i, a) {
				MY(r, i, t(n, i, a))
			}), r
		}
		NI.exports = DY
	});
	var GI = E((due, VI) => {
		function RY(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		VI.exports = RY
	});
	var HI = E((mue, zI) => {
		var qY = Ji();

		function LY(e) {
			return typeof e == "function" ? e : qY
		}
		zI.exports = LY
	});
	var UI = E((gue, jI) => {
		var kY = GI(),
			NY = gh(),
			BY = HI(),
			VY = De();

		function GY(e, t) {
			var r = VY(e) ? kY : NY;
			return r(e, BY(t))
		}
		jI.exports = GY
	});
	var XI = E((vue, WI) => {
		var zY = mt(),
			HY = function() {
				return zY.Date.now()
			};
		WI.exports = HY
	});
	var YI = E((yue, KI) => {
		var jY = At(),
			wh = XI(),
			$I = ea(),
			UY = "Expected a function",
			WY = Math.max,
			XY = Math.min;

		function $Y(e, t, r) {
			var n, i, a, s, o, l, c = 0,
				u = !1,
				f = !1,
				m = !0;
			if (typeof e != "function") throw new TypeError(UY);
			t = $I(t) || 0, jY(r) && (u = !!r.leading, f = "maxWait" in r, a = f ? WY($I(r.maxWait) || 0, t) : a, m = "trailing" in r ? !!r.trailing : m);

			function d(T) {
				var x = n,
					P = i;
				return n = i = void 0, c = T, s = e.apply(P, x), s
			}

			function p(T) {
				return c = T, o = setTimeout(v, t), u ? d(T) : s
			}

			function g(T) {
				var x = T - l,
					P = T - c,
					D = t - x;
				return f ? XY(D, a - P) : D
			}

			function h(T) {
				var x = T - l,
					P = T - c;
				return l === void 0 || x >= t || x < 0 || f && P >= a
			}

			function v() {
				var T = wh();
				if (h(T)) return y(T);
				o = setTimeout(v, g(T))
			}

			function y(T) {
				return o = void 0, m && n ? d(T) : (n = i = void 0, s)
			}

			function b() {
				o !== void 0 && clearTimeout(o), c = 0, n = l = i = o = void 0
			}

			function S() {
				return o === void 0 ? s : y(wh())
			}

			function _() {
				var T = wh(),
					x = h(T);
				if (n = arguments, i = this, l = T, x) {
					if (o === void 0) return p(l);
					if (f) return clearTimeout(o), o = setTimeout(v, t), d(l)
				}
				return o === void 0 && (o = setTimeout(v, t)), s
			}
			return _.cancel = b, _.flush = S, _
		}
		KI.exports = $Y
	});
	var ZI = E((Eue, QI) => {
		var KY = YI(),
			YY = At(),
			QY = "Expected a function";

		function ZY(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(QY);
			return YY(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), KY(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		QI.exports = ZY
	});
	var eA = {};
	ze(eA, {
		actionListPlaybackChanged: () => yn,
		animationFrameChanged: () => Ps,
		clearRequested: () => xQ,
		elementStateChanged: () => kh,
		eventListenerAdded: () => As,
		eventStateChanged: () => Rh,
		instanceAdded: () => qh,
		instanceRemoved: () => Lh,
		instanceStarted: () => Cs,
		mediaQueriesDefined: () => Bh,
		parameterChanged: () => vn,
		playbackRequested: () => SQ,
		previewRequested: () => bQ,
		rawDataImported: () => Mh,
		sessionInitialized: () => Fh,
		sessionStarted: () => Oh,
		sessionStopped: () => Dh,
		stopRequested: () => _Q,
		testFrameRendered: () => TQ,
		viewportWidthChanged: () => Nh
	});
	var JI, JY, eQ, tQ, rQ, nQ, iQ, aQ, sQ, oQ, lQ, uQ, hQ, cQ, fQ, pQ, dQ, mQ, gQ, vQ, yQ, EQ, Mh, Fh, Oh, Dh, bQ, SQ, _Q, xQ, As, TQ, Rh, Ps, vn, qh, Cs, Lh, kh, yn, Nh, Bh, ws = pe(() => {
		"use strict";
		Ze();
		JI = oe(Mr()), {
			IX2_RAW_DATA_IMPORTED: JY,
			IX2_SESSION_INITIALIZED: eQ,
			IX2_SESSION_STARTED: tQ,
			IX2_SESSION_STOPPED: rQ,
			IX2_PREVIEW_REQUESTED: nQ,
			IX2_PLAYBACK_REQUESTED: iQ,
			IX2_STOP_REQUESTED: aQ,
			IX2_CLEAR_REQUESTED: sQ,
			IX2_EVENT_LISTENER_ADDED: oQ,
			IX2_TEST_FRAME_RENDERED: lQ,
			IX2_EVENT_STATE_CHANGED: uQ,
			IX2_ANIMATION_FRAME_CHANGED: hQ,
			IX2_PARAMETER_CHANGED: cQ,
			IX2_INSTANCE_ADDED: fQ,
			IX2_INSTANCE_STARTED: pQ,
			IX2_INSTANCE_REMOVED: dQ,
			IX2_ELEMENT_STATE_CHANGED: mQ,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: gQ,
			IX2_VIEWPORT_WIDTH_CHANGED: vQ,
			IX2_MEDIA_QUERIES_DEFINED: yQ
		} = Oe, {
			reifyState: EQ
		} = JI.IX2VanillaUtils, Mh = e => ({
			type: JY,
			payload: {
				...EQ(e)
			}
		}), Fh = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: eQ,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		}), Oh = () => ({
			type: tQ
		}), Dh = () => ({
			type: rQ
		}), bQ = ({
			rawData: e,
			defer: t
		}) => ({
			type: nQ,
			payload: {
				defer: t,
				rawData: e
			}
		}), SQ = ({
			actionTypeId: e = Qe.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: a,
			testManual: s,
			verbose: o,
			rawData: l
		}) => ({
			type: iQ,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: s,
				eventId: n,
				allowEvents: i,
				immediate: a,
				verbose: o,
				rawData: l
			}
		}), _Q = e => ({
			type: aQ,
			payload: {
				actionListId: e
			}
		}), xQ = () => ({
			type: sQ
		}), As = (e, t) => ({
			type: oQ,
			payload: {
				target: e,
				listenerParams: t
			}
		}), TQ = (e = 1) => ({
			type: lQ,
			payload: {
				step: e
			}
		}), Rh = (e, t) => ({
			type: uQ,
			payload: {
				stateKey: e,
				newState: t
			}
		}), Ps = (e, t) => ({
			type: hQ,
			payload: {
				now: e,
				parameters: t
			}
		}), vn = (e, t) => ({
			type: cQ,
			payload: {
				key: e,
				value: t
			}
		}), qh = e => ({
			type: fQ,
			payload: {
				...e
			}
		}), Cs = (e, t) => ({
			type: pQ,
			payload: {
				instanceId: e,
				time: t
			}
		}), Lh = e => ({
			type: dQ,
			payload: {
				instanceId: e
			}
		}), kh = (e, t, r, n) => ({
			type: mQ,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		}), yn = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: gQ,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		}), Nh = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: vQ,
			payload: {
				width: e,
				mediaQueries: t
			}
		}), Bh = () => ({
			type: yQ
		})
	});
	var $e = {};
	ze($e, {
		elementContains: () => zh,
		getChildElements: () => RQ,
		getClosestElement: () => Ci,
		getProperty: () => wQ,
		getQuerySelector: () => Gh,
		getRefType: () => Hh,
		getSiblingElements: () => qQ,
		getStyle: () => CQ,
		getValidDocument: () => FQ,
		isSiblingNode: () => DQ,
		matchSelector: () => MQ,
		queryDocument: () => OQ,
		setStyle: () => PQ
	});

	function PQ(e, t, r) {
		e.style[t] = r
	}

	function CQ(e, t) {
		return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
	}

	function wQ(e, t) {
		return e[t]
	}

	function MQ(e) {
		return t => t[Vh](e)
	}

	function Gh({
		id: e,
		selector: t
	}) {
		if (e) {
			let r = e;
			if (e.indexOf(tA) !== -1) {
				let n = e.split(tA),
					i = n[0];
				if (r = n[1], i !== document.documentElement.getAttribute(nA)) return null
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
		}
		return t
	}

	function FQ(e) {
		return e == null || e === document.documentElement.getAttribute(nA) ? document : null
	}

	function OQ(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
	}

	function zh(e, t) {
		return e.contains(t)
	}

	function DQ(e, t) {
		return e !== t && e.parentNode === t.parentNode
	}

	function RQ(e) {
		let t = [];
		for (let r = 0, {
				length: n
			} = e || []; r < n; r++) {
			let {
				children: i
			} = e[r], {
				length: a
			} = i;
			if (a)
				for (let s = 0; s < a; s++) t.push(i[s])
		}
		return t
	}

	function qQ(e = []) {
		let t = [],
			r = [];
		for (let n = 0, {
				length: i
			} = e; n < i; n++) {
			let {
				parentNode: a
			} = e[n];
			if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
			r.push(a);
			let s = a.firstElementChild;
			for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
		}
		return t
	}

	function Hh(e) {
		return e != null && typeof e == "object" ? e instanceof Element ? IQ : AQ : null
	}
	var rA, Vh, tA, IQ, AQ, nA, Ci, iA = pe(() => {
		"use strict";
		rA = oe(Mr());
		Ze();
		({
			ELEMENT_MATCHES: Vh
		} = rA.IX2BrowserSupport), {
			IX2_ID_DELIMITER: tA,
			HTML_ELEMENT: IQ,
			PLAIN_OBJECT: AQ,
			WF_PAGE: nA
		} = Be;
		Ci = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[Vh] && r[Vh](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		}
	});
	var jh = E((_ue, sA) => {
		var LQ = At(),
			aA = Object.create,
			kQ = function() {
				function e() {}
				return function(t) {
					if (!LQ(t)) return {};
					if (aA) return aA(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		sA.exports = kQ
	});
	var Ms = E((xue, oA) => {
		function NQ() {}
		oA.exports = NQ
	});
	var Os = E((Tue, lA) => {
		var BQ = jh(),
			VQ = Ms();

		function Fs(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		Fs.prototype = BQ(VQ.prototype);
		Fs.prototype.constructor = Fs;
		lA.exports = Fs
	});
	var fA = E((Iue, cA) => {
		var uA = qr(),
			GQ = Cn(),
			zQ = De(),
			hA = uA ? uA.isConcatSpreadable : void 0;

		function HQ(e) {
			return zQ(e) || GQ(e) || !!(hA && e && e[hA])
		}
		cA.exports = HQ
	});
	var mA = E((Aue, dA) => {
		var jQ = Gi(),
			UQ = fA();

		function pA(e, t, r, n, i) {
			var a = -1,
				s = e.length;
			for (r || (r = UQ), i || (i = []); ++a < s;) {
				var o = e[a];
				t > 0 && r(o) ? t > 1 ? pA(o, t - 1, r, n, i) : jQ(i, o) : n || (i[i.length] = o)
			}
			return i
		}
		dA.exports = pA
	});
	var vA = E((Pue, gA) => {
		var WQ = mA();

		function XQ(e) {
			var t = e == null ? 0 : e.length;
			return t ? WQ(e, 1) : []
		}
		gA.exports = XQ
	});
	var EA = E((Cue, yA) => {
		function $Q(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		yA.exports = $Q
	});
	var _A = E((wue, SA) => {
		var KQ = EA(),
			bA = Math.max;

		function YQ(e, t, r) {
			return t = bA(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, a = bA(n.length - t, 0), s = Array(a); ++i < a;) s[i] = n[t + i];
					i = -1;
					for (var o = Array(t + 1); ++i < t;) o[i] = n[i];
					return o[t] = r(s), KQ(e, this, o)
				}
		}
		SA.exports = YQ
	});
	var TA = E((Mue, xA) => {
		function QQ(e) {
			return function() {
				return e
			}
		}
		xA.exports = QQ
	});
	var PA = E((Fue, AA) => {
		var ZQ = TA(),
			IA = Ph(),
			JQ = Ji(),
			eZ = IA ? function(e, t) {
				return IA(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: ZQ(t),
					writable: !0
				})
			} : JQ;
		AA.exports = eZ
	});
	var wA = E((Oue, CA) => {
		var tZ = 800,
			rZ = 16,
			nZ = Date.now;

		function iZ(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = nZ(),
					i = rZ - (n - r);
				if (r = n, i > 0) {
					if (++t >= tZ) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		CA.exports = iZ
	});
	var FA = E((Due, MA) => {
		var aZ = PA(),
			sZ = wA(),
			oZ = sZ(aZ);
		MA.exports = oZ
	});
	var DA = E((Rue, OA) => {
		var lZ = vA(),
			uZ = _A(),
			hZ = FA();

		function cZ(e) {
			return hZ(uZ(e, void 0, lZ), e + "")
		}
		OA.exports = cZ
	});
	var LA = E((que, qA) => {
		var RA = fo(),
			fZ = RA && new RA;
		qA.exports = fZ
	});
	var NA = E((Lue, kA) => {
		function pZ() {}
		kA.exports = pZ
	});
	var Uh = E((kue, VA) => {
		var BA = LA(),
			dZ = NA(),
			mZ = BA ? function(e) {
				return BA.get(e)
			} : dZ;
		VA.exports = mZ
	});
	var zA = E((Nue, GA) => {
		var gZ = {};
		GA.exports = gZ
	});
	var Wh = E((Bue, jA) => {
		var HA = zA(),
			vZ = Object.prototype,
			yZ = vZ.hasOwnProperty;

		function EZ(e) {
			for (var t = e.name + "", r = HA[t], n = yZ.call(HA, t) ? r.length : 0; n--;) {
				var i = r[n],
					a = i.func;
				if (a == null || a == e) return i.name
			}
			return t
		}
		jA.exports = EZ
	});
	var Rs = E((Vue, UA) => {
		var bZ = jh(),
			SZ = Ms(),
			_Z = 4294967295;

		function Ds(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _Z, this.__views__ = []
		}
		Ds.prototype = bZ(SZ.prototype);
		Ds.prototype.constructor = Ds;
		UA.exports = Ds
	});
	var XA = E((Gue, WA) => {
		function xZ(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		WA.exports = xZ
	});
	var KA = E((zue, $A) => {
		var TZ = Rs(),
			IZ = Os(),
			AZ = XA();

		function PZ(e) {
			if (e instanceof TZ) return e.clone();
			var t = new IZ(e.__wrapped__, e.__chain__);
			return t.__actions__ = AZ(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		$A.exports = PZ
	});
	var ZA = E((Hue, QA) => {
		var CZ = Rs(),
			YA = Os(),
			wZ = Ms(),
			MZ = De(),
			FZ = Lt(),
			OZ = KA(),
			DZ = Object.prototype,
			RZ = DZ.hasOwnProperty;

		function qs(e) {
			if (FZ(e) && !MZ(e) && !(e instanceof CZ)) {
				if (e instanceof YA) return e;
				if (RZ.call(e, "__wrapped__")) return OZ(e)
			}
			return new YA(e)
		}
		qs.prototype = wZ.prototype;
		qs.prototype.constructor = qs;
		QA.exports = qs
	});
	var eP = E((jue, JA) => {
		var qZ = Rs(),
			LZ = Uh(),
			kZ = Wh(),
			NZ = ZA();

		function BZ(e) {
			var t = kZ(e),
				r = NZ[t];
			if (typeof r != "function" || !(t in qZ.prototype)) return !1;
			if (e === r) return !0;
			var n = LZ(r);
			return !!n && e === n[0]
		}
		JA.exports = BZ
	});
	var iP = E((Uue, nP) => {
		var tP = Os(),
			VZ = DA(),
			GZ = Uh(),
			Xh = Wh(),
			zZ = De(),
			rP = eP(),
			HZ = "Expected a function",
			jZ = 8,
			UZ = 32,
			WZ = 128,
			XZ = 256;

		function $Z(e) {
			return VZ(function(t) {
				var r = t.length,
					n = r,
					i = tP.prototype.thru;
				for (e && t.reverse(); n--;) {
					var a = t[n];
					if (typeof a != "function") throw new TypeError(HZ);
					if (i && !s && Xh(a) == "wrapper") var s = new tP([], !0)
				}
				for (n = s ? n : r; ++n < r;) {
					a = t[n];
					var o = Xh(a),
						l = o == "wrapper" ? GZ(a) : void 0;
					l && rP(l[0]) && l[1] == (WZ | jZ | UZ | XZ) && !l[4].length && l[9] == 1 ? s = s[Xh(l[0])].apply(s, l[3]) : s = a.length == 1 && rP(a) ? s[o]() : s.thru(a)
				}
				return function() {
					var c = arguments,
						u = c[0];
					if (s && c.length == 1 && zZ(u)) return s.plant(u).value();
					for (var f = 0, m = r ? t[f].apply(this, c) : u; ++f < r;) m = t[f].call(this, m);
					return m
				}
			})
		}
		nP.exports = $Z
	});
	var sP = E((Wue, aP) => {
		var KZ = iP(),
			YZ = KZ();
		aP.exports = YZ
	});
	var lP = E((Xue, oP) => {
		function QZ(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		oP.exports = QZ
	});
	var hP = E(($ue, uP) => {
		var ZZ = lP(),
			$h = ea();

		function JZ(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = $h(r), r = r === r ? r : 0), t !== void 0 && (t = $h(t), t = t === t ? t : 0), ZZ($h(e), t, r)
		}
		uP.exports = JZ
	});
	var EP, bP, SP, _P, eJ, tJ, rJ, nJ, iJ, aJ, sJ, oJ, lJ, uJ, hJ, cJ, fJ, pJ, dJ, xP, TP, mJ, gJ, vJ, IP, yJ, EJ, AP, bJ, Kh, PP, cP, fP, CP, Mi, SJ, qt, wP, _J, et, _t, Fi, MP, Yh, pP, Qh, xJ, wi, TJ, IJ, AJ, FP, dP, PJ, mP, CJ, wJ, MJ, gP, Ls, ks, vP, yP, OP, DP = pe(() => {
		"use strict";
		EP = oe(sP()), bP = oe(Zi()), SP = oe(hP());
		Ze();
		Zh();
		ws();
		_P = oe(Mr()), {
			MOUSE_CLICK: eJ,
			MOUSE_SECOND_CLICK: tJ,
			MOUSE_DOWN: rJ,
			MOUSE_UP: nJ,
			MOUSE_OVER: iJ,
			MOUSE_OUT: aJ,
			DROPDOWN_CLOSE: sJ,
			DROPDOWN_OPEN: oJ,
			SLIDER_ACTIVE: lJ,
			SLIDER_INACTIVE: uJ,
			TAB_ACTIVE: hJ,
			TAB_INACTIVE: cJ,
			NAVBAR_CLOSE: fJ,
			NAVBAR_OPEN: pJ,
			MOUSE_MOVE: dJ,
			PAGE_SCROLL_DOWN: xP,
			SCROLL_INTO_VIEW: TP,
			SCROLL_OUT_OF_VIEW: mJ,
			PAGE_SCROLL_UP: gJ,
			SCROLLING_IN_VIEW: vJ,
			PAGE_FINISH: IP,
			ECOMMERCE_CART_CLOSE: yJ,
			ECOMMERCE_CART_OPEN: EJ,
			PAGE_START: AP,
			PAGE_SCROLL: bJ
		} = bt, Kh = "COMPONENT_ACTIVE", PP = "COMPONENT_INACTIVE", {
			COLON_DELIMITER: cP
		} = Be, {
			getNamespacedParameterId: fP
		} = _P.IX2VanillaUtils, CP = e => t => typeof t == "object" && e(t) ? !0 : t, Mi = CP(({
			element: e,
			nativeEvent: t
		}) => e === t.target), SJ = CP(({
			element: e,
			nativeEvent: t
		}) => e.contains(t.target)), qt = (0, EP.default)([Mi, SJ]), wP = (e, t) => {
			if (t) {
				let {
					ixData: r
				} = e.getState(), {
					events: n
				} = r, i = n[t];
				if (i && !xJ[i.eventTypeId]) return i
			}
			return null
		}, _J = ({
			store: e,
			event: t
		}) => {
			let {
				action: r
			} = t, {
				autoStopEventId: n
			} = r.config;
			return !!wP(e, n)
		}, et = ({
			store: e,
			event: t,
			element: r,
			eventStateKey: n
		}, i) => {
			let {
				action: a,
				id: s
			} = t, {
				actionListId: o,
				autoStopEventId: l
			} = a.config, c = wP(e, l);
			return c && En({
				store: e,
				eventId: l,
				eventTarget: r,
				eventStateKey: l + cP + n.split(cP)[1],
				actionListId: (0, bP.default)(c, "action.config.actionListId")
			}), En({
				store: e,
				eventId: s,
				eventTarget: r,
				eventStateKey: n,
				actionListId: o
			}), Oi({
				store: e,
				eventId: s,
				eventTarget: r,
				eventStateKey: n,
				actionListId: o
			}), i
		}, _t = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Fi = {
			handler: _t(qt, et)
		}, MP = {
			...Fi,
			types: [Kh, PP].join(" ")
		}, Yh = [{
			target: window,
			types: "resize orientationchange",
			throttle: !0
		}, {
			target: document,
			types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
			throttle: !0
		}], pP = "mouseover mouseout", Qh = {
			types: Yh
		}, xJ = {
			PAGE_START: AP,
			PAGE_FINISH: IP
		}, wi = (() => {
			let e = window.pageXOffset !== void 0,
				r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
			return () => ({
				scrollLeft: e ? window.pageXOffset : r.scrollLeft,
				scrollTop: e ? window.pageYOffset : r.scrollTop,
				stiffScrollTop: (0, SP.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
				scrollWidth: r.scrollWidth,
				scrollHeight: r.scrollHeight,
				clientWidth: r.clientWidth,
				clientHeight: r.clientHeight,
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			})
		})(), TJ = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), IJ = ({
			element: e,
			nativeEvent: t
		}) => {
			let {
				type: r,
				target: n,
				relatedTarget: i
			} = t, a = e.contains(n);
			if (r === "mouseover" && a) return !0;
			let s = e.contains(i);
			return !!(r === "mouseout" && a && s)
		}, AJ = e => {
			let {
				element: t,
				event: {
					config: r
				}
			} = e, {
				clientWidth: n,
				clientHeight: i
			} = wi(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
			return TJ(t.getBoundingClientRect(), {
				left: 0,
				top: l,
				right: n,
				bottom: i - l
			})
		}, FP = e => (t, r) => {
			let {
				type: n
			} = t.nativeEvent, i = [Kh, PP].indexOf(n) !== -1 ? n === Kh : r.isActive, a = {
				...r,
				isActive: i
			};
			return (!r || a.isActive !== r.isActive) && e(t, a) || a
		}, dP = e => (t, r) => {
			let n = {
				elementHovered: IJ(t)
			};
			return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
		}, PJ = e => (t, r) => {
			let n = {
				...r,
				elementVisible: AJ(t)
			};
			return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
		}, mP = e => (t, r = {}) => {
			let {
				stiffScrollTop: n,
				scrollHeight: i,
				innerHeight: a
			} = wi(), {
				event: {
					config: s,
					eventTypeId: o
				}
			} = t, {
				scrollOffsetValue: l,
				scrollOffsetUnit: c
			} = s, u = c === "PX", f = i - a, m = Number((n / f).toFixed(2));
			if (r && r.percentTop === m) return r;
			let d = (u ? l : a * (l || 0) / 100) / f,
				p, g, h = 0;
			r && (p = m > r.percentTop, g = r.scrollingDown !== p, h = g ? m : r.anchorTop);
			let v = o === xP ? m >= h + d : m <= h - d,
				y = {
					...r,
					percentTop: m,
					inBounds: v,
					anchorTop: h,
					scrollingDown: p
				};
			return r && v && (g || y.inBounds !== r.inBounds) && e(t, y) || y
		}, CJ = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, wJ = e => (t, r) => {
			let n = {
				finished: document.readyState === "complete"
			};
			return n.finished && !(r && r.finshed) && e(t), n
		}, MJ = e => (t, r) => {
			let n = {
				started: !0
			};
			return r || e(t), n
		}, gP = e => (t, r = {
			clickCount: 0
		}) => {
			let n = {
				clickCount: r.clickCount % 2 + 1
			};
			return n.clickCount !== r.clickCount && e(t, n) || n
		}, Ls = (e = !0) => ({
			...MP,
			handler: _t(e ? qt : Mi, FP((t, r) => r.isActive ? Fi.handler(t, r) : r))
		}), ks = (e = !0) => ({
			...MP,
			handler: _t(e ? qt : Mi, FP((t, r) => r.isActive ? r : Fi.handler(t, r)))
		}), vP = {
			...Qh,
			handler: PJ((e, t) => {
				let {
					elementVisible: r
				} = t, {
					event: n,
					store: i
				} = e, {
					ixData: a
				} = i.getState(), {
					events: s
				} = a;
				return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === TP === r ? (et(e), {
					...t,
					triggered: !0
				}) : t
			})
		}, yP = .05, OP = {
			[lJ]: Ls(),
			[uJ]: ks(),
			[oJ]: Ls(),
			[sJ]: ks(),
			[pJ]: Ls(!1),
			[fJ]: ks(!1),
			[hJ]: Ls(),
			[cJ]: ks(),
			[EJ]: {
				types: "ecommerce-cart-open",
				handler: _t(qt, et)
			},
			[yJ]: {
				types: "ecommerce-cart-close",
				handler: _t(qt, et)
			},
			[eJ]: {
				types: "click",
				handler: _t(qt, gP((e, {
					clickCount: t
				}) => {
					_J(e) ? t === 1 && et(e) : et(e)
				}))
			},
			[tJ]: {
				types: "click",
				handler: _t(qt, gP((e, {
					clickCount: t
				}) => {
					t === 2 && et(e)
				}))
			},
			[rJ]: {
				...Fi,
				types: "mousedown"
			},
			[nJ]: {
				...Fi,
				types: "mouseup"
			},
			[iJ]: {
				types: pP,
				handler: _t(qt, dP((e, t) => {
					t.elementHovered && et(e)
				}))
			},
			[aJ]: {
				types: pP,
				handler: _t(qt, dP((e, t) => {
					t.elementHovered || et(e)
				}))
			},
			[dJ]: {
				types: "mousemove mouseout scroll",
				handler: ({
					store: e,
					element: t,
					eventConfig: r,
					nativeEvent: n,
					eventStateKey: i
				}, a = {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0
				}) => {
					let {
						basedOn: s,
						selectedAxis: o,
						continuousParameterGroupId: l,
						reverse: c,
						restingState: u = 0
					} = r, {
						clientX: f = a.clientX,
						clientY: m = a.clientY,
						pageX: d = a.pageX,
						pageY: p = a.pageY
					} = n, g = o === "X_AXIS", h = n.type === "mouseout", v = u / 100, y = l, b = !1;
					switch (s) {
						case Ot.VIEWPORT: {
							v = g ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
							break
						}
						case Ot.PAGE: {
							let {
								scrollLeft: S,
								scrollTop: _,
								scrollWidth: T,
								scrollHeight: x
							} = wi();
							v = g ? Math.min(S + d, T) / T : Math.min(_ + p, x) / x;
							break
						}
						case Ot.ELEMENT:
						default: {
							y = fP(i, l);
							let S = n.type.indexOf("mouse") === 0;
							if (S && qt({
									element: t,
									nativeEvent: n
								}) !== !0) break;
							let _ = t.getBoundingClientRect(),
								{
									left: T,
									top: x,
									width: P,
									height: D
								} = _;
							if (!S && !CJ({
									left: f,
									top: m
								}, _)) break;
							b = !0, v = g ? (f - T) / P : (m - x) / D;
							break
						}
					}
					return h && (v > 1 - yP || v < yP) && (v = Math.round(v)), (s !== Ot.ELEMENT || b || b !== a.elementHovered) && (v = c ? 1 - v : v, e.dispatch(vn(y, v))), {
						elementHovered: b,
						clientX: f,
						clientY: m,
						pageX: d,
						pageY: p
					}
				}
			},
			[bJ]: {
				types: Yh,
				handler: ({
					store: e,
					eventConfig: t
				}) => {
					let {
						continuousParameterGroupId: r,
						reverse: n
					} = t, {
						scrollTop: i,
						scrollHeight: a,
						clientHeight: s
					} = wi(), o = i / (a - s);
					o = n ? 1 - o : o, e.dispatch(vn(r, o))
				}
			},
			[vJ]: {
				types: Yh,
				handler: ({
					element: e,
					store: t,
					eventConfig: r,
					eventStateKey: n
				}, i = {
					scrollPercent: 0
				}) => {
					let {
						scrollLeft: a,
						scrollTop: s,
						scrollWidth: o,
						scrollHeight: l,
						clientHeight: c
					} = wi(), {
						basedOn: u,
						selectedAxis: f,
						continuousParameterGroupId: m,
						startsEntering: d,
						startsExiting: p,
						addEndOffset: g,
						addStartOffset: h,
						addOffsetValue: v = 0,
						endOffsetValue: y = 0
					} = r, b = f === "X_AXIS";
					if (u === Ot.VIEWPORT) {
						let S = b ? a / o : s / l;
						return S !== i.scrollPercent && t.dispatch(vn(m, S)), {
							scrollPercent: S
						}
					} else {
						let S = fP(n, m),
							_ = e.getBoundingClientRect(),
							T = (h ? v : 0) / 100,
							x = (g ? y : 0) / 100;
						T = d ? T : 1 - T, x = p ? x : 1 - x;
						let P = _.top + Math.min(_.height * T, c),
							w = _.top + _.height * x - P,
							C = Math.min(c + w, l),
							F = Math.min(Math.max(0, c - P), C) / C;
						return F !== i.scrollPercent && t.dispatch(vn(S, F)), {
							scrollPercent: F
						}
					}
				}
			},
			[TP]: vP,
			[mJ]: vP,
			[xP]: {
				...Qh,
				handler: mP((e, t) => {
					t.scrollingDown && et(e)
				})
			},
			[gJ]: {
				...Qh,
				handler: mP((e, t) => {
					t.scrollingDown || et(e)
				})
			},
			[IP]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: _t(Mi, wJ(et))
			},
			[AP]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: _t(Mi, MJ(et))
			}
		}
	});
	var YP = {};
	ze(YP, {
		observeRequests: () => YJ,
		startActionGroup: () => Oi,
		startEngine: () => Hs,
		stopActionGroup: () => En,
		stopAllActionGroups: () => XP,
		stopEngine: () => js
	});

	function YJ(e) {
		Fr({
			store: e,
			select: ({
				ixRequest: t
			}) => t.preview,
			onChange: JJ
		}), Fr({
			store: e,
			select: ({
				ixRequest: t
			}) => t.playback,
			onChange: eee
		}), Fr({
			store: e,
			select: ({
				ixRequest: t
			}) => t.stop,
			onChange: tee
		}), Fr({
			store: e,
			select: ({
				ixRequest: t
			}) => t.clear,
			onChange: ree
		})
	}

	function QJ(e) {
		Fr({
			store: e,
			select: ({
				ixSession: t
			}) => t.mediaQueryKey,
			onChange: () => {
				js(e), HP({
					store: e,
					elementApi: $e
				}), Hs({
					store: e,
					allowEvents: !0
				}), jP()
			}
		})
	}

	function ZJ(e, t) {
		let r = Fr({
			store: e,
			select: ({
				ixSession: n
			}) => n.tick,
			onChange: n => {
				t(n), r()
			}
		})
	}

	function JJ({
		rawData: e,
		defer: t
	}, r) {
		let n = () => {
			Hs({
				store: r,
				rawData: e,
				allowEvents: !0
			}), jP()
		};
		t ? setTimeout(n, 0) : n()
	}

	function jP() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
	}

	function eee(e, t) {
		let {
			actionTypeId: r,
			actionListId: n,
			actionItemId: i,
			eventId: a,
			allowEvents: s,
			immediate: o,
			testManual: l,
			verbose: c = !0
		} = e, {
			rawData: u
		} = e;
		if (n && i && u && o) {
			let f = u.actionLists[n];
			f && (u = BJ({
				actionList: f,
				actionItemId: i,
				rawData: u
			}))
		}
		if (Hs({
				store: t,
				rawData: u,
				allowEvents: s,
				testManual: l
			}), n && r === Qe.GENERAL_START_ACTION || Jh(r)) {
			En({
				store: t,
				actionListId: n
			}), WP({
				store: t,
				actionListId: n,
				eventId: a
			});
			let f = Oi({
				store: t,
				eventId: a,
				actionListId: n,
				immediate: o,
				verbose: c
			});
			c && f && t.dispatch(yn({
				actionListId: n,
				isPlaying: !o
			}))
		}
	}

	function tee({
		actionListId: e
	}, t) {
		e ? En({
			store: t,
			actionListId: e
		}) : XP({
			store: t
		}), js(t)
	}

	function ree(e, t) {
		js(t), HP({
			store: t,
			elementApi: $e
		})
	}

	function Hs({
		store: e,
		rawData: t,
		allowEvents: r,
		testManual: n
	}) {
		let {
			ixSession: i
		} = e.getState();
		t && e.dispatch(Mh(t)), i.active || (e.dispatch(Fh({
			hasBoundaryNodes: !!document.querySelector(Bs),
			reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
		})), r && (lee(e), nee(), e.getState().ixSession.hasDefinedMediaQueries && QJ(e)), e.dispatch(Oh()), iee(e, n))
	}

	function nee() {
		let {
			documentElement: e
		} = document;
		e.className.indexOf(RP) === -1 && (e.className += ` ${RP}`)
	}

	function iee(e, t) {
		let r = n => {
			let {
				ixSession: i,
				ixParameters: a
			} = e.getState();
			i.active && (e.dispatch(Ps(n, a)), t ? ZJ(e, r) : requestAnimationFrame(r))
		};
		r(window.performance.now())
	}

	function js(e) {
		let {
			ixSession: t
		} = e.getState();
		if (t.active) {
			let {
				eventListeners: r
			} = t;
			r.forEach(aee), HJ(), e.dispatch(Dh())
		}
	}

	function aee({
		target: e,
		listenerParams: t
	}) {
		e.removeEventListener.apply(e, t)
	}

	function see({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: a,
		parameterGroup: s,
		smoothing: o,
		restingValue: l
	}) {
		let {
			ixData: c,
			ixSession: u
		} = e.getState(), {
			events: f
		} = c, m = f[n], {
			eventTypeId: d
		} = m, p = {}, g = {}, h = [], {
			continuousActionGroups: v
		} = s, {
			id: y
		} = s;
		VJ(d, i) && (y = GJ(t, y));
		let b = u.hasBoundaryNodes && r ? Ci(r, Bs) : null;
		v.forEach(S => {
			let {
				keyframe: _,
				actionItems: T
			} = S;
			T.forEach(x => {
				let {
					actionTypeId: P
				} = x, {
					target: D
				} = x.config;
				if (!D) return;
				let w = D.boundaryMode ? b : null,
					C = jJ(D) + ec + P;
				if (g[C] = oee(g[C], _, x), !p[C]) {
					p[C] = !0;
					let {
						config: R
					} = x;
					Vs({
						config: R,
						event: m,
						eventTarget: r,
						elementRoot: w,
						elementApi: $e
					}).forEach(F => {
						h.push({
							element: F,
							key: C
						})
					})
				}
			})
		}), h.forEach(({
			element: S,
			key: _
		}) => {
			let T = g[_],
				x = (0, $t.default)(T, "[0].actionItems[0]", {}),
				{
					actionTypeId: P
				} = x,
				D = zs(P) ? rc(P)(S, x) : null,
				w = tc({
					element: S,
					actionItem: x,
					elementApi: $e
				}, D);
			nc({
				store: e,
				element: S,
				eventId: n,
				actionListId: a,
				actionItem: x,
				destination: w,
				continuous: !0,
				parameterId: y,
				actionGroups: T,
				smoothing: o,
				restingValue: l,
				pluginInstance: D
			})
		})
	}

	function oee(e = [], t, r) {
		let n = [...e],
			i;
		return n.some((a, s) => a.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
			keyframe: t,
			actionItems: []
		})), n[i].actionItems.push(r), n
	}

	function lee(e) {
		let {
			ixData: t
		} = e.getState(), {
			eventTypeMap: r
		} = t;
		UP(e), (0, bn.default)(r, (i, a) => {
			let s = OP[a];
			if (!s) {
				console.warn(`IX2 event type not configured: ${a}`);
				return
			}
			dee({
				logic: s,
				store: e,
				events: i
			})
		});
		let {
			ixSession: n
		} = e.getState();
		n.eventListeners.length && hee(e)
	}

	function hee(e) {
		let t = () => {
			UP(e)
		};
		uee.forEach(r => {
			window.addEventListener(r, t), e.dispatch(As(window, [r, t]))
		}), t()
	}

	function UP(e) {
		let {
			ixSession: t,
			ixData: r
		} = e.getState(), n = window.innerWidth;
		if (n !== t.viewportWidth) {
			let {
				mediaQueries: i
			} = r;
			e.dispatch(Nh({
				width: n,
				mediaQueries: i
			}))
		}
	}

	function dee({
		logic: e,
		store: t,
		events: r
	}) {
		mee(r);
		let {
			types: n,
			handler: i
		} = e, {
			ixData: a
		} = t.getState(), {
			actionLists: s
		} = a, o = cee(r, pee);
		if (!(0, kP.default)(o)) return;
		(0, bn.default)(o, (f, m) => {
			let d = r[m],
				{
					action: p,
					id: g,
					mediaQueries: h = a.mediaQueryKeys
				} = d,
				{
					actionListId: v
				} = p.config;
			UJ(h, a.mediaQueryKeys) || t.dispatch(Bh()), p.actionTypeId === Qe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(b => {
				let {
					continuousParameterGroupId: S
				} = b, _ = (0, $t.default)(s, `${v}.continuousParameterGroups`, []), T = (0, LP.default)(_, ({
					id: D
				}) => D === S), x = (b.smoothing || 0) / 100, P = (b.restingState || 0) / 100;
				T && f.forEach((D, w) => {
					let C = g + ec + w;
					see({
						store: t,
						eventStateKey: C,
						eventTarget: D,
						eventId: g,
						eventConfig: b,
						actionListId: v,
						parameterGroup: T,
						smoothing: x,
						restingValue: P
					})
				})
			}), (p.actionTypeId === Qe.GENERAL_START_ACTION || Jh(p.actionTypeId)) && WP({
				store: t,
				actionListId: v,
				eventId: g
			})
		});
		let l = f => {
				let {
					ixSession: m
				} = t.getState();
				fee(o, (d, p, g) => {
					let h = r[p],
						v = m.eventState[g],
						{
							action: y,
							mediaQueries: b = a.mediaQueryKeys
						} = h;
					if (!Gs(b, m.mediaQueryKey)) return;
					let S = (_ = {}) => {
						let T = i({
							store: t,
							element: d,
							event: h,
							eventConfig: _,
							nativeEvent: f,
							eventStateKey: g
						}, v);
						WJ(T, v) || t.dispatch(Rh(g, T))
					};
					y.actionTypeId === Qe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(h.config) ? h.config : [h.config]).forEach(S) : S()
				})
			},
			c = (0, GP.default)(l, KJ),
			u = ({
				target: f = document,
				types: m,
				throttle: d
			}) => {
				m.split(" ").filter(Boolean).forEach(p => {
					let g = d ? c : l;
					f.addEventListener(p, g), t.dispatch(As(f, [p, g]))
				})
			};
		Array.isArray(n) ? n.forEach(u) : typeof n == "string" && u(e)
	}

	function mee(e) {
		if (!$J) return;
		let t = {},
			r = "";
		for (let n in e) {
			let {
				eventTypeId: i,
				target: a
			} = e[n], s = Gh(a);
			t[s] || (i === bt.MOUSE_CLICK || i === bt.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
		}
		if (r) {
			let n = document.createElement("style");
			n.textContent = r, document.body.appendChild(n)
		}
	}

	function WP({
		store: e,
		actionListId: t,
		eventId: r
	}) {
		let {
			ixData: n,
			ixSession: i
		} = e.getState(), {
			actionLists: a,
			events: s
		} = n, o = s[r], l = a[t];
		if (l && l.useFirstGroupAsInitialState) {
			let c = (0, $t.default)(l, "actionItemGroups[0].actionItems", []),
				u = (0, $t.default)(o, "mediaQueries", n.mediaQueryKeys);
			if (!Gs(u, i.mediaQueryKey)) return;
			c.forEach(f => {
				let {
					config: m,
					actionTypeId: d
				} = f, p = m?.target?.useEventTarget === !0 && m?.target?.objectId == null ? {
					target: o.target,
					targets: o.targets
				} : m, g = Vs({
					config: p,
					event: o,
					elementApi: $e
				}), h = zs(d);
				g.forEach(v => {
					let y = h ? rc(d)(v, f) : null;
					nc({
						destination: tc({
							element: v,
							actionItem: f,
							elementApi: $e
						}, y),
						immediate: !0,
						store: e,
						element: v,
						eventId: r,
						actionItem: f,
						actionListId: t,
						pluginInstance: y
					})
				})
			})
		}
	}

	function XP({
		store: e
	}) {
		let {
			ixInstances: t
		} = e.getState();
		(0, bn.default)(t, r => {
			if (!r.continuous) {
				let {
					actionListId: n,
					verbose: i
				} = r;
				ic(r, e), i && e.dispatch(yn({
					actionListId: n,
					isPlaying: !1
				}))
			}
		})
	}

	function En({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i
	}) {
		let {
			ixInstances: a,
			ixSession: s
		} = e.getState(), o = s.hasBoundaryNodes && r ? Ci(r, Bs) : null;
		(0, bn.default)(a, l => {
			let c = (0, $t.default)(l, "actionItem.config.target.boundaryMode"),
				u = n ? l.eventStateKey === n : !0;
			if (l.actionListId === i && l.eventId === t && u) {
				if (o && c && !zh(o, l.element)) return;
				ic(l, e), l.verbose && e.dispatch(yn({
					actionListId: i,
					isPlaying: !1
				}))
			}
		})
	}

	function Oi({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: a = 0,
		immediate: s,
		verbose: o
	}) {
		let {
			ixData: l,
			ixSession: c
		} = e.getState(), {
			events: u
		} = l, f = u[t] || {}, {
			mediaQueries: m = l.mediaQueryKeys
		} = f, d = (0, $t.default)(l, `actionLists.${i}`, {}), {
			actionItemGroups: p,
			useFirstGroupAsInitialState: g
		} = d;
		if (!p || !p.length) return !1;
		a >= p.length && (0, $t.default)(f, "config.loop") && (a = 0), a === 0 && g && a++;
		let v = (a === 0 || a === 1 && g) && Jh(f.action?.actionTypeId) ? f.config.delay : void 0,
			y = (0, $t.default)(p, [a, "actionItems"], []);
		if (!y.length || !Gs(m, c.mediaQueryKey)) return !1;
		let b = c.hasBoundaryNodes && r ? Ci(r, Bs) : null,
			S = LJ(y),
			_ = !1;
		return y.forEach((T, x) => {
			let {
				config: P,
				actionTypeId: D
			} = T, w = zs(D), {
				target: C
			} = P;
			if (!C) return;
			let R = C.boundaryMode ? b : null;
			Vs({
				config: P,
				event: f,
				eventTarget: r,
				elementRoot: R,
				elementApi: $e
			}).forEach((M, N) => {
				let z = w ? rc(D)(M, T) : null,
					$ = w ? XJ(D)(M, T) : null;
				_ = !0;
				let A = S === x && N === 0,
					O = kJ({
						element: M,
						actionItem: T
					}),
					L = tc({
						element: M,
						actionItem: T,
						elementApi: $e
					}, z);
				nc({
					store: e,
					element: M,
					actionItem: T,
					eventId: t,
					eventTarget: r,
					eventStateKey: n,
					actionListId: i,
					groupIndex: a,
					isCarrier: A,
					computedStyle: O,
					destination: L,
					immediate: s,
					verbose: o,
					pluginInstance: z,
					pluginDuration: $,
					instanceDelay: v
				})
			})
		}), _
	}

	function nc(e) {
		let {
			store: t,
			computedStyle: r,
			...n
		} = e, {
			element: i,
			actionItem: a,
			immediate: s,
			pluginInstance: o,
			continuous: l,
			restingValue: c,
			eventId: u
		} = n, f = !l, m = RJ(), {
			ixElements: d,
			ixSession: p,
			ixData: g
		} = t.getState(), h = DJ(d, i), {
			refState: v
		} = d[h] || {}, y = Hh(i), b = p.reducedMotion && Ku[a.actionTypeId], S;
		if (b && l) switch (g.events[u]?.eventTypeId) {
			case bt.MOUSE_MOVE:
			case bt.MOUSE_MOVE_IN_VIEWPORT:
				S = c;
				break;
			default:
				S = .5;
				break
		}
		let _ = NJ(i, v, r, a, $e, o);
		if (t.dispatch(qh({
				instanceId: m,
				elementId: h,
				origin: _,
				refType: y,
				skipMotion: b,
				skipToValue: S,
				...n
			})), $P(document.body, "ix2-animation-started", m), s) {
			gee(t, m);
			return
		}
		Fr({
			store: t,
			select: ({
				ixInstances: T
			}) => T[m],
			onChange: KP
		}), f && t.dispatch(Cs(m, p.tick))
	}

	function ic(e, t) {
		$P(document.body, "ix2-animation-stopping", {
			instanceId: e.id,
			state: t.getState()
		});
		let {
			elementId: r,
			actionItem: n
		} = e, {
			ixElements: i
		} = t.getState(), {
			ref: a,
			refType: s
		} = i[r] || {};
		s === zP && zJ(a, n, $e), t.dispatch(Lh(e.id))
	}

	function $P(e, t, r) {
		let n = document.createEvent("CustomEvent");
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
	}

	function gee(e, t) {
		let {
			ixParameters: r
		} = e.getState();
		e.dispatch(Cs(t, 0)), e.dispatch(Ps(performance.now(), r));
		let {
			ixInstances: n
		} = e.getState();
		KP(n[t], e)
	}

	function KP(e, t) {
		let {
			active: r,
			continuous: n,
			complete: i,
			elementId: a,
			actionItem: s,
			actionTypeId: o,
			renderType: l,
			current: c,
			groupIndex: u,
			eventId: f,
			eventTarget: m,
			eventStateKey: d,
			actionListId: p,
			isCarrier: g,
			styleProp: h,
			verbose: v,
			pluginInstance: y
		} = e, {
			ixData: b,
			ixSession: S
		} = t.getState(), {
			events: _
		} = b, T = _[f] || {}, {
			mediaQueries: x = b.mediaQueryKeys
		} = T;
		if (Gs(x, S.mediaQueryKey) && (n || r || i)) {
			if (c || l === OJ && i) {
				t.dispatch(kh(a, o, c, s));
				let {
					ixElements: P
				} = t.getState(), {
					ref: D,
					refType: w,
					refState: C
				} = P[a] || {}, R = C && C[o];
				(w === zP || zs(o)) && qJ(D, C, R, f, s, h, $e, l, y)
			}
			if (i) {
				if (g) {
					let P = Oi({
						store: t,
						eventId: f,
						eventTarget: m,
						eventStateKey: d,
						actionListId: p,
						groupIndex: u + 1,
						verbose: v
					});
					v && !P && t.dispatch(yn({
						actionListId: p,
						isPlaying: !1
					}))
				}
				ic(e, t)
			}
		}
	}
	var LP, $t, kP, NP, BP, VP, bn, GP, Ns, FJ, Jh, ec, Bs, zP, OJ, RP, Vs, DJ, tc, Fr, RJ, qJ, HP, LJ, kJ, NJ, BJ, VJ, GJ, Gs, zJ, HJ, jJ, UJ, WJ, zs, rc, XJ, qP, $J, KJ, uee, cee, fee, pee, Zh = pe(() => {
		"use strict";
		LP = oe(Zu()), $t = oe(Zi()), kP = oe(uI()), NP = oe(qI()), BP = oe(kI()), VP = oe(BI()), bn = oe(UI()), GP = oe(ZI());
		Ze();
		Ns = oe(Mr());
		ws();
		iA();
		DP();
		FJ = Object.keys(is), Jh = e => FJ.includes(e), {
			COLON_DELIMITER: ec,
			BOUNDARY_SELECTOR: Bs,
			HTML_ELEMENT: zP,
			RENDER_GENERAL: OJ,
			W_MOD_IX: RP
		} = Be, {
			getAffectedElements: Vs,
			getElementId: DJ,
			getDestinationValues: tc,
			observeStore: Fr,
			getInstanceId: RJ,
			renderHTMLElement: qJ,
			clearAllStyles: HP,
			getMaxDurationItemIndex: LJ,
			getComputedStyle: kJ,
			getInstanceOrigin: NJ,
			reduceListToGroup: BJ,
			shouldNamespaceEventParameter: VJ,
			getNamespacedParameterId: GJ,
			shouldAllowMediaQuery: Gs,
			cleanupHTMLElement: zJ,
			clearObjectCache: HJ,
			stringifyTarget: jJ,
			mediaQueriesEqual: UJ,
			shallowEqual: WJ
		} = Ns.IX2VanillaUtils, {
			isPluginType: zs,
			createPluginInstance: rc,
			getPluginDuration: XJ
		} = Ns.IX2VanillaPlugins, qP = navigator.userAgent, $J = qP.match(/iPad/i) || qP.match(/iPhone/), KJ = 12;
		uee = ["resize", "orientationchange"];
		cee = (e, t) => (0, NP.default)((0, VP.default)(e, t), BP.default), fee = (e, t) => {
			(0, bn.default)(e, (r, n) => {
				r.forEach((i, a) => {
					let s = n + ec + a;
					t(i, n, s)
				})
			})
		}, pee = e => {
			let t = {
				target: e.target,
				targets: e.targets
			};
			return Vs({
				config: t,
				elementApi: $e
			})
		}
	});
	var ZP = E(Kt => {
		"use strict";
		var vee = ns().default,
			yee = Au().default;
		Object.defineProperty(Kt, "__esModule", {
			value: !0
		});
		Kt.actions = void 0;
		Kt.destroy = QP;
		Kt.init = xee;
		Kt.setEnv = _ee;
		Kt.store = void 0;
		D_();
		var Eee = Wu(),
			bee = yee((jT(), ft(HT))),
			ac = (Zh(), ft(YP)),
			See = vee((ws(), ft(eA)));
		Kt.actions = See;
		var sc = Kt.store = (0, Eee.createStore)(bee.default);

		function _ee(e) {
			e() && (0, ac.observeRequests)(sc)
		}

		function xee(e) {
			QP(), (0, ac.startEngine)({
				store: sc,
				rawData: e,
				allowEvents: !0
			})
		}

		function QP() {
			(0, ac.stopEngine)(sc)
		}
	});
	var rC = E((nhe, tC) => {
		"use strict";
		var JP = rt(),
			eC = ZP();
		eC.setEnv(JP.env);
		JP.define("ix2", tC.exports = function() {
			return eC
		})
	});
	var iC = E((ihe, nC) => {
		"use strict";
		var Sn = rt();
		Sn.define("links", nC.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, a = Sn.env(),
				s = window.location,
				o = document.createElement("a"),
				l = "w--current",
				c = /index\.(html|php)$/,
				u = /\/$/,
				f, m;
			r.ready = r.design = r.preview = d;

			function d() {
				i = a && Sn.env("design"), m = Sn.env("slug") || s.pathname || "", Sn.scroll.off(g), f = [];
				for (var v = document.links, y = 0; y < v.length; ++y) p(v[y]);
				f.length && (Sn.scroll.on(g), g())
			}

			function p(v) {
				if (!v.getAttribute("hreflang")) {
					var y = i && v.getAttribute("href-disabled") || v.getAttribute("href");
					if (o.href = y, !(y.indexOf(":") >= 0)) {
						var b = e(v);
						if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
							if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
							var S = e(o.hash);
							S.length && f.push({
								link: b,
								sec: S,
								active: !1
							});
							return
						}
						if (!(y === "#" || y === "")) {
							var _ = o.href === s.href || y === m || c.test(y) && u.test(m);
							h(b, l, _)
						}
					}
				}
			}

			function g() {
				var v = n.scrollTop(),
					y = n.height();
				t.each(f, function(b) {
					if (!b.link.attr("hreflang")) {
						var S = b.link,
							_ = b.sec,
							T = _.offset().top,
							x = _.outerHeight(),
							P = y * .5,
							D = _.is(":visible") && T + x - P >= v && T + P <= v + y;
						b.active !== D && (b.active = D, h(S, l, D))
					}
				})
			}

			function h(v, y, b) {
				var S = v.hasClass(y);
				b && S || !b && !S || (b ? v.addClass(y) : v.removeClass(y))
			}
			return r
		})
	});
	var sC = E((ahe, aC) => {
		"use strict";
		var Us = rt();
		Us.define("scroll", aC.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = p() ? null : window.history,
				i = e(window),
				a = e(document),
				s = e(document.body),
				o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(R) {
					window.setTimeout(R, 15)
				},
				l = Us.env("editor") ? ".w-editor-body" : "body",
				c = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
				u = 'a[href="#"]',
				f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
				m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				d = document.createElement("style");
			d.appendChild(document.createTextNode(m));

			function p() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var g = /^#[a-zA-Z0-9][\w:.-]*$/;

			function h(R) {
				return g.test(R.hash) && R.host + R.pathname === r.host + r.pathname
			}
			let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function y() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches
			}

			function b(R, F) {
				var M;
				switch (F) {
					case "add":
						M = R.attr("tabindex"), M ? R.attr("data-wf-tabindex-swap", M) : R.attr("tabindex", "-1");
						break;
					case "remove":
						M = R.attr("data-wf-tabindex-swap"), M ? (R.attr("tabindex", M), R.removeAttr("data-wf-tabindex-swap")) : R.removeAttr("tabindex");
						break
				}
				R.toggleClass("wf-force-outline-none", F === "add")
			}

			function S(R) {
				var F = R.currentTarget;
				if (!(Us.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(F.className))) {
					var M = h(F) ? F.hash : "";
					if (M !== "") {
						var N = e(M);
						N.length && (R && (R.preventDefault(), R.stopPropagation()), _(M, R), window.setTimeout(function() {
							T(N, function() {
								b(N, "add"), N.get(0).focus({
									preventScroll: !0
								}), b(N, "remove")
							})
						}, R ? 0 : 300))
					}
				}
			}

			function _(R) {
				if (r.hash !== R && n && n.pushState && !(Us.env.chrome && r.protocol === "file:")) {
					var F = n.state && n.state.hash;
					F !== R && n.pushState({
						hash: R
					}, "", R)
				}
			}

			function T(R, F) {
				var M = i.scrollTop(),
					N = x(R);
				if (M !== N) {
					var z = P(R, M, N),
						$ = Date.now(),
						A = function() {
							var O = Date.now() - $;
							window.scroll(0, D(M, N, O, z)), O <= z ? o(A) : typeof F == "function" && F()
						};
					o(A)
				}
			}

			function x(R) {
				var F = e(c),
					M = F.css("position") === "fixed" ? F.outerHeight() : 0,
					N = R.offset().top - M;
				if (R.data("scroll") === "mid") {
					var z = i.height() - M,
						$ = R.outerHeight();
					$ < z && (N -= Math.round((z - $) / 2))
				}
				return N
			}

			function P(R, F, M) {
				if (y()) return 0;
				var N = 1;
				return s.add(R).each(function(z, $) {
					var A = parseFloat($.getAttribute("data-scroll-time"));
					!isNaN(A) && A >= 0 && (N = A)
				}), (472.143 * Math.log(Math.abs(F - M) + 125) - 2e3) * N
			}

			function D(R, F, M, N) {
				return M > N ? F : R + (F - R) * w(M / N)
			}

			function w(R) {
				return R < .5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1
			}

			function C() {
				var {
					WF_CLICK_EMPTY: R,
					WF_CLICK_SCROLL: F
				} = t;
				a.on(F, f, S), a.on(R, u, function(M) {
					M.preventDefault()
				}), document.head.insertBefore(d, document.head.firstChild)
			}
			return {
				ready: C
			}
		})
	});
	var lC = E((she, oC) => {
		"use strict";
		var Tee = rt();
		Tee.define("touch", oC.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(a) {
				return a = typeof a == "string" ? e(a).get(0) : a, a ? new n(a) : null
			};

			function n(a) {
				var s = !1,
					o = !1,
					l = Math.min(Math.round(window.innerWidth * .04), 40),
					c, u;
				a.addEventListener("touchstart", f, !1), a.addEventListener("touchmove", m, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", p, !1), a.addEventListener("mousedown", f, !1), a.addEventListener("mousemove", m, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", p, !1);

				function f(h) {
					var v = h.touches;
					v && v.length > 1 || (s = !0, v ? (o = !0, c = v[0].clientX) : c = h.clientX, u = c)
				}

				function m(h) {
					if (s) {
						if (o && h.type === "mousemove") {
							h.preventDefault(), h.stopPropagation();
							return
						}
						var v = h.touches,
							y = v ? v[0].clientX : h.clientX,
							b = y - u;
						u = y, Math.abs(b) > l && r && String(r()) === "" && (i("swipe", h, {
							direction: b > 0 ? "right" : "left"
						}), p())
					}
				}

				function d(h) {
					if (s && (s = !1, o && h.type === "mouseup")) {
						h.preventDefault(), h.stopPropagation(), o = !1;
						return
					}
				}

				function p() {
					s = !1
				}

				function g() {
					a.removeEventListener("touchstart", f, !1), a.removeEventListener("touchmove", m, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", p, !1), a.removeEventListener("mousedown", f, !1), a.removeEventListener("mousemove", m, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", p, !1), a = null
				}
				this.destroy = g
			}

			function i(a, s, o) {
				var l = e.Event(a, {
					originalEvent: s
				});
				e(s.target).trigger(l, o)
			}
			return t.instance = t.init(document), t
		})
	});
	var uC = E(oc => {
		"use strict";
		Object.defineProperty(oc, "__esModule", {
			value: !0
		});
		oc.default = Iee;

		function Iee(e, t, r, n, i, a, s, o, l, c, u, f, m) {
			return function(d) {
				e(d);
				var p = d.form,
					g = {
						name: p.attr("data-name") || p.attr("name") || "Untitled Form",
						pageId: p.attr("data-wf-page-id") || "",
						elementId: p.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(p.html()),
						trackingCookies: n()
					};
				let h = p.attr("data-wf-flow");
				h && (g.wfFlow = h), i(d);
				var v = a(p, g.fields);
				if (v) return s(v);
				if (g.fileUploads = o(p), l(d), !c) {
					u(d);
					return
				}
				f.ajax({
					url: m,
					type: "POST",
					data: g,
					dataType: "json",
					crossDomain: !0
				}).done(function(y) {
					y && y.code === 200 && (d.success = !0), u(d)
				}).fail(function() {
					u(d)
				})
			}
		}
	});
	var cC = E((lhe, hC) => {
		"use strict";
		var Ws = rt();
		Ws.define("forms", hC.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, a = window.location,
				s = window.XDomainRequest && !window.atob,
				o = ".w-form",
				l, c = /e(-)?mail/i,
				u = /^\S+@\S+$/,
				f = window.alert,
				m = Ws.env(),
				d, p, g, h = /list-manage[1-9]?.com/i,
				v = t.debounce(function() {
					f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				y(), !m && !d && S()
			};

			function y() {
				l = e("html").attr("data-wf-site"), p = "https://webflow.com/api/v1/form/" + l, s && p.indexOf("https://webflow.com") >= 0 && (p = p.replace("https://webflow.com", "https://formdata.webflow.com")), g = `${p}/signFile`, i = e(o + " form"), i.length && i.each(b)
			}

			function b(O, L) {
				var H = e(L),
					U = e.data(L, o);
				U || (U = e.data(L, o, {
					form: H
				})), _(U);
				var j = H.closest("div.w-form");
				U.done = j.find("> .w-form-done"), U.fail = j.find("> .w-form-fail"), U.fileUploads = j.find(".w-file-upload"), U.fileUploads.each(function(J) {
					z(J, U)
				});
				var Y = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
				U.done.attr("aria-label") || U.form.attr("aria-label", Y), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", Y + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", Y + " failure");
				var Q = U.action = H.attr("action");
				if (U.handler = null, U.redirect = H.attr("data-redirect"), h.test(Q)) {
					U.handler = F;
					return
				}
				if (!Q) {
					if (l) {
						U.handler = (() => {
							let J = uC().default;
							return J(_, a, Ws, w, N, x, f, P, T, l, M, e, p)
						})();
						return
					}
					v()
				}
			}

			function S() {
				d = !0, n.on("submit", o + " form", function(J) {
					var X = e.data(this, o);
					X.handler && (X.evt = J, X.handler(X))
				});
				let O = ".w-checkbox-input",
					L = ".w-radio-input",
					H = "w--redirected-checked",
					U = "w--redirected-focus",
					j = "w--redirected-focus-visible",
					Y = ":focus-visible, [data-wf-focus-visible]",
					Q = [
						["checkbox", O],
						["radio", L]
					];
				n.on("change", o + ' form input[type="checkbox"]:not(' + O + ")", J => {
					e(J.target).siblings(O).toggleClass(H)
				}), n.on("change", o + ' form input[type="radio"]', J => {
					e(`input[name="${J.target.name}"]:not(${O})`).map((re, Ae) => e(Ae).siblings(L).removeClass(H));
					let X = e(J.target);
					X.hasClass("w-radio-input") || X.siblings(L).addClass(H)
				}), Q.forEach(([J, X]) => {
					n.on("focus", o + ` form input[type="${J}"]:not(` + X + ")", re => {
						e(re.target).siblings(X).addClass(U), e(re.target).filter(Y).siblings(X).addClass(j)
					}), n.on("blur", o + ` form input[type="${J}"]:not(` + X + ")", re => {
						e(re.target).siblings(X).removeClass(`${U} ${j}`)
					})
				})
			}

			function _(O) {
				var L = O.btn = O.form.find(':input[type="submit"]');
				O.wait = O.btn.attr("data-wait") || null, O.success = !1, L.prop("disabled", !1), O.label && L.val(O.label)
			}

			function T(O) {
				var L = O.btn,
					H = O.wait;
				L.prop("disabled", !0), H && (O.label = L.val(), L.val(H))
			}

			function x(O, L) {
				var H = null;
				return L = L || {}, O.find(':input:not([type="submit"]):not([type="file"])').each(function(U, j) {
					var Y = e(j),
						Q = Y.attr("type"),
						J = Y.attr("data-name") || Y.attr("name") || "Field " + (U + 1);
					J = encodeURIComponent(J);
					var X = Y.val();
					if (Q === "checkbox") X = Y.is(":checked");
					else if (Q === "radio") {
						if (L[J] === null || typeof L[J] == "string") return;
						X = O.find('input[name="' + Y.attr("name") + '"]:checked').val() || null
					}
					typeof X == "string" && (X = e.trim(X)), L[J] = X, H = H || C(Y, Q, J, X)
				}), H
			}

			function P(O) {
				var L = {};
				return O.find(':input[type="file"]').each(function(H, U) {
					var j = e(U),
						Y = j.attr("data-name") || j.attr("name") || "File " + (H + 1),
						Q = j.attr("data-value");
					typeof Q == "string" && (Q = e.trim(Q)), L[Y] = Q
				}), L
			}
			let D = {
				_mkto_trk: "marketo"
			};

			function w() {
				return document.cookie.split("; ").reduce(function(L, H) {
					let U = H.split("="),
						j = U[0];
					if (j in D) {
						let Y = D[j],
							Q = U.slice(1).join("=");
						L[Y] = Q
					}
					return L
				}, {})
			}

			function C(O, L, H, U) {
				var j = null;
				return L === "password" ? j = "Passwords cannot be submitted." : O.attr("required") ? U ? c.test(O.attr("type")) && (u.test(U) || (j = "Please enter a valid email address for: " + H)) : j = "Please fill out the required field: " + H : H === "g-recaptcha-response" && !U && (j = "Please confirm you\u2019re not a robot."), j
			}

			function R(O) {
				N(O), M(O)
			}

			function F(O) {
				_(O);
				var L = O.form,
					H = {};
				if (/^https/.test(a.href) && !/^https/.test(O.action)) {
					L.attr("method", "post");
					return
				}
				N(O);
				var U = x(L, H);
				if (U) return f(U);
				T(O);
				var j;
				t.each(H, function(X, re) {
					c.test(re) && (H.EMAIL = X), /^((full[ _-]?)?name)$/i.test(re) && (j = X), /^(first[ _-]?name)$/i.test(re) && (H.FNAME = X), /^(last[ _-]?name)$/i.test(re) && (H.LNAME = X)
				}), j && !H.FNAME && (j = j.split(" "), H.FNAME = j[0], H.LNAME = H.LNAME || j[1]);
				var Y = O.action.replace("/post?", "/post-json?") + "&c=?",
					Q = Y.indexOf("u=") + 2;
				Q = Y.substring(Q, Y.indexOf("&", Q));
				var J = Y.indexOf("id=") + 3;
				J = Y.substring(J, Y.indexOf("&", J)), H["b_" + Q + "_" + J] = "", e.ajax({
					url: Y,
					data: H,
					dataType: "jsonp"
				}).done(function(X) {
					O.success = X.result === "success" || /already/.test(X.msg), O.success || console.info("MailChimp error: " + X.msg), M(O)
				}).fail(function() {
					M(O)
				})
			}

			function M(O) {
				var L = O.form,
					H = O.redirect,
					U = O.success;
				if (U && H) {
					Ws.location(H);
					return
				}
				O.done.toggle(U), O.fail.toggle(!U), U ? O.done.focus() : O.fail.focus(), L.toggle(!U), _(O)
			}

			function N(O) {
				O.evt && O.evt.preventDefault(), O.evt = null
			}

			function z(O, L) {
				if (!L.fileUploads || !L.fileUploads[O]) return;
				var H, U = e(L.fileUploads[O]),
					j = U.find("> .w-file-upload-default"),
					Y = U.find("> .w-file-upload-uploading"),
					Q = U.find("> .w-file-upload-success"),
					J = U.find("> .w-file-upload-error"),
					X = j.find(".w-file-upload-input"),
					re = j.find(".w-file-upload-label"),
					Ae = re.children(),
					he = J.find(".w-file-upload-error-msg"),
					Ee = Q.find(".w-file-upload-file"),
					Pe = Q.find(".w-file-remove-link"),
					Te = Ee.find(".w-file-upload-file-name"),
					ne = he.attr("data-w-size-error"),
					Me = he.attr("data-w-type-error"),
					xt = he.attr("data-w-generic-error");
				if (m || re.on("click keydown", function(B) {
						B.type === "keydown" && B.which !== 13 && B.which !== 32 || (B.preventDefault(), X.click())
					}), re.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), Pe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), m) X.on("click", function(B) {
					B.preventDefault()
				}), re.on("click", function(B) {
					B.preventDefault()
				}), Ae.on("click", function(B) {
					B.preventDefault()
				});
				else {
					Pe.on("click keydown", function(B) {
						if (B.type === "keydown") {
							if (B.which !== 13 && B.which !== 32) return;
							B.preventDefault()
						}
						X.removeAttr("data-value"), X.val(""), Te.html(""), j.toggle(!0), Q.toggle(!1), re.focus()
					}), X.on("change", function(B) {
						H = B.target && B.target.files && B.target.files[0], H && (j.toggle(!1), J.toggle(!1), Y.toggle(!0), Y.focus(), Te.text(H.name), G() || T(L), L.fileUploads[O].uploading = !0, $(H, q))
					});
					var tt = re.outerHeight();
					X.height(tt), X.width(1)
				}

				function I(B) {
					var V = B.responseJSON && B.responseJSON.msg,
						K = xt;
					typeof V == "string" && V.indexOf("InvalidFileTypeError") === 0 ? K = Me : typeof V == "string" && V.indexOf("MaxFileSizeError") === 0 && (K = ne), he.text(K), X.removeAttr("data-value"), X.val(""), Y.toggle(!1), j.toggle(!0), J.toggle(!0), J.focus(), L.fileUploads[O].uploading = !1, G() || _(L)
				}

				function q(B, V) {
					if (B) return I(B);
					var K = V.fileName,
						Z = V.postData,
						le = V.fileId,
						W = V.s3Url;
					X.attr("data-value", le), A(W, Z, H, K, k)
				}

				function k(B) {
					if (B) return I(B);
					Y.toggle(!1), Q.css("display", "inline-block"), Q.focus(), L.fileUploads[O].uploading = !1, G() || _(L)
				}

				function G() {
					var B = L.fileUploads && L.fileUploads.toArray() || [];
					return B.some(function(V) {
						return V.uploading
					})
				}
			}

			function $(O, L) {
				var H = new URLSearchParams({
					name: O.name,
					size: O.size
				});
				e.ajax({
					type: "GET",
					url: `${g}?${H}`,
					crossDomain: !0
				}).done(function(U) {
					L(null, U)
				}).fail(function(U) {
					L(U)
				})
			}

			function A(O, L, H, U, j) {
				var Y = new FormData;
				for (var Q in L) Y.append(Q, L[Q]);
				Y.append("file", H, U), e.ajax({
					type: "POST",
					url: O,
					data: Y,
					processData: !1,
					contentType: !1
				}).done(function() {
					j(null)
				}).fail(function(J) {
					j(J)
				})
			}
			return r
		})
	});
	KS();
	o_();
	h_();
	f_();
	d_();
	v_();
	T_();
	rC();
	iC();
	sC();
	lC();
	cC();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-2": {
			"id": "e-2",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-3"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".digital_print",
				"originalId": "99eb4f4b-f0bf-c411-6fb1-cfac2ca4c950",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".digital_print",
				"originalId": "99eb4f4b-f0bf-c411-6fb1-cfac2ca4c950",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 10,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709559214366
		},
		"e-4": {
			"id": "e-4",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-5"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".digital_print",
				"originalId": "99eb4f4b-f0bf-c411-6fb1-cfac2ca4c950",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".digital_print",
				"originalId": "99eb4f4b-f0bf-c411-6fb1-cfac2ca4c950",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709559355259
		},
		"e-6": {
			"id": "e-6",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-7"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".btn_main_wrap",
				"originalId": "28856a4b-532d-b84b-bd2d-113605f0e21a",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".btn_main_wrap",
				"originalId": "28856a4b-532d-b84b-bd2d-113605f0e21a",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709567976420
		},
		"e-7": {
			"id": "e-7",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-6"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".btn_main_wrap",
				"originalId": "28856a4b-532d-b84b-bd2d-113605f0e21a",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".btn_main_wrap",
				"originalId": "28856a4b-532d-b84b-bd2d-113605f0e21a",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709567976420
		},
		"e-8": {
			"id": "e-8",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-9"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".btn_small_wrap",
				"originalId": "0725dee6-da1b-66bd-a004-e5efbf6a71a2",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".btn_small_wrap",
				"originalId": "0725dee6-da1b-66bd-a004-e5efbf6a71a2",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709568841364
		},
		"e-9": {
			"id": "e-9",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-8"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".btn_small_wrap",
				"originalId": "0725dee6-da1b-66bd-a004-e5efbf6a71a2",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".btn_small_wrap",
				"originalId": "0725dee6-da1b-66bd-a004-e5efbf6a71a2",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709568841364
		},
		"e-10": {
			"id": "e-10",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-11"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709657058103
		},
		"e-11": {
			"id": "e-11",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-10"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709657058103
		},
		"e-12": {
			"id": "e-12",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-13"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709657363657
		},
		"e-13": {
			"id": "e-13",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-12"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".audio_wrap",
				"originalId": "65fda04c1ef3432174b453e3|22031fb1-4ab7-86f0-e59f-7b0b94cd28ee",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709657363657
		},
		"e-14": {
			"id": "e-14",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 0,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1709657806523
		},
		"e-18": {
			"id": "e-18",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-17"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709737439794
		},
		"e-19": {
			"id": "e-19",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-20"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "65fda04c1ef3432174b453e3|0f52756d-b9f2-935f-9118-e0eadd0287c9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453e3|0f52756d-b9f2-935f-9118-e0eadd0287c9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1709737795931
		},
		"e-27": {
			"id": "e-27",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-14",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".ugc_hero",
				"originalId": "65fda04c1ef3432174b453e3|bf8116b4-829e-74c5-bdaf-027222cc9fd6",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".ugc_hero",
				"originalId": "65fda04c1ef3432174b453e3|bf8116b4-829e-74c5-bdaf-027222cc9fd6",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-14-p",
				"smoothing": 80,
				"startsEntering": false,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1709829123837
		},
		"e-28": {
			"id": "e-28",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453e3",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 80,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1709923022580
		},
		"e-29": {
			"id": "e-29",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-30"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".logo_wrap",
				"originalId": "ffd61f1f-6357-3fbf-d3ba-81a47c2b596a",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".logo_wrap",
				"originalId": "ffd61f1f-6357-3fbf-d3ba-81a47c2b596a",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1710174457187
		},
		"e-31": {
			"id": "e-31",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "65fda04c1ef3432174b453f0",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453f0",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 0,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 0,
				"restingState": 50
			}],
			"createdOn": 1710250581810
		},
		"e-32": {
			"id": "e-32",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-16",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".gallery_trigger",
				"originalId": "65fda04c1ef3432174b453f0|3a4ee7bb-6d3c-21ff-aa19-41d0462299be",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".gallery_trigger",
				"originalId": "65fda04c1ef3432174b453f0|3a4ee7bb-6d3c-21ff-aa19-41d0462299be",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-16-p",
				"smoothing": 80,
				"startsEntering": false,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1710261925844
		},
		"e-33": {
			"id": "e-33",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-17",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".gallery_trigger",
				"originalId": "65fda04c1ef3432174b453f0|3a4ee7bb-6d3c-21ff-aa19-41d0462299be",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".gallery_trigger",
				"originalId": "65fda04c1ef3432174b453f0|3a4ee7bb-6d3c-21ff-aa19-41d0462299be",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-17-p",
				"smoothing": 80,
				"startsEntering": false,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1710262291060
		},
		"e-34": {
			"id": "e-34",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-18",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".next_theme_component",
				"originalId": "65fda04c1ef3432174b453f0|136c0ee4-f725-c387-1029-6b47779840ad",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".next_theme_component",
				"originalId": "65fda04c1ef3432174b453f0|136c0ee4-f725-c387-1029-6b47779840ad",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-18-p",
				"smoothing": 80,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1710263557417
		},
		"e-35": {
			"id": "e-35",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-36"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".submit_wrap",
				"originalId": "65fda04c1ef3432174b453e3|e2d76218-a950-8a28-5d68-8f7c45da8690",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".submit_wrap",
				"originalId": "65fda04c1ef3432174b453e3|e2d76218-a950-8a28-5d68-8f7c45da8690",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1710423509826
		},
		"e-37": {
			"id": "e-37",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-38"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".close_btn",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccc7",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".close_btn",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccc7",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1710424170034
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-40"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".submit_form_base",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccec",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".submit_form_base",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccec",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1710424770319
		},
		"e-41": {
			"id": "e-41",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-42"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".close_btn",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccc7",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".close_btn",
				"originalId": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccc7",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1710424784721
		},
		"e-43": {
			"id": "e-43",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "65fda04c1ef3432174b453ed",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "65fda04c1ef3432174b453ed",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 0,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 0,
				"restingState": 50
			}],
			"createdOn": 1711555638381
		}
	},
	"actionLists": {
		"a-2": {
			"id": "a-2",
			"title": "Digital Print Lottie",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".digital_print_lottie",
							"selectorGuids": ["a0edfe5f-3c06-15c9-fa05-f07434ae277d"]
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-2",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1600,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".digital_print_lottie",
							"selectorGuids": ["a0edfe5f-3c06-15c9-fa05-f07434ae277d"]
						},
						"value": 100
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-3",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".digital_print_lottie",
							"selectorGuids": ["a0edfe5f-3c06-15c9-fa05-f07434ae277d"]
						},
						"value": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709559236759
		},
		"a-3": {
			"id": "a-3",
			"title": "Button Main Hover [IN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-3-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": -101,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-3-n-3",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-3-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inExpo",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-3-n-4",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 19,
						"bValue": 19,
						"gValue": 19,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709567993032
		},
		"a-4": {
			"id": "a-4",
			"title": "Button Main Hover [OUT]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-4-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": -101,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-4-n-2",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709567993032
		},
		"a-5": {
			"id": "a-5",
			"title": "Button Small Hover [IN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-5-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": -101,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-5",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_small_icon",
							"selectorGuids": ["b84f3e26-9520-120e-b547-6ac4fe48e10e"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}, {
					"id": "a-5-n-2",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-5-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inExpo",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-4",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 19,
						"bValue": 19,
						"gValue": 19,
						"aValue": 1
					}
				}, {
					"id": "a-5-n-6",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_small_icon",
							"selectorGuids": ["b84f3e26-9520-120e-b547-6ac4fe48e10e"]
						},
						"globalSwatchId": "",
						"rValue": 19,
						"bValue": 19,
						"gValue": 19,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709567993032
		},
		"a-6": {
			"id": "a-6",
			"title": "Button Small Hover [OUT]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-6-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_inner_base",
							"selectorGuids": ["69609208-ca91-793f-890f-6c5b560cfdd4"]
						},
						"xValue": -101,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-6-n-2",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_main_text--fs6",
							"selectorGuids": ["1bff9618-b11e-ae6c-996c-6a8b06bf7d90"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}, {
					"id": "a-6-n-3",
					"actionTypeId": "STYLE_TEXT_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".btn_small_icon",
							"selectorGuids": ["b84f3e26-9520-120e-b547-6ac4fe48e10e"]
						},
						"globalSwatchId": "",
						"rValue": 235,
						"bValue": 29,
						"gValue": 251,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709567993032
		},
		"a-7": {
			"id": "a-7",
			"title": "Audio Text [START]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".audio_text--fs8",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-7-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".audio_text--fs8.is-on",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab", "75b578ee-78f1-37f8-f041-5caba3d302bd"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 400,
						"target": {
							"selector": ".audio_text--fs8",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-7-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 400,
						"target": {
							"selector": ".audio_text--fs8.is-on",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab", "75b578ee-78f1-37f8-f041-5caba3d302bd"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709657064851
		},
		"a-8": {
			"id": "a-8",
			"title": "Audio Text [STOP]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 400,
						"target": {
							"selector": ".audio_text--fs8",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-8-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 400,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".audio_text--fs8.is-on",
							"selectorGuids": ["cfe3827c-b7ae-01c7-5ba9-eda7fc1028ab", "75b578ee-78f1-37f8-f041-5caba3d302bd"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709657064851
		},
		"a-9": {
			"id": "a-9",
			"title": "Audio Visual [START]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".audio_lottie",
							"selectorGuids": ["95f1479d-05a9-491a-0864-8b20016fb3fc"]
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-2",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 800,
						"target": {
							"selector": ".audio_lottie",
							"selectorGuids": ["95f1479d-05a9-491a-0864-8b20016fb3fc"]
						},
						"value": 100
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709657370363
		},
		"a-10": {
			"id": "a-10",
			"title": "Audio Visual [STOP]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n-3",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".audio_lottie",
							"selectorGuids": ["95f1479d-05a9-491a-0864-8b20016fb3fc"]
						},
						"value": 0
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709657370363
		},
		"a": {
			"id": "a",
			"title": "Cursor",
			"continuousParameterGroups": [{
				"id": "a-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".cursor_move",
								"selectorGuids": ["5a6b7e26-3a66-d64b-3156-7078f43460f0"]
							},
							"xValue": -50,
							"xUnit": "vw",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".cursor_move",
								"selectorGuids": ["5a6b7e26-3a66-d64b-3156-7078f43460f0"]
							},
							"xValue": 50,
							"xUnit": "vw",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".cursor_move",
								"selectorGuids": ["5a6b7e26-3a66-d64b-3156-7078f43460f0"]
							},
							"yValue": -50,
							"xUnit": "PX",
							"yUnit": "vh",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".cursor_move",
								"selectorGuids": ["5a6b7e26-3a66-d64b-3156-7078f43460f0"]
							},
							"yValue": 50,
							"xUnit": "PX",
							"yUnit": "vh",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1709552437640
		},
		"a-11": {
			"id": "a-11",
			"title": "Preloader [IN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader_content",
							"selectorGuids": ["88e3f8fb-1219-e545-9ec6-8984819aa98c"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-11-n-13",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|8aaa2b11-c4df-99be-26de-fd08216bfada"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-11-n-9",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_lottie",
							"selectorGuids": ["656741b3-fefc-2e87-2d5f-d9c70dcd45c6"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-11-n-8",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".loader_lottie",
							"selectorGuids": ["656741b3-fefc-2e87-2d5f-d9c70dcd45c6"]
						},
						"value": 0
					}
				}, {
					"id": "a-11-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".preloader",
							"selectorGuids": ["1f013882-d0b5-5b1c-78e9-cef1a8c2ac20"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-11-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|0f52756d-b9f2-935f-9118-e0eadd0287c9"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "",
						"duration": 800,
						"target": {
							"selector": ".preloader_content",
							"selectorGuids": ["88e3f8fb-1219-e545-9ec6-8984819aa98c"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-11-n-11",
					"actionTypeId": "PLUGIN_LOTTIE",
					"config": {
						"delay": 400,
						"easing": "",
						"duration": 3000,
						"target": {
							"selector": ".loader_lottie",
							"selectorGuids": ["656741b3-fefc-2e87-2d5f-d9c70dcd45c6"]
						},
						"value": 100
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"id": "65fda04c1ef3432174b453e3|38f60494-c1d4-b435-4ac1-65a1937a03f4"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-11-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|0f52756d-b9f2-935f-9118-e0eadd0287c9"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-11-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|8aaa2b11-c4df-99be-26de-fd08216bfada"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-10",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".loader_lottie",
							"selectorGuids": ["656741b3-fefc-2e87-2d5f-d9c70dcd45c6"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709737459360
		},
		"a-12": {
			"id": "a-12",
			"title": "Preloader [OUT]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-12-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader_logo",
							"selectorGuids": ["ed8dc0c3-2fce-2565-d4bb-529214d4b184"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-12-n-41",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|2e8498c6-34c3-59c3-43ee-255000eeaf9d"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-40",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|a761307d-3d8b-6a17-92dc-732c5b2ca70f"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-37",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|ad0e646d-3148-b436-e4b4-117ed6ec0628"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-36",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|8ac0422f-8bb1-a9ec-34db-0e8d9b8b3c31"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-34",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero_main_text",
							"selectorGuids": ["f2113e85-31ea-fae6-44db-9b51b6761aca"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-12-n-32",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".digital_print",
							"selectorGuids": ["c386581d-a1a6-2888-1f0c-eafa1368e588"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-12-n-30",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".audio_wrap",
							"selectorGuids": ["1461ddb8-aacf-10d4-cc49-6b2da53d4ebb"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-12-n-28",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".logo_wrap",
							"selectorGuids": ["bcd8900d-6139-6918-e75b-bfd94aa3b886"]
						},
						"zValue": -180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-12-n-26",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".logo_wrap",
							"selectorGuids": ["bcd8900d-6139-6918-e75b-bfd94aa3b886"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-12-n-24",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"zValue": 3,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-12-n-22",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero_main_inner",
							"selectorGuids": ["96d49ed6-b19d-34d7-023b-aabab86d772d"]
						},
						"xValue": 1.2,
						"yValue": 1.2,
						"locked": true
					}
				}, {
					"id": "a-12-n-18",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader-base_bottom",
							"selectorGuids": ["32507c5c-4f3a-9125-9d51-c21ceb4e6168"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader-base_top",
							"selectorGuids": ["47fbec83-e31d-4ae0-696b-962712ff75e0"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|bca3367a-8d5a-ff69-650c-03ff9219c756"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|a5c093ce-c4be-3812-1897-76509b42de6f"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|f123663e-a77d-17b0-009c-8f29664a36ec"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "PARENT",
							"selector": ".preloader_cta",
							"selectorGuids": ["7085ef42-3981-94bc-2c9d-f2c1b0a43010"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-12-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|12eb4af0-29ba-c33e-e5a8-7d578c9ecf18"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"id": "65fda04c1ef3432174b453e3|78b1073d-dc01-174e-051a-b71cadf1e47d"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".preloader_logo",
							"selectorGuids": ["ed8dc0c3-2fce-2565-d4bb-529214d4b184"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutExpo",
						"duration": 800,
						"target": {
							"selector": ".preloader_logo",
							"selectorGuids": ["ed8dc0c3-2fce-2565-d4bb-529214d4b184"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-12-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutExpo",
						"duration": 800,
						"target": {
							"selector": ".preloader_logo",
							"selectorGuids": ["ed8dc0c3-2fce-2565-d4bb-529214d4b184"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-12-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "inOutCirc",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|78b1073d-dc01-174e-051a-b71cadf1e47d"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "inOutCirc",
						"duration": 600,
						"target": {
							"id": "65fda04c1ef3432174b453e3|12eb4af0-29ba-c33e-e5a8-7d578c9ecf18"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "inOutCirc",
						"duration": 600,
						"target": {
							"id": "65fda04c1ef3432174b453e3|bca3367a-8d5a-ff69-650c-03ff9219c756"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "inOutCirc",
						"duration": 600,
						"target": {
							"id": "65fda04c1ef3432174b453e3|a5c093ce-c4be-3812-1897-76509b42de6f"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-14",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "inOutCirc",
						"duration": 600,
						"target": {
							"id": "65fda04c1ef3432174b453e3|f123663e-a77d-17b0-009c-8f29664a36ec"
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 600,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "PARENT",
							"selector": ".preloader_cta",
							"selectorGuids": ["7085ef42-3981-94bc-2c9d-f2c1b0a43010"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-12-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1000,
						"easing": [0.45, 0.001, 0, 0.948],
						"duration": 1400,
						"target": {
							"selector": ".preloader-base_bottom",
							"selectorGuids": ["32507c5c-4f3a-9125-9d51-c21ceb4e6168"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-20",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1000,
						"easing": [0.45, 0.001, 0, 0.948],
						"duration": 1400,
						"target": {
							"selector": ".preloader-base_top",
							"selectorGuids": ["47fbec83-e31d-4ae0-696b-962712ff75e0"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-25",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 1400,
						"easing": "inOutCubic",
						"duration": 1200,
						"target": {},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-12-n-23",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "inOutCubic",
						"duration": 1200,
						"target": {
							"selector": ".hero_main_inner",
							"selectorGuids": ["96d49ed6-b19d-34d7-023b-aabab86d772d"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-12-n-29",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 2200,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"selector": ".logo_wrap",
							"selectorGuids": ["bcd8900d-6139-6918-e75b-bfd94aa3b886"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}, {
					"id": "a-12-n-27",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 2200,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"selector": ".logo_wrap",
							"selectorGuids": ["bcd8900d-6139-6918-e75b-bfd94aa3b886"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-12-n-31",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 2600,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".audio_wrap",
							"selectorGuids": ["1461ddb8-aacf-10d4-cc49-6b2da53d4ebb"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-12-n-35",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 2600,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".hero_main_text",
							"selectorGuids": ["f2113e85-31ea-fae6-44db-9b51b6761aca"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-12-n-33",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 2600,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".digital_print",
							"selectorGuids": ["c386581d-a1a6-2888-1f0c-eafa1368e588"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-12-n-39",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2700,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|8ac0422f-8bb1-a9ec-34db-0e8d9b8b3c31"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-43",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2700,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|a761307d-3d8b-6a17-92dc-732c5b2ca70f"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-38",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2800,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|ad0e646d-3148-b436-e4b4-117ed6ec0628"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-42",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2800,
						"easing": "inOutQuart",
						"duration": 800,
						"target": {
							"id": "65fda04c1ef3432174b453e3|2e8498c6-34c3-59c3-43ee-255000eeaf9d"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n-21",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "PARENT",
							"selector": ".preloader",
							"selectorGuids": ["1f013882-d0b5-5b1c-78e9-cef1a8c2ac20"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1709737459360
		},
		"a-14": {
			"id": "a-14",
			"title": "Text Dispurse",
			"continuousParameterGroups": [{
				"id": "a-14-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-14-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "inOutQuart",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"id": "65fda04c1ef3432174b453e3|15d1b993-1997-d4da-e200-51272479a5c4"
							},
							"xValue": 0,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "inOutQuart",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"id": "65fda04c1ef3432174b453e3|ff82d75b-648c-1faf-124a-d3851ac9b536"
							},
							"xValue": 0,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-14-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"id": "65fda04c1ef3432174b453e3|15d1b993-1997-d4da-e200-51272479a5c4"
							},
							"xValue": -30,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"id": "65fda04c1ef3432174b453e3|ff82d75b-648c-1faf-124a-d3851ac9b536"
							},
							"xValue": 30,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1709829154533
		},
		"a-15": {
			"id": "a-15",
			"title": "Logo Spline",
			"continuousParameterGroups": [{
				"id": "a-15-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-15-n",
						"actionTypeId": "PLUGIN_SPLINE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"pluginElement": "ffd648f7-407b-a134-2067-03c9bdf7b708",
								"objectId": "c65ee3b9-c801-42b4-b375-53f765c5e3f0",
								"id": "65fda04c1ef3432174b453e3|ffd648f7-407b-a134-2067-03c9bdf7b708"
							},
							"value": {
								"rotationY": -1.5
							}
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-15-n-2",
						"actionTypeId": "PLUGIN_SPLINE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"pluginElement": "ffd648f7-407b-a134-2067-03c9bdf7b708",
								"objectId": "c65ee3b9-c801-42b4-b375-53f765c5e3f0",
								"id": "65fda04c1ef3432174b453e3|ffd648f7-407b-a134-2067-03c9bdf7b708"
							},
							"value": {
								"rotationY": 1.5,
								"positionX": null
							}
						}
					}]
				}]
			}, {
				"id": "a-15-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-15-n-3",
						"actionTypeId": "PLUGIN_SPLINE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"pluginElement": "ffd648f7-407b-a134-2067-03c9bdf7b708",
								"objectId": "c65ee3b9-c801-42b4-b375-53f765c5e3f0",
								"id": "65fda04c1ef3432174b453e3|ffd648f7-407b-a134-2067-03c9bdf7b708"
							},
							"value": {
								"rotationX": -0.2
							}
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-15-n-4",
						"actionTypeId": "PLUGIN_SPLINE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"pluginElement": "ffd648f7-407b-a134-2067-03c9bdf7b708",
								"objectId": "c65ee3b9-c801-42b4-b375-53f765c5e3f0",
								"id": "65fda04c1ef3432174b453e3|ffd648f7-407b-a134-2067-03c9bdf7b708"
							},
							"value": {
								"rotationX": 0.2
							}
						}
					}]
				}]
			}],
			"createdOn": 1709923034787
		},
		"a-13": {
			"id": "a-13",
			"title": "Logo Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-13-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"id": "ffd61f1f-6357-3fbf-d3ba-81a47c2b596b"
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-13-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutCirc",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"id": "ffd61f1f-6357-3fbf-d3ba-81a47c2b596b"
						},
						"yValue": null,
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1709741976049
		},
		"a-16": {
			"id": "a-16",
			"title": "Theme Gallery Move Parent on Z",
			"continuousParameterGroups": [{
				"id": "a-16-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-16-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img_contain",
								"selectorGuids": ["c860bd75-ca74-ad40-8b24-57c632f1193e"]
							},
							"zValue": 30,
							"xUnit": "PX",
							"yUnit": "PX",
							"zUnit": "px"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-16-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img_contain",
								"selectorGuids": ["c860bd75-ca74-ad40-8b24-57c632f1193e"]
							},
							"zValue": 600,
							"xUnit": "PX",
							"yUnit": "PX",
							"zUnit": "px"
						}
					}]
				}]
			}],
			"createdOn": 1710261943259
		},
		"a-17": {
			"id": "a-17",
			"title": "Gallery Image Opacity",
			"continuousParameterGroups": [{
				"id": "a-17-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-17-n",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._100",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "823d3b7a-1a0f-d171-e9b6-26fbbdcaf584"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 5,
					"actionItems": [{
						"id": "a-17-n-3",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._100",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "823d3b7a-1a0f-d171-e9b6-26fbbdcaf584"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 6,
					"actionItems": [{
						"id": "a-17-n-4",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._200",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "fd002471-0b86-2a40-77e2-24c35fd8c14b"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 10,
					"actionItems": [{
						"id": "a-17-n-5",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._200",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "fd002471-0b86-2a40-77e2-24c35fd8c14b"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 20,
					"actionItems": [{
						"id": "a-17-n-6",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._300",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "6550ae69-816a-68ca-17e8-b84f57ad2273"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 24,
					"actionItems": [{
						"id": "a-17-n-7",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._300",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "6550ae69-816a-68ca-17e8-b84f57ad2273"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 30,
					"actionItems": [{
						"id": "a-17-n-8",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._400",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "d796b6b4-943a-adc1-9c4b-259439b556c2"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 35,
					"actionItems": [{
						"id": "a-17-n-9",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._400",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "d796b6b4-943a-adc1-9c4b-259439b556c2"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 50,
					"actionItems": [{
						"id": "a-17-n-10",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._500",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "0dd4340e-6585-d438-d00e-d804e679197d"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 54,
					"actionItems": [{
						"id": "a-17-n-11",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img._500",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "0dd4340e-6585-d438-d00e-d804e679197d"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 60,
					"actionItems": [{
						"id": "a-17-n-12",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._600",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "b810ec89-b64c-086d-bc62-8f30b642dc0f"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 65,
					"actionItems": [{
						"id": "a-17-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._600",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "b810ec89-b64c-086d-bc62-8f30b642dc0f"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 99,
					"actionItems": [{
						"id": "a-17-n-15",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._600",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "b810ec89-b64c-086d-bc62-8f30b642dc0f"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-17-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".gallery_img.right._600",
								"selectorGuids": ["8ba97ce8-bdee-939c-c8e5-3e0c6699e746", "02042ff6-fe82-bb6f-5f3a-b29e980af95a", "b810ec89-b64c-086d-bc62-8f30b642dc0f"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1710262302783
		},
		"a-18": {
			"id": "a-18",
			"title": "Next Theme Scroll",
			"continuousParameterGroups": [{
				"id": "a-18-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-18-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".next_theme_component",
								"selectorGuids": ["b88a5934-b1f5-bc7c-4d1a-1cb242ffc59a"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-18-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".next_theme_component",
								"selectorGuids": ["b88a5934-b1f5-bc7c-4d1a-1cb242ffc59a"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1710263564955
		},
		"a-19": {
			"id": "a-19",
			"title": "Form [OPEN]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-19-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submit_form_base",
							"selectorGuids": ["d108e00a-ef48-69a0-bea4-60e00fbec8f4"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-19-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-19-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-19-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".submit_form_panel",
							"selectorGuids": ["61914c8a-6ddf-c410-9f23-99756ca1d5da"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".submit_form_wrap",
							"selectorGuids": ["8fd7d713-1850-518e-0cfc-f441563bf4bc"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-19-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".submit_form_base",
							"selectorGuids": ["d108e00a-ef48-69a0-bea4-60e00fbec8f4"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-19-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutCirc",
						"duration": 800,
						"target": {
							"selector": ".submit_form_panel",
							"selectorGuids": ["61914c8a-6ddf-c410-9f23-99756ca1d5da"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-14",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".submit_form_wrap",
							"selectorGuids": ["8fd7d713-1850-518e-0cfc-f441563bf4bc"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-19-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outQuart",
						"duration": 800,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-13",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "",
						"duration": 800,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-19-n-11",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "",
						"duration": 800,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-19-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outQuart",
						"duration": 800,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1710423521608
		},
		"a-20": {
			"id": "a-20",
			"title": "Form [CLOSE]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-20-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-20-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 600,
						"target": {
							"selector": ".submission_form",
							"selectorGuids": ["aeb55386-9dfa-270c-7192-1eafc06973e3"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 600,
						"target": {
							"selector": ".submit_form_title_wrap",
							"selectorGuids": ["f91aa3d9-503b-da8e-43bc-4dae138730c2"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutCirc",
						"duration": 400,
						"target": {
							"selector": ".submit_form_panel",
							"selectorGuids": ["61914c8a-6ddf-c410-9f23-99756ca1d5da"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "",
						"duration": 400,
						"target": {
							"selector": ".submit_form_base",
							"selectorGuids": ["d108e00a-ef48-69a0-bea4-60e00fbec8f4"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-20-n-7",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".submit_form_wrap",
							"selectorGuids": ["8fd7d713-1850-518e-0cfc-f441563bf4bc"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1710423521608
		},
		"a-21": {
			"id": "a-21",
			"title": "Close [HOVER]",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"id": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccca"
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-21-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "inOutExpo",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"id": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccca"
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-21-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"id": "b449ef9b-87c8-bd21-56d6-5fe7e8d4ccca"
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1710424795730
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});