<template>
  <div class="flex flex-col px-2 sm:px-6 lg:px-20 2xl:px-80 py-6">
    <span class="m-auto text-2xl font-semibold p-4 text-blue-700"
      >BILETLER</span
    >
    <LoadingComponent v-if="events.eventLoading" />
    <div
      v-else-if="!events.eventLoading && events && events.events.length > 0"
      class="grid grid-cols-2 gap-4"
    >
      <div
        v-for="(event, idx) in events.events"
        :key="event.id"
        class="col-span-2 lg:col-span-1"
      >
        <EventCard :event="event" :idx="idx" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import EventCard from "../components/EventCard.vue";
import LoadingComponent from "../components/layout/LoadingComponent.vue";

const store = useStore();

const events = computed(() => store.state.events);

onMounted(() => {
  store.dispatch("events/getEvents");
});
</script>
