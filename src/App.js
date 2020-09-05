import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Name from "./components/Name"
import Age from "./components/Age"
import PersonDetails from "./components/PersonDetails"

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Name />
      </Grid>
      <Grid item xs={3}>
        <Age />
      </Grid>
      <Grid item xs={3}>
        <PersonDetails />
      </Grid>
    </Grid>
  )
}

export default App
