import React, { Fragment, useEffect, useRef } from 'react'
import drawChart from './drawChart'

const ChartComponent = ({data}) => {

    const ref = useRef(null);

    useEffect(() => {
        if(ref.current) {
            drawChart(ref.current, data);
        }
    },[ref]);

  return (
    <Fragment>
        <div className="container">
            <div className="graph" ref={ref}/>
        </div>
    </Fragment>
  )
}

export default ChartComponent