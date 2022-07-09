import { nativeSelectClasses } from '@mui/material'

export const enableBlur = () => {
  const blur = document.getElementsByClassName('blur')[0]
  blur.style.display = 'flex'
}

export const disableBlur = () => {
  const blur = document.getElementsByClassName('blur')[0]
  blur.style.display = 'none'
}

export const disableInfoMessage = () => {
  const success = document.getElementsByClassName('success')[0]
  success.style.transition = '0s'
  success.style.right = '-300px'
}

export const enableInfoMessage = () => {
  const success = document.getElementsByClassName('success')[0]
  success.style.transition = '1s cubic-bezier(0.075, 0.82, 0.165, 1)'
  success.style.right = '30px'
}

export const disableSidenav = (delay) => {
  const nav = document.getElementsByClassName('side-nav')[0]

  if (!delay) {
    nav.style.transition = '0s'
  } else {
    nav.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'
  }
  nav.style.width = '0px'
  nav.style.padding = '0px'
}

export const enableSidenav = (delay) => {
  const nav = document.getElementsByClassName('side-nav')[0]

  nav.style.paddingLeft = '20px'
  nav.style.paddingTop = '40px'
  nav.style.paddingRight = '20px'
  if (delay) {
    nav.style.transition = '1s cubic-bezier(0.075, 0.82, 0.165, 1)'
  }
  nav.style.width = '190px'
}
