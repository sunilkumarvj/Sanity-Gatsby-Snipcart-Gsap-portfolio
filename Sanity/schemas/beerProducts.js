export default {
    name: 'beerProducts',
    title: 'beerProducts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
          {
              name: 'description',
              title: 'Description',
              type: 'string'
          },
          {
              name: 'price',
              title: 'Price',
              type: 'number'
          },
          {
              name: 'image',
              title: 'Product Image',
              type: 'image',
              option: {
                  hotspot: true
              }
          }
    ]
}