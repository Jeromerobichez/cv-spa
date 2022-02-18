import react from 'react'
import CvRight from './CvRight'
import CvLeft from './CvLeft'
import { globalDataObject } from './data'
import './cv.css'


const CvPage = () => {
  
    return (
        <div className='cv-page'>
        <div className='left-column'>
       <CvLeft data={globalDataObject} />
       </div>
       <div className='right-column'>
           <h1>column 2</h1>
<CvRight pro={globalDataObject.jerome.jeromePro} education={globalDataObject.jerome.jeromeEducation} />
</div>
        </div>
    )
}
export default CvPage;
