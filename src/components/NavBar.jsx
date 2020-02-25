import React from 'react'
import { useAuth0 } from '../lib/auth0'
import {classnames} from "tailwindcss-classnames"
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div
    className={classnames('text-center')}>
      {!isAuthenticated && (
        <button
        type="button"
        className={classnames(
          'bg-blue-500',
          'hover:bg-blue-700',
          'text-white',
          'font-bold',
          'py-2',
          'px-4',
          'w-1/12',
          'rounded',
          'shadow-xl',
          'mt-12',
          'inline',
          'm-auto'
        )}
        onClick={() => loginWithRedirect({})}
      >
        Sign in
      </button>
      )}

      {isAuthenticated && <button
        type="button"
        className={classnames(
          'bg-blue-500',
          'hover:bg-blue-700',
          'text-white',
          'font-bold',
          'py-2',
          'px-4',
          'w-1/12',
          'rounded',
          'shadow-xl',
          'mt-12',
          'inline',
          'm-auto'
        )}
        onClick={() => logout({})}
      >
        Logout
      </button>}
    </div>
  )
}

export default NavBar
