import React, {Fragment} from 'react';
import HomeSlider from "../Components/HomeSlider";
import UpComing from "../Components/UpComing";

function Home(props) {
    return (
        <Fragment>
            <HomeSlider/>
            <UpComing/>
        </Fragment>
    );
}

export default Home;