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

// node_modules/bahttext/src/index.js
var require_src = __commonJS({
  "node_modules/bahttext/src/index.js"(exports, module) {
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
    var defaultResult = "\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E1A\u0E32\u0E17\u0E16\u0E49\u0E27\u0E19";
    var singleUnitStrs = ["", "\u0E2B\u0E19\u0E36\u0E48\u0E07", "\u0E2A\u0E2D\u0E07", "\u0E2A\u0E32\u0E21", "\u0E2A\u0E35\u0E48", "\u0E2B\u0E49\u0E32", "\u0E2B\u0E01", "\u0E40\u0E08\u0E47\u0E14", "\u0E41\u0E1B\u0E14", "\u0E40\u0E01\u0E49\u0E32"];
    var placeNameStrs = ["", "\u0E2A\u0E34\u0E1A", "\u0E23\u0E49\u0E2D\u0E22", "\u0E1E\u0E31\u0E19", "\u0E2B\u0E21\u0E37\u0E48\u0E19", "\u0E41\u0E2A\u0E19", "\u0E25\u0E49\u0E32\u0E19"];
    function num2Word(nums) {
      let result = "";
      const len = nums.length;
      const maxLen = 7;
      if (len > maxLen) {
        const overflowIndex = len - maxLen + 1;
        const overflowNums = nums.slice(0, overflowIndex);
        const remainingNumbs = nums.slice(overflowIndex);
        return num2Word(overflowNums) + "\u0E25\u0E49\u0E32\u0E19" + num2Word(remainingNumbs);
      } else {
        for (let i = 0; i < len; i++) {
          const digit = nums[i];
          if (digit > 0) {
            result += singleUnitStrs[digit] + placeNameStrs[len - i - 1];
          }
        }
      }
      return result;
    }
    function grammarFix(str) {
      let result = str;
      result = result.replace(/หนึ่งสิบ/g, "\u0E2A\u0E34\u0E1A");
      result = result.replace(/สองสิบ/g, "\u0E22\u0E35\u0E48\u0E2A\u0E34\u0E1A");
      result = result.replace(/สิบหนึ่ง/g, "\u0E2A\u0E34\u0E1A\u0E40\u0E2D\u0E47\u0E14");
      return result;
    }
    function combine(baht, satang) {
      let result = "";
      if (baht === "" && satang === "") {
        result = defaultResult;
      } else if (baht !== "" && satang === "") {
        result = baht + "\u0E1A\u0E32\u0E17\u0E16\u0E49\u0E27\u0E19";
      } else if (baht === "" && satang !== "") {
        result = satang + "\u0E2A\u0E15\u0E32\u0E07\u0E04\u0E4C";
      } else {
        result = baht + "\u0E1A\u0E32\u0E17" + satang + "\u0E2A\u0E15\u0E32\u0E07\u0E04\u0E4C";
      }
      return result;
    }
    function bahttext(num) {
      if (!num)
        return defaultResult;
      if (typeof num === "boolean")
        return defaultResult;
      if (isNaN(Number(num)))
        return defaultResult;
      if (num < Number.MIN_SAFE_INTEGER)
        return defaultResult;
      if (num > Number.MAX_SAFE_INTEGER)
        return defaultResult;
      const positiveNum = Math.abs(num);
      const bahtStr = Math.floor(positiveNum).toString();
      const satangStr = (positiveNum % 1 * 100).toFixed(2).split(".")[0];
      const bahtArr = Array.from(bahtStr).map(Number);
      const satangArr = Array.from(satangStr).map(Number);
      let baht = num2Word(bahtArr);
      let satang = num2Word(satangArr);
      baht = grammarFix(baht);
      satang = grammarFix(satang);
      const result = combine(baht, satang);
      return num >= 0 ? result : "\u0E25\u0E1A" + result;
    }
    if (typeof module !== "undefined" && module.exports != null) {
      module.exports = {
        bahttext
      };
      exports.default = {
        bahttext
      };
    }
  }
});

// dep:bahttext
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
var bahttext_default = require_src();
export {
  bahttext_default as default
};
//# sourceMappingURL=bahttext.js.map
