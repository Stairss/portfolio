import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Project.scss';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    card: {
    backgroundColor: 'inherit',
    padding: '20px',
    backdropFilter: 'contrast(.95) !important',
    boxShadow: '6px 5px 3px -1px rgba(0,0,0,0.2),0px 10px 10px 10px rgba(0,0,0,0.14),0px 5px 30px 0px rgba(0,0,0,0.12)',
    height: '225px',
             

    },
    cardMedia: {
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: '100%',
        objectFit: 'contain',
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
        fontWeight: '400',
    },
    icon: {
        fontSize: '2.5rem'
    }
}));

const Project = ({src}) => {
    const [isActive, setIsActive] = useState(false)
    const classes = useStyles();
    console.log(isActive)
    
    return (
        <Card className={classes.card}
        onClick={() => setIsActive(!isActive)}
        >


            {
                isActive ?
                (        <CardContent className={classes.cardContent}>
            <h2 className={classes.header}>Instagram clone</h2>
            <div className={classes.div}>
                <LinkIcon className={classes.icon}/>
                <GitHubIcon className={classes.icon}/>
            </div>
            </CardContent>) :
        <CardMedia 
        className={classes.cardMedia} image={src}
        >
        </CardMedia>
            }
        </Card>
    )
}

export default Project
