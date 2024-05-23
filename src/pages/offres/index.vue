<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
const maisonListe = await pb.collection('maisons').getFullList();
console.log (maisonListe);
</script>

<template>
    <h1 class="text-2xl">Liste des maisons</h1>
    <ul>
        <li v-for="uneMaison in maisonListe" :key="uneMaison.id">
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