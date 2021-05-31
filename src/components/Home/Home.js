import './Home.scss'
import { Button, makeStyles } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Background from './Background';

const useStyles = makeStyles({
    button: {
        width: '270px',
        padding: '0',
        '@media (max-width:800px)': {
            width: '35%',
            marginTop: '1rem',
        }

    },
    flex: {
        display: 'grid',
        gridTemplateColumns: '75fr 25fr',
        gridTemplateRows: '1fr',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        height: '45px',
        width: '100%',
        '@media (max-width:600px)': {
            height: '40px',
        },
        '@media (max-width:400px)': {
            height: '35px',
        },

    },
    center: {
        display: 'grid',
        placeItems: 'center',
    },
    resume: {
        border: 'solid 2px white',
        height: '100%',
        borderRight: 'none'
    },
    arrow: {
        border: 'solid 2px white',
        height: '100%',
    }

});

const Home = () => {
    const classes = useStyles();
    return (
            <div className="home">
            <div class="blurred-box">
            <div className="home__content">
                <h1 className="home__title">Dawid Spisak</h1>
                <h2 className="home__subtitle">Frontend developer</h2>
                <Button className={`${classes.button} home__button`} >
                    <div className={classes.flex}>
                        <div className="home__resume">
                            <span className={`${classes.center} ${classes.resume}`}>Resume</span>
                        </div>
                        <div className="home__arrow">
                            <span className={`${classes.center} ${classes.arrow}`}><ArrowForwardIcon /></span>
                        </div>
                    </div>
                </Button>
                </div>
    {/* <div class="user-login-box">
    <h1 class="user-icon">Dawid Spisak</h1>
    <div class="user-name">Gilfoyle</div>
    <input class="user-password" type="text" />
  </div> */}
                </div>
                {/* <Background /> */}
            </div>
    )
}

export default Home
