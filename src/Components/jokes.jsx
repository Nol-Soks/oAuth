import WebFont from 'webfontloader';
import { useEffect } from 'react';
export function Jonkes()
{
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Chilanka']
          }
        });
       }, []);
     
    return <div style={{
        padding:'2px 600px  20px',
        fontFamily: 'Chilanka'
         }}>
        <h2 style={{textAlign:"center"}}
        >HEY WELCOME !! </h2>
        
        <h3 style={{textAlign:"center"}}>
        Why don't skeletons fight each other?
        <br/>
        Because they don't have the guts!
        </h3>
    </div>
}

