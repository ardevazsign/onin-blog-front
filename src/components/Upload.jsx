import { IKContext, IKUpload } from 'imagekitio-react';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`,
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    // Parse and destructure the response JSON for upload credentials.
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    // Log the original error for debugging before rethrowing a new error.
    // console.error('Authentication error:', error);
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  //
  const ref = useRef(null);

  const onError = (err) => {
    console.log(err);
    toast.error('Image upload failed!');
  };

  const onSuccess = (res) => {
    console.log('UPLOAD SUCCESS FULL RESPONSE:', res);

    const imageData = {
      url: res?.url || res?.filePath || '',
      filePath: res?.filePath || '',
    };

    setData(imageData);
  };

  const onUploadProgress = (progress) => {
    console.log(progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  // console.log('PUBLIC KEY:', import.meta.env.VITE_IK_PUBLIC_KEY);
  // console.log('URL ENDPOINT:', import.meta.env.VITE_IK_URL_ENDPOINT);

  return (
    <IKContext
      // publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      // urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
