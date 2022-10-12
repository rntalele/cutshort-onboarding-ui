import '../css/Stepper.css';

const calculateConnectorStyle = (stepNo,currStep)=>{
    if(stepNo >= currStep){
        return {background:'#644de4'}
    }
    return {};
}

const calculateButtonStyle = (stepNo,currStep)=>{
    if(stepNo >= currStep){
        return {background:'#644de4',color:'white'}
    }
}
const Stepper = ({stepNo,stepperHandler})=>{
    return(
        <div className='stepper d-flex justify-content-center align-items-center'>
            <button type="button" className="btn btn-circle" style={calculateButtonStyle(stepNo,1)} onClick={()=>stepperHandler(1)}>1</button>
            <div className='connector' style={{background:'#644de4'}}></div>
            <div className='connector' style={calculateConnectorStyle(stepNo,2)}></div>
            <button type="button" className="btn btn-circle" style={calculateButtonStyle(stepNo,2)} onClick={()=>stepperHandler(2)}>2</button>
            <div className='connector' style={calculateConnectorStyle(stepNo,2)}></div>
            <div className='connector' style={calculateConnectorStyle(stepNo,3)}></div>
            <button type="button" className="btn btn-circle" style={calculateButtonStyle(stepNo,3)} onClick={()=>stepperHandler(3)}>3</button>
            <div className='connector' style={calculateConnectorStyle(stepNo,3)}></div>
            <div className='connector' style={calculateConnectorStyle(stepNo,4)}></div>
            <button type="button" className="btn btn-circle" style={calculateButtonStyle(stepNo,4)} onClick={()=>stepperHandler(4)}>4</button>
        </div>
    )
}

export default Stepper;