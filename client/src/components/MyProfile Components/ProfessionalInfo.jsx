import React from 'react'

const ProfessionalInfo = () => {
  return (
    <div className="profileComponent">
          <div className="flex w-full justify-between items-center">
            <p className="text-xl font-normal text-gray-400">Professional Information </p>
            <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
              <span>
                <i class="ri-pencil-fill"></i>
              </span>{" "}
              Edit
            </button>
          </div>

          <div className="flex w-full gap-10 ">
            <div>
              <p>Education</p>
              <p>Education in detail</p>
              <p>College / Institution</p>
              <p>Employed in</p>
              <p>Occupation</p>
            </div>
            <div>
              <p>: BCA - Bachelor of Computer Applications</p>
              <p>: Not Specified</p>
              <p>: Not Specified</p>
              <p>: Not Working</p>
              <p>: Not Working</p>
            </div>
          </div>
        </div>
  )
}

export default ProfessionalInfo