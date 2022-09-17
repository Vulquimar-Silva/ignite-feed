
//Pages - components
import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

//CSS - styles
import styles from './App.module.css'
import './global.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Vulquimar-Silva.png',
      name: 'Vulquimar Silva',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio.' },
      { type: 'link', content: 'vulquimar.silva/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Vulquimar-Silva.png',
      name: 'Archibald Tamashiro',
      role: 'Desenvolvedor Frond End'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal!' },
      { type: 'paragraph', content: 'Hoje tem call para falarmos sobre hooks.' },
      { type: 'link', content: 'front.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-21 14:50')
  },
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
