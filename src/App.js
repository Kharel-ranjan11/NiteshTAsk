import CreatableSelect from 'react-select/creatable'
import './App.css'
const App = () => {
  const options = [
    { value: 'jack', label: 'Jack', color: '#FF8B00' },
    { value: 'john', label: 'John', color: '#36B37E' },
    { value: 'mike', label: 'Mike', color: '#0052CC' }
  ]
  const colorStyles = {
    control: styles => ({
      ...styles,
      borderColor: styles.isFocused ? 'red' : 'red',
      boxShadow: styles.isFocused ? '0 0 20px transparent' : '0 0 2px transparent',
      // borderColor: '#f21d3d',
      '&:hover': {
        borderColor: 'red'
        // boxShadow: styles.isFocused ? '0 0 0 red' : '0 0 2px red'
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color }
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: '#fff'
      }
    },
    multiValueLabel: styles => {
      return {
        ...styles,
        color: '#fff'
      }
    },
    multiValueRemove: styles => {
      return {
        ...styles,
        color: '#fff',
        cursor: 'pointer',
        ':hover': {
          color: '#fff'
        }
      }
    }
  }
  const handleChange = (selectedOption, actionMeta) => {
    // console.log('handleChange', selectedOption, actionMeta)
  }
  const handleInputChange = (inputValue, actionMeta) => {
    // console.log('handleInputChange', inputValue, actionMeta)
  }
  console.log(colorStyles)
  return (
    <>
      <div style={{ width: '300px', margin: '3rem' }}>
        <CreatableSelect
          options={options}
          onChange={handleChange}
          onInputChange={handleInputChange}
          isMulti
          styles={colorStyles}
          className='select'
        />
      </div>
      <br /> <br />
    </>
  )
}

export default App
