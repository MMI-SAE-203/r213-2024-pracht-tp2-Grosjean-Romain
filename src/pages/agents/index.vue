<script setup lang="ts">
</script>

<template>
    <ul>
        <li v-for="agent in agentsListe" :key="agent.id">
            <RouterLink :to="{
                name: 'agent-details',
                params: {
                    id: agent.id
                }
            }" class="text-blue-400 hover:text-blue-600">
                {{ agent.nomAgent }}
            </RouterLink>
        </li>
    </ul>
</template>