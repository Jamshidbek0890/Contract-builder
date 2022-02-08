import App from './App.svelte'
import 'bootstrap/scss/bootstrap.scss'
import '../assets/custom.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@babel/polyfill'
import author from '../assets/author.json'

const app = new App({
  target: document.querySelector('main'),
})

const footer = document.querySelector('#text-footer')

const link = document.createElement('a')
link.setAttribute('target', '_blank')
link.setAttribute('href', author.link)
link.classList.add('text-decoration-none', 'text-white')
link.textContent = author.name

const text = document.createTextNode(`${author.copyright} `)

footer.append(text, link)
