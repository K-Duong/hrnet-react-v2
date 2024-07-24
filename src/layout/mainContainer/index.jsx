import "./style.css";
function MainContainer ({children}) {
  return (
    <div className="main-container flex flex-col grow pt-4 items-center">
      {children}
    </div>
  )
}

export default MainContainer