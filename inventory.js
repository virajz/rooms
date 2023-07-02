import { inventoryItems } from './elements.js'
import { sellItem } from './items.js'

export let InventoryItemsList = []

export let Inventory = {
	addItem(obj) {
		if (obj === 'empty') {
			InventoryItemsList.push('empty')
		} else {
			let indexToAdd = InventoryItemsList.findIndex((container) => container === 'empty')
			InventoryItemsList[indexToAdd] = obj
		}
		this.drawToMap()
	},

	emptySlots() {
		return InventoryItemsList.filter((container) => container === 'empty').length
	},

	addEmptyContainerToMap(index) {
		let el = document.createElement('div')
		el.classList.add('empty')

		el.dataset.index = index

		inventoryItems.append(el)
	},

	addItemContainerToMap(index, container) {
		let el = document.createElement('div')
		el.classList.add('item')

		el.dataset.key = index

		let imageDiv = document.createElement('div')
		let image = document.createElement('img')
		image.src = container.item.image
		imageDiv.append(image)

		let countDiv = document.createElement('div')
		countDiv.classList.add('count')

		countDiv.innerHTML = `
            <div> - </div>
            <div class="quantity">${container.buyPrice}</div>
        `

		el.append(imageDiv, countDiv)

		inventoryItems.append(el)

		el.addEventListener('click', (e) => {
			sellItem(el.dataset.key)
		})
	},

	drawToMap() {
		inventoryItems.innerHTML = ''
		InventoryItemsList.forEach((container, index) => {
			if (container === 'empty') {
				this.addEmptyContainerToMap(index)
			} else {
				this.addItemContainerToMap(index, container)
			}
		})
	},
}
