import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import Home001 from "../components/Home001";
import Home002 from "../components/Home002";

import ModuleDivision01 from "../components/ModuleDivision01";
// import ModuleDivision02 from "../components/ModuleDivision02";
// import Home003 from "../components/Home003";
import Home004 from "../components/Home004";
import Home005 from "../components/Home005";
// import Home006 from "../components/Home006";
// import HomeComprar from "../components/HomeComprar";
// import ModuleDivision03 from "../components/ModuleDivision03";
// import Demo from "../components/Demo";

export default function Home() {
    return (
        <>
            <SeoHead title='Webinars-Pathbooks'/>
            <Layout>
                <Home001/>
                <ModuleDivision01/>
                <Home002/>
                {/*<Demo/>*/}
                {/*<Home003/>*/}
                {/*<ModuleDivision02/>*/}
                <Home004/>
                <Home005/>
                {/*<ModuleDivision03/>*/}
                {/*<Home006/>*/}
                {/*<HomeComprar/>*/}


            </Layout>
        </>

    );
}