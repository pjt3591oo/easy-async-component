import useFileImg from './useFileImg';

const FileImg = ({ file }) => {
  const { src } = useFileImg(file);

  if(!src) <></>

  return (
    <img src={src} alt="file" style={{width: 100, height: 'auto'}}/>
  )
}

export default FileImg;