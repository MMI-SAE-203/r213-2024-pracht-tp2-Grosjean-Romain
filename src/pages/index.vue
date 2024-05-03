<script setup lang="ts">
import type { MaisonRecord } from '@/types'

const maisonsListe:MaisonRecord[] = [
  {
    "adresse": "2821 Lake Sevilla, Palm Harbor, TX",
    "collectionId": "sidpkt9hmbfwoeb",
    "collectionName": "maison",
    "created": "2023-05-01 14:00:54.598Z",
    "favori": false,
    "id": "64l3n8nar836i5j",
    "image": "pexels_binyamin_mellish_106399_bnHdy6H03e.jpg",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Beverly Springfield",
    "prix": 2700,
    "surface": 45,
    "updated": "2024-04-02 13:49:11.230Z"
  },
  {
    "adresse": "2699 Green Valley, Highland Lake",
    "collectionId": "sidpkt9hmbfwoeb",
    "collectionName": "maison",
    "created": "2024-04-02 13:48:47.643Z",
    "favori": true,
    "id": "lo831zeg10hpm9y",
    "image": "pexels_binyamin_mellish_106399_YpoLMcQJsi.png",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Palm Harbor",
    "prix": 2095,
    "surface": 42,
    "updated": "2024-04-02 13:48:47.643Z"
  },
  {
    "adresse": "909 Woodland St, Michigan, IN",
    "collectionId": "sidpkt9hmbfwoeb",
    "collectionName": "maison",
    "created": "2024-04-02 13:52:17.823Z",
    "favori": false,
    "id": "s1zuhj19x8eb242",
    "image": "faulkner_ave_ZHz3nhmJzC.png",
    "nbChambres": 4,
    "nbSdb": 3,
    "nomMaison": "Faulkner Ave",
    "prix": 4550,
        "surface": 80,
        "updated": "2024-04-02 13:52:17.823Z"
  },
   {
    "adresse": "1234 Maple Street, Springfield, TX",
    "collectionId": "sidpkt9hmbfwoeb",
    "collectionName": "maison",
    "created": "2024-05-01 10:30:45.621Z",
    "favori": true,
    "id": "s1zuhj19x8eb243",
    "image": "maple_street_springfield_TX.png",
    "nbChambres": 3,
    "nbSdb": 2,
    "nomMaison": "Maple Street",
    "prix": 3800,
    "surface": 110,
    "updated": "2024-05-01 10:30:45.621Z"
  },
  {
  "adresse": "456 Elmwood Avenue, Riverside, CA",
  "collectionId": "sidpkt9hmbfwoeb",
  "collectionName": "maison",
  "created": "2024-05-15 09:45:22.318Z",
  "favori": false,
  "id": "s1zuhj19x8eb244",
  "image": "elmwood_avenue_riverside_CA.png",
  "nbChambres": 4,
  "nbSdb": 3,
  "nomMaison": "Elmwood Avenue",
  "prix": 4200,
  "surface": 150,
  "updated": "2024-05-15 09:45:22.318Z"
  },
  {
  "adresse": "789 Oakridge Road, Boulder, CO",
  "collectionId": "sidpkt9hmbfwoeb",
  "collectionName": "maison",
  "created": "2024-06-10 14:20:30.512Z",
  "favori": true,
  "id": "s1zuhj19x8eb245",
  "image": "oakridge_road_boulder_CO.png",
  "nbChambres": 3,
  "nbSdb": 2,
  "nomMaison": "Oakridge Road",
  "prix": 4000,
  "surface": 120,
  "updated": "2024-06-10 14:20:30.512Z"
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-bind="maisonsListe[0]" />
  <MaisonCard v-bind="maisonsListe[1]" />
</template>