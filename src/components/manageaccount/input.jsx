import React from 'react'

const Input = ({value, setValue, type, label}) => {
    return (
        <div className="form-group space-y-4 w-full mb-3">
        <label className="block font-semibold" htmlFor={type}>
          {label}
        </label>
        <input
          className="block form__input border border-black focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
          type={type}
          placeholder=""
          name={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    )
}

export default Input