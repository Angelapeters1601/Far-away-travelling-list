import Item from "./Item";

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

export default PackingList;
