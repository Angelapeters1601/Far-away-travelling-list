import { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  //localeCompare sorts alphabetically respecting language rules

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  //Sorts after converting boolean to number

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>
      {/* render sort and clear button conditionally */}
      {items.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort alphabetically</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
      )}

      {items.length > 0 && (
        <button onClick={handleClearList}>Clear List</button>
      )}
    </div>
  );
}

export default PackingList;
