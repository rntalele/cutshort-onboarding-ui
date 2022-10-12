import { useState } from 'react';
import '../css/UserDetails.css';
const UserDetails = ({onClickHandler,fullName,displayName,fullNameHandler,displayNameHandler})=>{
    
    return(
        <div>
            <h2 className='heading'>Welcome! First things first...</h2>
            <p className='sub-heading'>You can always change them later.</p>
            <div className='d-flex align-items-center flex-column'>
                <form>
                    <div className="form-group input-container">
                        <label htmlFor="fullname" className='label'>Full Name</label>
                        <input type="text" className="form-control mt-1" id="fullname" placeholder="Steve Jobs" onChange={fullNameHandler} value={fullName}/>
                    </div>
                    <div className="form-group input-container">
                        <label htmlFor="displayname" className='label'>Display Name</label>
                        <input type="text" className="form-control mt-1" id="displayname" placeholder="Steve" onChange={displayNameHandler} value={displayName}/>
                    </div>
                    <button 
                        type='button' 
                        className='btn' 
                        style={{background:'#644de4',color:'white'}}
                        onClick={onClickHandler}
                        >
                            Create Workspace
                    </button>
                </form>
            </div>
            
        </div>
    )
}

export default UserDetails;