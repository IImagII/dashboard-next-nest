import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import styles from './LoginForm.module.scss'
import { IAuthFields } from './login-form.interface'

export const LoginForm: FC = () => {
  const { ref, setIsShow, isShow } = useOutside(false) // тут применяем кастомный хук коотрый закрывает при клике вне модального окна

  const [type, setType] = useState<'login' | 'register'>('login') //форма будет облегченная у нее будет два состояния (login или registration)

  const { setUser } = useAuth()

  // это делаем кастомный хук и берем из нашего контекста что мы создавали AuthProvider

  //бурем для валидации из  библиотеки react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthFields>({
    mode: 'onChange' //в данной строке показывается то что ошибки нам будут отдаваться сразу после написания текста
  })

  //тут мы выбираем какая форма будет у нас показываться
  const onSubmit: SubmitHandler<IAuthFields> = (data) => {
    if (type === 'login')
      setUser({
        id: 1,
        email: 'test@test.com',
        avatarPath: '/man.png',
        name: 'Alex'
      })
    // else if(type==='register' registerSunc(data))
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)} className={styles.button}>
        <FaRegUserCircle />
      </button>
      {isShow && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}></form>
      )}
    </div>
  )
}

export default LoginForm
