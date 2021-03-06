import { useState } from 'react'

import Banner from './Banner'
import Cart from './Cart'
import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'


function App() {
    const [cart, updateCart] = useState([])

    return <div><Banner />
                <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
                {/*<QuestionForm />*/}
                <Footer/>
            </div>
}

export default App