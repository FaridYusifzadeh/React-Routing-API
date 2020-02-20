import React, { useState, useEffect } from 'react';
export default function Item({ match }) {
  console.log('render');

  useEffect(() => {
    fetchItems();
    console.log(match)
  }, []);

  const [item, setItem] = useState({});

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://www.fortnitehut.com/free-api?rarity=epic=${match.params.ourid}`
    );
    const item = await fetchItem.json();
    // console.log(item.items);
    setItem(item)
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}
