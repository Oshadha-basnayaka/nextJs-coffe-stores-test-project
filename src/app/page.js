'use client';
import Head from "next/head";
import Banner from "@/app/banner/page";
import Card from "../../components/card";


export default function Home() {

    const handleOnBannerBtnClick =() => {
        console.log("hi banner button")
    }


    return (
        <div className={""}>
            <Head>
                <title>Coffe Connoisseur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"flex gap-5 p-20 flex-col"}>
                {/*<h1  className=" font-bold text-3xl  p-5 text-black">Coffe Connoisseur</h1>*/}
                <Banner buttonText={"View Stores Nearby"}
                        handleOnClick={handleOnBannerBtnClick}/>
                <Card name={"Dark horse Coffe"} imgurl="../../public/static/mesh-746.png" href={"https://www.google.com/search?q=car&rlz=1C1KNTJ_enLK1087LK1087&oq=car&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQIxgnMgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRBFGEEyBggGEEUYQTIGCAcQRRg80gEIMTA0NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"}/>
            </main>

        </div>
    );
}
