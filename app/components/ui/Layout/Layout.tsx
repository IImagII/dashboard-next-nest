import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

export const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
  return (
    <>
      <Meta {...meta} />
      <div>
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </>
  )
}

export default Layout
