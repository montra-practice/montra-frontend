import { useState } from 'react'
import styles from './index.scss'

interface IProps {
  defaultValue: string
  tags: string[]
}

const Tag = ({ defaultValue, tags = [] }: IProps) => {
  const [selection, setSelection] = useState(defaultValue)

  const selectionChange = (item: string) => () => {
    setSelection(item)
  }

  return (
    <div className={styles.wrapper}>
      {tags.map((tag: string) => (
        <span
          key={tag}
          className={selection === tag ? styles.selected : styles.tag}
          onClick={selectionChange(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tag
