import Content from './Content';
import ContentHeader from "./ContentHeader";
import "./CombinedContent.css"
function CombinedContent(){

    return(
        <div className='combinedcontent'>
            <ContentHeader></ContentHeader>
            <Content></Content>
        </div>

    )

}
export default CombinedContent;