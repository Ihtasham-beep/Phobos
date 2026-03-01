import { footerLinks } from "./codes";

const Footer = () => {
    return(
      <footer>
         <div className="info">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus fugiat voluptatum sint?</p>
             <img src="/logo.svg" alt="" />
         </div> 
         <hr />
         <div className="links">
             <p>Copyright @ 2026 Apple Inc . All Rights Reserved.</p>
             <ul>
                 {footerLinks.map(({link , label}) => (
                  <li key={label}><a href={link}>{label}</a></li>
              ))}
             </ul>
         </div>
      </footer>
    )
} 
export default Footer;