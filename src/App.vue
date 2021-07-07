<template>
  <router-view />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mount() {
    navigator.serviceWorker.register("service-worker.js");
  },
});
</script>
