import { random } from './utils.js'

export const ITEMS = [
	{
		name: 'food',
		minBuyPrice: 20,
		maxBuyPrice: 60,
		minSellPrice: 50,
		maxSellPrice: 90,
		image: 'images/food.png',
	},
	{
		name: 'cloth',
		minBuyPrice: 30,
		maxBuyPrice: 90,
		minSellPrice: 80,
		maxSellPrice: 140,
		image: 'images/cloth.png',
	},
	{
		name: 'wood',
		minBuyPrice: 50,
		maxBuyPrice: 130,
		minSellPrice: 150,
		maxSellPrice: 230,
		image: 'images/wood.png',
	},
	{
		name: 'stone',
		minBuyPrice: 70,
		maxBuyPrice: 150,
		minSellPrice: 90,
		maxSellPrice: 220,
		image: 'images/stone.png',
	},
	{
		name: 'metal',
		minBuyPrice: 120,
		maxBuyPrice: 220,
		minSellPrice: 140,
		maxSellPrice: 460,
		image: 'images/metal.png',
	},
	{
		name: 'gold',
		minBuyPrice: 280,
		maxBuyPrice: 370,
		minSellPrice: 420,
		maxSellPrice: 570,
		image: 'images/gold.png',
	},
]

// Define Places
export const PLACES = [
	{
		id: 'surat',
		name: 'Surat',
		charge: 5,
		items: [
			{
				item: ITEMS[0],
				range: `${ITEMS[0].minBuyPrice} - ${ITEMS[0].maxSellPrice}`,
				cost: random(ITEMS[0].minBuyPrice, ITEMS[0].maxBuyPrice),
			},
			{
				item: ITEMS[1],
				range: `${ITEMS[1].minBuyPrice} - ${ITEMS[1].maxSellPrice}`,
				cost: random(ITEMS[1].minSellPrice, ITEMS[1].maxSellPrice),
			},
			{
				item: ITEMS[3],
				range: `${ITEMS[3].minBuyPrice} - ${ITEMS[3].maxSellPrice}`,
				cost: random(ITEMS[3].minSellPrice, ITEMS[3].maxSellPrice),
			},
			{
				item: ITEMS[5],
				range: `${ITEMS[5].minBuyPrice} - ${ITEMS[5].maxSellPrice}`,
				cost: random(ITEMS[5].minBuyPrice, ITEMS[5].maxBuyPrice),
			},
		],
	},
	{
		id: 'mumbai',
		name: 'Mumbai',
		charge: 10,
		items: [
			{
				item: ITEMS[1],
				range: `${ITEMS[1].minBuyPrice} - ${ITEMS[1].maxSellPrice}`,
				cost: random(ITEMS[1].minBuyPrice, ITEMS[1].maxBuyPrice),
			},
			{
				item: ITEMS[2],
				range: `${ITEMS[2].minBuyPrice} - ${ITEMS[2].maxSellPrice}`,
				cost: random(ITEMS[2].minSellPrice, ITEMS[2].maxSellPrice),
			},
			{
				item: ITEMS[3],
				range: `${ITEMS[3].minBuyPrice} - ${ITEMS[3].maxSellPrice}`,
				cost: random(ITEMS[3].minBuyPrice, ITEMS[3].maxBuyPrice),
			},
			{
				item: ITEMS[4],
				range: `${ITEMS[4].minBuyPrice} - ${ITEMS[4].maxSellPrice}`,
				cost: random(ITEMS[4].minSellPrice, ITEMS[4].maxSellPrice),
			},
		],
	},
	{
		id: 'bengaluru',
		name: 'Bengaluru',
		charge: 10,
		items: [
			{
				item: ITEMS[0],
				range: `${ITEMS[0].minBuyPrice} - ${ITEMS[0].maxSellPrice}`,
				cost: random(ITEMS[0].minSellPrice, ITEMS[0].maxSellPrice),
			},
			{
				item: ITEMS[2],
				range: `${ITEMS[2].minBuyPrice} - ${ITEMS[2].maxSellPrice}`,
				cost: random(ITEMS[2].minBuyPrice, ITEMS[2].maxBuyPrice),
			},
			{
				item: ITEMS[3],
				range: `${ITEMS[3].minBuyPrice} - ${ITEMS[3].maxSellPrice}`,
				cost: random(ITEMS[3].minSellPrice, ITEMS[3].maxSellPrice),
			},
			{
				item: ITEMS[4],
				range: `${ITEMS[4].minBuyPrice} - ${ITEMS[4].maxSellPrice}`,
				cost: random(ITEMS[4].minBuyPrice, ITEMS[4].maxBuyPrice),
			},
			{
				item: ITEMS[5],
				range: `${ITEMS[5].minBuyPrice} - ${ITEMS[5].maxSellPrice}`,
				cost: random(ITEMS[5].minSellPrice, ITEMS[5].maxSellPrice),
			},
		],
	},
	{
		id: 'delhi',
		name: 'Delhi',
		charge: 15,
		items: [
			{
				item: ITEMS[0],
				range: `${ITEMS[0].minBuyPrice} - ${ITEMS[0].maxSellPrice}`,
				cost: random(ITEMS[0].minBuyPrice, ITEMS[0].maxBuyPrice),
			},
			{
				item: ITEMS[1],
				range: `${ITEMS[1].minBuyPrice} - ${ITEMS[1].maxSellPrice}`,
				cost: random(ITEMS[1].minSellPrice, ITEMS[1].maxSellPrice),
			},
			{
				item: ITEMS[2],
				range: `${ITEMS[2].minBuyPrice} - ${ITEMS[2].maxSellPrice}`,
				cost: random(ITEMS[2].minBuyPrice, ITEMS[2].maxBuyPrice),
			},
			{
				item: ITEMS[3],
				range: `${ITEMS[3].minBuyPrice} - ${ITEMS[3].maxSellPrice}`,
				cost: random(ITEMS[3].minSellPrice, ITEMS[3].maxSellPrice),
			},
			{
				item: ITEMS[4],
				range: `${ITEMS[4].minBuyPrice} - ${ITEMS[4].maxSellPrice}`,
				cost: random(ITEMS[4].minSellPrice, ITEMS[4].maxSellPrice),
			},
			{
				item: ITEMS[5],
				range: `${ITEMS[5].minBuyPrice} - ${ITEMS[5].maxSellPrice}`,
				cost: random(ITEMS[5].minBuyPrice, ITEMS[5].maxBuyPrice),
			},
		],
	},
]

export let currentPlace = PLACES[0]

export function updateCurrentPlace(place) {
	currentPlace = place
}

export let turns = 25

export function decreaseTurns() {
	turns--
	if (turns < 0) {
		const main = document.querySelector('main')
		main.classList.add('over')
		main.innerHTML = 'Game Over'
	} else {
		document.querySelector('#turns').textContent = turns
	}
}
