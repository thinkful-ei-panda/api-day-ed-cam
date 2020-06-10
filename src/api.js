const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ed';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = JSON.stringify({
    name: name
  });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
}

function updateItem(id, obj) {
  let updateItem = JSON.stringify(obj);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: updateItem
  });
}

export default {
  getItems,
  createItem,
  updateItem
};
