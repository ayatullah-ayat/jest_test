import React, { Fragment } from 'react'
import styles from '../../src/assets/css/components/FilterResult.module.css';

const FilterResult = () => {
  return (
    <Fragment>
      <div className={styles.FilterWrap}>
          <h6>Filter Results</h6>
          <div className={styles.inputFeild}>
            <label>Name</label>
            <input type="text" />
          </div>

          <div className={styles.mobileWrapper}>
            <div className={styles.inputFeild}>
              <label>Minimum Score</label>
              <input type="text" />
            </div>

            <div className={styles.selectFeild}>
              <label> Order By</label>
              <select>
                <option value="" selected disabled>Release Date</option>
                <option value="">Name</option>
                <option value="">Score</option>
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