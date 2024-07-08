function Item({ item }) {
  return (
    <div>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}

export default Item;
