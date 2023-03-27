import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/ui/UserAvatar/UserAvatar.module.scss'

export const UserAvatar: FC<{
  avatarPath: string
  link: string
  title?: string
}> = ({ avatarPath, link, title }) => {
  return (
    <Link href={link}>
      <Image
        title={title}
        src={avatarPath}
        alt="avatar"
        width={50}
        height={50}
        className={styles.avatar}
      />
    </Link>
  )
}

export default UserAvatar
