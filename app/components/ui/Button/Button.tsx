import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/ui/Button/button.interface'
import styles from '@/ui/button/Button.module.scss'

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return <button className={cn(styles.button, className)}>{children}</button>
}

export default Button
