import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Sample Facebook Website. Built with HTML and CSS.',
                link: 'https://github.com/mk-p-dev/facebookClonePage'
            },
            {
                image: websiteImg2,
                description: 'Food menu website',
                link: 'https://github.com/mk-p-dev/FoodWebpage'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with HTML and CSS',
                link: 'https://github.com/mk-p-dev/BlogWebpage'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p className='text-2xl'>These are some of my best projects. I have built these with HTML, CSS and JS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project,index) => (
                     <div className='relative' key={index}>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Source Code</a>
                            </div>
                        </div>
                    </div>
                ))}                             
            </div>
        </div>
    </section>
}