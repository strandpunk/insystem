import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import './ModelBlock.scss'
import { Model } from "../loader/Loader";

function ModelBlock() {
  return (
    <>
      <div className="modelBlock-wrapper">
        <div>
          <p>Познакомьтесь с нашим баллистическим сепаратором через интерактивную 3D-модель. Используйте инструменты для управления моделью и увидьте каждую деталь в действии.</p>
        </div>
        <div className="canvSize">
          <Canvas>
            <OrbitControls></OrbitControls>
            <Suspense fallback={null}>
              <Model />
              <ambientLight intensity={1} />
              <pointLight position={[1, 0, 1]} />
              <pointLight position={[-1, 0, -1]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default ModelBlock;
