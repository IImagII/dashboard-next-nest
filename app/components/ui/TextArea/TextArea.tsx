import { FC, forwardRef } from 'react'

import styles from '@/ui/TextArea/TextArea.module.scss'
import { ITextArea } from '@/ui/TextArea/text-area.interface'

const TextArea: FC = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, style, ...rest }, ref) => {
    return (
      <div className={styles['editor']} style={style}>
        <textarea ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
TextArea.displayName = 'TextArea'

export default TextArea
