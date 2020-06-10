// import item from './item';

const items = [];
let hideCheckeditems = false;

function findById(id) {
  return this.items.find(currentItem => currentItem.id === id);
}

function addItem(item) {
  this.items.push(item);
}

function findAndUpdate(id,newData) {
  let foundItem = this.findById(id);
  Object.assign(foundItem, newData);
}

// const findAndToggleChecked = function (id) {
//   const currentItem = this.findById(id);
//   currentItem.checked = !currentItem.checked;
// };

// const findAndUpdateName = function (id, name) {
//   try {
//     item.validateName(name);
//     const currentItem = this.findById(id);
//     currentItem.name = name;
//   } catch (e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };

function findAndDelete(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  // findAndToggleChecked,
  // findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};