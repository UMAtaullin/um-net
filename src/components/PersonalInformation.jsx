import React from "react";

const PersonalInformation = () => {
  return (
    <div className='personal-information'>
      <div className='ava'>
        <a href='#'>
          <img
            src='https://masterpiecer-images.s3.yandex.net/bc1294fc916311eeb689d659965eed18:upscaled'
            alt='ava'
          />
        </a>
      </div>
      <div className='description'>
        <p className='name'>Name: Ural Ataullin</p>
        <p className='name'>Date: 24.01.1988</p>
        <p className='name'>Contacts: @UMAtaullin</p>
        <p className='name'>Interests: programming</p>
      </div>
    </div>
  )
}

export default PersonalInformation
