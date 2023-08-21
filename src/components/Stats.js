export default function Stats({ numItems, numPacked }) {
  if (!numPacked)
    return (
      <footer className="stats">
        <em>Start adding items to your oacking list! 🚀</em>
      </footer>
    )

  const percentPacked = Math.round((numPacked / numItems) * 100)
  return (
    <footer className="stats">
      <em>{percentPacked === 100 ? "You're are all packed and ready to go! ✈️" : `💼You have ${numItems} items on your list and you already packed ${numPacked} (${percentPacked}%)`}</em>
    </footer>
  )
}
