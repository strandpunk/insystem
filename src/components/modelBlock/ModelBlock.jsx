import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import './ModelBlock.scss'
import { Model } from "../loader/Loader";

function ModelBlock() {

  return (
    <>
      <div className="modelBlock-wrapper">
        <div className="modelBlock-container">
          <div className="modelBloack-text">
            <p>Познакомьтесь с нашим баллистическим сепаратором через интерактивную 3D-модель. </p>
            {/* Используйте инструменты для управления моделью и увидьте каждую деталь в действии. */}
          </div>
          <div className="modelBloack-canvas">
            <Canvas>
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}

              />
              <Suspense fallback={null}>
                <Model />
                <ambientLight intensity={0.1} />
                <pointLight position={[20, 0, 1]} intensity={100} />
                <pointLight position={[-20, 0, -1]} intensity={100} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelBlock;
