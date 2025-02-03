import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { orderSchema } from '../lib/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, orderSchema],
}