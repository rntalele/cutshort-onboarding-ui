import Header from './Header';
import Stepper from './Stepper';
import UserDetails from './UserDetails';
import WorkspaceDetails from './WorkspaceDetails';
import UsageDetails from './UsageDetails';
import SuccessPage from './SuccessPage';
import { useState } from 'react';
const HomePage = ()=>{
    const [stepNo,setStepNo] = useState(1);
    const [fullName,setFullName] = useState('');
    const [displayName,setDisplayName] = useState('');
    const [workSpaceName,setWorkSpaceName] = useState('');
    const [workSpaceUrl,setWorkSpaceUrl] = useState('');
    const [usageChoice,setUsageChoice] = useState();

    const onClickHandler = ()=>{
        setStepNo(stepNo+1)
    }

    const fullNameHandler = (e)=>{
        setFullName(e.target.value);
    }

    const displayNameHandler = (e)=>{
        setDisplayName(e.target.value)
    }

    const workSpaceNameHandler = (e)=>{
        setWorkSpaceName(e.target.value);
    }

    const workSpaceUrlHandler = (e)=>{
        setWorkSpaceUrl(e.target.value);
    }

    const usageChoiceHandler = (choice)=>{
        setUsageChoice(choice);
    }   

    const stepperHandler = (currStep)=>{
        if(stepNo > currStep) setStepNo(currStep)
    }

    const displayComponent = (stepNo)=>{
        switch(stepNo){
            case 1: return <UserDetails 
                                onClickHandler={onClickHandler}
                                fullName={fullName}
                                displayName={displayName} 
                                fullNameHandler={fullNameHandler} 
                                displayNameHandler={displayNameHandler}
                            />
            case 2: return <WorkspaceDetails 
                                onClickHandler={onClickHandler}
                                workSpaceName={workSpaceName}
                                workSpaceUrl={workSpaceUrl}
                                workSpaceNameHandler={workSpaceNameHandler}
                                workSpaceUrlHandler={workSpaceUrlHandler}
                            />
            case 3: return <UsageDetails 
                                onClickHandler={onClickHandler}
                                choice={usageChoice}
                                usageChoiceHandler={usageChoiceHandler}
                            />
            case 4: return <SuccessPage name={displayName}/>
            default:return <UserDetails/>
        }
    }
    return(
        <div className="container" style={{width:'630px',height:'710px'}}>
            <Header/>
            <Stepper stepNo={stepNo} stepperHandler={stepperHandler}/>
            {displayComponent(stepNo)}
        </div>
    )
}

export default HomePage;