import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import Iconify from '../../components/Iconify'
import { INav, navConfig } from './navConfig'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const SideBar = () => {
  const RootStyle = styled(Box)(({ theme }) => ({
    width: 280,
  })) as typeof Box

  const { pathname } = useRouter()

  return (
    <RootStyle>
      <Drawer
        sx={{
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
        PaperProps={{
          sx: {
            width: 280,
            borderRight: theme => `1px dashed ${theme.palette.grey[400]} `,
          },
        }}
      >
        <Toolbar />
        <Divider />
        {navConfig.map((item, index) => (
          <List
            sx={{ px: 3 }}
            key={index}
            subheader={
              <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1 }}>
                {item.subheader}
              </Typography>
            }
          >
            {item.children.map(child => (
              <NextLink key={child.id} href={child.path} passHref>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Iconify
                      icon={child.icon}
                      sx={{
                        color: pathname === child.path ? 'primary.main' : 'text.secondary',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color={pathname === child.path ? 'primary' : 'text.secondary'}>
                        {child.title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </NextLink>
            ))}
          </List>
        ))}
      </Drawer>
    </RootStyle>
  )
}

export default SideBar
