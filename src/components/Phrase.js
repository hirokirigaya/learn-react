import styles from './Phrase.module.css'

function Phrase() {
  return(
    <div className={styles.phraseContainer}>
      <p className={styles.phraseLetter}>This is a phrase</p>
    </div>
  )
}

export default Phrase;