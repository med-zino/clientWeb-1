import { FC } from 'react'
import { Col } from 'reactstrap'
import { TabacType } from '../../helpers/types'
import TabacBoxes from './TabacBoxes'

interface Props {
 handleTabacChange: (type: string, value: boolean, nbr: number) => void
 fumer: TabacType
 prise: TabacType
 chiquer: TabacType
 exFumeur: TabacType
}

const Tabac: FC<Props> = ({handleTabacChange, fumer, chiquer, prise, exFumeur}) => {
 return (
  <div>
   <Col className="editfolder__tabacsection-col">
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-fumer"
     titre1="à fumer:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={fumer}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-chiquer"
     titre1="à chiquer:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={chiquer}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="cigarette-prise"
     titre1="à prise:"
     titre2="Nbr Cigarettes/j:"
     handleTabacChange={handleTabacChange}
     tabac={prise}
    />
    <TabacBoxes
     btn1text="Oui, déja"
     btn2text="Non, jamais"
     inputname="ancien-fumeur"
     titre1="ancien fumeur: "
     titre2="Période dexposition:"
     handleTabacChange={handleTabacChange}
     tabac={exFumeur}
    />
   </Col>
  </div>
 )
}
export default Tabac
