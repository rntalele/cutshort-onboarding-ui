import '../css/UsageDetails.css';
const UsageDetails = ({onClickHandler,choice,usageChoiceHandler})=>{

    return(
        <div>
            <h2 className='heading'>How are you planning to use Eden?</h2>
            <p className='sub-heading'>We'll streamline your setup experience accordingly.</p>
            <div className='d-flex align-items-center flex-column'>
                <div className="d-flex justify-content-between mb-2" style={{width:'380px'}}>
                    <div className="card custom-card" style={{border:choice==='myself'?'1px solid #644de4':''}} onClick={()=>usageChoiceHandler('myself')}>
                        <div className="card-body">
                            <i className="bi bi-person-fill custom-icon"></i>
                            <p className='custom-card-title'>For myself</p>
                            <p className='custom-card-content'>Write better. Think more clearly. Stay organized.</p>
                        </div>
                    </div>
                    <div className="card custom-card" style={{border:choice==='team'?'1px solid #644de4':''}} onClick={()=>usageChoiceHandler('team')}>
                        <div className="card-body">
                            <i className="bi bi-people-fill custom-icon"></i>
                            <p className='custom-card-title'>With my team</p>
                            <p className='custom-card-content'>Wikis, docs, tasks & projects, all in one place.</p>
                        </div>
                    </div>
                </div>
                <button 
                    type='button' 
                    className='btn' 
                    style={{background:'#644de4',color:'white'}}
                    onClick={onClickHandler}
                    >
                        Create Workspace
                </button>
            </div>
            
        </div>
    )
}

export default UsageDetails;