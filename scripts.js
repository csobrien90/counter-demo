// ---------------------
//  Functional Counter
// ---------------------

// Get DOM Elements
const functionalCounter = document.getElementById('functional-counter')
const decrementBtn = functionalCounter.querySelector('.decrement')
const incrementBtn = functionalCounter.querySelector('.increment')
const countSpan = functionalCounter.querySelector('.count')

// Set initial count
let count = 0

// Add event listeners
decrementBtn.addEventListener('click', (e) => {
	e.preventDefault()
	count--
	countSpan.textContent = count
})

incrementBtn.addEventListener('click', (e) => {
	e.preventDefault()
	count++
	countSpan.textContent = count
})


// ---------------------
//      OOP Counter
// ---------------------

class Counter {
	constructor(element) {
		// Set initial state
		this.element = element
		this.count = 0

		// Get DOM Elements
		this.decrementBtn = element.querySelector('.decrement')
		this.incrementBtn = element.querySelector('.increment')
		this.countSpan = element.querySelector('.count')

		// Add event listeners
		this.addEventListeners()
	}

	addEventListeners() {
		this.decrementBtn.addEventListener('click', (e) => {
			e.preventDefault()
			this.decrement()
		})

		this.incrementBtn.addEventListener('click', (e) => {
			e.preventDefault()
			this.increment()
		})
	}

	increment() {
		this.countSpan.textContent = ++this.count
	}

	decrement() {
		this.count--
		this.countSpan.textContent = ++this.count
	}
}

const classCounter = new Counter(document.getElementById('class-counter'))


// ---------------------
//  Minimalist Counter
// ---------------------

const [d, p, i] = document.getElementById('minimalist-counter').children
const op = (e) => {p.firstElementChild.textContent = +p.firstElementChild.textContent + (e.target === d ? -1 : 1)}
[d, i].forEach(el => el.addEventListener('click', op))