import React, { useState } from 'react'
import { Plus } from '../../../assets/icons/Icons'
import { StageCreateModal } from './StageCreateModal';

export const StageButtonModal = (props) => {
    

    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
    <button onClick={()=>{setShowModal(true)}} className='w-full h-[5vh] flex items-center justify-center bg-[#6D28D9] text-white font-["Lato","sans-serif"] font-normal rounded-md drop-shadow-md'>
       <Plus color={'white'} h={'18'}/>
     </button>
    {showModal && (<StageCreateModal id={props.id} onClose={()=>{setShowModal(false)}}/>)}
   </> 
  )
}
