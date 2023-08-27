import { LogoIcon } from 'common/assets/icons/LogoIcon'
import User from 'common/assets/images/user.jpg'
import Guest from 'common/assets/images/guest.jpg'

import style from './header.module.scss'
import { BasketIcon } from 'common/assets/icons/BasketIcon'
import { UserAva } from 'common/ui/userAva/UserAva'
import { Input } from 'common/ui/input/Input'

export const Header = () => {
  const isLogged = false
  const avatarSrc = isLogged ? User : Guest

  return (
    <header className={style.header}>
      <div className={style.content}>
        <LogoIcon width={120} fill="#FFF" />
        <UserAva src={avatarSrc} />
        <Input type="search" />
        <BasketIcon width={25} className={style.basket} />
      </div>
    </header>
  )
}
