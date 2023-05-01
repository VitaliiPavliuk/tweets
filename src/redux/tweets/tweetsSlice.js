import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './tweets.operations';
import { tweetsPerPage } from 'components/TweetsList/TweetsList';

const initialState = {
  users: [],
  filter: {
    value: 'show all',
    label: 'show all',
  },
  onPage: tweetsPerPage,
  status: 'idle',
  error: null,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    toggleFollowed(state, { payload }) {
      for (const user of state.users) {
        if (user.id === payload) {
          user.followed === false || user.followed === undefined
            ? (user.followers += 1)
            : (user.followers -= 1);

          user.followed = !user.followed;

          break;
        }
      }
    },

    filterTweets(state, { payload }) {
      state.filter = payload;
      state.onPage = tweetsPerPage;
    },

    setTweetsOnPage(state, { payload }) {
      state.onPage += payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchTweets.pending, pendingReducer)
      .addCase(fetchTweets.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.users = payload;
      })
      .addCase(fetchTweets.rejected, errorReducer),
});

function pendingReducer(state) {
  state.status = 'pending';
  state.error = null;
}
function errorReducer(state, { payload }) {
  state.status = 'rejected';
  state.error = payload;
}

export const { toggleFollowed, filterTweets, setTweetsOnPage } =
  tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
