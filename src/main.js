import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function (Vue, {head}) {
    Vue.component("Layout", DefaultLayout);
    head.bodyAttrs = {
        class: settings.dark_mode ? "dark" : ""
    };
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap'
    })
}
