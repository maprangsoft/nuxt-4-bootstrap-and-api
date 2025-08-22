import { defineMongooseModel } from '#nuxt/mongoose'

export const Product = defineMongooseModel({
  name: 'Product',
  schema: {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  options: {

  },
  hooks(schema) {

  },
})
