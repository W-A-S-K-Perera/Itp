import React from 'react';
import {useHistory} from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEdit,FaTrashAlt} from 'react-icons/fa';
import{ AiOutlineEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './store-items.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function SerchProducts() {
    const [products, setProducts] = useState([]);
        const [data, setData] = useState ([]);
      
        const location = useLocation();
        const searchQuery = new URLSearchParams(location.search).get("q");
      
        useEffect (() => {
          fetch (`http://localhost:5000/api/products/serch/${searchQuery}`)
          .then (res => res.json())
          .then (data => setData (data))
          .catch (err => console.log (err));
        }, [searchQuery]);
    

  return (
    <div className="store-items-container">
      <Helmet>
        <title>Serch Items</title>
      </Helmet>
      <div className="store-items-store-items">
        <img
          src="/playground_assets/rectangle213-r8qt-200h.png"
          alt="Rectangle213"
          className="store-items-rectangle2"
        />
        <img
          src="/playground_assets/rectangle314-kra-1100h.png"
          alt="Rectangle314"
          className="store-items-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage115-zlld-200h.png"
          alt="PNGLogoimage115"
          className="store-items-pn-logoimage1"
        />
        <span className="store-items-text">
          <span>ITEM MANAGEMENT</span>
        </span>
        {/* <img
          src="/playground_assets/rectangle6input17-fgcb-200h.png"
          alt="Rectangle6input17"
          className="store-items-rectangle6input"
        />
        <span className="store-items-text02">
          <span><input type='text' placeholder='Serch here'></input></span>
        </span>
        <img
          src="/playground_assets/icons8search24119-n1r-200h.png"
          alt="icons8search24119"
          className="store-items-icons8search241"
        />
       <img
          src="/playground_assets/rectangle7button110-t63k-200h.png"
          alt="Rectangle7button110"
          className="store-items-rectangle7button"
        />
        <img
          src="/playground_assets/rectangle22button111-b9rv-200h.png"
          alt="Rectangle22button111"
          className="store-items-rectangle22button"
        />
        <span className="store-items-text04">
          <span><button style={{color:'white',fontWeight: 'bold'}}>Add new Item</button></span>
        </span>
        <span className="store-items-text06">
          <span><button style={{color:'white',fontWeight: 'bold'}}>Download Report</button></span>
  </span>*/}
        <img
          src="/playground_assets/rectangle10button114-rw3r-200h.png"
          alt="Rectangle10button114"
          className="store-items-rectangle10button"
        />
        <img
          src="/playground_assets/rectangle15button115-j7qd-200h.png"
          alt="Rectangle15button115"
          className="store-items-rectangle15button"
        />
        <img
          src="/playground_assets/rectangle16button116-qto9-200h.png"
          alt="Rectangle16button116"
          className="store-items-rectangle16button"
        />
        <img
          src="/playground_assets/rectangle17button117-g8b-200h.png"
          alt="Rectangle17button117"
          className="store-items-rectangle17button"
        />
        <img
          src="/playground_assets/rectangle18button118-2ve9-200h.png"
          alt="Rectangle18button118"
          className="store-items-rectangle18button"
        />
        <img
          src="/playground_assets/rectangle19button119-2hsi-200h.png"
          alt="Rectangle19button119"
          className="store-items-rectangle19button"
        />
        <img
          src="/playground_assets/rectangle20button120-vfl-200h.png"
          alt="Rectangle20button120"
          className="store-items-rectangle20button"
        />
        <img
          src="/playground_assets/rectangle21button121-rvk9-200h.png"
          alt="Rectangle21button121"
          className="store-items-rectangle21button"
        />
        <span className="store-items-text08">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Employee</Link>
          </button></span>
        </span>
        <span className="store-items-text10">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Customer
          </Link></button></span>
        </span>
        <span className="store-items-text12">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Supplier</Link>
          </button></span>
        </span>
        <span className="store-items-text14">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Payement</Link>
          </button></span>
        </span>
        <span className="store-items-text16">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
             <Link to= '/'>Store Items</Link>
             </button></span>
        </span>
        <span className="store-items-text18">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Renting</Link>
          </button></span>
        </span>
        <span className="store-items-text20">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Inventory</Link>
          </button></span>
        </span>
        <span className="store-items-text22">
          <span><button style={{color:'black',fontWeight: 'bold'}}>
          <Link to= '/'>Utility Bills</Link>
          </button></span>
        </span>
        <img
          src="/playground_assets/rectangle14130-02u4-200h.png"
          alt="Rectangle14130"
          className="store-items-rectangle14"
        />
        <span className="store-items-text24">
          <span><button style={{color:'black',fontWeight: 'bold'}}> <Link to= '/'>Log Out</Link>
          </button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount132-oca8.svg"
          alt="mdiaccount132"
          className="store-items-mdiaccount"
        />
       
       
           <div className="store-items-frame12 store-items-frame12">
          
        <table id='items'>
        <thead>
          <tr>
            <th> Name</th>
            <th>Category</th>
            <th>price</th>
            <th>Quantity</th>
            
          </tr>
        </thead>
        <tbody>
        {data.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  
             
            </tr>
          ))}
        </tbody>
      </table>
      
      
      
      </div>
      </div>
    </div>
  )
}

export default SerchProducts
