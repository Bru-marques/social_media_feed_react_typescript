import { PencilLine } from 'phosphor-react'
import { Avatar } from '../avatar'
import styles from './Sidebar.module.css'
export const SideBar = () =>{
  const avatar = 'https://github.com/Bru-marques.png'
  const name = 'Bruna Marques'
  const role = 'FrontEnd Developer'
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
      src='https://images.unsplash.com/photo-1515940175183-6798529cb860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      />

      <div className={styles.profile}>
        <Avatar src={avatar} />
        <strong>{name}</strong>
        <strong>{role}</strong>
      </div>

      <footer>
        <a href='#' >
        <PencilLine size={20} />
        Edit Profile
        </a>
      </footer>
    </aside>
  )
}