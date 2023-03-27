import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@/ui/UserAvatar/UserAvatar.module.scss'

export const UserAvatar: FC<{ avatarPath: string }> = ({ avatarPath }) => {
  return (
    <Link href="/dashboard">
      <a>
        <Image
          src={avatarPath}
          alt="avatar"
          width={40}
          height={40}
          className={styles.avatar}
        />
      </a>
    </Link>
  )
}

export default UserAvatar
