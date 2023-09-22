
import { data } from 'autoprefixer';
import './App.css'
import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up data',data);
}
  const handleUpdateProfile =(data)=>{
    console.log('update data',data);
  }
  return (
    <>
      <h1 className=' text-5xl'>Form Master</h1>
      <div className=' bg-teal-200'>
      <CustomHookForm></CustomHookForm>
      </div>
      <br />
      <div className=' bg-orange-200'>
      <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update profile</h2>
          <p>Always updated your profile</p>
        </div>
      </ReuseableForm>
      </div>
      <br />
      <br />
      <div className=' bg-lime-200'>
      <Grandpa></Grandpa>
      </div>
    </>
  )
}

export default App
