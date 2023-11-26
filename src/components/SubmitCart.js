import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
import activeIcon from '../assets/Active.png'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import CartItem from './CartItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

export default function CartDailog(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    let closeImg = { cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px' };

    const [testValue, setTestValue] = React.useState('');
    const [testValue1, setTestValue1] = React.useState('');

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        // if (radioGroupRef.current != null) {
        //   radioGroupRef.current.focus();
        // }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleSelectAllClick = (event) => {
        // if (event.target.checked) {
        //   const newSelected = rows.map((n) => n.id);
        //   setSelected(newSelected);
        //   return;
        // }
        // setSelected([]);
    };

    const handleOk = () => {
        onClose(value);
    };

    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };


    const handleChange = (event) => {
        setTestValue(event.target.value);
    };

    const styleObj = {
        padding: '10px 30px 24px 40px', backgroundColor: '#8080802e',
    };

    const disablediv = {
        padding: '10px 30px 24px 40px', backgroundColor: '#8080802e',
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '100%' }, backgroundColor: '#8080802e' }}
            maxWidth="lg"
            TransitionProps={{ onEntering: handleEntering }}
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
            <DialogContent sx={styleObj}>
                <Box sx={
                    {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding: '10px'
                    }
                }>
                    <DialogTitle>
                        <Typography>Back </Typography>
                    </DialogTitle>
                </Box>

                <Divider></Divider>
                <Box sx={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: 2,
                        marginTop: 2,
                        padding: 2,
                    }
                }>
                </Box>


            </DialogContent>
            <DialogActions sx={{
                justifyContent: 'space-between',
                padding: '10px 30px 24px 40px',
                backgroundColor: '#8080802e'
            }}>
                <Button onClick={handleOk} sx={{
                    backgroundColor: 'red',
                    borderRadius: '0px',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3c52b2',
                    },
                }}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

CartDailog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};