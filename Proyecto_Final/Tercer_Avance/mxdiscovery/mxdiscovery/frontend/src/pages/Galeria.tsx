import Gallery from "../components/Galeria";
import SketchfabModel from "../components/3dmodel";
import imagenqr from "../assets/MacotaQR.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import unitylogo from "../assets/unity.png";
import QRAPP from "../assets/QR APP.jpeg";
import tourImage from "../assets/tour.png";



const Galeria = () => {


  return (
    <>

      <Gallery />

      <div>
        <br />
        <br />
        <h1 className="flex flex-col justify-center items-center text-4xl font-bold dark:text-white text-center">¡Conoce a Cronos, nuestra mascota!</h1>
        <br />
        <div className="flex flex-col justify-center items-center rounded-lg">
          <SketchfabModel modelId={"bac13c2d59fd4997ace4807dc50cee25"} />


          <div className="flex justify-center">
            <div className="flex items-center flex-col sm:flex-row">
              <div className="mb-4 sm:mr-4">
                <br />
                <img className="h-64 w-64 rounded-md" src={imagenqr} alt="" />
              </div>
              <div>
                <h1 className="text-xl dark:text-white text-center">¡Escanea este QR y visualiza a Cronos en tu entorno!</h1>
                <h1 className="text-sm dark:text-white" text-center>*Se requiere la aplicación Adobe Aero</h1>
                <br />

                <div className="flex items-center">
                  <a href="https://play.google.com/store/apps/details?id=com.adobe.aero.android&hl=es_MX&gl=US" target="_blank" rel="noopener noreferrer">
                    <img className="h-12 w-50 mr-2 " src={google} alt="Google Play" />
                  </a>
                  <a href="https://apps.apple.com/mx/app/adobe-aero/id1401748913" target="_blank" rel="noopener noreferrer">
                    <img className="h-12 w-50 " src={apple} alt="App Store" />
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="flex justify-center">
  <div className="flex items-center flex-col sm:flex-row">
    <div>
      <h1 className="text-2xl dark:text-white text-center">¡Disfruta de nuestro tour de realidad mixta!</h1>
      <h1 className="text-sm dark:text-white text-center">Escanea el código QR, descarga e instala nuestra aplicación</h1>

      <br />
      <div className="flex flex-col items-center sm:flex-row">
        <div className="mb-4 sm:mb-0 mr-4">
          <img className="h-64 w-120 rounded-lg" src={tourImage} alt="App Store" />
        </div>
        <div className="mb-4 sm:mb-0">
            <img className="h-64 w-64 rounded-md" src={QRAPP} alt="" />
        </div>
      </div>
      <br />
      <div className="flex items-center justify-center">
      <h1 className="text-xl dark:text-white text-center mr-2">Potenciado con:</h1>

        <img className="h-12 w-50 mr-4" src={unitylogo} alt="Google Play" />
      </div>
      <br />
      <h1 className="text-sm dark:text-white text-center">*Disponible solo para dispositivos Android. Requiere una versión de Android 11 o superior.</h1>
    </div>
  </div>
</div>



        </div>
        <br />
        <br />
      </div>

    </>
  );
};



export default Galeria;

