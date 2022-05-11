import { Dialog, MenuItem, DialogTitle, DialogContent, FormControl, InputLabel, Select, DialogActions, Button } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './styles';
import Input from '../Utiles/Input';

const AddTask = ({ isOpen, setIsOpen }) => {

    const classes = useStyles();
    const [data, setData] = useState({});
    console.log(isOpen);

    const handleSubmit = () => {

    }

    return (
        <Dialog open={isOpen} onClose={!isOpen} >
            <DialogTitle className={classes.dialog} >Create New Task</DialogTitle>
            <DialogContent >
                <Input margin="normal" name="Title" label="Title" handleChange={(e) => setData({ ...data, title: e.target.value })} autoFocus half />
                {/* <FormControl className={classes.formControl} >
                    <InputLabel id="status" >Status</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        value={data.status}
                        onChange={(e) => setData({ ...data, status: e.target.value })}
                    >
                        <MenuItem value="Open">Open</MenuItem>
                        <MenuItem value="On Progress">On Progress</MenuItem>
                        <MenuItem value="Pending" >Pending</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                </FormControl> */}
                {/* <FormControl className={classes.formControl} >
                    <InputLabel id="priority" >Priority</InputLabel>
                    <Select
                        labelId="priority"
                        id="priority"
                        value={data.priority}
                        onChange={(e) => setData({ ...data, priority: e.target.value })}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Urgent">Urgent</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="source" >Source</InputLabel>
                    <Select
                        labelId="source"
                        id="source"
                        value={data.source}
                        onChange={(e) => setData({ ...data, source: e.target.value })}
                    >
                        <MenuItem value="In-House">In-House</MenuItem>
                        <MenuItem value="Alpha Tester">Alpha Tester</MenuItem>
                        <MenuItem value="Beta Tester">Beta Tester</MenuItem>
                        <MenuItem value="Client">Client</MenuItem>
                        <MenuItem value="Support">Support</MenuItem>
                    </Select>
                </FormControl> */}
                {/* <FormControl className={classes.formControl}>
                    <InputLabel id="AssignedTo" >Assigned To</InputLabel>
                    <Select
                        labelId="AssignedTo"
                        id="AssignedTo"
                        value={data.AssignedTo}
                        onChange={(e) => setData({ ...data, AssignedTo: e.target.value })}
                    >
                    </Select>
                </FormControl> */}
                <Input margin="normal" name="detail" label="Details" handleChange={(e) => setData({ ...data, details: e.target.value })} autoFocus half />
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={handleSubmit} >Create</Button>
                <Button variant="outlined" color="secondary" onClick={() => setIsOpen(false)}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddTask;