(function (g) {
  var window = this;
  ("use strict");
  var b8 = function (a) {
      g.Fp(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36)
      );
      return a;
    },
    c8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Ega(a.B, b, c);
    },
    QAb = function (a) {
      if (a instanceof g.Ct) return a;
      if ("function" == typeof a.Sl) return a.Sl(!1);
      if (g.ab(a)) {
        var b = 0,
          c = new g.Ct();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.t2;
            if (b in a) return g.Dt(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    RAb = function (a, b, c) {
      if (g.ab(a)) g.$b(a, b, c);
      else
        for (a = QAb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    SAb = function (a, b) {
      var c = [];
      RAb(
        b,
        function (d) {
          try {
            var e = g.Rv.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.ula(e) && c.push(d);
        },
        a
      );
      return c;
    },
    TAb = function (a, b) {
      SAb(a, b).forEach(function (c) {
        g.Rv.prototype.remove.call(this, c);
      }, a);
    },
    UAb = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken)
          return { locationOverrideToken: a.qa.locationOverrideToken };
        if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7)
          return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 };
      }
      return null;
    },
    VAb = function (a, b) {
      g.Fb(a, b) || a.push(b);
    },
    WAb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    XAb = function (a, b) {
      return g.gd(a, b);
    },
    YAb = function (a) {
      try {
        return g.Ta.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    d8 = function (a) {
      if (g.Ta.JSON)
        try {
          return g.Ta.JSON.parse(a);
        } catch (b) {}
      return YAb(a);
    },
    ZAb = function (a) {
      if (a.lm && "function" == typeof a.lm) return a.lm();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (g.ab(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.cd(a);
    },
    $Ab = function (a) {
      if (a.zn && "function" == typeof a.zn) return a.zn();
      if (!a.lm || "function" != typeof a.lm) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (g.ab(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return g.dd(a);
        }
      }
    },
    aBb = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.ab(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, void 0);
      else
        for (var c = $Ab(a), d = ZAb(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    },
    bBb = function (a, b, c, d) {
      var e = new g.Lo(null);
      a && g.yp(e, a);
      b && g.zp(e, b);
      c && g.Ap(e, c);
      d && (e.C = d);
      return e;
    },
    cBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    dBb = function (a, b) {
      a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    eBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    fBb = function (a, b) {
      a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    gBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Kc: 3, Jc: "channel_type" }
      );
    },
    hBb = function (a, b) {
      a.j.Ii(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    iBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/error", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    jBb = function (a, b) {
      a.j.Ii("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    kBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    lBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    mBb = function (a, b) {
      return new g.pv(a, b);
    },
    f8 = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    g8 = function (a, b) {
      this.B = {};
      this.j = [];
      this.Hu = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof g8)
          for (c = a.zn(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    },
    h8 = function (a) {
      if (a.size != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length; ) {
          var d = a.j[b];
          f8(a.B, d) && (a.j[c++] = d);
          b++;
        }
        a.j.length = c;
      }
      if (a.size != a.j.length) {
        var e = {};
        for (c = b = 0; b < a.j.length; )
          (d = a.j[b]), f8(e, d) || ((a.j[c++] = d), (e[d] = 1)), b++;
        a.j.length = c;
      }
    },
    qBb = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.ownerObfuscatedGaiaId =
        this.obfuscatedGaiaId =
        this.avatar =
        this.username =
          "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g8();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        nBb(this, a.capabilities || ""),
        oBb(this, a.compatibleSenderThemes || ""),
        pBb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    nBb = function (a, b) {
      a.capabilities.clear();
      g.Ht(b.split(","), g.jb(XAb, rBb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    oBb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Ht(b.split(","), g.jb(XAb, sBb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    pBb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    i8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    j8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    tBb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    uBb = function (a) {
      return new i8(a);
    },
    vBb = function (a) {
      return Array.isArray(a) ? g.Rr(a, uBb) : [];
    },
    k8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    wBb = function (a) {
      return Array.isArray(a) ? "[" + g.Rr(a, k8).join(",") + "]" : "null";
    },
    xBb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    yBb = function (a) {
      return g.Rr(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    zBb = function (a, b) {
      return g.Db(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    l8 = function (a, b) {
      return g.Db(a, function (c) {
        return j8(c, b);
      });
    },
    ABb = function () {
      var a = (0, g.pC)();
      a && TAb(a, a.j.Sl(!0));
    },
    m8 = function () {
      var a = g.rC("yt-remote-connected-devices") || [];
      g.Wb(a);
      return a;
    },
    BBb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Rr(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    CBb = function (a) {
      g.qC("yt-remote-connected-devices", a, 86400);
    },
    n8 = function () {
      if (DBb) return DBb;
      var a = g.rC("yt-remote-device-id");
      a || ((a = xBb()), g.qC("yt-remote-device-id", a, 31536e3));
      for (var b = m8(), c = 1, d = a; g.Fb(b, d); ) c++, (d = a + "#" + c);
      return (DBb = d);
    },
    EBb = function () {
      var a = m8(),
        b = n8();
      g.tC() && g.Zb(a, b);
      a = BBb(a);
      if (0 == a.length)
        try {
          g.Mpa("remote_sid");
        } catch (c) {}
      else
        try {
          g.JB("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    FBb = function () {
      return g.rC("yt-remote-session-browser-channel");
    },
    GBb = function () {
      return g.rC("yt-remote-local-screens") || [];
    },
    HBb = function () {
      g.qC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    IBb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Rr(GBb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Rr(a, function (d) {
          return d.loungeToken;
        });
      g.Sr(c, function (d) {
        return !g.Fb(b, d);
      }) && HBb();
      g.qC("yt-remote-local-screens", a, 31536e3);
    },
    o8 = function (a) {
      a ||
        (g.sC("yt-remote-session-screen-id"),
        g.sC("yt-remote-session-video-id"));
      EBb();
      a = m8();
      g.Hb(a, n8());
      CBb(a);
    },
    JBb = function () {
      if (!p8) {
        var a = g.Xv();
        a && (p8 = new g.Ov(a));
      }
    },
    KBb = function () {
      JBb();
      return p8 ? !!p8.get("yt-remote-use-staging-server") : !1;
    },
    q8 = function (a, b) {
      g.dE[a] = !0;
      var c = g.bE();
      c && c.publish.apply(c, arguments);
      g.dE[a] = !1;
    },
    LBb = function () {},
    e8 = function () {
      if (!r8) {
        r8 = new g.Dg(new LBb());
        var a = g.zB("client_streamz_web_flush_count", -1);
        -1 !== a && (r8.C = a);
      }
      return r8;
    },
    MBb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    NBb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    OBb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    s8 = function (a) {
      a.length
        ? PBb(a.shift(), function () {
            s8(a);
          })
        : QBb();
    },
    RBb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    PBb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Re(d, g.Mw(a));
      (document.head || document.documentElement).appendChild(d);
    },
    SBb = function () {
      var a = MBb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    QBb = function () {
      var a = OBb();
      a && a(!1, "No cast extension found");
    },
    UBb = function () {
      if (TBb) {
        var a = 2,
          b = OBb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        PBb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          QBb,
          c
        );
      }
    },
    VBb = function () {
      UBb();
      var a = SBb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      s8(a);
    },
    XBb = function () {
      UBb();
      var a = SBb();
      a.push.apply(a, g.qa(WBb.map(RBb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      s8(a);
    },
    t8 = function (a, b, c) {
      g.I.call(this);
      this.K = null != c ? (0, g.gb)(a, c) : a;
      this.Ri = b;
      this.G = (0, g.gb)(this.Z3, this);
      this.j = !1;
      this.B = 0;
      this.C = this.fd = null;
      this.D = [];
    },
    u8 = function (a, b, c) {
      g.I.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Ri = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.fd = null;
    },
    YBb = function (a) {
      a.fd = g.Bg(function () {
        a.fd = null;
        a.j && !a.B && ((a.j = !1), YBb(a));
      }, a.Ri);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    v8 = function () {},
    ZBb = function () {
      g.zb.call(this, "p");
    },
    $Bb = function () {
      g.zb.call(this, "o");
    },
    bCb = function () {
      return (aCb = aCb || new g.Dd());
    },
    cCb = function (a) {
      g.zb.call(this, "serverreachability", a);
    },
    w8 = function (a) {
      var b = bCb();
      b.dispatchEvent(new cCb(b, a));
    },
    dCb = function (a) {
      g.zb.call(this, "statevent", a);
    },
    x8 = function (a) {
      var b = bCb();
      b.dispatchEvent(new dCb(b, a));
    },
    eCb = function (a, b, c, d) {
      g.zb.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    y8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    z8 = function () {},
    A8 = function (a, b, c, d) {
      this.C = a;
      this.D = b;
      this.Xb = c;
      this.Pb = d || 1;
      this.zb = new g.Kp(this);
      this.fb = 45e3;
      this.Na = null;
      this.K = !1;
      this.Y = this.Za = this.Z = this.Ra = this.Ca = this.rb = this.qa = null;
      this.ra = [];
      this.j = null;
      this.N = 0;
      this.G = this.Ga = null;
      this.Hb = -1;
      this.La = !1;
      this.bb = 0;
      this.Wa = null;
      this.Jb = this.Va = this.Gb = this.Da = !1;
      this.B = new fCb();
    },
    fCb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    hCb = function (a, b, c) {
      a.Ra = 1;
      a.Z = b8(b.clone());
      a.Y = c;
      a.Da = !0;
      gCb(a, null);
    },
    gCb = function (a, b) {
      a.Ca = Date.now();
      B8(a);
      a.Za = a.Z.clone();
      c8(a.Za, "t", a.Pb);
      a.N = 0;
      var c = a.C.Ra;
      a.B = new fCb();
      a.j = iCb(a.C, c ? b : null, !a.Y);
      0 < a.bb && (a.Wa = new u8((0, g.gb)(a.PT, a, a.j), a.bb));
      a.zb.listen(a.j, "readystatechange", a.b4);
      b = a.Na ? g.md(a.Na) : {};
      a.Y
        ? (a.Ga || (a.Ga = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.Za, a.Ga, a.Y, b))
        : ((a.Ga = "GET"), a.j.send(a.Za, a.Ga, null, b));
      w8(1);
    },
    jCb = function (a) {
      return a.j ? "GET" == a.Ga && 2 != a.Ra && a.C.Qe : !1;
    },
    mCb = function (a, b) {
      var c = a.N,
        d = b.indexOf("\n", c);
      if (-1 == d) return kCb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return lCb;
      d += 1;
      if (d + c > b.length) return kCb;
      b = b.slice(d, d + c);
      a.N = d + c;
      return b;
    },
    B8 = function (a) {
      a.rb = Date.now() + a.fb;
      nCb(a, a.fb);
    },
    nCb = function (a, b) {
      if (null != a.qa) throw Error("WatchDog timer not null");
      a.qa = y8((0, g.gb)(a.a4, a), b);
    },
    oCb = function (a) {
      a.qa && (g.Ta.clearTimeout(a.qa), (a.qa = null));
    },
    C8 = function (a) {
      a.C.Ig() || a.La || pCb(a.C, a);
    },
    D8 = function (a) {
      oCb(a);
      g.vb(a.Wa);
      a.Wa = null;
      a.zb.removeAll();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    xCb = function (a, b) {
      try {
        var c = a.C;
        if (0 != c.Ih && (c.j == a || qCb(c.B, a)))
          if (!a.Va && qCb(c.B, a) && 3 == c.Ih) {
            try {
              var d = c.zf.j.parse(b);
            } catch (w) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Ca + 3e3 < a.Ca) E8(c), F8(c);
                      else break a;
                    rCb(c);
                    x8(18);
                  }
                }
              else
                (c.Ld = e[1]),
                  0 < c.Ld - c.Wa &&
                    37500 > e[2] &&
                    c.Va &&
                    0 == c.ra &&
                    !c.qa &&
                    (c.qa = y8((0, g.gb)(c.d4, c), 6e3));
              if (1 >= sCb(c.B) && c.Sc) {
                try {
                  c.Sc();
                } catch (w) {}
                c.Sc = void 0;
              }
            } else G8(c, 11);
          } else if (((a.Va || c.j == a) && E8(c), !g.ec(b)))
            for (e = c.zf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Wa = f[0];
              f = f[1];
              if (2 == c.Ih)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.Pb = f[2];
                  var h = f[3];
                  null != h && (c.QT = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.bb = 1.5 * l);
                  d = c;
                  var m = a.SO();
                  if (m) {
                    var n = g.Xn(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (tCb(p, p.B), (p.B = null)));
                    }
                    if (d.Da) {
                      var q = g.Xn(m, "X-HTTP-Session-Id");
                      q && ((d.Ge = q), g.Fp(d.Na, d.Da, q));
                    }
                  }
                  c.Ih = 3;
                  c.G && c.G.XT();
                  c.Dc && (c.Id = Date.now() - a.Ca);
                  d = c;
                  var r = a;
                  d.wd = uCb(d, d.Ra ? d.Pb : null, d.Xb);
                  if (r.Va) {
                    vCb(d.B, r);
                    var t = r,
                      v = d.bb;
                    v && t.setTimeout(v);
                    t.qa && (oCb(t), B8(t));
                    d.j = r;
                  } else wCb(d);
                  0 < c.C.length && H8(c);
                } else ("stop" != f[0] && "close" != f[0]) || G8(c, 7);
              else
                3 == c.Ih &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? G8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.VT(f),
                  (c.ra = 0));
            }
        w8(4);
      } catch (w) {}
    },
    yCb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    zCb = function (a) {
      this.G = a || 10;
      g.Ta.PerformanceNavigationTiming
        ? ((a = g.Ta.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Ta.chrome &&
            g.Ta.chrome.loadTimes &&
            g.Ta.chrome.loadTimes() &&
            g.Ta.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    ACb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    sCb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    qCb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    tCb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    vCb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    BCb = function (a) {
      if (null != a.B) return a.C.concat(a.B.ra);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.Lb(a.C);
    },
    CCb = function (a, b) {
      var c = new z8();
      if (g.Ta.Image) {
        var d = new Image();
        d.onload = g.jb(I8, c, "TestLoadImage: loaded", !0, b, d);
        d.onerror = g.jb(I8, c, "TestLoadImage: error", !1, b, d);
        d.onabort = g.jb(I8, c, "TestLoadImage: abort", !1, b, d);
        d.ontimeout = g.jb(I8, c, "TestLoadImage: timeout", !1, b, d);
        g.Ta.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    DCb = function (a, b) {
      var c = new z8(),
        d = new AbortController(),
        e = setTimeout(function () {
          d.abort();
          I8(c, "TestPingServer: timeout", !1, b);
        }, 1e4);
      fetch(a, { signal: d.signal })
        .then(function (f) {
          clearTimeout(e);
          f.ok
            ? I8(c, "TestPingServer: ok", !0, b)
            : I8(c, "TestPingServer: server error", !1, b);
        })
        .catch(function () {
          clearTimeout(e);
          I8(c, "TestPingServer: error", !1, b);
        });
    },
    I8 = function (a, b, c, d, e) {
      try {
        e &&
          ((e.onload = null),
          (e.onerror = null),
          (e.onabort = null),
          (e.ontimeout = null)),
          d(c);
      } catch (f) {}
    },
    ECb = function () {
      this.j = new v8();
    },
    FCb = function (a, b, c) {
      var d = c || "";
      try {
        aBb(a, function (e, f) {
          var h = e;
          g.bb(e) && (h = g.$m(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    J8 = function (a, b, c) {
      return c && c.V8 ? c.V8[a] || b : b;
    },
    GCb = function (a) {
      this.C = [];
      this.Pb =
        this.wd =
        this.Na =
        this.Xb =
        this.j =
        this.Ge =
        this.Da =
        this.La =
        this.N =
        this.Hb =
        this.Y =
          null;
      this.Qf = this.Za = 0;
      this.Of = J8("failFast", !1, a);
      this.Va = this.qa = this.Z = this.K = this.G = null;
      this.qc = !0;
      this.Ld = this.Wa = -1;
      this.Jb = this.ra = this.Ca = 0;
      this.lh = J8("baseRetryDelayMs", 5e3, a);
      this.Rf = J8("retryDelaySeedMs", 1e4, a);
      this.Pf = J8("forwardChannelMaxRetries", 2, a);
      this.je = J8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.ye = (a && a.wqb) || void 0;
      this.dg = (a && a.mpb) || void 0;
      this.Qe = (a && a.tqb) || !1;
      this.bb = void 0;
      this.Ra = (a && a.rda) || !1;
      this.D = "";
      this.B = new zCb(a && a.tnb);
      this.zf = new ECb();
      this.zb = (a && a.Knb) || !1;
      this.rb = (a && a.znb) || !1;
      this.zb && this.rb && (this.rb = !1);
      this.Sf = (a && a.jnb) || !1;
      a && a.Mnb && (this.qc = !1);
      this.Dc = (!this.zb && this.qc && a && a.xnb) || !1;
      this.hd = void 0;
      a && a.eZ && 0 < a.eZ && (this.hd = a.eZ);
      this.Sc = void 0;
      this.Id = 0;
      this.fb = !1;
      this.Gb = this.Ga = null;
    },
    F8 = function (a) {
      a.j && (HCb(a), a.j.cancel(), (a.j = null));
    },
    ICb = function (a) {
      F8(a);
      a.Z && (g.Ta.clearTimeout(a.Z), (a.Z = null));
      E8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), (a.K = null));
    },
    H8 = function (a) {
      ACb(a.B) || a.K || ((a.K = !0), g.fg(a.ST, a), (a.Ca = 0));
    },
    KCb = function (a, b) {
      if (sCb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.ra.concat(a.C)), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Ca >= (a.Of ? 0 : a.Pf)) return !1;
      a.K = y8((0, g.gb)(a.ST, a, b), JCb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    MCb = function (a, b) {
      var c;
      b ? (c = b.Xb) : (c = a.Za++);
      var d = a.Na.clone();
      g.Fp(d, "SID", a.D);
      g.Fp(d, "RID", c);
      g.Fp(d, "AID", a.Wa);
      K8(a, d);
      a.N && a.Y && g.Jp(d, a.N, a.Y);
      c = new A8(a, a.D, c, a.Ca + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.ra.concat(a.C));
      b = LCb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.je) + Math.round(0.5 * a.je * Math.random())
      );
      tCb(a.B, c);
      hCb(c, d, b);
    },
    K8 = function (a, b) {
      a.La &&
        g.Vc(a.La, function (c, d) {
          g.Fp(b, d, c);
        });
      a.G &&
        aBb({}, function (c, d) {
          g.Fp(b, d, c);
        });
    },
    LCb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.gb)(a.G.e4, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              FCb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.ra = a;
      return d;
    },
    wCb = function (a) {
      a.j || a.Z || ((a.Jb = 1), g.fg(a.RT, a), (a.ra = 0));
    },
    rCb = function (a) {
      if (a.j || a.Z || 3 <= a.ra) return !1;
      a.Jb++;
      a.Z = y8((0, g.gb)(a.RT, a), JCb(a, a.ra));
      a.ra++;
      return !0;
    },
    HCb = function (a) {
      null != a.Ga && (g.Ta.clearTimeout(a.Ga), (a.Ga = null));
    },
    NCb = function (a) {
      a.j = new A8(a, a.D, "rpc", a.Jb);
      null === a.N && (a.j.Na = a.Y);
      a.j.bb = 0;
      var b = a.wd.clone();
      g.Fp(b, "RID", "rpc");
      g.Fp(b, "SID", a.D);
      g.Fp(b, "AID", a.Wa);
      g.Fp(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.hd && g.Fp(b, "TO", a.hd);
      g.Fp(b, "TYPE", "xmlhttp");
      K8(a, b);
      a.N && a.Y && g.Jp(b, a.N, a.Y);
      a.bb && a.j.setTimeout(a.bb);
      var c = a.j;
      a = a.Pb;
      c.Ra = 1;
      c.Z = b8(b.clone());
      c.Y = null;
      c.Da = !0;
      gCb(c, a);
    },
    E8 = function (a) {
      null != a.qa && (g.Ta.clearTimeout(a.qa), (a.qa = null));
    },
    pCb = function (a, b) {
      var c = null;
      if (a.j == b) {
        E8(a);
        HCb(a);
        a.j = null;
        var d = 2;
      } else if (qCb(a.B, b)) (c = b.ra), vCb(a.B, b), (d = 1);
      else return;
      if (0 != a.Ih)
        if (b.K)
          if (1 == d) {
            c = b.Y ? b.Y.length : 0;
            b = Date.now() - b.Ca;
            var e = a.Ca;
            d = bCb();
            d.dispatchEvent(new eCb(d, c, b, e));
            H8(a);
          } else wCb(a);
        else {
          var f = b.Hb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && KCb(a, b)) || (2 == d && rCb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                G8(a, 5);
                break;
              case 4:
                G8(a, 10);
                break;
              case 3:
                G8(a, 6);
                break;
              default:
                G8(a, 2);
            }
        }
    },
    JCb = function (a, b) {
      var c = a.lh + Math.floor(Math.random() * a.Rf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    G8 = function (a, b) {
      if (2 == b) {
        var c = (0, g.gb)(a.xda, a),
          d = a.dg,
          e = !d;
        d = new g.Lo(d || "//www.google.com/images/cleardot.gif");
        (g.Ta.location && "http" == g.Ta.location.protocol) || g.yp(d, "https");
        b8(d);
        e ? CCb(d.toString(), c) : DCb(d.toString(), c);
      } else x8(2);
      a.Ih = 0;
      a.G && a.G.UT(b);
      OCb(a);
      ICb(a);
    },
    OCb = function (a) {
      a.Ih = 0;
      a.Gb = [];
      if (a.G) {
        var b = BCb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Mb(a.Gb, b),
            g.Mb(a.Gb, a.C),
            (a.B.C.length = 0),
            g.Lb(a.C),
            (a.C.length = 0);
        a.G.TT();
      }
    },
    PCb = function (a) {
      if (0 == a.Ih) return a.Gb;
      var b = [];
      g.Mb(b, BCb(a.B));
      g.Mb(b, a.C);
      return b;
    },
    uCb = function (a, b, c) {
      var d = g.Gp(c);
      "" != d.j
        ? (b && g.zp(d, b + "." + d.j), g.Ap(d, d.D))
        : ((d = g.Ta.location),
          (d = bBb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Da;
      c = a.Ge;
      b && c && g.Fp(d, b, c);
      g.Fp(d, "VER", a.QT);
      K8(a, d);
      return d;
    },
    iCb = function (a, b, c) {
      if (b && !a.Ra)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Qe && !a.ye ? new g.Qn(new g.Ho({ N0: c })) : new g.Qn(a.ye);
      b.K = a.Ra;
      return b;
    },
    QCb = function () {},
    RCb = function () {},
    M8 = function (a, b) {
      g.Dd.call(this);
      this.j = new GCb(b);
      this.G = a;
      this.B = (b && b.J9) || null;
      a = (b && b.I9) || null;
      b &&
        b.rnb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.Qob) || null;
      b &&
        b.mZ &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.mZ)
          : (a = { "X-WebChannel-Content-Type": b.mZ }));
      b &&
        b.nW &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.nW)
          : (a = { "X-WebChannel-Client-Profile": b.nW }));
      this.j.Hb = a;
      (a = b && b.Pob) && !g.ec(a) && (this.j.N = a);
      this.K = (b && b.rda) || !1;
      this.D = (b && b.Qpb) || !1;
      (b = b && b.O8) &&
        !g.ec(b) &&
        ((this.j.Da = b),
        g.ed(this.B, b) && ((a = this.B), b in a && delete a[b]));
      this.C = new L8(this);
    },
    SCb = function (a) {
      ZBb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.bd(b)) ? g.jd(b, this.j) : b)
        : (this.data = a);
    },
    TCb = function (a) {
      $Bb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    L8 = function (a) {
      this.j = a;
    },
    UCb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    VCb = function (a) {
      return PCb(a.j).map(function (b) {
        var c = a.B;
        b = b.map;
        "__data__" in b ? ((b = b.__data__), (c = c.D ? YAb(b) : b)) : (c = b);
        return c;
      });
    },
    N8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    P8 = function (a) {
      O8.dispatchEvent(new WCb(O8, a));
    },
    WCb = function (a) {
      g.zb.call(this, "statevent", a);
    },
    Q8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.Kp(this);
      this.G = new g.Ag();
      this.G.setInterval(250);
    },
    YCb = function (a, b, c) {
      a.YG = 1;
      a.jC = b8(b.clone());
      a.Wu = c;
      a.Da = !0;
      XCb(a, null);
    },
    ZCb = function (a, b, c, d, e) {
      a.YG = 1;
      a.jC = b8(b.clone());
      a.Wu = null;
      a.Da = c;
      e && (a.m0 = !1);
      XCb(a, d);
    },
    XCb = function (a, b) {
      a.mC = Date.now();
      $Cb(a);
      a.XG = a.jC.clone();
      c8(a.XG, "t", a.K);
      a.aH = 0;
      a.dj = a.j.jM(a.j.nC() ? b : null);
      0 < a.hM && (a.WG = new u8((0, g.gb)(a.ZT, a, a.dj), a.hM));
      a.C.listen(a.dj, "readystatechange", a.g4);
      b = a.Uu ? g.md(a.Uu) : {};
      a.Wu
        ? ((a.ZG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.dj.send(a.XG, a.ZG, a.Wu, b))
        : ((a.ZG = "GET"),
          a.m0 && !g.Nc && (b.Connection = "close"),
          a.dj.send(a.XG, a.ZG, null, b));
      a.j.vr(1);
    },
    cDb = function (a, b) {
      var c = a.aH,
        d = b.indexOf("\n", c);
      if (-1 == d) return aDb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return bDb;
      d += 1;
      if (d + c > b.length) return aDb;
      b = b.slice(d, d + c);
      a.aH = d + c;
      return b;
    },
    $Cb = function (a) {
      a.iM = Date.now() + a.B;
      dDb(a, a.B);
    },
    dDb = function (a, b) {
      if (null != a.Vx) throw Error("WatchDog timer not null");
      a.Vx = N8((0, g.gb)(a.f4, a), b);
    },
    eDb = function (a) {
      a.Vx && (g.Ta.clearTimeout(a.Vx), (a.Vx = null));
    },
    fDb = function (a) {
      a.j.Ig() || a.kC || a.j.lM(a);
    },
    R8 = function (a) {
      eDb(a);
      g.vb(a.WG);
      a.WG = null;
      a.G.stop();
      a.C.removeAll();
      if (a.dj) {
        var b = a.dj;
        a.dj = null;
        b.abort();
        b.dispose();
      }
      a.m1 && (a.m1 = null);
    },
    gDb = function (a, b) {
      try {
        a.j.aU(a, b), a.j.vr(4);
      } catch (c) {}
    },
    iDb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        hDb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ta.setTimeout(function () {
                iDb(a, b, c, d, f);
              }, f);
        });
      }
    },
    hDb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Ta.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    jDb = function (a) {
      this.j = a;
      this.B = new v8();
    },
    kDb = function (a) {
      var b = T8(a.j, a.WC, "/mail/images/cleardot.gif");
      b8(b);
      iDb(b.toString(), 5e3, (0, g.gb)(a.m6, a), 3, 2e3);
      a.vr(1);
    },
    lDb = function (a) {
      var b = a.j.K;
      null != b
        ? (P8(5), b ? (P8(11), U8(a.j, a, !1)) : (P8(12), U8(a.j, a, !0)))
        : ((a.Fk = new Q8(a)),
          (a.Fk.Uu = a.kM),
          (b = a.j),
          (b = T8(b, b.nC() ? a.bH : null, a.mM)),
          P8(5),
          c8(b, "TYPE", "xmlhttp"),
          ZCb(a.Fk, b, !1, a.bH, !1));
    },
    mDb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new v8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    nDb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    oDb = function (a, b, c, d) {
      g.zb.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    pDb = function (a) {
      g.zb.call(this, "serverreachability", a);
    },
    rDb = function (a) {
      a.i4(1, 0);
      a.cH = T8(a, null, a.oM);
      qDb(a);
    },
    sDb = function (a) {
      a.Hs && (a.Hs.abort(), (a.Hs = null));
      a.Og && (a.Og.cancel(), (a.Og = null));
      a.uq && (g.Ta.clearTimeout(a.uq), (a.uq = null));
      V8(a);
      a.Tj && (a.Tj.cancel(), (a.Tj = null));
      a.hs && (g.Ta.clearTimeout(a.hs), (a.hs = null));
    },
    tDb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new nDb(a.j4++, b));
      (2 != a.j && 3 != a.j) || qDb(a);
    },
    uDb = function (a) {
      var b = 0;
      a.Og && b++;
      a.Tj && b++;
      return b;
    },
    qDb = function (a) {
      a.Tj || a.hs || ((a.hs = N8((0, g.gb)(a.eU, a), 0)), (a.Xx = 0));
    },
    xDb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.pC = Math.floor(1e5 * Math.random());
          b = a.pC++;
          var c = new Q8(a, "", b);
          c.Uu = a.Jo;
          var d = vDb(a),
            e = a.cH.clone();
          g.Fp(e, "RID", b);
          g.Fp(e, "CVER", "1");
          W8(a, e);
          YCb(c, e, d);
          a.Tj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? wDb(a, b) : 0 == a.B.length || a.Tj || wDb(a));
    },
    wDb = function (a, b) {
      if (b)
        if (6 < a.Xu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.pC - 1;
          b = vDb(a);
        } else (c = b.N), (b = b.Wu);
      else (c = a.pC++), (b = vDb(a));
      var d = a.cH.clone();
      g.Fp(d, "SID", a.D);
      g.Fp(d, "RID", c);
      g.Fp(d, "AID", a.Yx);
      W8(a, d);
      c = new Q8(a, a.D, c, a.Xx + 1);
      c.Uu = a.Jo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Tj = c;
      YCb(c, d, b);
    },
    W8 = function (a, b) {
      a.Hi &&
        (a = a.Hi.iU()) &&
        g.Vc(a, function (c, d) {
          g.Fp(b, d, c);
        });
    },
    vDb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Xu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { NE: void 0 }, f++) {
        e.NE = a.B[f].j;
        var h = a.B[f].map;
        e.NE = 6 >= a.Xu ? f : e.NE - d;
        try {
          g.Vc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.NE + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.NE + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    yDb = function (a) {
      a.Og ||
        a.uq ||
        ((a.N = 1), (a.uq = N8((0, g.gb)(a.dU, a), 0)), (a.Wx = 0));
    },
    ADb = function (a) {
      if (a.Og || a.uq || 3 <= a.Wx) return !1;
      a.N++;
      a.uq = N8((0, g.gb)(a.dU, a), zDb(a, a.Wx));
      a.Wx++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.EL = null == a.K ? c : !a.K;
      a.Ko = b.tq;
      a.Z || rDb(a);
    },
    V8 = function (a) {
      null != a.Yu && (g.Ta.clearTimeout(a.Yu), (a.Yu = null));
    },
    zDb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Hi && (c = null);
        var d = (0, g.gb)(a.wda, a);
        c || ((c = new g.Lo("//www.google.com/images/cleardot.gif")), b8(c));
        hDb(c.toString(), 1e4, d);
      } else P8(2);
      BDb(a, b);
    },
    BDb = function (a, b) {
      a.j = 0;
      a.Hi && a.Hi.fU(b);
      CDb(a);
      sDb(a);
    },
    CDb = function (a) {
      a.j = 0;
      a.Ko = -1;
      if (a.Hi)
        if (0 == a.C.length && 0 == a.B.length) a.Hi.pM();
        else {
          var b = g.Lb(a.C),
            c = g.Lb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Hi.pM(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.Gp(c);
      if ("" != d.j) b && g.zp(d, b + "." + d.j), g.Ap(d, d.D);
      else {
        var e = window.location;
        d = bBb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.oC &&
        g.Vc(a.oC, function (f, h) {
          g.Fp(d, h, f);
        });
      g.Fp(d, "VER", a.Xu);
      W8(a, d);
      return d;
    },
    DDb = function () {},
    EDb = function () {
      this.j = [];
      this.B = [];
    },
    FDb = function (a) {
      g.zb.call(this, "channelMessage");
      this.message = a;
    },
    GDb = function (a) {
      g.zb.call(this, "channelError");
      this.error = a;
    },
    HDb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.I.call(this);
      this.j = new g.lv(this.wba, 0, this);
      g.O(this, this.j);
      this.Ri = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.gb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.gb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    IDb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.N = b;
      this.C = new g.Nv();
      this.B = new Y8(this.Kca, this);
      this.j = null;
      this.qa = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Ra = c;
      this.ra = d;
      this.Va = e;
      this.Na = new cBb();
      this.Ga = new eBb();
      this.La = new gBb();
      this.Da = new iBb();
      this.Wa = new kBb();
      this.Za = new lBb();
    },
    JDb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Jo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Jo = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.gn(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.hn(a) || "";
      a = g.pc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.mc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Mn(c + b, {});
    },
    KDb = function (a, b) {
      g.Dd.call(this);
      var c = this;
      this.Ed = a();
      this.Ed.subscribe("handlerOpened", this.m4, this);
      this.Ed.subscribe("handlerClosed", this.onClosed, this);
      this.Ed.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Ed.subscribe("handlerMessage", this.onMessage, this);
      this.j = b;
    },
    LDb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new RCb() : e;
      var f = void 0 === f ? new g.Nv() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ca = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : sCb(new UCb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.ra = [];
      this.yg = void 0;
      this.Na = new cBb();
      this.Ga = new eBb();
      this.La = new gBb();
      this.Da = new iBb();
    },
    MDb = function (a) {
      g.td(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.ra = [];
        a.publish("webChannelOpened");
        dBb(a.Na, "WEB_CHANNEL");
      });
      g.td(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.publish("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : VCb(new UCb(b, b.j));
        c && (a.ra = [].concat(g.qa(c)));
        fBb(a.Ga, "WEB_CHANNEL");
      });
      g.td(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.publish("webChannelMessage", new HDb(c[0], c[1]));
        a.yg = b.statusCode;
        hBb(a.La, "WEB_CHANNEL");
      });
      g.td(a.channel, "o", function () {
        401 === a.yg || a.C.start();
        a.publish("webChannelError");
        jBb(a.Da, "WEB_CHANNEL");
      });
    },
    NDb = function (a) {
      var b = a.Ca();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    ODb = function (a) {
      g.Dd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.n4, this);
      this.j.subscribe("webChannelClosed", this.onClosed, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.onMessage, this);
    },
    PDb = function (a, b, c, d, e) {
      function f() {
        return new IDb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.yB("enable_mdx_web_channel_desktop")
        ? new ODb(function () {
            return new LDb($8(a, "/wc"), b, c);
          })
        : new KDb(f, e);
    },
    TDb = function () {
      var a = QDb;
      RDb();
      a9.push(a);
      SDb();
    },
    b9 = function (a, b) {
      RDb();
      var c = UDb(a, String(b));
      0 == a9.length
        ? VDb(c)
        : (SDb(),
          g.$b(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    RDb = function () {
      a9 ||
        ((a9 = g.Xa("yt.mdx.remote.debug.handlers_") || []),
        g.Va("yt.mdx.remote.debug.handlers_", a9));
    },
    VDb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    SDb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.$b(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    UDb = function (a, b) {
      var c = (Date.now() - WDb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.uF.call(this);
      this.K = a;
      this.screens = [];
    },
    XDb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    YDb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Ht(a.screens, function (f) {
        return !!zBb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = XDb(a, b[d]) || c;
      return c;
    },
    ZDb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Ht(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    $Db = function (a, b, c, d, e) {
      g.uF.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.fd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + wBb(this.screens));
    },
    aEb = function (a) {
      if (a.screens.length) {
        var b = g.Rr(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        a.B.sendRequest(
          "POST",
          c,
          { screen_ids: b.join(",") },
          (0, g.gb)(a.m8, a),
          (0, g.gb)(a.l8, a)
        );
      }
    },
    h9 = function (a) {
      if (g.yB("deprecate_pair_servlet_enabled")) return YDb(a, []);
      var b = vBb(GBb());
      b = g.Ht(b, function (c) {
        return !c.uuid;
      });
      return YDb(a, b);
    },
    j9 = function (a, b) {
      IBb(g.Rr(a.screens, tBb));
      b && HBb();
    },
    cEb = function (a, b) {
      g.uF.call(this);
      this.K = b;
      b = (b = g.rC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Fb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      bEb("Initialized with " + g.$m(this.j));
    },
    dEb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      a.G.sendRequest(
        "POST",
        d,
        { lounge_token: b.token },
        (0, g.gb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.gb)(function () {
          c(!1);
        }, a)
      );
    },
    fEb = function (a, b) {
      a: if (WAb(b) != WAb(a.j)) var c = !1;
      else {
        c = g.dd(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (bEb("Updated online screens: " + g.$m(a.j)),
        (a.j = b),
        a.publish("screenChange"));
      eEb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.wB(a.C);
      a.C = g.uB((0, g.gb)(a.JR, a), 0 < a.D && a.D < g.kb() ? 2e4 : 1e4);
    },
    bEb = function (a) {
      b9("OnlineScreenService", a);
    },
    gEb = function (a) {
      var b = {};
      g.$b(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.cg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    eEb = function (a) {
      a = g.dd(
        g.Wc(a.j, function (b) {
          return b;
        })
      );
      g.Wb(a);
      a.length
        ? g.qC("yt-remote-online-screen-ids", a.join(","), 60)
        : g.sC("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      hEb(this);
    },
    jEb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Nk(),
        l = c ? l8(h, c) : null;
      (c && (a.N || l)) || (l = l8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        dEb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? iEb(
              a,
              c,
              (0, g.gb)(function (n) {
                var p = m9(
                  this,
                  new i8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                dEb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    kEb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    lEb = function (a, b, c) {
      dEb(a.j, b, c);
    },
    iEb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.AB($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    mEb = function (a) {
      a.screens = a.B.Nk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + wBb(a.screens));
    },
    hEb = function (a) {
      nEb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.gb)(a.w8, a));
      mEb(a);
      a.N || (a.C = vBb(g.rC("yt-remote-automatic-screen-cache") || []));
      nEb(a);
      a.info("Initializing automatic screens: " + wBb(a.C));
      a.j = new cEb(a.D, (0, g.gb)(a.Nk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.gb)(function () {
          this.publish("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = l8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || oEb(a));
      nEb(a);
      a.G[b.uuid] = b.id;
      g.qC("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    oEb = function (a) {
      a = g.Ht(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.qC("yt-remote-automatic-screen-cache", g.Rr(a, tBb));
    },
    nEb = function (a) {
      a.G = g.rC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.uF.call(this);
      this.Da = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.publish("sessionScreen", a.j);
    },
    pEb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.publish("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Da, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.gb)(this.s4, this);
      this.Ga = (0, g.gb)(this.Jba, this);
      this.qa = g.uB(function () {
        qEb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Ca = !1;
      this.Y = "unknown";
    },
    sEb = function (a, b) {
      g.wB(a.N);
      a.N = 0;
      0 == b
        ? rEb(a)
        : (a.N = g.uB(function () {
            rEb(a);
          }, b));
    },
    rEb = function (a) {
      tEb(a, "getLoungeToken");
      g.wB(a.G);
      a.G = g.uB(function () {
        uEb(a, null);
      }, 3e4);
    },
    tEb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.$m());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.gb)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.$m(c));
    },
    vEb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.zX(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.vj();
              },
              5
            ))
        : a.vj(Error("Waiting for session status timed out."));
    },
    xEb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new i8(b);
      wEb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ca = !0), m9(a.D, d), o9(a, d), (a.Y = "unknown"), sEb(a, c))
            : (g.dB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.vj());
        },
        5
      );
    },
    qEb = function (a, b) {
      g.wB(a.qa);
      a.qa = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? xEb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.dB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  vEb(a, b.screenId)))
            : (g.dB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              vEb(a, b.screenId))
          : vEb(a, b.screenId)
        : a.vj(Error("Waiting for session status timed out."));
    },
    uEb = function (a, b) {
      g.wB(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          sEb(a, 3e4))
        : (pEb(a, b.loungeToken),
          (a.Ca = !1),
          (a.Y = "unknown"),
          sEb(a, b.loungeTokenRefreshIntervalMs));
    },
    wEb = function (a, b, c, d) {
      g.wB(a.K);
      a.K = 0;
      lEb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.uB(function () {
              wEb(a, b, c, d - 1);
            }, 300));
      });
    },
    yEb = function (a) {
      g.wB(a.Z);
      a.Z = 0;
      g.wB(a.K);
      a.K = 0;
      g.wB(a.qa);
      a.qa = 0;
      g.wB(a.G);
      a.G = 0;
      g.wB(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ga = "";
      this.Ra = c;
      this.Na = null;
      this.qa = function () {};
      this.Y = NaN;
      this.La = (0, g.gb)(this.t4, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.ra = !1;
      this.Ca = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    zEb = function (a) {
      a.G = a.D.kU(
        a.Ga,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.ra = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.vj(b);
        }
      );
    },
    AEb = function (a) {
      var b = {};
      b.pairingCode = a.Ga;
      b.theme = a.Ra;
      KBb() && (b.env_useStageMdx = 1);
      return g.Ln(b);
    },
    BEb = function (a) {
      return new Promise(function (b) {
        a.Ga = xBb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, AEb(a));
          b(c);
          zEb(a);
        } else
          (a.qa = function () {
            g.wB(a.Y);
            a.qa = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, AEb(a));
            b(d);
            zEb(a);
          }),
            (a.Y = g.uB(function () {
              a.qa();
            }, 100));
      });
    },
    DEb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new i8(b);
      return new Promise(function (e) {
        CEb(
          a,
          d,
          function (f) {
            f
              ? ((a.ra = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.dB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : BEb(a);
      });
    },
    EEb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        jEb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : BEb(a);
      });
    },
    CEb = function (a, b, c, d) {
      g.wB(a.K);
      a.K = 0;
      lEb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.uB(function () {
              CEb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.wB(a.N),
        (a.N = 0),
        0 == b
          ? FEb(a)
          : (a.N = g.uB(function () {
              FEb(a);
            }, b)));
    },
    FEb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ca = c), t9(a, 3e4))
              : ((a.ra = !1),
                (a.Ca = "unknown"),
                pEb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    GEb = function (a) {
      g.wB(a.K);
      a.K = 0;
      g.wB(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.wB(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.uB((0, g.gb)(this.jA, this, null), 150);
    },
    v9 = function (a, b) {
      g.uF.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.gb)(this.Eaa, this);
    },
    HEb = function (a, b) {
      return b
        ? g.Db(
            a.C,
            function (c) {
              return j8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    QDb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.vb(a.j),
        (a.j = b)
          ? (c
              ? a.publish("yt-remote-cast2-receiver-resumed", b.B)
              : a.publish("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.gb)(a.f_, a, b)),
            b.subscribe("sessionFailed", function () {
              return IEb(a, b);
            }),
            b.j
              ? a.publish("yt-remote-cast2-session-change", b.j)
              : c && a.j.jA(null))
          : a.publish("yt-remote-cast2-session-change", null));
    },
    IEb = function (a, b) {
      a.j == b && a.publish("yt-remote-cast2-session-failed");
    },
    JEb = function (a) {
      var b = a.B.jU(),
        c = a.j && a.j.B;
      a = g.Rr(
        b,
        function (d) {
          c && j8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = HEb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    QEb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : KEb()
        ? LEb(b, d) &&
          (MEb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? NEb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? NEb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    OEb(!1),
                    MEb(!1),
                    g.sC("yt-remote-cast-available"),
                    g.sC("yt-remote-cast-receiver"),
                    PEb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Ota(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= MBb() && VBb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? QBb()
                : 89 <= MBb()
                ? XBb()
                : (UBb(), s8(WBb.map(RBb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    PEb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Va("yt.mdx.remote.cloudview.instance_", null);
      REb(!1);
      g.gE(SEb);
      SEb.length = 0;
    },
    C9 = function () {
      return !!g.rC("yt-remote-cast-installed");
    },
    TEb = function () {
      var a = g.rC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    UEb = function () {
      z9("clearCurrentReceiver");
      g.sC("yt-remote-cast-receiver");
    },
    VEb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    WEb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              SEb.push(g.fE("yt-remote-cast2-api-ready", WEb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    KEb = function () {
      var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.sK || a;
    },
    XEb = function (a, b) {
      B9().init(a, b);
    },
    LEb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.qC("yt-remote-cast-available", d);
          q8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.qC("yt-remote-cast-receiver", d);
          q8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.qC("yt-remote-cast-receiver", d);
          q8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + k8(d));
          d || g.sC("yt-remote-cast-receiver");
          q8("yt-remote-cast2-session-change", d);
        }),
        g.Va("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Xa("yt.mdx.remote.cloudview.instance_");
    },
    NEb = function (a, b) {
      OEb(!0);
      MEb(!1);
      XEb(a, function (c) {
        c
          ? (REb(!0), g.hE("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            OEb(!1),
            g.sC("yt-remote-cast-available"),
            g.sC("yt-remote-cast-receiver"),
            PEb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    OEb = function (a) {
      z9("setCastInstalled_ " + a);
      g.qC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Xa("yt.mdx.remote.cloudview.apiReady_");
    },
    REb = function (a) {
      z9("setApiReady_ " + a);
      g.Va("yt.mdx.remote.cloudview.apiReady_", a);
    },
    MEb = function (a) {
      g.Va("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Qk = this.xp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    YEb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.xp = !1;
      a.Qk = !1;
      a.N = 0;
      a.K = g.kb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.kb() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.kb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.kb() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && YEb(a);
    },
    ZEb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.nd(a.trackData);
      b.hasPrevious = a.xp;
      b.hasNext = a.Qk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.uF.call(this);
      var c = this;
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new EDb();
      this.B = this.j = null;
      this.Y = (0, g.gb)(this.q$, this);
      this.N = (0, g.gb)(this.aF, this);
      this.Z = (0, g.gb)(this.p$, this);
      this.qa = (0, g.gb)(this.s$, this);
      var d = 0;
      a
        ? ((d = a.getProxyState()),
          3 != d && (a.subscribe("proxyStateChange", this.iS, this), $Eb(this)))
        : (d = 3);
      0 != d &&
        (b
          ? this.iS(d)
          : g.uB(function () {
              c.iS(d);
            }, 0));
      (a = VEb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    $Eb = function (a) {
      g.$b(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.jb(this.Caa, b), this));
        },
        a
      );
    },
    aFb = function (a) {
      g.$b(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.enqueue(b);
    },
    bFb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      aFb(a);
      a.D.setPlayerContextData(ZEb(b));
      $Eb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.aF(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.aF(a.B.media[0]));
    },
    cFb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.gb)(function (d) {
        this.cg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.cg("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.uF.call(this);
      var e = this;
      this.K = NaN;
      this.Ga = !1;
      this.Y = this.Z = this.ra = this.Ca = NaN;
      this.qa = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.La = d;
      this.qa.push(
        g.hC(window, "beforeunload", function () {
          e.nz(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Ra = b.id;
      this.Da = b.idType;
      this.B = PDb(this.Na, c, this.oU, "shortLived" == this.Da, this.Ra);
      this.B.listen("channelOpened", function () {
        dFb(e);
      });
      this.B.listen("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? o8(!0) : o8();
        e.dispose();
      });
      this.B.listen("channelError", function (f) {
        o8();
        isNaN(e.TD())
          ? (1 == f &&
              "shortLived" == e.Da &&
              e.publish("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ga = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.TD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.listen("channelMessage", function (f) {
        eFb(e, f);
      });
      this.B.Jr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.tC() && g.qC("yt-remote-session-video-id", f);
      });
    },
    fFb = function (a) {
      return g.Db(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.publish("proxyStateChange", b);
    },
    gFb = function (a) {
      a.K = g.uB(function () {
        S9("Connecting timeout");
        a.nz(1);
      }, 2e4);
    },
    hFb = function (a) {
      g.wB(a.K);
      a.K = NaN;
    },
    iFb = function (a) {
      g.wB(a.Ca);
      a.Ca = NaN;
    },
    kFb = function (a) {
      jFb(a);
      a.ra = g.uB(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    jFb = function (a) {
      g.wB(a.ra);
      a.ra = NaN;
    },
    dFb = function (a) {
      S9("Channel opened");
      a.Ga &&
        ((a.Ga = !1),
        iFb(a),
        (a.Ca = g.uB(function () {
          S9("Timing out waiting for a screen.");
          a.nz(1);
        }, 15e3)));
    },
    mFb = function (a, b) {
      var c = null;
      if (b) {
        var d = fFb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Va("yt.mdx.remote.remoteClient_", c);
      b && (hFb(a), iFb(a));
      c = a.B.Vz() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.tX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), lFb(a))
        : a.nz(1);
    },
    nFb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.id(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.publish("remotePlayerChange"));
    },
    oFb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.publish("remoteQueueChange", c);
    },
    qFb = function (a, b) {
      b.params = b.params || {};
      oFb(a, b, "NOW_PLAYING_MAY_CHANGE");
      pFb(a, b);
      a.publish("autoplayDismissed");
    },
    pFb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.jl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? kFb(a) : jFb(a);
      a.publish("remotePlayerChange");
    },
    rFb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.publish("remotePlayerChange");
      }
    },
    sFb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.publish("remotePlayerChange");
    },
    tFb = function (a, b) {
      a.N = b.params.videoId;
      a.publish("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    uFb = function (a, b) {
      a.N = b.params.videoId || null;
      a.publish("autoplayUpNext", a.N);
    },
    vFb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.publish("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.publish("autoplayDismissed");
    },
    wFb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.xp = "true" == b.params.hasPrevious;
      a.j.Qk = c;
      a.publish("previousNextChange");
    },
    eFb = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.$m(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = d8(b.params.devices);
          a.C = g.Rr(b, function (d) {
            return new qBb(d);
          });
          b = !!g.Db(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          mFb(a, b);
          b = a.yY("mlm");
          a.publish("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Jb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          mFb(a, !1);
          break;
        case "remoteConnected":
          var c = new qBb(d8(b.params.device));
          g.Db(a.C, function (d) {
            return c ? d.id == c.id : !1;
          }) || VAb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new qBb(d8(b.params.device));
          g.Jb(a.C, function (d) {
            return c ? d.id == c.id : !1;
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          oFb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          qFb(a, b);
          break;
        case "onStateChange":
          pFb(a, b);
          break;
        case "onAdStateChange":
          rFb(a, b);
          break;
        case "onVolumeChanged":
          sFb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          nFb(a, b);
          break;
        case "nowAutoplaying":
          tFb(a, b);
          break;
        case "autoplayDismissed":
          a.publish("autoplayDismissed");
          break;
        case "autoplayUpNext":
          uFb(a, b);
          break;
        case "onAutoplayModeChanged":
          vFb(a, b);
          break;
        case "onHasPreviousNextChanged":
          wFb(a, b);
          break;
        case "requestAssistedSignIn":
          a.publish("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.publish("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    lFb = function (a) {
      g.wB(a.Y);
      a.Y = g.uB(function () {
        a.nz(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.$m(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    xFb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.Yg = a;
      this.j = [];
      this.j.push(this.Yg.$_s("screenChange", (0, g.gb)(this.x4, this)));
      this.j.push(this.Yg.$_s("onlineScreenChange", (0, g.gb)(this.iaa, this)));
    },
    CFb = function (a, b) {
      JBb();
      if (!p8 || !p8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.aB("MDX_CONFIG") || b;
        ABb();
        EBb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          KBb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Xa("yt.mdx.remote.deferredProxies_") || []),
          g.Va("yt.mdx.remote.deferredProxies_", X9));
        yFb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Va("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Va(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          QEb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    q8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Xa("yt.mdx.remote.initialized_") &&
          (g.Va("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.$m(b)),
          a$.push(
            g.fE("yt-remote-cast2-api-ready", function () {
              q8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.fE("yt-remote-cast2-availability-change", function () {
              q8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.fE("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              q8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.fE("yt-remote-cast2-receiver-resumed", function () {
              q8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.fE("yt-remote-cast2-session-change", zFb)),
          a$.push(
            g.fE("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), UEb());
            })
          ),
          a$.push(
            g.fE("yt-remote-cast2-session-failed", function () {
              q8("yt-remote-connection-failed");
            })
          ),
          (a = AFb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.yB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.$m(a)),
          a
            ? (g.qC("yt-remote-session-app", a.app),
              g.qC("yt-remote-session-name", a.name))
            : (g.sC("yt-remote-session-app"), g.sC("yt-remote-session-name")),
          g.Va("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || BFb());
      }
    },
    DFb = function () {
      var a = Y9().Yg.$_gos();
      var b = d$();
      b && e$() && (zBb(a, b) || a.push(b));
      return yBb(a);
    },
    FFb = function () {
      var a = EFb();
      !a &&
        C9() &&
        TEb() &&
        (a = { key: "cast-selector-receiver", name: TEb() });
      return a;
    },
    EFb = function () {
      var a = DFb(),
        b = d$();
      b || (b = c$());
      return g.Db(a, function (c) {
        return b && j8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Nk();
      return l8(b, a);
    },
    zFb = function (a) {
      $9("remote.onCastSessionChange_: " + k8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.Jr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), GFb(null));
    },
    HFb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!IFb) {
        var a = g.Xa("yt.mdx.remote.screenService_");
        IFb = a ? new xFb(a) : null;
      }
      return IFb;
    },
    Z9 = function () {
      return g.Xa("yt.mdx.remote.currentScreenId_");
    },
    JFb = function (a) {
      g.Va("yt.mdx.remote.currentScreenId_", a);
    },
    KFb = function () {
      return g.Xa("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Va("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Xa("yt.mdx.remote.connection_");
    },
    GFb = function (a) {
      var b = e$();
      b$(null);
      a || JFb("");
      g.Va("yt.mdx.remote.connection_", a);
      X9 &&
        (g.$b(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? q8("yt-remote-connection-change", !1)
        : !b && a && q8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.tC();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Nk();
      return l8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        JFb(a.id);
        var c = g.Xa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, AFb(), c);
        a.connect(b, KFb());
        a.subscribe("beforeDisconnect", function (d) {
          q8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), GFb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        GFb(a);
      }
    },
    BFb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + k8(a)), h$(a, 0))
        : (o8(),
          UEb(),
          $9("Skipping connecting because no session screen found."));
    },
    yFb = function () {
      var a = AFb();
      if (g.id(a)) {
        a = n8();
        var b = g.rC("yt-remote-session-name") || "",
          c = g.rC("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.aB("SESSION_INDEX", "0"));
        (b = g.aB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Va("yt.mdx.remote.channelParams_", a);
      }
    },
    AFb = function () {
      return g.Xa("yt.mdx.remote.channelParams_") || {};
    },
    NFb = function (a, b, c) {
      g.I.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Fc = c;
      this.events = new g.uK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        LFb(d, e);
      });
      this.D = !1;
      this.G = new g.hL(64);
      this.j = new g.lv(this.J0, 500, this);
      this.B = new g.lv(this.K0, 1e3, this);
      this.N = new t8(this.Uda, 0, this);
      this.C = {};
      this.Z = new g.lv(this.J1, 1e3, this);
      this.K = new u8(this.seekTo, 1e3, this);
      g.O(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.S$);
      this.events.T(b, "captionschanged", this.n$);
      this.events.T(b, "captionssettingschanged", this.R0);
      this.events.T(b, "videoplayerreset", this.mK);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Fc.HW();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          MFb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Fc;
      a.Ma();
      a.subscribe("proxyStateChange", this.c_, this);
      a.subscribe("remotePlayerChange", this.gF, this);
      a.subscribe("remoteQueueChange", this.mK, this);
      a.subscribe("previousNextChange", this.ZZ, this);
      a.subscribe("nowAutoplaying", this.VZ, this);
      a.subscribe("autoplayDismissed", this.EZ, this);
      g.O(this, this.j);
      g.O(this, this.B);
      g.O(this, this.N);
      g.O(this, this.Z);
      g.O(this, this.K);
      this.R0();
      this.mK();
      this.gF();
    },
    LFb = function (a, b) {
      if (j$(a)) {
        a.Fc.unsubscribe("remotePlayerChange", a.gF, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Fc);
        if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
        a.Fc.subscribe("remotePlayerChange", a.gF, a);
      }
    },
    OFb = function (a) {
      a.Nc(0);
      a.j.stop();
      a.Ac(new g.hL(64));
    },
    PFb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.od(c, b));
        a.Fc.nU(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Fc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.ra, UAb(c));
      a.Ac(new g.hL(1));
    },
    QFb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { mY: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Fc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.W.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        X: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              { I: "div", S: "ytp-mdx-popup-title", xa: "You're signed out" },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    xa: "Cancel",
                  },
                  {
                    I: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    xa: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.eG(this, 250);
      this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
      g.O(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.W.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.Nwa()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                xa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.eG(this, 250);
      g.O(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Bc(a.Qb());
    },
    n$ = function (a, b) {
      g.lX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.fu = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    RFb = function (a) {
      g.qV.call(this, a);
      this.Lp = { key: xBb(), name: "This computer" };
      this.Ul = null;
      this.subscriptions = [];
      this.pR = this.Fc = null;
      this.fu = [this.Lp];
      this.Ks = this.Lp;
      this.Ce = new g.hL(64);
      this.JY = 0;
      this.Wh = -1;
      this.AF = !1;
      this.yF = this.cB = null;
      if (!g.OR(this.player.U()) && !g.HG(this.player.U())) {
        a = this.player;
        var b = g.QT(a);
        b && (b = b.tp()) && ((b = new n$(a, b)), g.O(this, b));
        b = new m$(a);
        g.O(this, b);
        g.cU(a, b.element, 4);
        this.cB = new l$();
        g.O(this, this.cB);
        g.cU(a, this.cB.element, 4);
        this.AF = !!c$();
      }
    },
    o$ = function (a) {
      a.yF &&
        (a.player.removeEventListener("presentingplayerstatechange", a.yF),
        (a.yF = null));
    },
    SFb = function (a, b, c) {
      a.Ce = c;
      a.player.publish("presentingplayerstatechange", new g.jG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Ks.key)
        if (b.key === a.Lp.key) g$();
        else if (
          (MFb(a) && TFb(a),
          (a.Ks = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.HG(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.nV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.ra,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = UAb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.$m(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && HFb() && Z9() == b.key
            ? q8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Nk()),
              (b = l8(d, b.key)) && h$(b, 1));
        }
    },
    MFb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.AF ||
        !a.cB
        ? !1
        : g.ZR(b) || g.aS(b);
    },
    TFb = function (a) {
      a.player.Qb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.yF = function (b) {
            !a.AF && g.mG(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.yF));
      a.cB && a.cB.od();
      e$() || (i$ = !0);
    };
  g.k = g8.prototype;
  g.k.lm = function () {
    h8(this);
    for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
    return a;
  };
  g.k.zn = function () {
    h8(this);
    return this.j.concat();
  };
  g.k.has = function (a) {
    return f8(this.B, a);
  };
  g.k.isEmpty = function () {
    return 0 == this.size;
  };
  g.k.clear = function () {
    this.B = {};
    this.Hu = this.size = this.j.length = 0;
  };
  g.k.remove = function (a) {
    return this.delete(a);
  };
  g.k.delete = function (a) {
    return f8(this.B, a)
      ? (delete this.B[a],
        --this.size,
        this.Hu++,
        this.j.length > 2 * this.size && h8(this),
        !0)
      : !1;
  };
  g.k.get = function (a, b) {
    return f8(this.B, a) ? this.B[a] : b;
  };
  g.k.set = function (a, b) {
    f8(this.B, a) || ((this.size += 1), this.j.push(a), this.Hu++);
    this.B[a] = b;
  };
  g.k.forEach = function (a, b) {
    for (var c = this.zn(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.k.clone = function () {
    return new g8(this);
  };
  g.k.keys = function () {
    return g.Hv(this.Sl(!0)).j();
  };
  g.k.values = function () {
    return g.Hv(this.Sl(!1)).j();
  };
  g.k.entries = function () {
    var a = this;
    return mBb(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  g.k.Sl = function (a) {
    h8(this);
    var b = 0,
      c = this.Hu,
      d = this,
      e = new g.Ct();
    e.next = function () {
      if (c != d.Hu)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return g.t2;
      var f = d.j[b++];
      return g.Dt(a ? f : d.B[f]);
    };
    return e;
  };
  var rBb = {
      Gpa: "atp",
      A7a: "ska",
      J3a: "que",
      TVa: "mus",
      y7a: "sus",
      NGa: "dsp",
      z5a: "seq",
      rUa: "mic",
      sxa: "dpa",
      hra: "cds",
      IVa: "mlm",
      gxa: "dsdtr",
      tWa: "ntb",
      njb: "vsp",
      gya: "scn",
      X3a: "rpe",
      dxa: "dcn",
      exa: "dcp",
      l0a: "pas",
      fxa: "drq",
      TZa: "opf",
      fya: "els",
      R5a: "svq",
    },
    sBb = {
      D5: "u",
      C2: "cl",
      i5: "k",
      U2: "i",
      F2: "cr",
      p5: "m",
      R2: "g",
      kV: "up",
    },
    DBb = "",
    p8 = null;
  LBb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.yB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.hfa(c.value)),
          (c = { serializedIncrementBatch: g.Gg(c.j()) }),
          g.KC("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var r8,
    TBb = NBb("loadCastFramework") || NBb("loadCastApplicationFramework"),
    WBb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.lb(t8, g.I);
  g.k = t8.prototype;
  g.k.Y3 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.fd ? (this.C = g.kb() + this.Ri) : (this.fd = g.Bg(this.G, this.Ri));
  };
  g.k.stop = function () {
    this.fd && (g.Ta.clearTimeout(this.fd), (this.fd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.va = function () {
    this.stop();
    t8.Nf.va.call(this);
  };
  g.k.Z3 = function () {
    this.fd && (g.Ta.clearTimeout(this.fd), (this.fd = null));
    this.C
      ? ((this.fd = g.Bg(this.G, this.C - g.kb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.y(u8, g.I);
  g.k = u8.prototype;
  g.k.gM = function (a) {
    this.C = arguments;
    this.fd || this.B ? (this.j = !0) : YBb(this);
  };
  g.k.stop = function () {
    this.fd &&
      (g.Ta.clearTimeout(this.fd),
      (this.fd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.fd || ((this.j = !1), YBb(this));
  };
  g.k.va = function () {
    g.I.prototype.va.call(this);
    this.stop();
  };
  v8.prototype.stringify = function (a) {
    return g.Ta.JSON.stringify(a, void 0);
  };
  v8.prototype.parse = function (a) {
    return g.Ta.JSON.parse(a, void 0);
  };
  g.lb(ZBb, g.zb);
  g.lb($Bb, g.zb);
  var aCb = null;
  g.lb(cCb, g.zb);
  g.lb(dCb, g.zb);
  g.lb(eCb, g.zb);
  z8.prototype.debug = function () {};
  z8.prototype.info = function () {};
  z8.prototype.warning = function () {};
  var lCb = {},
    kCb = {};
  g.k = A8.prototype;
  g.k.setTimeout = function (a) {
    this.fb = a;
  };
  g.k.b4 = function (a) {
    a = a.target;
    var b = this.Wa;
    b && 3 == g.Tn(a) ? b.gM() : this.PT(a);
  };
  g.k.PT = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Tn(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b || (this.j && (this.B.B || g.Vn(this.j) || g.Wn(this.j))))
          ) {
            this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? w8(3) : w8(2));
            oCb(this);
            var e = this.j.getStatus();
            this.Hb = e;
            b: if (jCb(this)) {
              var f = g.Wn(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Tn(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  D8(this);
                  C8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Ta.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.length = 0;
              this.B.j += a;
              this.N = 0;
              m = this.B.j;
            } else m = g.Vn(this.j);
            if ((this.K = 200 == e)) {
              if (this.Gb && !this.Va) {
                b: {
                  if (this.j) {
                    var n = g.Xn(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.ec(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Va = !0), xCb(this, e);
                else {
                  this.K = !1;
                  this.G = 3;
                  x8(12);
                  D8(this);
                  C8(this);
                  break a;
                }
              }
              if (this.Da) {
                e = !0;
                for (var q; !this.La && this.N < m.length; )
                  if (((q = mCb(this, m)), q == kCb)) {
                    4 == b && ((this.G = 4), x8(14), (e = !1));
                    break;
                  } else if (q == lCb) {
                    this.G = 4;
                    x8(15);
                    e = !1;
                    break;
                  } else xCb(this, q);
                jCb(this) &&
                  0 != this.N &&
                  ((this.B.j = this.B.j.slice(this.N)), (this.N = 0));
                4 != b ||
                  0 != m.length ||
                  this.B.B ||
                  ((this.G = 1), x8(16), (e = !1));
                this.K = this.K && e;
                e
                  ? 0 < m.length &&
                    !this.Jb &&
                    ((this.Jb = !0), this.C.DQ(this))
                  : (D8(this), C8(this));
              } else xCb(this, m);
              4 == b && D8(this);
              this.K &&
                !this.La &&
                (4 == b ? pCb(this.C, this) : ((this.K = !1), B8(this)));
            } else
              g.Wfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.G = 3), x8(12))
                  : ((this.G = 0), x8(13)),
                D8(this),
                C8(this);
          }
        }
    } catch (r) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.La = !0;
    D8(this);
  };
  g.k.a4 = function () {
    this.qa = null;
    var a = Date.now();
    0 <= a - this.rb
      ? (2 != this.Ra && (w8(3), x8(17)), D8(this), (this.G = 2), C8(this))
      : nCb(this, this.rb - a);
  };
  g.k.getLastError = function () {
    return this.G;
  };
  g.k.SO = function () {
    return this.j;
  };
  zCb.prototype.cancel = function () {
    this.C = BCb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = GCb.prototype;
  g.k.QT = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    x8(0);
    this.Xb = a;
    this.La = b || {};
    c && void 0 !== d && ((this.La.OSID = c), (this.La.OAID = d));
    this.Va = this.qc;
    this.Na = uCb(this, null, this.Xb);
    H8(this);
  };
  g.k.disconnect = function () {
    ICb(this);
    if (3 == this.Ih) {
      var a = this.Za++,
        b = this.Na.clone();
      g.Fp(b, "SID", this.D);
      g.Fp(b, "RID", a);
      g.Fp(b, "TYPE", "terminate");
      K8(this, b);
      a = new A8(this, this.D, a);
      a.Ra = 2;
      a.Z = b8(b.clone());
      b = !1;
      if (g.Ta.navigator && g.Ta.navigator.sendBeacon)
        try {
          b = g.Ta.navigator.sendBeacon(a.Z.toString(), "");
        } catch (c) {}
      !b && g.Ta.Image && ((new Image().src = a.Z), (b = !0));
      b || ((a.j = iCb(a.C, null)), a.j.send(a.Z));
      a.Ca = Date.now();
      B8(a);
    }
    OCb(this);
  };
  g.k.Ig = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.ST = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Ih)) {
        if (!a) {
          this.Za = Math.floor(1e5 * Math.random());
          a = this.Za++;
          var b = new A8(this, "", a),
            c = this.Y;
          this.Hb && (c ? ((c = g.md(c)), g.od(c, this.Hb)) : (c = this.Hb));
          null !== this.N || this.rb || ((b.Na = c), (c = null));
          var d;
          if (this.zb)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = LCb(this, b, d);
          e = this.Na.clone();
          g.Fp(e, "RID", a);
          g.Fp(e, "CVER", 22);
          this.Da && g.Fp(e, "X-HTTP-Session-Id", this.Da);
          K8(this, e);
          c &&
            (this.rb
              ? (d = "headers=" + g.Se(g.Fga(c)) + "&" + d)
              : this.N && g.Jp(e, this.N, c));
          tCb(this.B, b);
          this.Sf && g.Fp(e, "TYPE", "init");
          this.zb
            ? (g.Fp(e, "$req", d),
              g.Fp(e, "SID", "null"),
              (b.Gb = !0),
              hCb(b, e, null))
            : hCb(b, e, d);
          this.Ih = 2;
        }
      } else
        3 == this.Ih &&
          (a ? MCb(this, a) : 0 == this.C.length || ACb(this.B) || MCb(this));
  };
  g.k.RT = function () {
    this.Z = null;
    NCb(this);
    if (this.Dc && !(this.fb || null == this.j || 0 >= this.Id)) {
      var a = 2 * this.Id;
      this.Ga = y8((0, g.gb)(this.m$, this), a);
    }
  };
  g.k.m$ = function () {
    this.Ga &&
      ((this.Ga = null),
      (this.Va = !1),
      (this.fb = !0),
      x8(10),
      F8(this),
      NCb(this));
  };
  g.k.DQ = function (a) {
    this.j == a && this.Dc && !this.fb && (HCb(this), (this.fb = !0), x8(11));
  };
  g.k.d4 = function () {
    null != this.qa && ((this.qa = null), F8(this), rCb(this), x8(19));
  };
  g.k.xda = function (a) {
    a ? x8(2) : x8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = QCb.prototype;
  g.k.XT = function () {};
  g.k.VT = function () {};
  g.k.UT = function () {};
  g.k.TT = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.e4 = function () {};
  g.lb(M8, g.Dd);
  M8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Ra = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  M8.prototype.close = function () {
    this.j.disconnect();
  };
  M8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.$m(a)), (a = c));
    b.C.push(new yCb(b.Qf++, a));
    3 == b.Ih && H8(b);
  };
  M8.prototype.va = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    M8.Nf.va.call(this);
  };
  g.lb(SCb, ZBb);
  g.lb(TCb, $Bb);
  g.lb(L8, QCb);
  L8.prototype.XT = function () {
    this.j.dispatchEvent("m");
  };
  L8.prototype.VT = function (a) {
    this.j.dispatchEvent(new SCb(a));
  };
  L8.prototype.UT = function (a) {
    this.j.dispatchEvent(new TCb(a));
  };
  L8.prototype.TT = function () {
    this.j.dispatchEvent("n");
  };
  var O8 = new g.Dd();
  g.y(WCb, g.zb);
  g.k = Q8.prototype;
  g.k.Uu = null;
  g.k.Zr = !1;
  g.k.Vx = null;
  g.k.iM = null;
  g.k.mC = null;
  g.k.YG = null;
  g.k.jC = null;
  g.k.XG = null;
  g.k.Wu = null;
  g.k.dj = null;
  g.k.aH = 0;
  g.k.m1 = null;
  g.k.ZG = null;
  g.k.Vu = null;
  g.k.lC = -1;
  g.k.m0 = !0;
  g.k.kC = !1;
  g.k.hM = 0;
  g.k.WG = null;
  var bDb = {},
    aDb = {};
  g.k = Q8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.g4 = function (a) {
    a = a.target;
    var b = this.WG;
    b && 3 == g.Tn(a) ? b.gM() : this.ZT(a);
  };
  g.k.ZT = function (a) {
    try {
      if (a == this.dj)
        a: {
          var b = g.Tn(this.dj),
            c = this.dj.B,
            d = this.dj.getStatus();
          if (g.Nc && !g.Mc("420+")) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Vn(this.dj))) break a;
          this.kC ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.vr(3) : this.j.vr(2));
          eDb(this);
          var e = this.dj.getStatus();
          this.lC = e;
          var f = g.Vn(this.dj);
          if ((this.Zr = 200 == e)) {
            4 == b && R8(this);
            if (this.Da) {
              for (a = !0; !this.kC && this.aH < f.length; ) {
                var h = cDb(this, f);
                if (h == aDb) {
                  4 == b && ((this.Vu = 4), P8(15), (a = !1));
                  break;
                } else if (h == bDb) {
                  this.Vu = 4;
                  P8(16);
                  a = !1;
                  break;
                } else gDb(this, h);
              }
              4 == b && 0 == f.length && ((this.Vu = 1), P8(17), (a = !1));
              this.Zr = this.Zr && a;
              a || (R8(this), fDb(this));
            } else gDb(this, f);
            this.Zr &&
              !this.kC &&
              (4 == b ? this.j.lM(this) : ((this.Zr = !1), $Cb(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Vu = 3), P8(13))
              : ((this.Vu = 0), P8(14)),
              R8(this),
              fDb(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.kC = !0;
    R8(this);
  };
  g.k.f4 = function () {
    this.Vx = null;
    var a = Date.now();
    0 <= a - this.iM
      ? (2 != this.YG && this.j.vr(3),
        R8(this),
        (this.Vu = 2),
        P8(18),
        fDb(this))
      : dDb(this, this.iM - a);
  };
  g.k.getLastError = function () {
    return this.Vu;
  };
  g.k = jDb.prototype;
  g.k.kM = null;
  g.k.Fk = null;
  g.k.KK = !1;
  g.k.mM = null;
  g.k.Pl = null;
  g.k.tq = -1;
  g.k.bH = null;
  g.k.WC = null;
  g.k.connect = function (a) {
    this.mM = a;
    a = T8(this.j, null, this.mM);
    P8(3);
    Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.bH = b[0]),
        (this.WC = b[1])
          ? ((this.Pl = 1), kDb(this))
          : ((this.Pl = 2), lDb(this)))
      : (c8(a, "MODE", "init"),
        (this.Fk = new Q8(this)),
        (this.Fk.Uu = this.kM),
        ZCb(this.Fk, a, !1, null, !0),
        (this.Pl = 0));
  };
  g.k.m6 = function (a) {
    if (a) (this.Pl = 2), lDb(this);
    else {
      P8(4);
      var b = this.j;
      b.Ko = b.Hs.tq;
      X8(b, 9);
    }
    a && this.vr(2);
  };
  g.k.jM = function (a) {
    return this.j.jM(a);
  };
  g.k.abort = function () {
    this.Fk && (this.Fk.cancel(), (this.Fk = null));
    this.tq = -1;
  };
  g.k.Ig = function () {
    return !1;
  };
  g.k.aU = function (a, b) {
    this.tq = a.lC;
    if (0 == this.Pl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Ko = this.tq;
          X8(a, 2);
          return;
        }
        this.bH = c[0];
        this.WC = c[1];
      } else (a = this.j), (a.Ko = this.tq), X8(a, 2);
    else
      2 == this.Pl &&
        (this.KK
          ? (P8(7), Date.now())
          : "11111" == b
          ? (P8(6),
            (this.KK = !0),
            Date.now(),
            (this.tq = 200),
            this.Fk.cancel(),
            P8(12),
            U8(this.j, this, !0))
          : (P8(8), Date.now(), (this.KK = !1)));
  };
  g.k.lM = function () {
    this.tq = this.Fk.lC;
    if (this.Fk.Zr)
      0 == this.Pl
        ? this.WC
          ? ((this.Pl = 1), kDb(this))
          : ((this.Pl = 2), lDb(this))
        : 2 == this.Pl &&
          (this.KK
            ? (P8(12), U8(this.j, this, !0))
            : (P8(11), U8(this.j, this, !1)));
    else {
      0 == this.Pl ? P8(9) : 2 == this.Pl && P8(10);
      var a = this.j;
      this.Fk.getLastError();
      a.Ko = this.tq;
      X8(a, 2);
    }
  };
  g.k.nC = function () {
    return this.j.nC();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.vr = function (a) {
    this.j.vr(a);
  };
  g.k = mDb.prototype;
  g.k.Jo = null;
  g.k.oC = null;
  g.k.Tj = null;
  g.k.Og = null;
  g.k.oM = null;
  g.k.cH = null;
  g.k.bU = null;
  g.k.nM = null;
  g.k.pC = 0;
  g.k.j4 = 0;
  g.k.Hi = null;
  g.k.hs = null;
  g.k.uq = null;
  g.k.Yu = null;
  g.k.Hs = null;
  g.k.EL = null;
  g.k.Yx = -1;
  g.k.cU = -1;
  g.k.Ko = -1;
  g.k.Xx = 0;
  g.k.Wx = 0;
  g.k.Xu = 8;
  g.lb(oDb, g.zb);
  g.lb(pDb, g.zb);
  g.k = mDb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    P8(0);
    this.oM = b;
    this.oC = c || {};
    d && void 0 !== e && ((this.oC.OSID = d), (this.oC.OAID = e));
    this.Z ? (N8((0, g.gb)(this.pW, this, a), 100), rDb(this)) : this.pW(a);
  };
  g.k.disconnect = function () {
    sDb(this);
    if (3 == this.j) {
      var a = this.pC++,
        b = this.cH.clone();
      g.Fp(b, "SID", this.D);
      g.Fp(b, "RID", a);
      g.Fp(b, "TYPE", "terminate");
      W8(this, b);
      a = new Q8(this, this.D, a);
      a.YG = 2;
      a.jC = b8(b.clone());
      new Image().src = a.jC.toString();
      a.mC = Date.now();
      $Cb(a);
    }
    CDb(this);
  };
  g.k.pW = function (a) {
    this.Hs = new jDb(this);
    this.Hs.kM = this.Jo;
    this.Hs.B = this.G;
    this.Hs.connect(a);
  };
  g.k.Ig = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.eU = function (a) {
    this.hs = null;
    xDb(this, a);
  };
  g.k.dU = function () {
    this.uq = null;
    this.Og = new Q8(this, this.D, "rpc", this.N);
    this.Og.Uu = this.Jo;
    this.Og.hM = 0;
    var a = this.bU.clone();
    g.Fp(a, "RID", "rpc");
    g.Fp(a, "SID", this.D);
    g.Fp(a, "CI", this.EL ? "0" : "1");
    g.Fp(a, "AID", this.Yx);
    W8(this, a);
    g.Fp(a, "TYPE", "xmlhttp");
    ZCb(this.Og, a, !0, this.nM, !1);
  };
  g.k.aU = function (a, b) {
    if (0 != this.j && (this.Og == a || this.Tj == a))
      if (((this.Ko = a.lC), this.Tj == a && 3 == this.j))
        if (7 < this.Xu) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.uq) {
                  if (this.Og)
                    if (this.Og.mC + 3e3 < this.Tj.mC)
                      V8(this), this.Og.cancel(), (this.Og = null);
                    else break a;
                  ADb(this);
                  P8(19);
                }
              }
            else
              (this.cU = a[1]),
                0 < this.cU - this.Yx &&
                  37500 > a[2] &&
                  this.EL &&
                  0 == this.Wx &&
                  !this.Yu &&
                  (this.Yu = N8((0, g.gb)(this.l4, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Og == a && V8(this), !g.ec(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Yx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.nM = c[2]),
                  (c = c[3]),
                  null != c ? (this.Xu = c) : (this.Xu = 6),
                  (this.j = 3),
                  this.Hi && this.Hi.hU(),
                  (this.bU = T8(this, this.nC() ? this.nM : null, this.oM)),
                  yDb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Hi && this.Hi.gU(c),
                (this.Wx = 0));
  };
  g.k.l4 = function () {
    null != this.Yu &&
      ((this.Yu = null), this.Og.cancel(), (this.Og = null), ADb(this), P8(20));
  };
  g.k.lM = function (a) {
    if (this.Og == a) {
      V8(this);
      this.Og = null;
      var b = 2;
    } else if (this.Tj == a) (this.Tj = null), (b = 1);
    else return;
    this.Ko = a.lC;
    if (0 != this.j)
      if (a.Zr)
        if (1 == b) {
          b = a.Wu ? a.Wu.length : 0;
          a = Date.now() - a.mC;
          var c = O8;
          c.dispatchEvent(new oDb(c, b, a, this.Xx));
          qDb(this);
          this.C.length = 0;
        } else yDb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Ko))) {
          if ((d = 1 == b))
            this.Tj || this.hs || 1 == this.j || 2 <= this.Xx
              ? (d = !1)
              : ((this.hs = N8(
                  (0, g.gb)(this.eU, this, a),
                  zDb(this, this.Xx)
                )),
                this.Xx++,
                (d = !0));
          d = !(d || (2 == b && ADb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.i4 = function (a) {
    if (!g.Fb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.wda = function (a) {
    a ? P8(2) : (P8(1), BDb(this, 8));
  };
  g.k.jM = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.Qn();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Hi && this.Hi.isActive(this);
  };
  g.k.vr = function (a) {
    var b = O8;
    b.dispatchEvent(new pDb(b, a));
  };
  g.k.nC = function () {
    return !1;
  };
  g.k = DDb.prototype;
  g.k.hU = function () {};
  g.k.gU = function () {};
  g.k.fU = function () {};
  g.k.pM = function () {};
  g.k.iU = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = EDb.prototype;
  g.k.enqueue = function (a) {
    this.B.push(a);
  };
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Fb(this.j, a) || g.Fb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.cib)(b, a);
    0 <= c ? (g.Gb(b, c), (b = !0)) : (b = !1);
    return b || g.Hb(this.B, a);
  };
  g.k.lm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.y(FDb, g.zb);
  g.y(GDb, g.zb);
  g.lb(Y8, g.I);
  g.k = Y8.prototype;
  g.k.wba = function () {
    this.Ri = Math.min(3e5, 2 * this.Ri);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Ri + 15e3 * Math.random();
    g.mv(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Ri = 5e3;
  };
  g.lb(IDb, DDb);
  g.k = IDb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.C.Hh(a);
  };
  g.k.publish = function (a, b) {
    return this.C.publish.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.vb(this.C),
      this.disconnect(),
      g.vb(this.B),
      (this.B = null),
      (this.ra = function () {
        return "";
      }));
  };
  g.k.Ma = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new mDb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ra
        ),
        e = this.j;
      e && (e.Hi = null);
      d.Hi = this;
      this.j = d;
      JDb(this);
      if (this.j) {
        d = g.aB("ID_TOKEN");
        var f = this.j.Jo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Jo = f;
      }
      e
        ? ((3 != e.getState() && 0 == uDb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Yx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    JDb(this);
    this.j && (3 == this.j.getState() && xDb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.od(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Vz() && (JDb(this), tDb(this.j, a));
  };
  g.k.hU = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) tDb(this.j, a[b]);
    }
    this.publish("handlerOpened");
    dBb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.fU = function (a) {
    var b = 2 == a && 401 == this.j.Ko;
    4 == a || b || this.B.start();
    this.publish("handlerError", a, b);
    jBb(this.Da, "BROWSER_CHANNEL");
  };
  g.k.pM = function (a, b) {
    if (!this.B.isActive()) this.publish("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    fBb(this.Ga, "BROWSER_CHANNEL");
    a &&
      this.Wa.j.rM(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.Za.j.rM(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.iU = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.od(a, this.K);
    return a;
  };
  g.k.gU = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.publish("handlerMessage", new HDb(a[0], a[1]));
    hBb(this.La, "BROWSER_CHANNEL");
  };
  g.k.Vz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Jr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.Jo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Jo = b;
    }
  };
  g.k.getDeviceId = function () {
    return this.N.id;
  };
  g.k.gt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.mx = function () {
    var a = this.B;
    g.nv(a.j);
    a.start();
  };
  g.k.Kca = function () {
    this.B.isActive();
    0 == uDb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.sendRequest = function (a, b, c, d, e, f, h) {
    a = {
      format: f ? "RAW" : "JSON",
      method: a,
      context: this,
      timeout: 5e3,
      withCredentials: !!h,
      onSuccess: g.jb(this.D, d, !f),
      onError: g.jb(this.C, e),
      onTimeout: g.jb(this.G, e),
    };
    c &&
      ((a.postParams = c),
      (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
    return g.AB(b, a);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.y(KDb, g.Dd);
  g.k = KDb.prototype;
  g.k.connect = function (a, b, c) {
    this.Ed.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Ed.disconnect(a);
  };
  g.k.mx = function () {
    this.Ed.mx();
  };
  g.k.getDeviceId = function () {
    return this.Ed.getDeviceId();
  };
  g.k.gt = function () {
    return this.Ed.gt();
  };
  g.k.Vz = function () {
    return this.Ed.Vz();
  };
  g.k.m4 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Ed,
      b = this.j;
    g.qC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.EL,
      sessionId: a.j.D,
      arrayId: a.j.Yx,
    });
    g.qC("yt-remote-session-screen-id", b);
    a = m8();
    b = n8();
    g.Fb(a, b) || a.push(b);
    CBb(a);
    EBb();
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new FDb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new GDb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Ed.sendMessage(a, b);
  };
  g.k.Jr = function (a) {
    this.Ed.Jr(a);
  };
  g.k.dispose = function () {
    this.Ed.dispose();
  };
  g.k = LDb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      NDb(this),
      (a = g.aB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.E9 && (this.B.mdxVersion = "" + this.j.E9),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.D6 && (this.B.cst = this.j.D6),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new M8(this.pathPrefix, {
        O8: "gsessionid",
        I9: this.D,
        J9: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      MDb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    NDb(this);
    this.channel &&
      (0 !== this.Y ? (this.B.ui = "" + this.Y) : delete this.B.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.gt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.mx = function () {
    var a = this.C;
    g.nv(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (NDb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Jr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.getDeviceId = function () {
    return this.j ? this.j.id : "";
  };
  g.k.publish = function (a) {
    return this.G.publish.apply(
      this.G,
      [a].concat(g.qa(g.Ia.apply(1, arguments)))
    );
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.G.Hh(a);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.vb(this.G),
      this.disconnect(),
      g.vb(this.C),
      (this.Ca = function () {
        return "";
      }));
  };
  g.k.Ma = function () {
    return this.qa;
  };
  g.y(ODb, g.Dd);
  g.k = ODb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.mx = function () {
    this.j.mx();
  };
  g.k.getDeviceId = function () {
    return this.j.getDeviceId();
  };
  g.k.gt = function () {
    return this.j.gt();
  };
  g.k.Vz = function () {
    return 3 === this.j.K;
  };
  g.k.n4 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new FDb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new GDb(401 === this.j.yg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Jr = function (a) {
    this.j.Jr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var WDb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.lb(g9, g.uF);
  g9.prototype.Nk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!zBb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? l8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.y($Db, g.uF);
  g.k = $Db.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.fd) && this.A_();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.fd) || (g.wB(this.fd), (this.fd = NaN));
  };
  g.k.va = function () {
    this.stop();
    g.uF.prototype.va.call(this);
  };
  g.k.A_ = function () {
    this.fd = NaN;
    this.j = g.AB($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.gb)(this.p4, this),
      onError: (0, g.gb)(this.o4, this),
      onTimeout: (0, g.gb)(this.q4, this),
    });
  };
  g.k.p4 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.publish("pairingComplete", new i8(a), b);
  };
  g.k.o4 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= UFb.length
        ? this.publish("pairingFailed", Error("DIAL polling timed out"))
        : ((a = UFb[this.B]),
          (this.fd = g.uB((0, g.gb)(this.A_, this), a)),
          this.B++)
      : this.publish("pairingFailed", Error("Server error " + a.status));
  };
  g.k.q4 = function () {
    this.j = null;
    this.publish("pairingFailed", Error("Server not responding"));
  };
  var UFb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.lb(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.publish("screenChange");
    !g.rC("yt-remote-lounge-token-expiration") && aEb(this);
    g.wB(this.j);
    this.j = g.uB((0, g.gb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    XDb(this, a);
    j9(this, !1);
    this.publish("screenChange");
    b(a);
    a.token || aEb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    ZDb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.publish("screenChange");
  };
  g.k.DL = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.publish("screenChange");
  };
  g.k.va = function () {
    g.wB(this.j);
    i9.Nf.va.call(this);
  };
  g.k.m8 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.l8 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.y(cEb, g.uF);
  g.k = cEb.prototype;
  g.k.start = function () {
    var a = parseInt(g.rC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.kb() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.kb() + 3e5),
        g.qC("yt-remote-fast-check-period", this.D),
        this.JR());
  };
  g.k.isEmpty = function () {
    return g.id(this.j);
  };
  g.k.update = function () {
    bEb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Wc(
        this.j,
        function (c, d) {
          return c && !!l8(a, d);
        },
        this
      );
    fEb(this, b);
  };
  g.k.va = function () {
    g.wB(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.uF.prototype.va.call(this);
  };
  g.k.JR = function () {
    g.wB(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = gEb(this);
    if (WAb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = this.G.sendRequest(
        "POST",
        b,
        { lounge_token: g.dd(a).join(",") },
        (0, g.gb)(this.Zaa, this, a),
        (0, g.gb)(this.Yaa, this)
      );
    } else fEb(this, {}), k9(this);
  };
  g.k.Zaa = function (a, b) {
    this.B = null;
    var c = g.dd(gEb(this));
    if (g.Xb(c, g.dd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      fEb(this, c);
      k9(this);
    } else this.cg("Changing Screen set during request."), this.JR();
  };
  g.k.Yaa = function (a) {
    this.cg("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.cg = function (a) {
    b9("OnlineScreenService", a);
  };
  g.lb(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.publish("screenChange"),
      this.j.isEmpty() || this.publish("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.DL = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.DL(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Nk = function (a) {
    return a
      ? this.screens
      : g.Kb(
          this.screens,
          g.Ht(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.jU = function () {
    return g.Ht(
      this.Nk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.kU = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new $Db(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.vb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.vb(l);
      f(m);
    });
    l.start();
    return (0, g.gb)(l.stop, l);
  };
  g.k.r4 = function (a, b, c, d) {
    g.AB($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.gb)(function (e, f) {
        e = new i8(f.screen || {});
        if (!e.name || kEb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); kEb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.gb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.gb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.va = function () {
    g.vb(this.B);
    g.vb(this.j);
    l9.Nf.va.call(this);
  };
  g.k.w8 = function () {
    mEb(this);
    this.publish("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.lb(n9, g.uF);
  g.k = n9.prototype;
  g.k.vj = function (a) {
    this.Ma() ||
      (a && (p9(this, "" + a), this.publish("sessionFailed")),
      (this.j = null),
      this.publish("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Da, a);
  };
  g.k.lU = function () {
    return null;
  };
  g.k.eS = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.gb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.gb)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.va = function () {
    this.eS("");
    n9.Nf.va.call(this);
  };
  g.y(q9, n9);
  g.k = q9.prototype;
  g.k.cS = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      yEb(this);
      this.Ca = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
    tEb(this, "getMdxSessionStatus");
  };
  g.k.jA = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.$m(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.gb)(function () {
            this.vj();
          }, this),
          (0, g.gb)(function () {
            this.vj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.vj(Error("Stopping cast device without session."));
  };
  g.k.eS = function () {};
  g.k.va = function () {
    this.info("disposeInternal");
    yEb(this);
    this.C &&
      (this.C.removeUpdateListener(this.ra),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      ));
    this.C = null;
    n9.prototype.va.call(this);
  };
  g.k.Jba = function (a, b) {
    if (!this.Ma())
      if (b)
        if (((b = d8(b)), g.bb(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.$m(b)),
            a)
          ) {
            case "mdxSessionStatus":
              qEb(this, b);
              break;
            case "loungeToken":
              uEb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.zX = function (a, b, c, d) {
    g.wB(this.Z);
    this.Z = 0;
    jEb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.gb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.uB((0, g.gb)(this.zX, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.lU = function () {
    return this.C;
  };
  g.k.s4 = function (a) {
    this.Ma() || a || (p9(this, "Cast session died."), this.vj());
  };
  g.y(r9, n9);
  g.k = r9.prototype;
  g.k.cS = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.La);
  };
  g.k.jA = function (a) {
    this.Na = a;
    this.qa();
  };
  g.k.stop = function () {
    GEb(this);
    this.C
      ? this.C.stop(
          (0, g.gb)(this.vj, this, null),
          (0, g.gb)(this.vj, this, "Failed to stop DIAL device.")
        )
      : this.vj();
  };
  g.k.va = function () {
    GEb(this);
    this.C && this.C.removeUpdateListener(this.La);
    this.C = null;
    n9.prototype.va.call(this);
  };
  g.k.t4 = function (a) {
    this.Ma() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.vj());
  };
  g.y(u9, n9);
  u9.prototype.stop = function () {
    this.vj();
  };
  u9.prototype.cS = function () {};
  u9.prototype.jA = function () {
    g.wB(this.C);
    this.C = NaN;
    var a = l8(this.D.Nk(), this.B.label);
    a ? o9(this, a) : this.vj(Error("No such screen"));
  };
  u9.prototype.va = function () {
    g.wB(this.C);
    this.C = NaN;
    n9.prototype.va.call(this);
  };
  g.y(v9, g.uF);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.gb)(this.Haa, this);
    c = new chrome.cast.ApiConfig(c, (0, g.gb)(this.d_, this), e, d, a);
    c.customDialLaunchCallback = (0, g.gb)(this.z$, this);
    chrome.cast.initialize(
      c,
      (0, g.gb)(function () {
        this.Ma() ||
          (chrome.cast.addReceiverActionListener(this.G),
          TDb(),
          this.B.subscribe("onlineScreenChange", (0, g.gb)(this.mU, this)),
          (this.C = JEb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.gb)(function (f) {
              this.cg("Failed to set initial custom receivers: " + g.$m(f));
            }, this)
          ),
          this.publish("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.gb)(function (f) {
        this.cg("Failed to initialize API: " + g.$m(f));
        b(!1);
      }, this)
    );
  };
  g.k.Tca = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        a = l8(this.B.Nk(), a);
        if (!a) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == a.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        c = HEb(this, a);
        c ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(c),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.gb)(function (d) {
              this.cg("Failed to set initial custom receivers: " + g.$m(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
        y9(this, new u9(this.B, c), !0);
      }
      this.j.eS(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.Wca = function (a) {
    this.Ma()
      ? this.cg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.jA(a)
      : this.cg("Setting connection data without a session");
  };
  g.k.v4 = function () {
    this.Ma()
      ? this.cg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.gb)(this.d_, this),
      (0, g.gb)(this.cba, this)
    );
  };
  g.k.va = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.gb)(this.mU, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = QDb,
      b = g.Xa("yt.mdx.remote.debug.handlers_");
    g.Hb(b || [], a);
    g.vb(this.j);
    g.uF.prototype.va.call(this);
  };
  g.k.cg = function (a) {
    b9("Controller", a);
  };
  g.k.f_ = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b));
  };
  g.k.Eaa = function (a, b) {
    if (!this.Ma())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j &&
                  this.publish("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.cg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.cg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.cg("onReceiverAction_ called without receiver.");
  };
  g.k.z$ = function (a) {
    if (this.Ma()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.cg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.cg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.publish("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.cg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = DEb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.dB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = EEb(b, c)))
          : (a = EEb(b, c)))
      : (a = BEb(b));
    return a;
  };
  g.k.d_ = function (a) {
    var b = this;
    if (!this.Ma() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.cg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = l8(this.B.Nk(), d.label);
        e &&
          j8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.vb(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.gb)(this.f_, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return IEb(b, b.j);
          }),
          this.j.jA(null));
        this.j.cS(a);
      }
    }
  };
  g.k.u4 = function () {
    return this.j ? this.j.lU() : null;
  };
  g.k.cba = function (a) {
    this.Ma() ||
      (this.cg("Failed to estabilish a session: " + g.$m(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.publish("yt-remote-cast2-session-failed"));
  };
  g.k.Haa = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.Ma()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b &&
        this.publish("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.mU = function () {
    this.Ma() ||
      ((this.C = JEb(this)),
      w9("Updating custom receivers: " + g.$m(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.gb)(function () {
          this.cg("Failed to set custom receivers.");
        }, this)
      ),
      this.publish("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.Wca;
  v9.prototype.setConnectedScreenStatus = v9.prototype.Tca;
  v9.prototype.stopSession = v9.prototype.v4;
  v9.prototype.getCastSession = v9.prototype.u4;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var SEb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    YEb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.xp = a.hasPrevious),
      (this.Qk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.jl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(ZEb(this));
  };
  g.y(L9, g.uF);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.gt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.mx = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Jd, R9(this, "play")) : Q9(this, "play"),
        bFb(this, 1, I9(M9(this))),
        this.publish("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Jd, R9(this, "pause"))
          : Q9(this, "pause"),
        bFb(this, 2, I9(M9(this))),
        this.publish("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Jd, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      bFb(this, 3, a);
      this.publish("remotePlayerChange");
    } else O9(this, g.jb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Jd, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      YEb(a);
      P9(this, a);
      this.publish("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.gb)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.gb)(function () {
              this.cg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.gb)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.gb)(function () {
              this.cg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.jb(this.setVolume, a, b));
  };
  g.k.nU = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.$m(b.style)),
        g.od(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.jb(this.nU, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.jb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.$m(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.EK = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.jb(this.EK, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.jb(this.nextVideo, a, b));
  };
  g.k.JH = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.publish("remotePlayerChange");
    } else O9(this, this.JH);
  };
  g.k.HW = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.HW);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.publish("proxyStateChange", a, this.C);
    }
    g.uF.prototype.dispose.call(this);
  };
  g.k.va = function () {
    aFb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.uF.prototype.va.call(this);
  };
  g.k.iS = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.publish("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.Caa = function (a, b) {
    this.publish(a, b);
  };
  g.k.q$ = function (a) {
    if (!a) this.aF(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.aF = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        cFb(this),
        this.publish("remotePlayerChange");
  };
  g.k.p$ = function (a) {
    a ? (cFb(this), this.publish("remotePlayerChange")) : this.aF(null);
  };
  g.k.JS = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.s$ = function () {
    var a = VEb();
    a && K9(this, a);
  };
  g.k.cg = function (a) {
    b9("CP", a);
  };
  g.y(U9, g.uF);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.La && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.La ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.$m(m));
      this.B.connect({ method: c, params: g.$m(m) }, a, FBb());
    } else S9("Connecting without params"), this.B.connect({}, a, FBb());
    gFb(this);
  };
  g.k.Jr = function (a) {
    this.B.Jr(a);
  };
  g.k.dispose = function () {
    this.Ma() ||
      (g.Va("yt.mdx.remote.remoteClient_", null),
      this.publish("beforeDispose"),
      T9(this, 3));
    g.uF.prototype.dispose.call(this);
  };
  g.k.va = function () {
    hFb(this);
    jFb(this);
    iFb(this);
    g.wB(this.Z);
    this.Z = NaN;
    g.wB(this.Y);
    this.Y = NaN;
    this.D = null;
    g.iC(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.uF.prototype.va.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.yY = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.S7 = function () {
    var a = 3;
    this.Ma() ||
      ((a = 0),
      isNaN(this.TD()) ? this.B.Vz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.nz = function (a) {
    S9("Disconnecting with " + a);
    g.Va("yt.mdx.remote.remoteClient_", null);
    hFb(this);
    this.publish("beforeDisconnect", a);
    1 == a && o8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.N7 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return ZEb(a);
  };
  g.k.Yca = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.wB(this.Z),
      (this.Z = g.uB(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.$m(this.j.trackData) == g.$m(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.$b(
      d,
      function (e) {
        this.publish(e);
      },
      this
    );
  };
  g.k.tX = function () {
    var a = this.B.getDeviceId(),
      b = g.Db(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.TD = function () {
    return this.B.gt();
  };
  g.k.x7 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.y7 = function () {
    return this.N || "";
  };
  g.k.w4 = function () {
    !isNaN(this.TD()) && this.B.mx();
  };
  g.k.Rca = function (a, b) {
    V9(this, a, b);
    lFb(this);
  };
  g.k.oU = function () {
    var a = g.KB("SAPISID", "") || g.KB("__Secure-1PAPISID") || "",
      b = g.KB("__Secure-3PAPISID", "") || "";
    if (!a && !b) return "";
    a = g.Gg(g.Fg(a), 2);
    b = g.Gg(g.Fg(b), 2);
    return g.Gg(g.Fg("," + a + "," + b), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Hh;
  U9.prototype.getProxyState = U9.prototype.S7;
  U9.prototype.disconnect = U9.prototype.nz;
  U9.prototype.getPlayerContextData = U9.prototype.N7;
  U9.prototype.setPlayerContextData = U9.prototype.Yca;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.tX;
  U9.prototype.getReconnectTimeout = U9.prototype.TD;
  U9.prototype.getAutoplayMode = U9.prototype.x7;
  U9.prototype.getAutoplayVideoId = U9.prototype.y7;
  U9.prototype.reconnect = U9.prototype.w4;
  U9.prototype.sendMessage = U9.prototype.Rca;
  U9.prototype.getXsrfToken = U9.prototype.oU;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.yY;
  g.y(xFb, g9);
  g.k = xFb.prototype;
  g.k.Nk = function (a) {
    return this.Yg.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Yg.$_c(a);
  };
  g.k.get = function (a) {
    return this.Yg.$_g(a);
  };
  g.k.start = function () {
    this.Yg.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Yg.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Yg.$_r(a, b, c);
  };
  g.k.DL = function (a, b, c, d) {
    this.Yg.$_un(a, b, c, d);
  };
  g.k.va = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.Yg.$_ubk(this.j[a]);
    this.j.length = 0;
    this.Yg = null;
    g9.prototype.va.call(this);
  };
  g.k.x4 = function () {
    this.publish("screenChange");
  };
  g.k.iaa = function () {
    this.publish("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.r4;
  l9.prototype.$_gsppc = l9.prototype.kU;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.DL;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Nk;
  l9.prototype.$_gos = l9.prototype.jU;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Hh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    IFb = null,
    a$ = [];
  g.y(NFb, g.I);
  g.k = NFb.prototype;
  g.k.va = function () {
    g.I.prototype.va.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Fc;
    a.unsubscribe("proxyStateChange", this.c_, this);
    a.unsubscribe("remotePlayerChange", this.gF, this);
    a.unsubscribe("remoteQueueChange", this.mK, this);
    a.unsubscribe("previousNextChange", this.ZZ, this);
    a.unsubscribe("nowAutoplaying", this.VZ, this);
    a.unsubscribe("autoplayDismissed", this.EZ, this);
    this.Fc = this.module = null;
  };
  g.k.Pk = function (a) {
    var b = g.Ia.apply(1, arguments);
    if (2 != this.Fc.C)
      if (j$(this)) {
        if (1081 != M9(this.Fc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
              break;
            case "control_play":
              this.Fc.play();
              break;
            case "control_pause":
              this.Fc.pause();
              break;
            case "control_seek":
              this.K.gM(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              PFb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            PFb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.n$ = function (a) {
    this.N.Y3(a);
  };
  g.k.Uda = function (a) {
    this.Pk("control_subtitles_set_track", g.id(a) ? null : a);
  };
  g.k.R0 = function () {
    var a = this.J.getOption("captions", "track");
    g.id(a) || PFb(this, a);
  };
  g.k.Nc = function (a) {
    this.module.Nc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.S$ = function () {
    g.id(this.C) || QFb(this, this.C);
    this.D = !1;
  };
  g.k.c_ = function (a, b) {
    this.B.stop();
    2 === b && this.K0();
  };
  g.k.gF = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Fc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Wh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Wh = 0;
          break;
        default:
          this.module.Wh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Ac(new g.hL(8));
          this.J0();
          break;
        case 1085:
        case 3:
          this.Ac(new g.hL(9));
          break;
        case 1083:
        case 0:
          this.Ac(new g.hL(2));
          this.K.stop();
          this.Nc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Ac(new g.hL(4));
          break;
        case 2:
          this.Ac(new g.hL(4));
          this.Nc(I9(a));
          break;
        case -1:
          this.Ac(new g.hL(64));
          break;
        case -1e3:
          this.Ac(
            new g.hL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              kI: 2,
            })
          );
      }
      a = M9(this.Fc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), QFb(this, a));
      a = M9(this.Fc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.J1();
    } else OFb(this);
  };
  g.k.ZZ = function () {
    this.J.publish("mdxpreviousnextchange");
  };
  g.k.mK = function () {
    j$(this) || OFb(this);
  };
  g.k.VZ = function (a) {
    isNaN(a) || this.J.publish("mdxnowautoplaying", a);
  };
  g.k.EZ = function () {
    this.J.publish("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a);
  };
  g.k.J1 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Fc);
      this.events.Pc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        LFb(a, c);
      });
    }
  };
  g.k.J0 = function () {
    this.j.stop();
    if (!this.Fc.Ma()) {
      var a = M9(this.Fc);
      a.isPlaying() && this.Ac(new g.hL(8));
      this.Nc(I9(a));
      this.j.start();
    }
  };
  g.k.K0 = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Fc.gt();
    2 == this.Fc.C && !isNaN(a) && this.B.start();
  };
  g.k.Ac = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.GDa(b, a)) {
      var c = g.kG(a, 2);
      c !== g.kG(this.G, 2) && this.J.xB(c);
      this.G = a;
      SFb(this.module, b, a);
    }
  };
  g.y(l$, g.W);
  l$.prototype.od = function () {
    this.j.show();
  };
  l$.prototype.Lb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    q8("mdx-privacy-popup-cancel");
    this.Lb();
  };
  l$.prototype.C = function () {
    q8("mdx-privacy-popup-confirm");
    this.Lb();
  };
  g.y(m$, g.W);
  m$.prototype.onStateChange = function (a) {
    this.Bc(a.state);
  };
  m$.prototype.Bc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.kG(a, 128)
        ? g.JJ("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.JJ("Playing on $RECEIVER_NAME", b)
        : g.JJ("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.y(n$, g.lX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.fu = g.bc(a, this.j, this)),
        g.mX(this, g.Rr(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Gj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Ek = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.fu[a].name;
  };
  n$.prototype.kh = function (a) {
    g.lX.prototype.kh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.fu[a]);
    this.Fb.Lb();
  };
  g.y(RFb, g.qV);
  g.k = RFb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.NR(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    CFb(b, a);
    this.subscriptions.push(g.fE("yt-remote-before-disconnect", this.l$, this));
    this.subscriptions.push(
      g.fE("yt-remote-connection-change", this.Iaa, this)
    );
    this.subscriptions.push(
      g.fE("yt-remote-receiver-availability-change", this.b_, this)
    );
    this.subscriptions.push(g.fE("yt-remote-auto-connect", this.Gaa, this));
    this.subscriptions.push(g.fE("yt-remote-receiver-resumed", this.Faa, this));
    this.subscriptions.push(g.fE("mdx-privacy-popup-confirm", this.fca, this));
    this.subscriptions.push(g.fE("mdx-privacy-popup-cancel", this.eca, this));
    this.b_();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.qV.prototype.load.call(this);
    this.Ul = new NFb(this, this.player, this.Fc);
    var a = (a = KFb()) ? a.currentTime : 0;
    var b = HFb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Nc(a);
    SFb(this, this.Ce, this.Ce);
    this.player.bq(6);
  };
  g.k.unload = function () {
    this.player.publish("mdxautoplaycanceled");
    this.Ks = this.Lp;
    g.wb(this.Ul, this.Fc);
    this.Fc = this.Ul = null;
    g.qV.prototype.unload.call(this);
    this.player.bq(5);
    o$(this);
  };
  g.k.va = function () {
    g.gE(this.subscriptions);
    g.qV.prototype.va.call(this);
  };
  g.k.cF = function (a) {
    var b = g.Ia.apply(1, arguments);
    this.loaded && this.Ul.Pk.apply(this.Ul, [a].concat(g.qa(b)));
  };
  g.k.getAdState = function () {
    return this.Wh;
  };
  g.k.xp = function () {
    return this.Fc ? M9(this.Fc).xp : !1;
  };
  g.k.Qk = function () {
    return this.Fc ? M9(this.Fc).Qk : !1;
  };
  g.k.Nc = function (a, b) {
    this.JY = a || 0;
    this.player.publish("progresssync", a, b);
    this.player.wc("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.JY;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Fc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Vh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Fc && this.Fc.nextVideo();
  };
  g.k.EK = function () {
    this.Fc && this.Fc.EK();
  };
  g.k.l$ = function (a) {
    1 === a && (this.pR = this.Fc ? M9(this.Fc) : null);
  };
  g.k.Iaa = function () {
    var a = HFb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Ks;
      this.loaded && this.unload();
      this.Fc = a;
      this.pR = null;
      b.key !== this.Lp.key && ((this.Ks = b), this.load());
    } else
      g.vb(this.Fc),
        (this.Fc = null),
        this.loaded &&
          (this.unload(),
          (a = this.pR) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.publish(
      "videodatachange",
      "newdata",
      this.player.getVideoData(),
      3
    );
  };
  g.k.b_ = function () {
    var a = [this.Lp],
      b = a.concat,
      c = DFb();
    C9() &&
      g.rC("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.fu = b.call(a, c);
    a = FFb() || this.Lp;
    p$(this, a);
    this.player.wc("onMdxReceiversChange");
  };
  g.k.Gaa = function () {
    var a = FFb();
    p$(this, a);
  };
  g.k.Faa = function () {
    this.Ks = FFb();
  };
  g.k.fca = function () {
    this.AF = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.eca = function () {
    this.AF = !1;
    o$(this);
    p$(this, this.Lp);
    this.Ks = this.Lp;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Mh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.fu;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? WEb() : p$(this, b)),
          this.loaded ? this.Ks : this.Lp
        );
      case "quickCast":
        return 2 === this.fu.length &&
          "cast-selector-receiver" === this.fu[1].key
          ? (b && WEb(), !0)
          : !1;
    }
  };
  g.k.JS = function () {
    this.Fc.JS();
  };
  g.k.ll = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.aB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.aB("SESSION_INDEX") && !g.aB("LOGGED_IN"));
  };
  g.pV("remote", RFb);
})(_yt_player);