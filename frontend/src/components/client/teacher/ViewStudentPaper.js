import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Navbar } from '../../common/Navbar'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


export const ViewStudentPaper = () => {
  const bull = (
    <Box
      component='span'
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  )

    return (
      <div>
        <Navbar />
        <div
          className='container'
          style={{ marginLeft: '0.5%', marginRight: '0.5%', marginTop: '10%' }}
        >
          <div className='border shadow rounded-3 bg-light'>
            <form className='mx-5 mt-5 mb-5'>
              <Card sx={{ minWidth: 275 }}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                      <Typography variant='h5' component='div'>
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        adjective
                      </Typography>
                      <Typography variant='body2'>
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <br />
                    <br />
                    <br />
                    <CardActions>
                      <NavLink to={'/viewpaper'}>
                        <Button variant='outlined' size='large'>
                         
                          View
                        </Button>
                      </NavLink>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </form>
          </div>
        </div>
      </div>
    )
}
