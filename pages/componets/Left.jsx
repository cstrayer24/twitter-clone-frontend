
import Image from "next/image";
function Tleft(){


    return(<div key={'wrapper'} className=' h-screen bg-black text-white'>
        <Image src='/public/images/logo-corner.png' width='200' height='200' alt='logo corner'/>
        <ul>
        
            <li id='explore' > Explore</li>
            <li id='settings'>Settings</li>
        </ul>
        

    </div>)
}

export default Tleft ;