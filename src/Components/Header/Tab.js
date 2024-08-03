import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Home from '@mui/icons-material/Home';
import Profile from '../../Pages/Admin/Settings/Profile';
import { CardContent,Card } from '@mui/material';
import UpdateProfile from '../../Pages/Admin/Settings/UploadProfile';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    
  return (
    <Card sx={{ maxWidth: "100%", margin: 'auto', marginTop: 2}}>
    <CardContent sx={{backgroundColor:"white"}}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Upload Profile" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
     <Profile></Profile>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <UpdateProfile></UpdateProfile>
      </CustomTabPanel>

    </Box>
    </CardContent>
    </Card>
  );
}
