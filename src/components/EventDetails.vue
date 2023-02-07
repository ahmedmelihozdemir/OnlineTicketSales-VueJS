<template>
  <div class="">
    <HeaderComponent />
    <div class="flex flex-row justify-center m-4">
      <div class="flex flex-col justify-center">
        <div class="m-4">
          <img :src="event.image_url" alt="" class="rounded-lg" />
          <h4 class="text-3xl font-semibold text-red-500 mt-2">
            {{ event.title }}
          </h4>
        </div>
        <div class="mx-4">
          <button
            @click="readMore = !readMore"
            class="bg-blue-300 p-2 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 hover:bg-blue-500"
          >
            <span class="material-symbols-outlined"> expand_more </span>
            Daha fazla oku
          </button>
          <p v-if="readMore" class="w-[480px] py-2">{{ event.description }}</p>
        </div>
        <div class="m-4">
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-orange-800"> Mekan:</span>
            <span class="font-medium ml-4">{{ event.venue.name }}</span>
          </p>
          <hr />
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-orange-800"> Adres:</span>
            <span class="font-medium ml-4">{{ event.venue.address }} </span>
          </p>
          <hr />
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-orange-800"> Tarih:</span>
            <span class="font-medium ml-4"
              >{{ date.toLocaleDateString() }}
            </span>
          </p>
          <hr />
        </div>
        <div class="mb-16">
          <h5 class="m-4 text-lg font-semibold">Liste</h5>
          <hr />
          <div class="grid grid-cols-5 m-4">
            <div class="text-lg font-semibold">Etkinlik</div>
            <div class="text-lg font-semibold">Mekan</div>
            <div class="text-lg font-semibold">Tarih</div>
            <div class="text-lg font-semibold">Kategori</div>
          </div>
          <hr />
          <div
            class="grid grid-cols-5 gap-2 m-4 mb-8"
            v-for="catg in event.event_categories"
            :key="catg.id"
          >
            <div>{{ event.title }}</div>
            <div>{{ event.venue.name }}</div>
            <div>{{ date.toLocaleDateString() }}</div>
            <div class="flex flex-col">
              <span>{{ catg.name }}</span>
              <span>{{ catg.price }}£</span>
            </div>
            <RouterLink
              :to="`/seats/${event.id}?category=${catg.id}/?price=${catg.price}`"
            >
              <button
                class="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                @click="yaz(catg.id)"
              >
                Satın Al
              </button>
            </RouterLink>
          </div>
          <hr />
        </div>
        <div class="flex items-center justify-between"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";
import HeaderComponent from "../components/layout/HeaderComponent.vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  seat: {
    type: Boolean,
    default: false,
  },
});

const selectedCategory = ref(0);

const readMore = ref(false);

const date = new Date(props.event.event_date);
</script>
