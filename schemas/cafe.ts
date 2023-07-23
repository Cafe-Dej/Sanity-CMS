export const openingHours = {
  name: 'locations',
  type: 'document',
  title: 'Standorte',
  description: 'Standort und Zeiten, an denen das Café geöffnet ist',
  fields: [
    {
      name: 'location',
      title: 'Standort',
      description: 'Standort',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Datum',
      description: 'Datum für diesen Standort',
      type: 'date'
    }
  ]
}


export const specialOffer = {
  name: 'special_offer',
  type: 'document',
  title: 'Spezielle Angebote',
  description: 'Aktuelle besondere Angebote des Cafés',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Name des speziellen Angebots',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Beschreibung',
      description: 'Beschreibung des speziellen Angebots',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'available',
      title: 'Verfügbar',
      description: 'Aktuelle Verfügbarkeit des speziellen Angebots',
      type: 'boolean'
    },
    {
      name: 'images',
      title: 'Bilder',
      description: 'Bilder des speziellen Angebots',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}