<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { shoes } from '@data/shoes.json';
import ShoeInfo from '@/components/ShoeInfo.vue';
import { Shoe } from '@/types/Shoe';

const shoesInStock = ref<Shoe[]>([]);

onMounted(() => {
  shoesInStock.value = shoes;
  console.log(shoesInStock.value);
});
</script>

<template>
  <h1>Our shoes</h1>

  <div v-for="shoe in shoesInStock">
    <ShoeInfo :shoe="shoe" />
  </div>
</template>
