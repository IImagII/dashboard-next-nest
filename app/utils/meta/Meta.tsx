import Head from 'next/head'
import { FC } from 'react'

import { IMeta } from './meta.interface'

//вспомогательный компонент для оформления то сть делаем заголовок для каждого page
const Meta: FC<IMeta> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* вставляем favicon таким кодом */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* вставляем описание страницы будет динамическое */}
        {description ? (
          <meta
            name="description"
            itemProp="description"
            content="description"
          />
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}

export default Meta
