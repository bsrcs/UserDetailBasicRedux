import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

function PersonDetails(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>  
        <Grid item xs={3}>
          <h5>Name: {props.userDetails.name}</h5>
          <h5>Age: {props.userDetails.age} </h5>
        </Grid>   
    </div>
  )
}

const mapStateFromProps = (state) => {
  return{
    userDetails : state
  }
}

export default connect(mapStateFromProps)(PersonDetails)
