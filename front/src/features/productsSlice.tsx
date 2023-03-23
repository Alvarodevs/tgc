import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"
import type { IProduct, IActionThunk } from "../interfaces"
import { fetchProducts, fetchSingleProduct, postProduct, putProduct, deleteProduct } from "../services/api"

const initialSingle = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: []
}

interface ProductsState {
  items: IProduct[] | []
  single: IProduct
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

export const removeProduct = createAsyncThunk("delete/product",
	async (id: number) => {
		return await deleteProduct(id);
	}
);

// // export const editBooking = createAsyncThunk("booking/editBooking",
// // 	async (id) => {
// // 		return await id;
// // 	}
// // );

const initialState: ProductsState = {
  items: [],
  single: initialSingle,
  status: "idle",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // clearSingleData: (state: ProductsState): ProductsState => {
    //   return {
    //     state.single = initialSingle 
    //   }
    // }
  },

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
        state.status = "ko"
      })
      // GET single product
      .addCase(getProduct.pending, (state: ProductsState) => {
        state.status = "loading"
      })
      .addCase(
        getProduct.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          state.single = action.payload.product[0]
          state.status = "ok"
        }
      )
      .addCase(getProduct.rejected, (state: ProductsState) => {
        state.status = "ko"
      })

      // POST prodcut
      .addCase(addProduct.pending, (state: ProductsState) => {
        state.status = "loading"
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        console.log('post action', action.payload)
        state.items = [...state.items, action.payload]
        state.status = "ok"
      })
      .addCase(addProduct.rejected, (state: ProductsState) => {
        state.status = "ko"
      })

      // PUT product  
      .addCase(updateProduct.pending, (state: ProductsState) => {
        state.status = "loading"
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items[index] = action.payload
        state.status = "ok"
      })
      .addCase(updateProduct.rejected, (state: ProductsState) => {
        state.status = "ko"
      })

      // DELETE BOOKING
      .addCase(removeProduct.fulfilled, (state, action) => {
        console.log(action.payload)
      	state.items = state.items.filter(
      		(product) => product.id !== action.payload.id
      	);
      	state.status = 'ok';
      })
  },
})


//       // .addCase(editBooking.fulfilled, (state, action) => {
//       // 	state.status = 'ok';
//       // 	state.items = state.items.map((booking) => {
//       // 		return booking.id === action.payload.id ? action.payload : booking;
//       // 	});
//       // })
//    },
// });

// export const { clearSingleData } = productsSlice.actions;

export const selectProducts = (state: RootState): IProduct[] =>
  state.products.items
export const selectProduct = (state: RootState): IProduct =>
  state.products.single
export const selectStatus = (state: RootState): string => state.products.status

export default productsSlice.reducer
