import { Button, FormControl, TextField } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup';
import '../styles/Page1.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Page1 = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const naigate = useNavigate();

    function handleSubmit() {
        if(!name || !phone || !email){
            alert("Please Input all")
            naigate('/')
        }
        else{
            localStorage.setItem("Name", name)
            localStorage.setItem("Phone Number", phone)
            localStorage.setItem("Email", email)
            naigate('/second-page')
        }
    }
  return (
    <>
    <div className="form-container">
        <FormControl margin='normal' fullWidth>
            <span className='inp'>
            <TextField  id="outlined-basic" label="Name" variant="outlined" type='text' onChange={(event) => setName(event.target.value)}  value={name}/>
            </span>
            <span className='inp'>
            <TextField  id="outlined-basic" label="Phone Number" variant="outlined" type='text' onChange={(event) => setPhone(event.target.value)}  value={phone}/>
            </span>
            <span className='inp'>
            <TextField id="outlined-basic" label="Email" variant="outlined" type='email' onChange={(event) => setEmail(event.target.value)}  value={email} />
            </span>
            <Button variant="outlined" startIcon={<BackupIcon />} onClick={handleSubmit}>
                Submit
            </Button>
        </FormControl>
    </div>
    
    </>
    
  )
}

export default Page1