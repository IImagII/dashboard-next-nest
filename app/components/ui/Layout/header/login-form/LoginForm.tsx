import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import UserAvatar from '@/components/ui/UserAvatar/UserAvatar'

import styles from '@/ui/Layout/header/login-form/LoginForm.module.scss'
import { IAuthFields } from '@/ui/Layout/header/login-form/login-form.interface'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { validEmail } from './login-form.valid'

export const LoginForm: FC = () => {
  const { ref, setIsShow, isShow } = useOutside(false) // тут применяем кастомный хук коотрый закрывает при клике вне модального окна

  const [type, setType] = useState<'login' | 'register'>('login') //форма будет облегченная у нее будет два состояния (login или registration)

  const { user, setUser } = useAuth()

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
      {user ? (
        <UserAvatar avatarPath={user.avatarPath || ''} />
      ) : (
        <button onClick={() => setIsShow(!isShow)} className={styles.button}>
          <FaRegUserCircle />
        </button>
      )}
      {isShow && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'Email is  required',
              pattern: {
                value: validEmail,
                message: 'Please enter a valid email'
              }
            })}
            //@ts-ignore
            placeholder="Email"
            error={errors.email}
          />
          <Field
            {...register('password', {
              required: 'password is  required',
              minLength: {
                value: 6,
                message: 'Min length should more 6'
              }
            })}
            //@ts-ignore
            placeholder="password"
            error={errors.password}
            type={'password'}
          />
          <div className="mt-5 mb-1 text-center">
            <Button onClick={() => setType('login')}>Login</Button>
          </div>
          <button
            onClick={() => setType('register')}
            className={styles.register}
          >
            Register
          </button>
        </form>
      )}
    </div>
  )
}

export default LoginForm
