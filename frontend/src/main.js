import { createApp } from 'vue'
import "./styles/main.scss";

import App from './App.vue'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import VueTheMask from 'vue-the-mask'

const app = createApp(App);


import Page from "@/components/Layout/Page.vue";
import Card from "@/components/Layout/Card.vue";
import Loading from "@/components/Layout/Loading.vue";
import Button from "@/components/Layout/Button.vue";
import Checkbox from "@/components/Form/Checkbox.vue";
import FormStep from "@/components/Form/FormStep.vue";
import Person from "@/components/Form/Person.vue";
import About from "@/components/Form/About.vue";
import Password from "@/components/Form/Password.vue";
import Revision from "@/components/Form/Revision.vue";
app.component("Page", Page);
app.component("Card", Card);
app.component("Loading", Loading);
app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("FormStep", FormStep);
app.component("Person", Person);
app.component("About", About);
app.component("Password", Password);
app.component("Revision", Revision);


app.use(VueSweetalert2);
app.use(VueTheMask)


app.mount("#app");
