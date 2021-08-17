import { FC, ComponentProps, useState } from 'react'
import { Collapse, Card, Input } from 'reactstrap'
import './Collapses.scss'

interface InputProps {
 title: ComponentProps<typeof Input>['name']
}

const Collapses: FC<InputProps> = ({ title, children}) => {
 const [collapse, setCollapse] = useState(false)
 const [, setStatus] = useState('Closed')

 const onEntering = () => {
  setStatus('Opening...')
 }
 const onEntered = () => {
  setStatus('Opened')
 }
 const onExiting = () => {
  setStatus('Closing...')
 }
 const onExited = () => {
  setStatus('Closed')
 }
 const toggle = () => {
  setCollapse(!collapse)
 }

 return (
  <div className="editfolder__collapse">
   <Card onClick={toggle} className="editfolder__collapse-card">
    <p>{title}</p>
   </Card>
   <Collapse
    isOpen={collapse}
    onEntering={onEntering}
    onEntered={onEntered}
    onExiting={onExiting}
    onExited={onExited}
   >
    <Card className="editfolder__collapse-card--content">
     <p className="editfolder__collapse-card--contentheader">{title}</p>
     {children}
    </Card>
   </Collapse>
  </div>
 )
}

export default Collapses
