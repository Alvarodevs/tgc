import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"
import type {IProduct, IActionThunk} from "../interfaces" 
import { fetchProducts } from "../services/api"

interface ProductsState {
  items: IProduct[] | []
  single: IProduct
  status: string
}

export const getProducts = createAsyncThunk("get/products", async () => {
  const response = await fetchProducts()
  // console.log(response)
  return response
})

// export const getBooking = createAsyncThunk(
//    "booking/fetchBooking",
//    async (id) => {
//       const bookingData = await fetchApi(`bookings/${id}`, "GET");
//       const roomId = bookingData.room_id;
//       const roomData = await fetchApi(`rooms/${roomId}`, "GET");
//       return { response: bookingData, roomImages: roomData.images };
//    }
// );

// export const addBooking = createAsyncThunk("booking/addBooking",
// 	async (newBooking) => {
// 		return await fetchApi(`bookings`, "POST", newBooking);
// 	}
// );

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
  single: {
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
    images: [],
  },
  status: "idle",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // sortNewest: (state: ProductsState) => {
    //    state.items.sort((a, b) => {
    //       return a.order_date > b.order_date? -1 : 1;
    //    })
    // },
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
        console.log('error in thunk')
        state.status = "ko"
      })
  },
})
//          //GET single booking
//          .addCase(getBooking.pending, (state: BookingsState) => {
//             state.status = "loading";
//          })
//          .addCase(
//             getBooking.fulfilled,
//             (state: BookingsState, action: IActionThunk) => {
//                state.single = {
//                   ...action.payload.response,
//                   room_images: action.payload.roomImages,
//                };
//                state.status = "ok";
//             }
//          )
//          .addCase(getBooking.rejected, (state: BookingsState) => {
//             state.status = "ko";
//          });

//       // .addCase(addBooking.fulfilled, (state, action) => {
//       // 	state.items = [...state.items, action.payload];
//       // 	state.status = 'ok';
//       // })

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

export const selectProducts = (state: RootState): IProduct[] => state.products.items;
export const selectProduct = (state: RootState): IProduct => state.products.single;
export const selectStatus = (state: RootState): string => state.products.status;

export default productsSlice.reducer;
