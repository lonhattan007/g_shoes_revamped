<script setup lang="ts">
import { Shoe } from '@/types/Shoe';

defineProps<{
  shoe: Shoe;
}>();
</script>

<template>
  <div>
    <h3>{{ shoe.name ?? 'Unnamed Item' }}</h3>
    <h6>{{ shoe.description ?? '' }}</h6>
    <img :src="shoe.image" />
    <h4>{{ shoe.price ? `$ ${shoe.price}` : '' }}</h4>
  </div>
</template>
