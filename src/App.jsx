import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import "transition-style"
import Menu from './components/Menu'
import { useState } from 'react'


function App() {
  const [menuButton, setMenuButton] = useState(false)
  return (
    <>
        <Menu menuButton={menuButton} setMenuButton={setMenuButton}/>
        <Header menuButton={menuButton} setMenuButton={setMenuButton}/>
        <Main />
        <Footer isLetter={false} />
    </>
  )
}

export default App