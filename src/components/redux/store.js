import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

// import contactsReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter-reducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

// export default store;
