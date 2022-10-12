
const SuccessPage = ({name})=>{
    return(
        <div className="text-center">
            <i className="bi bi-check-circle-fill" style={{fontSize:'80px',color:'#644de4'}}></i>
            <div className="d-flex flex-column align-items-center">
                <h2 className='heading'>Congratulations, {name}!</h2>
                <p className='sub-heading'>You have completed onboarding, you can start using Eden!</p>
                <button type='button' className='btn' style={{background:'#644de4',color:'white'}}>Launch Eden</button>
            </div>
        </div>
    )
}

export default SuccessPage;