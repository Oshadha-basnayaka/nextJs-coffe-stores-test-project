
import Link from "next/link";

const Card = (props) => {
    return(
        <div>
            <Link  href={props.href}>

                    <h2>{props.name}</h2>
                    <image src={props.imgurl} width={260} height={160} />

            </Link>





        </div>
    )
}

export default Card;
