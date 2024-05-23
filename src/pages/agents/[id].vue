<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute } from 'vue-router/auto';
import type { AgentsResponse, MaisonsResponse } from '@/pocketbase-types';

const route = useRoute('/agents/[id]');
console.log('id:', route.params.id);

const maisonAgent = await pb.collection<AgentsResponse<{ maisons: MaisonsResponse[]}>>("agents").getOne(route.params.id, {
    expand: 'maisons'
});
console.log(maisonAgent);

</script>

<template>
    <div>
        <h1 class="text-xl">Offres dont il est responsable</h1>
        <div v-if="maisonAgent.expand">
        <ul>
            <li v-for="uneMaison of maisonAgent.expand.maisons" :key="uneMaison.id">
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
        </div>
    </div>
</template>

