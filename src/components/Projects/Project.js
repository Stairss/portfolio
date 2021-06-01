import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Project.scss';
import ReactHoverObserver from 'react-hover-observer';


const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: 'inherit',
      padding: '20px',
      backdropFilter: 'contrast(.95) !important',
    //   backgroundImage: 'linear-gradient(180deg, #5F0A87 0%, #4508B 74%); ', 
    // boxShadow:  '21px 21px 59px #5a5a5a, -21px -21px 59px black',
    // boxShadow:  '2px 2px 20px #bebebe, -2px -2px 20px #ffffff',
    // border: '1px solid black'
    boxShadow: '6px 5px 3px -1px rgba(0,0,0,0.2),0px 10px 10px 10px rgba(0,0,0,0.14),0px 5px 30px 0px rgba(0,0,0,0.12)',
             

    },
    cardMedia: {
        backgroundPosition: 'center',
        backgroundSize: 'contain',

        height: '100%',
        ['@media (max-width: 802px)']: {
            minHeight: '225px'
        }
         
    },
    cardContent: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    },
    div: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    header: {
        fontSize: '1.6rem',
    },
    icon: {
        fontSize: '2.5rem'
    }
}));

const Project = ({src}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardMedia 
        // className={classes.cardMedia} image={src}
        >
        </CardMedia>
        <CardContent className={classes.cardContent}>
            <h2 className={classes.header}>Instagram clone</h2>
            <div className={classes.div}>
                <LinkIcon className={classes.icon}/>
                <GitHubIcon className={classes.icon}/>
            </div>
            {/* <img src="" alt="" /> */}
            </CardContent>
        </Card>
    )
}

export default Project
