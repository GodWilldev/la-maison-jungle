import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('')

    const isInputError = !inputValue.includes('@') 


	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>

			<div className='lmj-footer-elem'>Laissez-nous votre mail :
                <form>
                    <input type='text' value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() =>isInputError && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")}
                    />
                    <button>Envoyer</button>
                    {isInputError && <div style={{ color: 'red'}}>Attention, il n'y a pas d'@, ceci n'est pas une adresse valide. </div>}
                </form>
            </div>
		</footer>
	)
}

export default Footer