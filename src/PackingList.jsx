import Item from "./Item";

function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
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
    </div>
  );
}

export default PackingList;
