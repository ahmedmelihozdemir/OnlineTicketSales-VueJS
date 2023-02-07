<template>
  <div>
    <LoginView />
  </div>
</template>

<script setup>
import LoginView from "./LoginView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import LoadingComponent from "../components/layout/LoadingComponent.vue";
const route = useRoute();
const store = useStore();
const payment = computed(() => store.state.payment);
const events = computed(() => store.state.events);
store.dispatch("events/getEventById", route.params.id);
</script>

<style lang="scss" scoped></style>
