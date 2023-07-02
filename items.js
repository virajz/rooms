import { currentPlace } from './data.js'
import { itemsElement, placesElement } from './elements.js'
import { Inventory, InventoryItemsList } from './inventory.js'
import { addMoney, deductMoney, money } from './money.js'

export function makeCityItem(item) {
	let itemDiv = document.createElement('div')
	itemDiv.classList.add('item')

	let imageDiv = document.createElement('div')
	let image = document.createElement('img')
	image.src = item.item.image
	imageDiv.append(image)

	imageDiv.addEventListener('click', (e) => {
		makePurchase(item)
	})

	let priceDiv = document.createElement('div')
	priceDiv.classList.add('price')
	priceDiv.textContent = `Price: ${item.cost}`

	let buttonsDiv = document.createElement('div')
	buttonsDiv.classList.add('buttons')

	let rangeDiv = document.createElement('div')
	rangeDiv.classList.add('range')
	rangeDiv.innerHTML = `
				<span>Price Range</span>
				<span>${item.range}</span>
			`

	let buyButton = document.createElement('button')
	buyButton.textContent = 'Buy'

	buyButton.addEventListener('click', (e) => {
		makePurchase(item)
	})

	buttonsDiv.append(rangeDiv, buyButton)
	itemDiv.append(imageDiv, priceDiv, buttonsDiv)
	itemsElement.append(itemDiv)
}

function makePurchase(item) {
	if (Inventory.emptySlots() > 0 && money >= item.cost) {
		Inventory.addItem({
			item: item.item,
			buyPrice: item.cost,
		})
		deductMoney(item.cost)
	}
}

export function sellItem(arrayIndex) {
	let item = InventoryItemsList[arrayIndex]
	// console.log(item.item.name)
	let sellingItem = currentPlace.items.find((i) => i.item.name === item.item.name)
	if (!sellingItem) {
		return
	}
	addMoney(sellingItem.cost)
	InventoryItemsList.splice(arrayIndex, 1)
	Inventory.addItem('empty')
}
