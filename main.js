import { setupInventoryContainers, writeContainerSize } from './container.js'
import { PLACES } from './data.js'
import { writeGoalMoney, writeMoney } from './money.js'
import { addPlacesToMap } from './places.js'

let currentPlace

function init() {
	writeMoney()
	writeGoalMoney()

	setupInventoryContainers()
	writeContainerSize()

	addPlacesToMap()
}

init()
