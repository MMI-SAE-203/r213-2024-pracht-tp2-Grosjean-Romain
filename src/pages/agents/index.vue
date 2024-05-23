<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
const agentsListe = await pb.collection('maisons').getFullList();
console.log(agentsListe);
</script>

<template>
    <h1 class="text-2xl">Liste des agents</h1>
    <ul>
        <li v-for="Agent in agentsListe" :key="Agent.id">
            <RouterLink :to="{
                name: '/agents/[id]',
                params: {
                    id: Agent.id
                }
            }" class="text-blue-400 hover:text-blue-600">
                {{ Agent.nomAgent }}
            </RouterLink>
        </li>
    </ul>
</template>