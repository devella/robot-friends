import React from 'react'

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
  <input className='w5 pa3 ba b--black bg-lightest-purple'
   type = 'search'
   placeholder= 'search robot friends here' 
     onChange={searchChange}
   />

   </div>
  );

}



export default SearchBox;