import logo from './Taskinator.png'
export default function Navbar(){


return (
<nav className ="nav"> 


< img src= {logo} alt= "Taskin8r logo"/>
    
 <ul> 
    <li>
    <a href= "/about"> ABOUT </a>
          </li>
          <li>
    <a href= "/companyList"> COMPANY LIST</a>
        </li>
        <li> <a href= "/signIn"> SIGN IN / SIGN UP </a>
        </li>
 </ul>
</nav>
  
)
}