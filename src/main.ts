import { createApp } from "vue";
import App from "./App.vue";
import "./css/main.css";
import "./css/orderSummary.css";
import "./css/statsPreviewCard.css";
import "./css/threeColumnPreviewCard.css";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
