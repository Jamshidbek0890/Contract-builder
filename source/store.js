import { readable, writable } from 'svelte/store'
import CarSelectionIndividual from './contracts/CarSelectionIndividual.svelte'
import CarSelectionIndividualForm from './forms/CarSelectionIndividualForm.svelte'
import CarSelectionIndividualAnnex from './contracts/CarSelectionIndividualAnnex.svelte'
import CarSelectionIndividualAnnexForm from './forms/CarSelectionIndividualAnnexForm.svelte'
import CarSelectionLegal from './contracts/CarSelectionLegal.svelte'
import CarSelectionLegalForm from './forms/CarSelectionLegalForm.svelte'
import CarSelectionLegalAnnex from './contracts/CarSelectionLegalAnnex.svelte'
import CarSelectionLegalAnnexForm from './forms/CarSelectionLegalAnnexForm.svelte'

export const contracts = readable(null, (set) => {
  set([
    {
      name: 'Подбор автотранспортного средства для физ лиц',
      components: [
        {
          name: 'Договор',
          component: CarSelectionIndividual,
          form: CarSelectionIndividualForm,
        },
        {
          name: 'Приложение',
          component: CarSelectionIndividualAnnex,
          form: CarSelectionIndividualAnnexForm,
        },
      ],
    },
    {
      name: 'Подбор автотранспортного средства для юр лиц',
      components: [
        {
          name: 'Договор',
          component: CarSelectionLegal,
          form: CarSelectionLegalForm,
        },
        {
          name: 'Приложение',
          component: CarSelectionLegalAnnex,
          form: CarSelectionLegalAnnexForm,
        },
      ],
    },
  ])
  return null
})

export const number = writable()
export const date = writable()
export const fullName = writable({
  name: '',
  surname: '',
  fatherhood: '',
})
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
export const ownership = writable({
  short: '',
  full: '',
})
export const companyName = writable()
export const stateRegistration = writable({
  type: '',
  registrationNumber: '',
  taxpayerNumber: '',
})
export const bankAccount = writable({
  bankName: '',
  bankCode: '',
  current: '',
  correspondent: '',
})
export const deposit = writable()
