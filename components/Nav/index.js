import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { DuelIcon, MenuIcon, OverviewIcon, SiteIcon } from '../../utils/icons'
import { useRouter } from 'next/router'
import { Link } from '../../routes'
import {
  disableBlur,
  disableBlur2,
  disableSidenav,
  enableBlur,
  enableBlur2,
  enableSidenav,
} from '../../utils/functions/css'
const Nav = () => {
  const bp850 = useMediaQuery('(max-width:850px)')
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()

  useEffect(() => {
    document.getElementById('blur-2').addEventListener('click', (e) => {
      disableSidenav(true)
      disableBlur2()
    })
  }, [])

  const enableNav = () => {
    enableBlur2()
    setShowNav(true)
    enableSidenav(true)
  }

  const GetLinkRender = ({ icon, text, route }) => {
    const activatedStyles = router.pathname === route ? true : false
    return (
      <div
        style={{
          marginTop: 15,
          backgroundColor: activatedStyles ? '#313239' : null,
        }}
        className="nav-link"
      >
        <Link route={route}>
          <a
            style={{ columnGap: '10px' }}
            className="flex-box align-items-center link-cancel-default"
          >
            {icon}

            <span style={{ color: activatedStyles ? 'white' : null }}>
              {text}
            </span>
          </a>
        </Link>
      </div>
    )
  }

  useEffect(() => {
    if (bp850) {
      const background = document.getElementsByClassName('background')[0]
      background.style.marginLeft = '0px'
      setShowNav(false)
      disableSidenav()
    } else {
      const background = document.getElementsByClassName('background')[0]
      background.style.marginLeft = '200px'
      setShowNav(true)
      enableSidenav(false)
    }
  }, [bp850])

  if (!bp850) {
    return (
      <nav className="side-nav">
        <div className="" style={{ columnGap: '10px', marginBottom: 40 }}>
          <Link route="/">
            <a
              style={{ columnGap: '10px' }}
              className="link-cancel-default flex-box align-items center cursor=pointer"
            >
              <SiteIcon width={25} height={25} />
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
        </div>
        <GetLinkRender
          icon={<OverviewIcon widht={22} height={22} fill={'#a0a1a3'} />}
          text={'Overview'}
          route={'/'}
        />

        <GetLinkRender
          icon={<DuelIcon widht={22} height={22} fill={'#a0a1a3'} />}
          text="Create Table"
          route={'/table'}
        />
      </nav>
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
          <span>Menu</span>
        </div>
      </button>
      <nav className="side-nav">
        <div className="" style={{ columnGap: '10px', marginBottom: 40 }}>
          <Link route="/">
            <a
              style={{ columnGap: '10px' }}
              className="link-cancel-default flex-box align-items center cursor=pointer"
            >
              <SiteIcon width={25} height={25} />
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
        </div>
        <GetLinkRender
          icon={<OverviewIcon widht={22} height={22} fill={'#a0a1a3'} />}
          text={'Overview'}
          route={'/'}
        />

        <GetLinkRender
          icon={<DuelIcon widht={22} height={22} fill={'#a0a1a3'} />}
          text="Create Table"
          route={'/table'}
        />
      </nav>
    </>
  )
}
export default Nav
