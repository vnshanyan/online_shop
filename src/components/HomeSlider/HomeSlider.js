import {useState, useEffect} from "react";
import axios from "axios";
import {baseUrl} from "../../api/api";
import classes from "./HomeSlider.module.css";

const HomeSlider = () => {
    const [slides, setSlides] = useState([]);
    const [slideItem, setSlideItem] = useState(0);

    useEffect(() => {
        axios.get(`${baseUrl}/homeSlides`)
            .then(res => {
                    setSlides(res.data);
                });
    }, []);

    const interval = setInterval(() => {
        if( slideItem === slides?.length - 1 ) {
            setSlideItem(0);
        }else {
            setSlideItem(slideItem+1);
        }   
        clearInterval(interval);
    }, 4000);

    return (
        <section className={classes.homeSlider}>
            <img src={slides[slideItem]?.slideImage} className={classes.slideImage} />
        </section>
    )
}

export default HomeSlider;