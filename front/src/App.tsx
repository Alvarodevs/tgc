import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductSite from './views/ProductSite'
import GlobalStyle from './AppStyle'
import Header from './components/Header'

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<ProductSite/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
