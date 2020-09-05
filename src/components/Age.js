import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      flexGrow: 1,
    },
  },
}))

function Age(props) {
  const classes = useStyles()
  const [age, setAge] = useState(0);

  const handleChange = e => {
    setAge({age: e.target.value})
    console.log("age has changed: " + JSON.stringify(age));
  }

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <TextField
          onChange={handleChange}
          className={classes.paper}
          id="outlined-basic"
          label="Age"
          variant="outlined"
        />
      </Grid>
      <Button onClick={() => props.setUserAge(age)} variant="outlined">Save</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    userAge: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAge: (age) => {
      dispatch({type:"SET_AGE", payload: age})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Age)
