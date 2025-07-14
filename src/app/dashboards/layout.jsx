import React from "react"

function layout({children}) {
  return (
    <div>
      <nav className="flex gap-x-2">
        <a className="underline" href="/dashboards/entreprise">Dashboard finance</a>
        <a className="underline" href="/dashboards/rh">Dashboard RH</a>
      
    </nav>
    {children}
    </div>
  )

}

export default layout
