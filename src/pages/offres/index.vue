<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

const maisonsListe = await pb.collection('maisons').getFullList();
</script>

<template>
    <h1 class="text-2xl">Bonjour monde !</h1>
    <MaisonCard v-for="maisonsRecord in maisonsListe" :key="maisonsRecord.id" v-bind="maisonsRecord" />
</template>