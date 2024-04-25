import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: '200px', // Set the width of the search input
  border: '2px solid black', // Set border to 2px solid black
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black', // Set input color to black
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
  },
}));

export default function SearchAppBar() {
  const [value, setValue] = React.useState(0);

  const handleNext = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handlePrev = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  return (
    <Box >
      <AppBar position="static" sx={{ backgroundColor: 'white', maxWidth: "1024px", margin: "0 auto" }}>
        <Toolbar>
          <img src="https://static.tildacdn.one/tild3664-3139-4231-b664-663965386239/uzum-footer.png" alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          <CenteredBox sx={{ marginRight: "" }}>
            <Button variant="contained" color="primary" sx={{ marginRight: '16px' }}>
              Katalog
            </Button>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 2, marginLeft: "10%" }}>
              <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/basicmodal"}>Kirish</NavLink>
              <li>
                <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Saralangan</Typography>
              </li>
              <li>
                <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Savat</Typography>
              </li>
            </ul>
          </CenteredBox>
        </Toolbar>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
          <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/"}>Home</NavLink>
          <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/erkaklar"}>Electronika</NavLink>
          <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/muddatli"}>Muddatli</NavLink>

          <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/erkaklar"}>Elecronika</NavLink>
          <NavLink style={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }} to={"/muddatli"}>Muddatli</NavLink>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Salomatlik</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Salomatlik</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Salomatlik</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Salomatlik</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Salomatlik</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Kiyimlar</Typography>
          </li>
          <li>
            <Typography sx={{ textAlign: 'center', marginTop: '20px', color: "black", margin: '0 8px', display: "flex" }}>Yana</Typography>
          </li>
        </ul>
      </AppBar>
    </Box>
  );
}
