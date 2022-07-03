import AlertContext from "../../context/alerts/AlertContext";
import { useContext } from 'react';

function Alert() {  
    const {alert} = useContext(AlertContext)
    
    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && {
                
            }}
        </p>
    )
}

export default Alert;