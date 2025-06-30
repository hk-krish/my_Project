import { createSlice } from "@reduxjs/toolkit";
import { BookmarkedDataType, LayoutStateProps } from "../../../Types/Layout";
import { bookMarks } from "../../../Data/Layout/Header";

const initialState: LayoutStateProps = {
  pinedMenu: [],
  responsiveSearch: false,
  linkItemsArray: [],
  flip: false,
  bookmarkedData: [...bookMarks],
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPinedMenu: (state, action) => {
      state.pinedMenu = action.payload;
    },
    setResponsiveSearch: (state) => {
      state.responsiveSearch = !state.responsiveSearch;
    },
    getLinkItemsArray: (state, action) => {
      state.linkItemsArray = action.payload;
    },
    setFlip: (state) => {
      state.flip = !state.flip;
    },
    handleBookmarkChange: (state, action) => {
      if (!action.payload.bookmarked) {
        state.bookmarkedData.push({ ...action.payload, bookmarked: !action.payload.bookmarked });
      } else {
        const tempt: BookmarkedDataType[] = [];
        state.bookmarkedData.forEach((ele) => {
          if (ele.id !== action.payload.id) {
            tempt.push(ele);
          }
        });
        state.bookmarkedData = tempt;
      }
      const temp = [...state.linkItemsArray];
      temp.splice(action.payload.id - 1, 1, { ...action.payload, bookmarked: !action.payload.bookmarked });
      state.linkItemsArray = temp;
    },
  },
});

export const { setPinedMenu, setResponsiveSearch, getLinkItemsArray, setFlip, handleBookmarkChange } = LayoutSlice.actions;
export default LayoutSlice.reducer;
