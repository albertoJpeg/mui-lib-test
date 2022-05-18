import React from 'react'
import { Grid, IconButton, Tooltip } from '@mui/material'
import {
  Facebook, Instagram, LinkedIn, Twitter, YouTube,
} from '@mui/icons-material'

export default function SocialMediaButtons(props) {
  const { justifyContent = 'flex-end' } = props
  return (
    <Grid
      container
      item
      justifyContent={justifyContent}
    >
      <Grid item>
        <Tooltip arrow title="LinkedIn" key="LinkedInTooltip">
          <IconButton size="large" key="LinkedIn" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Instagram" key="InstagramTooltip">
          <IconButton size="large" key="Instagram" aria-label="Instagram">
            <Instagram />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Twitter" key="TwitterTooltip">
          <IconButton size="large" key="Twitter" aria-label="Twitter">
            <Twitter />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Youtube" key="YoutubeTooltip">
          <IconButton size="large" key="Youtube" aria-label="Youtube">
            <YouTube />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Facebook" key="FacebookTooltip">
          <IconButton size="large" aria-label="Facebook" key="Facebook" edge="end">
            <Facebook />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}
