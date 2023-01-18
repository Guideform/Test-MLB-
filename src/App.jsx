import * as React from 'react'

import { Grid, Box, OutlinedInput, Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, CardHeader } from '@mui/material/'
import { bgcolor, border } from '@mui/system'
import mockData from './MOCK_DATA.json';


class Textdata extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gender: "",
      country: "",
      name: ""

    }
  }

  componentDidMount() {

  }


  searchptext = (e) => {
    this.setState({
      name: e.target.value

    })

  }
  clearData = (e) => {
    this.setState({
      gender: "",
      country: "",
      name: ""

    })
    var mainA = document.querySelector(".bgblackA")
    if (mainA != null) {

      mainA.classList.remove("bgblackA")
      mainA.classList.add("bggrayA")

    }
    var mainB = document.querySelector(".bgblack")
    if (mainB != null) {

      mainB.classList.remove("bgblack")
      mainB.classList.add("bggray")

    }

  }

  searchgender = (e) => {
    var mainA = document.querySelector(".bgblack")
    if (mainA != null) {

      mainA.classList.remove("bgblack")
      mainA.classList.add("bggray")

    }

    e.target.classList.remove("bggray");
    e.target.classList.add("bgblack");

    this.setState({
      gender: e.target.innerText

    })

  }
  searchcountry = (e) => {

    var mainA = document.querySelector(".bgblackA")
    if (mainA != null) {

      mainA.classList.remove("bgblackA")
      mainA.classList.add("bggrayA")

    }

    e.target.classList.remove("bggrayA");
    e.target.classList.add("bgblackA");

    this.setState({
      country: e.target.innerText

    })

  }

  render() {
    var elements = [];
    var A2 = mockData
    if (this.state.name != "") {
      A2 = mockData.filter(data => {
        var A = data.first_name.toLowerCase().match(this.state.name.toLowerCase())

        return A
      })
    }


    A2.map(data => {


      if (this.state.country != "" || this.state.gender != "") {
        if (data.country == this.state.country && data.gender == this.state.gender) {

          elements.push(


            <Card className='inline-block mr-7 mb-7' Card sx={{ width: "30%" }
            }>

              <CardMedia
                sx={{
                  height: 200,
                  width: 1
                }}
                image={data.image}



              />
              <CardContent>
                <Typography gutterBottom variant="h8" component="div" color="text.secondary">
                  {data.first_name}  {data.last_name}
                </Typography>
                <Typography variant="body2" >
                  {data.gender}
                </Typography>
                <Typography variant="body2" >
                  {data.email}
                </Typography>
                <Typography variant="body2" >
                  {data.country}
                </Typography>
              </CardContent>

            </Card >
          )
        } else if (data.country == this.state.country && this.state.gender == "") {

          elements.push(


            <Card className='inline-block mr-7 mb-7' Card sx={{ width: "30%" }
            }>

              <CardMedia
                sx={{
                  height: 200,
                  width: 1
                }}
                image={data.image}



              />
              <CardContent>
                <Typography gutterBottom variant="h8" component="div" color="text.secondary">
                  {data.first_name}  {data.last_name}
                </Typography>
                <Typography variant="body2" >
                  {data.gender}
                </Typography>
                <Typography variant="body2" >
                  {data.email}
                </Typography>
                <Typography variant="body2" >
                  {data.country}
                </Typography>
              </CardContent>

            </Card >
          )
        } else if (data.gender == this.state.gender && this.state.country == "") {

          elements.push(


            <Card className='inline-block mr-7 mb-7' Card sx={{ width: "30%" }
            }>

              <CardMedia
                sx={{
                  height: 200,
                  width: 1
                }}
                image={data.image}



              />
              <CardContent>
                <Typography gutterBottom variant="h8" component="div" color="text.secondary">
                  {data.first_name}  {data.last_name}
                </Typography>
                <Typography variant="body2" >
                  {data.gender}
                </Typography>
                <Typography variant="body2" >
                  {data.email}
                </Typography>
                <Typography variant="body2" >
                  {data.country}
                </Typography>
              </CardContent>

            </Card >
          )
        }
      } else {
        elements.push(


          <Card className='inline-block mr-7 mb-7' Card sx={{ width: "30%" }
          }>

            <CardMedia
              sx={{
                height: 200,
                width: 1
              }}
              image={data.image}



            />
            <CardContent>
              <Typography gutterBottom variant="h8" component="div" color="text.secondary">
                {data.first_name}  {data.last_name}
              </Typography>
              <Typography variant="body2" >
                {data.gender}
              </Typography>
              <Typography variant="body2" >
                {data.email}
              </Typography>
              <Typography variant="body2" >
                {data.country}
              </Typography>
            </CardContent>

          </Card >
        )
      }





    })
    return (
      <>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl   text-center mb-10">
            Test
          </h1>

          <Grid container spacing={2} className="justify-center">
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Male</Box>
            </Grid>
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Female</Box>
            </Grid>
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Bigender</Box>
            </Grid>
            <Grid item xs={2}>
              <Box className='bggray' onClick={this.searchgender}>Non-binary</Box>
            </Grid>
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Agender</Box>
            </Grid>
            <Grid item xs >
              <Box className='bggray' onClick={this.searchgender}>Polygender</Box>
            </Grid>
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Genderfluid</Box>
            </Grid>
            <Grid item xs>
              <Box className='bggray' onClick={this.searchgender}>Genderqueer</Box>
            </Grid>


          </Grid>

          <div className='w-100'>
            <Grid sx={{
              m: 2
            }} container spacing={2} className="justify-center ">
              <Grid item xs={2} >
                <Box className='bggrayA' onClick={this.searchcountry}>Brazil</Box>
              </Grid>
              <Grid item xs={2}>
                <Box className='bggrayA' onClick={this.searchcountry}>Thailand</Box>
              </Grid>
              <Grid item xs={2}>
                <Box className='bggrayA' onClick={this.searchcountry}>Sweden</Box>
              </Grid>
              <Grid item xs={2}>
                <Box className='bggrayA' onClick={this.searchcountry}>Japan</Box>
              </Grid>
              <Grid item xs={2}>
                <Box className='bggrayA' onClick={this.searchcountry}>Netherlands</Box>
              </Grid>
            </Grid>
          </div>

          <div className='w-100 text-center mt-10'>

            <OutlinedInput className='mr-3' onChange={this.searchptext} value={this.state.name} placeholder="Please enter text" />
            <h3 className='inline-block text-[#5a6bd6]' onClick={this.clearData}>Clear</h3>
          </div>

          <div className='w-100 text-center mt-10'>

            {elements}
          </div>
        </div>

      </>
    )
  }
}

function App() {


  return (
    <div className="App">

      <Textdata />

    </div >
  )
}

export default App
