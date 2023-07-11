import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import './OutlineCard.css';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function OutlinedCard(props) {
  const card = (
    <React.Fragment>
      <CardContent >
        <Typography >
          <div style={{display:"flex",justifyContent:"space-between"}} className='marg' >
            
            <img width="24px" height="24px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2ZQWoDMRAE/QL9Hx3iL/TFecBCctwfSBBy3T8oLAkYgsHBykoz4zo0sXMspmtG+KScGkkPMzgBL3UNEAAzANvMFjGBGYCNCcx+LwEqnAHY3E7gttrJ53tqr2cANm8Q/2UCNVnkMyGGAvjxdv17OTsGWJfUyjIe4A5tNMRDAJblG+JogPvn0RBDVVg/3y8vV4hHOzEkQA2EGMqB+vX/EXUO50ANhhi2whpU56cAqAMhhnagBtQ5vAN1MMRQFd4eyA4RgGsfRD27AzWxQSEcqGgA5SQAzEEBVhzYB7DgQBwoy0tkG/RTZ1gHbgDEgZpZYRmJ2QrLScwCrNyBfQALdyAVlmUH1hsV5w7Mf3fgrYoDMOPAKWeAJsbsGSMnMQuwcgceewdWtnBfBQpbGAcKBya7S6TwFh53BmhizE6g7oQtfAdg5S2MA2W5wjIStw6UkZgFWHkL9wEsvIWPrUDhLYwDhQOT3SVSeAuPOwM0MWYnUE5iFmDlDuwDWHAgFRYOTH4cuDkPAFenAEUAqM4hYAIzANtMlTCBGYCNCcx+NzoVzgBsMyfwC5GXxoJmQw+mAAAAAElFTkSuQmCC"></img>
            <img width="24px" height="24px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxElEQVR4nO1Z3UtUQRQf+zLCIhKih0AKvXPuVmotUmZpUVAPgtCbUI/1H2RvUUjoS5CQD+FDUFL5kRQZlhUWld4zu+GLWPhgPfVgWpYVfXpi5uqy997ZdT+8tgt7YF72zvzO7zdz58xv7jKWi1zkwrcgATWysWwNEvCEBH/MsjEIoZIEkGqWuZ9lW5DgDyMCBDxg2RQUNndHkbdbyKhi2RKE/L5HgOC9LBuCwrCLEGa9AmQzKlimByHc1ZMHIoQ7LJODMFAee/aVgFmyIMgyNQj5bSdh/pQEf+YS0c0yMQjNbYTw10nWPETCPOxZhSGjlGVakIAOV9UZjDxDeO5amVssk4KGSkzv7PMjkedoHHWtguy7/f+QRSgkC/aQME+QgEZCfpMEjLsIomYcujb1+NzYRoUlMREKF4fkcNl6WbPJgnoScJYEtNsE+FTMCuMUUKsRUJvQWMGn5sS2q9yKg1EhOSUyuxcIYSKxRDEJDBOxPA82sTz1LB1shAnJMbaAcHANIe9PPQF/TyGjLiZ+yKhTfVLH75cc46/CQNFq6VtigPwhAW+lxyeEK2SZDSTgGFklZTQSKFhwiedzjAQK1Bghx5oNCktiKmyVQ7eyvZJboglWeQ4lG+Sjn36G7JP8gybvPRorzk8OrJMtJ4TrmmX8JO2yLyZQ8EnN7HdQOLgyNVApQsBVzWaalmVv0chbENRWOOQ3aKBmRXrgsnogv6wB/0ohfiBt8iGjigR81rw2bURsWbr40SJaNSJmCM3qlHHRrFYYXtxWXSlOX4TgFzXJvpHFDyaNFzb2kYAvS0LekVjwJs1G60seB/o0r02TP6zdyeXmciZuThpD8Gb3hvWHrS45QpcjuQX1SWPYPouiKluXP2x1yRHeOJKH+Y6kMYaMUpeA1/6w1VqN6OOe/451ShKCIZv22VhxvhobbVMStQppH/fOzTfq6WMVb1Z1XBFUrU3+5uknYNS5CoFy/wXYFxntu0uDgQ1zm/O7pjz+VKbt5daNkf4I3c5+xvElEOCpHudsGw5nlE9a2BLPKIwXfC0hP7/kZdRrtXlPSh5fjeE9bsvsvwDk7xIjKZ0lPz3XJhMU9c5f8lbxurhf3uZNnnxFou6w6gKjXjGYjj8WZmUO/wQIvjcOcXuTYmBT3C8asTa5iIio9FEAnNIQ/0XIr5FlbEkYR5VZaCGEHxoBJ/0U0OL6ONVJQ2ZJynivzCL7Phx1MCJcWlzWnj/t1Kw/ImHuXDRcKxBQk6H2l49/CioX6sN92PHX1FK60lzkgmV//AM7f1WAktwY2AAAAABJRU5ErkJggg=="></img>
          </div>
        </Typography>
        {/* <Typography variant="body2" component="div"> */}
        <p class="font-bold ..." style={{marginBottom:"5px"}}>  {props.heading}</p>
        
        {/* </Typography> */}
      
        <Typography variant="body2" color="text.secondary" class="text-xs text-slate-400 font-medium" className='marg'>
        {props.content}
        
        </Typography>
      </CardContent>
      
    </React.Fragment>
  );
  
  return (
       <button class="text-left ">
        {/* <Card style={{borderRadius:"15px" , boxShadow: " box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);"}} >{card}</Card> */}
        <Card class="shadow-lg hover:bg-amber-200 rounded-lg hover:border-amber-500 hover:border-2" >{card}</Card>
        </button>
      
  
  );
}


// cehckbox : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nGP4/aL4Py0xw/Cy4O75uP8LZpv8nzpRlyy8cJbp/3sX4nFbAFJAruFTYZbMNsVtAaWGT4XioWXB7GmG/1cttqaNBfNmGP9/dTMdrHfVYhvqWjAPyXAQDfIJ1SyYN8Po/0uo4a9vZ/yfPxM1aRNlAShckV2Fy+UgPsmRDDIcmwHziDCcKAtALkc3aB6RhhMdROgGviLScJIiGTkycUUoxRlt3gzj/8+up4IxIZfTJCdPHVQWLKR1cX3vQjxFliycbfr/3vmEAawyfw9FCwBnYlzTpM6ecAAAAABJRU5ErkJggg=="
// class="hover:bg-amber-200"