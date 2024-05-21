import Characters from '../characters/Characters.jsx';
import Description from '../description/Decription.jsx'
import EModel from '../eModel/EModel.jsx';
import ModelBlock from '../modelBlock/ModelBlock.jsx';
import Reviews from '../reviews/Reviews.jsx';
import Usability from '../usability/Usability.jsx';
import './Content.scss'


function Content() {
  return (
    <>
      <div className="conent-wrapper">
        <ModelBlock />
        <div className='conent-section'><Description /></div>
        {/* <EModel /> */}
        <div className='conent-section'><Characters /></div>
        <div className='conent-section'><Usability /></div>
        <div className='conent-section'><Reviews /></div>
      </div>
    </>
  );
}

export default Content;
