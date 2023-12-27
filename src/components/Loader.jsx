import animatedlogo from "../assets/images/logo-animated.gif"

const Loader = () => {
  return (
    <div className="loader">
       <img src={animatedlogo} alt="apple loader" className="logo" />
    </div>
  )
}

export default Loader