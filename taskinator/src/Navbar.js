import logo from './Taskinator.png'
export default function Navbar(){


return (
<nav className ="nav"> 

<a href = "/">
< img src= {logo}  alt= "Taskin8r logo"/>
    </a>


 <ul> 

    <li>
    <a href= "/about"> ABOUT </a>
    </li>
<li>
    <a href= "/tasks"> TASKS </a>
    </li>
    <li>
    <a href= "/companyList"> COMPANY LIST</a>
    </li>

    <li> 
        <a href= "/signIn"> SIGN IN / SIGN UP </a>
    </li>
 </ul>
</nav>
  
)
}