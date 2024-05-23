<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute } from 'vue-router/auto';
import MaisonCard from '@/components/MaisonCard.vue';

const route = useRoute('/offres/[id]');
console.log('id:', route.params.id);

const uneMaison = await pb.collection('maisons').getOne(route.params.id);
console.log(uneMaison);
</script>

<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="uneMaison" />
  </div>
</template>