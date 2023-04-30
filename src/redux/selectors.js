// import { createSelector } from '@reduxjs/toolkit';

export const selectStatus = state => state.tweets.status;
export const selectTweets = state => state.tweets.users;

// export const selectFilter = state => state.filter.filter;

// export const selectfilteredUsers = createSelector(
//   selectUsers,
//   selectFilter,
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.trim().toLowerCase())
//     );
//   }
// );
