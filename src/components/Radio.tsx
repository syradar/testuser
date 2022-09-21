import { RadioGroup } from '@headlessui/react'
import { TestUserType } from 'utils/testUser'

interface RadioProps {
  options: TestUserType[]
  selected: TestUserType
  onChange: (value: TestUserType) => void
}
export const Radio = ({ options, selected, onChange }: RadioProps) => {
  return (
    <RadioGroup
      value={selected}
      onChange={onChange}
      className="flex flex-wrap gap-2"
    >
      <RadioGroup.Label className="w-full">Type</RadioGroup.Label>
      {options.map((option) => (
        <RadioGroup.Option key={option} value={option} className="">
          {({ checked }) => (
            <span
              className={`
            cursor-pointer select-none rounded p-2 text-white transition
            ${checked ? 'bg-blue-500' : ''}
            `}
            >
              {option}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}
