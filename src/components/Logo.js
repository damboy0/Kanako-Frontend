import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
//import Mkan from '../assets/logo/mkan.svg';

// import { ReactComponent as PatientsIcon } from "../../assets/icons/patients.svg";
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
    // const theme = useTheme();
    // const PRIMARY_LIGHT = theme.palette.primary.light;
    // const PRIMARY_MAIN = theme.palette.primary.main;
    // const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
        <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
            {/* <Mkan /> */}
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <NextLink href="/">{logo}</NextLink>;
});

Logo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};

export default Logo;