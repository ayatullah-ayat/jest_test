import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../src/assets/css/components/GameContent.module.css';
import { microTimeToDate, str_limit_conent } from '../utils/formatDate';

const GameContent = ({ game }) => {

  let objStr = str_limit_conent((game.summary ?? ''), 100, '');

  const refSpan = useRef(null)
  const [btnContent, setBtnContent] = useState("More...");

  const handleMore = () => {
    refSpan.current.classList.toggle("d-none")
    if (!refSpan.current.classList.contains("d-none")) {
      setBtnContent("Less...");
    } else {
      setBtnContent("More...");
    }
  }

  return (
    <Fragment>
        <div className={styles.GameContentWrap}>

          <div className={styles.GameImage}>
            <div className={styles.MobileGameScore}>
            <span>{Math.ceil(game.rating)}</span>
            </div>
          </div>

          <div className={styles.GameContentInfo}>
            <h4>{game.name ?? 'N/A'}</h4>
            <p className={styles.releaseDate}>Release Date:  {microTimeToDate(game.first_release_date)}</p>
            <p>{objStr['str1'] ?? ''}
              <span className='d-none' ref={refSpan}>{objStr['str2'] ?? ''}</span>
              {objStr['str2'] ? <Link to="" className='mx-1' style={{  color: '#fef' }} onClick={handleMore}>{btnContent}</Link> : null}</p>
          </div>

          <div className={styles.GameScore}>
            <span>{Math.ceil(game.rating)}</span>
          </div>

        </div>
    </Fragment>
  )
}

export default GameContent