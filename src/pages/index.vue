<script setup lang="ts">
import type { MaisonRecord, MaisonResponse } from '@/types'
import MaisonCard from '@/components/MaisonCard.vue'

const maisonsListe:MaisonRecord[] = [
  {
    "adresse": "2821 Lake Sevilla, Palm Harbor, TX",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:30:31.830Z",
    "favori": false,
    "id": "sidpkt9hmbfwoeb",
    "image": "pexels_binyaminmellish_1500459_8p166TR1AQ.jpg",
    "nbChambres": "4",
    "nbSdb": "2",
    "nomMaison": "Beverly Springfield",
    "prix": 2700,
    "surface": 45,
    "updated": "2024-05-03 14:30:31.830Z"
  },
  {
    "adresse": "2699 Green Valley, Highland Lake",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:32:48.568Z",
    "favori": true,
    "id": "hqeb8jkj5u20v99",
    "image": "maison_gironde_villa_florida_61tbJmkeI8.jpg",
    "nbChambres": "4",
    "nbSdb": "2",
    "nomMaison": "Palm Harbor",
    "prix": 2095,
    "surface": 42,
    "updated": "2024-05-03 14:32:48.568Z"
  },
  {
    "adresse": "909 Woodland St, Michigan, IN",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:34:43.107Z",
    "favori": false,
    "id": "up794sz45nbbbfh",
    "image": "modele_de_maison_contemporaine_9rlLnwGHo0.jpg",
    "nbChambres": "4",
    "nbSdb": "3",
    "nomMaison": "Faulkner Ave",
    "prix": 4550,
    "surface": 80,
    "updated": "2024-05-03 14:34:43.107Z"
  },
  {
    "adresse": "1234 Maple Street, Springfield, TX",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:35:29.842Z",
    "favori": true,
    "id": "yht2d9yqxyhhdzf",
    "image": "meilleurarchitecteralisationmaisonluxe_villefranchesur_merjpg_5ee659f08c02b_HuQclH2Hpo.jpg",
    "nbChambres": "3",
    "nbSdb": "2",
    "nomMaison": "Maple Street",
    "prix": 3800,
    "surface": 110,
    "updated": "2024-05-03 14:35:29.842Z"
  },
  {
    "adresse": "150",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:37:18.805Z",
    "favori": false,
    "id": "48zih05vmxihy04",
    "image": "d570e2fc0b727d74f1de06a4e0b214f3_208x410_yz2JZ7mLa5.jpg",
    "nbChambres": "4",
    "nbSdb": "3",
    "nomMaison": "Elmwood Avenue",
    "prix": 4200,
    "surface": 150,
    "updated": "2024-05-03 14:37:18.805Z"
  },
  {
    "adresse": "789 Oakridge Road, Boulder, CO",
    "collectionId": "9pe33w2ha3wem99",
    "collectionName": "maisons",
    "created": "2024-05-03 14:38:37.840Z",
    "favori": true,
    "id": "zgfhbonaln4zjt9",
    "image": "ae5ebe7468ecca9601150d165120a56d_Ry7GrvBKTS.jpg",
    "nbChambres": "3",
    "nbSdb": "2",
    "nomMaison": "Oakridge Road",
    "prix": 4000,
    "surface": 120,
    "updated": "2024-05-03 14:38:37.840Z"
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-bind="maisonsListe[0]" />
  <MaisonCard v-bind="maisonsListe[1]" />
  <MaisonCard v-for="maisonRecord in maisonsListe" :key="maisonRecord.nomMaison" v-bind="maisonRecord"/>
</template>