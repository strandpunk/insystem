import React from 'react';
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import { Model } from "../loader/Loader";
import './Popup.scss'; // Подключаем файл со стилями для попапа


const Popup = ({ isOpen, onClose }) => {

    const popupRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Устанавливаем фокус на попап при его открытии
            popupRef.current.focus();
        }
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            onClose()
        }
    }

    return (
        <div className={`popup ${isOpen ? 'open' : ''}`} onKeyDown={handleKeyDown} tabIndex={0} ref={popupRef}>
            {isOpen ?
                (
                    <>
                        <span className="close" onClick={onClose}>&times;</span>
                        <Canvas>
                            <OrbitControls
                                enableZoom={true}
                                enablePan={true}
                                enableRotate={true}
                                minDistance={1} // Минимальное увеличение
                                maxDistance={10} // Максимальное увеличение

                            />
                            <Suspense fallback={null}>
                                <Model />
                                <ambientLight intensity={0.1} />
                                <pointLight position={[20, 0, 1]} intensity={100} />
                                <pointLight position={[-20, 0, -1]} intensity={100} />
                            </Suspense>
                        </Canvas>
                    </>
                )
                : (
                    <div className="modelBloack-canvas">

                    </div>
                )}



        </div>
    );
};

export default Popup;