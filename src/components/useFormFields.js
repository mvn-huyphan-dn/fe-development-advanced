import { useState } from "react/cjs/react.development";

export default function useFormFields(initialState) {
  const [fields, setFields] = useState(initialState)

  let handleChangeField = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;
    switch (type) {
      case 'checkbox':
        if (fields[name].findIndex(e => e === value) === -1) {
          setFields({
            ...fields,
            [name]: [...fields[name], value]
          })
        } else {
          setFields({
            ...fields,
            [name]: fields[name].filter(e => e !== value)
          })
        }
        break;
      default:
        setFields({
          ...fields,
          [name]: value
        })
        break;
    }
  }

  return {
    fields,
    setFields,
    handleChangeField
  }
}
