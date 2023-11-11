import { LogoIcon } from 'common/assets/icons/LogoIcon'
import User from 'common/assets/images/user.jpg'
import Guest from 'common/assets/images/guest.jpg'

import style from './header.module.scss'
import { BasketIcon } from 'common/assets/icons/BasketIcon'
import { UserAva } from 'common/ui/userAva/UserAva'
import { Input } from 'common/ui/input/Input'
import { Link, useLocation } from 'react-router-dom'
import { AUTH } from 'app/paths'
import { useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth/model/selectors'

export const Header = () => {
  const location = useLocation()
  const currentPathName = location.pathname
  const isLogged = useAppSelector(authSelectors.isLogged)
  const avatarSrc = isLogged ? User : Guest

  return (
    <header className={style.header}>
      <div className={style.content}>
        <LogoIcon width={120} />
        {isLogged ? (
          <div className={style.user}>
            <UserAva src={avatarSrc} />
            <span>User name</span>
          </div>
        ) : (
          <Link to={AUTH} state={currentPathName}>
            Sing In
          </Link>
        )}

        <Input type="search" />
        <BasketIcon width={25} className={style.basket} />
      </div>
    </header>
  )
}
