import React, { FC } from 'react'
import { FormGroup, Input, InputProps, Label } from 'reactstrap'
import './PrimaryInput.scss'

const PrimaryInput: FC<InputProps> = ({
 id,
 name,
 placeholder,
 type,
 label,
 defaultValue,
 value = '',
 min,
 max,
 step,
 onChange,
 required = false,
}) => {
 return (
  <FormGroup className="Primary__form-group">
   <Label className="Primary__form-label">{label}</Label>
   <Input
    id={id}
    onChange={onChange}
    value={value}
    name={name}
    placeholder={placeholder}
    type={type}
    min={min}
    max={max}
    step={step}
    defaultValue={defaultValue}
    className="Primary__form-input"
    required={required}
   />
  </FormGroup>
 )
}

export default PrimaryInput
