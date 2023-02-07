<template>
  <div class="flex justify-center flex-col items-center my-6 p-3">
    <h5 class="text-xl font-medium text-orange-500 p-4">
      You have selected
      <span class="font-bold text-blue-600">{{ splitSeats.length }} </span>
      tickets. These are worth
      <span class="font-bold text-blue-600"> {{ totalPrice }}</span> £. Selected
      seats <span class="font-bold text-blue-600">[{{ seats }}] </span>
      You can make the payment below.
    </h5>
    <div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="flex flex-col items-start"
      >
        <div class="flex flex-col">
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >First Name</label
              >
              <Field
                name="firstName"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.firstName }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.firstName }}
            </span>
          </div>
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >Last Name</label
              >
              <Field
                name="lastName"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.lastName }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.lastName }}
            </span>
          </div>
        </div>

        <div>
          <div
            class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
          >
            <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
              >Email</label
            >
            <Field
              name="email"
              type="text"
              class="border border-black rounded-md m-2 p-1"
              :class="{ 'is-invalid': errors.email }"
            />
          </div>
          <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
            {{ errors.email }}
          </span>
        </div>

        <div class="form-row">
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >Credit Card Number</label
              >
              <Field
                name="creditCardNumber"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.creditCardNumber }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.creditCardNumber }}
            </span>
          </div>
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >Credit Card Expiration Month</label
              >
              <Field
                name="creditCardExpirationMonth"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.creditCardExpirationMonth }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.creditCardExpirationMonth }}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >Credit Card Expiration Year</label
              >
              <Field
                name="creditCardExpirationYear"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.creditCardExpirationYear }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.creditCardExpirationYear }}
            </span>
          </div>
          <div>
            <div
              class="grid grid-flow-col grid-cols-2 items-center justify-between gap-8"
            >
              <label class="m-2 text-base font-medium text-yellow-800 shadow-sm"
                >Credit Card CVV</label
              >
              <Field
                name="creditCardCVV"
                type="text"
                class="border border-black rounded-md m-2 p-1"
                :class="{ 'is-invalid': errors.creditCardCVV }"
              />
            </div>
            <span class="text-red-500 font-semibold rounded-md mb-6 p-1">
              {{ errors.creditCardCVV }}
            </span>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <Field
              name="acceptTerms"
              type="checkbox"
              id="acceptTerms"
              value="true"
              class="form-check-input"
              :class="{ 'is-invalid': errors.acceptTerms }"
            />
            <label for="acceptTerms" class="">Accept Terms & Conditions</label>
          </div>
          <div class="text-red-500 font-semibold rounded-md mb-6 p-1">
            {{ errors.acceptTerms }}
          </div>
        </div>
        <div class="flex items-center gap-8 m-auto">
          <!-- <RouterLink
            class="bg-blue-500 p-2 rounded-lg w-20 m-auto hover:bg-blue-600 ml-2"
            to="/"
          >
            <button type="submit" class="">Register</button>
          </RouterLink> -->
          <RouterLink class="" to="/">
            <button
              @click="onSubmit"
              class="bg-blue-500 p-2 rounded-lg w-20 m-auto hover:bg-blue-600"
            >
              Buy
            </button>
          </RouterLink>
          <button
            type="reset"
            class="bg-red-500 p-2 rounded-lg w-20 m-auto hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useRoute } from "vue-router";

const route = useRoute();

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  acceptTerms: Yup.string().required("Accept Ts & Cs is required"),
  creditCardNumber: Yup.string()
    .required("Credit Card Number is required")
    .matches(
      /^\d{4}-\d{4}-\d{4}-\d{4}$/,
      "Credit Card Number must be a valid number in the format XXXX-XXXX-XXXX-XXXX"
    ),
  creditCardExpirationMonth: Yup.string()
    .required("Credit Card Expiration Month is required")
    .matches(
      /^(0[1-9]|1[012])$/,
      "Credit Card Expiration Month must be a valid month in the format MM"
    ),
  creditCardExpirationYear: Yup.string()
    .required("Credit Card Expiration Year is required")
    .matches(
      /^\d{4}$/,
      "Credit Card Expiration Year must be a valid year in the format YYYY"
    ),
  creditCardCVV: Yup.string()
    .required("Credit Card CVV is required")
    .matches(
      /^\d{3}$/,
      "Credit Card CVV must be a valid number in the format XXX"
    ),
});

function onSubmit(values) {
  /* schema
    .validate(values, { abortEarly: true })
    .then((values) => {
      alert(
        "SUCCESS)\n\n" +
          "code: 201" +
          "\n\n" +
          "status: " +
          "succes" +
          "\n\n" +
          "message: " +
          "Your order has been placed successfully"
      );
    })
    .catch((err) => {
      alert("ERROR");
    }); */
  alert(
    "SUCCESS\n\n" +
      "code: 201" +
      "\n\n" +
      "status: " +
      "succes" +
      "\n\n" +
      "message: " +
      "Your order has been placed successfully"
  );
}

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const creditCardNumber = ref("");
const creditCardExpirationMonth = ref("");
const creditCardExpirationYear = ref("");
const creditCardCVV = ref("");
const acceptTerms = ref("");

/* console.log("Route", route.fullPath); */
/* console.log("Price:", route.fullPath.split("/")[2].split("=")[1]);
console.log("Seats:", route.fullPath.split("/")[3].split("=")[1]); */

const price = route.fullPath.split("/")[2].split("=")[1];
const seats = route.fullPath.split("/")[3].split("=")[1];

const splitSeats = seats.split(",");
const totalPrice = price * 1;
</script>

<style scoped></style>
