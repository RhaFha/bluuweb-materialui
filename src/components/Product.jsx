import { Paper, Typography, Box, Button } from "@mui/material";
import styled from "@emotion/styled";

const Img = styled.img`
        width: "200";
        height: "100%";
        object-fit: "cover";
        object-position: "center";
        `;

const Product = () => {

    

    return(
        <Paper
            sx= {{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "overflow",
                mt: 5,
            }}
        >
            <Img src="https://via.placeholder.com/200" alt="imagen de 200 px" />
            <Box sx={{ flexGrow: 1, display: 'grid', gap: 4}} >
                <Typography variant="h4">Product Name</Typography>
                <Typography variant="body1">Product Description</Typography>
                <Button variant="contained">Add Card</Button>
            </Box>
            <Box sx={{ marginRight: 5}} component='p'>$19.99</Box>
        </Paper>
    )
}

export default Product;