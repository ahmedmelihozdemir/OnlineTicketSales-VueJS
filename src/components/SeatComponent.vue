<template>
  <LoadingComponent v-if="payment.paymentLoading" />
  <div
    v-else-if="!payment.paymentLoading && payment.seats"
    class="flex flex-col"
  >
    <h2 class="text-lg font-medium text-center lg:text-left">
      Please select a seat
    </h2>
    <div
      class="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4"
    >
      <div class="flex flex-col border rounded-lg w-min p-2 md:p-4 bg-blue-200">
        <div
          v-for="(row, index) in seats"
          :key="index"
          class="flex items-center justify-center"
        >
          <div
            v-for="seat in row"
            :key="seat.id"
            class="rounded-full border h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 m-2"
            :class="[
              seat.isBooked
                ? 'bg-blue-300'
                : selectedSeat === seat
                ? 'bg-yellow-500'
                : 'bg-blue-50 cursor-pointer',
            ]"
            @click="setSelected(seat)"
          ></div>
        </div>
      </div>
      <div
        class="relative w-full flex flex-row space-y-2 md:space-y-0 justify-between rounded-xl border p-4 pl-7"
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
            <span class="text-2xl font-medium">{{ event.title }}</span>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="h-full border border-dashed"></div>
          <div class="flex flex-col justify-center">
            <span class="text-sm font-medium">Seat Information</span>
            <span>Line: {{ selectedSeat ? selectedSeat.row : "-" }}</span>
            <span>Seat: {{ selectedSeat ? selectedSeat.seat : "-" }}</span>
          </div>
        </div>
        <div
          class="absolute left-0 -top-2 md:top-0 w-3 h-full bg-blue-700 rounded-l-xl"
        ></div>
      </div>
    </div>
    <RouterLink
      v-show="selectedSeat"
      :to="'/payment/' + ticket + '?category=' + category"
      class="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center w-auto md:w-min"
      >Pay</RouterLink
    >
  </div>
</template>

<script>
import { computed } from "vue";
import { mapActions, useStore } from "vuex";
import { useRoute } from "vue-router";
import LoadingComponent from "./LoadingComponent.vue";
export default {
  components: { LoadingComponent },
  props: {
    category: {
      type: Number,
      required: true,
    },
    event: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const payment = computed(() => store.state.payment);
    store.dispatch("payment/getSeats", {
      ticket: route.params.id,
      category: route.query.category,
    });
    return {
      payment,
      ticket: route.params.id,
    };
  },
  data() {
    return {
      selectedSeat: null,
    };
  },
  computed: {
    seats() {
      let data = {};
      this.payment.seats.forEach((element) => {
        let row = element.row;
        if (data[row]) {
          data[row].push(element);
        } else {
          data[row] = [];
          data[row].push(element);
        }
      });
      return data;
    },
  },
  methods: {
    ...mapActions({ assignSelectedSeat: "payment/assignSelectedSeat" }),

    async setSelected(seat) {
      if (!seat.isBooked) {
        this.selectedSeat = seat;
        await this.assignSelectedSeat(seat);
      }
    },
    getTime(time) {
      let date = new Date(time);
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
</script>
