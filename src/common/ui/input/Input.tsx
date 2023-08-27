import { FC, ComponentProps, useState, ChangeEvent } from 'react'

import css from './input.module.scss'

import { CloseOpticIcon } from 'common/assets/icons/CloseOpticIcon'
import { DeleteIcon } from 'common/assets/icons/DeleteIcon'
import { OpticIcon } from 'common/assets/icons/OpticIcon'
import { SearchIcon } from 'common/assets/icons/SearchIcon'

type Props = ComponentProps<'input'> & {
  label?: string
  error?: boolean
  errorMessage?: string
  fullWidth?: boolean
  onChangeValue?: (value: string) => void
  onClear?: () => void
  onSearch?: (value: string) => void
}

export const Input: FC<Props> = ({
  onChangeValue,
  label,
  className,
  error,
  errorMessage,
  onChange,
  type,
  onClear,
  value,
  fullWidth,
  onSearch,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(() => (value ? value : ''))

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
    setInputValue(e.currentTarget.value)
  }

  const clearInput = () => {
    onClear?.()
    setInputValue('')
  }

  const [inputType, setInputType] = useState<string>(type || 'text')
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    if (open) {
      setInputType('password')
      setOpen(false)
    } else {
      setInputType('text')
      setOpen(true)
    }
  }

  const componentStyle = `${css.label} ${className}`
  const inputStyle = error || errorMessage ? css.error : ''
  const opticIcon = open ? (
    <CloseOpticIcon className={css.optic} onClick={openHandler} />
  ) : (
    <OpticIcon className={css.optic} onClick={openHandler} />
  )

  const onSearchCallback = () => {
    if (inputValue && onSearch && typeof inputValue === 'string') {
      onSearch(inputValue.trim())
    }
  }

  return (
    <>
      <label
        className={componentStyle}
        style={{ width: fullWidth ? '100%' : '' }}
      >
        {type === 'password' && opticIcon}
        {type === 'search' && (
          <SearchIcon className={css.search} onClick={onSearchCallback} />
        )}
        {type === 'search' && inputValue && (
          <DeleteIcon className={css.delete} onClick={clearInput} />
        )}

        {label && <span>{label}</span>}
        <input
          type={inputType}
          className={inputStyle}
          value={inputValue}
          onChange={onChangeCallback}
          {...rest}
        />
        {errorMessage && <span className={css.message}>{errorMessage}</span>}
      </label>
    </>
  )
}
