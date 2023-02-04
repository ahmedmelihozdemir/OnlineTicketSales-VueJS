<template>
  <div class="px-2 sm:px-6 lg:px-20 2xl:px-80 py-6">
    <LoadingComponent v-if="events.eventLoading" />
    <EventDetails
      v-else-if="!events.eventLoading && events.event"
      :event="events.event"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import EventDetails from "../components/EventDetails.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

export default {
  components: { EventDetails,  LoadingComponent },
  setup() {
    const route = useRoute();
    const store = useStore();
    const events = computed(() => store.state.events);
    store.dispatch("events/getEventById", route.params.id);
    return {
      events,
    };
  },
  unmounted() {
    const store = useStore();
    store.dispatch("events/clearEvent");
  },
};
</script> 

<!-- <script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, onUnmounted } from "vue";
import EventDetails from "../components/EventDetails.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

const route = useRoute();
const store = useStore();
const events = computed(() => store.state.events);
store.dispatch("events/getEventById", route.params.id);

onUnmounted(() => {
  store.dispatch("events/clearEvent");
});
</script> -->
