import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DropDown = (props: any) => {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState([])

    const toggleBtn = () => {
        if(open) {setOpen(false)}
        if(!open) {setOpen(true)}
    }
    useEffect(() => {
      setData(props.info)
      console.log(data, "data")

    }, [])
    
  return (
    <div>
        <div>
            <button className='border border-sky-500 rounded-lg text-white p-3 w-44' onClick={toggleBtn}>my list</button>
            { open &&
                <div>
                    <select name="people" id="people">
                        {data.map((d: any) => 
                            <option key={d.index} value={d.name}>{d.name}</option>
                        )}
                    </select>
                </div>
            }
        </div>
    </div>
  )
}

export default DropDown