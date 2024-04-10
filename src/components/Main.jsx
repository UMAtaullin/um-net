import React from "react";
import PersonalInformation from "./PersonalInformation";

const Main = () => {
  return (
    <main className='content'>
      <div className='posts'>
        <div className='picture'>
          <a href='#'>
            <img
              src='https://www.bkacontent.com/wp-content/uploads/2015/12/PhotoDescriptionSplash.jpg'
              alt='Background'
            />
          </a>
        </div>
          <PersonalInformation/>
        <div>

        </div>
      </div>
    </main>
  )
}

export default Main
