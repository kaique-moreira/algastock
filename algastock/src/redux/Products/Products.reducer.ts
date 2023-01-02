import { Action } from ".."
import { getAllProducts } from "../../services/Products.service"
import Products, { Product } from "../../shared/Table/Table.mockdata"



export default function (state: Product[] = [], action: Action): Product[] {
  switch (action.type) {
    case 'INSERT_NEW_PRODUCT':
      return [...state, {
        ...action.payload,
        _id: String(state.length + 1)
      }]
    case "FETCH_PRODUCTS":
      return [...action.payload]
    default:
      return state
  }
}
