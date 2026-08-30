import { IKImage } from 'imagekitio-react';

const Image = ({ src, className, w, h, alt }) => {
  console.log('URL Endpoint:', import.meta.env.VITE_IK_URL_ENDPOINT);
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
        alt={alt}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
      />
    </div>
  );
};

export default Image;
