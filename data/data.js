import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
export const drawerNav = [
  { text: 'Dashboard', icon: <DashboardIcon />, href: '/' },
  { text: 'Players', icon: <PersonIcon />, href: '/players' },
  { text: 'Club Stats', icon: <BarChartIcon />, href: '/stats' },
  { text: 'Fixtures', icon: <SportsSoccerIcon />, href: '/fixtures' },
  { text: 'Results', icon: <ScoreboardIcon />, href: '/results' },
];
