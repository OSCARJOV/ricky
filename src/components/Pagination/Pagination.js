import React from 'react'

const Pagination = ({pageNumber, setPageNumber}) => {
    let next = ()=>{
        setPageNumber((x) => x+1);
    };
    let prev = ()=>{
      if(pageNumber === 1) return;
        setPageNumber((x) => x-1);
    };
  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className='btn btn-primary'>Anterior</button>
        <button onClick={next} className='btn btn-primary'>Proximo</button>
      
    </div>
  )
}

export default Pagination
