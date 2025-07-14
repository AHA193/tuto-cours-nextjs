
async function page() {

  const users = await new Promise(resolve => {
    setTimeout(() => resolve(["Victor", "Sarah", "Anna"]), 2000)
  })

  return (
    <main className="mt-12">
      <p className="text-2xl font-semibold text-gray-800 mb-4">Utilisateurs</p>
      <ul className="bg-white shadow-md rounded-lg w-1/2 p-4 space-y-2">
        {users.map((user, index) => (
          <li
            key={index}
            className="text-lg text-gray-700 border-b last:border-none pb-2"
          >
            {user}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default page
