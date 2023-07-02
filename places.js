import { PLACES, currentPlace, decreaseTurns, turns, updateCurrentPlace } from './data.js'
import { itemsElement, placesElement } from './elements.js'
import { makeCityItem } from './items.js'
import { deductMoney, money } from './money.js'

export function visitPlace(place, placeElement) {
	if (money < place.charge) {
		return
	}
	if (!placeElement.classList.contains('active')) {
		for (let placeDiv of placesElement.children) {
			placeDiv.classList.remove('active')
		}
		deductMoney(place.charge)
		placeElement.classList.add('active')
		updateCurrentPlace(place)
		setupPlaceItems(place)
		decreaseTurns()
	}
}

export function addPlacesToMap() {
	for (let place of PLACES) {
		let placeElement = document.createElement('div')

		placeElement.classList.add('place')
		placeElement.dataset.id = place.id

		if (place.id === 'surat') {
			placeElement.classList.add('active')
			setupPlaceItems(place)
		}

		placeElement.innerHTML = `
			<h3>${place.name}</h3>
			<strong>${place.charge}</strong>
		`

		placeElement.addEventListener('click', (e) => {
			visitPlace(place, placeElement)
		})

		placesElement.append(placeElement)
	}
}

export function setupPlaceItems(place) {
	itemsElement.innerHTML = ''
	if (place.items) {
		for (const item of place.items) {
			makeCityItem(item)
		}
	}
}
