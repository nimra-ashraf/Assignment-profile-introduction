// import Header from "./components/header"
// import {Footer} from "./components/footer"



// export default function Home () {
//   return (
//     <Header/>
//   )
// }
import Image from "next/image"


export default function Home () {
  return (
    <div className="homecontainer">
      <div className="childcontainer" >
        Hey,<br />
        My name is <span className="pinkcolor">Nimra</span> <br />
        I am IT student at GIAIC
      </div>
      <div className="childcontainer">
        <Image src={"/profile-img.jpg"} alt="profile image" width={500} height={500}/>
      </div>
    </div>
  )
}

