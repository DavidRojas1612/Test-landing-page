import React from 'react'
import './Input.scss'

const Input = ({
  type,
  value,
  defaultValue,
  id,
  minLength,
  maxLength,
  name,
  required,
  autoComplete,
  disabled,
  ref,
  placeholder,
  theme,
  onKeyDown,
  onChange
}) => (
    <div className='input'>
      <label className='input__label'>
        {name && <span>{name}</span>}
        <input
          value={value}
          id={id}
          className={`input__main ${theme || ''}`}
          type={type || 'text'}
          minLength={minLength}
          maxLength={maxLength}
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onChange={onChange}
          ref={ref}
        />
      </label>
    </div>
  )

export default Input
