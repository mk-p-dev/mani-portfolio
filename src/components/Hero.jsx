import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I am a Frontend Developer',
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi Buddy, <br/> I am <br /><span className='text-black text-5xl font-medium'>MANIKANDAPRABHU P</span> 
                <p className='text-2xl pt-3'>{config.subtitle}</p>
            </h1>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
