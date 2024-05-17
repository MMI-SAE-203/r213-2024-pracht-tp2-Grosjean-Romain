/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pe33w2ha3wem99")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ajb6gike",
    "name": "relation_agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qn2hzo5f7jpk50s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pe33w2ha3wem99")

  // remove
  collection.schema.removeField("ajb6gike")

  return dao.saveCollection(collection)
})
