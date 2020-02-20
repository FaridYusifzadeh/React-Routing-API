import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      '`https://www.fortnitehut.com/free-api?rarity=epic'
    );
    const items = await data.json();
    setItems(items);
    };
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={`/shop/${item.ourid}`}>{item.name}</Link>
        </li>
      ))}
    </ol>
  );
}
