<template>
  <!-- <div class="grid grid-cols-1 gap-4">
    <span class="text-4xl font-semibold">
      {{ event.title }}
    </span>
    <div class="flex flex-col space-y-1">
      <div class="flex items-center space-x-1 text-blue-300">
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current"
        >
          <path
            d="M11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789Z"
            fill="current"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z"
            fill="current"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3856 23.789L12 23C12.6139 23.7894 12.615 23.7885 12.615 23.7885L12.6169 23.7871L12.6231 23.7822L12.645 23.765C12.6638 23.7501 12.6909 23.7287 12.7258 23.7008C12.7954 23.6451 12.8961 23.5637 13.0233 23.4587C13.2776 23.2488 13.6385 22.944 14.0706 22.5599C14.9334 21.793 16.0867 20.7041 17.2433 19.419C18.397 18.1371 19.5731 16.639 20.4653 15.0528C21.3524 13.4758 22 11.7393 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 11.7393 2.64762 13.4758 3.53467 15.0528C4.42693 16.639 5.60303 18.1371 6.75671 19.419C7.91329 20.7041 9.06662 21.793 9.92939 22.5599C10.3615 22.944 10.7224 23.2488 10.9767 23.4587C11.1039 23.5637 11.2046 23.6451 11.2742 23.7008C11.3091 23.7287 11.3362 23.7501 11.355 23.765L11.3769 23.7822L11.3831 23.7871L11.3856 23.789ZM6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 11.2607 19.5226 12.6492 18.7222 14.0722C17.9269 15.486 16.853 16.8629 15.7567 18.081C14.6633 19.2959 13.5666 20.332 12.7419 21.0651C12.4576 21.3178 12.2065 21.5337 12 21.7078C11.7935 21.5337 11.5424 21.3178 11.2581 21.0651C10.4334 20.332 9.33671 19.2959 8.24329 18.081C7.14697 16.8629 6.07307 15.486 5.27783 14.0722C4.47738 12.6492 4 11.2607 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315Z"
            fill="current"
          />
        </svg>
        <span class="text-xs text-blue-300">
          {{ event.venue.address }}
        </span>
      </div>
      <div class="flex items-center space-x-1">
        <svg
          fill="current"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current"
        >
          <path
            d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z"
          />
        </svg>
        <span class="text-xs">{{
          isNaN(new Date(event.event_date))
            ? new Date(2023, 1, 17, 20, 0).toDateString()
            : new Date(event.event_date).toDateString()
        }}</span>
      </div>
    </div>
    <div
      class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <img
        :src="event.image_url"
        :alt="event.title"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <p>{{ event.description }}</p>
    <div
      v-if="!seat"
      class="relative w-full flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between rounded-xl border p-4 pl-7"
    >
      <div class="flex space-x-4">
        <div class="flex flex-col text-center justify-center">
          <span class="text-xl font-semibold">{{
            isNaN(new Date(event.event_date))
              ? new Date(2023, 1, 17, 20, 0).getDate()
              : new Date(event.event_date).getDate()
          }}</span>
          <span class="text-xs font-medium">{{
            isNaN(new Date(event.event_date))
              ? getMonth(new Date(2023, 1, 17, 20, 0).getMonth())
              : getMonth(new Date(event.event_date).getMonth())
          }}</span>
        </div>
        <div class="h-full border"></div>
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-sm">{{
            getTime(event.event_date)
          }}</span>
          <span>{{ event.venue.name }}</span>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row lg:space-x-4 space-y-2 md:items-end md:w-1/2 md:justify-end"
      >
        <div class="flex flex-col w-full">
          <label for="categories" class="block font-medium text-sm"
            >Select a category</label
          >
          <select
            id="categories"
            v-model="selectedCategory"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option :value="0" disabled>Select one</option>
            <option
              v-for="catg in event.event_categories"
              :key="catg.id"
              :value="catg.id"
            >
              {{ catg.name }} - {{ catg.price }}₺
            </option>
          </select>
        </div>
        <RouterLink
          :to="
            selectedCategory === 0
              ? ''
              : `/seats/${event.id}?category=${selectedCategory}`
          "
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full lg:w-auto h-min"
        >
          Continue
        </RouterLink>
      </div>
      <div
        class="absolute left-0 -top-2 md:top-0 w-3 h-full bg-blue-700 rounded-l-xl"
      ></div>
    </div>
  </div> -->

  <div>
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
console.log(date);
</script>
