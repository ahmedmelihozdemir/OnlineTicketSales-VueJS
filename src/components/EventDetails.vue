<template>
  <div class="bg-red-100">
    <HeaderComponent class=""/>
    <div class="flex flex-row justify-center m-4">
      <div class="flex flex-col justify-center">
        <div class="m-4">
          <img :src="event.image_url" alt="" class="rounded-lg" />
          <h4 class="text-3xl font-semibold text-red-500">{{ event.title }}</h4>
        </div>
        <div class="m-4">
          <button
            @click="readMore = !readMore"
            class="bg-blue-300 p-2 rounded-2xl text-xs font-semibold"
          >
            Daha fazla oku
          </button>
          <p v-if="readMore">{{ event.description }}</p>
        </div>
        <div class="m-4">
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-red-400"> Mekan:</span>
            <span class="font-medium ml-4">{{ event.venue.name }}</span>
          </p>
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-red-400"> Adres:</span>
            <span class="font-medium ml-4">{{ event.venue.address }} </span>
          </p>
          <p class="grid grid-cols-2">
            <span class="text-xl font-semibold text-red-400"> Tarih:</span>
            <span class="font-medium ml-4">{{ date }} </span>
          </p>
        </div>
        <div class="">
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
            class="grid grid-cols-5 gap-2 m-4"
            v-for="catg in event.event_categories"
            :key="catg.id"
          >
            <div>{{ event.title }}</div>
            <div>{{ event.venue.name }}</div>
            <div>{{}}</div>
            <div class="flex flex-col">
              <span>{{ catg.name }}</span>
              <span>{{ catg.price }}£</span>
            </div>
            <button
              class="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
              @click="yaz(catg.id)"
            >
              <RouterLink
                :to="`/seats/${event.id}?category=${catg.id}?price=${catg.price}`"
              >
                Satın Al
              </RouterLink>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    seat: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedCategory: 0,
    };
  },
  methods: {
    getTime(time) {
      let date = new Date(time);
      console.log(date);
      if (isNaN(date)) {
        date = new Date(2023, 2, 17, 20, 0);
      }
      return (
        date.getHours() +
        ":" +
        (date.getMinutes() === 0 ? "00" : date.getMinutes())
      );
    },
    getMonth(month) {
      const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };
      return months[month];
    },
  },
};
</script> -->

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

const yaz = (val) => {
  console.log(val);
};

const readMore = ref(false);

const date = new Date(props.event.event_date);
</script>
