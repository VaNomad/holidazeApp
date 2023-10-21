import { Carousel } from "react-responsive-carousel";
import noImg from "../../assets/vectors/hLogoPink.png"

export const VenuesCarousel = ({media, name}) => {

  return (
    
    <div className="relative z-40">
      {media.length > 0 ? (
          <Carousel showStatus={false} showThumbs={false} dynamicHeight={false} >
            {media.map((imageUrl, index) => (
              <div key={`media-${index}`}>
                <img
                  className="object-cover object-center border-2 mx-auto rounded-2xl max-h-[400px]"
                  src={imageUrl}
                  alt={name}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <img
            className="object-cover mx-auto rounded-2xl h-52 lg:p-10 sm:p-14 md:p-8 xs:p-8"
            src={noImg}
            alt={name}
          />
        )}
    </div>
  );
}