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
import PaymentComponent from "../components/PaymentComponent.vue";
import PaymentCard from "../components/PaymentCard.vue";
const route = useRoute();
const store = useStore();
const payment = computed(() => store.state.payment);
const events = computed(() => store.state.events);
store.dispatch("events/getEventById", route.params.id);
</script>

<style lang="scss" scoped></style>
