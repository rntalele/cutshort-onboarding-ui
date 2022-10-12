
import '../css/WorkspaceDetails.css';
const WorkspaceDetails = ({onClickHandler,workSpaceName,workSpaceUrl,workSpaceNameHandler,workSpaceUrlHandler})=>{
    return(
        <div>
            <h2 className='heading'>Let's set up a home for all your work</h2>
            <p className='sub-heading'>You can always create another workspace later.</p>
            <div className='d-flex align-items-center flex-column'>
                <form>
                    <div className="form-group input-container">
                        <label htmlFor="workspacename" className='label'>Workspace Name</label>
                        <input type="text" className="form-control mt-1" id="workspacename" placeholder="Eden" onChange={workSpaceNameHandler} value={workSpaceName}/>
                    </div>
                    <div className="form-group input-container">
                        <label htmlFor="workspaceurl" className='label'>
                            Workspace URL
                            <span className='sub-label'>(optional)</span>
                        </label>
                        <div className='d-flex align-items-center mt-1'>
                            <span className='pre-input'>www.eden.com/</span>
                            <input type="text" className="form-control url-input mt-1" id="workspacename" placeholder="Example" onChange={workSpaceUrlHandler} value={workSpaceUrl}/>
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
                </form>
            </div>
            
        </div>
    )
}

export default WorkspaceDetails;