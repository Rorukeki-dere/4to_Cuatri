// SketchfabModel.tsx
import React, { useEffect } from 'react';

interface SketchfabModelProps {
  modelId: string;
}

const SketchfabModel: React.FC<SketchfabModelProps> = ({ modelId }) => {
  useEffect(() => {
    const sketchfabIframe = document.createElement('iframe');
    sketchfabIframe.style.width = '100%'; // Cambiado a 100% para hacerlo responsive
    sketchfabIframe.style.height = '100%'; // Puedes ajustar la altura según tus necesidades
    sketchfabIframe.src = `https://sketchfab.com/models/${modelId}/embed`;

    const sketchfabEmbedWrapper = document.getElementById('sketchfab-embed-wrapper');
    if (sketchfabEmbedWrapper) {
      sketchfabEmbedWrapper.appendChild(sketchfabIframe);
    }

    return () => {
      if (sketchfabEmbedWrapper) {
        sketchfabEmbedWrapper.removeChild(sketchfabIframe);
      }
    };
  }, [modelId]);

  return (
    <div
      id="sketchfab-embed-wrapper"
      className="w-1/2 h-80" // Utiliza w-1/2 para que abarque el 50% de la página
      style={{
        position: 'relative',
      }}
    ></div>
  );
};

export default SketchfabModel;