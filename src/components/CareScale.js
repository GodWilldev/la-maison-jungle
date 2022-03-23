import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
	careType === 'light' ?  (
		<img src={Sun} alt='sun-icon' />
	) : (
		<img src={Water} alt='water-icon' />
	)
	const fullCareType =
	careType === 'light' ? 'de lumière🌞' : "d' arrossage💧"


	const quantity = ["peu", "modérement", "beaucoup"]
	function handleClick() {
		alert(`Cette plante🌱 requiert ${quantity[scaleValue-1]} ${fullCareType}`)
}
	return (
		<div onClick={handleClick}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale