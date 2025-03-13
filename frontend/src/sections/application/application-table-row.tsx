import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

function normalise(value: number): number {
  return value * 100;
}


// ----------------------------------------------------------------------

export type ApplicationProps = {
  id: string;
  priority: number;
  name: string;
  state: string;
  sailToDo: number;
  sailDone: number;
  leverageToDo: number;
  leverageDone: number;
  avatarUrl: string;
  size: number;
  assignedTo: string;
};

type ApplicationTableRowProps = {
  row: ApplicationProps;
  selected: boolean;
  onSelectRow: () => void;
};

export function ApplicationTableRow({ row, selected, onSelectRow }: ApplicationTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        
        {/* Select CheckBox */}
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={onSelectRow} />
        </TableCell>

        {/* Name */}
        <TableCell component="th" scope="row">
          <Box gap={2} display="flex" alignItems="center">
            {row.name}
          </Box>
        </TableCell>

        {/* Priority */}
        <TableCell>
            {row.priority}
        </TableCell>

        {/* Size */}
        <TableCell>
            {row.size}
        </TableCell>

        {/* State */}
        <TableCell>
          <Label color={(row.state === 'started' && 'success') || 'error'}>{row.state}</Label>
        </TableCell>

        {/* Sail */}
        <TableCell align="center">
          <LinearProgress variant="determinate" value={normalise(row.sailDone/row.sailToDo)} />
          {row.sailDone}/{row.sailToDo}
        </TableCell>

        {/* Leverage */}
        <TableCell align="center">
          <LinearProgress variant="determinate" value={normalise(row.leverageDone/row.leverageToDo)} />
          {row.leverageDone}/{row.leverageToDo}
        </TableCell>

        {/* Assigned To */}
        <TableCell align="center">
          <Box gap={2} display="flex" alignItems="center">
            <Avatar alt={row.assignedTo} src={row.avatarUrl} />
            {row.assignedTo}
          </Box>
        </TableCell>

        {/* Context Menu */}
        <TableCell align="right">
          <IconButton onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          <MenuItem onClick={handleClosePopover}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
