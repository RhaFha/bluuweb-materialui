import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const BluuCard = () => {
    return(
        <Card>
            <CardMedia 
                component='img' 
                image="https://via.placeholder.com/1000x200"
                height={200}
                alt="descripcion"
            />
            <CardContent>
                <Typography  component='span' variant="h1">Hola</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, excepturi! Doloremque id, ipsum eaque ab ipsam pariatur sit adipisci cumque veniam numquam. Voluptatibus quo, laboriosam enim voluptatem quisquam tenetur facere.</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' >Add</Button>
                <Button color="error" >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default BluuCard;