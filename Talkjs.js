! function(i) {
    var e = {};

    function r(t) {
        if (e[t]) return e[t].exports;
        var n = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = i, r.c = e, r.d = function(t, n, i) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(n, t) {
        if (1 & t && (n = r(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var e in n) r.d(i, e, function(t) {
                return n[t]
            }.bind(null, e));
        return i
    }, r.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "/__assets/", r(r.s = 639)
}({
    10: function(t, n, i) {
        "use strict";

        function r(t, n, i, e) {
            void 0 === e && (e = []);
            var r = function t(n) {
                if (null === n) return "null";
                var i = typeof n;
                if ("object" !== i) return i;
                if (n instanceof Array) return n.length ? t(n[0]) + "[]" : "[]";
                return i
            }(t);
            if (-1 === n.indexOf(r)) throw new Error("[TalkJS] " + i);
            for (var o = 0, s = e; o < s.length; o++) {
                if (!(0, s[o])(t)) throw new Error("[TalkJS] " + i)
            }
            return t
        }

        function e(t, n, i) {
            if (-1 === n.indexOf(t)) throw new Error("[TalkJS] " + i)
        }

        function o(t, n, i) {
            for (var e in t) r(t[e], n, i(e))
        }

        function s(t) {
            return "" !== t
        }

        function u(t) {
            return !t || /^[a-z]{1,3}(-.+)?$/.test(t)
        }

        function a(t) {
            return !(["ios", "android"].indexOf(t) < 0)
        }
        i.d(n, "c", function() {
            return r
        }), i.d(n, "e", function() {
            return e
        }), i.d(n, "d", function() {
            return o
        }), i.d(n, "b", function() {
            return s
        }), i.d(n, "a", function() {
            return u
        }), i.d(n, "f", function() {
            return a
        })
    },
    100: function(t, n, i) {
        ! function(t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                c = function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, n) {
                        var i = [],
                            e = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var s, u = t[Symbol.iterator](); !(e = (s = u.next()).done) && (i.push(s.value), !n || i.length !== n); e = !0);
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !e && u.return && u.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return i
                    }(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                o = function() {
                    function e(t, n) {
                        for (var i = 0; i < n.length; i++) {
                            var e = n[i];
                            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }();

            function u(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            var a = {
                    connecting: 0,
                    open: 1,
                    closing: 2,
                    closed: 3
                },
                h = {
                    closed: "closed",
                    errored: "errored",
                    joined: "joined",
                    joining: "joining",
                    leaving: "leaving"
                },
                f = {
                    close: "phx_close",
                    error: "phx_error",
                    join: "phx_join",
                    reply: "phx_reply",
                    leave: "phx_leave"
                },
                l = [f.close, f.error, f.join, f.reply, f.leave],
                r = {
                    longpoll: "longpoll",
                    websocket: "websocket"
                },
                d = function() {
                    function r(t, n, i, e) {
                        u(this, r), this.channel = t, this.event = n, this.payload = i || {}, this.receivedResp = null, this.timeout = e, this.timeoutTimer = null, this.recHooks = [], this.sent = !1
                    }
                    return o(r, [{
                        key: "resend",
                        value: function(t) {
                            this.timeout = t, this.reset(), this.send()
                        }
                    }, {
                        key: "send",
                        value: function() {
                            this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                                topic: this.channel.topic,
                                event: this.event,
                                payload: this.payload,
                                ref: this.ref,
                                join_ref: this.channel.joinRef()
                            }))
                        }
                    }, {
                        key: "receive",
                        value: function(t, n) {
                            return this.hasReceived(t) && n(this.receivedResp.response), this.recHooks.push({
                                status: t,
                                callback: n
                            }), this
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1
                        }
                    }, {
                        key: "matchReceive",
                        value: function(t) {
                            var n = t.status,
                                i = t.response;
                            t.ref, this.recHooks.filter(function(t) {
                                return t.status === n
                            }).forEach(function(t) {
                                return t.callback(i)
                            })
                        }
                    }, {
                        key: "cancelRefEvent",
                        value: function() {
                            this.refEvent && this.channel.off(this.refEvent)
                        }
                    }, {
                        key: "cancelTimeout",
                        value: function() {
                            clearTimeout(this.timeoutTimer), this.timeoutTimer = null
                        }
                    }, {
                        key: "startTimeout",
                        value: function() {
                            var n = this;
                            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t) {
                                n.cancelRefEvent(), n.cancelTimeout(), n.receivedResp = t, n.matchReceive(t)
                            }), this.timeoutTimer = setTimeout(function() {
                                n.trigger("timeout", {})
                            }, this.timeout)
                        }
                    }, {
                        key: "hasReceived",
                        value: function(t) {
                            return this.receivedResp && this.receivedResp.status === t
                        }
                    }, {
                        key: "trigger",
                        value: function(t, n) {
                            this.channel.trigger(this.refEvent, {
                                status: t,
                                response: n
                            })
                        }
                    }]), r
                }(),
                v = t.Channel = function() {
                    function r(t, n, i) {
                        var e = this;
                        u(this, r), this.state = h.closed, this.topic = t, this.params = n || {}, this.socket = i, this.bindings = [], this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new d(this, f.join, this.params, this.timeout), this.pushBuffer = [], this.rejoinTimer = new b(function() {
                            return e.rejoinUntilConnected()
                        }, this.socket.reconnectAfterMs), this.joinPush.receive("ok", function() {
                            e.state = h.joined, e.rejoinTimer.reset(), e.pushBuffer.forEach(function(t) {
                                return t.send()
                            }), e.pushBuffer = []
                        }), this.onClose(function() {
                            e.rejoinTimer.reset(), e.socket.log("channel", "close " + e.topic + " " + e.joinRef()), e.state = h.closed, e.socket.remove(e)
                        }), this.onError(function(t) {
                            e.isLeaving() || e.isClosed() || (e.socket.log("channel", "error " + e.topic, t), e.state = h.errored, e.rejoinTimer.scheduleTimeout())
                        }), this.joinPush.receive("timeout", function() {
                            if (e.isJoining()) {
                                e.socket.log("channel", "timeout " + e.topic + " (" + e.joinRef() + ")", e.joinPush.timeout);
                                var t = new d(e, f.leave, {}, e.timeout);
                                t.send(), e.state = h.errored, e.joinPush.reset(), e.rejoinTimer.scheduleTimeout()
                            }
                        }), this.on(f.reply, function(t, n) {
                            e.trigger(e.replyEventName(n), t)
                        })
                    }
                    return o(r, [{
                        key: "rejoinUntilConnected",
                        value: function() {
                            this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin()
                        }
                    }, {
                        key: "join",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.timeout;
                            if (this.joinedOnce) throw "tried to join multiple times. 'join' can only be called a single time per channel instance";
                            return this.joinedOnce = !0, this.rejoin(t), this.joinPush
                        }
                    }, {
                        key: "onClose",
                        value: function(t) {
                            this.on(f.close, t)
                        }
                    }, {
                        key: "onError",
                        value: function(n) {
                            this.on(f.error, function(t) {
                                return n(t)
                            })
                        }
                    }, {
                        key: "on",
                        value: function(t, n) {
                            this.bindings.push({
                                event: t,
                                callback: n
                            })
                        }
                    }, {
                        key: "off",
                        value: function(n) {
                            this.bindings = this.bindings.filter(function(t) {
                                return t.event !== n
                            })
                        }
                    }, {
                        key: "canPush",
                        value: function() {
                            return this.socket.isConnected() && this.isJoined()
                        }
                    }, {
                        key: "push",
                        value: function(t, n) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.timeout;
                            if (!this.joinedOnce) throw "tried to push '" + t + "' to '" + this.topic + "' before joining. Use channel.join() before pushing events";
                            var e = new d(this, t, n, i);
                            return this.canPush() ? e.send() : (e.startTimeout(), this.pushBuffer.push(e)), e
                        }
                    }, {
                        key: "leave",
                        value: function() {
                            var t = this,
                                n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.timeout;
                            this.state = h.leaving;
                            var i = function() {
                                    t.socket.log("channel", "leave " + t.topic), t.trigger(f.close, "leave")
                                },
                                e = new d(this, f.leave, {}, n);
                            return e.receive("ok", function() {
                                return i()
                            }).receive("timeout", function() {
                                return i()
                            }), e.send(), this.canPush() || e.trigger("ok", {}), e
                        }
                    }, {
                        key: "onMessage",
                        value: function(t, n, i) {
                            return n
                        }
                    }, {
                        key: "isMember",
                        value: function(t, n, i, e) {
                            if (this.topic !== t) return !1;
                            var r = 0 <= l.indexOf(n);
                            return !e || !r || e === this.joinRef() || (this.socket.log("channel", "dropping outdated message", {
                                topic: t,
                                event: n,
                                payload: i,
                                joinRef: e
                            }), !1)
                        }
                    }, {
                        key: "joinRef",
                        value: function() {
                            return this.joinPush.ref
                        }
                    }, {
                        key: "sendJoin",
                        value: function(t) {
                            this.state = h.joining, this.joinPush.resend(t)
                        }
                    }, {
                        key: "rejoin",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.timeout;
                            this.isLeaving() || this.sendJoin(t)
                        }
                    }, {
                        key: "trigger",
                        value: function(n, t, i, e) {
                            var r = this,
                                o = this.onMessage(n, t, i, e);
                            if (t && !o) throw "channel onMessage callbacks must return the payload, modified or unmodified";
                            this.bindings.filter(function(t) {
                                return t.event === n
                            }).map(function(t) {
                                return t.callback(o, i, e || r.joinRef())
                            })
                        }
                    }, {
                        key: "replyEventName",
                        value: function(t) {
                            return "chan_reply_" + t
                        }
                    }, {
                        key: "isClosed",
                        value: function() {
                            return this.state === h.closed
                        }
                    }, {
                        key: "isErrored",
                        value: function() {
                            return this.state === h.errored
                        }
                    }, {
                        key: "isJoined",
                        value: function() {
                            return this.state === h.joined
                        }
                    }, {
                        key: "isJoining",
                        value: function() {
                            return this.state === h.joining
                        }
                    }, {
                        key: "isLeaving",
                        value: function() {
                            return this.state === h.leaving
                        }
                    }]), r
                }(),
                p = {
                    encode: function(t, n) {
                        var i = [t.join_ref, t.ref, t.topic, t.event, t.payload];
                        return n(JSON.stringify(i))
                    },
                    decode: function(t, n) {
                        var i = JSON.parse(t),
                            e = c(i, 5),
                            r = e[0],
                            o = e[1],
                            s = e[2],
                            u = e[3],
                            a = e[4];
                        return n({
                            join_ref: r,
                            ref: o,
                            topic: s,
                            event: u,
                            payload: a
                        })
                    }
                },
                g = (t.Socket = function() {
                    function e(t) {
                        var n = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        u(this, e), this.stateChangeCallbacks = {
                            open: [],
                            close: [],
                            error: [],
                            message: []
                        }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || window.WebSocket || g, this.defaultEncoder = p.encode, this.defaultDecoder = p.decode, this.transport !== g ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.reconnectAfterMs = i.reconnectAfterMs || function(t) {
                            return [1e3, 2e3, 5e3, 1e4][t - 1] || 1e4
                        }, this.logger = i.logger || function() {}, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = i.params || {}, this.endPoint = t + "/" + r.websocket, this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new b(function() {
                            n.disconnect(function() {
                                return n.connect()
                            })
                        }, this.reconnectAfterMs)
                    }
                    return o(e, [{
                        key: "protocol",
                        value: function() {
                            return location.protocol.match(/^https/) ? "wss" : "ws"
                        }
                    }, {
                        key: "endPointURL",
                        value: function() {
                            var t = i.appendParams(i.appendParams(this.endPoint, this.params), {
                                vsn: "2.0.0"
                            });
                            return "/" !== t.charAt(0) ? t : "/" === t.charAt(1) ? this.protocol() + ":" + t : this.protocol() + "://" + location.host + t
                        }
                    }, {
                        key: "disconnect",
                        value: function(t, n, i) {
                            this.conn && (this.conn.onclose = function() {}, n ? this.conn.close(n, i || "") : this.conn.close(), this.conn = null), t && t()
                        }
                    }, {
                        key: "connect",
                        value: function(t) {
                            var n = this;
                            t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = t), this.conn || (this.conn = new this.transport(this.endPointURL()), this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
                                return n.onConnOpen()
                            }, this.conn.onerror = function(t) {
                                return n.onConnError(t)
                            }, this.conn.onmessage = function(t) {
                                return n.onConnMessage(t)
                            }, this.conn.onclose = function(t) {
                                return n.onConnClose(t)
                            })
                        }
                    }, {
                        key: "log",
                        value: function(t, n, i) {
                            this.logger(t, n, i)
                        }
                    }, {
                        key: "onOpen",
                        value: function(t) {
                            this.stateChangeCallbacks.open.push(t)
                        }
                    }, {
                        key: "onClose",
                        value: function(t) {
                            this.stateChangeCallbacks.close.push(t)
                        }
                    }, {
                        key: "onError",
                        value: function(t) {
                            this.stateChangeCallbacks.error.push(t)
                        }
                    }, {
                        key: "onMessage",
                        value: function(t) {
                            this.stateChangeCallbacks.message.push(t)
                        }
                    }, {
                        key: "onConnOpen",
                        value: function() {
                            var t = this;
                            this.log("transport", "connected to " + this.endPointURL()), this.flushSendBuffer(), this.reconnectTimer.reset(), this.conn.skipHeartbeat || (clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function() {
                                return t.sendHeartbeat()
                            }, this.heartbeatIntervalMs)), this.stateChangeCallbacks.open.forEach(function(t) {
                                return t()
                            })
                        }
                    }, {
                        key: "onConnClose",
                        value: function(n) {
                            this.log("transport", "close", n), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t) {
                                return t(n)
                            })
                        }
                    }, {
                        key: "onConnError",
                        value: function(n) {
                            this.log("transport", n), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t) {
                                return t(n)
                            })
                        }
                    }, {
                        key: "triggerChanError",
                        value: function() {
                            this.channels.forEach(function(t) {
                                return t.trigger(f.error)
                            })
                        }
                    }, {
                        key: "connectionState",
                        value: function() {
                            switch (this.conn && this.conn.readyState) {
                                case a.connecting:
                                    return "connecting";
                                case a.open:
                                    return "open";
                                case a.closing:
                                    return "closing";
                                default:
                                    return "closed"
                            }
                        }
                    }, {
                        key: "isConnected",
                        value: function() {
                            return "open" === this.connectionState()
                        }
                    }, {
                        key: "remove",
                        value: function(n) {
                            this.channels = this.channels.filter(function(t) {
                                return t.joinRef() !== n.joinRef()
                            })
                        }
                    }, {
                        key: "channel",
                        value: function(t) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                i = new v(t, n, this);
                            return this.channels.push(i), i
                        }
                    }, {
                        key: "push",
                        value: function(t) {
                            var n = this,
                                i = t.topic,
                                e = t.event,
                                r = t.payload,
                                o = t.ref,
                                s = t.join_ref,
                                u = function() {
                                    n.encode(t, function(t) {
                                        n.conn.send(t)
                                    })
                                };
                            this.log("push", i + " " + e + " (" + s + ", " + o + ")", r), this.isConnected() ? u() : this.sendBuffer.push(u)
                        }
                    }, {
                        key: "makeRef",
                        value: function() {
                            var t = this.ref + 1;
                            return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString()
                        }
                    }, {
                        key: "sendHeartbeat",
                        value: function() {
                            if (this.isConnected()) {
                                if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.conn.close(1e3, "hearbeat timeout");
                                this.pendingHeartbeatRef = this.makeRef(), this.push({
                                    topic: "phoenix",
                                    event: "heartbeat",
                                    payload: {},
                                    ref: this.pendingHeartbeatRef
                                })
                            }
                        }
                    }, {
                        key: "flushSendBuffer",
                        value: function() {
                            this.isConnected() && 0 < this.sendBuffer.length && (this.sendBuffer.forEach(function(t) {
                                return t()
                            }), this.sendBuffer = [])
                        }
                    }, {
                        key: "onConnMessage",
                        value: function(t) {
                            var u = this;
                            this.decode(t.data, function(n) {
                                var i = n.topic,
                                    e = n.event,
                                    r = n.payload,
                                    o = n.ref,
                                    s = n.join_ref;
                                o && o === u.pendingHeartbeatRef && (u.pendingHeartbeatRef = null), u.log("receive", (r.status || "") + " " + i + " " + e + " " + (o && "(" + o + ")" || ""), r), u.channels.filter(function(t) {
                                    return t.isMember(i, e, r, s)
                                }).forEach(function(t) {
                                    return t.trigger(e, r, o, s)
                                }), u.stateChangeCallbacks.message.forEach(function(t) {
                                    return t(n)
                                })
                            })
                        }
                    }]), e
                }(), t.LongPoll = function() {
                    function n(t) {
                        u(this, n), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = a.connecting, this.poll()
                    }
                    return o(n, [{
                        key: "normalizeEndpoint",
                        value: function(t) {
                            return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + r.websocket), "$1/" + r.longpoll)
                        }
                    }, {
                        key: "endpointURL",
                        value: function() {
                            return i.appendParams(this.pollEndpoint, {
                                token: this.token
                            })
                        }
                    }, {
                        key: "closeAndRetry",
                        value: function() {
                            this.close(), this.readyState = a.connecting
                        }
                    }, {
                        key: "ontimeout",
                        value: function() {
                            this.onerror("timeout"), this.closeAndRetry()
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            var r = this;
                            this.readyState !== a.open && this.readyState !== a.connecting || i.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t) {
                                if (t) {
                                    var n = t.status,
                                        i = t.token,
                                        e = t.messages;
                                    r.token = i
                                } else var n = 0;
                                switch (n) {
                                    case 200:
                                        e.forEach(function(t) {
                                            return r.onmessage({
                                                data: t
                                            })
                                        }), r.poll();
                                        break;
                                    case 204:
                                        r.poll();
                                        break;
                                    case 410:
                                        r.readyState = a.open, r.onopen(), r.poll();
                                        break;
                                    case 0:
                                    case 500:
                                        r.onerror(), r.closeAndRetry();
                                        break;
                                    default:
                                        throw "unhandled poll status " + n
                                }
                            })
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            var n = this;
                            i.request("POST", this.endpointURL(), "application/json", t, this.timeout, this.onerror.bind(this, "timeout"), function(t) {
                                t && 200 === t.status || (n.onerror(t && t.status), n.closeAndRetry())
                            })
                        }
                    }, {
                        key: "close",
                        value: function(t, n) {
                            this.readyState = a.closed, this.onclose()
                        }
                    }]), n
                }()),
                i = t.Ajax = function() {
                    function t() {
                        u(this, t)
                    }
                    return o(t, null, [{
                        key: "request",
                        value: function(t, n, i, e, r, o, s) {
                            if (window.XDomainRequest) {
                                var u = new XDomainRequest;
                                this.xdomainRequest(u, t, n, e, r, o, s)
                            } else {
                                var a = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                                this.xhrRequest(a, t, n, i, e, r, o, s)
                            }
                        }
                    }, {
                        key: "xdomainRequest",
                        value: function(n, t, i, e, r, o, s) {
                            var u = this;
                            n.timeout = r, n.open(t, i), n.onload = function() {
                                var t = u.parseJSON(n.responseText);
                                s && s(t)
                            }, o && (n.ontimeout = o), n.onprogress = function() {}, n.send(e)
                        }
                    }, {
                        key: "xhrRequest",
                        value: function(n, t, i, e, r, o, s, u) {
                            var a = this;
                            n.open(t, i, !0), n.timeout = o, n.setRequestHeader("Content-Type", e), n.onerror = function() {
                                u && u(null)
                            }, n.onreadystatechange = function() {
                                if (n.readyState === a.states.complete && u) {
                                    var t = a.parseJSON(n.responseText);
                                    u(t)
                                }
                            }, s && (n.ontimeout = s), n.send(r)
                        }
                    }, {
                        key: "parseJSON",
                        value: function(n) {
                            if (!n || "" === n) return null;
                            try {
                                return JSON.parse(n)
                            } catch (t) {
                                return console && console.log("failed to parse JSON response", n), null
                            }
                        }
                    }, {
                        key: "serialize",
                        value: function(t, n) {
                            var i = [];
                            for (var e in t)
                                if (t.hasOwnProperty(e)) {
                                    var r = n ? n + "[" + e + "]" : e,
                                        o = t[e];
                                    "object" === (void 0 === o ? "undefined" : s(o)) ? i.push(this.serialize(o, r)): i.push(encodeURIComponent(r) + "=" + encodeURIComponent(o))
                                }
                            return i.join("&")
                        }
                    }, {
                        key: "appendParams",
                        value: function(t, n) {
                            if (0 === Object.keys(n).length) return t;
                            var i = t.match(/\?/) ? "&" : "?";
                            return "" + t + i + this.serialize(n)
                        }
                    }]), t
                }();
            i.states = {
                complete: 4
            }, t.Presence = {
                syncState: function(t, i, n, e) {
                    var u = this,
                        a = this.clone(t),
                        c = {},
                        h = {};
                    return this.map(a, function(t, n) {
                        i[t] || (h[t] = n)
                    }), this.map(i, function(t, n) {
                        var i = a[t];
                        if (i) {
                            var e = n.metas.map(function(t) {
                                    return t.phx_ref
                                }),
                                r = i.metas.map(function(t) {
                                    return t.phx_ref
                                }),
                                o = n.metas.filter(function(t) {
                                    return r.indexOf(t.phx_ref) < 0
                                }),
                                s = i.metas.filter(function(t) {
                                    return e.indexOf(t.phx_ref) < 0
                                });
                            0 < o.length && (c[t] = n, c[t].metas = o), 0 < s.length && (h[t] = u.clone(i), h[t].metas = s)
                        } else c[t] = n
                    }), this.syncDiff(a, {
                        joins: c,
                        leaves: h
                    }, n, e)
                },
                syncDiff: function(t, n, r, o) {
                    var i = n.joins,
                        e = n.leaves,
                        s = this.clone(t);
                    return r || (r = function() {}), o || (o = function() {}), this.map(i, function(t, n) {
                        var i, e = s[t];
                        s[t] = n, e && (i = s[t].metas).unshift.apply(i, function(t) {
                            if (Array.isArray(t)) {
                                for (var n = 0, i = Array(t.length); n < t.length; n++) i[n] = t[n];
                                return i
                            }
                            return Array.from(t)
                        }(e.metas)), r(t, e, n)
                    }), this.map(e, function(t, n) {
                        var i = s[t];
                        if (i) {
                            var e = n.metas.map(function(t) {
                                return t.phx_ref
                            });
                            i.metas = i.metas.filter(function(t) {
                                return e.indexOf(t.phx_ref) < 0
                            }), o(t, i, n), 0 === i.metas.length && delete s[t]
                        }
                    }), s
                },
                list: function(t, i) {
                    return i || (i = function(t, n) {
                        return n
                    }), this.map(t, function(t, n) {
                        return i(t, n)
                    })
                },
                map: function(n, i) {
                    return Object.getOwnPropertyNames(n).map(function(t) {
                        return i(t, n[t])
                    })
                },
                clone: function(t) {
                    return JSON.parse(JSON.stringify(t))
                }
            };
            var b = function() {
                function i(t, n) {
                    u(this, i), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0
                }
                return o(i, [{
                    key: "reset",
                    value: function() {
                        this.tries = 0, clearTimeout(this.timer)
                    }
                }, {
                    key: "scheduleTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this.timer), this.timer = setTimeout(function() {
                            t.tries = t.tries + 1, t.callback()
                        }, this.timerCalc(this.tries + 1))
                    }
                }]), i
            }()
        }(n)
    },
    150: function(t, n, i) {
        "use strict";

        function e() {
            var t = document.documentElement,
                n = document.body;
            return {
                width: t.clientWidth || n.clientWidth,
                height: window.innerHeight
            }
        }
        i.d(n, "a", function() {
            return e
        })
    },
    162: function(t, n) {
        /**@license MIT-promiscuous-Â©Ruben Verborgh*/
        ! function(h, f) {
            function l(t, n) {
                return (typeof n)[0] == t
            }

            function d(a, c) {
                return (c = function i(e, r, o, s, u, t) {
                    if (s = i.q, e != l) return d(function(t, n) {
                        s.push({
                            p: this,
                            r: t,
                            j: n,
                            1: e,
                            0: r
                        })
                    });
                    if (o && l(h, o) | l(f, o)) try {
                        u = o.then
                    } catch (t) {
                        r = 0, o = t
                    }
                    if (l(h, u)) {
                        function n(n) {
                            return function(t) {
                                u && (u = 0, i(l, n, t))
                            }
                        }
                        try {
                            u.call(o, n(1), r = n(0))
                        } catch (t) {
                            r(t)
                        }
                    } else
                        for (c = function(i, t) {
                                return l(h, i = r ? i : t) ? d(function(t, n) {
                                    v(this, t, n, o, i)
                                }) : a
                            }, t = 0; t < s.length;) u = s[t++], l(h, e = u[r]) ? v(u.p, u.r, u.j, o, e) : (r ? u.r : u.j)(o)
                }).q = [], a.call(a = {
                    then: function(t, n) {
                        return c(t, n)
                    },
                    catch: function(t) {
                        return c(0, t)
                    }
                }, function(t) {
                    c(l, 1, t)
                }, function(t) {
                    c(l, 0, t)
                }), a
            }

            function v(t, n, i, e, r) {
                setTimeout(function() {
                    try {
                        r = (e = r(e)) && l(f, e) | l(h, e) && e.then, l(h, r) ? e == t ? i(TypeError()) : r.call(e, n, i) : n(e)
                    } catch (t) {
                        i(t)
                    }
                })
            }

            function s(n) {
                return d(function(t) {
                    t(n)
                })
            }(t.exports = d).resolve = s, d.reject = function(i) {
                return d(function(t, n) {
                    n(i)
                })
            }, d.all = function(t) {
                return d(function(i, e, r, o) {
                    o = [], r = t.length || i(o), t.map(function(t, n) {
                        s(t).then(function(t) {
                            o[n] = t, --r || i(o)
                        }, e)
                    })
                })
            }, d.race = function(t) {
                return d(function(n, i) {
                    t.map(function(t) {
                        s(t).then(n, i)
                    })
                })
            }
        }("f", "o")
    },
    19: function(t, n, i) {
        "use strict";
        i.d(n, "a", function() {
            return r
        });
        var e = Object.assign || function(t) {
            for (var n, i = 1, e = arguments.length; i < e; i++)
                for (var r in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t
        };
        var r = function() {
            function t(t, n) {
                var i = n ? e({}, n.values, t.values) : t.values;
                this.values = i, this.meta = t.meta, this.t = function(t, n) {
                    return void 0 === n && (n = void 0), n ? function(t, n) {
                        for (var i in n) t = t.replace("$" + i, n[i]);
                        return t
                    }(i[t], n) : i[t]
                }
            }
            return t.decide = function(t, n, i) {
                void 0 === n && (n = "en"), void 0 === i && (i = "en"), n = n.substring(0, 2);
                var e = t[i = i.substring(0, 2)];
                if (e) return e;
                var r = t[n];
                return r || t.en
            }, t
        }()
    },
    202: function(t, n, i) {
        "use strict";

        function e() {
            var t = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                n = 0,
                i = [],
                e = (new Date).getTime(),
                r = e === n;
            n = e;
            for (var o = new Array(8), s = 7; 0 <= s; s--) o[s] = t.charAt(e % 64), e = Math.floor(e / 64);
            if (0 !== e) throw new Error("We should have converted the entire timestamp.");
            var u = o.join("");
            if (r) {
                for (s = 11; 0 <= s && 63 === i[s]; s--) i[s] = 0;
                i[s]++
            } else
                for (var s = 0; s < 12; s++) i[s] = Math.floor(64 * Math.random());
            for (s = 0; s < 12; s++) u += t.charAt(i[s]);
            if (20 != u.length) throw new Error("Length should be 20.");
            return u
        }
        i.d(n, "a", function() {
            return e
        })
    },
    203: function(t, n, i) {
        "use strict";
        var e = i(100),
            r = window.WebSocket,
            o = function() {
                function t(t, n, i, e) {
                    this.u = t, this.O = null, this.w = n, this.I = i, this.T = e, this.y = {}
                }
                return t.prototype.connect = function(t) {
                    var n = {
                        appId: this.w,
                        origin: this.I,
                        sessionId: this.T,
                        boken: t
                    };
                    try {
                        this.O = new e.Socket(this.u, {
                            params: n,
                            transport: r
                        }), this.O.connect()
                    } catch (t) {
                        "SecurityError" === t.message && (this.O = new e.Socket(this.u, {
                            params: n,
                            transport: e.LongPoll
                        }), this.O.connect())
                    }
                }, t.prototype.disconnect = function() {
                    this.O && (this.M(), this.N())
                }, t.prototype.M = function() {
                    for (var t = 0, n = Object.keys(this.y); t < n.length; t++) {
                        var i = n[t];
                        this.y[i].phoenixChannel.leave()
                    }
                    this.y = {}
                }, t.prototype.N = function() {
                    this.O && (this.O.disconnect(void 0, "1000"), this.O.reconnectTimer.reset(), clearInterval(this.O.heartbeatTimer))
                }, t.prototype.getOrJoin = function(t, n) {
                    var i = void 0 === n ? {} : n,
                        e = i.initialData,
                        r = void 0 === e ? {} : e,
                        o = i.onRejoin,
                        s = void 0 === o ? {} : o;
                    if (!this.O) throw new Error("[TalkJS] Socket not connected");
                    var u = t + ":" + this.w,
                        a = this.y[u];
                    return a || (a = new c(this.O, u, {
                        initialData: r,
                        onRejoin: s
                    }), this.y[u] = a), a.phoenixChannel
                }, t
            }();
        n.a = o;
        var c = function(t, n, i) {
            var e = i.initialData,
                r = i.onRejoin,
                o = this;
            this.S = 0, this.phoenixChannel = t.channel(n, e), this.phoenixChannel.onError(function(t) {
                return !1
            }), this.phoenixChannel.onClose(function(t) {
                return !1
            }), this.phoenixChannel.join().receive("ok", function() {
                1 <= o.S && Object.keys(r).forEach(function(t) {
                    return r[t](o.phoenixChannel)
                }), o.S++
            }).receive("error", function(t) {
                return !1
            })
        }
    },
    21: function(t, n, i) {
        "use strict";
        i.d(n, "m", function() {
            return o
        }), i.d(n, "c", function() {
            return s
        }), i.d(n, "j", function() {
            return u
        }), i.d(n, "b", function() {
            return a
        }), i.d(n, "e", function() {
            return c
        }), i.d(n, "l", function() {
            return h
        }), i.d(n, "d", function() {
            return f
        }), i.d(n, "g", function() {
            return l
        }), i.d(n, "k", function() {
            return d
        }), i.d(n, "a", function() {
            return v
        }), i.d(n, "i", function() {
            return g
        }), i.d(n, "h", function() {
            return b
        });
        var e = i(22),
            r = i(30);

        function o() {
            var t = window.crypto,
                n = t ? function() {
                    return t.getRandomValues(new Uint8Array(1))[0]
                } : function() {
                    return Math.floor(255 * Math.random())
                };
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(t) {
                return (t ^ n() & 15 >> t / 4).toString(16)
            })
        }

        function s() {
            var i = {},
                t = new e.a(function(t, n) {
                    i.resolve = t, i.reject = n
                });
            return i.promise = t, i
        }

        function u(n, i) {
            var e = function(t) {
                "string" == typeof t.data && t.data === n && (i(), window.removeEventListener("message", e))
            };
            window.addEventListener("message", e, !1)
        }

        function a(t) {
            return n = JSON.stringify(t), btoa(unescape(encodeURIComponent(n)));
            var n
        }

        function c(t, r, o) {
            return new e.a(function(n, i) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    if (4 == e.readyState) {
                        if (200 <= e.status && e.status < 400) {
                            var t = e.response;
                            n(t)
                        }
                        e.status ? i(e.responseText) : i("Error: Unable to connect")
                    }
                }, e.open(t, r), e.setRequestHeader("Content-Type", "application/json"), e.send(o)
            })
        }

        function h(t, n) {
            document.cookie = t + "=" + n + ";path=/"
        }

        function f(t) {
            var n = l(t);
            document.cookie = t + "=" + n + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
        }

        function l(t) {
            for (var n = 0, i = document.cookie.split("; ").map(function(t) {
                    return t.split("=")
                }).map(function(t) {
                    return {
                        name: t[0],
                        value: t[1]
                    }
                }); n < i.length; n++) {
                var e = i[n];
                if (e.name === t) return e.value
            }
        }

        function d(t, n) {
            for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
        }
        i.d(n, "f", function() {
            return r.b
        });
        var v = function() {
                function s(t) {
                    this.fields = t
                }
                return s.prototype.add = function(t, n) {
                    return new s(this.fields.concat([
                        [t, n]
                    ]))
                }, s.prototype.split = function() {
                    for (var t = [], n = [], i = 0, e = this.fields; i < e.length; i++) {
                        var r = e[i],
                            o = r[1];
                        "object" == typeof o || "string" == typeof o && 40 < o.length ? n.push(r) : t.push(r)
                    }
                    return {
                        short: new s(t),
                        long: new s(n)
                    }
                }, s.prototype.toString = function() {
                    return this.fields.map(function(t) {
                        var n = t[0],
                            i = t[1];
                        return null == i && (i = ""), "object" == typeof i && (i = encodeURIComponent(a(i))), n + "=" + i
                    }).join("&")
                }, s
            }(),
            p = {
                ByV39eoc: 1,
                B1FxElnd: 1,
                aW4c49tW: 1,
                qGfuGtx: 1,
                SbERe5ee: 1,
                ilaVEa15: 1,
                FOlWOSaH: 1,
                dao5gGmT: 1,
                DLUgAhzL: 1,
                fqXFumr6: 1,
                FtiWHMYT: 1,
                "66iWOyWt": 1,
                "1375amYi": 1,
                mWbJgzpt: 1,
                jO7GqAvL: 1,
                SkFIKxo5: 1,
                "2z4ILc3y": 1,
                aDr8oPL1: 1
            };

        function g(t) {
            return !Object(e.b)(t, "t") && !p[t]
        }

        function b() {
            return !!window.cordova
        }
    },
    22: function(t, n, i) {
        "use strict";
        i.d(n, "a", function() {
            return e
        }), i.d(n, "b", function() {
            return r
        });
        var e = i(162);

        function r(t, n, i) {
            return i = i || 0, t.substr(i, n.length) === n
        }
    },
    228: function(t, n, i) {
        var e = !1;
        if ("object" == typeof window.localStorage) try {
            window.localStorage.setItem("localStorage__test", 1), window.localStorage.removeItem("localStorage__test"), e = !0
        } catch (t) {}
        var r = {};
        r.isSupported = e ? (r.setItem = window.localStorage.setItem.bind(window.localStorage), r.getItem = window.localStorage.getItem.bind(window.localStorage), !0) : (r.getItem = function() {
            return null
        }, !(r.setItem = function() {})), r.set = function(t, n) {
            return r.setItem(t, JSON.stringify(n))
        }, r.get = function(t) {
            return JSON.parse(r.getItem(t) || "null")
        }, t.exports = r
    },
    30: function(t, n, i) {
        "use strict";

        function e(t) {
            return function() {
                try {
                    return t.apply(this, arguments)
                } catch (t) {
                    0
                }
            }
        }

        function r(t) {
            return t.replace(/%2F/g, "/").replace(/^.*?\/([^\/]+?)(?:\?.*)?$/, "$1")
        }

        function o(t) {
            return /(gif|png|jpg|jpeg|svg|bmp)$/i.test(t)
        }

        function s(t) {
            return encodeURIComponent(t).replace(/%20/g, "+")
        }

        function u(t, n, i) {
            return t + "_" + n + "_" + (i || "GLOBAL")
        }

        function c(n) {
            return new Promise(function(t) {
                return setTimeout(t, n)
            })
        }

        function h(n, i, t) {
            var e = void 0 === t ? {} : t,
                r = e.delay,
                o = void 0 === r ? 0 : r,
                s = e.log,
                u = e.retriedCount,
                a = void 0 === u ? 0 : u;
            return i().catch(function(t) {
                if (s && s("[TalkJS] Retries left: " + n + ". Error: " + JSON.stringify(t) + "."), 0 === n) throw t;
                return c(1e3 * o * Math.pow(2, a)).then(function() {
                    return h(n - 1, i, {
                        retriedCount: a + 1,
                        delay: o,
                        log: s
                    })
                })
            })
        }
        i.d(n, "g", function() {
            return e
        }), i.d(n, "c", function() {
            return r
        }), i.d(n, "d", function() {
            return o
        }), i.d(n, "b", function() {
            return s
        }), i.d(n, "a", function() {
            return u
        }), i.d(n, "f", function() {
            return c
        }), i.d(n, "e", function() {
            return h
        })
    },
    42: function(t, n, i) {
        "use strict";
        i.d(n, "c", function() {
            return l
        }), i.d(n, "b", function() {
            return e
        }), i.d(n, "a", function() {
            return v
        });
        var h = i(22),
            f = "talkjs_";

        function l(t, n, i) {
            if (!(n instanceof Array)) throw console.error("`params` must be array"), new Error("`params` must be array");
            d({
                params: n,
                method: t
            }, i)
        }
        var c = 0;

        function e(s, u, a) {
            return new h.a(function(n, i) {
                var t = "respond_" + c++,
                    e = {},
                    r = function(t) {
                        return v(t, {
                            sourceWindow: a,
                            handlers: e
                        })
                    },
                    o = function() {
                        return window.removeEventListener("message", r)
                    };
                e[t] = function(t) {
                    o(), n(t)
                }, e["error_" + t] = function(t) {
                    o(), i(t)
                }, window.addEventListener("message", r), d({
                    method: s,
                    params: u,
                    responseMethod: t
                }, a)
            })
        }

        function d(t, n) {
            n.postMessage(f + JSON.stringify(t), "*")
        }

        function v(t, n) {
            var i = n.sourceWindow,
                e = n.handlers,
                r = n.prefix,
                o = void 0 === r ? "" : r;
            if (t.data && (!t.data || "string" == typeof t.data) && Object(h.b)(t.data, f)) {
                var s;
                try {
                    s = JSON.parse(t.data.slice(f.length))
                } catch (t) {
                    return
                }
                if (s) {
                    var u = e[o + s.method];
                    if (u && i === t.source) {
                        var a;
                        try {
                            a = h.a.resolve(u.apply(e, s.params))
                        } catch (t) {
                            a = h.a.reject(t)
                        }
                        var c = s.responseMethod;
                        c ? a.then(function(t) {
                            return l(c, [t], i)
                        }, function(t) {
                            return l("error_" + c, [t], i)
                        }) : a.catch(function(t) {
                            throw t
                        })
                    }
                }
            }
        }
    },
    551: function(e, r, o) {
        "use strict";
        var s;
        ! function(t) {
            function n(s, t, n) {
                var r, u, a, c, h, f, l, d, v, p = 0,
                    g = [],
                    b = 0,
                    O = !1,
                    o = [],
                    w = [],
                    I = !1;
                if (r = (n = n || {}).encoding || "UTF8", (v = n.numRounds || 1) !== parseInt(v, 10) || v < 1) throw Error("numRounds must a integer >= 1");
                if ("SHA-1" !== s) throw Error("Chosen SHA variant is not supported");
                h = 512, f = E, l = i, c = 160, d = function(t) {
                    return t.slice()
                }, a = j(t, r), u = k(s), this.setHMACKey = function(t, n, i) {
                    var e;
                    if (!0 === O) throw Error("HMAC key already set");
                    if (!0 === I) throw Error("Cannot set HMAC key after calling update");
                    if (t = (n = j(n, r = (i || {}).encoding || "UTF8")(t)).binLen, n = n.value, i = (e = h >>> 3) / 4 - 1, e < t / 8) {
                        for (n = l(n, t, 0, k(s), c); n.length <= i;) n.push(0);
                        n[i] &= 4294967040
                    } else if (t / 8 < e) {
                        for (; n.length <= i;) n.push(0);
                        n[i] &= 4294967040
                    }
                    for (t = 0; t <= i; t += 1) o[t] = 909522486 ^ n[t], w[t] = 1549556828 ^ n[t];
                    u = f(o, u), p = h, O = !0
                }, this.update = function(t) {
                    var n, i, e, r = 0,
                        o = h >>> 5;
                    for (t = (n = a(t, g, b)).binLen, i = n.value, n = t >>> 5, e = 0; e < n; e += o) r + h <= t && (u = f(i.slice(e, e + o), u), r += h);
                    p += r, g = i.slice(r >>> 5), b = t % h, I = !0
                }, this.getHash = function(t, n) {
                    var i, e, r, o;
                    if (!0 === O) throw Error("Cannot call getHash after setting HMAC key");
                    switch (r = N(n), t) {
                        case "HEX":
                            i = function(t) {
                                return m(t, c, r)
                            };
                            break;
                        case "B64":
                            i = function(t) {
                                return T(t, c, r)
                            };
                            break;
                        case "BYTES":
                            i = function(t) {
                                return y(t, c)
                            };
                            break;
                        case "ARRAYBUFFER":
                            try {
                                e = new ArrayBuffer(0)
                            } catch (t) {
                                throw Error("ARRAYBUFFER not supported by this environment")
                            }
                            i = function(t) {
                                return M(t, c)
                            };
                            break;
                        default:
                            throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
                    }
                    for (o = l(g.slice(), b, p, d(u), c), e = 1; e < v; e += 1) o = l(o, c, 0, k(s), c);
                    return i(o)
                }, this.getHMAC = function(t, n) {
                    var i, e, r, o;
                    if (!1 === O) throw Error("Cannot call getHMAC without first setting HMAC key");
                    switch (r = N(n), t) {
                        case "HEX":
                            i = function(t) {
                                return m(t, c, r)
                            };
                            break;
                        case "B64":
                            i = function(t) {
                                return T(t, c, r)
                            };
                            break;
                        case "BYTES":
                            i = function(t) {
                                return y(t, c)
                            };
                            break;
                        case "ARRAYBUFFER":
                            try {
                                i = new ArrayBuffer(0)
                            } catch (t) {
                                throw Error("ARRAYBUFFER not supported by this environment")
                            }
                            i = function(t) {
                                return M(t, c)
                            };
                            break;
                        default:
                            throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
                    }
                    return e = l(g.slice(), b, p, d(u), c), o = f(w, k(s)), i(o = l(e, c, h, o, c))
                }
            }

            function m(t, n, i) {
                var e, r, o = "";
                for (n /= 8, e = 0; e < n; e += 1) r = t[e >>> 2] >>> 8 * (3 + e % 4 * -1), o += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r);
                return i.outputUpper ? o.toUpperCase() : o
            }

            function T(t, n, i) {
                var e, r, o, s = "",
                    u = n / 8;
                for (e = 0; e < u; e += 3)
                    for (r = e + 1 < u ? t[e + 1 >>> 2] : 0, o = e + 2 < u ? t[e + 2 >>> 2] : 0, o = (t[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255) << 16 | (r >>> 8 * (3 + (e + 1) % 4 * -1) & 255) << 8 | o >>> 8 * (3 + (e + 2) % 4 * -1) & 255, r = 0; r < 4; r += 1) s += 8 * e + 6 * r <= n ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - r) & 63) : i.b64Pad;
                return s
            }

            function y(t, n) {
                var i, e, r = "",
                    o = n / 8;
                for (i = 0; i < o; i += 1) e = t[i >>> 2] >>> 8 * (3 + i % 4 * -1) & 255, r += String.fromCharCode(e);
                return r
            }

            function M(t, n) {
                var i, e, r = n / 8,
                    o = new ArrayBuffer(r);
                for (e = new Uint8Array(o), i = 0; i < r; i += 1) e[i] = t[i >>> 2] >>> 8 * (3 + i % 4 * -1) & 255;
                return o
            }

            function N(t) {
                var n = {
                    outputUpper: !1,
                    b64Pad: "=",
                    shakeLen: -1
                };
                if (t = t || {}, n.outputUpper = t.outputUpper || !1, !0 === t.hasOwnProperty("b64Pad") && (n.b64Pad = t.b64Pad), "boolean" != typeof n.outputUpper) throw Error("Invalid outputUpper formatting option");
                if ("string" != typeof n.b64Pad) throw Error("Invalid b64Pad formatting option");
                return n
            }

            function j(t, l) {
                var n;
                switch (l) {
                    case "UTF8":
                    case "UTF16BE":
                    case "UTF16LE":
                        break;
                    default:
                        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
                }
                switch (t) {
                    case "HEX":
                        n = function(t, n, i) {
                            var e, r, o, s, u, a = t.length;
                            if (0 != a % 2) throw Error("String of HEX type must be in byte increments");
                            for (n = n || [0], u = (i = i || 0) >>> 3, e = 0; e < a; e += 2) {
                                if (r = parseInt(t.substr(e, 2), 16), isNaN(r)) throw Error("String of HEX type contains invalid characters");
                                for (o = (s = (e >>> 1) + u) >>> 2; n.length <= o;) n.push(0);
                                n[o] |= r << 8 * (3 + s % 4 * -1)
                            }
                            return {
                                value: n,
                                binLen: 4 * a + i
                            }
                        };
                        break;
                    case "TEXT":
                        n = function(t, n, i) {
                            var e, r, o, s, u, a, c, h, f = 0;
                            if (n = n || [0], u = (i = i || 0) >>> 3, "UTF8" === l)
                                for (h = 3, o = 0; o < t.length; o += 1)
                                    for (r = [], (e = t.charCodeAt(o)) < 128 ? r.push(e) : e < 2048 ? (r.push(192 | e >>> 6), r.push(128 | 63 & e)) : e < 55296 || 57344 <= e ? r.push(224 | e >>> 12, 128 | e >>> 6 & 63, 128 | 63 & e) : (o += 1, e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(o)), r.push(240 | e >>> 18, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e)), s = 0; s < r.length; s += 1) {
                                        for (a = (c = f + u) >>> 2; n.length <= a;) n.push(0);
                                        n[a] |= r[s] << 8 * (h + c % 4 * -1), f += 1
                                    } else if ("UTF16BE" === l || "UTF16LE" === l)
                                        for (h = 2, r = "UTF16LE" === l || "UTF16LE" !== l && !1, o = 0; o < t.length; o += 1) {
                                            for (e = t.charCodeAt(o), !0 === r && (e = (s = 255 & e) << 8 | e >>> 8), a = (c = f + u) >>> 2; n.length <= a;) n.push(0);
                                            n[a] |= e << 8 * (h + c % 4 * -1), f += 2
                                        }
                                    return {
                                        value: n,
                                        binLen: 8 * f + i
                                    }
                        };
                        break;
                    case "B64":
                        n = function(t, n, i) {
                            var e, r, o, s, u, a, c, h = 0;
                            if (-1 === t.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                            if (r = t.indexOf("="), t = t.replace(/\=/g, ""), -1 !== r && r < t.length) throw Error("Invalid '=' found in base-64 string");
                            for (n = n || [0], a = (i = i || 0) >>> 3, r = 0; r < t.length; r += 4) {
                                for (u = t.substr(r, 4), o = s = 0; o < u.length; o += 1) s |= (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(u[o])) << 18 - 6 * o;
                                for (o = 0; o < u.length - 1; o += 1) {
                                    for (e = (c = h + a) >>> 2; n.length <= e;) n.push(0);
                                    n[e] |= (s >>> 16 - 8 * o & 255) << 8 * (3 + c % 4 * -1), h += 1
                                }
                            }
                            return {
                                value: n,
                                binLen: 8 * h + i
                            }
                        };
                        break;
                    case "BYTES":
                        n = function(t, n, i) {
                            var e, r, o, s, u;
                            for (n = n || [0], o = (i = i || 0) >>> 3, r = 0; r < t.length; r += 1) e = t.charCodeAt(r), s = (u = r + o) >>> 2, n.length <= s && n.push(0), n[s] |= e << 8 * (3 + u % 4 * -1);
                            return {
                                value: n,
                                binLen: 8 * t.length + i
                            }
                        };
                        break;
                    case "ARRAYBUFFER":
                        try {
                            n = new ArrayBuffer(0)
                        } catch (t) {
                            throw Error("ARRAYBUFFER not supported by this environment")
                        }
                        n = function(t, n, i) {
                            var e, r, o, s, u;
                            for (n = n || [0], r = (i = i || 0) >>> 3, u = new Uint8Array(t), e = 0; e < t.byteLength; e += 1) o = (s = e + r) >>> 2, n.length <= o && n.push(0), n[o] |= u[e] << 8 * (3 + s % 4 * -1);
                            return {
                                value: n,
                                binLen: 8 * t.byteLength + i
                            }
                        };
                        break;
                    default:
                        throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
                }
                return n
            }

            function h(t, n) {
                return t << n | t >>> 32 - n
            }

            function f(t, n) {
                var i = (65535 & t) + (65535 & n);
                return ((t >>> 16) + (n >>> 16) + (i >>> 16) & 65535) << 16 | 65535 & i
            }

            function l(t, n, i, e, r) {
                var o = (65535 & t) + (65535 & n) + (65535 & i) + (65535 & e) + (65535 & r);
                return ((t >>> 16) + (n >>> 16) + (i >>> 16) + (e >>> 16) + (r >>> 16) + (o >>> 16) & 65535) << 16 | 65535 & o
            }

            function k(t) {
                if ("SHA-1" !== t) throw Error("No SHA variants supported");
                return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
            }

            function E(t, n) {
                var i, e, r, o, s, u, a, c = [];
                for (i = n[0], e = n[1], r = n[2], o = n[3], s = n[4], a = 0; a < 80; a += 1) c[a] = a < 16 ? t[a] : h(c[a - 3] ^ c[a - 8] ^ c[a - 14] ^ c[a - 16], 1), u = a < 20 ? l(h(i, 5), e & r ^ ~e & o, s, 1518500249, c[a]) : a < 40 ? l(h(i, 5), e ^ r ^ o, s, 1859775393, c[a]) : a < 60 ? l(h(i, 5), e & r ^ e & o ^ r & o, s, 2400959708, c[a]) : l(h(i, 5), e ^ r ^ o, s, 3395469782, c[a]), s = o, o = r, r = h(e, 30), e = i, i = u;
                return n[0] = f(i, n[0]), n[1] = f(e, n[1]), n[2] = f(r, n[2]), n[3] = f(o, n[3]), n[4] = f(s, n[4]), n
            }

            function i(t, n, i, e) {
                var r;
                for (r = 15 + (n + 65 >>> 9 << 4); t.length <= r;) t.push(0);
                for (t[n >>> 5] |= 128 << 24 - n % 32, n += i, t[r] = 4294967295 & n, t[r - 1] = n / 4294967296 | 0, n = t.length, r = 0; r < n; r += 16) e = E(t.slice(r, r + 16), e);
                return e
            }
            void 0 === (s = function() {
                return n
            }.call(r, o, r, e)) || (e.exports = s)
        }()
    },
    552: function(t, n, i) {
        t.exports = i.p + "5e83cb28291edefe5f467e9b31453b97.mp3"
    },
    553: function(t, n) {
        t.exports = '.__talkjs_popup {\n  position: fixed;\n  right: 0;\n  border: 0;\n  z-index: 50000;\n  bottom: 77px;\n  width: 390px;\n  height: calc(75% - 77px);\n  height: calc(75vh - 77px);\n}\n@media all and (max-width: 420px) and (min-width: 1px), all and (max-height: 420px) and (min-width: 1px) {\n  .__talkjs_popup {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n}\n.__talkjs_launcher {\n  display: block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  z-index: 1000;\n  background-color: #0785f2;\n  background-position: center 17px;\n  background-size: 30px 30px;\n  background-repeat: no-repeat;\n  color: #fff;\n  text-align: center;\n  box-shadow: 2px 2px 19px 1px rgba(0,0,0,0.1);\n}\n.__talkjs_launcher.open {\n  background-size: 18px;\n  background-position: center 21px;\n  background-image: url("CLOSE");\n}\n@media all and (max-width: 420px), all and (max-height: 420px) {\n  .__talkjs_launcher.open {\n    display: none;\n  }\n}\n.__talkjs_launcher.closed {\n  background-image: url("OPEN");\n}\n.__talkjs_launcher:hover {\n  box-shadow: 2px 2px 19px 1px rgba(0,0,0,0.25);\n}\n'
    },
    554: function(t, n) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMxMnB4IiBoZWlnaHQ9IjMxMnB4IiB2aWV3Qm94PSIwIDAgMzEyIDMxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNzguNTAwNjgyLDE1NS44NjI2MTQgTDMwNi41Nzk2ODIsMjguNDgzMTU5MSBDMzEyLjcyMDEzNiwyMi40MDQ4ODY0IDMxMi43MjAxMzYsMTIuNTY0NjEzNiAzMDYuNTc5NjgyLDYuNTAxODg2MzYgQzMwMC40NTQ3NzMsMC40MjM2MTM2MzYgMjkwLjUwNTY4MiwwLjQyMzYxMzYzNiAyODQuMzgwNzczLDYuNTAxODg2MzYgTDE1Ni40MTA1OTEsMTMzLjc3MjUyMyBMMjcuMjU4OTU0NSw0LjYwNTM0MDkxIEMyMS4xMzQwNDU1LC0xLjUzNTExMzY0IDExLjE4NDk1NDUsLTEuNTM1MTEzNjQgNS4wNjAwNDU0NSw0LjYwNTM0MDkxIEMtMS4wNjQ4NjM2NCwxMC43NjEzNDA5IC0xLjA2NDg2MzY0LDIwLjcyNTk3NzMgNS4wNjAwNDU0NSwyNi44NjY0MzE4IEwxMzQuMTE4NDA5LDE1NS45NDAzNDEgTDQuNTkzNjgxODIsMjg0Ljc0OTk3NyBDLTEuNTMxMjI3MjcsMjkwLjgyODI1IC0xLjUzMTIyNzI3LDMwMC42Njg1MjMgNC41OTM2ODE4MiwzMDYuNzMxMjUgQzEwLjcxODU5MDksMzEyLjgwOTUyMyAyMC42Njc2ODE4LDMxMi44MDk1MjMgMjYuNzkyNTkwOSwzMDYuNzMxMjUgTDE1Ni4yMDg1LDE3OC4wMzA0MzIgTDI4NC44NDcxMzYsMzA2LjY4NDYxNCBDMjkwLjk3MjA0NSwzMTIuODI1MDY4IDMwMC45MjExMzYsMzEyLjgyNTA2OCAzMDcuMDQ2MDQ1LDMwNi42ODQ2MTQgQzMxMy4xNzA5NTUsMzAwLjUyODYxNCAzMTMuMTcwOTU1LDI5MC41NjM5NzcgMzA3LjA0NjA0NSwyODQuNDIzNTIzIEwxNzguNTAwNjgyLDE1NS44NjI2MTQgTDE3OC41MDA2ODIsMTU1Ljg2MjYxNCBaIiBpZD0iQ2xvc2UiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
    },
    555: function(t, n) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQyMHB4IiBoZWlnaHQ9IjQyMHB4IiB2aWV3Qm94PSIwIDAgNDIwIDQyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTaGFwZSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODcuNDAyNzY1LDMyNC41MzY1NDcgTDMwNS45NTAxMzgsNDE3LjM5ODY1NiBDMzA3Ljg5MDk1OCw0MTguODg0ODcgMzA5LjA3OTkyOCw0MTkuNjM2NzE5IDMxMC4yMzM5MjksNDE5LjYzNjcxOSBDMzEzLjUyMTA4Myw0MTkuNjM2NzE5IDMxNC41MDAyMzYsNDE3LjQxNjE0MSAzMTQuNTAwMjM2LDQxMy43MjY4MzUgTDMxNC41MDAyMzYsMzI1LjkwMDM2NyBDMzE0LjUwMDIzNiwzMTkuNjkzMjQgMzE4LjU3NDIwOSwzMTQuNzYyNTA5IDMyNC4wODE5NDEsMzE0Ljc2MjUwOSBMMzY3LjE4MjEyOSwzMTQuNzI3NTM5IEM0MDUuOTgxMDQxLDMxNC43Mjc1MzkgNDE5LjYzNjcxOSwyOTUuNTk5MDk5IDQxOS42MzY3MTksMjc5Ljc1NzgxMiBMNDE5LjYzNjcxOSwzNC45Njk3MjY2IEM0MTkuNjM2NzE5LDE3LjQ4NDg2MzMgNDA2LjU1ODA0MSwwIDM2Ni45MzczNDEsMCBMNTIuMjYyMjU2MywwIEMxNC4wMjI4NjA0LDAgMCwxNi45NDI4MzI1IDAsMzQuOTY5NzI2NiBMMCwyNzkuNzU3ODEyIEMwLDI5Ni43MDA2NDUgMTQuNDc3NDY2OCwzMTQuNzI3NTM5IDUyLjQ1NDU4OTgsMzE0LjcyNzUzOSBMMTU3LjM2Mzc3LDMxNC43Mjc1MzkgQzE1Ny4zNjM3NywzMTQuNzI3NTM5IDE3OS4zMDcyNzMsMzE1LjMzOTUwOSAxODcuNDAyNzY1LDMyNC41MzY1NDcgTDE4Ny40MDI3NjUsMzI0LjUzNjU0NyBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTEiIGZpbGw9IiMwNzg1RjIiIGN4PSIxMTUuMzQ3NjYxIiBjeT0iMTYyLjE4NDU1NiIgcng9IjI4LjM0NzY2MDgiIHJ5PSIyOC4xODQ1NTU3Ij48L2VsbGlwc2U+CiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTEiIGZpbGw9IiMwNzg1RjIiIGN4PSIyMTAuNjk4ODg0IiBjeT0iMTYyLjE4NDU1NiIgcng9IjI4LjM0NzY2MDgiIHJ5PSIyOC4xODQ1NTU3Ij48L2VsbGlwc2U+CiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTEiIGZpbGw9IiMwNzg1RjIiIGN4PSIzMDYuMDUwMTA2IiBjeT0iMTYyLjE4NDU1NiIgcng9IjI4LjM0NzY2MDgiIHJ5PSIyOC4xODQ1NTU3Ij48L2VsbGlwc2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
    },
    556: function(t, n, i) {
        "use strict";
        i.r(n), n.default = {
            ar: {
                DESKTOP_NOTIFICATIONS_ERROR: "Ù„Ø§ ÙŠÙ…ÙƒÙ† ØªÙ…ÙƒÙŠÙ† Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ø³Ø·Ø­ Ø§Ù„Ù…ÙƒØªØ¨ Ù†Ø¸Ø±Ù‹Ø§ Ù„Ø£Ù† Ø§Ù„Ù…ØªØµÙØ­ ÙŠØ¹Ù…Ù„ Ø¹Ù„Ù‰ Ø­Ø¸Ø±Ù‡Ø§ Ø¨Ø´ÙƒÙ„ Ù†Ø´Ø·. Ø¬Ø±Ù‘Ø¨ Ø§Ù„Ø¨Ø­Ø« ÙÙŠ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ØªØµÙØ­ Ø¢Ø®Ø±.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Ø¥Ø¹Ù„Ø§Ù… $APPNAME Ø§Ù„ØªØ¬Ø±ÙŠØ¨ÙŠ",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ø¥Ø°Ø§ Ø£Ø¨Ù‚ÙŠØª Ø¹Ù„Ø§Ù…Ø© ØªØ¨ÙˆÙŠØ¨ Ø§Ù„Ù…ØªØµÙØ­ Ù…ÙØªÙˆØ­Ø© ØŒ ÙØ³ØªØ±Ù‰ Ù‡Ø°Ø§ ÙŠÙ†Ø¨Ø«Ù‚ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØªØ­Ø¯Ø« Ø´Ø®Øµ Ù…Ø¹Ùƒ."
            },
            cs: {
                DESKTOP_NOTIFICATIONS_ERROR: "Nelze povolit upozornÄ›nÃ­ na ploÅ¡e, protoÅ¾e vÃ¡Å¡ prohlÃ­Å¾eÄ je aktivnÄ› blokuje. Zkuste se podÃ­vat na nastavenÃ­ nebo zkuste pouÅ¾Ã­t jinÃ½ prohlÃ­Å¾eÄ.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notifikace",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Pokud nechÃ¡te kartu prohlÃ­Å¾eÄe otevÅ™enou, uvidÃ­te tento popup jakmile s vÃ¡mi bude nÄ›kdo mluvit."
            },
            da: {
                DESKTOP_NOTIFICATIONS_ERROR: "Kan ikke aktivere skrivebordsmeddelelser, fordi din browser aktivt blokerer dem. PrÃ¸v at kigge i indstillingerne eller benyt en anden browser.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demomeddelelse",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Hvis du holder dit browser-faneblad Ã¥ben, vil du se det her komme op, nÃ¥r nogen taler til dig."
            },
            de: {
                DESKTOP_NOTIFICATIONS_ERROR: "Desktop-Benachrichtigungen kÃ¶nnen nicht aktiviert werden, da Ihr Browser sie aktiv blockiert. Versuchen Sie, in den Einstellungen nachzuschlagen oder einen anderen Browser zu verwenden.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Demo-Benachrichtigung",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Wenn Sie Ihre Browser-Registerkarte geÃ¶ffnet lassen, wird dies angezeigt, wenn jemand mit Ihnen spricht."
            },
            en: {
                DESKTOP_NOTIFICATIONS_ERROR: "Can't enable desktop notifications because your browser actively blocks them. Try looking in the settings or using a different browser.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notification",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "If you keep your browser tab open, you'll see this pop up when someone talks to you."
            },
            es: {
                DESKTOP_NOTIFICATIONS_ERROR: "No se logrÃ³ habilitar las notificaciones de escritorio, comprueba que tu navegador no las estÃ© bloqueando o intenta con otro navegador.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME notificaciÃ³n de prueba",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Si dejas esta pestaÃ±a abierta, verÃ¡s este pop up cuando alguien te hable."
            },
            fr: {
                DESKTOP_NOTIFICATIONS_ERROR: "Impossible d'activer les notifications sur votre ordinateur car votre navigateur les bloque. Essayez de changer ses paramÃ¨tres ou de changer de navigateur.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "Notification de dÃ©monstration $APPNAME",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Si vous maintenez l'onglet ouvert dans votre navigateur vous verrez apparaÃ®tre une alerte lorsque quelqu'un vous parlera."
            },
            id: {
                DESKTOP_NOTIFICATIONS_ERROR: "Tidak dapat mengaktifkan pemberitahuan desktop karena browser Anda secara aktif memblokir mereka. Coba cari di pengaturan atau menggunakan browser yang berbeda.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "pemberitahuan demo $APPNAME",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Jika Anda membiarkan tab browser tetap terbuka, Anda akan melihat ini muncul ketika seseorang berbicara kepada Anda."
            },
            ja: {
                DESKTOP_NOTIFICATIONS_ERROR: "ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã®é€šçŸ¥ã¯ãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ã‚‹ãŸã‚ã€ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã®é€šçŸ¥ã‚’æœ‰åŠ¹ã«ã§ãã¾ã›ã‚“ã€‚è¨­å®šã‚’ç¢ºèªã™ã‚‹ã‹ã€åˆ¥ã®ãƒ–ãƒ©ã‚¦ã‚¶ã‚’ä½¿ç”¨ã—ã¦ãã ã•ã„ã€‚",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME ãƒ‡ãƒ¢é€šçŸ¥",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "ãƒ–ãƒ©ã‚¦ã‚¶ã®ã‚¿ãƒ–ã‚’é–‹ã„ãŸã¾ã¾ã«ã—ã¦ãŠãã¨ã€èª°ã‹ãŒã‚ãªãŸã«è©±ã—ã‹ã‘ãŸã¨ãã«ã“ã®ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ—ãŒè¡¨ç¤ºã•ã‚Œã¾ã™ã€‚"
            },
            nb: {
                DESKTOP_NOTIFICATIONS_ERROR: "Kan ikke aktivere skrivebords varsler fordi nettleseren din aktivt blokkerer dem. PrÃ¸v Ã¥ se i innstillingene eller bruke en annen nettleser.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo varslinger",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Hvis du holder nettleservinduet Ã¥pent, vil du se dette varsel nÃ¥r noen snakker til deg."
            },
            nl: {
                DESKTOP_NOTIFICATIONS_ERROR: "Desktop notificaties kunnen niet geactiveerd worden omdat de browser het blokkeert. Check de instellingen van je browser of probeer een andere browser.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demo notificatie",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Als je je browser open houdt, zie je deze popup als iemand tegen je praat."
            },
            pl: {
                DESKTOP_NOTIFICATIONS_ERROR: "Nie moÅ¼na aktywowaÄ‡ powiadomieÅ„, poniewaÅ¼ twoja przeglÄ…darka je blokuje. ProszÄ™ zmieniÄ‡ ustawienie lub sprÃ³bowaÄ‡ innej przeglÄ…darki.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME przykÅ‚adowe powiadomienie",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "JeÅ›li zostawisz tÄ™ kartÄ™ otwartÄ…, zobaczysz takie powiadomienie, gdy ktoÅ› napisze do Ciebie."
            },
            pt: {
                DESKTOP_NOTIFICATIONS_ERROR: "NÃ£o Ã© possÃ­vel ativar as notificaÃ§Ãµes da Ã¡rea de trabalho porque seu navegador as bloqueia. Tente procurar nas configuraÃ§Ãµes ou usar um navegador diferente.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME notificaÃ§Ã£o de demonstraÃ§Ã£o",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Se vocÃª mantiver a guia do navegador aberta, verÃ¡ essa mensagem quando alguÃ©m falar com vocÃª."
            },
            ru: {
                DESKTOP_NOTIFICATIONS_ERROR: "ÐÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ñ, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ Ð±Ð»Ð¾ÐºÐ¸Ñ€ÑƒÐµÑ‚ Ð¸Ñ…. ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð²Ð°ÑˆÐ¸ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¸Ð»Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME Ð´ÐµÐ¼Ð¾-Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ðµ",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Ð•ÑÐ»Ð¸ Ð²ÐºÐ»Ð°Ð´ÐºÐ° Ð²Ð°ÑˆÐµÐ³Ð¾ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ð°, Ð²Ñ‹ ÑƒÐ²Ð¸Ð´Ð¸Ñ‚Ðµ Ð²ÑÐ¿Ð»Ñ‹Ð²Ð°ÑŽÑ‰ÐµÐµ Ð¾ÐºÐ¾ÑˆÐºÐ¾ Ð¾Ð¿Ð¾Ð²ÐµÑ‰ÐµÐ½Ð¸Ñ ÐºÐ¾Ð³Ð´Ð° ÐºÑ‚Ð¾-Ñ‚Ð¾ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ Ð²Ð°Ð¼ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ."
            },
            sv: {
                DESKTOP_NOTIFICATIONS_ERROR: "Kan inte aktivera notiser eftersom din webblÃ¤sare aktivt blockerar dem. Se Ã¶ver instÃ¤llningarna eller anvÃ¤nd en annan webblÃ¤sare.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME demonotis",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "Om du har fliken i webblÃ¤saren Ã¶ppen sÃ¥ kommer den hÃ¤r notisen visas nÃ¤r nÃ¥gon pratar med dig."
            },
            tr: {
                DESKTOP_NOTIFICATIONS_ERROR: "TarayÄ±cÄ±nÄ±z aktif olarak engellediÄŸinden masaÃ¼stÃ¼ bildirimlerini etkinleÅŸtiremiyoruz. AyarlarÄ± kontrol etmeyi veya farklÄ± bir tarayÄ±cÄ± kullanmayÄ± deneyebilirsiniz.",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME test bildirimi",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "EÄŸer tarayÄ±cÄ±nÄ±zÄ±n penceresini aÃ§Ä±k tutarsanÄ±z biri mesaj yazdÄ±ÄŸÄ±nda bu bildirimi gÃ¶receksiniz."
            },
            zh: {
                DESKTOP_NOTIFICATIONS_ERROR: "å› æµè§ˆå™¨è®¾ç½®ä¸ºé˜»æ­¢ï¼Œæ‰€ä»¥æ— æ³•æ¿€æ´»æ¡Œé¢æé†’ ã€‚è¯·åŽ»è®¾ç½®é‡ŒæŸ¥çœ‹æˆ–è€…å°è¯•å…¶ä»–çš„æµè§ˆå™¨ã€‚",
                DESKTOP_NOTIFICATIONS_DEMO_TITLE: "$APPNAME æ¼”ç¤ºæé†’",
                DESKTOP_NOTIFICATIONS_DEMO_BODY: "åªè¦ä¿æŒæµè§ˆå™¨å¼€ç€ï¼Œå¦‚æžœæœ‰äººå’Œä½ å¯¹è¯ï¼Œå°†ä¼šè‡ªåŠ¨å¼¹å‡ºå¯¹è¯çª—å£ã€‚"
            }
        }
    },
    639: function(t, n, i) {
        "use strict";
        i.r(n);
        var T = i(10),
            v = function(t, n) {
                this.user = t;
                var i = (n = Object(T.c)(n, ["undefined", "object"], 'Conversation.setParticipants: optional field "settings" is given but not an object.')) || {
                        access: void 0,
                        notify: void 0
                    },
                    e = i.access,
                    r = i.notify;
                e = Object(T.c)(e, ["undefined", "string"], 'Conversation.setParticipants: optional field "settings.access" is given but not one of "ReadWrite" or "Read".', [function(t) {
                    return void 0 === t || "Read" === t || "ReadWrite" === t
                }]), r = Object(T.c)(r, ["undefined", "boolean"], 'Conversation.setParticipants: optional field "settings.notify" is given but not a boolean.'), this.participationSettings = {
                    access: e,
                    notify: r
                }, this.participationSetting = this.participationSettings
            },
            e = i(551);

        function s(t) {
            var n = new e("SHA-1", "TEXT");
            return n.update(t), n.getHash("HEX").substr(0, 20)
        }

        function y(t) {
            return [t = (t = Object(T.c)(t, ["string", "number"], 'User: required field "id" is not given or not a string or a number.')).toString(), s(t) + "_n"]
        }
        var p = function(t, n) {
            var i, e, r, o, s;
            if (void 0 === t && (t = {}), void 0 === n && (n = !1), n) {
                for (var u in t) this[u] = t[u];
                return this
            }
            if ("string" == typeof(s = t) || s instanceof String || "number" == typeof s || s instanceof Number) this.__sync = !1, i = y(t), this.id = i[0], this.internalId = i[1];
            else {
                this.__sync = !0;
                var a = t.id,
                    c = t.name,
                    h = t.email,
                    f = t.phone,
                    l = t.photoUrl,
                    d = t.welcomeMessage,
                    v = t.role,
                    p = t.configuration,
                    g = t.custom,
                    b = t.availabilityText,
                    O = t.locale;
                e = y(a), this.id = e[0], this.internalId = e[1], this.email = Object(T.c)(h, ["null", "undefined", "string", "string[]"], "User " + a + ': optional field "email" is not a string or array of strings. Pass `null` if you\'re sure the user should never get emails', [T.b]), this.phone = Object(T.c)(f, ["null", "undefined", "string", "string[]"], "User " + a + ': optional field "phone" is given but not a string or array of strings.', [T.b]);
                for (var w = 0, I = [].concat(void 0 === this.phone || null === this.phone ? [] : this.phone); w < I.length; w++) {
                    var m = I[w];
                    if (!/^\+[1-9]\d{1,14}$/.test(m)) throw new Error("User " + a + ': optional field "phone" does not conform E.164 standard. Numbers should start with a plus, followed by a country code and then the phone number. Numbers must not have any other special characters like dashes or spaces. For example, a UK phone number 0123456789 would be formatted as "+44123456789" (' + m + ").")
                }
                this.name = Object(T.c)(c, ["string"], "User " + a + ': required field "name" is not given or not a string or is an empty string.', [T.b]), this.welcomeMessage = Object(T.c)(d, ["null", "undefined", "string"], "User " + a + ': optional field "welcomeMessage" is given but not a string or is an empty string.', [T.b]), this.role = Object(T.c)(v, ["null", "undefined", "string"], "User " + a + ': optional field "role" is given but not a string or is an empty string.', [T.b]), this.configuration = Object(T.c)(p, ["null", "undefined", "string"], "User " + a + ': optional field "configuration" is given but not a string or is an empty string.', [T.b]), l = Object(T.c)(l, ["null", "undefined", "string"], "User " + a + ': optional field "photoUrl" is given but not a string or is an empty string.', [T.b]), this.custom = Object(T.c)(g, ["null", "undefined", "object"], "User " + a + ': optional field "custom" is given but not an object.'), this.photoUrl = l && (r = l, (o = document.createElement("a")).href = r, o.href), this.availabilityText = Object(T.c)(b, ["null", "undefined", "string"], "User " + a + ': optional field "availabilityText" is given but not a string or is an empty string.', [T.b]), this.locale = Object(T.c)(O, ["null", "undefined", "string"], "User " + a + ': optional field "locale" is given but not a string or is an empty string or does not conform the BCP 47 format.', [T.b, T.a]), this.custom && Object(T.d)(this.custom, ["string"], function(t) {
                    return "User " + a + ': optional field "custom.' + t + '" is given but not a string.'
                }), this.configuration || this.role || console.warn("[TalkJS] No role is set for user " + a + ". TalkJS will work, but with some features disabled (such as email notifications)."), this.configuration && this.role && console.warn("[TalkJS] A configuration and role was set for the user " + a + ", the assigned role will take presedence over a configuration."), this.role && (this.configuration = this.role)
            }
        };
        var u, r, a, o, g = function(t, n) {
                var i = t.conversationId,
                    e = t.participants,
                    r = t.topicId,
                    o = t.subject,
                    s = t.photoUrl,
                    u = t.welcomeMessages,
                    a = t.custom;
                this.D = n, this.participants = [], this.id = Object(T.c)(i, ["string"], "Conversation: field conversationId cannot be empty.", [T.b]);
                for (var c = 0, h = e; c < h.length; c++) {
                    var f = h[c];
                    this.participants.map(function(t) {
                        return t.user.id
                    }).indexOf(f.user.id) < 0 && this.participants.push(f)
                }
                this.subject = Object(T.c)(o, ["null", "undefined", "string"], 'Conversation: optional field "subject" is given but not an string.'), this.custom = Object(T.c)(a, ["null", "undefined", "object"], 'Conversation: optional field "custom" is given but not an object.'), this.photoUrl = Object(T.c)(s, ["null", "undefined", "string"], 'Conversation: optional field "photoUrl" is given but not an string or is an empty string.', [T.b]), this.welcomeMessages = Object(T.c)(u, ["null", "undefined", "string[]"], 'Conversation: optional field "welcomeMessages" is given but not an array of strings.'), this.custom && Object(T.d)(this.custom, ["string"], function(t) {
                    return 'Field "custom.' + t + '" must be a string.'
                }), r = null != r ? r.toString() : void 0, this.topicId = Object(T.c)(r, ["undefined", "string"], 'Conversation: optional field "topicId" is given but not an string or is an empty string.', [T.b]), this.internalId = l(this.id)
            },
            c = function() {
                function t(t, n) {
                    this.D = n, this.participants = [], this.id = Object(T.c)(t, ["string"], "Conversation: field conversationId cannot be empty.", [T.b]), this.internalId = l(this.id)
                }
                return t.prototype.setParticipant = function(t, n) {
                    if (!(t instanceof p)) throw new Error("[TalkJS] The first argument of ConversationBuilder#setParticipant should be of type Talk.User. For example:\n            \nvar user = new Talk.User(data);\nconversation.setParticipant(user);\n            \nFor more information check our documentation https://talkjs.com/docs/api/classes/conversationbuilder.html#setparticipant\n            ");
                    this.participants.push(new v(t, n))
                }, t.prototype.setAttributes = function(t) {
                    var n = t.subject,
                        i = t.photoUrl,
                        e = t.welcomeMessages,
                        r = t.custom;
                    this.subject = Object(T.c)(n, ["null", "undefined", "string"], 'Conversation.setAttributes: optional field "subject" is given but not an string.'), this.custom = Object(T.c)(r, ["null", "undefined", "object"], 'Conversation.setAttributes: optional field "custom" is given but not an object.'), this.photoUrl = Object(T.c)(i, ["null", "undefined", "string"], 'Conversation.setAttributes: optional field "photoUrl" is given but not an string or is an empty string.', [T.b]), this.welcomeMessages = Object(T.c)(e, ["null", "undefined", "string[]"], 'Conversation.setAttributes:Conversation: optional field "welcomeMessages" is given but not an array of strings'), this.custom && Object(T.d)(this.custom, ["string"], function(t) {
                        return 'Conversation.setAttributes: Field "custom.' + t + '" must be a string.'
                    })
                }, t.prototype.sendMessage = function(t) {
                    var n = Object(T.c)(t, ["string"], "sendMessage() accepts a single String value representing the text of the message"),
                        i = this.internalId;
                    this.D._.then(function(t) {
                        t.sendMessage(n, i)
                    })
                }, t
            }();

        function b(t, n, i) {
            return "string" == typeof t && (t = new p(t)), "string" == typeof n && (n = new p(n)),
                function(t, n) {
                    var i = t.map(function(t) {
                        return t.id
                    });
                    i.sort();
                    var e = {
                        p: i
                    };
                    return void 0 !== n && (e.t = n), JSON.stringify(e)
                }([t, n], i)
        }

        function l(t) {
            return s(t)
        }

        function h(t) {
            return new p({
                id: t.externalId,
                internalId: t.id,
                name: t.name,
                email: "<suppressed>",
                welcomeMessage: t.welcomeMessage,
                photoUrl: t.photoUrl,
                role: t.configuration,
                configuration: t.configuration,
                custom: t.custom,
                availabilityText: t.availabilityText,
                locale: t.locale
            }, !0)
        }(r = u || (u = {}))[r.Inbox = 0] = "Inbox", r[r.Chatbox = 1] = "Chatbox", r[r.Popup = 2] = "Popup", (o = a || (a = {}))[o.Widget = 0] = "Widget", o[o.Popover = 1] = "Popover";
        var f = i(30);

        function d() {
            var t = function() {
                    if (document.currentScript) return document.currentScript.src;
                    try {
                        throw new Error
                    } catch (t) {
                        return t.stack.match(/https?:\/\/.*\.js/)[0]
                    }
                }(),
                n = document.createElement("a");
            return n.href = t, n
        }
        var O, w = (O = d().host).match(/^cdn[\.-]/) ? O.replace(/^cdn/, "app") : O,
            I = d().protocol,
            m = i(228),
            M = "talkjs:desktop_notify",
            N = function() {
                try {
                    return Audio && new Audio(I + "//" + w + i(552))
                } catch (t) {
                    return null
                }
            }();

        function j(t, n) {
            m.setItem(t, JSON.stringify(n))
        }

        function k() {
            return window.Notification && "granted" === Notification.permission
        }
        var E = [];

        function S(t, n) {
            var i = void 0 === t ? {} : t,
                e = i.title,
                r = i.body;
            i.conversationId;
            if (r) {
                N && N.play();
                var o = new Notification(e || "", {
                    body: r,
                    icon: function() {
                        if (D) return D;
                        for (var t = document.getElementsByTagName("head")[0].getElementsByTagName("link"), n = [], i = t.length - 1; 0 <= i; i--) /(^|\s)icon(\s|$)/i.test(t[i].getAttribute("rel") || "") && n.push(t[i]);
                        var e = n.reduce(function(t, n) {
                            return z(t) > z(n) ? t : n
                        }, void 0);
                        return D = e && e.getAttribute("href") || void 0
                    }()
                });
                o.onclick = function() {
                    n(), window.focus()
                }, E.push(o)
            }
        }
        window.addEventListener("focus", function() {
            E.forEach(Object(f.g)(function(t) {
                return t.close()
            })), E = []
        });
        var D, _ = !1,
            A = 0;

        function C(t, e, r) {
            var n;
            j(M, t), t && (n = function(t) {
                var n, i;
                t && !r || (t && r ? (n = r, S({
                    title: (i = e).t("DESKTOP_NOTIFICATIONS_DEMO_TITLE", {
                        APPNAME: n
                    }),
                    body: i.t("DESKTOP_NOTIFICATIONS_DEMO_BODY")
                }, function() {})) : (j(M, !1), alert(e.t("DESKTOP_NOTIFICATIONS_ERROR"))))
            }, k() ? n(!0) : window.Notification && Notification.requestPermission(function() {
                n(k())
            }))
        }

        function x() {
            return k() && Boolean((t = M, JSON.parse(m.getItem(t))));
            var t
        }

        function z(t) {
            return parseInt(t && (t.getAttribute("sizes") || "").split("x")[0] || "0")
        }
        var P = function() {
                function t(t) {
                    this.A = {};
                    for (var n = 0, i = t; n < i.length; n++) {
                        var e = i[n];
                        this.A[e] = []
                    }
                }
                return t.prototype.emit = function(t) {
                    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                    this.A[t].forEach(function(t) {
                        return t.apply(void 0, n)
                    })
                }, t.prototype.supports = function(t) {
                    return t in this.A
                }, t.prototype.on = function(t, n) {
                    if (!this.supports(t)) throw new Error("Unknown event type '" + t + "'");
                    this.A[t].push(n)
                }, t.prototype.off = function(t, n) {
                    if (!(t in this.A)) throw new Error("Unknown event type '" + t + "'");
                    var i = this.A[t].indexOf(n); - 1 !== i && this.A[t].splice(i, 1)
                }, t.prototype.removeAllListeners = function() {
                    this.A = {}
                }, t
            }(),
            L = i(22),
            U = i(21);

        function R(t) {
            var n, i, e = t.side,
                r = t.sender;
            return i = null === r ? n = null : (n = r.externalId, h(r)), {
                conversation: F(e),
                isByMe: e.isByMe,
                senderId: n,
                sender: i,
                body: e.lastMessageBody,
                type: e.lastMessageType,
                timestamp: e.lastMessageTs,
                read: e.lastMessageRead
            }
        }

        function F(t) {
            return {
                id: t.conversationExternalId,
                custom: t.conversationCustom,
                topicId: t.conversationTopicId,
                subject: t.conversationSubject,
                welcomeMessages: t.conversationWelcomeMessages,
                photoUrl: t.conversationPhotoUrl
            }
        }
        var B = function() {
                function t(t, n, i) {
                    var a = this;
                    this.C = n, this.x = i, this.z = new P(["change"]), this.P = {}, this.L = U.c(), this.U = void 0, this.R = function(t) {
                        for (var n = [], i = 0, e = t || []; i < e.length; i++) {
                            var r = e[i],
                                o = a.P[r.id];
                            o && o.lastMessageTs !== r.lastMessageTs && n.push(r), a.P[r.id] = r
                        }
                        a.L.resolve(void 0);
                        var s = Object.keys(a.P).map(function(t) {
                                return a.P[t]
                            }).filter(function(t) {
                                return !1 === t.lastMessageRead
                            }),
                            u = a.F(s);
                        L.a.all(u).then(function(r) {
                            L.a.all(a.F(n)).then(function(t) {
                                a.B(r);
                                for (var n = 0, i = t.filter(function(t) {
                                        return !t.side.lastMessageRead
                                    }); n < i.length; n++) {
                                    var e = i[n];
                                    a.Y(e)
                                }
                                a.J(t)
                            })
                        })
                    }, t.then(function(t) {
                        a.H = t, a.loadAndListen({
                            amount: 20
                        })
                    })
                }
                return t.prototype.loadAndListen = function(t) {
                    var n = this,
                        i = t.amount;
                    this.L = U.c();
                    var e = this.H.getOrJoinChannel("seq/sides/" + this.H.me.internalId);
                    e.on("recordUpdated", function(t) {
                        return n.R(t.data)
                    }), e.push("get_all", {
                        limit: i
                    }).receive("ok", function(t) {
                        return n.R(t.data)
                    })
                }, t.prototype.K = function(t) {
                    var n = this;
                    return this.L.promise.then(function() {
                        return F(n.P[t])
                    })
                }, t.prototype.F = function(t) {
                    var i = this;
                    return t.filter(function(t) {
                        return null !== t.lastMessageSenderId
                    }).map(function(n) {
                        return i.H.getNym(n.lastMessageSenderId).then(function(t) {
                            return {
                                side: n,
                                sender: t
                            }
                        })
                    })
                }, t.prototype.Q = function(t, r) {
                    if (t.length !== r.length) return !0;
                    for (var n = function(n) {
                            var t = r.filter(function(t) {
                                return t.lastMessage.conversation.id === n.lastMessage.conversation.id
                            })[0];
                            if (!t) return {
                                value: !0
                            };
                            var i = n.lastMessage,
                                e = t.lastMessage;
                            return i.body !== e.body ? {
                                value: !0
                            } : i.conversation.id !== e.conversation.id ? {
                                value: !0
                            } : i.isByMe !== e.isByMe ? {
                                value: !0
                            } : i.read !== e.read ? {
                                value: !0
                            } : i.timestamp !== e.timestamp ? {
                                value: !0
                            } : i.type !== e.type ? {
                                value: !0
                            } : void 0
                        }, i = 0, e = t; i < e.length; i++) {
                        var o = n(e[i]);
                        if ("object" == typeof o) return o.value
                    }
                    return !1
                }, t.prototype.B = function(t) {
                    var n = t.map(function(t) {
                        return {
                            lastMessage: R(t)
                        }
                    });
                    this.U && !this.Q(n, this.U) || this.z.emit("change", n), this.U = n
                }, t.prototype.J = function(t) {
                    for (var n = 0, i = t; n < i.length; n++) {
                        var e = i[n];
                        this.C(R(e))
                    }
                }, t.prototype.Y = function(t) {
                    var n, i, e, r = this,
                        o = t.side,
                        s = t.sender,
                        u = Date.now();
                    if (null !== o.lastMessageSenderId && null !== s) {
                        this.G = {
                            body: this.W(o),
                            title: s.name
                        };
                        var a = Date.now() - u;
                        n = function() {
                            return r.G
                        }, i = Math.max(0, 500 - a), e = function() {
                            return r.x(o.conversationExternalId)
                        }, void 0 === i && (i = 500), !_ && x() && (A + 100 > Date.now() || (_ = !0, setTimeout(function() {
                            try {
                                if (!document.hasFocus()) {
                                    var t = n();
                                    t && S(t, e)
                                }
                            } finally {
                                _ = !1, A = Date.now()
                            }
                        }, i)))
                    }
                }, t.prototype.W = function(t) {
                    if ("text" === t.lastMessageType) return t.lastMessageBody;
                    if ("location" === t.lastMessageType) return "ðŸ“ Shared location";
                    if ("media" === t.lastMessageType && t.lastMessageAttachment) {
                        var n = t.lastMessageAttachment.url,
                            i = Object(f.c)(n);
                        return Object(f.d)(i) ? "ðŸ“· " + i : "[â†“] " + i
                    }
                    return ""
                }, t.prototype.on = function(t, n) {
                    this.z.on(t, n)
                }, t.prototype.off = function(t, n) {
                    this.z.off(t, n)
                }, t
            }(),
            Y = function(t) {
                t.then(function(t) {
                    return t.getOrJoinChannel("me:" + t.me.internalId)
                })
            },
            J = i(203),
            H = i(202),
            K = Object.assign || function(t) {
                for (var n, i = 1, e = arguments.length; i < e; i++)
                    for (var r in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            },
            Q = function(t, n, i) {
                var e = this;
                this.H = t, this.Z = this.H.getOrJoinChannel("record/" + n + "/" + i), this.loaded = new L.a(function(n, i) {
                    e.Z.push("get", {}).receive("ok", function(t) {
                        e.value = t.data, n()
                    }).receive("error", function(t) {
                        return i(t)
                    }).receive("timeout", function() {
                        return i("timeout")
                    }), e.Z.on("recordUpdated", function(t) {
                        return e.value = t.data
                    })
                })
            },
            G = function() {
                function t(t, n, i, e, r, o, s) {
                    void 0 === s && (s = 0), this.boken = t, this.me = n, this.appId = i, this.serverHostname = e, this.appLocale = r, this.T = o, this.version = s, this.X = {}, this.$ = new J.a(function(t) {
                        0;
                        return "wss://" + t + "/socket"
                    }(this.serverHostname), this.appId, "JSSDK", o), this.$.connect(this.boken)
                }
                return t.prototype.url = function(t) {
                    var n = -1 === t.indexOf("?") ? "?" : "&";
                    return "https://" + this.serverHostname + "/api/v" + this.version + "/" + this.appId + t + n + "authToken=" + this.boken
                }, t.prototype.getNym = function(t) {
                    t in this.X || (this.X[t] = new Q(this, "nyms", t));
                    var n = this.X[t];
                    return n.loaded.then(function() {
                        return n.value
                    })
                }, t.prototype.post = function(t, n) {
                    return Object(U.e)("POST", this.url(t), JSON.stringify(n))
                }, t.prototype.put = function(t, n) {
                    var i = this;
                    return this.V(function() {
                        return Object(U.e)("PUT", i.url(t), JSON.stringify(n))
                    })
                }, t.prototype.delete = function(t) {
                    var n = this;
                    return this.V(function() {
                        return Object(U.e)("DELETE", n.url(t))
                    })
                }, t.prototype.getOrJoinChannel = function(t, n) {
                    void 0 === n && (n = {});
                    var i = K({}, n, {
                        meId: this.me.internalId
                    });
                    return this.$.getOrJoin(t, {
                        initialData: i
                    })
                }, t.prototype.V = function(t, n) {
                    var i = void 0 === n ? {} : n,
                        e = i.retries,
                        r = void 0 === e ? 10 : e,
                        o = i.delay,
                        s = void 0 === o ? .2 : o;
                    return Object(f.e)(r, t, {
                        delay: s,
                        log: void 0
                    })
                }, t.prototype.sendMessage = function(t, n) {
                    var i = Object(H.a)(),
                        e = this.T,
                        r = this.me.internalId;
                    this.put("/say/" + n + "/" + i + "/?sessionId=" + e, {
                        text: t,
                        nymId: r
                    }).then(function(t) {
                        return null
                    })
                }, t
            }();
        var W, Z = i(42),
            q = function() {
                function t(t) {
                    var n = this;
                    this.getSourceWindow = t, this.A = {}, this.router = function(t) {
                        return Z.a(t, {
                            sourceWindow: n.getSourceWindow(),
                            handlers: n.A,
                            prefix: "on_"
                        })
                    }, window.addEventListener("message", this.router)
                }
                return t.prototype.destroy = function() {
                    window.removeEventListener("message", this.router)
                }, t.prototype.listen = function(t, i, n) {
                    this.A["on_" + n] = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return i.apply(void 0, t)
                    }
                }, t.prototype.unlisten = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    for (var i in this.A) - 1 !== t.indexOf(this.A[i]) && delete this.A[i]
                }, t
            }(),
            X = (W = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
                },
                function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    W(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }),
            $ = Object.assign || function(t) {
                for (var n, i = 1, e = arguments.length; i < e; i++)
                    for (var r in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            },
            V = function() {
                function t(t, n, i, e, r) {
                    var o = this;
                    this.w = t, this.tt = n, this.initialPath = e, this.queryStringData = r, this.nt = !1, this.it = U.c(), this.request = function(t, n) {
                        o.it.promise.then(function() {
                            Z.c(t, n, o.et.contentWindow)
                        })
                    }, this.ask = function(t, n) {
                        return o.it.promise.then(function() {
                            return Z.b(t, n, o.et.contentWindow)
                        })
                    }, this.nav = function(t, n, i) {
                        if (void 0 === n && (n = {}), void 0 === i && (i = {}), o.nt) {
                            var e = new tt($({
                                dbSyncData: n
                            }, i));
                            o.request("nav", [o.rt(t), e.toString()])
                        } else {
                            e = new tt($({}, o.queryStringData, {
                                dbSyncData: n
                            }, i));
                            o.ot(t, e)
                        }
                    }, this.mount = function(t, n) {
                        t !== o.st && (o.st = t, o.ut(), n(o.et.style))
                    }, this.at = "https://" + i, this.et = document.createElement("iframe"), this.et.scrolling = "no", this.et.style.border = "none", this.et.setAttribute("aria-label", "TalkJS iframe"), this.ct(this.et);
                    var s = new tt(this.queryStringData);
                    this.ot(this.initialPath, s), U.j("__talkjs:appready", function() {
                        o.it.resolve(void 0)
                    })
                }
                return t.prototype.ct = function(t) {
                    var n = this;
                    t.onload = function(t) {
                        n.nt = !0
                    }
                }, t.prototype.ht = function(t) {
                    return this.at + "/app/" + this.w + this.rt(t)
                }, t.prototype.rt = function(t) {
                    return "/user/" + this.tt + "/" + t
                }, t.prototype.contentWindow = function() {
                    return this.et.contentWindow
                }, t.prototype.patchQueryString = function(t) {
                    return this.ask("patchQueryString", [t])
                }, t.prototype.ot = function(t, n) {
                    var i = n.split(),
                        e = i.short,
                        r = i.long.toString(),
                        o = s(r);
                    U.e("PUT", this.at + "/__buffer/" + o, JSON.stringify({
                        value: r
                    })), this.et.src = this.ht(t + "?" + e.add("bufferKey", o).toString())
                }, t.prototype.patchLocalSettings = function(t) {
                    return this.patchQueryString({
                        localSettings: t
                    })
                }, t.prototype.ut = function() {
                    this.st.appendChild(this.et)
                }, t.prototype.cleanupContainer = function() {
                    if (this.st.hasChildNodes()) {
                        for (; this.st.firstChild && this.st.firstChild !== this.et;) this.st.removeChild(this.st.firstChild);
                        for (; this.st.lastChild && this.st.lastChild !== this.et;) this.st.removeChild(this.st.lastChild)
                    }
                }, t.prototype.destroy = function() {
                    var t = this.et.parentNode;
                    t && t.removeChild(this.et)
                }, t.prototype.isZombie = function() {
                    return !!this.nt && !document.body.contains(this.et)
                }, t
            }(),
            tt = function(h) {
                function t(t) {
                    var n = t.dbSyncData,
                        i = t.localSettings,
                        e = t.clientHeight,
                        r = t.signature,
                        o = t.externalUserId,
                        s = t.messageSuggestion,
                        u = t.thirdparties,
                        a = t.sessionId,
                        c = [
                            ["syncPlease", n]
                        ];
                    return i && c.push(["localSettings", i]), c.push(["clientHeight", e]), c.push(["sessionId", a]), c.push(["signature", r]), c.push(["thirdparties", u]), c.push(["id", o]), s && c.push(["messageSuggestion", U.f(s)]), h.call(this, c) || this
                }
                return X(t, h), t
            }(U.a),
            nt = "___talkjs_image_popup";
        var it = i(150),
            et = function(t, n) {
                if (i = t, isNaN(parseFloat(i)) || !isFinite(i)) throw new Error("[TalkJS][HtmlPanel] " + (n || "value") + " must be a number.");
                var i;
                return Number(t)
            },
            rt = function() {
                function t(t, n) {
                    if (this.ft = !1, this.panelLoaded = Object(U.c)(), this.lt = Object(U.c)(), this.dt = Object(U.c)(), !n.url) throw new Error("[TalkJS] URL is required for the `HTMLPanel`.");
                    var i = n.url,
                        e = n.show,
                        r = void 0 === e || e,
                        o = n.height,
                        s = void 0 === o ? 100 : o,
                        u = n.conversation,
                        a = document.createElement("a");
                    a.href = i, this.vt = {
                        url: a.href,
                        show: r,
                        height: et(s, "height"),
                        conversation: "object" == typeof u ? u.id : u
                    }, this.gt = t, this.DOMContentLoadedPromise = this.lt.promise, this.windowLoadedPromise = this.dt.promise
                }
                return t.prototype.show = function() {
                    !1 === this.vt.show && (this.vt.show = !0, this.bt())
                }, t.prototype.hide = function() {
                    !0 === this.vt.show && (this.vt.show = !1, this.bt())
                }, t.prototype.setHeight = function(t) {
                    this.vt.height = et(t, "height"), this.bt()
                }, t.prototype.isVisible = function() {
                    return !this.ft && !0 === this.vt.show
                }, t.prototype.destroy = function() {
                    return this.vt.show = !1, this.vt.url = "", this.ft = !0, this.bt()
                }, t.prototype.Ot = function() {
                    var e = this,
                        t = Object(f.a)(this.vt.url, this.gt.sessionId, this.vt.conversation);
                    return Object(U.j)("__talkjs:htmlPanelLoaded_" + t, function() {
                        e.panelLoaded.resolve(void 0)
                    }), this.bt().then(function() {
                        return e.panelLoaded.promise.then(function() {
                            var t = e.wt();
                            if (!t) return L.a.reject("[TalkJS][HtmlPanel]: Couldn't get a reference to the window property of the HTML panel iframe.");
                            e.window = t;
                            var n = function(t, n) {
                                    n.resolve(void 0)
                                },
                                i = function() {
                                    return e.window.addEventListener("load", function() {
                                        return n(0, e.dt)
                                    }, !0)
                                };
                            return "loading" === e.window.document.readyState ? (e.window.document.addEventListener("DOMContentLoaded", function() {
                                return n(0, e.lt)
                            }, !0), i()) : "complete" === e.window.document.readyState ? (n(0, e.lt), n(0, e.dt)) : (n(0, e.lt), i()), L.a.resolve(e)
                        })
                    })
                }, t.prototype.bt = function() {
                    var t = this;
                    return this.gt.contentLoaded().then(function() {
                        return t.gt.It()
                    })
                }, t.prototype.wt = function() {
                    var t = this.mt();
                    if (null !== t) {
                        var n = t.frames[0];
                        if (n) return n
                    }
                    return null
                }, t.prototype.mt = function() {
                    var t = this.gt.Tt();
                    return t || null
                }, t
            }(),
            ot = function() {
                function t(t) {
                    this.gt = t
                }
                return t.prototype.focus = function() {
                    var t = this.gt.yt;
                    if (!t || t.isZombie()) throw new Error("[TalkJS] Cannot focus the message field on an unmounted UI.");
                    t.request("focusEntryBox", [])
                }, t.prototype.setText = function(t) {
                    this.gt.setEntryBoxText(t)
                }, t
            }();

        function st() {
            var t = Object(it.a)(),
                n = t.width,
                i = t.height;
            return n < 420 || i < 420 ? a.Popover : a.Widget
        }
        var ut = function() {
            function t(t, n, i, e) {
                var r = void 0 === n ? {} : n,
                    o = r.selectedConversation,
                    s = r.hideHub,
                    u = void 0 !== s && s,
                    a = this;
                this.Mt = {
                    perConv: Object.create(null)
                }, this.Nt = !1, this.jt = U.c(), this.z = new P(["sendMessage", "focus", "blur"]), this.sessionId = U.m(), this.messageField = new ot(this), this.onUIBoxFocusChange = function(t) {
                    var n = t.focused;
                    a.z.emit(n ? "focus" : "blur", {})
                }, this.onSendMessage = function(t) {
                    var r = t.text,
                        n = t.meInternalId,
                        i = t.conversationInternalId,
                        e = a.kt({
                            id: n
                        }),
                        o = a.D.Et.K(i);
                    L.a.all([e, o]).then(function(t) {
                        var n = t[0],
                            i = t[1],
                            e = {
                                me: n,
                                message: {
                                    id: void 0,
                                    conversationId: i.id,
                                    type: "UserMessage",
                                    readBy: [],
                                    senderId: n.id,
                                    text: r,
                                    origin: "web",
                                    createdAt: void 0
                                },
                                conversation: i
                            };
                        a.z.emit("sendMessage", e)
                    }).catch(function(t) {
                        return console.error(t)
                    })
                }, this.onShowMoreChats = function(t) {
                    var n = t.amount;
                    a.D.Et.loadAndListen({
                        amount: n
                    })
                }, this.D = t, this.St = new q(function() {
                    if (a.yt) return a.yt.contentWindow()
                });
                var c = e.dir;
                !c && document.documentElement.dir && "auto" !== document.documentElement.dir && (c = document.documentElement.dir), this.Dt = {
                    hideHub: u,
                    dir: c
                }, this.boxType = i, this.vt = e, this.select(o)
            }
            return t.prototype.contentLoaded = function() {
                return this.jt.promise
            }, t.prototype.select = function(t, n) {
                n && n.messageSuggestion && (this.vt.messageSuggestion = n.messageSuggestion);
                var i = this.vt,
                    e = this.vt,
                    r = this.vt;
                if (i.messageSuggestion && this.boxType === u.Inbox && !t && (console.warn("[TalkJS]", "Message suggestions require you to have a selected conversation for the Inbox layout."), i.messageSuggestion = void 0), this._t = {
                        desktopNotify: x(),
                        dir: this.Dt.dir,
                        htmlPanelOptions: this.At(),
                        feedFilter: void 0 === e.feedFilter ? {} : e.feedFilter,
                        view: {
                            mode: this.getMode(),
                            hideHub: this.Dt.hideHub || !1,
                            isInsideMobileApp: U.h(),
                            showChatHeader: void 0 === i.showChatHeader || i.showChatHeader,
                            showFeedHeader: void 0 === e.showFeedHeader || e.showFeedHeader,
                            useBrowserHistory: void 0 === e.useBrowserHistory || e.useBrowserHistory,
                            chatTitleMode: void 0 === i.chatTitleMode ? "participants" : i.chatTitleMode,
                            chatSubtitleMode: void 0 === i.chatSubtitleMode ? "subject" : null === i.chatSubtitleMode ? "none" : i.chatSubtitleMode,
                            feedConversationTitleMode: void 0 === e.feedConversationTitleMode ? "auto" : e.feedConversationTitleMode,
                            showCloseInHeader: void 0 === r.showCloseInHeader ? "auto" : r.showCloseInHeader
                        }
                    }, this.Ct = this.xt(t), this.zt = this.Pt(t), this.yt) {
                    var o = {
                        messageSuggestion: i.messageSuggestion,
                        localSettings: this._t
                    };
                    this.yt.nav(this.zt, this.Ct, o)
                }
            }, t.prototype.setEntryBoxText = function(t) {
                return this.yt.patchQueryString({
                    messageSuggestion: t
                })
            }, t.prototype.createHtmlPanel = function(t) {
                var n = new rt(this, t),
                    i = t.conversation;
                i ? this.Mt.perConv["object" == typeof i ? i.id : i] = n : this.Mt.global = n;
                var e = n.Ot();
                return this.It(), e.then(function() {
                    return n
                })
            }, t.prototype.on = function(t, n) {
                this.z.on(t, n)
            }, t.prototype.off = function(t, n) {
                this.z.off(t, n)
            }, t.prototype.Lt = function(t, n) {
                return U.k(this.vt, t), this.Ut(n)
            }, t.prototype.Ut = function(t) {
                var n = this;
                return U.k(this._t, t), this.contentLoaded().then(function() {
                    return n.yt.patchLocalSettings(t)
                })
            }, t.prototype.setPresence = function(t) {
                var n = void 0 === t ? {} : t,
                    i = n.visible,
                    e = n.custom;
                Object(T.c)(i, ["undefined", "boolean"], "UIBox.setPresence: field visible has to be boolean."), e && Object(T.d)(e, ["string"], function(t) {
                    return 'UIBox.setPresence: Field "custom.' + t + '" must be a string.'
                }), this.yt.request("setPresence", [{
                    custom: e,
                    visible: i
                }])
            }, t.prototype.Rt = function(t) {
                return this.z.supports(t)
            }, t.prototype.Tt = function() {
                return this.yt ? this.yt.contentWindow() : null
            }, t.prototype.xt = function(t) {
                var n = this,
                    i = {
                        me: this.D.me
                    };
                return "object" == typeof t && null !== t && (i.others = t.participants.filter(function(t) {
                    return t.user.id !== n.D.me.id
                }).map(function(t) {
                    return t.user
                }), i.conversation = {
                    internalId: t.internalId,
                    id: t.id,
                    participants: t.participants,
                    subject: t.subject,
                    custom: t.custom,
                    welcomeMessages: t.welcomeMessages,
                    photoUrl: t.photoUrl,
                    topicId: t instanceof g ? t.topicId : void 0
                }), i
            }, t.prototype.Pt = function(t) {
                return "object" == typeof t ? null === t ? "inbox/chats/hubOnly" : "inbox/" + t.internalId : "string" == typeof t ? "inbox/" + l(t) : "inbox/chats"
            }, t.prototype.Ft = function(t) {
                var n = this,
                    i = t,
                    e = i && i.jquery && i.length ? i[0] : t;
                if (this.Nt) throw new Error("[TalkJS] Cannot mount UI more than once. This object has been deleted before (either by calling destroy() by a user closing the popup or by external code removing the TalkJS Iframe from the DOM, and is now in an invalid state. Please call createInbox, createChatbox or createPopup again.");
                if (this.yt) throw new Error("[TalkJS] Cannot mount UI more than once. Please call createInbox, createChatbox or createPopup again if you want to create a new UI.");
                if (!e) throw new Error("[TalkJS] Cannot mount UI: container element not found");
                if (!this.zt) throw new Error("[TalkJS] Internal Error: cannot mount UI without URL");
                var r = this.D.themePath;
                return r ? U.e("GET", r).then(function(t) {
                    return n._t.theme = t.replace(/\/\*[^@]+?\*\//gm, "")
                }).then(function() {
                    return n.mountIframe(e)
                }).then(function() {
                    return n.jt.promise
                }) : (this.mountIframe(e), this.jt.promise)
            }, t.prototype.At = function() {
                var t = function(t) {
                        return {
                            show: t.show,
                            url: t.url,
                            height: t.height
                        }
                    },
                    n = this.Mt,
                    i = n.global,
                    e = n.perConv,
                    r = {
                        perConv: {}
                    };
                for (var o in i && (r.global = t(i.vt)), e) r.perConv[o] = t(e[o].vt);
                return r
            }, t.prototype.It = function() {
                this.Ut({
                    htmlPanelOptions: this.At()
                })
            }, t.prototype.mountIframe = function(n) {
                var i = this,
                    t = Object(it.a)().height,
                    e = {
                        dbSyncData: this.Ct,
                        localSettings: this._t,
                        clientHeight: t,
                        sessionId: this.sessionId,
                        thirdparties: this.vt.thirdparties,
                        externalUserId: this.D.me.id,
                        signature: this.D.signature,
                        messageSuggestion: this.vt.messageSuggestion
                    };
                if (this.yt = new V(this.D.appId, this.D.me.internalId, this.D.Bt, this.zt, e), this.Yt(), this.St.listen(this.yt, this.onShowImagePopup, "showImagePopup"), this.St.listen(this.yt, this.onGetCurrentLocation, "getCurrentLocation"), this.St.listen(this.yt, this.onOpenExternalLink, "openExternalLink"), this.St.listen(this.yt, this.onShowMoreChats, "showMoreChats"), this.St.listen(this.yt, this.onSendMessage, "sendMessage"), this.St.listen(this.yt, this.onUIBoxFocusChange, "uiBoxFocusChange"), this.St.listen(this.yt, this.onHasParentFocus, "hasParentFocus"), "full" === this._t.view.mode) {
                    var r = void 0;
                    if (this.D.Jt(kt)) {
                        var o = function(t) {
                            var n = document.createElement("div");
                            at(t, n);
                            var i = t.style.boxSizing;
                            t.style.boxSizing = "content-box";
                            var e = parseInt(getComputedStyle(t).height);
                            return t.style.boxSizing = i, at(n, t), 1 < e
                        }(n);
                        r = function(t) {
                            t.width = "100%", i.Ht(n, t, o), t.marginLeft = "auto", t.marginRight = "auto", t.visibility = "visible", "ti8AJFWH" !== i.D.appId && "LfC1CcQC" !== i.D.appId && (t.minHeight = "500px")
                        }
                    } else r = function(t) {
                        t.width = "100%", t.height = "100%", t.marginLeft = "auto", t.marginRight = "auto", t.visibility = "visible"
                    };
                    this.yt.mount(n, r)
                } else this.yt.mount(n, function(t) {
                    t.width = t.height = "0", t.minWidth = t.maxWidth = t.minHeight = t.maxHeight = "100%", t.visibility = "visible"
                })
            }, t.prototype.Ht = function(t, n, i) {
                if (i) n.height = "100%";
                else {
                    var e = t.getBoundingClientRect().top + window.pageYOffset,
                        r = window.innerHeight,
                        o = r - e;
                    if (1010 <= window.innerWidth) {
                        var s = getComputedStyle(t);
                        o -= parseInt(s.paddingTop) + parseInt(s.paddingBottom) || 10
                    }
                    n.height = 500 < o ? Math.round(o) + "px" : Math.round(.75 * r) + "px"
                }
            }, t.prototype.Yt = function() {
                var t = this;
                U.j("__talkjs:hello", function() {
                    t.yt.cleanupContainer(), t.jt.resolve(void 0)
                })
            }, t.prototype.onShowImagePopup = function(t) {
                ! function(t) {
                    var n = document.getElementById(nt);
                    n && n.parentNode.removeChild(n);
                    var i, e = Math.min(window.innerWidth, window.innerHeight) < 500 ? "padding: 0; max-width: 100%; max-height: 100%" : "padding: 5px; background: #fff; max-width: 95%; max-height: 95%",
                        r = document.createElement("div");
                    r.innerHTML = '<div id="' + nt + '" style="box-sizing: border-box; padding: 0; background-color: rgba(0,0,0,0.85); opacity: 0; transition: opacity 0.2s ease-out; overflow: hidden; position: fixed; z-index: 12345; left: 0; top: 0; right: 0; bottom: 0">\n        <img src="' + t + '" style="' + e + '; opacity: 0; transition: opacity 0.1s ease-out; margin: auto; position: absolute; top: 0; bottom: 0; right: 0; left: 0">\n        <span style="cursor: pointer; color: #fff; font: 4vmin sans-serif; position: absolute; right: 0px; top: 0px; padding: 10px">â¨¯</a>\n    </div>';
                    var o = function(t) {
                        t.preventDefault(), s.parentNode.removeChild(s), document.body.removeEventListener("keydown", i)
                    };
                    i = function(t) {
                        return 27 === t.keyCode && o(t)
                    };
                    var s = r.firstChild;
                    s.addEventListener("click", o), document.body.addEventListener("keydown", i);
                    var u = window.requestAnimationFrame || function(t) {
                        return setTimeout(t, 20)
                    };
                    u(function() {
                        return u(function() {
                            return s.style.opacity = "1"
                        })
                    }), s.getElementsByTagName("img")[0].onload = function(t) {
                        return t.target.style.opacity = "1"
                    }, document.body.appendChild(s), window.focus()
                }(t.url)
            }, t.prototype.kt = function(n) {
                return this.D._.then(function(t) {
                    return t.getNym(n.id)
                }).then(h)
            }, t.prototype.onGetCurrentLocation = function(t) {
                return new L.a(function(n, i) {
                    navigator.geolocation.getCurrentPosition(function(t) {
                        return n([t.coords.latitude, t.coords.longitude])
                    }, function(t) {
                        return i(t.message)
                    })
                })
            }, t.prototype.onOpenExternalLink = function(t) {
                var n = t.url;
                window.open(n, "_system", "location=yes")
            }, t.prototype.onHasParentFocus = function() {
                return document.hasFocus()
            }, t.prototype.toggleDesktopNotifications = function(t) {
                return this.D.setDesktopNotificationEnabled(t)
            }, t.prototype.Kt = function(t) {
                return this.Ut({
                    desktopNotify: t
                })
            }, t.prototype.destroy = function() {
                this.St.unlisten(this.onShowImagePopup, this.onSendMessage), this.St.destroy(), this.D.forgetUIBox(this), this.z.removeAllListeners(), this.yt.destroy(), this.Nt = !0
            }, t.prototype.isZombie = function() {
                return !this.yt || this.yt && this.yt.isZombie()
            }, t.prototype.onWindowVisibleChanged = function(t) {
                this.isZombie() || this.yt.request("windowVisibleChanged", [t])
            }, t.prototype.getMode = function() {
                if (this.boxType !== u.Popup) return "full";
                if (st() === a.Widget) return "widget";
                if (st() === a.Popover) return "popover";
                throw new Error("[TalkJS]: Unknown mode.")
            }, t
        }();

        function at(t, n) {
            for (; t.hasChildNodes();) n.appendChild(t.firstChild)
        }
        var ct, ht, ft = i(78),
            lt = (ct = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
                },
                function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    ct(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }),
            dt = function(e) {
                function t(t, n, i) {
                    void 0 === n && (n = {});
                    var s = e.call(this, t, n, u.Inbox, i) || this;
                    return s.Qt = new P(["conversationSelected", "desktopNotificationToggled"]), s.onConversationSelected = function(o) {
                        var t, n = [o.me];
                        null === o.conversation ? t = L.a.resolve(null) : (t = s.D.Et.K(o.sideId), n = n.concat(o.others));
                        var i = L.a.all(n.map(function(t) {
                            return s.kt(t)
                        }));
                        L.a.all([t, i]).then(function(t) {
                            var n = t[0],
                                i = t[1],
                                e = {
                                    me: i[0],
                                    conversation: n
                                };
                            if (null !== o.conversation) {
                                var r = i.slice(1);
                                r = r.filter(function(t) {
                                    return !0 === o.conversation.participants[t.internalId].canRead
                                }), e.other = r[0], e.others = r
                            }
                            e.conversationId = o.conversation ? o.conversation.id : null, s.Qt.emit("conversationSelected", e)
                        }).catch(function(t) {
                            return console.error(t)
                        })
                    }, s.onDesktopNotifyChange = function(t) {
                        var n = t.isEnabled,
                            i = t.appName;
                        C(n, s.D.Gt, i), s.Qt.emit("desktopNotificationToggled", {
                            isEnabled: n
                        })
                    }, s
                }
                return lt(t, e), t.prototype.mount = function(t) {
                    var n = this;
                    return e.prototype.Ft.call(this, t).then(function() {
                        n.St.listen(n.yt, n.onConversationSelected, "selectedConversationChanged"), n.St.listen(n.yt, n.onDesktopNotifyChange, "desktopNotifyChanged")
                    })
                }, t.prototype.setFeedFilter = function(t) {
                    Object(ft.b)("filter", t), this.Lt({
                        feedFilter: t
                    }, {
                        feedFilter: t
                    })
                }, t.prototype.on = function(t, n) {
                    e.prototype.Rt.call(this, t) ? e.prototype.on.call(this, t, n) : this.Qt.on(t, n)
                }, t.prototype.off = function(t, n) {
                    e.prototype.off.call(this, t, n), this.Qt.off(t, n)
                }, t.prototype.destroy = function() {
                    this.St.unlisten(this.onConversationSelected, this.onDesktopNotifyChange), e.prototype.destroy.call(this), this.Qt.removeAllListeners()
                }, t
            }(ut),
            vt = (ht = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
                },
                function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    ht(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }),
            pt = i(553).replace("CLOSE", i(554)).replace("OPEN", i(555)),
            gt = function(s) {
                function t(t, n, i) {
                    var e = s.call(this, t, {
                        hideHub: !0,
                        selectedConversation: n
                    }, u.Popup, i) || this;
                    return e.conversation = n, e.Wt = i, e.Zt = new P(["close", "open"]), e.qt = !1, e.Xt = function() {
                        if (e.Nt) throw new Error("[TalkJS] Can't hide a popup that's been destroyed. Please create and mount a new one.");
                        var t = e.$t();
                        e.Vt(t), e.Zt.emit("close", {})
                    }, e
                }
                return vt(t, s), t.prototype.select = function(t, n) {
                    this.conversation = t, s.prototype.select.call(this, t, n)
                }, t.prototype.mount = function(t) {
                    var n = this,
                        i = (void 0 === t ? {
                            show: !0
                        } : t).show,
                        e = this.tn(i),
                        r = e[0],
                        o = e[1];
                    return document.body.insertBefore(r, document.body.firstChild), s.prototype.Ft.call(this, o).then(function() {
                        n.St.listen(n.yt, n.Xt, "closePopover"), i ? n.nn(e) : n.setPresence({
                            visible: !1
                        })
                    })
                }, t.prototype.destroy = function() {
                    var t = this.$t()[0];
                    t ? (document.body.removeChild(t), this.restorePageHeight(), this.forgetMe(), this.St.unlisten(this.Xt), this.D.forgetUIBox(this), s.prototype.destroy.call(this)) : console.warn("[TalkJS]", "Could not call `destroy` on a non-existing element.")
                }, t.prototype.show = function() {
                    if (this.Nt) throw new Error("[TalkJS] Can't show a popup that's been destroyed. Please create and mount a new one.");
                    var t = this.$t();
                    this.nn(t)
                }, t.prototype.hide = function() {
                    if (this.Nt) throw new Error("[TalkJS] Can't hide a popup that's been destroyed. Please create and mount a new one.");
                    var t = this.$t();
                    this.Vt(t)
                }, t.prototype.on = function(t, n) {
                    s.prototype.Rt.call(this, t) ? s.prototype.on.call(this, t, n) : this.Zt.on(t, n)
                }, t.prototype.off = function(t, n) {
                    s.prototype.off.call(this, t, n), this.Zt.off(t, n)
                }, t.prototype.$t = function() {
                    var t = document.getElementById("__talkjs_popup_container_" + this.sessionId);
                    if (!t) {
                        throw Error("[TalkJS] Unexpected error: Could not find popup container. Maybe something, other than TalkJS, removed it from the DOM?")
                    }
                    var n = t.getElementsByTagName("span")[0],
                        i = t.getElementsByClassName("__talkjs_launcher")[0];
                    return [t, n, i]
                }, t.prototype.nn = function(t) {
                    for (var n = t[0], i = t[1], e = t[2], r = 0, o = this.D.getUIBoxes(function(t) {
                            return t.boxType === u.Popup && !t.isZombie()
                        }); r < o.length; r++) {
                        var s = o[r];
                        this !== s && s.hide()
                    }
                    i.style.display = "", e && (e.className = e.className.replace("closed", "open"), e.style.display = ""), n.style.display = "", this.rememberMe(), st() === a.Popover && this.fixPageHeight(n), this.qt = !0, this.setPresence({
                        visible: !0
                    })
                }, t.prototype.Vt = function(t) {
                    var n = t[0],
                        i = t[1],
                        e = t[2];
                    "always" === this.Wt.launcher ? (i.style.display = "none", e && (e.className = e.className.replace("open", "closed"))) : n.style.display = "none", this.restorePageHeight(), this.forgetMe(), this.qt = !1, this.setPresence({
                        visible: !1
                    })
                }, t.prototype.tn = function(t) {
                    var n = this,
                        i = document.createElement("span"),
                        e = document.createElement("style");
                    e.type = "text/css", e.appendChild(document.createTextNode(pt));
                    var r, o = document.createElement("div");
                    o.id = "__talkjs_popup_container_" + this.sessionId, i.style.display = "none", i.className = "__talkjs_popup", o.appendChild(e), o.appendChild(i);
                    var s = [o, i, void 0];
                    return "never" !== this.Wt.launcher && (r = document.createElement("a"), (s[2] = r).href = "#", r.className = "__talkjs_launcher " + (t ? "open" : "closed"), (t || "close-only" === this.Wt.launcher) && (r.style.display = "none"), r.id = "__talkjs_launcher", r.addEventListener("click", function(t) {
                        t.preventDefault(), t.target.className.match(/open/) ? (n.Vt(s), n.Zt.emit("close", {})) : (n.nn(s), n.Zt.emit("open", {}))
                    }), o.appendChild(r)), s
                }, t.prototype.rememberMe = function() {
                    if (this.Wt.keepOpen) {
                        var t;
                        t = this.conversation instanceof g || this.conversation instanceof c ? this.conversation.id : this.conversation;
                        var n = JSON.stringify({
                            conversationId: t,
                            options: this.Wt
                        });
                        U.l(bt(this.D.appId, this.D.me.id, "v2-"), n)
                    }
                }, t.prototype.fixPageHeight = function(t) {
                    var n = document.body,
                        i = document.documentElement;
                    this.in = {
                        rn: n.style.overflow,
                        sn: n.style.height,
                        un: n.style.width,
                        an: window.scrollY,
                        cn: window.scrollX,
                        hn: i.style.height,
                        fn: i.style.overflow
                    }, t.style.top = t.style.left = "0px", window.scrollTo(0, 0), n.style.height = i.style.height = "100%", n.style.width = "100%", i.style.overflow = n.style.overflow = "hidden"
                }, t.prototype.restorePageHeight = function() {
                    if (this.in) {
                        var t = document.body,
                            n = document.documentElement;
                        t.style.overflow = this.in.rn, t.style.width = this.in.un, t.style.height = this.in.sn, n.style.height = this.in.hn, n.style.overflow = this.in.fn, window.scrollTo(this.in.cn, this.in.an)
                    }
                }, t.prototype.forgetMe = function() {
                    U.d(bt(this.D.appId, this.D.me.internalId)), U.d(bt(this.D.appId, this.D.me.id, "v2-"))
                }, t
            }(ut);

        function bt(t, n, i) {
            return void 0 === i && (i = ""), "talkjs-popup-" + i + n + "-" + t
        }
        var Ot, wt, It = (Ot = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
                },
                function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    Ot(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }),
            mt = function(r) {
                function t(t, n, i) {
                    var e = (void 0 === n ? {} : n).selectedConversation;
                    return r.call(this, t, {
                        hideHub: !0,
                        selectedConversation: e
                    }, u.Chatbox, i) || this
                }
                return It(t, r), t.prototype.mount = function(t) {
                    return r.prototype.Ft.call(this, t)
                }, t.prototype.destroy = function() {
                    r.prototype.destroy.call(this)
                }, t
            }(ut),
            Tt = i(19);
        wt = i(556).default;
        var yt = {};
        for (var Mt in wt) yt[Mt] = new Tt.a({
            values: wt[Mt]
        });
        var Nt = yt,
            jt = Object.assign || function(t) {
                for (var n, i = 1, e = arguments.length; i < e; i++)
                    for (var r in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            },
            kt = 1,
            Et = [
                [kt],
                []
            ],
            St = function() {
                function d(t) {
                    var n, i, e, r, o, s, u, a = t.appId,
                        c = t.me,
                        h = t.signature,
                        f = t.serverHostname,
                        l = this;
                    if (this.z = new P(["message"]), this.ln = [], this.T = Object(U.m)(), this.dn = Et[d.vn], !this.dn) throw new Error("[TalkJS] Unexpected error at TalkJS startup.");
                    if (!(c instanceof p)) throw new Error("[TalkJS] The `me` property in the Session#constructor has to be of type Talk.User. For example: \n\nvar user = new Talk.User(data);\nvar session = new Talk.Session({\n    me: user,\n    appId: ...\n})\n            \nFor more information check our documentation https://talkjs.com/docs/api/classes/session.html#constructor");
                    this.appId = Object(T.c)(a, ["string"], "Session: required field 'appId' is not given, is not a string or it's empty.", [T.b, function(t) {
                        return "YOUR_APP_ID" !== t
                    }]), this.me = Object(T.c)( c, ["object"], "Session: required field 'me' is not given or not a Talk.User object"), this.signature = Object(T.c)(h, ["string", "undefined"], "Session: optional field 'signature' is not a string.", [T.b]), f && (this.Bt = Object(T.c)(f, ["string", "undefined"], "Session: optional field 'serverHostname' is not a string.", [T.b])), this.Bt || (this.Bt = w), this._ = (n = this.appId, i = this.me, e = this.signature, r = this.Bt, o = this.T, s = new U.a([
                        ["signature", e]
                    ]), u = "https://" + r + "/api/v0/" + n + "/bokens/" + i.id + "?" + s.toString(), Object(U.e)("GET", u).then(function(t) {
                        return JSON.parse(t)
                    }).then(function(t) {
                        return new G(t.boken, i, n, r, t.appLocale, o)
                    })), this.Et = new B(this._, function(t) {
                        return l.z.emit("message", t)
                    }, function(t) {
                        return l.pn(t)
                    }), new Y(this._), this.gn(), this.bn(), this.Gt = Tt.a.decide(Nt, "en", this.me.locale), this._.then(function(n) {
                        return n.getNym(l.me.internalId).then(function(t) {
                            t.locale !== l.me.locale && (l.Gt = Tt.a.decide(Nt, n.appLocale, t.locale))
                        })
                    })
                }
                return Object.defineProperty(d.prototype, "unreads", {
                    get: function() {
                        return this.Et
                    },
                    enumerable: !0,
                    configurable: !0
                }), d.prototype.hasValidCredentials = function() {
                    return this._.then(function() {
                        return !0
                    }, function() {
                        return !1
                    })
                }, d.prototype.gn = function() {
                    var t = U.g("talkjs-popup-" + this.me.internalId + "-" + this.appId),
                        n = U.g("talkjs-popup-v2-" + this.me.id + "-" + this.appId);
                    if (t || n) {
                        if (n) {
                            var i = JSON.parse(n),
                                e = i.conversationId,
                                r = i.options;
                            this.createPopup(e, r).mount({
                                show: !0
                            })
                        }
                        if (t) this.createPopup(t).mount({
                            show: !0
                        })
                    }
                }, d.prototype.bn = function() {
                    var e = this,
                        t = function(t) {
                            for (var n = 0, i = e.ln; n < i.length; n++) {
                                i[n].onWindowVisibleChanged(t)
                            }
                        };
                    window.addEventListener("focus", function() {
                        return t(!0)
                    }), window.addEventListener("blur", function() {
                        return t(!1)
                    })
                }, d.prototype.getOrStartConversation = function(t, n) {
                    var i = void 0 === n ? {} : n,
                        e = i.participants,
                        r = i.topicId,
                        o = i.subject,
                        s = i.custom,
                        u = i.welcomeMessages,
                        a = i.photoUrl;
                    if (t instanceof p) {
                        var c = t,
                            h = [this.me, c];
                        return this.getOrStartConversation(b(this.me, c, r), {
                            participants: h,
                            topicId: r,
                            subject: o,
                            welcomeMessages: u,
                            custom: s,
                            photoUrl: a
                        })
                    }
                    var f = t;
                    Object(T.c)(f, ["string"], "conversationId cannot be empty", [T.b]);
                    var l = (e = e || []).map(function(t) {
                        return new v(t)
                    });
                    return l = this.On(l, this.me), new g({
                        conversationId: f,
                        participants: l,
                        topicId: r,
                        subject: o,
                        welcomeMessages: u,
                        custom: s,
                        photoUrl: a
                    }, this)
                }, d.prototype.On = function(t, n) {
                    var i = this;
                    return t.filter(function(t) {
                        return t.user.id === i.me.id
                    })[0] ? t : [new v(this.me)].concat(t)
                }, d.prototype.getOrCreateConversation = function(t) {
                    return new c(t, this)
                }, d.prototype.createInbox = function(t) {
                    void 0 === t && (t = {}), t.feedFilter && Object(ft.b)("feedFilter", t.feedFilter);
                    var n = t.selected,
                        i = new dt(this, {
                            selectedConversation: n
                        }, t);
                    return this.rememberUIBox(i), i
                }, d.prototype.createChatbox = function(t, n) {
                    void 0 === n && (n = {});
                    var i = new mt(this, {
                        selectedConversation: t
                    }, n);
                    return this.rememberUIBox(i), i
                }, d.prototype.createPopup = function(t, n) {
                    n = jt({}, {
                        keepOpen: !0,
                        launcher: "close-only"
                    }, n);
                    var i = new gt(this, t, n);
                    return this.rememberUIBox(i), i
                }, d.prototype.rememberUIBox = function(t) {
                    this.ln.push(t)
                }, d.prototype.syncThemeForLocalDev = function(t) {
                    U.i(this.appId) ? console.warn("[TalkJS]: syncThemeForLocalDev does not work in live mode, please copy your theme to the TalkJS dashboard!") : this.themePath = t
                }, d.prototype.forgetUIBox = function(t) {
                    var n = this.ln.indexOf(t);
                    0 <= n && this.ln.splice(n, 1)
                }, d.prototype.getUIBoxes = function(t) {
                    return this.ln.filter(t)
                }, d.prototype.setDesktopNotificationEnabled = function(n) {
                    C(n, this.Gt), this.wn(), this.ln.forEach(function(t) {
                        return t.Kt(n)
                    })
                }, d.prototype.wn = function() {
                    this.ln.filter(function(t) {
                        return t.isZombie()
                    }).forEach(function(t) {
                        return t.destroy()
                    })
                }, d.prototype.registerDevice = function(t) {
                    var n = this,
                        i = t.platform,
                        e = t.pushRegistrationId;
                    return i = Object(T.c)(i, ["string"], 'Session.registerDevice: Platform should be a string containing "ios" or "android" values.', [T.f]), e = Object(T.c)(e, ["string"], "Session.registerDevice: Push registration id should be not empty string.", [T.b]), this._.then(function(t) {
                        return t.put("/nyms/" + n.me.internalId + "/push_registration", {
                            platform: i,
                            pushRegistrationId: e
                        })
                    }).then(function() {}).catch(function(t) {
                        throw console.error("[TalkJS]", "Cannot register this device. Please contact us to get more information."), t
                    })
                }, d.prototype.unregisterDevice = function() {
                    var n = this;
                    return this._.then(function(t) {
                        return t.delete("/nyms/" + n.me.internalId + "/push_registration")
                    }).then(function() {}).catch(function(t) {
                        throw console.error("[TalkJS]", "Cannot unregister this device. Please contact us to get more information."), t
                    })
                }, d.prototype.pn = function(t) {
                    var n = this.getUIBoxes(function(t) {
                        return t.boxType === u.Inbox
                    });
                    1 === n.length && n[0].select(t)
                }, d.prototype.on = function(t, n) {
                    this.z.on(t, n)
                }, d.prototype.off = function(t, n) {
                    this.z.off(t, n)
                }, d.prototype.In = function(t) {
                    var n;
                    return n = t, this._.then(function(t) {
                        return t.post("/_t", n)
                    })
                }, d.prototype.Jt = function(t) {
                    return -1 !== this.dn.indexOf(t)
                }, d
            }();
        var Dt = window;
        if (Dt.Talk || (Dt.Talk = {}), St.vn = Dt.Talk.v || 0, Dt.Talk.User = p, Dt.Talk.Session = St, Dt.Talk.oneOnOneId = function(t, n) {
                return t instanceof p && (t = t.id), n instanceof p && (n = n.id), s(JSON.stringify([t, n].sort()))
            }, Dt.onTalkLoaded && Dt.onTalkLoaded(), Dt.onTalkUiLoaded && Dt.onTalkUiLoaded(), Dt.Talk.ready) {
            var _t = L.a.resolve(),
                At = Dt.Talk.ready;
            At.c.forEach(function(t) {
                var n = t[0],
                    i = t[1],
                    e = t[2];
                _t.then(n).then(i).catch(e)
            }), At.mn = [], At.then = _t.then.bind(_t), At.catch = _t.catch.bind(_t)
        }
    },
    78: function(t, n, i) {
        "use strict";
        i.d(n, "a", function() {
            return e
        }), i.d(n, "b", function() {
            return o
        });
        var c = i(10),
            r = Object.assign || function(t) {
                for (var n, i = 1, e = arguments.length; i < e; i++)
                    for (var r in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            };

        function e(t, n, i) {
            var e = r({
                custom: {}
            }, t);
            return n.filter(function(t) {
                return function(t, n) {
                    for (var i = !0, e = 0, r = Object.getOwnPropertyNames(n.custom); e < r.length; e++) {
                        var o = r[e],
                            s = a(o, t.custom, n.custom[o]);
                        i = i && s
                    }
                    if (void 0 !== n.access) {
                        var u = function(t) {
                                var n = t.canWrite,
                                    i = t.canRead;
                                if (n) return "ReadWrite";
                                if (i) return "Read";
                                return "None"
                            }(t.rights),
                            s = h(u, n.access);
                        i = i && s
                    }
                    if (void 0 !== n.hasUnreadMessages) {
                        var s = n.hasUnreadMessages !== t.read;
                        i = i && s
                    }
                    return i
                }(i(t), e)
            })
        }

        function a(t, n, i) {
            switch (i) {
                case "exists":
                    return t in n;
                case "!exists":
                    return !(t in n)
            }
            return h(n[t], i)
        }

        function h(t, n) {
            var i = n[0],
                e = n[1];
            switch (i) {
                case "oneOf":
                    return -1 !== e.indexOf(t);
                case "!oneOf":
                    return -1 === e.indexOf(t);
                case "==":
                    return t === e;
                case "!=":
                    return t !== e
            }
        }

        function o(t, n) {
            if (Object(c.c)(n.hasUnreadMessages, ["boolean", "undefined"], t + ".hasUnreadMessages must be boolean."), Object(c.c)(n.custom, ["object", "undefined"], t + ".custom must be an object."), n.custom)
                for (var i = 0, e = Object.getOwnPropertyNames(n.custom); i < e.length; i++) {
                    var r = e[i];
                    s(t + ".custom." + r, n.custom[r])
                }
            Object(c.c)(n.access, ["string[]", "undefined"], t + ".access must be an array."), n.access && s(t + ".access", n.access, ["ReadWrite", "Read", "None"])
        }

        function s(t, n, i) {
            var e = t + " must be a valid predicate. See the docs for all available options.";
            if ("string" != typeof n) {
                if (2 !== n.length) throw new Error("[TalkJS] " + e);
                var r = n[0],
                    o = n[1];
                if (Object(c.e)(r, ["==", "!=", "oneOf", "!oneOf"], e), "oneOf" === r || "!oneOf" === r) {
                    if (Object(c.c)(o, ["string[]"], e), i)
                        for (var s = 0, u = o; s < u.length; s++) {
                            var a = u[s];
                            Object(c.e)(a, i, e)
                        }
                } else Object(c.c)(o, ["string"], e), i && Object(c.e)(o, i, e)
            } else Object(c.e)(n, ["exists", "!exists"], e)
        }
    }
});
//# sourceMappingURL=talk-bundle-ecd6f4473c8e8177ab9d.js.map