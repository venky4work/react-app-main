import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
import PhysicalSchemaTable from './PhysicalSchemaTable';
import schemaImg from '../assets/SchemaImg.png';
import catalogIcon from '../assets/Catalog.png';
import dateFormat from '../assets/DateFormat.png';
import signImg from '../assets/signImg.png';
import activeIcon from '../assets/Active.png'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../reducers/cartReducer';

export default function PhysicalSchemaDailog(props) {
  const { onClose, data, open, ...other } = props;
  const [value, setValue] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const dispatch = useDispatch();


  const cartItems = useSelector(state => state.cartItems);
  // React.useEffect(() => {
  //   if (!open) {
  //     setValue(valueProp);
  //   }
  // }, [valueProp, open]);

  // const handleEntering = () => {
  //   if (radioGroupRef.current != null) {
  //     radioGroupRef.current.focus();
  //   }
  // };

  const handleCancel = () => {
    onClose();
  };

  const setAllSelected = (rows) => {
    setSelected(rows)
  } 

  const handleSelectAllClick = (event) => {
    setValue(event.target.checked);
    if (event.target.checked) {
      const newSelected = data.variables.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleAddCart = () => {
    dispatch(addCart(data));
    onClose();
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%' }, backgroundColor: '#8080802e' }}
      maxWidth="lg"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
          backgroundColor: '#8080802e'
        }
      }>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCancel}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: '10px 30px 24px 40px', backgroundColor: '#8080802e' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px'
          }
        }>
          <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
          <DialogTitle>
            <Typography>{data.schemaName} {cartItems.length}</Typography>
          </DialogTitle>
        </Box>

        <Divider></Divider>
        <Grid container columnGap={1}
          direction='row'
          sx={{
            borderRadius: 2,
            width: '100%',
            margin: '0px',
          }}>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><img src={catalogIcon} className="" alt="dashboard"></img><Typography className='font'>{data.type} </Typography></div>

            <small style={{
              marginLeft: '20px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><img src={schemaImg} className="" alt="dashboard"></img> <Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '20px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><img src={dateFormat} className="" alt="dashboard"></img>  <Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '20px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={2.5} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}><img src={signImg} className="" alt="dashboard"></img><Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small>
          </Grid>
        </Grid>
        <PhysicalSchemaTable variables={data.variables} setAllSelected={setAllSelected} selected={selected} setValue={setValue}/>
      </DialogContent>
      <DialogActions sx={{
        justifyContent: 'space-between',
        padding: '10px 30px 24px 40px',
        backgroundColor: '#8080802e'
      }}>
        <FormControlLabel control={<Checkbox color="primary"
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={value}
          checkedIcon={<CheckBoxOutlinedIcon />}
          onChange={handleSelectAllClick}
          inputProps={{
            'aria-label': 'Select all',
          }} />} label="Select All">
        </FormControlLabel>
        <Button onClick={handleAddCart} sx={{
          backgroundColor: 'red',
          borderRadius: '0px',
          color: 'white',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
          },
        }}>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
}

PhysicalSchemaDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};