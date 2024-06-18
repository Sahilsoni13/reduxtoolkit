import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "../slice/counter/counter";
import count2 from "../slice/counter2/counter2";
// ...

export const store = configureStore({
  reducer: {
    counter,
    count2,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
