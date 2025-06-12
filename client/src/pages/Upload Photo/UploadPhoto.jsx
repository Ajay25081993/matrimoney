import React from 'react'
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload'
import Header from "../../components/Header/Header2";
import Footer2 from "../../components/Footer/Footer2";
const UploadPhoto = () => {
  return (
    <div className="bg-green-400 relative flex-col flex justify-center items-center">
      <Header/>
    
      <PhotoUpload/>
      <Footer2/>
    </div>
  )
}

export default UploadPhoto