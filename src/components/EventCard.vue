<template>
  <div class="group">
    <div
      class="overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <RouterLink :to="'/event/' + event.id">
        <img
          :src="event.image_url"
          :alt="event.title"
          class="hover:cursor-pointer h-[280px] w-full object-cover object-center"
        />
      </RouterLink>
    </div>
    <div class="flex w-full justify-between items-center mt-2 hover:underline">
      <h5 class="text-lg text-gray-900">
        <RouterLink :to="'/event/' + event.id">
          <span class="inset-0"></span>
          {{ event.title }}
        </RouterLink>
      </h5>
      <span class="text-xs text-gray-500">
        {{ new Date(event.event_date).toLocaleDateString() }}
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
