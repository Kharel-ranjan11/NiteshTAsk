import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import CreatableSelect from 'react-select/creatable'
import './App.css'
import { ChartS } from './components/Chart'
import { ProgressBar } from './components/Progress'
import { FormStep } from './components/Formstep'
import ReactSwiper from './components/Swiper'
// import ReactPlayer from 'react-player'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
const App = () => {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // =======For Login and  sing UP form=====================================
  const [Bool, setBool] = useState(false)
  console.log(Bool)
  const options = [
    { value: 'jack', label: 'Jack', color: '#FF8B00' },
    { value: 'john', label: 'John', color: '#36B37E' },
    { value: 'a', label: 'a', color: '#0052CC' },
    { value: 'b', label: 'b', color: '#0052CC' },
    { value: 'c', label: 'c', color: '#0052CC' },
    { value: 'd', label: 'd', color: '#0052CC' },
    { value: 'e', label: 'e', color: '#0052CC' },
    { value: 'f', label: 'f', color: '#0052CC' },
    { value: 'g', label: 'g', color: 'silver' }
  ]
  const colorStyles = {
    control: styles => ({
      ...styles,
      // =====================================================================
      backgroundColor: 'red', //added
      opacity: '0.4',

      // =====================================================================
      borderColor: styles.isFocused ? 'red' : 'red',
      boxShadow: styles.isFocused ? '0 0 0 transparent' : '0 0 0 transparent',
      '&:hover': {
        borderColor: 'red'
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      console.log(data)
      // ==========================================================================
      return {
        ...styles,
        color: 'green',
        // color: isFocused ? 'green' : 'blue', <----- use if u want
        '&:hover': {
          backgroundColor: 'red'
        },
        backgroundColor: isSelected ? 'white' : 'white'
        // backgroundColor: 'yellow',
      }
      // ==========================================================================
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: 'green',
        color: '#fff',
        ':hover': {
          color: 'red',
          opacity: 0.4
        }
      }
    },
    multiValueLabel: styles => {
      return {
        ...styles,
        color: 'yellow',
        ':hover': {
          color: 'red',
          opacity: 0.4
        }
      }
    },
    multiValueRemove: styles => {
      return {
        ...styles,
        color: 'blue',
        cursor: 'pointer',
        ':hover': {
          color: 'red'
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
  // console.log(colorStyles)
  return (
    <>
      <ChartS />
      <ProgressBar />
     <div className="swiper" style={{width:'700px'}}>
      <ReactSwiper/>
     </div>
      <FormStep />
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
      <section>
        <div className='tabs'>
          <div className='tabList'>
            <div
              className={index === 0 ? 'tab activeTab' : 'tab inactiveTab'}
              onClick={() => setIndex(0)}
            >
              Tab One
            </div>
            <div
              className={index === 1 ? 'tab activeTab' : 'tab inactiveTab'}
              onClick={() => setIndex(1)}
            >
              Tab Two
            </div>
            <div
              className={index === 2 ? 'tab activeTab' : 'tab inactiveTab'}
              onClick={() => setIndex(2)}
            >
              Tab Three
            </div>
          </div>
          <div
            className={index === 0 ? 'tabPanel inactive' : 'tabPanel active'}
          >
            <div>
              <h3>About Computer</h3>A computer is a machine that can be
              programmed to carry out sequences of arithmetic or logical
              operations (computation) automatically. Modern digital electronic
              computers can perform generic sets of operations known as
              programs. These programs enable computers to perform a wide range
              of tasks.
            </div>
          </div>
          <div
            className={index === 1 ? 'tabPanel inactive' : 'tabPanel active'}
          >
            <h3>About hardware</h3>
            <div>
              Hardware refers to the external and internal devices and equipment
              that enable you to perform major functions such as input, output,
              storage, communication, processing, and more. There are two types
              of computer hardware: external and internal.
            </div>
          </div>
          <div
            className={index === 2 ? 'tabPanel inactive' : 'tabPanel active'}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              deleniti placeat corporis nobis aliquam qui voluptates cum hic ad
              blanditiis eius debitis quod rerum quidem consequuntur, quam
              excepturi quaerat eos!
            </div>
          </div>
        </div>
      </section>
      {/* <div className='player'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=hp_-RlwNg04'
          volume={0.5}
        />
      </div> */}
      <br /> <br />
      {/* =================================================================================================== */}
      {/* =================================================================================================== */}
      {/* < Login Form > */}
      {/* =================================================================================================== */}
      {/* =================================================================================================== */}
      <div className='form'>
        <div>
          <div className={Bool ? 'content' : 'content'}>
            <h3>Welcome Back</h3>
            <span>
              To keep connected with us please login with your personal details
            </span>
            <button onClick={() => setBool(!Bool)}>Login</button>
          </div>

          <div className='Forms'>
            <form autoComplete='off' method='get'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Name...'
              />
              <label htmlFor='Email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email...'
              />
              <label htmlFor='Password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Enter Password...'
              />
              <input type='submit' value='Login' />
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Button onClick={handleOpen}>Play Video</Button>
      <Modal
        sx={{ background: 'pink' }}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box>
          <ReactPlayer
            style={{ background: 'red', width: '30px' }}
            url='https://www.youtube.com/watch?v=hp_-RlwNg04'
            volume={0.5}
          />
        </Box>
      </Modal>
    </>
  )
}

export default App
