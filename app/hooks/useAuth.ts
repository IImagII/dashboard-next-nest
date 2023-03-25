import { useContext } from 'react'

import { AuthContext } from '../providers/auth-provider/AuthProvider'

//это хук который необходим для авторизации берем тданные из providers->AuthProvider
export const useAuth = () => useContext(AuthContext)
