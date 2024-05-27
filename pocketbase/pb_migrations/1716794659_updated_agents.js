/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2hzo5f7jpk50s")

  // remove
  collection.schema.removeField("01o2wb95")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2hzo5f7jpk50s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "01o2wb95",
    "name": "maison",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9pe33w2ha3wem99",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
