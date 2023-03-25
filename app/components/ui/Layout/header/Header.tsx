import { FC } from 'react'

import style from './Header.module.scss'
import Logo from './Logo'
import LoginForm from './login-form/LoginForm'

export const Header: FC = () => (
  <header className={style.header}>
    <Logo />
    <LoginForm />
  </header>
)

export default Header
