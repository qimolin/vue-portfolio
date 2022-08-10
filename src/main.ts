import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faWordpress,
  faNodeJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

library.add(
  faHeart,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTwitter,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faWordpress,
  faNodeJs,
  faDocker
);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
