import { useState } from "react"

import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackingList"
import Stats from "./Stats"

export default function App() {
  const [items, setItems] = useState([])

  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length

  function handleAddItem(item) {
    setItems(arr => [...arr, item])
  }

  function handleDeleteItem(id) {
    setItems(arr => arr.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(arr => arr.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)))
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to delete all items?")) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats numItems={numItems} numPacked={numPacked} />
    </div>
  )
}
