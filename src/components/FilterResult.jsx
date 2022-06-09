import React, { Fragment } from 'react'
import styles from '../../src/assets/css/components/FilterResult.module.css';

const FilterResult = () => {
  return (
    <Fragment>
      <div className={styles.FilterWrap}>
          <h6>Filter Results</h6>
          <div className={styles.inputFeild}>
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" />
          </div>

          <div className={styles.mobileWrapper}>
            <div className={styles.inputFeild}>
              <label htmlFor='min-score'>Minimum Score</label>
              <input id="min-score" type="text" />
            </div>

            <div className={styles.selectFeild}>
              <label htmlFor='order-by'> Order By</label>
              <select data-testid="select-date" id='order-by'>
                <option value="0" data-testid="select-item">Release Date</option>
                <option value="1" data-testid="select-item">Name</option>
                <option value="2" data-testid="select-item">Score</option>
              </select>
            </div>
            <div className={styles.FilterButton}>
              <button>Clear</button>
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default FilterResult