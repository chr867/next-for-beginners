import { API_URL } from "../app/constants";
import styles from "../app/styles/movie-videos.module.css"

async function getVideos(id: string){
  await new Promise((resolve) =>{ setTimeout(resolve, 1500) })
  const response = await fetch(`${API_URL}/${id}/videos`);
  // throw new Error('something broke...')
  return response.json();
}

export default async function MovieVideos({id}: {id:string}){
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {
        videos.map(video =>
         <iframe 
          key={video.id}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://youtube.com/embed/${video.key}`}
          ></iframe>
        )
      }
    </div>
  )
}