<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-center items-start">
      <h1 class="m-auto font-bold text-4xl p-4 text-blue-400">
        Koltuk Yerleri
      </h1>
      <div class="seat__map">
        <div class="seat__row" v-for="row in seatRows" :key="row">
          <div
            class="seat__col"
            v-for="col in seatCols"
            :class="seatStatus(row, col)"
            :key="col"
            @click="
              toggleSeat(row, col);
              getPrice(row, col);
            "
          ></div>
        </div>
      </div>

      <div class="seat__info m-4">
        Yerleri seçiniz:
        <div
          class="border border-black my-2 p-2 rounded-lg"
          v-for="seat in selectedSeats"
          :key="seat"
        >
          {{ `${seat.split(".")[0]} sıra ${seat.split(".")[1]} sütun` }}
        </div>
      </div>
      <h1 v-if="bought">Sipariş için teşekkürler!</h1>
      <div class="btn__container" v-else>
        <h2 class="m-2">{{ `Toplam: ${price} £.` }}</h2>
        <!-- <RouterLink :to="`/payment/?price=${price}/?seats=${seats}`"> -->
        <RouterLink :to="`/payment/?price=${price}/?seats=${seats}`">
          <button
            class="m-2 bg-blue-500 p-2 rounded-md hover:bg-blue-600"
            @click="
              () => {
                reserveSeats();
                submit();
              }
            "
          >
            Satın Al
          </button>
        </RouterLink>
        <button
          class="m-2 bg-blue-500 p-2 rounded-md hover:bg-blue-600"
          @click="submit"
        >
          Submit
        </button>
        <button
          class="m-2 bg-red-500 p-2 rounded-md hover:bg-red-600"
          @click.prevent="resetSeats"
        >
          İptal et
        </button>
        <router-link to="/">
          <button class="m-2 bg-yellow-500 p-2 rounded-md hover:bg-yellow-600">
            Anasayfaya Geri dön
          </button>
        </router-link>
        <!-- <button
          class="m-2 bg-blue-500 p-2 rounded-md"
          @click.prevent="randomSelection(row, col)"
        >
          Route
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: String,
      required: true,
    },
  },
  name: "seat-map",
  data() {
    return {
      price: 0,
      seats: [],
      seatRows: 10,
      seatCols: 10,
      reservedSeats: [
        "1.3",
        "2.6",
        "5.1",
        "9.2",
        "4.4",
        "4.9",
        "9.6",
        "7.8",
        "6.8",
        "10.7",
      ],
      selectedSeats: [],
      bought: false,
    };
  },
  methods: {
    seatIsReserved(seat) {
      return this.reservedSeats.indexOf(seat) !== -1;
    },
    seatIsSelected(seat) {
      return this.selectedSeats.indexOf(seat) !== -1;
    },
    seatStatus(row, col) {
      const seatId = `${row}.${col}`;
      const reserved = this.seatIsReserved(seatId);
      const selected = this.seatIsSelected(seatId);
      return {
        reserved,
        selected,
      };
    },
    toggleSeat(row, col) {
      const seatId = `${row}.${col}`;
      const seat = this.seatStatus(row, col);
      this.bought = false;
      if (!seat.reserved) {
        if (seat.selected) {
          const index = this.selectedSeats.indexOf(seatId);
          this.selectedSeats.splice(index, 1);
        } else {
          this.selectedSeats.push(seatId);
        }
      }
    },
    reserveSeats() {
      if (this.selectedSeats.length) {
        this.reservedSeats.push(...this.selectedSeats);
        this.resetSeats();
        this.bought = true;
        setTimeout(() => {
          this.bought = false;
        }, 2000);
      }
    },
    resetSeats() {
      this.selectedSeats = [];
    },
    randomSelection(row, col) {
      const seatId = `${row}.${col}`;
      const seat = this.seatStatus(row, col);
      this.bought = false;
      if (!seat.reserved) {
        if (seat.selected) {
          const index = this.selectedSeats.indexOf(seatId);
          this.selectedSeats.splice(index, 1);
        } else {
          this.selectedSeats.push(seatId);
        }
        console.log(this.$route.query.category.split("=")[1]);
      }
    },
    getPrice() {
      this.price = this.$route.query.category.split("=")[1];
      this.price = this.price * this.selectedSeats.length;
      this.seats = this.selectedSeats;
    },
    submit() {
      /* console.log("selected seats", this.selectedSeats.concat(this.seats));
      console.log("route", this.$route.query.category.split("=")[1]);
      console.log("asdddd", this.$route.query); */
      /* this.seats = this.seats.push(this.selectedSeats); */
      this.seats = this.selectedSeats;
    },
  },
};
</script>

<style>
.container,
.seat__row {
  display: flex;
  aling-items: flex-start;
  justify-content: flex-start;
}
.btn__container,
.seat__map {
  padding: 0 10px;
}
/* .btn__container button {
  margin: 0 10px;
} */
.seat__col {
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  margin: 5px;
  cursor: pointer;
  background-color: green;
  border-radius: 5px;
}
.seat__col.reserved {
  background-color: red;
  cursor: default;
}
.seat__col.selected {
  background-color: yellow;
}
</style>
