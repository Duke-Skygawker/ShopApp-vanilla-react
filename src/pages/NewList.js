import React, { useState, useEffect } from 'react';
import { IoIosAddCircleOutline, IoIosTrash } from 'react-icons/io';
import { IconContext } from 'react-icons';
import Alert from '../hooks/Alert';
import Items from './Items';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
};

const NewList = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, 'alert', 'Please Enter a Value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              title: name,
              quantity: quantity,
              price: price,
              total: quantity * price,
            };
          }
          return item;
        })
      );
      setName('');
      setQuantity(0);
      setPrice(0);
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value Changed');
    } else {
      showAlert(true, 'success', 'Item Added To The List');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        quantity: quantity,
        price: price,
        total: Math.round((quantity * price + Number.EPSILON) * 100) / 100,
      };
      setList([...list, newItem]);
      setName('');
      setQuantity(0);
      setPrice(0);
    }
  };
  const fullTotal = list.map((item) => {
    const { total } = item;
    let allTotals = 0;
    return (allTotals += total);
  });
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'alert', 'List Cleared');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'alert', 'Item Removed');
    setList(list.filter((item) => item.id != id));
  };
  const editItem = (id) => {
    showAlert(true, 'warning', 'Modify the entry');
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
    setQuantity(specificItem.quantity);
    setPrice(specificItem.price);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <div className="container text-center">
      <br />
      <div>
        <h2 className="" style={{}}>
          <b>NEW LIST</b>
        </h2>
      </div>
      <br />
      <form className="row g-3" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <div class="col-md-4">
          <label for="inputItemName" className="form-label">
            Name of the item
          </label>
          <input
            title="Field for the name of the item"
            type="text"
            placeholder="Product"
            id="inputItemName"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="col-md-4">
          <label for="inputNumberOfItems" className="form-label">
            Number of items
          </label>
          <input
            title="Field for the number of the item"
            type="number"
            name="quantity"
            min="1"
            max="1000"
            step="any"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            class="form-control"
            id="inputNumberOfItems"
          />
        </div>
        <div class="col-md-4">
          <label for="inputPricePerItem" className="form-label">
            Price per item
          </label>
          <input
            title="Field for the price of the item"
            type="number"
            placeholder="Price"
            step="any"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            class="form-control"
            id="inputPricePerItem"
          />
        </div>
        <div className="d-grid mx-auto col-5 gap-2">
          <button
            title="Add new item to the list"
            type="submit"
            style={{ marginTop: '1.4rem' }}
            className="btn btn-success fs-5"
            value={price}
          >
            Add Item to the list
            <IoIosAddCircleOutline
              className="ms-3 pb-1"
              style={{ fontSize: '2rem' }}
            />
          </button>
        </div>
      </form>
      <div className="expanded button invisible"></div>
      <div className="container" style={{ fontSize: '1.2rem' }}>
        {list.length > 0 && (
          <div>
            <table className="table table-striped">
              {/* make head invisible if no items */}
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <Items items={list} removeItem={removeItem} editItem={editItem} />
            </table>
            <div className="callout">
              <div className="grid-x">
                <div className="cell small-3"></div>
                <h4>Total price of all items in the list:</h4>
                <h4>{fullTotal.reduce((a, b) => a + b, 0)}$</h4>
              </div>
            </div>

            <div class="d-grid mx-auto col-6 gap-2">
              <button
                title="Clears the list."
                className="btn btn-danger fs-5"
                type="button"
                onClick={clearList}
              >
                Clear the list
                <IoIosTrash className="ms-3 fs-4 pb-1" />
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        className="expanded button collapse"
        title="Add list from template"
      >
        Add list from template
      </button>
    </div>
  );
};

export default NewList;
