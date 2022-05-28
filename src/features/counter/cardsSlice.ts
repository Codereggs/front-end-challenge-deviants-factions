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
    filtered: false,
  },
  error: null,
};

export const getAllCards = createAsyncThunk("cards/getAllCards", async () => {
  const response = await axios.get("https://pastebin.com/raw/Yt8YLDV1");
  return response.data;
});

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    isFiltered: (state, action) => {
      state.cards.filtered = action.payload;
    },
    filterCards: (state, action) => {
      state.cards.filteredData = state.cards.data.filter((card) =>
        action.payload.some(
          (type) =>
            type === card.CardType.toLowerCase() ||
            type === card.Faction.toLowerCase() ||
            type === card.Rarity.toLowerCase()
        )
      );
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

export const { isFiltered, filterCards } = cardsSlice.actions;

export default cardsSlice.reducer;
