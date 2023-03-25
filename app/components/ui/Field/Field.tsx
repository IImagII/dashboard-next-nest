import { FC, forwardRef } from 'react'

import styles from '@/ui/Field/Field.module.scss'
import { IField } from '@/ui/Field/field.interface'

const Field: FC = forwardRef<HTMLInputElement, IField>(
  ({ error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={styles.input} style={style}>
        <input type={type} {...rest} ref={ref} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
Field.displayName = 'Field'

export default Field
