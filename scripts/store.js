/* global cuid Item */

'use strict';

const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id) {
    return this.items.find(function(item) {
      return item.id === id;
    });
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(e) {
      console.log(e);
    }
  };

  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch(e) {
      console.log(e);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(function(item) {
      return item.id !== id;
    });
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(searchTerm) {
    this.searchTerm = searchTerm;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById, 
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}() );