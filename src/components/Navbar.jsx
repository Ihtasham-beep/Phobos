import { Navlinks } from "./codes";  



const Navbar = () => {
    return(
        <header>
             <nav>
                 <img src="/logo.svg" alt="Apple" /> 

                  <ul>
                     {Navlinks.map(({label})=>(
                         <li className="list-style-type-none" key={label}>
                            <a href="#" className="font-[Arial] text-white">{label}</a>
                         </li>
                     ))}
                  </ul> 

                 <div className="flex gap-3">
                  <button>
                      <img src="/search.svg" alt="" />
                     </button>     
                       <button>
                      <img src="/cart.svg" alt="" />
                     </button>    
                </div> 
             </nav> 

              
        </header>
    )
} 

export default Navbar;