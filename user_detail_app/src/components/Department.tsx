import { Badge, Box, Checkbox, Collapse, FormControlLabel, FormGroup, IconButton } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
const Department = () => {
    const [checked, setChecked] = useState([true, false]);
    const [checked1, setChecked1] = useState([true, false, false]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    // const [dept, setDept] = useState([false, false])
    
    const handleChange_dept = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
      setChecked1([event.target.checked, event.target.checked, event.target.checked])
    };

  const handleChange_customerService = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange_design = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleChange1_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([event.target.checked, checked1[1], checked1[2]]);
  };

  const handleChange2_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], event.target.checked, checked1[2]]);
  };

  const handleChange3_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1([checked1[0], checked1[1], event.target.checked]);
  };

  const determineIndeterminate = () => {
    return (checked1.some((item) => item) && !checked1.every((item) => item));
 };

 const determineIndeterminate1 = () => {
  return ((checked1.some((item) => item) && !checked1.every((item) => item)) && (checked.some((item) => item) && !checked.every((item) => item)));
};
  const customer_Service = (
    <Collapse in={open1} timeout="auto"
                        unmountOnExit> 
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormGroup>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
  
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      </FormGroup>
    </Box>
    </Collapse>
  );
   
  const design = (
    <Collapse in={open2} timeout="auto"
                        unmountOnExit> 
    
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormGroup>
      <FormControlLabel
        label="Graphic Design"
        control={<Checkbox checked={checked1[0]} onChange={handleChange1_1} />}
      />
  
      <FormControlLabel
        label="Product Design"
        control={<Checkbox checked={checked1[1]} onChange={handleChange2_1} />}
      />

      <FormControlLabel
        label="Web Design"
        control={<Checkbox checked={checked1[2]} onChange={handleChange3_1} />}
      />
      </FormGroup>
    </Box>
    </Collapse>
  );

  const department = (
    <Collapse in={open} timeout="auto"
                        unmountOnExit> 
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormGroup>
          <div>
        <Badge>
          <IconButton 
            onClick={() => setOpen1(!open1)} 
            aria-label="expand"
            size="small"
          > 
            {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 
          </IconButton> 
        </Badge>     
          <FormControlLabel
            label="Customer Service"
            control={
                <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange_customerService}
                />
            }
          />
          {customer_Service}
          </div>
          <div>
        <Badge>
          <IconButton 
            onClick={() => setOpen2(!open2)} 
            aria-label="expand"
            size="small"
          > 
            {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 
          </IconButton> 
        </Badge>     
          <FormControlLabel
            label="Design"
            control={
                <Checkbox
                checked={checked1[0] && checked1[1] && checked1[2]}
                indeterminate={determineIndeterminate()}
                onChange={handleChange_design}
                />
            }
          />
          {design}
          </div>
        </FormGroup>
    </Box>
    </Collapse>
  );
   
  return (
    <div>
    <Badge>
    <IconButton 
      onClick={() => setOpen(!open)} 
      aria-label="expand"
      size="small"
    > 
      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 
    </IconButton> 
    </Badge>                
    <FormControlLabel
            label="Department"
            control={
                <Checkbox
                checked={checked[0] && checked[1] && checked1[0] && checked1[1] && checked1[2]}
                indeterminate={determineIndeterminate1()}
                onChange={handleChange_dept}
                />
            }
      />
      {department}
    
    </div>
  )
}

export default Department