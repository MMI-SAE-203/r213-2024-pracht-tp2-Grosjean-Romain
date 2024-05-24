import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase('https://r213-tp.lifefindsaway.fr:443') as TypedPocketBase