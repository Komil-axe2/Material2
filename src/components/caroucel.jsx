import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        imgPath: 'https://images.uzum.uz/co0o40v2u18gghclhur0/main_page_banner.jpg',
    },
    {
        imgPath: 'https://images.uzum.uz/cn0diibifoubkc6qndug/main_page_banner.jpg',
    },
    {
        imgPath: 'https://images.uzum.uz/co0o1j6pom4ma10qsn6g/main_page_banner.jpg',
    },
    {
        imgPath: 'https://images.uzum.uz/co0o1j6pom4ma10qsn6g/main_page_banner.jpg',
    },
    {
        imgPath: 'https://images.uzum.uz/co0o1j6pom4ma10qsn6g/main_page_banner.jpg',
    },
];

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 1024, margin: 'auto', flexGrow: 1, }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 355, maxWidth: 1024, width: '100%', }}>
                <img src={steps[activeStep].imgPath} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
