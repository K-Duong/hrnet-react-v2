
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import MainContainer from "../../layout/mainContainer";

function ErrorPage() {
  return (
    <>
    <Navbar />
    <MainContainer>
    <div className="error-wrapper flex flex-col items-center grow justify-center">
      <h1 className="error-status text-error text-big-title font-medium ">404</h1>
      <h2 className="error-message text-center text-2xl font-medium">Something went wrong. Please try again!</h2>
    </div>
    </MainContainer>
    <Footer />
  </>
  )
}

export default ErrorPage