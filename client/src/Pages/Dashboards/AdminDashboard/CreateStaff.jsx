import React from 'react'
import AdminSidebar from './AdminSidebar'
import '../Slidebar/slidebar.scss'

function CreateStaff() {
    const handleSubmit = (e) => {
        e.preventDefault();

      };
    


  return (

    <div className='board'>

         <AdminSidebar/>
         <div className='main__board main__board2'>
         <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="text" id="form1Example1" className="form-control pt-5" />
            <label className="form-label" htmlFor="form1Example1">Username</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input type="email" id="form1Example2" className="form-control pt-5" />
            <label className="form-label" htmlFor="form1Example2">Email</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="form1Example2" className="form-control pt-5" />
            <label className="form-label" htmlFor="form1Example3">Password</label>
          </div>
          {/* 2 column grid layout for inline styling */}
          
          {/* Submit button */}
          <button type="submit" className="btn btn-block text-white fs-5" style={{backgroundColor:'green'}}>Create Staff</button>
             </form>
         </div>
     </div>

   
  )
}

export default CreateStaff