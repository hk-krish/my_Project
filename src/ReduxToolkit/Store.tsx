import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/Layout/AuthReducer";
import LayoutReducers from "./Reducers/Layout/LayoutReducers";
import ThemeCustomizerReducers from "./Reducers/Layout/ThemeCustomizerReducers";
import ProjectSlice from "./Reducers/ProjectSlice";
import FilterSlice from "./Reducers/ECommerce/FilterSlice";
import AddProductSlice from "./Reducers/ECommerce/AddProductSlice";
import CartSlice from "./Reducers/ECommerce/CartSlice";
import ProductSlice from "./Reducers/ECommerce/ProductSlice";
import ContactReducer from "./Reducers/ContactReducer";
import TaskSlice from "./Reducers/TaskSlice";
import ChatSlice from "./Reducers/ChatSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import ToDoSlice from "./Reducers/ToDoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: LayoutReducers,
    themeCustomizer: ThemeCustomizerReducers,
    project: ProjectSlice,
    filterData: FilterSlice,
    addProduct: AddProductSlice,
    cartData: CartSlice,
    product: ProductSlice,
    contact: ContactReducer,
    task: TaskSlice,
    chat: ChatSlice,
    bookmarkTab: BookmarkTabSlice,
    letterBox: LetterBoxSlice,
    todo: ToDoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
