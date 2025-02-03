import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    )
);
