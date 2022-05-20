import {
  __commonJS,
  init_define_BACK_TO_TOP_LOCALES,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPIONS,
  init_define_CODE_DEMO_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MERMAID_OPTIONS,
  init_define_PHOTO_SWIPE_LOCALES,
  init_define_PHOTO_SWIPE_OPTIONS,
  init_define_READING_TIME_LOCALES,
  init_define_REVEAL_CONFIG
} from "./chunk-K7JT3UW2.js";

// node_modules/bessel/bessel.js
var require_bessel = __commonJS({
  "node_modules/bessel/bessel.js"(exports) {
    init_define_BACK_TO_TOP_LOCALES();
    init_define_CODE_COPY_LOCALES();
    init_define_CODE_COPY_OPIONS();
    init_define_CODE_DEMO_OPTIONS();
    init_define_MERMAID_OPTIONS();
    init_define_PHOTO_SWIPE_LOCALES();
    init_define_PHOTO_SWIPE_OPTIONS();
    init_define_READING_TIME_LOCALES();
    init_define_REVEAL_CONFIG();
    init_define_EXTERNAL_LINK_ICON_LOCALES();
    var BESSEL;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_BESSEL === "undefined") {
        if (typeof exports === "object") {
          factory(exports);
        } else if (typeof define === "function" && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(BESSEL = {});
        }
      } else {
        factory(BESSEL = {});
      }
    })(function(BESSEL2) {
      BESSEL2.version = "1.0.2";
      var M = Math;
      function _horner(arr, v) {
        for (var i = 0, z = 0; i < arr.length; ++i)
          z = v * z + arr[i];
        return z;
      }
      function _bessel_iter(x, n, f0, f1, sign) {
        if (n === 0)
          return f0;
        if (n === 1)
          return f1;
        var tdx = 2 / x, f2 = f1;
        for (var o = 1; o < n; ++o) {
          f2 = f1 * o * tdx + sign * f0;
          f0 = f1;
          f1 = f2;
        }
        return f2;
      }
      function _bessel_wrap(bessel0, bessel1, name, nonzero, sign) {
        return function bessel(x, n) {
          if (nonzero) {
            if (x === 0)
              return nonzero == 1 ? -Infinity : Infinity;
            else if (x < 0)
              return NaN;
          }
          if (n === 0)
            return bessel0(x);
          if (n === 1)
            return bessel1(x);
          if (n < 0)
            return NaN;
          n |= 0;
          var b0 = bessel0(x), b1 = bessel1(x);
          return _bessel_iter(x, n, b0, b1, sign);
        };
      }
      var besselj = function() {
        var W = 0.636619772;
        var b0_a1a = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse();
        var b0_a2a = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse();
        var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
        var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
        function bessel0(x) {
          var a = 0, a1 = 0, a2 = 0, y = x * x;
          if (x < 8) {
            a1 = _horner(b0_a1a, y);
            a2 = _horner(b0_a2a, y);
            a = a1 / a2;
          } else {
            var xx = x - 0.785398164;
            y = 64 / y;
            a1 = _horner(b0_a1b, y);
            a2 = _horner(b0_a2b, y);
            a = M.sqrt(W / x) * (M.cos(xx) * a1 - M.sin(xx) * a2 * 8 / x);
          }
          return a;
        }
        var b1_a1a = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse();
        var b1_a2a = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse();
        var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
        var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
        function bessel1(x) {
          var a = 0, a1 = 0, a2 = 0, y = x * x, xx = M.abs(x) - 2.356194491;
          if (Math.abs(x) < 8) {
            a1 = x * _horner(b1_a1a, y);
            a2 = _horner(b1_a2a, y);
            a = a1 / a2;
          } else {
            y = 64 / y;
            a1 = _horner(b1_a1b, y);
            a2 = _horner(b1_a2b, y);
            a = M.sqrt(W / M.abs(x)) * (M.cos(xx) * a1 - M.sin(xx) * a2 * 8 / M.abs(x));
            if (x < 0)
              a = -a;
          }
          return a;
        }
        return function besselj2(x, n) {
          n = Math.round(n);
          if (!isFinite(x))
            return isNaN(x) ? x : 0;
          if (n < 0)
            return (n % 2 ? -1 : 1) * besselj2(x, -n);
          if (x < 0)
            return (n % 2 ? -1 : 1) * besselj2(-x, n);
          if (n === 0)
            return bessel0(x);
          if (n === 1)
            return bessel1(x);
          if (x === 0)
            return 0;
          var ret = 0;
          if (x > n) {
            ret = _bessel_iter(x, n, bessel0(x), bessel1(x), -1);
          } else {
            var m = 2 * M.floor((n + M.floor(M.sqrt(40 * n))) / 2);
            var jsum = false;
            var bjp = 0, sum = 0;
            var bj = 1, bjm = 0;
            var tox = 2 / x;
            for (var j = m; j > 0; j--) {
              bjm = j * tox * bj - bjp;
              bjp = bj;
              bj = bjm;
              if (M.abs(bj) > 1e10) {
                bj *= 1e-10;
                bjp *= 1e-10;
                ret *= 1e-10;
                sum *= 1e-10;
              }
              if (jsum)
                sum += bj;
              jsum = !jsum;
              if (j == n)
                ret = bjp;
            }
            sum = 2 * sum - bj;
            ret /= sum;
          }
          return ret;
        };
      }();
      var bessely = function() {
        var W = 0.636619772;
        var b0_a1a = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse();
        var b0_a2a = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse();
        var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
        var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse();
        function bessel0(x) {
          var a = 0, a1 = 0, a2 = 0, y = x * x, xx = x - 0.785398164;
          if (x < 8) {
            a1 = _horner(b0_a1a, y);
            a2 = _horner(b0_a2a, y);
            a = a1 / a2 + W * besselj(x, 0) * M.log(x);
          } else {
            y = 64 / y;
            a1 = _horner(b0_a1b, y);
            a2 = _horner(b0_a2b, y);
            a = M.sqrt(W / x) * (M.sin(xx) * a1 + M.cos(xx) * a2 * 8 / x);
          }
          return a;
        }
        var b1_a1a = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse();
        var b1_a2a = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse();
        var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
        var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
        function bessel1(x) {
          var a = 0, a1 = 0, a2 = 0, y = x * x, xx = x - 2.356194491;
          if (x < 8) {
            a1 = x * _horner(b1_a1a, y);
            a2 = _horner(b1_a2a, y);
            a = a1 / a2 + W * (besselj(x, 1) * M.log(x) - 1 / x);
          } else {
            y = 64 / y;
            a1 = _horner(b1_a1b, y);
            a2 = _horner(b1_a2b, y);
            a = M.sqrt(W / x) * (M.sin(xx) * a1 + M.cos(xx) * a2 * 8 / x);
          }
          return a;
        }
        return _bessel_wrap(bessel0, bessel1, "BESSELY", 1, -1);
      }();
      var besseli = function() {
        var b0_a = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse();
        var b0_b = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse();
        function bessel0(x) {
          if (x <= 3.75)
            return _horner(b0_a, x * x / (3.75 * 3.75));
          return M.exp(M.abs(x)) / M.sqrt(M.abs(x)) * _horner(b0_b, 3.75 / M.abs(x));
        }
        var b1_a = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse();
        var b1_b = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse();
        function bessel1(x) {
          if (x < 3.75)
            return x * _horner(b1_a, x * x / (3.75 * 3.75));
          return (x < 0 ? -1 : 1) * M.exp(M.abs(x)) / M.sqrt(M.abs(x)) * _horner(b1_b, 3.75 / M.abs(x));
        }
        return function besseli2(x, n) {
          n = Math.round(n);
          if (n === 0)
            return bessel0(x);
          if (n === 1)
            return bessel1(x);
          if (n < 0)
            return NaN;
          if (M.abs(x) === 0)
            return 0;
          if (x == Infinity)
            return Infinity;
          var ret = 0, j, tox = 2 / M.abs(x), bip = 0, bi = 1, bim = 0;
          var m = 2 * M.round((n + M.round(M.sqrt(40 * n))) / 2);
          for (j = m; j > 0; j--) {
            bim = j * tox * bi + bip;
            bip = bi;
            bi = bim;
            if (M.abs(bi) > 1e10) {
              bi *= 1e-10;
              bip *= 1e-10;
              ret *= 1e-10;
            }
            if (j == n)
              ret = bip;
          }
          ret *= besseli2(x, 0) / bi;
          return x < 0 && n % 2 ? -ret : ret;
        };
      }();
      var besselk = function() {
        var b0_a = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse();
        var b0_b = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse();
        function bessel0(x) {
          if (x <= 2)
            return -M.log(x / 2) * besseli(x, 0) + _horner(b0_a, x * x / 4);
          return M.exp(-x) / M.sqrt(x) * _horner(b0_b, 2 / x);
        }
        var b1_a = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse();
        var b1_b = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
        function bessel1(x) {
          if (x <= 2)
            return M.log(x / 2) * besseli(x, 1) + 1 / x * _horner(b1_a, x * x / 4);
          return M.exp(-x) / M.sqrt(x) * _horner(b1_b, 2 / x);
        }
        return _bessel_wrap(bessel0, bessel1, "BESSELK", 2, 1);
      }();
      BESSEL2.besselj = besselj;
      BESSEL2.bessely = bessely;
      BESSEL2.besseli = besseli;
      BESSEL2.besselk = besselk;
    });
  }
});

// dep:bessel
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_EXTERNAL_LINK_ICON_LOCALES();
var bessel_default = require_bessel();
export {
  bessel_default as default
};
//# sourceMappingURL=bessel.js.map
