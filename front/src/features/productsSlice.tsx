import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"
import type { IProduct, IActionThunk } from "../interfaces"
import { fetchProducts, fetchSingleProduct, postProduct, putProduct } from "../services/api"

interface ProductsState {
  items: IProduct[] | []
  single: IProduct | any
  status: string
}

export const getProducts = createAsyncThunk("get/products", async () => {
  const response = await fetchProducts()
  return response
})

export const getProduct = createAsyncThunk(
  "get/product",
  async (id: number) => {
    const response = await fetchSingleProduct(id)
    return response
  }
)

export const addProduct = createAsyncThunk(
  "post/product",
  async (body: object) => {
    return await postProduct(body)
  }
)

export const updateProduct = createAsyncThunk(
  "put/product",
  async ({id, body}: {id: number, body: object}) => {
    return await putProduct({id, body})
  }
)

// // export const deleteBooking = createAsyncThunk("booking/deleteBooking",
// // 	async (id) => {
// // 		return await id;
// // 	}
// // );

// // export const editBooking = createAsyncThunk("booking/editBooking",
// // 	async (id) => {
// // 		return await id;
// // 	}
// // );

const initialState: ProductsState = {
  items: [],
  single: {},
  status: "idle",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // GET all products
      .addCase(getProducts.pending, (state: ProductsState) => {
        state.status = "loading"
      })
      .addCase(
        getProducts.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          state.items = action.payload.products
          state.status = "ok"
        }
      )
      .addCase(getProducts.rejected, (state: ProductsState) => {
        console.log("error in thunk")
        state.status = "ko"
      })
      // GET single product
      .addCase(getProduct.pending, (state: ProductsState) => {
        state.status = "loading"
      })
      .addCase(
        getProduct.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          console.log(action.payload)
          state.single = action.payload.product[0]
          state.status = "ok"
        }
      )
      .addCase(getProduct.rejected, (state: ProductsState) => {
        state.status = "ko"
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.status = "ok"
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.status = "ok"
      })
  },
})
//       // .addCase(deleteBooking.fulfilled, (state, action) => {
//       // 	state.items = state.items.filter(
//       // 		(booking) => booking.id !== action.payload
//       // 	);
//       // 	state.status = 'ok';
//       // })

//       // .addCase(editBooking.fulfilled, (state, action) => {
//       // 	state.status = 'ok';
//       // 	state.items = state.items.map((booking) => {
//       // 		return booking.id === action.payload.id ? action.payload : booking;
//       // 	});
//       // })
//    },
// });

// export const { sortNewest } = bookingsSlice.actions;

export const selectProducts = (state: RootState): IProduct[] =>
  state.products.items
export const selectProduct = (state: RootState): IProduct =>
  state.products.single
export const selectStatus = (state: RootState): string => state.products.status

export default productsSlice.reducer
