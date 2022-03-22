import React, { useRef, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import Tooltip from '@material-ui/core/Tooltip'
import useWindowSize from '../../hooks/useWindowSize'
import { LOGOTIPO_LEYENDA } from '../../images/logotipo_leyenda'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import useLayout from '../../hooks/useLayout'
import ResizeObserver from 'react-resize-observer'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  appFooter: {
    borderTop: '1px solid',
    borderColor: theme.palette.divider,
    marginTop: 'auto',
    padding: theme.spacing(2, 6),
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.background.default
        : theme.palette.grey[800]
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    textAlign: 'center',
    borderTop: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800]
  },
  alignItemsCenterXs: {
    justifyContent: 'center'
  },
  footerConditionalFlexEndLinks: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerConditionalFlexStartLinks: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  linkFooter: {
    cursor: 'pointer'
  }
}))

AppFooter.propTypes = {
  /**
   * {
   *   "value": "Array de columnas de enlaces relacionados",
   *   "default": "[]"
   * }
   */
  appFooterColumns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          onClick: PropTypes.func
        })
      )
    })
  ),
  /**
   * {
   *   "value": "Array de links para la parte derecha del footer general ",
   *   "default": "[]"
   * }
   */
  footerRigth: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  /**
   * {
   *   "value": "Array de links para la parte izquierda del footer general ",
   *   "default": "[]"
   * }
   */
  footerLeft: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  /**
   * {
   *   "value": "Por defecto no se muestran los iconos de las redes sociales debajo del logo de la UPM",
   *   "default": "false"
   * }
   */
  icons: PropTypes.bool
}

/**
 * AppFooter es un componente que ofrece dos niveles de footer, uno para la aplicación y otro generico. Se puede configurar para mostrar
 * enlaces relacionados en columnas.
 */
export function AppFooter(props) {
  const classes = useStyles()
  const { appFooterColumns, icons, footerLeft, footerRigth } = props
  const { width, height } = useWindowSize()
  const theme = useTheme()
  const ref = useRef()
  const { setDimensions } = useLayout()

  const onImgLoad = ({ target: img }) => {
    setDimensions({
      footer: ref.current.offsetHeight,
      content: height - ref.current.offsetHeight + 64
    })
  }
  return (
    <div className={classes.root} ref={ref}>
      <ResizeObserver
        onResize={(rect) => {
          setDimensions({
            footer: rect.height,
            content: height - rect.height + 64
          })
        }}
      />
      <footer className={classes.appFooter}>
        <Grid container direction='row' justify='space-between'>
          {!appFooterColumns ? (
            <Grid item xs='auto' key={`app-footer-title-empty`} />
          ) : (
            appFooterColumns?.map((option, index) => (
              <Grid item xs='auto' key={`app-footer-title-${index}`}>
                <List>
                  <ListItem>
                    <Typography variant='body1' color='primary'>
                      {option.title}
                    </Typography>
                  </ListItem>
                  {option.list.map((children, subindex) => {
                    return (
                      <ListItem key={`app-footer-element-${index}-${subindex}`}>
                        <Link>
                          <Typography
                            variant='caption'
                            color='textSecondary'
                            onClick={children.onClick}
                            className={classes.linkFooter}
                          >
                            {children.title}
                          </Typography>
                        </Link>
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
            ))
          )}
          <Grid item xs='auto'>
            <List>
              <ListItem>
                <img
                  src={LOGOTIPO_LEYENDA}
                  alt='app_footer_logo'
                  onLoad={onImgLoad}
                  style={{ width: '20em' }}
                />
              </ListItem>
              {icons && (
                <ListItem>
                  <Tooltip title='Linked in'>
                    <IconButton
                      href='https://es.linkedin.com/school/universidad-politecnica-de-madrid/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Instagram'>
                    <IconButton
                      href='https://www.instagram.com/somosupm/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Twitter'>
                    <IconButton
                      href='https://es.linkedin.com/school/universidad-politecnica-de-madrid/'
                      target='_blank'
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Youtube'>
                    <IconButton
                      href='http://www.youtube.com/user/UPM'
                      target='_blank'
                    >
                      <YouTubeIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Facebook'>
                    <IconButton
                      href='https://www.facebook.com/universidadpolitecnicademadrid'
                      target='_blank'
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
      </footer>

      <footer className={classes.footer}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          {width <= theme.breakpoints.values.md ? (
            <Fragment>
              <Grid
                item
                container
                xs={footerLeft || footerRigth ? 6 : 12}
                direction='column'
                alignItems='center'
              >
                <Typography variant='caption' color='textSecondary'>
                  {`Copyright © ${new Date().getFullYear()} `}
                </Typography>
                <Typography variant='caption' color='textSecondary'>
                  <Link color='inherit' href='https://upm.es/' target='_blank'>
                    Universidad Politécnica de Madrid
                  </Link>{' '}
                </Typography>
              </Grid>
              <Grid item container md={4} xs={6}>
                <Grid container item xs='auto'>
                  {footerLeft &&
                    footerLeft.map((element, index) => (
                      <Grid
                        item
                        key={`${element.title}-mobile-${index}`}
                        xs={12}
                      >
                        <Link href={element.url} target='_blank'>
                          <Typography
                            variant='caption'
                            className={classes.linkFooter}
                          >
                            {element.title}
                          </Typography>
                        </Link>
                      </Grid>
                    ))}
                  {footerRigth &&
                    footerRigth.map((element, index) => (
                      <Grid
                        item
                        key={`${element.title}-mobile-${index}`}
                        xs={12}
                      >
                        <Link href={element.url} target='_blank'>
                          <Typography
                            variant='caption'
                            className={classes.linkFooter}
                          >
                            {element.title}
                          </Typography>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Fragment>
          ) : (
            <Fragment>
              <Grid
                container
                item
                md={4}
                xs={12}
                direction='row'
                alignItems='baseline'
                classes={{ root: classes.footerConditionalFlexEndLinks }}
                spacing={4}
              >
                {footerLeft &&
                  footerLeft.map((element, index) => (
                    <Grid item key={`${element.title}-${index}`}>
                      <Link href={element.url} target='_blank'>
                        <Typography
                          variant='caption'
                          className={classes.linkFooter}
                        >
                          {element.title}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
              <Grid
                item
                container
                xs={3}
                direction='column'
                alignItems='center'
              >
                <Typography variant='caption' color='textSecondary'>
                  {`Copyright © ${new Date().getFullYear()}`}
                </Typography>
                <Typography variant='caption' color='textSecondary'>
                  <Link color='inherit' href='https://upm.es/'>
                    Universidad Politécnica de Madrid
                  </Link>{' '}
                </Typography>
              </Grid>
              <Grid
                md={4}
                xs={12}
                item
                container
                classes={{ root: classes.footerConditionalFlexStartLinks }}
                spacing={4}
              >
                {footerRigth &&
                  footerRigth.map((element, index) => (
                    <Grid item key={`${element.title}-${index}`}>
                      <Link href={element.url} target='_blank'>
                        <Typography
                          variant='caption'
                          className={classes.linkFooter}
                        >
                          {element.title}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Fragment>
          )}
        </Grid>
      </footer>
    </div>
  )
}
