<template>
  <LoadingComponent v-if="payment.paymentLoading || events.eventLoading" />
  <div
    v-else-if="events.event && payment.selectedSeat"
    class="grid grid-cols-2 gap-4 px-2 sm:px-6 lg:px-20 2xl:px-80 py-6"
  >
    <h1 class="col-span-2 text-2xl font-semibold">Payment</h1>
    <PaymentComponent
      :payment="payment"
      :ticket="ticket"
      :category="category"
      class="col-span-2 md:col-span-1"
    />
    <PaymentCard
      :event="events.event"
      :seat="payment.selectedSeat"
      class="col-span-2 md:col-span-1"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import LoadingComponent from "../components/LoadingComponent.vue";
import PaymentComponent from "../components/PaymentComponent.vue";
import PaymentCard from "../components/PaymentCard.vue";
const route = useRoute();
const store = useStore();
const payment = computed(() => store.state.payment);
const events = computed(() => store.state.events);
store.dispatch("events/getEventById", route.params.id);
</script>
