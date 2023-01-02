import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Navigate, redirect as redirectPage } from 'react-router-dom'
import { debug } from 'console'

type Role = 'admin' | 'customer' | undefined

const withPermission =
  (roles: Role[], redirect = '') =>
  (Component: FC<any>) =>
  (props: any) => {
    const auth = useSelector((state: RootState) => ({
      profile: state.authentication.profile
    }))

    return roles.includes(auth.profile?.role)
      ? <Component {...props} />
      : redirect
         ? <Navigate to={redirect}></Navigate>
        : null
  }

export default withPermission
