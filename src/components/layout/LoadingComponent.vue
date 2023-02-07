<template>
  <div class="page-loader" v-if="isLoading">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<style lang="scss" scoped>
$colors: #B99095, #FCB5AC, #B5E5CF, #3D5B59;
// -----------------------------------------------------
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #603f8b8f;
  z-index: 999;
}
// -----------------------------------------------------
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}
// -----------------------------------------------------
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>