import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import btcJSON from '../../assets/JSON/icons8-bitcoin (1).json'
import { Link } from '../../routes'
import {
  disableBlur2,
  disableSidenav,
  enableBlur2,
  enableSidenav,
} from '../../utils/functions/css'
import { DuelIcon, MenuIcon, OverviewIcon } from '../../utils/icons'
import PermaLoopAnimation from '../PermaLoopAnimation'
const Nav = () => {
  const bp850 = useMediaQuery('(max-width:850px)')
  const [showNav, setShowNav] = useState(false)
  const router = useRouter().pathname

  useEffect(() => {
    document.getElementById('blur-2').addEventListener('click', (e) => {
      disableSidenav(true, bp850, true)
      disableBlur2()
    })
  }, [])

  const enableNav = () => {
    enableBlur2()
    setShowNav(true)
    enableSidenav(true)
  }

  useMemo(() => {
    if (bp850) {
      disableSidenav(true, bp850, true)
      disableBlur2()
    }
  }, [router])
  const GetLinkRender = ({ icon, text, route }) => {
    const activatedStyles = router === route ? true : false
    return (
      <Link route={route}>
        <div
          style={{
            marginTop: 15,
            backgroundColor: activatedStyles ? '#313239' : null,
          }}
          className="nav-link"
        >
          <a
            style={{ columnGap: '10px' }}
            className="flex-box align-items-center link-cancel-default"
          >
            {icon}

            <span style={{ color: activatedStyles ? 'white' : null }}>
              {text}
            </span>
          </a>
        </div>
      </Link>
    )
  }

  const BottomLinkRender = ({ text, route }) => {
    const activatedStyles = router === route ? true : false
    return (
      <Link route={route}>
        <div
          style={{
            marginTop: 15,
            backgroundColor: activatedStyles ? '#313239' : null,
          }}
          className="nav-link"
        >
          <a
            style={{ columnGap: '10px' }}
            className="flex-box align-items-center link-cancel-default "
          >
            <span
              style={{ color: activatedStyles ? 'white' : null }}
              className="nav-link__btm-links"
            >
              {text}
            </span>
          </a>
        </div>
      </Link>
    )
  }

  useEffect(() => {
    if (bp850) {
      const background = document.getElementsByClassName('background')[0]
      background.style.marginLeft = '0px'
      setShowNav(false)
      disableSidenav(true, bp850)
    } else {
      const background = document.getElementsByClassName('background')[0]
      background.style.marginLeft = '190px'
      setShowNav(true)
      enableSidenav(false)
      disableBlur2()
    }
  }, [bp850])

  if (!bp850) {
    return (
      <>
        <nav className="side-nav">
          <div
            className="flex-box flex-direction-column space-between"
            style={{ height: '100%' }}
          >
            <div className="" style={{ columnGap: '10px' }}>
              <Link route="/">
                <a
                  style={{ columnGap: '10px' }}
                  className="link-cancel-default flex-box align-items center cursor=pointer"
                >
                  <PermaLoopAnimation
                    width={25}
                    height={25}
                    centered={false}
                    speed={0.5}
                    animJSON={btcJSON}
                  />
                  <h2
                    style={{
                      fontWeight: 800,
                      fontFamily: 'Helvetica, sans-serif',
                      color: 'white',
                    }}
                  >
                    Coinflip.app
                  </h2>
                </a>
              </Link>
              <div className="" style={{ marginTop: 50 }}>
                <GetLinkRender
                  icon={
                    <OverviewIcon widht={22} height={22} fill={'#a0a1a3'} />
                  }
                  text={'Overview'}
                  route={'/'}
                />
              </div>

              <GetLinkRender
                icon={<DuelIcon widht={22} height={22} fill={'#a0a1a3'} />}
                text="Create Table"
                route={'/table/new'}
              />
            </div>

            <div className="" style={{ marginBottom: 30 }}>
              <BottomLinkRender text={'FAQ'} route={'/faq'} />
              <BottomLinkRender text={'Contracts'} route={'/contracts'} />
            </div>
          </div>
        </nav>
      </>
    )
  }

  return (
    <>
      <button className="menu-button">
        <div
          className="flex-box align-items-center"
          style={{ columnGap: '10px' }}
          onClick={enableNav}
        >
          <MenuIcon width={22} height={22} />
        </div>
      </button>
      <nav className="side-nav">
        <div
          className="flex-box flex-direction-column space-between"
          style={{ height: '100%' }}
        >
          <div className="" style={{ columnGap: '10px' }}>
            <Link route="/">
              <a
                style={{ columnGap: '10px' }}
                className="link-cancel-default flex-box align-items center cursor=pointer"
              >
                <PermaLoopAnimation
                  width={25}
                  height={25}
                  centered={false}
                  speed={0.5}
                  animJSON={btcJSON}
                />
                <h2
                  style={{
                    fontWeight: 800,
                    fontFamily: 'Helvetica, sans-serif',
                    color: 'white',
                  }}
                >
                  Coinflip.app
                </h2>
              </a>
            </Link>
            <div className="" style={{ marginTop: 50 }}>
              <GetLinkRender
                icon={<OverviewIcon widht={22} height={22} fill={'#a0a1a3'} />}
                text={'Overview'}
                route={'/'}
              />
            </div>

            <GetLinkRender
              icon={<DuelIcon widht={22} height={22} fill={'#a0a1a3'} />}
              text="Create Table"
              route={'/table/new'}
            />
          </div>

          <div className="" style={{ marginBottom: 30 }}>
            <BottomLinkRender text={'FAQ'} route={'/faq'} />
            <BottomLinkRender text={'Contracts'} route={'/contracts'} />
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav
