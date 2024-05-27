import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

//(import.meta.env VITE_URL_POCKETBASE) as TypedPocketBase

//=> fichier : .env.production
// VITE_URL_POCKETBASE=https://r213-tp.lifefindsaway.fr:443