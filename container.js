import { addContainerElement, containerSizeElement } from './elements.js'
import { Inventory } from './inventory.js'
import { deductMoney, money } from './money.js'

export let containerSize = 2

const containerBuyPrice = 50

export function writeContainerSize() {
	containerSizeElement.textContent = containerSize
}

addContainerElement.addEventListener('click', (e) => {
	addContainer()
})

export function setupInventoryContainers() {
	let baseContainers = containerSize

	while (baseContainers > 0) {
		Inventory.addItem('empty')
		baseContainers--
	}
}

function addContainer() {
	if (containerSize < 12) {
		if (money >= containerBuyPrice * (containerSize + 1)) {
			deductMoney(containerBuyPrice * (containerSize + 1))
			containerSize++
			writeContainerSize()
			Inventory.addItem('empty')
			addContainerElement.textContent = 'Buy - ' + containerBuyPrice * (containerSize + 1)
		}
	}

	if (containerSize == 12) {
		addContainerElement.disabled = true
		addContainerElement.classList.add('disabled')
		addContainerElement.textContent = 'Maxed Out'
	}
}
