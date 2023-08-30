'use client'

import { SessionProvider } from 'next-auth/react'


const Provider = ({ children, session }) => {
  return (
    // <SessionProvider />takes care of keeping the session updated and synced between browser tabs and windows.
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
