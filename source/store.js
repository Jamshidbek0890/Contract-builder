import { writable } from 'svelte/store'

export const number = writable()
export const date = writable()
export const fullName = writable()
export const passport = writable()
export const address = writable()
export const phone = writable()
export const messenger = writable({
  name: '',
  contact: '',
})
export const email = writable()
export const carModel = writable()
export const carYear = writable()
export const carEngine = writable()
export const carMileage = writable()
export const carCondition = writable()
export const carRequirements = writable()
export const carAppearance = writable()
export const carPrice = writable({
  from: '',
  to: '',
})
