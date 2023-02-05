<template>
  <div class="flex flex-col m-4 p-4">
    <h4 class="font-semibold text-xl text-blue-500 m-auto">
      You Are Buying A Ticket
    </h4>
    <div class="flex w-80 m-auto my-6">
      <form action="" class="flex flex-col justify-center">
        <label
          for=""
          class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
          >Name
          <input
            type="text "
            class="border border-black rounded-md m-2 p-1"
            v-model="name"
          />
        </label>
        <label
          for=""
          class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
          >Surname
          <input
            type="text "
            class="border border-black rounded-md m-2 p-1"
            v-model="surname"
          />
        </label>
        <label
          for=""
          class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
          >Email
          <input
            type="mail "
            class="border border-black rounded-md m-2 p-1"
            v-model="email"
          />
        </label>
        <label
          for=""
          class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
          >Credit Card Number
          <input
            type="number "
            class="border border-black rounded-md m-2 p-1"
            v-model="creditCardNumber"
          />
        </label>
        <div class="">
          <label
            for=""
            class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
            >Credit Card Expiration Month
            <input
              type="number"
              class="border border-black rounded-md m-2 p-1 w-16"
              v-model="creditCardExpirationMonth"
            />
          </label>
          <label
            for=""
            class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
            >Credit Card Expiration Year
            <input
              type="number"
              class="border border-black rounded-md m-2 p-1 w-16"
              v-model="creditCardExpirationYear"
            />
          </label>
        </div>
        <label
          for=""
          class="m-2 flex items-center justify-between gap-14 text-base font-medium text-yellow-800 shadow-sm"
          >Credit Card CVV
          <input
            type="text "
            class="border border-black rounded-md m-2 p-1"
            v-model="creditCardCVV"
          />
        </label>
        <button
          class="bg-blue-900 p-2 rounded-lg w-20 m-auto hover:bg-blue-500"
          @click.prevent="store.dispatch('payment/postPayment', {event, name, surname, email, creditCardNumber, creditCardExpirationMonth, creditCardExpirationYear, creditCardCVV})"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const name = ref("");
const surname = ref("");
const email = ref("");
const creditCardNumber = ref("");
const creditCardExpirationMonth = ref("");
const creditCardExpirationYear = ref("");
const creditCardCVV = ref("");
</script>

<style lang="scss" scoped></style>
