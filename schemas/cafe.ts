export const openingHours = {
  name: 'locations',
  type: 'document',
  title: 'Standorte',
  description: 'Standort und Zeiten, an denen das Café geöffnet ist',
  preview: {
    select: {
      title: 'date',
      subtitle: 'location',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: `${title.split('-')[2]}.${title.split('-')[1]}.`,
        subtitle: subtitle
      }
    }
  },
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
      type: 'date',
      options: {
        dateFormat: 'DD.MM.'
      }
    }
  ]
}

export const prices = {
  name: 'coffes',
  type: 'document',
  title: 'Kaffee Preise',
  description: 'Preise für die verschiedenen Kaffees',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Name des Kaffees',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Preis',
      description: 'Preis des Kaffees in Euro',
      type: 'number'
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
      name: 'images',
      title: 'Bilder',
      description: 'Bild des speziellen Angebots',
      type: 'image'
    },
    {
      name: 'available',
      title: 'Verfügbar',
      description: 'Aktuelle Verfügbarkeit des speziellen Angebots',
      type: 'boolean'
    }
  ]
}