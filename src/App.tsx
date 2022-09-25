
import { posts } from './components/data'
import { Header } from './components/header'
import { Post } from './components/posts'
import { SideBar } from './components/sideBar'
import styles from './App.module.css';
import './globalStyle.css'

 function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt} 
                content={post.content} />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App