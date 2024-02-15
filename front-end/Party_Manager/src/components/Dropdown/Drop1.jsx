import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function Drop1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    navigate('/')
  };
  const handleClose2 = () => {
    setAnchorEl(null);
    navigate('/bookings')
  };
  const handleClose3 = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate('/signup')
  };

  const navigate=useNavigate();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Hi, {localStorage.getItem("username")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose1}>Profile</MenuItem>
        <MenuItem onClick={handleClose2}>Booked</MenuItem>
        <MenuItem onClick={handleClose3}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
