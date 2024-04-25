import React from 'react';
import Layout from '../components/layout';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchAppBar from '../components/header';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Erkaklar() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <SearchAppBar />

            <Box sx={{ width: '100%', maxWidth: "1024px", margin: "0 auto", marginTop: "2%" }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
                    {Array.from(Array(9)).map((_, index) => (
                        <Grid item xs={5} sm={4} md={4} key={index}>
                            <Box width={260} height={380} boxShadow={3} bgcolor={"#fff"} borderRadius={"20px"}>
                                <img
                                    width={"100%"}
                                    height={"210vh"}
                                    src="https://images.uzum.uz/co16s8mpom4ma10qv4t0/original.jpg"
                                    alt=""
                                    style={{
                                        borderTopLeftRadius: "10px",
                                        borderTopRightRadius: "10px",
                                        objectFit: "cover",
                                    }}
                                />

                                <p style={{ padding: "3%" }}>Lorem ipsum dolor sit amet consectetur.</p>
                                <div style={{ flexDirection: "column", display: "flex", marginLeft: "10px" }}>
                                    <mark style={{ width: "130px" }}>200 000 so'm /oyiga</mark>
                                    <del>1 900 000 so'm </del>
                                    <p>1 500 000 so'm</p>

                                </div>


                            </Box>

                        </Grid>
                    ))}


                </Grid>
            </Box>



        </>
    );
}
