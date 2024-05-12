import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import { FaEye, FaEyeSlash, FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'

import s from './text-field.module.scss'

export type TextFieldProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  inputIcon?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearClick?: () => void
  onEnter?: () => void
  placeholder?: string
  value?: string
} & ComponentPropsWithoutRef<'input'>

const getType = (type: string, showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}

const TextFieldInner: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    className,
    disabled,
    errorMessage,
    label,
    onChangeValue,
    onClearClick,
    onEnter,
    placeholder,
    type = 'text',
    value,
    ...restProps
  },
  ref
) => {
  const isError = errorMessage ? s.error : ''
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const cleanTextHandler = () => {
    onClearClick?.()
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(e.currentTarget.value)
  }

  const onPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    onEnter && e.key === 'Enter' && onEnter()
  }

  return (
    <div className={className}>
      <label className={s.label}>{label}</label>
      <div className={s.inputWrapper}>
        {type === 'search' ? (
          <div className={s.searchIcon}>
            <FaMagnifyingGlass />
          </div>
        ) : null}

        {type === 'password' && (
          <button
            className={s.inputIcon}
            onClick={() => setShowPassword(!showPassword)}
            type={'button'}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}

        {type === 'search' && value && (
          <button className={s.inputIcon} onClick={cleanTextHandler} type={'button'}>
            <FaXmark />
          </button>
        )}

        <input
          className={`${isError ? isError : s.default}`}
          disabled={disabled}
          onChange={onChangeValueHandler}
          placeholder={placeholder}
          ref={ref}
          type={getType(type, showPassword)}
          value={value}
          {...restProps}
          onKeyDown={onPressEnterHandler}
        />
      </div>
      {errorMessage ? <div className={s.errorMessage}>{errorMessage}</div> : null}
    </div>
  )
}

export const TextField = forwardRef(TextFieldInner)
