import { useState } from "react"
import Item from "./Item"

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input")

  let sortedItems
  if (sortBy === "input") sortedItems = items
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => a.packed - b.packed)

  function createOnDelete(id) {
    return () => onDeleteItem(id)
  }

  function createOnToggle(id) {
    return () => onToggleItem(id)
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item item={item} key={item.id} onDelete={createOnDelete(item.id)} onToggle={createOnToggle(item.id)} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  )
}
