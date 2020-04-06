
function callCreditCard() {

    (function() {
            (function() {
                    var $, e = [].indexOf || function(e) {
                            for (var t = 0, n = this.length; n > t; t++)
                                if (t in this && this[t] === e)
                                    return t;
                            return -1
                        }
                    ;
                    $ = jQuery,
                        $.fn.validateCreditCard = function(t, n) {
                            var a, r, i, l, o, s, c, u, g, d, p, f, h;
                            for (l = [{
                                name: "amex",
                                pattern: /^3[47]/,
                                valid_length: [15]
                            }, {
                                name: "diners_club_carte_blanche",
                                pattern: /^30[0-5]/,
                                valid_length: [14]
                            }, {
                                name: "diners_club_international",
                                pattern: /^36/,
                                valid_length: [14]
                            }, {
                                name: "jcb",
                                pattern: /^35(2[89]|[3-8][0-9])/,
                                valid_length: [16]
                            }, {
                                name: "laser",
                                pattern: /^(6304|670[69]|6771)/,
                                valid_length: [16, 17, 18, 19]
                            }, {
                                name: "visa_electron",
                                pattern: /^(4026|417500|4508|4844|491(3|7))/,
                                valid_length: [16]
                            }, {
                                name: "visa",
                                pattern: /^4/,
                                valid_length: [16]
                            }, {
                                name: "mastercard",
                                pattern: /^5[1-5]/,
                                valid_length: [16]
                            }, {
                                name: "maestro",
                                pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                                valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
                            }, {
                                name: "discover",
                                pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                                valid_length: [16]
                            }],
                                     a = !1,
                                 t && ("object" == typeof t ? (n = t,
                                     a = !1,
                                     t = null) : "function" == typeof t && (a = !0)),
                                 null == n && (n = {}),
                                 null == n.accept && (n.accept = function() {
                                     var e, t, n;
                                     for (n = [],
                                              e = 0,
                                              t = l.length; t > e; e++)
                                         r = l[e],
                                             n.push(r.name);
                                     return n
                                 }()),
                                     h = n.accept,
                                     p = 0,
                                     f = h.length; f > p; p++)
                                if (i = h[p],
                                e.call(function() {
                                    var e, t, n;
                                    for (n = [],
                                             e = 0,
                                             t = l.length; t > e; e++)
                                        r = l[e],
                                            n.push(r.name);
                                    return n
                                }(), i) < 0)
                                    throw "Credit card type '" + i + "' is not supported";
                            return o = function(t) {
                                var a, o, s;
                                for (s = function() {
                                    var t, a, i, o;
                                    for (o = [],
                                             t = 0,
                                             a = l.length; a > t; t++)
                                        r = l[t],
                                            i = r.name,
                                        e.call(n.accept, i) >= 0 && o.push(r);
                                    return o
                                }(),
                                         a = 0,
                                         o = s.length; o > a; a++)
                                    if (i = s[a],
                                        t.match(i.pattern))
                                        return i;
                                return null
                            }
                                ,
                                c = function(e) {
                                    var t, n, a, r, i, l;
                                    for (a = 0,
                                             l = e.split("").reverse(),
                                             n = r = 0,
                                             i = l.length; i > r; n = ++r)
                                        t = l[n],
                                            t = +t,
                                            n % 2 ? (t *= 2,
                                                a += 10 > t ? t : t - 9) : a += t;
                                    return a % 10 === 0
                                }
                                ,
                                s = function(t, n) {
                                    var a;
                                    return a = t.length,
                                    e.call(n.valid_length, a) >= 0
                                }
                                ,
                                d = function(e) {
                                    return function(e) {
                                        var t, n;
                                        return i = o(e),
                                            n = !1,
                                            t = !1,
                                        null != i && (n = c(e),
                                            t = s(e, i)),
                                            {
                                                card_type: i,
                                                valid: n && t,
                                                luhn_valid: n,
                                                length_valid: t
                                            }
                                    }
                                }(this),
                                g = function(e) {
                                    return function() {
                                        var t;
                                        return t = u($(e).val()),
                                            d(t)
                                    }
                                }(this),
                                u = function(e) {
                                    return e.replace(/[ -]/g, "")
                                }
                                ,
                                a ? (this.on("input.jccv", function(e) {
                                    return function() {
                                        return $(e).off("keyup.jccv"),
                                            t.call(e, g())
                                    }
                                }(this)),
                                    this.on("keyup.jccv", function(e) {
                                        return function() {
                                            return t.call(e, g())
                                        }
                                    }(this)),
                                    t.call(this, g()),
                                    this) : g()
                        }
                }
            ).call(this);
            var e = "undefined" != typeof window ? window : {}
                , t = function() {
                var t = /\blang(?:uage)?-(?!\*)(\w+)\b/i
                    , n = e.Prism = {
                        util: {
                            encode: function(e) {
                                return e instanceof a ? new a(e.type,n.util.encode(e.content)) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function(e) {
                                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                            },
                            clone: function(e) {
                                var t = n.util.type(e);
                                switch (t) {
                                    case "Object":
                                        var a = {};
                                        for (var r in e)
                                            e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
                                        return a;
                                    case "Array":
                                        return e.slice()
                                }
                                return e
                            }
                        },
                        languages: {
                            extend: function(e, t) {
                                var a = n.util.clone(n.languages[e]);
                                for (var r in t)
                                    a[r] = t[r];
                                return a
                            },
                            insertBefore: function(e, t, a, r) {
                                r = r || n.languages;
                                var i = r[e]
                                    , l = {};
                                for (var o in i)
                                    if (i.hasOwnProperty(o)) {
                                        if (o == t)
                                            for (var s in a)
                                                a.hasOwnProperty(s) && (l[s] = a[s]);
                                        l[o] = i[o]
                                    }
                                return r[e] = l
                            },
                            DFS: function(e, t) {
                                for (var a in e)
                                    t.call(e, a, e[a]),
                                    "Object" === n.util.type(e) && n.languages.DFS(e[a], t)
                            }
                        },
                        highlightAll: function(e, t) {
                            for (var a = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), r = 0, i; i = a[r++]; )
                                n.highlightElement(i, e === !0, t)
                        },
                        highlightElement: function(r, i, l) {
                            for (var o, s, c = r; c && !t.test(c.className); )
                                c = c.parentNode;
                            if (c && (o = (c.className.match(t) || [, ""])[1],
                                s = n.languages[o]),
                                s) {
                                r.className = r.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o,
                                    c = r.parentNode,
                                /pre/i.test(c.nodeName) && (c.className = c.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o);
                                var u = r.textContent;
                                if (u) {
                                    var g = {
                                        element: r,
                                        language: o,
                                        grammar: s,
                                        code: u
                                    };
                                    if (n.hooks.run("before-highlight", g),
                                    i && e.Worker) {
                                        var d = new Worker(n.filename);
                                        d.onmessage = function(e) {
                                            g.highlightedCode = a.stringify(JSON.parse(e.data), o),
                                                n.hooks.run("before-insert", g),
                                                g.element.innerHTML = g.highlightedCode,
                                            l && l.call(g.element),
                                                n.hooks.run("after-highlight", g)
                                        }
                                            ,
                                            d.postMessage(JSON.stringify({
                                                language: g.language,
                                                code: g.code
                                            }))
                                    } else
                                        g.highlightedCode = n.highlight(g.code, g.grammar, g.language),
                                            n.hooks.run("before-insert", g),
                                            g.element.innerHTML = g.highlightedCode,
                                        l && l.call(r),
                                            n.hooks.run("after-highlight", g)
                                }
                            }
                        },
                        highlight: function(e, t, r) {
                            var i = n.tokenize(e, t);
                            return a.stringify(n.util.encode(i), r)
                        },
                        tokenize: function(e, t, a) {
                            var r = n.Token
                                , i = [e]
                                , l = t.rest;
                            if (l) {
                                for (var o in l)
                                    t[o] = l[o];
                                delete t.rest
                            }
                            e: for (var o in t)
                                if (t.hasOwnProperty(o) && t[o]) {
                                    var s = t[o]
                                        , c = s.inside
                                        , u = !!s.lookbehind
                                        , g = 0;
                                    s = s.pattern || s;
                                    for (var d = 0; d < i.length; d++) {
                                        var p = i[d];
                                        if (i.length > e.length)
                                            break e;
                                        if (!(p instanceof r)) {
                                            s.lastIndex = 0;
                                            var f = s.exec(p);
                                            if (f) {
                                                u && (g = f[1].length);
                                                var h = f.index - 1 + g
                                                    , f = f[0].slice(g)
                                                    , m = f.length
                                                    , v = h + m
                                                    , y = p.slice(0, h + 1)
                                                    , b = p.slice(v + 1)
                                                    , k = [d, 1];
                                                y && k.push(y);
                                                var w = new r(o,c ? n.tokenize(f, c) : f);
                                                k.push(w),
                                                b && k.push(b),
                                                    Array.prototype.splice.apply(i, k)
                                            }
                                        }
                                    }
                                }
                            return i
                        },
                        hooks: {
                            all: {},
                            add: function(e, t) {
                                var a = n.hooks.all;
                                a[e] = a[e] || [],
                                    a[e].push(t)
                            },
                            run: function(e, t) {
                                var a = n.hooks.all[e];
                                if (a && a.length)
                                    for (var r = 0, i; i = a[r++]; )
                                        i(t)
                            }
                        }
                    }
                    , a = n.Token = function(e, t) {
                        this.type = e,
                            this.content = t
                    }
                ;
                if (a.stringify = function(e, t, r) {
                    if ("string" == typeof e)
                        return e;
                    if ("[object Array]" == Object.prototype.toString.call(e))
                        return e.map(function(n) {
                            return a.stringify(n, t, e)
                        }).join("");
                    var i = {
                        type: e.type,
                        content: a.stringify(e.content, t, r),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t,
                        parent: r
                    };
                    "comment" == i.type && (i.attributes.spellcheck = "true"),
                        n.hooks.run("wrap", i);
                    var l = "";
                    for (var o in i.attributes)
                        l += o + '="' + (i.attributes[o] || "") + '"';
                    return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + l + ">" + i.content + "</" + i.tag + ">"
                }
                    ,
                    !e.document)
                    return e.addEventListener ? (e.addEventListener("message", function(t) {
                        var a = JSON.parse(t.data)
                            , r = a.language
                            , i = a.code;
                        e.postMessage(JSON.stringify(n.tokenize(i, n.languages[r]))),
                            e.close()
                    }, !1),
                        e.Prism) : e.Prism;
                var r = document.getElementsByTagName("script");
                return r = r[r.length - 1],
                r && (n.filename = r.src,
                document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)),
                    e.Prism
            }();
            "undefined" != typeof module && module.exports && (module.exports = t),
                t.languages.clike = {
                    comment: {
                        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
                        lookbehind: !0
                    },
                    string: /("|')(\\?.)*?\1/g,
                    "class-name": {
                        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
                        lookbehind: !0,
                        inside: {
                            punctuation: /(\.|\\)/
                        }
                    },
                    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
                    "boolean": /\b(true|false)\b/g,
                    "function": {
                        pattern: /[a-z0-9_]+\(/gi,
                        inside: {
                            punctuation: /\(/
                        }
                    },
                    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
                    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
                    ignore: /&(lt|gt|amp);/gi,
                    punctuation: /[{}[\];(),.:]/g
                },
                t.languages.javascript = t.languages.extend("clike", {
                    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
                    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
                }),
                t.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
                        lookbehind: !0
                    }
                }),
            t.languages.markup && t.languages.insertBefore("markup", "tag", {
                script: {
                    pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/gi,
                    inside: {
                        tag: {
                            pattern: /<script[\w\W]*?>|<\/script>/gi,
                            inside: t.languages.markup.tag.inside
                        },
                        rest: t.languages.javascript
                    }
                }
            }),
                $(function() {
                    return $(".demo .numbers li").wrapInner('<a href="#"></a>').click(function(e) {
                        return e.preventDefault(),
                            $(".demo .numbers").slideUp(100),
                            $("#card_number").val($(this).text()).trigger("input")
                    }),
                        $("body").click(function() {
                            return $(".demo .numbers").slideUp(100)
                        }),
                        $(".demo .numbers").click(function(e) {
                            return e.stopPropagation()
                        }),
                        $("#sample-numbers-trigger").click(function(e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                $(".demo .numbers").slideDown(100)
                        }),
                        $(".demo .numbers").hide(),
                        $(".vertical.maestro").hide().css({
                            opacity: 0
                        }),
                        $("#card_number").validateCreditCard(function(e) {
                            return $(this).removeClass(),
                                null == e.card_type ? void $(".vertical.maestro").slideUp({
                                    duration: 200
                                }).animate({
                                    opacity: 0
                                }, {
                                    queue: !1,
                                    duration: 200
                                }) : ($(this).addClass(e.card_type.name),
                                    "maestro" === e.card_type.name ? $(".vertical.maestro").slideDown({
                                        duration: 200
                                    }).animate({
                                        opacity: 1
                                    }, {
                                        queue: !1
                                    }) : $(".vertical.maestro").slideUp({
                                        duration: 200
                                    }).animate({
                                        opacity: 0
                                    }, {
                                        queue: !1,
                                        duration: 200
                                    }),
                                    e.valid ? $(this).addClass("valid") : $(this).removeClass("valid"))
                        }, {
                            accept: ["visa", "visa_electron", "mastercard", "maestro", "discover"]
                        })
                })
        }
    ).call(this);

}
