import React from 'react';
import { IoBanSharp, IoDocumentTextOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
const Items = ({ items, removeItem, editItem }) => {
  return (
    <>
      <tbody>
        {items.map((item) => {
          const { id, title, quantity, price, total } = item;
          return (
            <tr key={id}>
              <td>{title}</td>
              <td>{quantity}</td>
              <td>{price}$</td>
              <td>{total}$</td>
              <td>
                <button
                  title="Modify item in the list"
                  type="button"
                  style={{ marginTop: '0', marginBottom: '0' }}
                  className="btn btn-warning btn-sm"
                  onClick={() => editItem(id)}
                >
                  <IconContext.Provider value={{ size: '1.5rem' }}>
                    <IoDocumentTextOutline />
                  </IconContext.Provider>
                </button>
              </td>
              <td>
                <button
                  title="Remove item from the list"
                  type="submit"
                  style={{ marginTop: '0', marginBottom: '0' }}
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(id)}
                >
                  <IconContext.Provider value={{ size: '1.5rem' }}>
                    <IoBanSharp />
                  </IconContext.Provider>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default Items;
