<template>
  <form @submit.prevent="submit()">
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1">
        <label
          for="name"
          class="block text-sm font-medium"
          :class="name === '' && error ? 'text-red-700' : 'text-gray-700'"
        >
          Name
        </label>
        <input
          id="name"
          v-model="name"
          type="text"
          autocomplete="given-name"
          class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :class="name === '' && error ? 'border-red-500' : 'border-gray-300'"
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label
          for="surname"
          class="block text-sm font-medium"
          :class="surname === '' && error ? 'text-red-700' : 'text-gray-700'"
        >
          Surname
        </label>
        <input
          id="surname"
          v-model="surname"
          type="text"
          autocomplete="family-name"
          class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :class="
            surname === '' && error ? 'border-red-500' : 'border-gray-300'
          "
        />
      </div>
      <div class="col-span-2 lg:col-span-1">
        <label
          for="email"
          class="block text-sm font-medium"
          :class="email === '' && error ? 'text-red-700' : 'text-gray-700'"
        >
          Email
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          autocomplete="e-mail"
          class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :class="email === '' && error ? 'border-red-500' : 'border-gray-300'"
        />
      </div>
      <div class="col-span-2 lg:col-span-1">
        <label
          for="ccNumber"
          class="block text-sm font-medium"
          :class="cardNumber === '' && error ? 'text-red-700' : 'text-gray-700'"
        >
          Credit Card Number
        </label>
        <input
          id="ccNumber"
          v-model="cardNumber"
          type="text"
          autocomplete="credit-card-number"
          class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :class="
            cardNumber === '' && error ? 'border-red-500' : 'border-gray-300'
          "
          @input="formatCardNumber(cardNumber)"
        />
      </div>
      <div class="col-span-2 grid grid-cols-12 gap-4 items-end">
        <div class="col-span-4 md:col-span-3 xl:col-span-2">
          <label
            for="ccExpMonth"
            class="block text-sm font-medium"
            :class="
              ccExpMonth === '' && error ? 'text-red-700' : 'text-gray-700'
            "
          >
            Exp. Month
          </label>
          <input
            id="ccExpMonth"
            v-model="ccExpMonth"
            type="number"
            min="1"
            max="12"
            autocomplete="credit-card-exp-month"
            class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :class="
              ccExpMonth === '' && error ? 'border-red-500' : 'border-gray-300'
            "
          />
        </div>
        <div class="col-span-4 md:col-span-3 xl:col-span-2">
          <label
            for="ccExpYear"
            class="block text-sm font-medium"
            :class="
              ccExpYear === '' && error ? 'text-red-700' : 'text-gray-700'
            "
          >
            Exp. Year
          </label>
          <input
            id="ccExpYear"
            v-model="ccExpYear"
            type="number"
            min="23"
            max="33"
            autocomplete="credit-card-exp-year"
            class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :class="
              ccExpYear === '' && error ? 'border-red-500' : 'border-gray-300'
            "
          />
        </div>
        <div class="col-span-4 md:col-span-3 xl:col-span-2">
          <label
            for="ccv"
            class="block text-sm font-medium"
            :class="cvv === '' && error ? 'text-red-700' : 'text-gray-700'"
          >
            CVV
          </label>
          <input
            id="ccv"
            v-model="cvv"
            type="number"
            min="100"
            max="999"
            autocomplete="credit-card-exp-year"
            class="px-4 py-2 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :class="cvv === '' && error ? 'border-red-500' : 'border-gray-300'"
          />
        </div>
      </div>
      <button
        type="button"
        class="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center w-auto"
        @click="submit()"
      >
        Submit
      </button>
      <span v-if="error" class="flex text-red-500 items-end">
        {{ errorMessage }}
      </span>
      <div
        v-if="payment.payment && payment.payment.code === 201"
        class="col-span-2 border border-green-400 bg-green-300 text-white p-4 rounded-xl shadow"
      >
        Your ticket created succesfully! Enjoy your event. You are redirecting
        to the home page...
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    payment: {
      type: Object,
      required: true,
    },
    ticket: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      cardNumber: "",
      ccExpMonth: "",
      ccExpYear: "",
      cvv: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions({
      postPayment: "payment/postPayment",
      clearAll: "payment/clearAll",
    }),
    formatCardNumber(value) {
      const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
      const onlyNumbers = value.replace(/[^\d]/g, "");

      this.cardNumber = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter((group) => !!group).join(" ")
      );
    },
    async submit() {
      const self = this;
      let re16digit = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
      let ccnTest = this.cardNumber.replace(/\s+/g, "");

      if (this.validate()) {
        this.error = true;
        this.errorMessage = "Please fill the blank fields!";
        return false;
      } else if (ccnTest.search(re16digit) == -1) {
        this.error = true;
        this.errorMessage = "Please insert a valid Credit Card Number!";
        return false;
      } else {
        this.error = false;
      }
      let data = {
        eventId: parseInt(this.ticket),
        eventCategoryId: parseInt(this.category),
        seats: [this.payment.selectedSeat.id],
        customer_name: this.name,
        customer_surname: this.surname,
        customer_email: this.email,
        cc_number: this.cardNumber,
        cc_exp_month: parseInt(this.ccExpMonth),
        cc_exp_year: parseInt(this.ccExpYear),
        cc_exp_cvv: parseInt(this.cvv),
      };
      console.log(data);
      await this.postPayment(data);
      if (this.payment.error) {
        this.error = true;
        this.errorMessage = this.payment.error;
        return false;
      }
      setTimeout(function () {
        self.clearAll();
        self.router.push({ path: "/" });
      }, 3000);
    },
    validate() {
      return (
        this.name === "" ||
        this.surname === "" ||
        this.email === "" ||
        this.cardNumber === "" ||
        this.ccExpMonth === "" ||
        this.ccExpYear === "" ||
        this.cvv === ""
      );
    },
  },
};
</script>
