<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute } from 'vue-router/auto';
import type { AgentsResponse, MaisonsResponse } from '@/pocketbase-types';

const route = useRoute('/agents/[id]');
console.log('id:', route.params.id);

//const oneAgent = await pb.collection('agents').getOne(route.params.id);

const agentWithMaison = await pb.collection<AgentsResponse<{maisons_via_agent: MaisonsResponse[]}>>("agents").getOne(route.params.id, {
    expand: "maisons_via_agent"
});
console.log("agent et ses maisons", agentWithMaison);

</script>

<template>
    <div>
        <h1 class="text-xl">Offres dont {{agentWithMaison.prenom}} est responsable</h1>
        <div v-if="agentWithMaison.expand">
            <ul>
                <li v-for="uneMaison of agentWithMaison.expand.maisons_via_agent" :key="uneMaison.id">
                    <RouterLink :to="{
                    name: '/offres/[id]',
                    params: {
                        id: uneMaison.id
                    }
                }" class="text-red-400 hover:text-red-600">
                        {{uneMaison.nomMaison}}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

