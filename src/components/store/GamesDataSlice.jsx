import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const initialState = { AllData: [], FilteredData: [], OldData: [] };

const GamesDataSlice = createSlice({
  name: "GamesData",
  initialState,
  reducers: {
    getGameData(state, action) {
      state.AllData = action.payload;
      state.OldData = action.payload;
      // console.log(state.AllData);
    },

    getFilteredData(state, action) {
      state.AllData = state.OldData;
      const data = action.payload.toLowerCase();
      state.AllData = state.AllData.filter((item) => {
        return item.name.toLowerCase().includes(data);
      });
    },
    getFilterScore(state, action) {
      const data = action.payload;

      state.AllData = state.AllData.filter((item) => {
        return item.rating.toString().includes(data);
      });
    },

    getSortbyValues(state, action) {
      const data = action.payload;
      console.log(data);

      if (data === "name") {
        state.AllData = state.AllData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (data === "date") {
        state.AllData = state.AllData.sort(function (a, b) {
          return (
            new Date(a.first_release_date) - new Date(b.first_release_date)
          );
        });
      }
      if (data === "score") {
        state.AllData = state.AllData.sort(function (a, b) {
          return b.rating.toString() - a.rating.toString();
        });
      }
    },
  },
});

export default GamesDataSlice;

export const GamesDataAction = GamesDataSlice.actions;
