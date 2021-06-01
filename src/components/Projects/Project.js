import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import './Project.scss';


const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: 'inherit',
      padding: '20px',
    },
    cardMedia: {
        backgroundPosition: 'center',
        backgroundSize: 'contain',

        height: '100%',
        ['@media (max-width: 600px)']: {
            minHeight: '225px'
        }
         
    },
}));

const Project = ({src}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}
        image={src}>
        </CardMedia>
        <CardContent>
            {/* <img src="" alt="" /> */}
            </CardContent>
        </Card>
    )
}

export default Project
