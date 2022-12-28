
import Image from "next/image";
import logo from '../public/images/logo-corner.png'
import Settings from './settings'
function Tleft(){


    return(<div key={'wrapper'} className=' ml-20'>
        <a href="#" /*target="_blank"*/ rel="noopener noreferrer" className='bg-white'>

        <Image src={logo} width='30' height={'30'} className='  mb-5'/>

        </a>
        <ul>
        
            <li id='explore' className="mb-3"><a href="#" id='hov'className=" font-bold text-2xl  hover:bg-white/25  "># Explore</a></li>
            <li id='settings'> <a href="#" className='  text-2xl font-medium hover:bg-white/25 '><Settings/>settings</a></li>
        </ul>
        

    </div>)
}

export default Tleft ;