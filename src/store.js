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
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};