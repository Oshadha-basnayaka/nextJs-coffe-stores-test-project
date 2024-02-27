'use client';
import {useRouter} from "next/navigation";
import Link from "next/link";

const CoffeStore = () => {
    const router = useRouter();
    console.log('router',router);
    return(
        <div>Coffe Store Page
            <Link href="/">Back to home</Link>
            {/*<Link href="/coffe-store/dynamic">Back to page dynamic</Link>*/}
        </div>



    )

};

export default CoffeStore;
