import React from 'react'

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
  <input className='w5 pa3 ba b--blue bg-lightest-green'
   type = 'search'
   placeholder= 'search robot friends' 
     onChange={searchChange}
   />

   </div>
  );

}



export default SearchBox;