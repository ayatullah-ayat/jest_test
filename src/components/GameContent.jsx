import React, { Fragment } from 'react'
import styles from '../../src/assets/css/components/GameContent.module.css';

const GameContent = () => {
  return (
    <Fragment>
        <div className={styles.GameContentWrap}>

          <div className={styles.GameImage}>
            <div className={styles.MobileGameScore}>
              <span>9</span>
            </div>
          </div>

          <div className={styles.GameContentInfo}>
            <h4>Game Title</h4>
            <p className={styles.releaseDate}>Release Date:  DD/MM/YY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatibus velit beatae quia totam nemo nihil quibusdam.
            </p>
          </div>

          <div className={styles.GameScore}>
            <span>9</span>
          </div>

        </div>
    </Fragment>
  )
}

export default GameContent