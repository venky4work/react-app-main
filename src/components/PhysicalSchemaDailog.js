import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import PhysicalSchemaTable from './PhysicalSchemaTable';
import schemaImg from '../assets/SchemaImg.png';
import catalogIcon from '../assets/Catalog.png';
import dateFormat from '../assets/DateFormat.png';
import signImg from '../assets/signImg.png';
import activeIcon from '../assets/Active.png'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import { useDispatch, useSelector } from 'react-redux';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { addCart } from '../reducers/cartReducer';

export default function PhysicalSchemaDailog(props) {
  const { onClose, data, open, ...other } = props;
  const [value, setValue] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [testValue, setTestValue] = React.useState('');
  const [testValue1, setTestValue1] = React.useState('');

  const dispatch = useDispatch();


  const cartItems = useSelector(state => state.cartItems.cartItems);


  React.useEffect(() => {
    const selectedData = cartItems.filter(e => e.id === data.id);
    if (selectedData.length !== 0) {
      setSelected(selectedData[0].selected);
      if (selectedData[0].selected.length === data.variables.length) {
        setValue(true);
      } else {
        setValue(false);
      }
    }
  }, [cartItems]);

  // const handleEntering = () => {
  //   if (radioGroupRef.current != null) {
  //     radioGroupRef.current.focus();
  //   }
  // };

  const handleCancel = () => {
    onClose();
  };

  const handleChange = (event) => {
    setTestValue(event.target.value);
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
    const newData = { ...data, selected: selected, isSelected: true };
    dispatch(addCart(newData));
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
            <Typography>{data.schemaName}</Typography>
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
          <Grid item xs={3} sx={
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
              justifyContent: 'flex-start'
            }}><img src={catalogIcon} style={{ padding: '10px' }} alt="dashboard"></img><Typography className='font'>{data.type} </Typography></div>

            <small style={{
              marginLeft: '20px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs sx={
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
              justifyContent: 'flex-start'
            }}><img src={schemaImg} style={{ padding: '10px' }} alt="dashboard"></img> <Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs sx={
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
              justifyContent: 'flex-start'
            }}><img src={dateFormat} style={{ padding: '10px' }} alt="dashboard"></img>  <Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs sx={
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
              justifyContent: 'flex-start'
            }}><img src={signImg} style={{ padding: '10px' }} alt="dashboard"></img><Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small>
          </Grid>
        </Grid>
        <Grid container columnGap={1}
          direction='row'
          sx={{
            borderRadius: 2,
            margin: '0px',
            flexGrow: 1,
          }}>
          <Grid item xs={6} lg={6} md={6} sx={
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
              justifyContent: 'flex-start'
            }}><img src={catalogIcon} alt="dashboard" style={{ padding: '10px' }}></img><Typography className='font'>{data.type} </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small>
          </Grid>
          <Grid item xs sx={
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
              justifyContent: 'flex-start'
            }}><img src={schemaImg} style={{ padding: '10px' }} alt="dashboard"></img> <Typography className='font'>application ratings </Typography></div>

            <small style={{
              marginLeft: '10px'
            }}>wrrrr </small><ContentCopyIcon fontSize='small'></ContentCopyIcon>
          </Grid>
        </Grid>
        <Box sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: 2,
                            marginTop: 2,
                            padding: 2,
                        }
                    }>
                        <Box sx={{
                            minWidth: 120, flexGrow: 1, display: 'flex',
                            flexDirection: 'column', rowGap: 1
                        }}>
                            <Typography>Label1</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">test</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={testValue}
                                    label="test"
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: '#FCFCFC'
                                    }}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{
                            minWidth: 120, flexGrow: 1, display: 'flex',
                            flexDirection: 'column', rowGap: 1
                        }}>
                            <Typography>Label1</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label1">test1</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label1"
                                    id="demo-simple-select1"
                                    value={testValue1}
                                    label="test1"
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: '#FCFCFC'
                                    }}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
        <PhysicalSchemaTable setAllSelected={setAllSelected} setValue={setValue} data={data} selected={selected} setSelected={setSelected} />
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