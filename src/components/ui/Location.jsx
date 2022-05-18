import React from 'react';
import { Chip, IconButton, Tooltip } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

export default function Location(props) {
  const { iconMode } = props;

  return iconMode
    ? (
      <Tooltip arrow title="Madrid, España" key="location">
        <IconButton aria-label="location" color="primary" size="large">
          <LocationOn />
        </IconButton>
      </Tooltip>
    )
    : (
      <Chip
        component="a"
        sx={{
          border: 0,
        }}
        clickable
        icon={<LocationOn key="chip-icon" />}
        label="Madrid, España"
        key="chip-location"
        variant="outlined"
      />
    );
}
