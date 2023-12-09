import Link from 'next/link';
const One = '/images/papers/1-1.jpg';

export default function Home() {
  return (
    <>
      <div className='newspaper-body'>
        <Link className='news-block' href='#'>
          <img
            src='https://www.edainikazadi.net/content/2023/2023-11-13/zoom_view/1-1.jpg'
            alt='one ads'
          />
        </Link>
        <Link className='news-block' href='#'>
          <img
            src='https://www.edainikazadi.net/content/2023/2023-11-13/zoom_view/1-2.jpg'
            alt='one ads'
          />
        </Link>
        <Link className='news-block' href='#'>
          <img
            src='https://www.edainikazadi.net/content/2023/2023-11-13/zoom_view/1-6.jpg'
            alt='one ads'
          />
        </Link>
        <Link className='news-block' href='#'>
          <img
            src='https://www.edainikazadi.net/content/2023/2023-11-13/zoom_view/1-11.jpg'
            alt='one ads'
          />
        </Link>
        <Link className='news-block' href='#'>
          <img
            src='https://www.edainikazadi.net/content/2023/2023-11-13/zoom_view/1-16.jpg'
            alt='one ads'
          />
        </Link>
      </div>
    </>
  );
}
