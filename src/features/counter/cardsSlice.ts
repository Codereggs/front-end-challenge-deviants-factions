import {
  bindActionCreators,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  cards: {
    loading: boolean;
    data: any;
    hqType: any;
    charType: any;
    technoType: any;
    filteredData: any;
    filtered: boolean;
    searchData: any;
  };
  error: any;
}

const initialState: CounterState = {
  cards: {
    loading: false,
    data: {},
    hqType: {},
    charType: {},
    technoType: {},
    filteredData: {},
    searchData: {},
    filtered: false,
  },
  error: null,
};

export const getAllCards = createAsyncThunk("cards/getAllCards", async () => {
  //Commented because CORS problem with request to pastebin
  /*   const response = await axios.get("https://www.pastebin.com/raw/Yt8YLDV1");
  return response.data; */

  const response2 = await axios.get("/mock/info.json");
  return response2.data;
});

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    isFiltered: (state, action) => {
      state.cards.filtered = action.payload;
    },
    filterCards: (state, action) => {
      state.cards.filteredData = state.cards.data?.filter((card) =>
        action.payload.some(
          (type) =>
            type === card.CardType.toLowerCase() ||
            type === card.Faction.toLowerCase() ||
            type === card.Rarity.toLowerCase()
        )
      );
    },
    searchCards: (state, action) => {
      if (action.payload === "") return;
      let regExp = new RegExp(`^${action.payload}*`, "gi");
      state.cards.filteredData = state.cards.data.filter((el) => {
        return regExp.test(el.Name);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCards.pending, (state, action) => {
      state.cards.loading = true;
    });
    builder.addCase(getAllCards.fulfilled, (state, action) => {
      state.cards.loading = true;
      state.cards.hqType = action.payload.filter(
        (card) => card.CardType === "HQ"
      );
      state.cards.charType = action.payload.filter(
        (card) => card.CardType === "Character"
      );
      state.cards.technoType = action.payload.filter(
        (card) => card.CardType === "Technology"
      );
      state.cards.data = action.payload;
    });

    builder.addCase(getAllCards.rejected, (state, action) => {
      state.cards.loading = false;
      state.error = action.error;
    });
  },
});

export const { isFiltered, filterCards, searchCards } = cardsSlice.actions;

export default cardsSlice.reducer;
