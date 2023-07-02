import { goalMoneyElement, moneyElement } from './elements.js'

const moneyFormatter = new Intl.NumberFormat('en-IN')

export let money = 250
export let goalMoney = 10000

export function addMoney(amount) {
	money += amount
	writeMoney()
}

export function deductMoney(amount) {
	money -= amount
	writeMoney()
}

export function writeMoney() {
	moneyElement.textContent = moneyFormatter.format(money)
}

export function writeGoalMoney() {
	goalMoneyElement.textContent = ' / ' + moneyFormatter.format(goalMoney)
}
