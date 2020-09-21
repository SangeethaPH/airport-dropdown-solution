import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function Dropdown({ title, items}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(index) {
    if (!selection.some(current => current === index)) {
        setSelection([index]);
    }
  }

  function IsItemSelected(index) {
    if (selection.some(current => current=== index)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        style={{backgroundColor:'lightBlue'}}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          { items &&  items.map((item,index) => (
            <li className="dd-list-item" key={item.woeid}>
              <button type="button" onClick={() => handleOnClick(index)}>
                <span>{item.name}, {item.city}({item.country}), {item.code}</span>
                <span>{IsItemSelected(index) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
