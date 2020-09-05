import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import {connect} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
  },
}))

function Name(props) {
  const classes = useStyles()
  const [name, setName] = useState("");


  const handleChange = e => {
    setName({name: e.target.value});
    console.log("name has changed: "+ JSON.stringify(name));
  }

 
  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Button onClick={() => props.setUserName(name)} variant="outlined">Save</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (name) => {
      dispatch({type:"SET_NAME", payload: name})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)
