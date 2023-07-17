import React from 'react'
import{
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import{MdOutlineArrowDropDown} from'react-icons/md'
import data from'../../utils/accordion'
import'./Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings flexCenter innerWidth v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" srcset="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Values</span>
          <span className='primaryText'>Values we Give to you</span>
          <span className='secondaryText'>bvewb uv e nv envivno aeouvaovanvavaihvuahhvhahb
            <br/>
            bcewiububwf7w bgfg fg7wbef g7 7gf7w7be 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi culpa ipsam excepturi quaerat necessitatibus molestiae. Itaque, asperiores, exercitationem quas dignissimos iusto molestiae, nam ea assumenda recusandae hic officiis eius.
            Praesentium nihil in voluptatum unde, nam numquam, aut error ratione perspiciatis pariatur, iure esse neque quasi? Labore placeat suscipit aperiam fugit architecto, quidem, ipsum ad in officiis odit doloribus quam!
            Culpa vitae quia facilis, magni atque unde laboriosam est alias id impedit iure dolores sint eos repudiandae officiis tempore odit ex beatae quidem commodi iste quam? Saepe beatae nesciunt praesentium.
            
          </span>
          
        </div>

      </div>
    </section>
  )
}

export default Value
