import Header from './Header'
import ReactLogo from './Reactjs.png'
import "./CombinedHeader.css"
function CombinedHeader(){
    return(
        <div className="combinedheaderstyle">
            <div className="leftflank">
            <img src={ReactLogo} alt="React Logo" className="reactlogo"/>
            <Header></Header>
            </div>
            <div className='rightflank'>React Course Project</div>
        </div>
    )
}
export default CombinedHeader;