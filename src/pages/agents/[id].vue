<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute } from 'vue-router/auto';
import { AgentResponse, MaisonResponse } from '@/pocketbase-types';

const route = useRoute('/agents/[id]');
console.log('id:', route.params.id);

const maisonAgent = await pb.collection<AgentResponse<{maisons:MaisonResponse[]}>>('agents').getOne(route.params.id)
console.log(maisonAgent);
</script>

<template>
    <div>
        <h1 class="text-xl">Offres gérer par un agent</h1>
        <AgentResponse v-bind="maisonAgent" />
    </div>
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

