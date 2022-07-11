import React from 'react'
const NoMetamask = () => {
  return (
    <div className="table">
      <div className="table__form">
        <h1 style={{ textAlign: 'center' }}>
          User needs to have{' '}
          <a
            href="https://metamask.io/"
            className="link-cancel-default"
            style={{ textDecoration: 'underline' }}
          >
            Metamask
          </a>{' '}
          installed to join the battles!
        </h1>
      </div>
    </div>
  )
}
export default NoMetamask
