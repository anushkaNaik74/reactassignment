import { Button, FormControl, TextField } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup';
import '../styles/Page1.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Page1 = () => {

    const [name, setName] = useState<string>('');
    const [isValidName, setIsValidName] = useState<boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [isValid, setValid] = useState<boolean>(false); // Change the type based on your needs
    const [value, setValue] = useState<string>(''); // Change the type based on your needs
    const [alertShown, setAlertShown] = useState<boolean>(false);
    const naigate = useNavigate();

    function handleSubmit() {
        if(!name || !value || !email){
            alert("Please Input all")
            naigate('/')
        }
        else{
            localStorage.setItem("Name", name)
            localStorage.setItem("Phone Number", value)
            localStorage.setItem("Email", email)
            naigate('/second-page')
        }
    }

    const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
        const inputValue = e.target.value;
        const isValidIndianPhoneNumber = indianPhoneNumberRegex.test(inputValue);

        setValid(isValidIndianPhoneNumber);
        setValue(inputValue);

        if (inputValue.length === 10 && !isValidIndianPhoneNumber && !alertShown) {
        alert('Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9');
        setAlertShown(true);
        } else if ((inputValue.length < 10 || inputValue.length > 10) && alertShown) {
        setAlertShown(false);
        }
      };

      const handleEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputEmail = e.target.value;
        const isValid = emailRegex.test(inputEmail);
    
        setIsValidEmail(isValid);
        setEmail(inputEmail);
    
        if (inputEmail.length > 0 && !isValid && !alertShown) {
          alert('Please enter a valid email address');
          setAlertShown(true);
        } else if (inputEmail.length === 0 && alertShown) {
          setAlertShown(false);
        }
      };

      const handleNameValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const inputName = e.target.value;
        const isValid = nameRegex.test(inputName);
    
        setIsValidName(isValid);
        setName(inputName);
    
        if (inputName.length > 0 && !isValid && !alertShown) {
          alert('Please enter a valid name (only letters and spaces are allowed)');
          setAlertShown(true);
        } else if (inputName.length === 0 && alertShown) {
          setAlertShown(false);
        }
      };
      

  return (
    <>
    <div className="form-container">
        <FormControl margin='normal' fullWidth>
            <span className='inp'>
            <TextField  id="outlined-basic" label="Name" variant="outlined" type='text' onChange={handleNameValidation} fullWidth value={name}/>
            <p style={{ color: isValidName ? 'green' : 'red' }}>
                {isValidName ? 'Valid Name' : 'Invalid Name'}
            </p>
            </span>
            <span className='inp'>
            <TextField  id="outlined-basic" label="Phone Number"  variant="outlined" fullWidth onChange={handleValidation}  value={value}/>
            <p style={{ color: isValid ? 'green' : 'red' }}>
                {isValid ? 'Valid Indian Phone Number' : 'Invalid Indian Phone Number'}
            </p>
            </span>
            <span className='inp'>
            <TextField id="outlined-basic" label="Email" variant="outlined" type='email' onChange={handleEmailValidation} fullWidth value={email} />
            <p style={{ color: isValidEmail ? 'green' : 'red' }}>
                {isValidEmail ? 'Valid Email Address' : 'Invalid Email Address'}
            </p>
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