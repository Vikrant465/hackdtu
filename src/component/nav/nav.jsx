import './nav.css'
function Nav() {
    return (
      <div class="topnav" id="myTopnav">
          {/* <div className="test">  hello  </div> */}
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  <input type="text" placeholder="Search.."></input>
</div>
    )
    
}


export default Nav;