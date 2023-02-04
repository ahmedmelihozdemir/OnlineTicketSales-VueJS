<template>
  <div>
    <header class="">
      <div class="hidden md:flex justify-around items-center bg-gray-800">
        <div class="flex gap-5 mx-8">
          <div class="text-white flex items-center p-1 hover:cursor-pointer">
            <span class="material-symbols-outlined mx-1"> chat_bubble </span>TR
          </div>
          <div class="text-white flex items-center p-1 hover:cursor-pointer">
            <span class="material-symbols-outlined mx-1"> public </span>Tüm
            Türkiye
          </div>
        </div>
        <div class="flex gap-5 mx-8">
          <div class="text-white flex items-center hover:cursor-pointer">
            <span class="material-symbols-outlined mx-1"> redeem </span>Hediye
            Kart
          </div>
          <div class="text-white hover:cursor-pointer">Aylık Dergi</div>
          <div class="text-white hover:cursor-pointer">Blog</div>
          <div class="text-white hover:cursor-pointer">Yardım</div>
        </div>
      </div>
    </header>

    <header class="">
      <nav
        class="bg-[#0155B1] flex flex-col items-center shadow-sm  md:flex-row justify-around "
      >
        <RouterLink to="/" class="ml-8 p-2">
          <img
            src="https://www.biletix.com/static/images/btx-logo.svg"
            alt=""
          />
        </RouterLink>
        <div class="flex xl:flex items-center gap-6 lg:justify-center">
          <div class="hidden md:flex gap-6 items-center">
            <div
              class="hover:cursor-pointer text-white font-medium hover:bg-blue-800"
            >
              Müzik
            </div>
            <div
              class="hover:cursor-pointer text-white font-medium hover:bg-blue-800"
            >
              Sahne
            </div>
            <div
              class="hover:cursor-pointer text-white font-medium hover:bg-blue-800"
            >
              Spor
            </div>
            <div
              class="hover:cursor-pointer text-white font-medium hover:bg-blue-800"
            >
              Aile
            </div>
            <div
              class="hover:cursor-pointer text-white font-medium hover:bg-blue-800"
            >
              Eğitim & Fazlası
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="relative">
              <input
                type="search"
                placeholder="Etkinlik, sanatçı ya da mekan ara"
                class="border border-black p-3 rounded-md outline-none w-80 pr-10"
              />
              <span
                class="material-symbols-outlined text-black absolute right-2 top-0 bottom-0 flex items-center justify-center hover:cursor-pointer"
              >
                search
              </span>
            </div>
          </div>
        </div>
        <RouterLink
          to="/login"
          class="text-white font-medium flex justify-center items-center p-2"
        >
          <span class="material-symbols-outlined mx-1"> person </span>Giris
          Yap</RouterLink
        >
      </nav>
    </header>

    <header class="flex justify-around items-center shadow-xl p-2">
      <div class="md:flex  lg:flex flex-row items-start justify-between gap-8 mx-8">
        <div class="flex items-center">
          <span class="material-symbols-outlined"> visibility </span>
          <select name="" id="" class="border border-black p-1 m-2">
            <option value="" selected class="text-blue-700">
              Tüm kategoriler
            </option>
            <option value="" class="text-blue-700">Müzik</option>
            <option value="" class="text-blue-700">Spor</option>
            <option value="" class="text-blue-700">Sahne</option>
            <option value="" class="text-blue-700">Aile</option>
            <option value="" class="text-blue-700">
              Eğitim & Daha Fazlası
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"> calendar_today </span>
          <select name="" id="" class="border border-black p-1 m-2">
            <option value="" selected class="text-blue-700">
              Tüm Tarihler
            </option>
            <option value="" class="text-blue-700">Bugün</option>
            <option value="" class="text-blue-700">Haftasonu</option>
            <option value="" class="text-blue-700">Önümüzdeki Haftasonu</option>
            <option value="" class="text-blue-700">Bu Hafta</option>
            <option value="" class="text-blue-700">Önümüzdeki 14 Gün</option>
            <option value="" class="text-blue-700">Önümüzdeki 30 Gün</option>
            <option value="" class="text-blue-700">Tarih Aralığı</option>
          </select>
        </div>
        <div class="flex items-center">
          <span class="material-symbols-outlined"> calendar_today </span>
          <select name="" id="" class="border border-black p-1 m-2">
            <option value="" selected class="text-blue-700">
              Tüm kategoriler
            </option>
            <option value="" class="text-blue-700">Müzik</option>
            <option value="" class="text-blue-700">Spor</option>
            <option value="" class="text-blue-700">Sahne</option>
            <option value="" class="text-blue-700">Aile</option>
            <option value="" class="text-blue-700">
              Eğitim & Daha Fazlası
            </option>
          </select>
        </div>
        <button class="bg-blue-700 p-2 text-white rounded-md">GIT</button>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped lang="scss"></style>
