const element = (
    // Write your code here.
    <div className="bg">
    <h1 className="mainHeading">Congratulations</h1>
    <div className="profileCard">
      <img
        src="-tjwj8l.jpg"
        className="profilePic"
      />
      <h1 className="cardHead">Rohith Patel</h1>
      <p className="cardPara">CMR Technical Campus,Hyderabad</p>
      <p></p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImage"
      />
    </div>
  </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))