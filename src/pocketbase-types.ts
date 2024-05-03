/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	User = "User",
	Artistes = "artistes",
	Events = "events",
	Maisons = "maisons",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type UserRecord = {
	nomMaison?: string
}

export type ArtistesRecord = {
	Biographie?: string
	Nom?: string
	Nom_evenement_participation?: string
	Numero_artiste?: number
	Prenom?: string
}

export enum EventsCategorieOptions {
	"Musique" = "Musique",
	"Théâtre" = "Théâtre",
	"Danse" = "Danse",
}
export type EventsRecord = {
	Categorie?: EventsCategorieOptions
	Date_debut?: IsoDateString
	Date_fin?: IsoDateString
	Description?: string
	Extrait_description?: string
	Favori?: boolean
	Image?: string
	Nom?: string
}

export type MaisonsRecord = {
	adresse?: string
	favori?: boolean
	image?: string
	nbChambres?: string
	nbSdb?: string
	nomMaison?: string
	prix?: number
	surface?: number
}

// Response types include system fields and match responses from the PocketBase API
export type UserResponse<Texpand = unknown> = Required<UserRecord> & AuthSystemFields<Texpand>
export type ArtistesResponse<Texpand = unknown> = Required<ArtistesRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type MaisonsResponse<Texpand = unknown> = Required<MaisonsRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	User: UserRecord
	artistes: ArtistesRecord
	events: EventsRecord
	maisons: MaisonsRecord
}

export type CollectionResponses = {
	User: UserResponse
	artistes: ArtistesResponse
	events: EventsResponse
	maisons: MaisonsResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'User'): RecordService<UserResponse>
	collection(idOrName: 'artistes'): RecordService<ArtistesResponse>
	collection(idOrName: 'events'): RecordService<EventsResponse>
	collection(idOrName: 'maisons'): RecordService<MaisonsResponse>
}
