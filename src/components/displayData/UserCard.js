import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Fade, Grid, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  text: {
    fontWeight: 401
  }
}))

UserCard.prototype = {
  name: PropTypes.string,
  subheader: PropTypes.string,
  columns: PropTypes.array,
  image: PropTypes.string,
  cardProps: PropTypes.any
}

export function UserCard(props) {
  const classes = useStyles()
  const { name, subheader, columns, image, cardProps } = props

  return (
    <Fade in>
      <Card className={classes.root} variant='outlined' {...cardProps}>
        <CardHeader
          avatar={
            <Avatar
              aria-label='imagen-tarjeta-usuario'
              src={`data:image/png;base64, ${image}`}
              classes={{ root: classes.avatar }}
            >
              <Typography variant='h4'>{name[0]}</Typography>
            </Avatar>
          }
          title={<Typography variant='h5'>{name}</Typography>}
          subheader={
            <Typography variant='body1' color='textSecondary'>
              {subheader}
            </Typography>
          }
        />
        <CardContent>
          <Grid container direction='row' spacing={3}>
            {columns?.map((option, index) => (
              <Grid
                key={index}
                item
                container
                direction='column'
                spacing={3}
                xs
              >
                {option.map((item) => (
                  <Grid item>
                    <Typography variant='body1' className={classes.text}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {item.subtitle}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  )
}
