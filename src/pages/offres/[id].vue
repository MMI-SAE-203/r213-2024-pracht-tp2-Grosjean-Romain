<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue';
import {useRoute} from 'vue-router/auto';

const route = useRoute('/offres/[id]');
console.log('id:', route.params.id);

const uneMaison = await fetch('/api/maisons/$.{id}');
</script>

<template>
  
  <ul>
    <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
      <RouterLink :to="{
        name: '/offres/[id]',
        params: {
        id: uneMaison.id
        }
      }" class="text-red-400 hover:text-red-600">
        {{ uneMaison.nomMaison }}
      </RouterLink>
    </li>
  </ul>
</template>