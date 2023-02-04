<template>
  <div class="group relative">
    <div
      class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <img
        :src="event.image_url"
        :alt="event.title"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="flex w-full justify-between items-center mt-2">
      <h3 class="text-lg text-gray-900">
        <RouterLink :to="'/event/' + event.id">
          <span class="absolute inset-0"></span>
          {{ event.title }}
        </RouterLink>
      </h3>
      <span class="text-xs text-gray-500">
        {{ new Date(event.event_date).toDateString() }}
      </span>
    </div>
    <span class="text-xs font-semibold text-gray-600">
      {{ event.venue.name }}
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
