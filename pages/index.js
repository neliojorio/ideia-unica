import Link from "next/link"
import Loader from "./loader"

function Home() {
    return (
        <div>
            <Link href="/sobre">Acessar página Sobre</Link>
            <Loader></Loader>
        </div>
    )
}

export default Home