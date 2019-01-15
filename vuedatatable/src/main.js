import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { ClientTable } from "vue-tables-2";
import { ServerTable } from "vue-tables-2";

Vue.use(ServerTable);
Vue.use(ClientTable);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
