import { defineClientConfig } from "@vuepress/client";
import VmaGrid from "../../src/index";
import GridButton from "../../src/index";
import GridTextarea from "../../src/index";
import GridLoading from "../../src/index";
import GridCheckbox from "../../src/index";
import GridCheckboxGroup from "../../src/index";
import GridRadio from "../../src/index";
import GridRadioGroup from "../../src/index";
import GridIcon from "../../src/index";
import '../../styles/index.less';

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("VmaGridButton", GridButton);
        app.component("VmaGridTextarea", GridTextarea);
        app.component("VmaGridLoading", GridLoading);
        app.component("VmaGridIcon", GridIcon);
        app.component("VmaGridCheckbox", GridCheckbox);
        app.component("VmaGridCheckboxGroup", GridCheckboxGroup);
        app.component("VmaGridRadio", GridRadio);
        app.component("VmaGridRadioGroup", GridRadioGroup);
        app.component("VmaGrid", VmaGrid);
    },
});