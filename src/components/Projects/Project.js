import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import './Project.scss';


const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: 'inherit',
      padding: '20px',
    //   filter: 'drop-shadow(8px 8px 10px gray) !important',
      backdropFilter: 'contrast(.95) !important',

    },
    cardMedia: {
        backgroundPosition: 'center',
        backgroundSize: 'contain',

        height: '100%',
        ['@media (max-width: 802px)']: {
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
