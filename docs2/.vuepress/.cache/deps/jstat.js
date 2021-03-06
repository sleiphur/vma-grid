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

// node_modules/jstat/dist/jstat.js
var require_jstat = __commonJS({
  "node_modules/jstat/dist/jstat.js"(exports, module) {
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
    (function(window, factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        window.jStat = factory();
      }
    })(exports, function() {
      var jStat = function(Math2, undefined2) {
        var concat = Array.prototype.concat;
        var slice = Array.prototype.slice;
        var toString = Object.prototype.toString;
        function calcRdx(n, m) {
          var val = n > m ? n : m;
          return Math2.pow(10, 17 - ~~(Math2.log(val > 0 ? val : -val) * Math2.LOG10E));
        }
        var isArray = Array.isArray || function isArray2(arg) {
          return toString.call(arg) === "[object Array]";
        };
        function isFunction(arg) {
          return toString.call(arg) === "[object Function]";
        }
        function isNumber(num) {
          return typeof num === "number" ? num - num === 0 : false;
        }
        function toVector(arr) {
          return concat.apply([], arr);
        }
        function jStat2() {
          return new jStat2._init(arguments);
        }
        jStat2.fn = jStat2.prototype;
        jStat2._init = function _init(args) {
          if (isArray(args[0])) {
            if (isArray(args[0][0])) {
              if (isFunction(args[1]))
                args[0] = jStat2.map(args[0], args[1]);
              for (var i = 0; i < args[0].length; i++)
                this[i] = args[0][i];
              this.length = args[0].length;
            } else {
              this[0] = isFunction(args[1]) ? jStat2.map(args[0], args[1]) : args[0];
              this.length = 1;
            }
          } else if (isNumber(args[0])) {
            this[0] = jStat2.seq.apply(null, args);
            this.length = 1;
          } else if (args[0] instanceof jStat2) {
            return jStat2(args[0].toArray());
          } else {
            this[0] = [];
            this.length = 1;
          }
          return this;
        };
        jStat2._init.prototype = jStat2.prototype;
        jStat2._init.constructor = jStat2;
        jStat2.utils = {
          calcRdx,
          isArray,
          isFunction,
          isNumber,
          toVector
        };
        jStat2._random_fn = Math2.random;
        jStat2.setRandom = function setRandom(fn) {
          if (typeof fn !== "function")
            throw new TypeError("fn is not a function");
          jStat2._random_fn = fn;
        };
        jStat2.extend = function extend(obj) {
          var i, j;
          if (arguments.length === 1) {
            for (j in obj)
              jStat2[j] = obj[j];
            return this;
          }
          for (i = 1; i < arguments.length; i++) {
            for (j in arguments[i])
              obj[j] = arguments[i][j];
          }
          return obj;
        };
        jStat2.rows = function rows(arr) {
          return arr.length || 1;
        };
        jStat2.cols = function cols(arr) {
          return arr[0].length || 1;
        };
        jStat2.dimensions = function dimensions(arr) {
          return {
            rows: jStat2.rows(arr),
            cols: jStat2.cols(arr)
          };
        };
        jStat2.row = function row(arr, index) {
          if (isArray(index)) {
            return index.map(function(i) {
              return jStat2.row(arr, i);
            });
          }
          return arr[index];
        };
        jStat2.rowa = function rowa(arr, i) {
          return jStat2.row(arr, i);
        };
        jStat2.col = function col(arr, index) {
          if (isArray(index)) {
            var submat = jStat2.arange(arr.length).map(function() {
              return new Array(index.length);
            });
            index.forEach(function(ind, i2) {
              jStat2.arange(arr.length).forEach(function(j) {
                submat[j][i2] = arr[j][ind];
              });
            });
            return submat;
          }
          var column = new Array(arr.length);
          for (var i = 0; i < arr.length; i++)
            column[i] = [arr[i][index]];
          return column;
        };
        jStat2.cola = function cola(arr, i) {
          return jStat2.col(arr, i).map(function(a) {
            return a[0];
          });
        };
        jStat2.diag = function diag(arr) {
          var nrow = jStat2.rows(arr);
          var res = new Array(nrow);
          for (var row = 0; row < nrow; row++)
            res[row] = [arr[row][row]];
          return res;
        };
        jStat2.antidiag = function antidiag(arr) {
          var nrow = jStat2.rows(arr) - 1;
          var res = new Array(nrow);
          for (var i = 0; nrow >= 0; nrow--, i++)
            res[i] = [arr[i][nrow]];
          return res;
        };
        jStat2.transpose = function transpose(arr) {
          var obj = [];
          var objArr, rows, cols, j, i;
          if (!isArray(arr[0]))
            arr = [arr];
          rows = arr.length;
          cols = arr[0].length;
          for (i = 0; i < cols; i++) {
            objArr = new Array(rows);
            for (j = 0; j < rows; j++)
              objArr[j] = arr[j][i];
            obj.push(objArr);
          }
          return obj.length === 1 ? obj[0] : obj;
        };
        jStat2.map = function map(arr, func, toAlter) {
          var row, nrow, ncol, res, col;
          if (!isArray(arr[0]))
            arr = [arr];
          nrow = arr.length;
          ncol = arr[0].length;
          res = toAlter ? arr : new Array(nrow);
          for (row = 0; row < nrow; row++) {
            if (!res[row])
              res[row] = new Array(ncol);
            for (col = 0; col < ncol; col++)
              res[row][col] = func(arr[row][col], row, col);
          }
          return res.length === 1 ? res[0] : res;
        };
        jStat2.cumreduce = function cumreduce(arr, func, toAlter) {
          var row, nrow, ncol, res, col;
          if (!isArray(arr[0]))
            arr = [arr];
          nrow = arr.length;
          ncol = arr[0].length;
          res = toAlter ? arr : new Array(nrow);
          for (row = 0; row < nrow; row++) {
            if (!res[row])
              res[row] = new Array(ncol);
            if (ncol > 0)
              res[row][0] = arr[row][0];
            for (col = 1; col < ncol; col++)
              res[row][col] = func(res[row][col - 1], arr[row][col]);
          }
          return res.length === 1 ? res[0] : res;
        };
        jStat2.alter = function alter(arr, func) {
          return jStat2.map(arr, func, true);
        };
        jStat2.create = function create(rows, cols, func) {
          var res = new Array(rows);
          var i, j;
          if (isFunction(cols)) {
            func = cols;
            cols = rows;
          }
          for (i = 0; i < rows; i++) {
            res[i] = new Array(cols);
            for (j = 0; j < cols; j++)
              res[i][j] = func(i, j);
          }
          return res;
        };
        function retZero() {
          return 0;
        }
        jStat2.zeros = function zeros(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retZero);
        };
        function retOne() {
          return 1;
        }
        jStat2.ones = function ones(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retOne);
        };
        jStat2.rand = function rand(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, jStat2._random_fn);
        };
        function retIdent(i, j) {
          return i === j ? 1 : 0;
        }
        jStat2.identity = function identity(rows, cols) {
          if (!isNumber(cols))
            cols = rows;
          return jStat2.create(rows, cols, retIdent);
        };
        jStat2.symmetric = function symmetric(arr) {
          var size = arr.length;
          var row, col;
          if (arr.length !== arr[0].length)
            return false;
          for (row = 0; row < size; row++) {
            for (col = 0; col < size; col++)
              if (arr[col][row] !== arr[row][col])
                return false;
          }
          return true;
        };
        jStat2.clear = function clear(arr) {
          return jStat2.alter(arr, retZero);
        };
        jStat2.seq = function seq(min, max, length, func) {
          if (!isFunction(func))
            func = false;
          var arr = [];
          var hival = calcRdx(min, max);
          var step = (max * hival - min * hival) / ((length - 1) * hival);
          var current = min;
          var cnt;
          for (cnt = 0; current <= max && cnt < length; cnt++, current = (min * hival + step * hival * cnt) / hival) {
            arr.push(func ? func(current, cnt) : current);
          }
          return arr;
        };
        jStat2.arange = function arange(start, end, step) {
          var rl = [];
          var i;
          step = step || 1;
          if (end === undefined2) {
            end = start;
            start = 0;
          }
          if (start === end || step === 0) {
            return [];
          }
          if (start < end && step < 0) {
            return [];
          }
          if (start > end && step > 0) {
            return [];
          }
          if (step > 0) {
            for (i = start; i < end; i += step) {
              rl.push(i);
            }
          } else {
            for (i = start; i > end; i += step) {
              rl.push(i);
            }
          }
          return rl;
        };
        jStat2.slice = function() {
          function _slice(list, start, end, step) {
            var i;
            var rl = [];
            var length = list.length;
            if (start === undefined2 && end === undefined2 && step === undefined2) {
              return jStat2.copy(list);
            }
            start = start || 0;
            end = end || list.length;
            start = start >= 0 ? start : length + start;
            end = end >= 0 ? end : length + end;
            step = step || 1;
            if (start === end || step === 0) {
              return [];
            }
            if (start < end && step < 0) {
              return [];
            }
            if (start > end && step > 0) {
              return [];
            }
            if (step > 0) {
              for (i = start; i < end; i += step) {
                rl.push(list[i]);
              }
            } else {
              for (i = start; i > end; i += step) {
                rl.push(list[i]);
              }
            }
            return rl;
          }
          function slice2(list, rcSlice) {
            var colSlice, rowSlice;
            rcSlice = rcSlice || {};
            if (isNumber(rcSlice.row)) {
              if (isNumber(rcSlice.col))
                return list[rcSlice.row][rcSlice.col];
              var row = jStat2.rowa(list, rcSlice.row);
              colSlice = rcSlice.col || {};
              return _slice(row, colSlice.start, colSlice.end, colSlice.step);
            }
            if (isNumber(rcSlice.col)) {
              var col = jStat2.cola(list, rcSlice.col);
              rowSlice = rcSlice.row || {};
              return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);
            }
            rowSlice = rcSlice.row || {};
            colSlice = rcSlice.col || {};
            var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);
            return rows.map(function(row2) {
              return _slice(row2, colSlice.start, colSlice.end, colSlice.step);
            });
          }
          return slice2;
        }();
        jStat2.sliceAssign = function sliceAssign(A, rcSlice, B) {
          var nl, ml;
          if (isNumber(rcSlice.row)) {
            if (isNumber(rcSlice.col))
              return A[rcSlice.row][rcSlice.col] = B;
            rcSlice.col = rcSlice.col || {};
            rcSlice.col.start = rcSlice.col.start || 0;
            rcSlice.col.end = rcSlice.col.end || A[0].length;
            rcSlice.col.step = rcSlice.col.step || 1;
            nl = jStat2.arange(rcSlice.col.start, Math2.min(A.length, rcSlice.col.end), rcSlice.col.step);
            var m = rcSlice.row;
            nl.forEach(function(n2, i) {
              A[m][n2] = B[i];
            });
            return A;
          }
          if (isNumber(rcSlice.col)) {
            rcSlice.row = rcSlice.row || {};
            rcSlice.row.start = rcSlice.row.start || 0;
            rcSlice.row.end = rcSlice.row.end || A.length;
            rcSlice.row.step = rcSlice.row.step || 1;
            ml = jStat2.arange(rcSlice.row.start, Math2.min(A[0].length, rcSlice.row.end), rcSlice.row.step);
            var n = rcSlice.col;
            ml.forEach(function(m2, j) {
              A[m2][n] = B[j];
            });
            return A;
          }
          if (B[0].length === undefined2) {
            B = [B];
          }
          rcSlice.row.start = rcSlice.row.start || 0;
          rcSlice.row.end = rcSlice.row.end || A.length;
          rcSlice.row.step = rcSlice.row.step || 1;
          rcSlice.col.start = rcSlice.col.start || 0;
          rcSlice.col.end = rcSlice.col.end || A[0].length;
          rcSlice.col.step = rcSlice.col.step || 1;
          ml = jStat2.arange(rcSlice.row.start, Math2.min(A.length, rcSlice.row.end), rcSlice.row.step);
          nl = jStat2.arange(rcSlice.col.start, Math2.min(A[0].length, rcSlice.col.end), rcSlice.col.step);
          ml.forEach(function(m2, i) {
            nl.forEach(function(n2, j) {
              A[m2][n2] = B[i][j];
            });
          });
          return A;
        };
        jStat2.diagonal = function diagonal(diagArray) {
          var mat = jStat2.zeros(diagArray.length, diagArray.length);
          diagArray.forEach(function(t, i) {
            mat[i][i] = t;
          });
          return mat;
        };
        jStat2.copy = function copy(A) {
          return A.map(function(row) {
            if (isNumber(row))
              return row;
            return row.map(function(t) {
              return t;
            });
          });
        };
        var jProto = jStat2.prototype;
        jProto.length = 0;
        jProto.push = Array.prototype.push;
        jProto.sort = Array.prototype.sort;
        jProto.splice = Array.prototype.splice;
        jProto.slice = Array.prototype.slice;
        jProto.toArray = function toArray() {
          return this.length > 1 ? slice.call(this) : slice.call(this)[0];
        };
        jProto.map = function map(func, toAlter) {
          return jStat2(jStat2.map(this, func, toAlter));
        };
        jProto.cumreduce = function cumreduce(func, toAlter) {
          return jStat2(jStat2.cumreduce(this, func, toAlter));
        };
        jProto.alter = function alter(func) {
          jStat2.alter(this, func);
          return this;
        };
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function(func) {
                var self = this, results;
                if (func) {
                  setTimeout(function() {
                    func.call(self, jProto[passfunc].call(self));
                  });
                  return this;
                }
                results = jStat2[passfunc](this);
                return isArray(results) ? jStat2(results) : results;
              };
            })(funcs[i]);
        })("transpose clear symmetric rows cols dimensions diag antidiag".split(" "));
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function(index, func) {
                var self = this;
                if (func) {
                  setTimeout(function() {
                    func.call(self, jProto[passfunc].call(self, index));
                  });
                  return this;
                }
                return jStat2(jStat2[passfunc](this, index));
              };
            })(funcs[i]);
        })("row col".split(" "));
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function() {
                return jStat2(jStat2[passfunc].apply(null, arguments));
              };
            })(funcs[i]);
        })("create zeros ones rand identity".split(" "));
        return jStat2;
      }(Math);
      (function(jStat2, Math2) {
        var isFunction = jStat2.utils.isFunction;
        function ascNum(a, b) {
          return a - b;
        }
        function clip(arg, min, max) {
          return Math2.max(min, Math2.min(arg, max));
        }
        jStat2.sum = function sum(arr) {
          var sum2 = 0;
          var i = arr.length;
          while (--i >= 0)
            sum2 += arr[i];
          return sum2;
        };
        jStat2.sumsqrd = function sumsqrd(arr) {
          var sum = 0;
          var i = arr.length;
          while (--i >= 0)
            sum += arr[i] * arr[i];
          return sum;
        };
        jStat2.sumsqerr = function sumsqerr(arr) {
          var mean = jStat2.mean(arr);
          var sum = 0;
          var i = arr.length;
          var tmp;
          while (--i >= 0) {
            tmp = arr[i] - mean;
            sum += tmp * tmp;
          }
          return sum;
        };
        jStat2.sumrow = function sumrow(arr) {
          var sum = 0;
          var i = arr.length;
          while (--i >= 0)
            sum += arr[i];
          return sum;
        };
        jStat2.product = function product(arr) {
          var prod = 1;
          var i = arr.length;
          while (--i >= 0)
            prod *= arr[i];
          return prod;
        };
        jStat2.min = function min(arr) {
          var low = arr[0];
          var i = 0;
          while (++i < arr.length)
            if (arr[i] < low)
              low = arr[i];
          return low;
        };
        jStat2.max = function max(arr) {
          var high = arr[0];
          var i = 0;
          while (++i < arr.length)
            if (arr[i] > high)
              high = arr[i];
          return high;
        };
        jStat2.unique = function unique(arr) {
          var hash = {}, _arr = [];
          for (var i = 0; i < arr.length; i++) {
            if (!hash[arr[i]]) {
              hash[arr[i]] = true;
              _arr.push(arr[i]);
            }
          }
          return _arr;
        };
        jStat2.mean = function mean(arr) {
          return jStat2.sum(arr) / arr.length;
        };
        jStat2.meansqerr = function meansqerr(arr) {
          return jStat2.sumsqerr(arr) / arr.length;
        };
        jStat2.geomean = function geomean(arr) {
          return Math2.pow(jStat2.product(arr), 1 / arr.length);
        };
        jStat2.median = function median(arr) {
          var arrlen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
        };
        jStat2.cumsum = function cumsum(arr) {
          return jStat2.cumreduce(arr, function(a, b) {
            return a + b;
          });
        };
        jStat2.cumprod = function cumprod(arr) {
          return jStat2.cumreduce(arr, function(a, b) {
            return a * b;
          });
        };
        jStat2.diff = function diff(arr) {
          var diffs = [];
          var arrLen = arr.length;
          var i;
          for (i = 1; i < arrLen; i++)
            diffs.push(arr[i] - arr[i - 1]);
          return diffs;
        };
        jStat2.rank = function(arr) {
          var i;
          var distinctNumbers = [];
          var numberCounts = {};
          for (i = 0; i < arr.length; i++) {
            var number = arr[i];
            if (numberCounts[number]) {
              numberCounts[number]++;
            } else {
              numberCounts[number] = 1;
              distinctNumbers.push(number);
            }
          }
          var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
          var numberRanks = {};
          var currentRank = 1;
          for (i = 0; i < sortedDistinctNumbers.length; i++) {
            var number = sortedDistinctNumbers[i];
            var count = numberCounts[number];
            var first = currentRank;
            var last = currentRank + count - 1;
            var rank = (first + last) / 2;
            numberRanks[number] = rank;
            currentRank += count;
          }
          return arr.map(function(number2) {
            return numberRanks[number2];
          });
        };
        jStat2.mode = function mode(arr) {
          var arrLen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          var count = 1;
          var maxCount = 0;
          var numMaxCount = 0;
          var mode_arr = [];
          var i;
          for (i = 0; i < arrLen; i++) {
            if (_arr[i] === _arr[i + 1]) {
              count++;
            } else {
              if (count > maxCount) {
                mode_arr = [_arr[i]];
                maxCount = count;
                numMaxCount = 0;
              } else if (count === maxCount) {
                mode_arr.push(_arr[i]);
                numMaxCount++;
              }
              count = 1;
            }
          }
          return numMaxCount === 0 ? mode_arr[0] : mode_arr;
        };
        jStat2.range = function range(arr) {
          return jStat2.max(arr) - jStat2.min(arr);
        };
        jStat2.variance = function variance(arr, flag) {
          return jStat2.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
        };
        jStat2.pooledvariance = function pooledvariance(arr) {
          var sumsqerr = arr.reduce(function(a, samples) {
            return a + jStat2.sumsqerr(samples);
          }, 0);
          var count = arr.reduce(function(a, samples) {
            return a + samples.length;
          }, 0);
          return sumsqerr / (count - arr.length);
        };
        jStat2.deviation = function(arr) {
          var mean = jStat2.mean(arr);
          var arrlen = arr.length;
          var dev = new Array(arrlen);
          for (var i = 0; i < arrlen; i++) {
            dev[i] = arr[i] - mean;
          }
          return dev;
        };
        jStat2.stdev = function stdev(arr, flag) {
          return Math2.sqrt(jStat2.variance(arr, flag));
        };
        jStat2.pooledstdev = function pooledstdev(arr) {
          return Math2.sqrt(jStat2.pooledvariance(arr));
        };
        jStat2.meandev = function meandev(arr) {
          var mean = jStat2.mean(arr);
          var a = [];
          for (var i = arr.length - 1; i >= 0; i--) {
            a.push(Math2.abs(arr[i] - mean));
          }
          return jStat2.mean(a);
        };
        jStat2.meddev = function meddev(arr) {
          var median = jStat2.median(arr);
          var a = [];
          for (var i = arr.length - 1; i >= 0; i--) {
            a.push(Math2.abs(arr[i] - median));
          }
          return jStat2.median(a);
        };
        jStat2.coeffvar = function coeffvar(arr) {
          return jStat2.stdev(arr) / jStat2.mean(arr);
        };
        jStat2.quartiles = function quartiles(arr) {
          var arrlen = arr.length;
          var _arr = arr.slice().sort(ascNum);
          return [
            _arr[Math2.round(arrlen / 4) - 1],
            _arr[Math2.round(arrlen / 2) - 1],
            _arr[Math2.round(arrlen * 3 / 4) - 1]
          ];
        };
        jStat2.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
          var sortedArray = arr.slice().sort(ascNum);
          var quantileVals = [quantilesArray.length];
          var n = arr.length;
          var i, p, m, aleph, k, gamma;
          if (typeof alphap === "undefined")
            alphap = 3 / 8;
          if (typeof betap === "undefined")
            betap = 3 / 8;
          for (i = 0; i < quantilesArray.length; i++) {
            p = quantilesArray[i];
            m = alphap + p * (1 - alphap - betap);
            aleph = n * p + m;
            k = Math2.floor(clip(aleph, 1, n - 1));
            gamma = clip(aleph - k, 0, 1);
            quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k];
          }
          return quantileVals;
        };
        jStat2.percentile = function percentile(arr, k, exclusive) {
          var _arr = arr.slice().sort(ascNum);
          var realIndex = k * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
          var index = parseInt(realIndex);
          var frac = realIndex - index;
          if (index + 1 < _arr.length) {
            return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1]);
          } else {
            return _arr[index - 1];
          }
        };
        jStat2.percentileOfScore = function percentileOfScore(arr, score, kind) {
          var counter = 0;
          var len = arr.length;
          var strict = false;
          var value, i;
          if (kind === "strict")
            strict = true;
          for (i = 0; i < len; i++) {
            value = arr[i];
            if (strict && value < score || !strict && value <= score) {
              counter++;
            }
          }
          return counter / len;
        };
        jStat2.histogram = function histogram(arr, binCnt) {
          binCnt = binCnt || 4;
          var first = jStat2.min(arr);
          var binWidth = (jStat2.max(arr) - first) / binCnt;
          var len = arr.length;
          var bins = [];
          var i;
          for (i = 0; i < binCnt; i++)
            bins[i] = 0;
          for (i = 0; i < len; i++)
            bins[Math2.min(Math2.floor((arr[i] - first) / binWidth), binCnt - 1)] += 1;
          return bins;
        };
        jStat2.covariance = function covariance(arr1, arr2) {
          var u = jStat2.mean(arr1);
          var v = jStat2.mean(arr2);
          var arr1Len = arr1.length;
          var sq_dev = new Array(arr1Len);
          var i;
          for (i = 0; i < arr1Len; i++)
            sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);
          return jStat2.sum(sq_dev) / (arr1Len - 1);
        };
        jStat2.corrcoeff = function corrcoeff(arr1, arr2) {
          return jStat2.covariance(arr1, arr2) / jStat2.stdev(arr1, 1) / jStat2.stdev(arr2, 1);
        };
        jStat2.spearmancoeff = function(arr1, arr2) {
          arr1 = jStat2.rank(arr1);
          arr2 = jStat2.rank(arr2);
          return jStat2.corrcoeff(arr1, arr2);
        };
        jStat2.stanMoment = function stanMoment(arr, n) {
          var mu = jStat2.mean(arr);
          var sigma = jStat2.stdev(arr);
          var len = arr.length;
          var skewSum = 0;
          for (var i = 0; i < len; i++)
            skewSum += Math2.pow((arr[i] - mu) / sigma, n);
          return skewSum / arr.length;
        };
        jStat2.skewness = function skewness(arr) {
          return jStat2.stanMoment(arr, 3);
        };
        jStat2.kurtosis = function kurtosis(arr) {
          return jStat2.stanMoment(arr, 4) - 3;
        };
        var jProto = jStat2.prototype;
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function(fullbool, func) {
                var arr = [];
                var i2 = 0;
                var tmpthis = this;
                if (isFunction(fullbool)) {
                  func = fullbool;
                  fullbool = false;
                }
                if (func) {
                  setTimeout(function() {
                    func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                  });
                  return this;
                }
                if (this.length > 1) {
                  tmpthis = fullbool === true ? this : this.transpose();
                  for (; i2 < tmpthis.length; i2++)
                    arr[i2] = jStat2[passfunc](tmpthis[i2]);
                  return arr;
                }
                return jStat2[passfunc](this[0], fullbool);
              };
            })(funcs[i]);
        })("cumsum cumprod".split(" "));
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function(fullbool, func) {
                var arr = [];
                var i2 = 0;
                var tmpthis = this;
                if (isFunction(fullbool)) {
                  func = fullbool;
                  fullbool = false;
                }
                if (func) {
                  setTimeout(function() {
                    func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                  });
                  return this;
                }
                if (this.length > 1) {
                  if (passfunc !== "sumrow")
                    tmpthis = fullbool === true ? this : this.transpose();
                  for (; i2 < tmpthis.length; i2++)
                    arr[i2] = jStat2[passfunc](tmpthis[i2]);
                  return fullbool === true ? jStat2[passfunc](jStat2.utils.toVector(arr)) : arr;
                }
                return jStat2[passfunc](this[0], fullbool);
              };
            })(funcs[i]);
        })("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" "));
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jProto[passfunc] = function() {
                var arr = [];
                var i2 = 0;
                var tmpthis = this;
                var args = Array.prototype.slice.call(arguments);
                var callbackFunction;
                if (isFunction(args[args.length - 1])) {
                  callbackFunction = args[args.length - 1];
                  var argsToPass = args.slice(0, args.length - 1);
                  setTimeout(function() {
                    callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass));
                  });
                  return this;
                } else {
                  callbackFunction = void 0;
                  var curriedFunction = function curriedFunction2(vector) {
                    return jStat2[passfunc].apply(tmpthis, [vector].concat(args));
                  };
                }
                if (this.length > 1) {
                  tmpthis = tmpthis.transpose();
                  for (; i2 < tmpthis.length; i2++)
                    arr[i2] = curriedFunction(tmpthis[i2]);
                  return arr;
                }
                return curriedFunction(this[0]);
              };
            })(funcs[i]);
        })("quantiles percentileOfScore".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        jStat2.gammaln = function gammaln(x) {
          var j = 0;
          var cof = [
            76.18009172947146,
            -86.50532032941678,
            24.01409824083091,
            -1.231739572450155,
            0.001208650973866179,
            -5395239384953e-18
          ];
          var ser = 1.000000000190015;
          var xx, y, tmp;
          tmp = (y = xx = x) + 5.5;
          tmp -= (xx + 0.5) * Math2.log(tmp);
          for (; j < 6; j++)
            ser += cof[j] / ++y;
          return Math2.log(2.5066282746310007 * ser / xx) - tmp;
        };
        jStat2.loggam = function loggam(x) {
          var x0, x2, xp, gl, gl0;
          var k, n;
          var a = [
            0.08333333333333333,
            -0.002777777777777778,
            7936507936507937e-19,
            -5952380952380952e-19,
            8417508417508418e-19,
            -0.001917526917526918,
            0.00641025641025641,
            -0.02955065359477124,
            0.1796443723688307,
            -1.3924322169059
          ];
          x0 = x;
          n = 0;
          if (x == 1 || x == 2) {
            return 0;
          }
          if (x <= 7) {
            n = Math2.floor(7 - x);
            x0 = x + n;
          }
          x2 = 1 / (x0 * x0);
          xp = 2 * Math2.PI;
          gl0 = a[9];
          for (k = 8; k >= 0; k--) {
            gl0 *= x2;
            gl0 += a[k];
          }
          gl = gl0 / x0 + 0.5 * Math2.log(xp) + (x0 - 0.5) * Math2.log(x0) - x0;
          if (x <= 7) {
            for (k = 1; k <= n; k++) {
              gl -= Math2.log(x0 - 1);
              x0 -= 1;
            }
          }
          return gl;
        };
        jStat2.gammafn = function gammafn(x) {
          var p = [
            -1.716185138865495,
            24.76565080557592,
            -379.80425647094563,
            629.3311553128184,
            866.9662027904133,
            -31451.272968848367,
            -36144.413418691176,
            66456.14382024054
          ];
          var q = [
            -30.8402300119739,
            315.35062697960416,
            -1015.1563674902192,
            -3107.771671572311,
            22538.11842098015,
            4755.846277527881,
            -134659.9598649693,
            -115132.2596755535
          ];
          var fact = false;
          var n = 0;
          var xden = 0;
          var xnum = 0;
          var y = x;
          var i, z, yi, res;
          if (x > 171.6243769536076) {
            return Infinity;
          }
          if (y <= 0) {
            res = y % 1 + 36e-17;
            if (res) {
              fact = (!(y & 1) ? 1 : -1) * Math2.PI / Math2.sin(Math2.PI * res);
              y = 1 - y;
            } else {
              return Infinity;
            }
          }
          yi = y;
          if (y < 1) {
            z = y++;
          } else {
            z = (y -= n = (y | 0) - 1) - 1;
          }
          for (i = 0; i < 8; ++i) {
            xnum = (xnum + p[i]) * z;
            xden = xden * z + q[i];
          }
          res = xnum / xden + 1;
          if (yi < y) {
            res /= yi;
          } else if (yi > y) {
            for (i = 0; i < n; ++i) {
              res *= y;
              y++;
            }
          }
          if (fact) {
            res = fact / res;
          }
          return res;
        };
        jStat2.gammap = function gammap(a, x) {
          return jStat2.lowRegGamma(a, x) * jStat2.gammafn(a);
        };
        jStat2.lowRegGamma = function lowRegGamma(a, x) {
          var aln = jStat2.gammaln(a);
          var ap = a;
          var sum = 1 / a;
          var del = sum;
          var b = x + 1 - a;
          var c = 1 / 1e-30;
          var d = 1 / b;
          var h = d;
          var i = 1;
          var ITMAX = -~(Math2.log(a >= 1 ? a : 1 / a) * 8.5 + a * 0.4 + 17);
          var an;
          if (x < 0 || a <= 0) {
            return NaN;
          } else if (x < a + 1) {
            for (; i <= ITMAX; i++) {
              sum += del *= x / ++ap;
            }
            return sum * Math2.exp(-x + a * Math2.log(x) - aln);
          }
          for (; i <= ITMAX; i++) {
            an = -i * (i - a);
            b += 2;
            d = an * d + b;
            c = b + an / c;
            d = 1 / d;
            h *= d * c;
          }
          return 1 - h * Math2.exp(-x + a * Math2.log(x) - aln);
        };
        jStat2.factorialln = function factorialln(n) {
          return n < 0 ? NaN : jStat2.gammaln(n + 1);
        };
        jStat2.factorial = function factorial(n) {
          return n < 0 ? NaN : jStat2.gammafn(n + 1);
        };
        jStat2.combination = function combination(n, m) {
          return n > 170 || m > 170 ? Math2.exp(jStat2.combinationln(n, m)) : jStat2.factorial(n) / jStat2.factorial(m) / jStat2.factorial(n - m);
        };
        jStat2.combinationln = function combinationln(n, m) {
          return jStat2.factorialln(n) - jStat2.factorialln(m) - jStat2.factorialln(n - m);
        };
        jStat2.permutation = function permutation(n, m) {
          return jStat2.factorial(n) / jStat2.factorial(n - m);
        };
        jStat2.betafn = function betafn(x, y) {
          if (x <= 0 || y <= 0)
            return void 0;
          return x + y > 170 ? Math2.exp(jStat2.betaln(x, y)) : jStat2.gammafn(x) * jStat2.gammafn(y) / jStat2.gammafn(x + y);
        };
        jStat2.betaln = function betaln(x, y) {
          return jStat2.gammaln(x) + jStat2.gammaln(y) - jStat2.gammaln(x + y);
        };
        jStat2.betacf = function betacf(x, a, b) {
          var fpmin = 1e-30;
          var m = 1;
          var qab = a + b;
          var qap = a + 1;
          var qam = a - 1;
          var c = 1;
          var d = 1 - qab * x / qap;
          var m2, aa, del, h;
          if (Math2.abs(d) < fpmin)
            d = fpmin;
          d = 1 / d;
          h = d;
          for (; m <= 100; m++) {
            m2 = 2 * m;
            aa = m * (b - m) * x / ((qam + m2) * (a + m2));
            d = 1 + aa * d;
            if (Math2.abs(d) < fpmin)
              d = fpmin;
            c = 1 + aa / c;
            if (Math2.abs(c) < fpmin)
              c = fpmin;
            d = 1 / d;
            h *= d * c;
            aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
            d = 1 + aa * d;
            if (Math2.abs(d) < fpmin)
              d = fpmin;
            c = 1 + aa / c;
            if (Math2.abs(c) < fpmin)
              c = fpmin;
            d = 1 / d;
            del = d * c;
            h *= del;
            if (Math2.abs(del - 1) < 3e-7)
              break;
          }
          return h;
        };
        jStat2.gammapinv = function gammapinv(p, a) {
          var j = 0;
          var a1 = a - 1;
          var EPS = 1e-8;
          var gln = jStat2.gammaln(a);
          var x, err, t, u, pp, lna1, afac;
          if (p >= 1)
            return Math2.max(100, a + 100 * Math2.sqrt(a));
          if (p <= 0)
            return 0;
          if (a > 1) {
            lna1 = Math2.log(a1);
            afac = Math2.exp(a1 * (lna1 - 1) - gln);
            pp = p < 0.5 ? p : 1 - p;
            t = Math2.sqrt(-2 * Math2.log(pp));
            x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
            if (p < 0.5)
              x = -x;
            x = Math2.max(1e-3, a * Math2.pow(1 - 1 / (9 * a) - x / (3 * Math2.sqrt(a)), 3));
          } else {
            t = 1 - a * (0.253 + a * 0.12);
            if (p < t)
              x = Math2.pow(p / t, 1 / a);
            else
              x = 1 - Math2.log(1 - (p - t) / (1 - t));
          }
          for (; j < 12; j++) {
            if (x <= 0)
              return 0;
            err = jStat2.lowRegGamma(a, x) - p;
            if (a > 1)
              t = afac * Math2.exp(-(x - a1) + a1 * (Math2.log(x) - lna1));
            else
              t = Math2.exp(-x + a1 * Math2.log(x) - gln);
            u = err / t;
            x -= t = u / (1 - 0.5 * Math2.min(1, u * ((a - 1) / x - 1)));
            if (x <= 0)
              x = 0.5 * (x + t);
            if (Math2.abs(t) < EPS * x)
              break;
          }
          return x;
        };
        jStat2.erf = function erf(x) {
          var cof = [
            -1.3026537197817094,
            0.6419697923564902,
            0.019476473204185836,
            -0.00956151478680863,
            -946595344482036e-18,
            366839497852761e-18,
            42523324806907e-18,
            -20278578112534e-18,
            -1624290004647e-18,
            130365583558e-17,
            15626441722e-18,
            -85238095915e-18,
            6529054439e-18,
            5059343495e-18,
            -991364156e-18,
            -227365122e-18,
            96467911e-18,
            2394038e-18,
            -6886027e-18,
            894487e-18,
            313092e-18,
            -112708e-18,
            381e-18,
            7106e-18,
            -1523e-18,
            -94e-18,
            121e-18,
            -28e-18
          ];
          var j = cof.length - 1;
          var isneg = false;
          var d = 0;
          var dd = 0;
          var t, ty, tmp, res;
          if (x < 0) {
            x = -x;
            isneg = true;
          }
          t = 2 / (2 + x);
          ty = 4 * t - 2;
          for (; j > 0; j--) {
            tmp = d;
            d = ty * d - dd + cof[j];
            dd = tmp;
          }
          res = t * Math2.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
          return isneg ? res - 1 : 1 - res;
        };
        jStat2.erfc = function erfc(x) {
          return 1 - jStat2.erf(x);
        };
        jStat2.erfcinv = function erfcinv(p) {
          var j = 0;
          var x, err, t, pp;
          if (p >= 2)
            return -100;
          if (p <= 0)
            return 100;
          pp = p < 1 ? p : 2 - p;
          t = Math2.sqrt(-2 * Math2.log(pp / 2));
          x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);
          for (; j < 2; j++) {
            err = jStat2.erfc(x) - pp;
            x += err / (1.1283791670955126 * Math2.exp(-x * x) - x * err);
          }
          return p < 1 ? x : -x;
        };
        jStat2.ibetainv = function ibetainv(p, a, b) {
          var EPS = 1e-8;
          var a1 = a - 1;
          var b1 = b - 1;
          var j = 0;
          var lna, lnb, pp, t, u, err, x, al, h, w, afac;
          if (p <= 0)
            return 0;
          if (p >= 1)
            return 1;
          if (a >= 1 && b >= 1) {
            pp = p < 0.5 ? p : 1 - p;
            t = Math2.sqrt(-2 * Math2.log(pp));
            x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
            if (p < 0.5)
              x = -x;
            al = (x * x - 3) / 6;
            h = 2 / (1 / (2 * a - 1) + 1 / (2 * b - 1));
            w = x * Math2.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
            x = a / (a + b * Math2.exp(2 * w));
          } else {
            lna = Math2.log(a / (a + b));
            lnb = Math2.log(b / (a + b));
            t = Math2.exp(a * lna) / a;
            u = Math2.exp(b * lnb) / b;
            w = t + u;
            if (p < t / w)
              x = Math2.pow(a * w * p, 1 / a);
            else
              x = 1 - Math2.pow(b * w * (1 - p), 1 / b);
          }
          afac = -jStat2.gammaln(a) - jStat2.gammaln(b) + jStat2.gammaln(a + b);
          for (; j < 10; j++) {
            if (x === 0 || x === 1)
              return x;
            err = jStat2.ibeta(x, a, b) - p;
            t = Math2.exp(a1 * Math2.log(x) + b1 * Math2.log(1 - x) + afac);
            u = err / t;
            x -= t = u / (1 - 0.5 * Math2.min(1, u * (a1 / x - b1 / (1 - x))));
            if (x <= 0)
              x = 0.5 * (x + t);
            if (x >= 1)
              x = 0.5 * (x + t + 1);
            if (Math2.abs(t) < EPS * x && j > 0)
              break;
          }
          return x;
        };
        jStat2.ibeta = function ibeta(x, a, b) {
          var bt = x === 0 || x === 1 ? 0 : Math2.exp(jStat2.gammaln(a + b) - jStat2.gammaln(a) - jStat2.gammaln(b) + a * Math2.log(x) + b * Math2.log(1 - x));
          if (x < 0 || x > 1)
            return false;
          if (x < (a + 1) / (a + b + 2))
            return bt * jStat2.betacf(x, a, b) / a;
          return 1 - bt * jStat2.betacf(1 - x, b, a) / b;
        };
        jStat2.randn = function randn(n, m) {
          var u, v, x, y, q;
          if (!m)
            m = n;
          if (n)
            return jStat2.create(n, m, function() {
              return jStat2.randn();
            });
          do {
            u = jStat2._random_fn();
            v = 1.7156 * (jStat2._random_fn() - 0.5);
            x = u - 0.449871;
            y = Math2.abs(v) + 0.386595;
            q = x * x + y * (0.196 * y - 0.25472 * x);
          } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math2.log(u) * u * u));
          return v / u;
        };
        jStat2.randg = function randg(shape, n, m) {
          var oalph = shape;
          var a1, a2, u, v, x, mat;
          if (!m)
            m = n;
          if (!shape)
            shape = 1;
          if (n) {
            mat = jStat2.zeros(n, m);
            mat.alter(function() {
              return jStat2.randg(shape);
            });
            return mat;
          }
          if (shape < 1)
            shape += 1;
          a1 = shape - 1 / 3;
          a2 = 1 / Math2.sqrt(9 * a1);
          do {
            do {
              x = jStat2.randn();
              v = 1 + a2 * x;
            } while (v <= 0);
            v = v * v * v;
            u = jStat2._random_fn();
          } while (u > 1 - 0.331 * Math2.pow(x, 4) && Math2.log(u) > 0.5 * x * x + a1 * (1 - v + Math2.log(v)));
          if (shape == oalph)
            return a1 * v;
          do {
            u = jStat2._random_fn();
          } while (u === 0);
          return Math2.pow(u, 1 / oalph) * a1 * v;
        };
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function() {
                return jStat2(jStat2.map(this, function(value) {
                  return jStat2[passfunc](value);
                }));
              };
            })(funcs[i]);
        })("gammaln gammafn factorial factorialln".split(" "));
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function() {
                return jStat2(jStat2[passfunc].apply(null, arguments));
              };
            })(funcs[i]);
        })("randn".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        (function(list) {
          for (var i = 0; i < list.length; i++)
            (function(func) {
              jStat2[func] = function f(a, b, c) {
                if (!(this instanceof f))
                  return new f(a, b, c);
                this._a = a;
                this._b = b;
                this._c = c;
                return this;
              };
              jStat2.fn[func] = function(a, b, c) {
                var newthis = jStat2[func](a, b, c);
                newthis.data = this;
                return newthis;
              };
              jStat2[func].prototype.sample = function(arr) {
                var a = this._a;
                var b = this._b;
                var c = this._c;
                if (arr)
                  return jStat2.alter(arr, function() {
                    return jStat2[func].sample(a, b, c);
                  });
                else
                  return jStat2[func].sample(a, b, c);
              };
              (function(vals) {
                for (var i2 = 0; i2 < vals.length; i2++)
                  (function(fnfunc) {
                    jStat2[func].prototype[fnfunc] = function(x) {
                      var a = this._a;
                      var b = this._b;
                      var c = this._c;
                      if (!x && x !== 0)
                        x = this.data;
                      if (typeof x !== "number") {
                        return jStat2.fn.map.call(x, function(x2) {
                          return jStat2[func][fnfunc](x2, a, b, c);
                        });
                      }
                      return jStat2[func][fnfunc](x, a, b, c);
                    };
                  })(vals[i2]);
              })("pdf cdf inv".split(" "));
              (function(vals) {
                for (var i2 = 0; i2 < vals.length; i2++)
                  (function(fnfunc) {
                    jStat2[func].prototype[fnfunc] = function() {
                      return jStat2[func][fnfunc](this._a, this._b, this._c);
                    };
                  })(vals[i2]);
              })("mean median mode variance".split(" "));
            })(list[i]);
        })("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" "));
        jStat2.extend(jStat2.beta, {
          pdf: function pdf(x, alpha, beta) {
            if (x > 1 || x < 0)
              return 0;
            if (alpha == 1 && beta == 1)
              return 1;
            if (alpha < 512 && beta < 512) {
              return Math2.pow(x, alpha - 1) * Math2.pow(1 - x, beta - 1) / jStat2.betafn(alpha, beta);
            } else {
              return Math2.exp((alpha - 1) * Math2.log(x) + (beta - 1) * Math2.log(1 - x) - jStat2.betaln(alpha, beta));
            }
          },
          cdf: function cdf(x, alpha, beta) {
            return x > 1 || x < 0 ? (x > 1) * 1 : jStat2.ibeta(x, alpha, beta);
          },
          inv: function inv(x, alpha, beta) {
            return jStat2.ibetainv(x, alpha, beta);
          },
          mean: function mean(alpha, beta) {
            return alpha / (alpha + beta);
          },
          median: function median(alpha, beta) {
            return jStat2.ibetainv(0.5, alpha, beta);
          },
          mode: function mode(alpha, beta) {
            return (alpha - 1) / (alpha + beta - 2);
          },
          sample: function sample(alpha, beta) {
            var u = jStat2.randg(alpha);
            return u / (u + jStat2.randg(beta));
          },
          variance: function variance(alpha, beta) {
            return alpha * beta / (Math2.pow(alpha + beta, 2) * (alpha + beta + 1));
          }
        });
        jStat2.extend(jStat2.centralF, {
          pdf: function pdf(x, df1, df2) {
            var p, q, f;
            if (x < 0)
              return 0;
            if (df1 <= 2) {
              if (x === 0 && df1 < 2) {
                return Infinity;
              }
              if (x === 0 && df1 === 2) {
                return 1;
              }
              return 1 / jStat2.betafn(df1 / 2, df2 / 2) * Math2.pow(df1 / df2, df1 / 2) * Math2.pow(x, df1 / 2 - 1) * Math2.pow(1 + df1 / df2 * x, -(df1 + df2) / 2);
            }
            p = df1 * x / (df2 + x * df1);
            q = df2 / (df2 + x * df1);
            f = df1 * q / 2;
            return f * jStat2.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p);
          },
          cdf: function cdf(x, df1, df2) {
            if (x < 0)
              return 0;
            return jStat2.ibeta(df1 * x / (df1 * x + df2), df1 / 2, df2 / 2);
          },
          inv: function inv(x, df1, df2) {
            return df2 / (df1 * (1 / jStat2.ibetainv(x, df1 / 2, df2 / 2) - 1));
          },
          mean: function mean(df1, df2) {
            return df2 > 2 ? df2 / (df2 - 2) : void 0;
          },
          mode: function mode(df1, df2) {
            return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : void 0;
          },
          sample: function sample(df1, df2) {
            var x1 = jStat2.randg(df1 / 2) * 2;
            var x2 = jStat2.randg(df2 / 2) * 2;
            return x1 / df1 / (x2 / df2);
          },
          variance: function variance(df1, df2) {
            if (df2 <= 4)
              return void 0;
            return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));
          }
        });
        jStat2.extend(jStat2.cauchy, {
          pdf: function pdf(x, local, scale) {
            if (scale < 0) {
              return 0;
            }
            return scale / (Math2.pow(x - local, 2) + Math2.pow(scale, 2)) / Math2.PI;
          },
          cdf: function cdf(x, local, scale) {
            return Math2.atan((x - local) / scale) / Math2.PI + 0.5;
          },
          inv: function(p, local, scale) {
            return local + scale * Math2.tan(Math2.PI * (p - 0.5));
          },
          median: function median(local) {
            return local;
          },
          mode: function mode(local) {
            return local;
          },
          sample: function sample(local, scale) {
            return jStat2.randn() * Math2.sqrt(1 / (2 * jStat2.randg(0.5))) * scale + local;
          }
        });
        jStat2.extend(jStat2.chisquare, {
          pdf: function pdf(x, dof) {
            if (x < 0)
              return 0;
            return x === 0 && dof === 2 ? 0.5 : Math2.exp((dof / 2 - 1) * Math2.log(x) - x / 2 - dof / 2 * Math2.log(2) - jStat2.gammaln(dof / 2));
          },
          cdf: function cdf(x, dof) {
            if (x < 0)
              return 0;
            return jStat2.lowRegGamma(dof / 2, x / 2);
          },
          inv: function(p, dof) {
            return 2 * jStat2.gammapinv(p, 0.5 * dof);
          },
          mean: function(dof) {
            return dof;
          },
          median: function median(dof) {
            return dof * Math2.pow(1 - 2 / (9 * dof), 3);
          },
          mode: function mode(dof) {
            return dof - 2 > 0 ? dof - 2 : 0;
          },
          sample: function sample(dof) {
            return jStat2.randg(dof / 2) * 2;
          },
          variance: function variance(dof) {
            return 2 * dof;
          }
        });
        jStat2.extend(jStat2.exponential, {
          pdf: function pdf(x, rate) {
            return x < 0 ? 0 : rate * Math2.exp(-rate * x);
          },
          cdf: function cdf(x, rate) {
            return x < 0 ? 0 : 1 - Math2.exp(-rate * x);
          },
          inv: function(p, rate) {
            return -Math2.log(1 - p) / rate;
          },
          mean: function(rate) {
            return 1 / rate;
          },
          median: function(rate) {
            return 1 / rate * Math2.log(2);
          },
          mode: function mode() {
            return 0;
          },
          sample: function sample(rate) {
            return -1 / rate * Math2.log(jStat2._random_fn());
          },
          variance: function(rate) {
            return Math2.pow(rate, -2);
          }
        });
        jStat2.extend(jStat2.gamma, {
          pdf: function pdf(x, shape, scale) {
            if (x < 0)
              return 0;
            return x === 0 && shape === 1 ? 1 / scale : Math2.exp((shape - 1) * Math2.log(x) - x / scale - jStat2.gammaln(shape) - shape * Math2.log(scale));
          },
          cdf: function cdf(x, shape, scale) {
            if (x < 0)
              return 0;
            return jStat2.lowRegGamma(shape, x / scale);
          },
          inv: function(p, shape, scale) {
            return jStat2.gammapinv(p, shape) * scale;
          },
          mean: function(shape, scale) {
            return shape * scale;
          },
          mode: function mode(shape, scale) {
            if (shape > 1)
              return (shape - 1) * scale;
            return void 0;
          },
          sample: function sample(shape, scale) {
            return jStat2.randg(shape) * scale;
          },
          variance: function variance(shape, scale) {
            return shape * scale * scale;
          }
        });
        jStat2.extend(jStat2.invgamma, {
          pdf: function pdf(x, shape, scale) {
            if (x <= 0)
              return 0;
            return Math2.exp(-(shape + 1) * Math2.log(x) - scale / x - jStat2.gammaln(shape) + shape * Math2.log(scale));
          },
          cdf: function cdf(x, shape, scale) {
            if (x <= 0)
              return 0;
            return 1 - jStat2.lowRegGamma(shape, scale / x);
          },
          inv: function(p, shape, scale) {
            return scale / jStat2.gammapinv(1 - p, shape);
          },
          mean: function(shape, scale) {
            return shape > 1 ? scale / (shape - 1) : void 0;
          },
          mode: function mode(shape, scale) {
            return scale / (shape + 1);
          },
          sample: function sample(shape, scale) {
            return scale / jStat2.randg(shape);
          },
          variance: function variance(shape, scale) {
            if (shape <= 2)
              return void 0;
            return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));
          }
        });
        jStat2.extend(jStat2.kumaraswamy, {
          pdf: function pdf(x, alpha, beta) {
            if (x === 0 && alpha === 1)
              return beta;
            else if (x === 1 && beta === 1)
              return alpha;
            return Math2.exp(Math2.log(alpha) + Math2.log(beta) + (alpha - 1) * Math2.log(x) + (beta - 1) * Math2.log(1 - Math2.pow(x, alpha)));
          },
          cdf: function cdf(x, alpha, beta) {
            if (x < 0)
              return 0;
            else if (x > 1)
              return 1;
            return 1 - Math2.pow(1 - Math2.pow(x, alpha), beta);
          },
          inv: function inv(p, alpha, beta) {
            return Math2.pow(1 - Math2.pow(1 - p, 1 / beta), 1 / alpha);
          },
          mean: function(alpha, beta) {
            return beta * jStat2.gammafn(1 + 1 / alpha) * jStat2.gammafn(beta) / jStat2.gammafn(1 + 1 / alpha + beta);
          },
          median: function median(alpha, beta) {
            return Math2.pow(1 - Math2.pow(2, -1 / beta), 1 / alpha);
          },
          mode: function mode(alpha, beta) {
            if (!(alpha >= 1 && beta >= 1 && (alpha !== 1 && beta !== 1)))
              return void 0;
            return Math2.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);
          },
          variance: function variance() {
            throw new Error("variance not yet implemented");
          }
        });
        jStat2.extend(jStat2.lognormal, {
          pdf: function pdf(x, mu, sigma) {
            if (x <= 0)
              return 0;
            return Math2.exp(-Math2.log(x) - 0.5 * Math2.log(2 * Math2.PI) - Math2.log(sigma) - Math2.pow(Math2.log(x) - mu, 2) / (2 * sigma * sigma));
          },
          cdf: function cdf(x, mu, sigma) {
            if (x < 0)
              return 0;
            return 0.5 + 0.5 * jStat2.erf((Math2.log(x) - mu) / Math2.sqrt(2 * sigma * sigma));
          },
          inv: function(p, mu, sigma) {
            return Math2.exp(-1.4142135623730951 * sigma * jStat2.erfcinv(2 * p) + mu);
          },
          mean: function mean(mu, sigma) {
            return Math2.exp(mu + sigma * sigma / 2);
          },
          median: function median(mu) {
            return Math2.exp(mu);
          },
          mode: function mode(mu, sigma) {
            return Math2.exp(mu - sigma * sigma);
          },
          sample: function sample(mu, sigma) {
            return Math2.exp(jStat2.randn() * sigma + mu);
          },
          variance: function variance(mu, sigma) {
            return (Math2.exp(sigma * sigma) - 1) * Math2.exp(2 * mu + sigma * sigma);
          }
        });
        jStat2.extend(jStat2.noncentralt, {
          pdf: function pdf(x, dof, ncp) {
            var tol = 1e-14;
            if (Math2.abs(ncp) < tol)
              return jStat2.studentt.pdf(x, dof);
            if (Math2.abs(x) < tol) {
              return Math2.exp(jStat2.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math2.log(Math2.PI * dof) - jStat2.gammaln(dof / 2));
            }
            return dof / x * (jStat2.noncentralt.cdf(x * Math2.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat2.noncentralt.cdf(x, dof, ncp));
          },
          cdf: function cdf(x, dof, ncp) {
            var tol = 1e-14;
            var min_iterations = 200;
            if (Math2.abs(ncp) < tol)
              return jStat2.studentt.cdf(x, dof);
            var flip = false;
            if (x < 0) {
              flip = true;
              ncp = -ncp;
            }
            var prob = jStat2.normal.cdf(-ncp, 0, 1);
            var value = tol + 1;
            var lastvalue = value;
            var y = x * x / (x * x + dof);
            var j = 0;
            var p = Math2.exp(-ncp * ncp / 2);
            var q = Math2.exp(-ncp * ncp / 2 - 0.5 * Math2.log(2) - jStat2.gammaln(3 / 2)) * ncp;
            while (j < min_iterations || lastvalue > tol || value > tol) {
              lastvalue = value;
              if (j > 0) {
                p *= ncp * ncp / (2 * j);
                q *= ncp * ncp / (2 * (j + 1 / 2));
              }
              value = p * jStat2.beta.cdf(y, j + 0.5, dof / 2) + q * jStat2.beta.cdf(y, j + 1, dof / 2);
              prob += 0.5 * value;
              j++;
            }
            return flip ? 1 - prob : prob;
          }
        });
        jStat2.extend(jStat2.normal, {
          pdf: function pdf(x, mean, std) {
            return Math2.exp(-0.5 * Math2.log(2 * Math2.PI) - Math2.log(std) - Math2.pow(x - mean, 2) / (2 * std * std));
          },
          cdf: function cdf(x, mean, std) {
            return 0.5 * (1 + jStat2.erf((x - mean) / Math2.sqrt(2 * std * std)));
          },
          inv: function(p, mean, std) {
            return -1.4142135623730951 * std * jStat2.erfcinv(2 * p) + mean;
          },
          mean: function(mean) {
            return mean;
          },
          median: function median(mean) {
            return mean;
          },
          mode: function(mean) {
            return mean;
          },
          sample: function sample(mean, std) {
            return jStat2.randn() * std + mean;
          },
          variance: function(mean, std) {
            return std * std;
          }
        });
        jStat2.extend(jStat2.pareto, {
          pdf: function pdf(x, scale, shape) {
            if (x < scale)
              return 0;
            return shape * Math2.pow(scale, shape) / Math2.pow(x, shape + 1);
          },
          cdf: function cdf(x, scale, shape) {
            if (x < scale)
              return 0;
            return 1 - Math2.pow(scale / x, shape);
          },
          inv: function inv(p, scale, shape) {
            return scale / Math2.pow(1 - p, 1 / shape);
          },
          mean: function mean(scale, shape) {
            if (shape <= 1)
              return void 0;
            return shape * Math2.pow(scale, shape) / (shape - 1);
          },
          median: function median(scale, shape) {
            return scale * (shape * Math2.SQRT2);
          },
          mode: function mode(scale) {
            return scale;
          },
          variance: function(scale, shape) {
            if (shape <= 2)
              return void 0;
            return scale * scale * shape / (Math2.pow(shape - 1, 2) * (shape - 2));
          }
        });
        jStat2.extend(jStat2.studentt, {
          pdf: function pdf(x, dof) {
            dof = dof > 1e100 ? 1e100 : dof;
            return 1 / (Math2.sqrt(dof) * jStat2.betafn(0.5, dof / 2)) * Math2.pow(1 + x * x / dof, -((dof + 1) / 2));
          },
          cdf: function cdf(x, dof) {
            var dof2 = dof / 2;
            return jStat2.ibeta((x + Math2.sqrt(x * x + dof)) / (2 * Math2.sqrt(x * x + dof)), dof2, dof2);
          },
          inv: function(p, dof) {
            var x = jStat2.ibetainv(2 * Math2.min(p, 1 - p), 0.5 * dof, 0.5);
            x = Math2.sqrt(dof * (1 - x) / x);
            return p > 0.5 ? x : -x;
          },
          mean: function mean(dof) {
            return dof > 1 ? 0 : void 0;
          },
          median: function median() {
            return 0;
          },
          mode: function mode() {
            return 0;
          },
          sample: function sample(dof) {
            return jStat2.randn() * Math2.sqrt(dof / (2 * jStat2.randg(dof / 2)));
          },
          variance: function variance(dof) {
            return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : void 0;
          }
        });
        jStat2.extend(jStat2.weibull, {
          pdf: function pdf(x, scale, shape) {
            if (x < 0 || scale < 0 || shape < 0)
              return 0;
            return shape / scale * Math2.pow(x / scale, shape - 1) * Math2.exp(-Math2.pow(x / scale, shape));
          },
          cdf: function cdf(x, scale, shape) {
            return x < 0 ? 0 : 1 - Math2.exp(-Math2.pow(x / scale, shape));
          },
          inv: function(p, scale, shape) {
            return scale * Math2.pow(-Math2.log(1 - p), 1 / shape);
          },
          mean: function(scale, shape) {
            return scale * jStat2.gammafn(1 + 1 / shape);
          },
          median: function median(scale, shape) {
            return scale * Math2.pow(Math2.log(2), 1 / shape);
          },
          mode: function mode(scale, shape) {
            if (shape <= 1)
              return 0;
            return scale * Math2.pow((shape - 1) / shape, 1 / shape);
          },
          sample: function sample(scale, shape) {
            return scale * Math2.pow(-Math2.log(jStat2._random_fn()), 1 / shape);
          },
          variance: function variance(scale, shape) {
            return scale * scale * jStat2.gammafn(1 + 2 / shape) - Math2.pow(jStat2.weibull.mean(scale, shape), 2);
          }
        });
        jStat2.extend(jStat2.uniform, {
          pdf: function pdf(x, a, b) {
            return x < a || x > b ? 0 : 1 / (b - a);
          },
          cdf: function cdf(x, a, b) {
            if (x < a)
              return 0;
            else if (x < b)
              return (x - a) / (b - a);
            return 1;
          },
          inv: function(p, a, b) {
            return a + p * (b - a);
          },
          mean: function mean(a, b) {
            return 0.5 * (a + b);
          },
          median: function median(a, b) {
            return jStat2.mean(a, b);
          },
          mode: function mode() {
            throw new Error("mode is not yet implemented");
          },
          sample: function sample(a, b) {
            return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat2._random_fn() - 1);
          },
          variance: function variance(a, b) {
            return Math2.pow(b - a, 2) / 12;
          }
        });
        function betinc(x, a, b, eps) {
          var a0 = 0;
          var b0 = 1;
          var a1 = 1;
          var b1 = 1;
          var m9 = 0;
          var a2 = 0;
          var c9;
          while (Math2.abs((a1 - a2) / a1) > eps) {
            a2 = a1;
            c9 = -(a + m9) * (a + b + m9) * x / (a + 2 * m9) / (a + 2 * m9 + 1);
            a0 = a1 + c9 * a0;
            b0 = b1 + c9 * b0;
            m9 = m9 + 1;
            c9 = m9 * (b - m9) * x / (a + 2 * m9 - 1) / (a + 2 * m9);
            a1 = a0 + c9 * a1;
            b1 = b0 + c9 * b1;
            a0 = a0 / b1;
            b0 = b0 / b1;
            a1 = a1 / b1;
            b1 = 1;
          }
          return a1 / a;
        }
        jStat2.extend(jStat2.binomial, {
          pdf: function pdf(k, n, p) {
            return p === 0 || p === 1 ? n * p === k ? 1 : 0 : jStat2.combination(n, k) * Math2.pow(p, k) * Math2.pow(1 - p, n - k);
          },
          cdf: function cdf(x, n, p) {
            var betacdf;
            var eps = 1e-10;
            if (x < 0)
              return 0;
            if (x >= n)
              return 1;
            if (p < 0 || p > 1 || n <= 0)
              return NaN;
            x = Math2.floor(x);
            var z = p;
            var a = x + 1;
            var b = n - x;
            var s = a + b;
            var bt = Math2.exp(jStat2.gammaln(s) - jStat2.gammaln(b) - jStat2.gammaln(a) + a * Math2.log(z) + b * Math2.log(1 - z));
            if (z < (a + 1) / (s + 2))
              betacdf = bt * betinc(z, a, b, eps);
            else
              betacdf = 1 - bt * betinc(1 - z, b, a, eps);
            return Math2.round((1 - betacdf) * (1 / eps)) / (1 / eps);
          }
        });
        jStat2.extend(jStat2.negbin, {
          pdf: function pdf(k, r, p) {
            if (k !== k >>> 0)
              return false;
            if (k < 0)
              return 0;
            return jStat2.combination(k + r - 1, r - 1) * Math2.pow(1 - p, k) * Math2.pow(p, r);
          },
          cdf: function cdf(x, r, p) {
            var sum = 0, k = 0;
            if (x < 0)
              return 0;
            for (; k <= x; k++) {
              sum += jStat2.negbin.pdf(k, r, p);
            }
            return sum;
          }
        });
        jStat2.extend(jStat2.hypgeom, {
          pdf: function pdf(k, N, m, n) {
            if (k !== k | 0) {
              return false;
            } else if (k < 0 || k < m - (N - n)) {
              return 0;
            } else if (k > n || k > m) {
              return 0;
            } else if (m * 2 > N) {
              if (n * 2 > N) {
                return jStat2.hypgeom.pdf(N - m - n + k, N, N - m, N - n);
              } else {
                return jStat2.hypgeom.pdf(n - k, N, N - m, n);
              }
            } else if (n * 2 > N) {
              return jStat2.hypgeom.pdf(m - k, N, m, N - n);
            } else if (m < n) {
              return jStat2.hypgeom.pdf(k, N, n, m);
            } else {
              var scaledPDF = 1;
              var samplesDone = 0;
              for (var i = 0; i < k; i++) {
                while (scaledPDF > 1 && samplesDone < n) {
                  scaledPDF *= 1 - m / (N - samplesDone);
                  samplesDone++;
                }
                scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
              }
              for (; samplesDone < n; samplesDone++) {
                scaledPDF *= 1 - m / (N - samplesDone);
              }
              return Math2.min(1, Math2.max(0, scaledPDF));
            }
          },
          cdf: function cdf(x, N, m, n) {
            if (x < 0 || x < m - (N - n)) {
              return 0;
            } else if (x >= n || x >= m) {
              return 1;
            } else if (m * 2 > N) {
              if (n * 2 > N) {
                return jStat2.hypgeom.cdf(N - m - n + x, N, N - m, N - n);
              } else {
                return 1 - jStat2.hypgeom.cdf(n - x - 1, N, N - m, n);
              }
            } else if (n * 2 > N) {
              return 1 - jStat2.hypgeom.cdf(m - x - 1, N, m, N - n);
            } else if (m < n) {
              return jStat2.hypgeom.cdf(x, N, n, m);
            } else {
              var scaledCDF = 1;
              var scaledPDF = 1;
              var samplesDone = 0;
              for (var i = 0; i < x; i++) {
                while (scaledCDF > 1 && samplesDone < n) {
                  var factor = 1 - m / (N - samplesDone);
                  scaledPDF *= factor;
                  scaledCDF *= factor;
                  samplesDone++;
                }
                scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
                scaledCDF += scaledPDF;
              }
              for (; samplesDone < n; samplesDone++) {
                scaledCDF *= 1 - m / (N - samplesDone);
              }
              return Math2.min(1, Math2.max(0, scaledCDF));
            }
          }
        });
        jStat2.extend(jStat2.poisson, {
          pdf: function pdf(k, l) {
            if (l < 0 || k % 1 !== 0 || k < 0) {
              return 0;
            }
            return Math2.pow(l, k) * Math2.exp(-l) / jStat2.factorial(k);
          },
          cdf: function cdf(x, l) {
            var sumarr = [], k = 0;
            if (x < 0)
              return 0;
            for (; k <= x; k++) {
              sumarr.push(jStat2.poisson.pdf(k, l));
            }
            return jStat2.sum(sumarr);
          },
          mean: function(l) {
            return l;
          },
          variance: function(l) {
            return l;
          },
          sampleSmall: function sampleSmall(l) {
            var p = 1, k = 0, L = Math2.exp(-l);
            do {
              k++;
              p *= jStat2._random_fn();
            } while (p > L);
            return k - 1;
          },
          sampleLarge: function sampleLarge(l) {
            var lam = l;
            var k;
            var U, V, slam, loglam, a, b, invalpha, vr, us;
            slam = Math2.sqrt(lam);
            loglam = Math2.log(lam);
            b = 0.931 + 2.53 * slam;
            a = -0.059 + 0.02483 * b;
            invalpha = 1.1239 + 1.1328 / (b - 3.4);
            vr = 0.9277 - 3.6224 / (b - 2);
            while (1) {
              U = Math2.random() - 0.5;
              V = Math2.random();
              us = 0.5 - Math2.abs(U);
              k = Math2.floor((2 * a / us + b) * U + lam + 0.43);
              if (us >= 0.07 && V <= vr) {
                return k;
              }
              if (k < 0 || us < 0.013 && V > us) {
                continue;
              }
              if (Math2.log(V) + Math2.log(invalpha) - Math2.log(a / (us * us) + b) <= -lam + k * loglam - jStat2.loggam(k + 1)) {
                return k;
              }
            }
          },
          sample: function sample(l) {
            if (l < 10)
              return this.sampleSmall(l);
            else
              return this.sampleLarge(l);
          }
        });
        jStat2.extend(jStat2.triangular, {
          pdf: function pdf(x, a, b, c) {
            if (b <= a || c < a || c > b) {
              return NaN;
            } else {
              if (x < a || x > b) {
                return 0;
              } else if (x < c) {
                return 2 * (x - a) / ((b - a) * (c - a));
              } else if (x === c) {
                return 2 / (b - a);
              } else {
                return 2 * (b - x) / ((b - a) * (b - c));
              }
            }
          },
          cdf: function cdf(x, a, b, c) {
            if (b <= a || c < a || c > b)
              return NaN;
            if (x <= a)
              return 0;
            else if (x >= b)
              return 1;
            if (x <= c)
              return Math2.pow(x - a, 2) / ((b - a) * (c - a));
            else
              return 1 - Math2.pow(b - x, 2) / ((b - a) * (b - c));
          },
          inv: function inv(p, a, b, c) {
            if (b <= a || c < a || c > b) {
              return NaN;
            } else {
              if (p <= (c - a) / (b - a)) {
                return a + (b - a) * Math2.sqrt(p * ((c - a) / (b - a)));
              } else {
                return a + (b - a) * (1 - Math2.sqrt((1 - p) * (1 - (c - a) / (b - a))));
              }
            }
          },
          mean: function mean(a, b, c) {
            return (a + b + c) / 3;
          },
          median: function median(a, b, c) {
            if (c <= (a + b) / 2) {
              return b - Math2.sqrt((b - a) * (b - c)) / Math2.sqrt(2);
            } else if (c > (a + b) / 2) {
              return a + Math2.sqrt((b - a) * (c - a)) / Math2.sqrt(2);
            }
          },
          mode: function mode(a, b, c) {
            return c;
          },
          sample: function sample(a, b, c) {
            var u = jStat2._random_fn();
            if (u < (c - a) / (b - a))
              return a + Math2.sqrt(u * (b - a) * (c - a));
            return b - Math2.sqrt((1 - u) * (b - a) * (b - c));
          },
          variance: function variance(a, b, c) {
            return (a * a + b * b + c * c - a * b - a * c - b * c) / 18;
          }
        });
        jStat2.extend(jStat2.arcsine, {
          pdf: function pdf(x, a, b) {
            if (b <= a)
              return NaN;
            return x <= a || x >= b ? 0 : 2 / Math2.PI * Math2.pow(Math2.pow(b - a, 2) - Math2.pow(2 * x - a - b, 2), -0.5);
          },
          cdf: function cdf(x, a, b) {
            if (x < a)
              return 0;
            else if (x < b)
              return 2 / Math2.PI * Math2.asin(Math2.sqrt((x - a) / (b - a)));
            return 1;
          },
          inv: function(p, a, b) {
            return a + (0.5 - 0.5 * Math2.cos(Math2.PI * p)) * (b - a);
          },
          mean: function mean(a, b) {
            if (b <= a)
              return NaN;
            return (a + b) / 2;
          },
          median: function median(a, b) {
            if (b <= a)
              return NaN;
            return (a + b) / 2;
          },
          mode: function mode() {
            throw new Error("mode is not yet implemented");
          },
          sample: function sample(a, b) {
            return (a + b) / 2 + (b - a) / 2 * Math2.sin(2 * Math2.PI * jStat2.uniform.sample(0, 1));
          },
          variance: function variance(a, b) {
            if (b <= a)
              return NaN;
            return Math2.pow(b - a, 2) / 8;
          }
        });
        function laplaceSign(x) {
          return x / Math2.abs(x);
        }
        jStat2.extend(jStat2.laplace, {
          pdf: function pdf(x, mu, b) {
            return b <= 0 ? 0 : Math2.exp(-Math2.abs(x - mu) / b) / (2 * b);
          },
          cdf: function cdf(x, mu, b) {
            if (b <= 0) {
              return 0;
            }
            if (x < mu) {
              return 0.5 * Math2.exp((x - mu) / b);
            } else {
              return 1 - 0.5 * Math2.exp(-(x - mu) / b);
            }
          },
          mean: function(mu) {
            return mu;
          },
          median: function(mu) {
            return mu;
          },
          mode: function(mu) {
            return mu;
          },
          variance: function(mu, b) {
            return 2 * b * b;
          },
          sample: function sample(mu, b) {
            var u = jStat2._random_fn() - 0.5;
            return mu - b * laplaceSign(u) * Math2.log(1 - 2 * Math2.abs(u));
          }
        });
        function tukeyWprob(w, rr, cc) {
          var nleg = 12;
          var ihalf = 6;
          var C1 = -30;
          var C2 = -50;
          var C3 = 60;
          var bb = 8;
          var wlar = 3;
          var wincr1 = 2;
          var wincr2 = 3;
          var xleg = [
            0.9815606342467192,
            0.9041172563704749,
            0.7699026741943047,
            0.5873179542866175,
            0.3678314989981802,
            0.1252334085114689
          ];
          var aleg = [
            0.04717533638651183,
            0.10693932599531843,
            0.16007832854334622,
            0.20316742672306592,
            0.2334925365383548,
            0.24914704581340277
          ];
          var qsqz = w * 0.5;
          if (qsqz >= bb)
            return 1;
          var pr_w = 2 * jStat2.normal.cdf(qsqz, 0, 1, 1, 0) - 1;
          if (pr_w >= Math2.exp(C2 / cc))
            pr_w = Math2.pow(pr_w, cc);
          else
            pr_w = 0;
          var wincr;
          if (w > wlar)
            wincr = wincr1;
          else
            wincr = wincr2;
          var blb = qsqz;
          var binc = (bb - qsqz) / wincr;
          var bub = blb + binc;
          var einsum = 0;
          var cc1 = cc - 1;
          for (var wi = 1; wi <= wincr; wi++) {
            var elsum = 0;
            var a = 0.5 * (bub + blb);
            var b = 0.5 * (bub - blb);
            for (var jj = 1; jj <= nleg; jj++) {
              var j, xx;
              if (ihalf < jj) {
                j = nleg - jj + 1;
                xx = xleg[j - 1];
              } else {
                j = jj;
                xx = -xleg[j - 1];
              }
              var c = b * xx;
              var ac = a + c;
              var qexpo = ac * ac;
              if (qexpo > C3)
                break;
              var pplus = 2 * jStat2.normal.cdf(ac, 0, 1, 1, 0);
              var pminus = 2 * jStat2.normal.cdf(ac, w, 1, 1, 0);
              var rinsum = pplus * 0.5 - pminus * 0.5;
              if (rinsum >= Math2.exp(C1 / cc1)) {
                rinsum = aleg[j - 1] * Math2.exp(-(0.5 * qexpo)) * Math2.pow(rinsum, cc1);
                elsum += rinsum;
              }
            }
            elsum *= 2 * b * cc / Math2.sqrt(2 * Math2.PI);
            einsum += elsum;
            blb = bub;
            bub += binc;
          }
          pr_w += einsum;
          if (pr_w <= Math2.exp(C1 / rr))
            return 0;
          pr_w = Math2.pow(pr_w, rr);
          if (pr_w >= 1)
            return 1;
          return pr_w;
        }
        function tukeyQinv(p, c, v) {
          var p0 = 0.322232421088;
          var q0 = 0.099348462606;
          var p1 = -1;
          var q1 = 0.588581570495;
          var p2 = -0.342242088547;
          var q2 = 0.531103462366;
          var p3 = -0.204231210125;
          var q3 = 0.10353775285;
          var p4 = -453642210148e-16;
          var q4 = 0.0038560700634;
          var c1 = 0.8832;
          var c2 = 0.2368;
          var c3 = 1.214;
          var c4 = 1.208;
          var c5 = 1.4142;
          var vmax = 120;
          var ps = 0.5 - 0.5 * p;
          var yi = Math2.sqrt(Math2.log(1 / (ps * ps)));
          var t = yi + ((((yi * p4 + p3) * yi + p2) * yi + p1) * yi + p0) / ((((yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);
          if (v < vmax)
            t += (t * t * t + t) / v / 4;
          var q = c1 - c2 * t;
          if (v < vmax)
            q += -c3 / v + c4 * t / v;
          return t * (q * Math2.log(c - 1) + c5);
        }
        jStat2.extend(jStat2.tukey, {
          cdf: function cdf(q, nmeans, df) {
            var rr = 1;
            var cc = nmeans;
            var nlegq = 16;
            var ihalfq = 8;
            var eps1 = -30;
            var eps2 = 1e-14;
            var dhaf = 100;
            var dquar = 800;
            var deigh = 5e3;
            var dlarg = 25e3;
            var ulen1 = 1;
            var ulen2 = 0.5;
            var ulen3 = 0.25;
            var ulen4 = 0.125;
            var xlegq = [
              0.9894009349916499,
              0.9445750230732326,
              0.8656312023878318,
              0.755404408355003,
              0.6178762444026438,
              0.45801677765722737,
              0.2816035507792589,
              0.09501250983763744
            ];
            var alegq = [
              0.027152459411754096,
              0.062253523938647894,
              0.09515851168249279,
              0.12462897125553388,
              0.14959598881657674,
              0.16915651939500254,
              0.18260341504492358,
              0.1894506104550685
            ];
            if (q <= 0)
              return 0;
            if (df < 2 || rr < 1 || cc < 2)
              return NaN;
            if (!Number.isFinite(q))
              return 1;
            if (df > dlarg)
              return tukeyWprob(q, rr, cc);
            var f2 = df * 0.5;
            var f2lf = f2 * Math2.log(df) - df * Math2.log(2) - jStat2.gammaln(f2);
            var f21 = f2 - 1;
            var ff4 = df * 0.25;
            var ulen;
            if (df <= dhaf)
              ulen = ulen1;
            else if (df <= dquar)
              ulen = ulen2;
            else if (df <= deigh)
              ulen = ulen3;
            else
              ulen = ulen4;
            f2lf += Math2.log(ulen);
            var ans = 0;
            for (var i = 1; i <= 50; i++) {
              var otsum = 0;
              var twa1 = (2 * i - 1) * ulen;
              for (var jj = 1; jj <= nlegq; jj++) {
                var j, t1;
                if (ihalfq < jj) {
                  j = jj - ihalfq - 1;
                  t1 = f2lf + f21 * Math2.log(twa1 + xlegq[j] * ulen) - (xlegq[j] * ulen + twa1) * ff4;
                } else {
                  j = jj - 1;
                  t1 = f2lf + f21 * Math2.log(twa1 - xlegq[j] * ulen) + (xlegq[j] * ulen - twa1) * ff4;
                }
                var qsqz;
                if (t1 >= eps1) {
                  if (ihalfq < jj) {
                    qsqz = q * Math2.sqrt((xlegq[j] * ulen + twa1) * 0.5);
                  } else {
                    qsqz = q * Math2.sqrt((-(xlegq[j] * ulen) + twa1) * 0.5);
                  }
                  var wprb = tukeyWprob(qsqz, rr, cc);
                  var rotsum = wprb * alegq[j] * Math2.exp(t1);
                  otsum += rotsum;
                }
              }
              if (i * ulen >= 1 && otsum <= eps2)
                break;
              ans += otsum;
            }
            if (otsum > eps2) {
              throw new Error("tukey.cdf failed to converge");
            }
            if (ans > 1)
              ans = 1;
            return ans;
          },
          inv: function(p, nmeans, df) {
            var rr = 1;
            var cc = nmeans;
            var eps = 1e-4;
            var maxiter = 50;
            if (df < 2 || rr < 1 || cc < 2)
              return NaN;
            if (p < 0 || p > 1)
              return NaN;
            if (p === 0)
              return 0;
            if (p === 1)
              return Infinity;
            var x0 = tukeyQinv(p, cc, df);
            var valx0 = jStat2.tukey.cdf(x0, nmeans, df) - p;
            var x1;
            if (valx0 > 0)
              x1 = Math2.max(0, x0 - 1);
            else
              x1 = x0 + 1;
            var valx1 = jStat2.tukey.cdf(x1, nmeans, df) - p;
            var ans;
            for (var iter = 1; iter < maxiter; iter++) {
              ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
              valx0 = valx1;
              x0 = x1;
              if (ans < 0) {
                ans = 0;
                valx1 = -p;
              }
              valx1 = jStat2.tukey.cdf(ans, nmeans, df) - p;
              x1 = ans;
              var xabs = Math2.abs(x1 - x0);
              if (xabs < eps)
                return ans;
            }
            throw new Error("tukey.inv failed to converge");
          }
        });
      })(jStat, Math);
      (function(jStat2, Math2) {
        var push = Array.prototype.push;
        var isArray = jStat2.utils.isArray;
        function isUsable(arg) {
          return isArray(arg) || arg instanceof jStat2;
        }
        jStat2.extend({
          add: function add(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.map(arr, function(value, row, col) {
                return value + arg[row][col];
              });
            }
            return jStat2.map(arr, function(value) {
              return value + arg;
            });
          },
          subtract: function subtract(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.map(arr, function(value, row, col) {
                return value - arg[row][col] || 0;
              });
            }
            return jStat2.map(arr, function(value) {
              return value - arg;
            });
          },
          divide: function divide(arr, arg) {
            if (isUsable(arg)) {
              if (!isUsable(arg[0]))
                arg = [arg];
              return jStat2.multiply(arr, jStat2.inv(arg));
            }
            return jStat2.map(arr, function(value) {
              return value / arg;
            });
          },
          multiply: function multiply(arr, arg) {
            var row, col, nrescols, sum, nrow, ncol, res, rescols;
            if (arr.length === void 0 && arg.length === void 0) {
              return arr * arg;
            }
            nrow = arr.length, ncol = arr[0].length, res = jStat2.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;
            if (isUsable(arg)) {
              for (; rescols < nrescols; rescols++) {
                for (row = 0; row < nrow; row++) {
                  sum = 0;
                  for (col = 0; col < ncol; col++)
                    sum += arr[row][col] * arg[col][rescols];
                  res[row][rescols] = sum;
                }
              }
              return nrow === 1 && rescols === 1 ? res[0][0] : res;
            }
            return jStat2.map(arr, function(value) {
              return value * arg;
            });
          },
          outer: function outer(A, B) {
            return jStat2.multiply(A.map(function(t) {
              return [t];
            }), [B]);
          },
          dot: function dot(arr, arg) {
            if (!isUsable(arr[0]))
              arr = [arr];
            if (!isUsable(arg[0]))
              arg = [arg];
            var left = arr[0].length === 1 && arr.length !== 1 ? jStat2.transpose(arr) : arr, right = arg[0].length === 1 && arg.length !== 1 ? jStat2.transpose(arg) : arg, res = [], row = 0, nrow = left.length, ncol = left[0].length, sum, col;
            for (; row < nrow; row++) {
              res[row] = [];
              sum = 0;
              for (col = 0; col < ncol; col++)
                sum += left[row][col] * right[row][col];
              res[row] = sum;
            }
            return res.length === 1 ? res[0] : res;
          },
          pow: function pow(arr, arg) {
            return jStat2.map(arr, function(value) {
              return Math2.pow(value, arg);
            });
          },
          exp: function exp(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.exp(value);
            });
          },
          log: function exp(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.log(value);
            });
          },
          abs: function abs(arr) {
            return jStat2.map(arr, function(value) {
              return Math2.abs(value);
            });
          },
          norm: function norm(arr, p) {
            var nnorm = 0, i = 0;
            if (isNaN(p))
              p = 2;
            if (isUsable(arr[0]))
              arr = arr[0];
            for (; i < arr.length; i++) {
              nnorm += Math2.pow(Math2.abs(arr[i]), p);
            }
            return Math2.pow(nnorm, 1 / p);
          },
          angle: function angle(arr, arg) {
            return Math2.acos(jStat2.dot(arr, arg) / (jStat2.norm(arr) * jStat2.norm(arg)));
          },
          aug: function aug(a, b) {
            var newarr = [];
            var i;
            for (i = 0; i < a.length; i++) {
              newarr.push(a[i].slice());
            }
            for (i = 0; i < newarr.length; i++) {
              push.apply(newarr[i], b[i]);
            }
            return newarr;
          },
          inv: function inv(a) {
            var rows = a.length;
            var cols = a[0].length;
            var b = jStat2.identity(rows, cols);
            var c = jStat2.gauss_jordan(a, b);
            var result = [];
            var i = 0;
            var j;
            for (; i < rows; i++) {
              result[i] = [];
              for (j = cols; j < c[0].length; j++)
                result[i][j - cols] = c[i][j];
            }
            return result;
          },
          det: function det(a) {
            var alen = a.length, alend = alen * 2, vals = new Array(alend), rowshift = alen - 1, colshift = alend - 1, mrow = rowshift - alen + 1, mcol = colshift, i = 0, result = 0, j;
            if (alen === 2) {
              return a[0][0] * a[1][1] - a[0][1] * a[1][0];
            }
            for (; i < alend; i++) {
              vals[i] = 1;
            }
            for (i = 0; i < alen; i++) {
              for (j = 0; j < alen; j++) {
                vals[mrow < 0 ? mrow + alen : mrow] *= a[i][j];
                vals[mcol < alen ? mcol + alen : mcol] *= a[i][j];
                mrow++;
                mcol--;
              }
              mrow = --rowshift - alen + 1;
              mcol = --colshift;
            }
            for (i = 0; i < alen; i++) {
              result += vals[i];
            }
            for (; i < alend; i++) {
              result -= vals[i];
            }
            return result;
          },
          gauss_elimination: function gauss_elimination(a, b) {
            var i = 0, j = 0, n = a.length, m = a[0].length, factor = 1, sum = 0, x = [], maug, pivot, temp, k;
            a = jStat2.aug(a, b);
            maug = a[0].length;
            for (i = 0; i < n; i++) {
              pivot = a[i][i];
              j = i;
              for (k = i + 1; k < m; k++) {
                if (pivot < Math2.abs(a[k][i])) {
                  pivot = a[k][i];
                  j = k;
                }
              }
              if (j != i) {
                for (k = 0; k < maug; k++) {
                  temp = a[i][k];
                  a[i][k] = a[j][k];
                  a[j][k] = temp;
                }
              }
              for (j = i + 1; j < n; j++) {
                factor = a[j][i] / a[i][i];
                for (k = i; k < maug; k++) {
                  a[j][k] = a[j][k] - factor * a[i][k];
                }
              }
            }
            for (i = n - 1; i >= 0; i--) {
              sum = 0;
              for (j = i + 1; j <= n - 1; j++) {
                sum = sum + x[j] * a[i][j];
              }
              x[i] = (a[i][maug - 1] - sum) / a[i][i];
            }
            return x;
          },
          gauss_jordan: function gauss_jordan(a, b) {
            var m = jStat2.aug(a, b);
            var h = m.length;
            var w = m[0].length;
            var c = 0;
            var x, y, y2;
            for (y = 0; y < h; y++) {
              var maxrow = y;
              for (y2 = y + 1; y2 < h; y2++) {
                if (Math2.abs(m[y2][y]) > Math2.abs(m[maxrow][y]))
                  maxrow = y2;
              }
              var tmp = m[y];
              m[y] = m[maxrow];
              m[maxrow] = tmp;
              for (y2 = y + 1; y2 < h; y2++) {
                c = m[y2][y] / m[y][y];
                for (x = y; x < w; x++) {
                  m[y2][x] -= m[y][x] * c;
                }
              }
            }
            for (y = h - 1; y >= 0; y--) {
              c = m[y][y];
              for (y2 = 0; y2 < y; y2++) {
                for (x = w - 1; x > y - 1; x--) {
                  m[y2][x] -= m[y][x] * m[y2][y] / c;
                }
              }
              m[y][y] /= c;
              for (x = h; x < w; x++) {
                m[y][x] /= c;
              }
            }
            return m;
          },
          triaUpSolve: function triaUpSolve(A, b) {
            var size = A[0].length;
            var x = jStat2.zeros(1, size)[0];
            var parts;
            var matrix_mode = false;
            if (b[0].length != void 0) {
              b = b.map(function(i) {
                return i[0];
              });
              matrix_mode = true;
            }
            jStat2.arange(size - 1, -1, -1).forEach(function(i) {
              parts = jStat2.arange(i + 1, size).map(function(j) {
                return x[j] * A[i][j];
              });
              x[i] = (b[i] - jStat2.sum(parts)) / A[i][i];
            });
            if (matrix_mode)
              return x.map(function(i) {
                return [i];
              });
            return x;
          },
          triaLowSolve: function triaLowSolve(A, b) {
            var size = A[0].length;
            var x = jStat2.zeros(1, size)[0];
            var parts;
            var matrix_mode = false;
            if (b[0].length != void 0) {
              b = b.map(function(i) {
                return i[0];
              });
              matrix_mode = true;
            }
            jStat2.arange(size).forEach(function(i) {
              parts = jStat2.arange(i).map(function(j) {
                return A[i][j] * x[j];
              });
              x[i] = (b[i] - jStat2.sum(parts)) / A[i][i];
            });
            if (matrix_mode)
              return x.map(function(i) {
                return [i];
              });
            return x;
          },
          lu: function lu(A) {
            var size = A.length;
            var L = jStat2.identity(size);
            var R = jStat2.zeros(A.length, A[0].length);
            var parts;
            jStat2.arange(size).forEach(function(t) {
              R[0][t] = A[0][t];
            });
            jStat2.arange(1, size).forEach(function(l) {
              jStat2.arange(l).forEach(function(i) {
                parts = jStat2.arange(i).map(function(jj) {
                  return L[l][jj] * R[jj][i];
                });
                L[l][i] = (A[l][i] - jStat2.sum(parts)) / R[i][i];
              });
              jStat2.arange(l, size).forEach(function(j) {
                parts = jStat2.arange(l).map(function(jj) {
                  return L[l][jj] * R[jj][j];
                });
                R[l][j] = A[parts.length][j] - jStat2.sum(parts);
              });
            });
            return [L, R];
          },
          cholesky: function cholesky(A) {
            var size = A.length;
            var T = jStat2.zeros(A.length, A[0].length);
            var parts;
            jStat2.arange(size).forEach(function(i) {
              parts = jStat2.arange(i).map(function(t) {
                return Math2.pow(T[i][t], 2);
              });
              T[i][i] = Math2.sqrt(A[i][i] - jStat2.sum(parts));
              jStat2.arange(i + 1, size).forEach(function(j) {
                parts = jStat2.arange(i).map(function(t) {
                  return T[i][t] * T[j][t];
                });
                T[j][i] = (A[i][j] - jStat2.sum(parts)) / T[i][i];
              });
            });
            return T;
          },
          gauss_jacobi: function gauss_jacobi(a, b, x, r) {
            var i = 0;
            var j = 0;
            var n = a.length;
            var l = [];
            var u = [];
            var d = [];
            var xv, c, h, xk;
            for (; i < n; i++) {
              l[i] = [];
              u[i] = [];
              d[i] = [];
              for (j = 0; j < n; j++) {
                if (i > j) {
                  l[i][j] = a[i][j];
                  u[i][j] = d[i][j] = 0;
                } else if (i < j) {
                  u[i][j] = a[i][j];
                  l[i][j] = d[i][j] = 0;
                } else {
                  d[i][j] = a[i][j];
                  l[i][j] = u[i][j] = 0;
                }
              }
            }
            h = jStat2.multiply(jStat2.multiply(jStat2.inv(d), jStat2.add(l, u)), -1);
            c = jStat2.multiply(jStat2.inv(d), b);
            xv = x;
            xk = jStat2.add(jStat2.multiply(h, x), c);
            i = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h, xv), c);
              i++;
            }
            return xk;
          },
          gauss_seidel: function gauss_seidel(a, b, x, r) {
            var i = 0;
            var n = a.length;
            var l = [];
            var u = [];
            var d = [];
            var j, xv, c, h, xk;
            for (; i < n; i++) {
              l[i] = [];
              u[i] = [];
              d[i] = [];
              for (j = 0; j < n; j++) {
                if (i > j) {
                  l[i][j] = a[i][j];
                  u[i][j] = d[i][j] = 0;
                } else if (i < j) {
                  u[i][j] = a[i][j];
                  l[i][j] = d[i][j] = 0;
                } else {
                  d[i][j] = a[i][j];
                  l[i][j] = u[i][j] = 0;
                }
              }
            }
            h = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(d, l)), u), -1);
            c = jStat2.multiply(jStat2.inv(jStat2.add(d, l)), b);
            xv = x;
            xk = jStat2.add(jStat2.multiply(h, x), c);
            i = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h, xv), c);
              i = i + 1;
            }
            return xk;
          },
          SOR: function SOR(a, b, x, r, w) {
            var i = 0;
            var n = a.length;
            var l = [];
            var u = [];
            var d = [];
            var j, xv, c, h, xk;
            for (; i < n; i++) {
              l[i] = [];
              u[i] = [];
              d[i] = [];
              for (j = 0; j < n; j++) {
                if (i > j) {
                  l[i][j] = a[i][j];
                  u[i][j] = d[i][j] = 0;
                } else if (i < j) {
                  u[i][j] = a[i][j];
                  l[i][j] = d[i][j] = 0;
                } else {
                  d[i][j] = a[i][j];
                  l[i][j] = u[i][j] = 0;
                }
              }
            }
            h = jStat2.multiply(jStat2.inv(jStat2.add(d, jStat2.multiply(l, w))), jStat2.subtract(jStat2.multiply(d, 1 - w), jStat2.multiply(u, w)));
            c = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(d, jStat2.multiply(l, w))), b), w);
            xv = x;
            xk = jStat2.add(jStat2.multiply(h, x), c);
            i = 2;
            while (Math2.abs(jStat2.norm(jStat2.subtract(xk, xv))) > r) {
              xv = xk;
              xk = jStat2.add(jStat2.multiply(h, xv), c);
              i++;
            }
            return xk;
          },
          householder: function householder(a) {
            var m = a.length;
            var n = a[0].length;
            var i = 0;
            var w = [];
            var p = [];
            var alpha, r, k, j, factor;
            for (; i < m - 1; i++) {
              alpha = 0;
              for (j = i + 1; j < n; j++)
                alpha += a[j][i] * a[j][i];
              factor = a[i + 1][i] > 0 ? -1 : 1;
              alpha = factor * Math2.sqrt(alpha);
              r = Math2.sqrt((alpha * alpha - a[i + 1][i] * alpha) / 2);
              w = jStat2.zeros(m, 1);
              w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r);
              for (k = i + 2; k < m; k++)
                w[k][0] = a[k][i] / (2 * r);
              p = jStat2.subtract(jStat2.identity(m, n), jStat2.multiply(jStat2.multiply(w, jStat2.transpose(w)), 2));
              a = jStat2.multiply(p, jStat2.multiply(a, p));
            }
            return a;
          },
          QR: function() {
            var sum = jStat2.sum;
            var range = jStat2.arange;
            function qr2(x) {
              var n = x.length;
              var p = x[0].length;
              var r = jStat2.zeros(p, p);
              x = jStat2.copy(x);
              var i, j, k;
              for (j = 0; j < p; j++) {
                r[j][j] = Math2.sqrt(sum(range(n).map(function(i2) {
                  return x[i2][j] * x[i2][j];
                })));
                for (i = 0; i < n; i++) {
                  x[i][j] = x[i][j] / r[j][j];
                }
                for (k = j + 1; k < p; k++) {
                  r[j][k] = sum(range(n).map(function(i2) {
                    return x[i2][j] * x[i2][k];
                  }));
                  for (i = 0; i < n; i++) {
                    x[i][k] = x[i][k] - x[i][j] * r[j][k];
                  }
                }
              }
              return [x, r];
            }
            return qr2;
          }(),
          lstsq: function() {
            function R_I(A) {
              A = jStat2.copy(A);
              var size = A.length;
              var I = jStat2.identity(size);
              jStat2.arange(size - 1, -1, -1).forEach(function(i) {
                jStat2.sliceAssign(I, { row: i }, jStat2.divide(jStat2.slice(I, { row: i }), A[i][i]));
                jStat2.sliceAssign(A, { row: i }, jStat2.divide(jStat2.slice(A, { row: i }), A[i][i]));
                jStat2.arange(i).forEach(function(j) {
                  var c = jStat2.multiply(A[j][i], -1);
                  var Aj = jStat2.slice(A, { row: j });
                  var cAi = jStat2.multiply(jStat2.slice(A, { row: i }), c);
                  jStat2.sliceAssign(A, { row: j }, jStat2.add(Aj, cAi));
                  var Ij = jStat2.slice(I, { row: j });
                  var cIi = jStat2.multiply(jStat2.slice(I, { row: i }), c);
                  jStat2.sliceAssign(I, { row: j }, jStat2.add(Ij, cIi));
                });
              });
              return I;
            }
            function qr_solve(A, b) {
              var array_mode = false;
              if (b[0].length === void 0) {
                b = b.map(function(x2) {
                  return [x2];
                });
                array_mode = true;
              }
              var QR = jStat2.QR(A);
              var Q = QR[0];
              var R = QR[1];
              var attrs = A[0].length;
              var Q1 = jStat2.slice(Q, { col: { end: attrs } });
              var R1 = jStat2.slice(R, { row: { end: attrs } });
              var RI = R_I(R1);
              var Q2 = jStat2.transpose(Q1);
              if (Q2[0].length === void 0) {
                Q2 = [Q2];
              }
              var x = jStat2.multiply(jStat2.multiply(RI, Q2), b);
              if (x.length === void 0) {
                x = [[x]];
              }
              if (array_mode)
                return x.map(function(i) {
                  return i[0];
                });
              return x;
            }
            return qr_solve;
          }(),
          jacobi: function jacobi(a) {
            var condition = 1;
            var n = a.length;
            var e = jStat2.identity(n, n);
            var ev = [];
            var b, i, j, p, q, maxim, theta, s;
            while (condition === 1) {
              maxim = a[0][1];
              p = 0;
              q = 1;
              for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                  if (i != j) {
                    if (maxim < Math2.abs(a[i][j])) {
                      maxim = Math2.abs(a[i][j]);
                      p = i;
                      q = j;
                    }
                  }
                }
              }
              if (a[p][p] === a[q][q])
                theta = a[p][q] > 0 ? Math2.PI / 4 : -Math2.PI / 4;
              else
                theta = Math2.atan(2 * a[p][q] / (a[p][p] - a[q][q])) / 2;
              s = jStat2.identity(n, n);
              s[p][p] = Math2.cos(theta);
              s[p][q] = -Math2.sin(theta);
              s[q][p] = Math2.sin(theta);
              s[q][q] = Math2.cos(theta);
              e = jStat2.multiply(e, s);
              b = jStat2.multiply(jStat2.multiply(jStat2.inv(s), a), s);
              a = b;
              condition = 0;
              for (i = 1; i < n; i++) {
                for (j = 1; j < n; j++) {
                  if (i != j && Math2.abs(a[i][j]) > 1e-3) {
                    condition = 1;
                  }
                }
              }
            }
            for (i = 0; i < n; i++)
              ev.push(a[i][i]);
            return [e, ev];
          },
          rungekutta: function rungekutta(f, h, p, t_j, u_j, order) {
            var k1, k2, u_j1, k3, k4;
            if (order === 2) {
              while (t_j <= p) {
                k1 = h * f(t_j, u_j);
                k2 = h * f(t_j + h, u_j + k1);
                u_j1 = u_j + (k1 + k2) / 2;
                u_j = u_j1;
                t_j = t_j + h;
              }
            }
            if (order === 4) {
              while (t_j <= p) {
                k1 = h * f(t_j, u_j);
                k2 = h * f(t_j + h / 2, u_j + k1 / 2);
                k3 = h * f(t_j + h / 2, u_j + k2 / 2);
                k4 = h * f(t_j + h, u_j + k3);
                u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
                u_j = u_j1;
                t_j = t_j + h;
              }
            }
            return u_j;
          },
          romberg: function romberg(f, a, b, order) {
            var i = 0;
            var h = (b - a) / 2;
            var x = [];
            var h1 = [];
            var g = [];
            var m, a1, j, k, I;
            while (i < order / 2) {
              I = f(a);
              for (j = a, k = 0; j <= b; j = j + h, k++)
                x[k] = j;
              m = x.length;
              for (j = 1; j < m - 1; j++) {
                I += (j % 2 !== 0 ? 4 : 2) * f(x[j]);
              }
              I = h / 3 * (I + f(b));
              g[i] = I;
              h /= 2;
              i++;
            }
            a1 = g.length;
            m = 1;
            while (a1 !== 1) {
              for (j = 0; j < a1 - 1; j++)
                h1[j] = (Math2.pow(4, m) * g[j + 1] - g[j]) / (Math2.pow(4, m) - 1);
              a1 = h1.length;
              g = h1;
              h1 = [];
              m++;
            }
            return g;
          },
          richardson: function richardson(X, f, x, h) {
            function pos(X2, x2) {
              var i2 = 0;
              var n = X2.length;
              var p;
              for (; i2 < n; i2++)
                if (X2[i2] === x2)
                  p = i2;
              return p;
            }
            var h_min = Math2.abs(x - X[pos(X, x) + 1]);
            var i = 0;
            var g = [];
            var h1 = [];
            var y1, y2, m, a, j;
            while (h >= h_min) {
              y1 = pos(X, x + h);
              y2 = pos(X, x);
              g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);
              h /= 2;
              i++;
            }
            a = g.length;
            m = 1;
            while (a != 1) {
              for (j = 0; j < a - 1; j++)
                h1[j] = (Math2.pow(4, m) * g[j + 1] - g[j]) / (Math2.pow(4, m) - 1);
              a = h1.length;
              g = h1;
              h1 = [];
              m++;
            }
            return g;
          },
          simpson: function simpson(f, a, b, n) {
            var h = (b - a) / n;
            var I = f(a);
            var x = [];
            var j = a;
            var k = 0;
            var i = 1;
            var m;
            for (; j <= b; j = j + h, k++)
              x[k] = j;
            m = x.length;
            for (; i < m - 1; i++) {
              I += (i % 2 !== 0 ? 4 : 2) * f(x[i]);
            }
            return h / 3 * (I + f(b));
          },
          hermite: function hermite(X, F, dF, value) {
            var n = X.length;
            var p = 0;
            var i = 0;
            var l = [];
            var dl = [];
            var A = [];
            var B = [];
            var j;
            for (; i < n; i++) {
              l[i] = 1;
              for (j = 0; j < n; j++) {
                if (i != j)
                  l[i] *= (value - X[j]) / (X[i] - X[j]);
              }
              dl[i] = 0;
              for (j = 0; j < n; j++) {
                if (i != j)
                  dl[i] += 1 / (X[i] - X[j]);
              }
              A[i] = (1 - 2 * (value - X[i]) * dl[i]) * (l[i] * l[i]);
              B[i] = (value - X[i]) * (l[i] * l[i]);
              p += A[i] * F[i] + B[i] * dF[i];
            }
            return p;
          },
          lagrange: function lagrange(X, F, value) {
            var p = 0;
            var i = 0;
            var j, l;
            var n = X.length;
            for (; i < n; i++) {
              l = F[i];
              for (j = 0; j < n; j++) {
                if (i != j)
                  l *= (value - X[j]) / (X[i] - X[j]);
              }
              p += l;
            }
            return p;
          },
          cubic_spline: function cubic_spline(X, F, value) {
            var n = X.length;
            var i = 0, j;
            var A = [];
            var B = [];
            var alpha = [];
            var c = [];
            var h = [];
            var b = [];
            var d = [];
            for (; i < n - 1; i++)
              h[i] = X[i + 1] - X[i];
            alpha[0] = 0;
            for (i = 1; i < n - 1; i++) {
              alpha[i] = 3 / h[i] * (F[i + 1] - F[i]) - 3 / h[i - 1] * (F[i] - F[i - 1]);
            }
            for (i = 1; i < n - 1; i++) {
              A[i] = [];
              B[i] = [];
              A[i][i - 1] = h[i - 1];
              A[i][i] = 2 * (h[i - 1] + h[i]);
              A[i][i + 1] = h[i];
              B[i][0] = alpha[i];
            }
            c = jStat2.multiply(jStat2.inv(A), B);
            for (j = 0; j < n - 1; j++) {
              b[j] = (F[j + 1] - F[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;
              d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j]);
            }
            for (j = 0; j < n; j++) {
              if (X[j] > value)
                break;
            }
            j -= 1;
            return F[j] + (value - X[j]) * b[j] + jStat2.sq(value - X[j]) * c[j] + (value - X[j]) * jStat2.sq(value - X[j]) * d[j];
          },
          gauss_quadrature: function gauss_quadrature() {
            throw new Error("gauss_quadrature not yet implemented");
          },
          PCA: function PCA(X) {
            var m = X.length;
            var n = X[0].length;
            var i = 0;
            var j, temp1;
            var u = [];
            var D = [];
            var result = [];
            var temp2 = [];
            var Y = [];
            var Bt = [];
            var B = [];
            var C = [];
            var V = [];
            var Vt = [];
            for (i = 0; i < m; i++) {
              u[i] = jStat2.sum(X[i]) / n;
            }
            for (i = 0; i < n; i++) {
              B[i] = [];
              for (j = 0; j < m; j++) {
                B[i][j] = X[j][i] - u[j];
              }
            }
            B = jStat2.transpose(B);
            for (i = 0; i < m; i++) {
              C[i] = [];
              for (j = 0; j < m; j++) {
                C[i][j] = jStat2.dot([B[i]], [B[j]]) / (n - 1);
              }
            }
            result = jStat2.jacobi(C);
            V = result[0];
            D = result[1];
            Vt = jStat2.transpose(V);
            for (i = 0; i < D.length; i++) {
              for (j = i; j < D.length; j++) {
                if (D[i] < D[j]) {
                  temp1 = D[i];
                  D[i] = D[j];
                  D[j] = temp1;
                  temp2 = Vt[i];
                  Vt[i] = Vt[j];
                  Vt[j] = temp2;
                }
              }
            }
            Bt = jStat2.transpose(B);
            for (i = 0; i < m; i++) {
              Y[i] = [];
              for (j = 0; j < Bt.length; j++) {
                Y[i][j] = jStat2.dot([Vt[i]], [Bt[j]]);
              }
            }
            return [X, D, Vt, Y];
          }
        });
        (function(funcs) {
          for (var i = 0; i < funcs.length; i++)
            (function(passfunc) {
              jStat2.fn[passfunc] = function(arg, func) {
                var tmpthis = this;
                if (func) {
                  setTimeout(function() {
                    func.call(tmpthis, jStat2.fn[passfunc].call(tmpthis, arg));
                  }, 15);
                  return this;
                }
                if (typeof jStat2[passfunc](this, arg) === "number")
                  return jStat2[passfunc](this, arg);
                else
                  return jStat2(jStat2[passfunc](this, arg));
              };
            })(funcs[i]);
        })("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
      })(jStat, Math);
      (function(jStat2, Math2) {
        var slice = [].slice;
        var isNumber = jStat2.utils.isNumber;
        var isArray = jStat2.utils.isArray;
        jStat2.extend({
          zscore: function zscore() {
            var args = slice.call(arguments);
            if (isNumber(args[1])) {
              return (args[0] - args[1]) / args[2];
            }
            return (args[0] - jStat2.mean(args[1])) / jStat2.stdev(args[1], args[2]);
          },
          ztest: function ztest() {
            var args = slice.call(arguments);
            var z;
            if (isArray(args[1])) {
              z = jStat2.zscore(args[0], args[1], args[3]);
              return args[2] === 1 ? jStat2.normal.cdf(-Math2.abs(z), 0, 1) : jStat2.normal.cdf(-Math2.abs(z), 0, 1) * 2;
            } else {
              if (args.length > 2) {
                z = jStat2.zscore(args[0], args[1], args[2]);
                return args[3] === 1 ? jStat2.normal.cdf(-Math2.abs(z), 0, 1) : jStat2.normal.cdf(-Math2.abs(z), 0, 1) * 2;
              } else {
                z = args[0];
                return args[1] === 1 ? jStat2.normal.cdf(-Math2.abs(z), 0, 1) : jStat2.normal.cdf(-Math2.abs(z), 0, 1) * 2;
              }
            }
          }
        });
        jStat2.extend(jStat2.fn, {
          zscore: function zscore(value, flag) {
            return (value - this.mean()) / this.stdev(flag);
          },
          ztest: function ztest(value, sides, flag) {
            var zscore = Math2.abs(this.zscore(value, flag));
            return sides === 1 ? jStat2.normal.cdf(-zscore, 0, 1) : jStat2.normal.cdf(-zscore, 0, 1) * 2;
          }
        });
        jStat2.extend({
          tscore: function tscore() {
            var args = slice.call(arguments);
            return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math2.sqrt(args[3])) : (args[0] - jStat2.mean(args[1])) / (jStat2.stdev(args[1], true) / Math2.sqrt(args[1].length));
          },
          ttest: function ttest() {
            var args = slice.call(arguments);
            var tscore;
            if (args.length === 5) {
              tscore = Math2.abs(jStat2.tscore(args[0], args[1], args[2], args[3]));
              return args[4] === 1 ? jStat2.studentt.cdf(-tscore, args[3] - 1) : jStat2.studentt.cdf(-tscore, args[3] - 1) * 2;
            }
            if (isNumber(args[1])) {
              tscore = Math2.abs(args[0]);
              return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1] - 1) : jStat2.studentt.cdf(-tscore, args[1] - 1) * 2;
            }
            tscore = Math2.abs(jStat2.tscore(args[0], args[1]));
            return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1].length - 1) : jStat2.studentt.cdf(-tscore, args[1].length - 1) * 2;
          }
        });
        jStat2.extend(jStat2.fn, {
          tscore: function tscore(value) {
            return (value - this.mean()) / (this.stdev(true) / Math2.sqrt(this.cols()));
          },
          ttest: function ttest(value, sides) {
            return sides === 1 ? 1 - jStat2.studentt.cdf(Math2.abs(this.tscore(value)), this.cols() - 1) : jStat2.studentt.cdf(-Math2.abs(this.tscore(value)), this.cols() - 1) * 2;
          }
        });
        jStat2.extend({
          anovafscore: function anovafscore() {
            var args = slice.call(arguments), expVar, sample, sampMean, sampSampMean, tmpargs, unexpVar, i, j;
            if (args.length === 1) {
              tmpargs = new Array(args[0].length);
              for (i = 0; i < args[0].length; i++) {
                tmpargs[i] = args[0][i];
              }
              args = tmpargs;
            }
            sample = new Array();
            for (i = 0; i < args.length; i++) {
              sample = sample.concat(args[i]);
            }
            sampMean = jStat2.mean(sample);
            expVar = 0;
            for (i = 0; i < args.length; i++) {
              expVar = expVar + args[i].length * Math2.pow(jStat2.mean(args[i]) - sampMean, 2);
            }
            expVar /= args.length - 1;
            unexpVar = 0;
            for (i = 0; i < args.length; i++) {
              sampSampMean = jStat2.mean(args[i]);
              for (j = 0; j < args[i].length; j++) {
                unexpVar += Math2.pow(args[i][j] - sampSampMean, 2);
              }
            }
            unexpVar /= sample.length - args.length;
            return expVar / unexpVar;
          },
          anovaftest: function anovaftest() {
            var args = slice.call(arguments), df1, df2, n, i;
            if (isNumber(args[0])) {
              return 1 - jStat2.centralF.cdf(args[0], args[1], args[2]);
            }
            var anovafscore = jStat2.anovafscore(args);
            df1 = args.length - 1;
            n = 0;
            for (i = 0; i < args.length; i++) {
              n = n + args[i].length;
            }
            df2 = n - df1 - 1;
            return 1 - jStat2.centralF.cdf(anovafscore, df1, df2);
          },
          ftest: function ftest(fscore, df1, df2) {
            return 1 - jStat2.centralF.cdf(fscore, df1, df2);
          }
        });
        jStat2.extend(jStat2.fn, {
          anovafscore: function anovafscore() {
            return jStat2.anovafscore(this.toArray());
          },
          anovaftes: function anovaftes() {
            var n = 0;
            var i;
            for (i = 0; i < this.length; i++) {
              n = n + this[i].length;
            }
            return jStat2.ftest(this.anovafscore(), this.length - 1, n - this.length);
          }
        });
        jStat2.extend({
          qscore: function qscore() {
            var args = slice.call(arguments);
            var mean1, mean2, n1, n2, sd;
            if (isNumber(args[0])) {
              mean1 = args[0];
              mean2 = args[1];
              n1 = args[2];
              n2 = args[3];
              sd = args[4];
            } else {
              mean1 = jStat2.mean(args[0]);
              mean2 = jStat2.mean(args[1]);
              n1 = args[0].length;
              n2 = args[1].length;
              sd = args[2];
            }
            return Math2.abs(mean1 - mean2) / (sd * Math2.sqrt((1 / n1 + 1 / n2) / 2));
          },
          qtest: function qtest() {
            var args = slice.call(arguments);
            var qscore;
            if (args.length === 3) {
              qscore = args[0];
              args = args.slice(1);
            } else if (args.length === 7) {
              qscore = jStat2.qscore(args[0], args[1], args[2], args[3], args[4]);
              args = args.slice(5);
            } else {
              qscore = jStat2.qscore(args[0], args[1], args[2]);
              args = args.slice(3);
            }
            var n = args[0];
            var k = args[1];
            return 1 - jStat2.tukey.cdf(qscore, k, n - k);
          },
          tukeyhsd: function tukeyhsd(arrays) {
            var sd = jStat2.pooledstdev(arrays);
            var means = arrays.map(function(arr) {
              return jStat2.mean(arr);
            });
            var n = arrays.reduce(function(n2, arr) {
              return n2 + arr.length;
            }, 0);
            var results = [];
            for (var i = 0; i < arrays.length; ++i) {
              for (var j = i + 1; j < arrays.length; ++j) {
                var p = jStat2.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd, n, arrays.length);
                results.push([[i, j], p]);
              }
            }
            return results;
          }
        });
        jStat2.extend({
          normalci: function normalci() {
            var args = slice.call(arguments), ans = new Array(2), change;
            if (args.length === 4) {
              change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * args[2] / Math2.sqrt(args[3]));
            } else {
              change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * jStat2.stdev(args[2]) / Math2.sqrt(args[2].length));
            }
            ans[0] = args[0] - change;
            ans[1] = args[0] + change;
            return ans;
          },
          tci: function tci() {
            var args = slice.call(arguments), ans = new Array(2), change;
            if (args.length === 4) {
              change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math2.sqrt(args[3]));
            } else {
              change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[2].length - 1) * jStat2.stdev(args[2], true) / Math2.sqrt(args[2].length));
            }
            ans[0] = args[0] - change;
            ans[1] = args[0] + change;
            return ans;
          },
          significant: function significant(pvalue, alpha) {
            return pvalue < alpha;
          }
        });
        jStat2.extend(jStat2.fn, {
          normalci: function normalci(value, alpha) {
            return jStat2.normalci(value, alpha, this.toArray());
          },
          tci: function tci(value, alpha) {
            return jStat2.tci(value, alpha, this.toArray());
          }
        });
        function differenceOfProportions(p1, n1, p2, n2) {
          if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
            throw new Error("Proportions should be greater than 0 and less than 1");
          }
          var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
          var se = Math2.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
          return (p1 - p2) / se;
        }
        jStat2.extend(jStat2.fn, {
          oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {
            var z = differenceOfProportions(p1, n1, p2, n2);
            return jStat2.ztest(z, 1);
          },
          twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {
            var z = differenceOfProportions(p1, n1, p2, n2);
            return jStat2.ztest(z, 2);
          }
        });
      })(jStat, Math);
      jStat.models = function() {
        function sub_regress(exog) {
          var var_count = exog[0].length;
          var modelList = jStat.arange(var_count).map(function(endog_index) {
            var exog_index = jStat.arange(var_count).filter(function(i) {
              return i !== endog_index;
            });
            return ols(jStat.col(exog, endog_index).map(function(x) {
              return x[0];
            }), jStat.col(exog, exog_index));
          });
          return modelList;
        }
        function ols(endog, exog) {
          var nobs = endog.length;
          var df_model = exog[0].length - 1;
          var df_resid = nobs - df_model - 1;
          var coef = jStat.lstsq(exog, endog);
          var predict = jStat.multiply(exog, coef.map(function(x) {
            return [x];
          })).map(function(p) {
            return p[0];
          });
          var resid = jStat.subtract(endog, predict);
          var ybar = jStat.mean(endog);
          var SSE = jStat.sum(predict.map(function(f) {
            return Math.pow(f - ybar, 2);
          }));
          var SSR = jStat.sum(endog.map(function(y, i) {
            return Math.pow(y - predict[i], 2);
          }));
          var SST = SSE + SSR;
          var R2 = SSE / SST;
          return {
            exog,
            endog,
            nobs,
            df_model,
            df_resid,
            coef,
            predict,
            resid,
            ybar,
            SST,
            SSE,
            SSR,
            R2
          };
        }
        function t_test(model) {
          var subModelList = sub_regress(model.exog);
          var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
          var seBetaHat = subModelList.map(function(mod) {
            var SST = mod.SST;
            var R2 = mod.R2;
            return sigmaHat / Math.sqrt(SST * (1 - R2));
          });
          var tStatistic = model.coef.map(function(coef, i) {
            return (coef - 0) / seBetaHat[i];
          });
          var pValue = tStatistic.map(function(t) {
            var leftppf = jStat.studentt.cdf(t, model.df_resid);
            return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;
          });
          var c = jStat.studentt.inv(0.975, model.df_resid);
          var interval95 = model.coef.map(function(coef, i) {
            var d = c * seBetaHat[i];
            return [coef - d, coef + d];
          });
          return {
            se: seBetaHat,
            t: tStatistic,
            p: pValue,
            sigmaHat,
            interval95
          };
        }
        function F_test(model) {
          var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);
          var fcdf = function(x, n1, n2) {
            return jStat.beta.cdf(x / (n2 / n1 + x), n1 / 2, n2 / 2);
          };
          var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
          return { F_statistic, pvalue };
        }
        function ols_wrap(endog, exog) {
          var model = ols(endog, exog);
          var ttest = t_test(model);
          var ftest = F_test(model);
          var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
          model.t = ttest;
          model.f = ftest;
          model.adjust_R2 = adjust_R2;
          return model;
        }
        return { ols: ols_wrap };
      }();
      jStat.extend({
        buildxmatrix: function buildxmatrix() {
          var matrixRows = new Array(arguments.length);
          for (var i = 0; i < arguments.length; i++) {
            var array = [1];
            matrixRows[i] = array.concat(arguments[i]);
          }
          return jStat(matrixRows);
        },
        builddxmatrix: function builddxmatrix() {
          var matrixRows = new Array(arguments[0].length);
          for (var i = 0; i < arguments[0].length; i++) {
            var array = [1];
            matrixRows[i] = array.concat(arguments[0][i]);
          }
          return jStat(matrixRows);
        },
        buildjxmatrix: function buildjxmatrix(jMat) {
          var pass = new Array(jMat.length);
          for (var i = 0; i < jMat.length; i++) {
            pass[i] = jMat[i];
          }
          return jStat.builddxmatrix(pass);
        },
        buildymatrix: function buildymatrix(array) {
          return jStat(array).transpose();
        },
        buildjymatrix: function buildjymatrix(jMat) {
          return jMat.transpose();
        },
        matrixmult: function matrixmult(A, B) {
          var i, j, k, result, sum;
          if (A.cols() == B.rows()) {
            if (B.rows() > 1) {
              result = [];
              for (i = 0; i < A.rows(); i++) {
                result[i] = [];
                for (j = 0; j < B.cols(); j++) {
                  sum = 0;
                  for (k = 0; k < A.cols(); k++) {
                    sum += A.toArray()[i][k] * B.toArray()[k][j];
                  }
                  result[i][j] = sum;
                }
              }
              return jStat(result);
            }
            result = [];
            for (i = 0; i < A.rows(); i++) {
              result[i] = [];
              for (j = 0; j < B.cols(); j++) {
                sum = 0;
                for (k = 0; k < A.cols(); k++) {
                  sum += A.toArray()[i][k] * B.toArray()[j];
                }
                result[i][j] = sum;
              }
            }
            return jStat(result);
          }
        },
        regress: function regress(jMatX, jMatY) {
          var innerinv = jStat.xtranspxinv(jMatX);
          var xtransp = jMatX.transpose();
          var next = jStat.matrixmult(jStat(innerinv), xtransp);
          return jStat.matrixmult(next, jMatY);
        },
        regresst: function regresst(jMatX, jMatY, sides) {
          var beta = jStat.regress(jMatX, jMatY);
          var compile = {};
          compile.anova = {};
          var jMatYBar = jStat.jMatYBar(jMatX, beta);
          compile.yBar = jMatYBar;
          var yAverage = jMatY.mean();
          compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
          compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
          compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
          compile.anova.sse = jStat.sse(jMatY, jMatYBar);
          compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
          compile.anova.sst = jStat.sst(jMatY, yAverage);
          compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
          compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
          if (compile.anova.r2 < 0)
            compile.anova.r2 = 0;
          compile.anova.fratio = compile.anova.msr / compile.anova.mse;
          compile.anova.pvalue = jStat.anovaftest(compile.anova.fratio, jMatX[0].length - 1, jMatY.length - (jMatX[0].length - 1) - 1);
          compile.anova.rmse = Math.sqrt(compile.anova.mse);
          compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
          if (compile.anova.r2adj < 0)
            compile.anova.r2adj = 0;
          compile.stats = new Array(jMatX[0].length);
          var covar = jStat.xtranspxinv(jMatX);
          var sds, ts, ps;
          for (var i = 0; i < beta.length; i++) {
            sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i][i]));
            ts = Math.abs(beta[i] / sds);
            ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
            compile.stats[i] = [beta[i], sds, ts, ps];
          }
          compile.regress = beta;
          return compile;
        },
        xtranspx: function xtranspx(jMatX) {
          return jStat.matrixmult(jMatX.transpose(), jMatX);
        },
        xtranspxinv: function xtranspxinv(jMatX) {
          var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
          var innerinv = jStat.inv(inner);
          return innerinv;
        },
        jMatYBar: function jMatYBar(jMatX, beta) {
          var yBar = jStat.matrixmult(jMatX, beta);
          return new jStat(yBar);
        },
        residuals: function residuals(jMatY, jMatYBar) {
          return jStat.matrixsubtract(jMatY, jMatYBar);
        },
        ssr: function ssr(jMatYBar, yAverage) {
          var ssr2 = 0;
          for (var i = 0; i < jMatYBar.length; i++) {
            ssr2 += Math.pow(jMatYBar[i] - yAverage, 2);
          }
          return ssr2;
        },
        sse: function sse(jMatY, jMatYBar) {
          var sse2 = 0;
          for (var i = 0; i < jMatY.length; i++) {
            sse2 += Math.pow(jMatY[i] - jMatYBar[i], 2);
          }
          return sse2;
        },
        sst: function sst(jMatY, yAverage) {
          var sst2 = 0;
          for (var i = 0; i < jMatY.length; i++) {
            sst2 += Math.pow(jMatY[i] - yAverage, 2);
          }
          return sst2;
        },
        matrixsubtract: function matrixsubtract(A, B) {
          var ans = new Array(A.length);
          for (var i = 0; i < A.length; i++) {
            ans[i] = new Array(A[i].length);
            for (var j = 0; j < A[i].length; j++) {
              ans[i][j] = A[i][j] - B[i][j];
            }
          }
          return jStat(ans);
        }
      });
      jStat.jStat = jStat;
      return jStat;
    });
  }
});

// dep:jstat
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
var jstat_default = require_jstat();
export {
  jstat_default as default
};
//# sourceMappingURL=jstat.js.map
