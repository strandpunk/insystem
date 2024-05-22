import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from 'react';
import './ModelBlock.scss'
import { Model } from "../loader/Loader";
import Popup from "../popup/Popup";

function ModelBlock() {

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Popup isOpen={isPopupOpen} onClose={closePopup} /
      >
      <div className="modelBlock-wrapper">
        <div className="modelBlock-container">


          {isPopupOpen ?
            (
              <div className="modelBloack-canvas"></div>
            )
            : (
              <>
                <div className="modelBloack-text">
                  <p>Познакомьтесь с нашим баллистическим сепаратором через интерактивную 3D-модель.</p> <br /> <em><b>Кликните по модели для использования интерактивных функций</b></em> 
                  {/* Используйте инструменты для управления моделью и увидьте каждую деталь в действии. */}
                </div>
                <div className="modelBloack-canvas">
                  <Canvas onClick={openPopup}>
                    <Suspense fallback={null}>
                      <Model />
                      <ambientLight intensity={0.1} />
                      <pointLight position={[20, 0, 1]} intensity={100} />
                      <pointLight position={[-20, 0, -1]} intensity={100} />
                    </Suspense>
                  </Canvas>
                </div>
              </>
            )}

        </div>
      </div>
    </>
  );
}

export default ModelBlock;
