import { useAuth, useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill-new';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Upload from '../components/Upload';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState('');
  const [cover, setCover] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');
  const [progress, setProgress] = useState(0);

  const quillRef = useRef(null);

  // useEffect(() => {
  //   img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
  // }, [img]);

  // useEffect(() => {
  //   if (img?.url) {
  //     setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
  //   }
  // }, [img]);

  useEffect(() => {
    if (!img?.url || !quillRef.current) return;

    const editor = quillRef.current.getEditor();

    // Current cursor position
    const range = editor.getSelection(true);

    // If no cursor, insert at the end
    const index = range ? range.index : editor.getLength();

    // Insert the image
    editor.insertEmbed(index, 'image', img.url);

    // Add a new line after the image
    editor.insertText(index + 1, '\n');

    // Move the cursor below the image
    editor.setSelection(index + 2);
  }, [img]);

  // useEffect(() => {
  //   video &&
  //     setValue(
  //       (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`,
  //     );
  // }, [video]);
  // useEffect(() => {
  //   if (video?.url) {
  //     setValue(
  //       (prev) =>
  //         prev + `<p><iframe class="ql-video" src="${video.url}"></iframe></p>`,
  //     );
  //   }
  // }, [video]);

  // To simplified code above for image and video
  // const insertEmbed = (type, url) => {
  //   if (!quillRef.current || !url) return;

  //   const editor = quillRef.current.getEditor();
  //   const range = editor.getSelection(true);
  //   const index = range ? range.index : editor.getLength();

  //   editor.insertEmbed(index, type, url);
  //   editor.insertText(index + 1, '\n');
  //   editor.setSelection(index + 2);
  // };

  // useEffect(() => {
  //   if (img?.url) {
  //     insertEmbed('image', img.url);
  //   }
  // }, [img]);

  // useEffect(() => {
  //   if (video?.url) {
  //     insertEmbed('video', video.url);
  //   }
  // }, [video]);

  // To simplified code above for image and video

  useEffect(() => {
    if (!video?.url || !quillRef.current) return;

    const editor = quillRef.current.getEditor();

    const range = editor.getSelection(true);
    const index = range ? range.index : editor.getLength();

    // Insert the video
    editor.insertEmbed(index, 'video', video.url);

    // Add a new line after it
    editor.insertText(index + 1, '\n');

    // Move the cursor below the video
    editor.setSelection(index + 2);
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  // const mutation = useMutation({
  //   mutationFn: async (newPost) => {
  //     const token = await getToken();
  //     return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   },
  //   onSuccess: (res) => {
  //     toast.success('Post has been created');
  //     navigate(`/${res.data.slug}`);
  //   },
  // });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    imageResize: {
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
  };

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },

    onSuccess: (res) => {
      toast.success('Post has been created');
      navigate(`/${res.data.slug}`);
    },

    // onError: (err) => {
    //   console.log(err);
    //   console.log(err.response?.data);
    //   toast.error(err.response?.data?.message || 'Failed to create post');
    // },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   const data = {
  //     // img: cover.filePath || '',
  //     img: cover?.url || cover?.filePath || '',
  //     title: formData.get('title'),
  //     category: formData.get('category'),
  //     desc: formData.get('desc'),
  //     content: value,
  //   };
  //   console.log(data);

  //   mutation.mutate(data);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      // img: cover.url || cover.filePath || '',
      img: cover.filePath || '',
      title: formData.get('title'),
      category: formData.get('category'),
      desc: formData.get('desc'),
      content: value,
    };

    console.log('Submitting:', data);

    mutation.mutate(data);
  };

  console.log(cover);

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 2xl:mt-20 ">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 flex-1 mb-10"
      >
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>

        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="text-sm">
            Choose a category :
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload
              className="w-[300px] h-[200px]"
              type="image"
              setProgress={setProgress}
              setData={setImg}
              // className="cursor-pointer"
            >
              🖼️
            </Upload>
            <Upload
              type="video"
              setProgress={setProgress}
              setData={setVideo}
              // className="cursor-pointer"
            >
              ▶️
            </Upload>
          </div>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            modules={modules}
            className="flex-1 rounded-xl bg-white shadow-md pb-10 pl-5 pt-4 blog-content"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-700 text-white font-medium rounded-xl mt-4 p-1 w-40 disabled:bg-blue-400 disabled:cursor-not-allowed "
        >
          {mutation.isPending ? 'Loading...' : 'Send'}
        </button>
        {'Progress : ' + progress}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  );
};

export default Write;
