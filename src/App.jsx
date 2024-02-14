import './App.css'
import Acco_questions from './Components/Acco_questions'
import Contents from './Components/Contents'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
      <Header/>
      <div className='bg-dark' style={{height:'10px'}}></div>
      <Contents/>
      <Acco_questions/>
      <div className='bg-dark' style={{height:'10px'}}></div>
      <Footer/>
    </>
  )
}

export default App
