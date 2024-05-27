<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
const agentsListe = await pb.collection("agents").getFullList();
console.log(agentsListe);
</script>

<template>
    <h1 class="text-2xl">Liste des agents</h1>
    <ul>
        <li v-for="unAgent of agentsListe" :key="unAgent.id">
            <RouterLink :to="{
                name: '/agents/[id]',
                params: {
                    id: unAgent.id
                }
            }" class="text-blue-400 hover:text-blue-600">
                {{ unAgent.nom + ' ' + unAgent.prenom}}
            </RouterLink>
        </li>
    </ul>
</template>