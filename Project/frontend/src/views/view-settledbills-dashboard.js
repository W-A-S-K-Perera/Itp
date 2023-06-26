import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useHistory } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';

import './view-settledbills-dashboard.css'

function ViewSettledbillsDashboard() {

  const [data, setData] = useState([]);

  //to display all settled bills
  useEffect(() => {
    fetch('http://localhost:5000/api/utility/')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  //calculate the total expenditure amount for the month
  const totalAmount = data.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  //to delete a record of settled bill
  function handleDelete(id) {
    fetch(`http://localhost:5000/api/utility/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(d => {
        setData(prevRecords => prevRecords.filter(bill => bill._id !== id));
        toast.success ("Bill deleted successfully");
      })
      .catch(error => console.error(error));
  }

  //to update a record of settled bill
  const history = useHistory();

  const handleUpdateBill = (billToUpdate) => {
    //navigate to the UpdateBill page with the billToUpdate object as state
    history.push({
      pathname: `/updatebilldetails/${billToUpdate._id}`,
      state: { billToUpdate }
    });
  };

  //search functionality
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    history.push({
      pathname: '/searchBill',
      search: `?q=${searchQuery}`
    });
  };

  //to display the month
  const day = new Date();
  const currentMonth = day.toLocaleString('default', { month: 'long' });

  return (
    <div className="view-settledbills-dashboard-container">
      <Helmet>
        <title>Utility Module - Dashboard</title>
      </Helmet>
      <div className="view-settledbills-dashboard-view-settledbills-dashboard">
        <img
          src="/playground_assets/rectangle22523-83rr-200h.png"
          alt="Rectangle22523"
          className="view-settledbills-dashboard-rectangle2"
        />
        <img
          src="/playground_assets/rectangle32524-5bor-1100h.png"
          alt="Rectangle32524"
          className="view-settledbills-dashboard-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage12525-nfu-200h.png"
          alt="PNGLogoimage12525"
          className="view-settledbills-dashboard-pn-logoimage1"
        />
        <span className="view-settledbills-dashboard-text">
          <span>SETTLED BILLS</span>
        </span>
        <img
          src="/playground_assets/rectangle62527-kvqs-200h.png"
          alt="Rectangle62527"
          className="view-settledbills-dashboard-rectangle6"
        />
        <span className="view-settledbills-dashboard-text02">
          <span><input type='text' placeholder='Search here' id='search-box' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ textAlign: 'center' }} /></span>
        </span>
        <img
          src="/playground_assets/icons8search2412529-fkot-200h.png"
          alt="Search"
          className="view-settledbills-dashboard-icons8search241"
          id='search-icon'
          onClick={handleSearch}
        />
        <img
          src="/playground_assets/rectangle7button2521-17o-200h.png"
          alt="Rectangle7button2521"
          className="view-settledbills-dashboard-rectangle7button"
        />
        <img
          src="/playground_assets/rectangle22button2521-zs9e-200h.png"
          alt="Rectangle22button2521"
          className="view-settledbills-dashboard-rectangle22button"
        />
        <span className="view-settledbills-dashboard-text04">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/addnewbill'>Add New Bill</Link>
            </button>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text06">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <a href='http://localhost:5000/api/utility/download_report/bill' download>
                Download Report
              </a>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle10button2521-2eh-200h.png"
          alt="Rectangle10button2521"
          className="view-settledbills-dashboard-rectangle10button"
        />
        <img
          src="/playground_assets/rectangle15button2521-zm4g9-200h.png"
          alt="Rectangle15button2521"
          className="view-settledbills-dashboard-rectangle15button"
        />
        <img
          src="/playground_assets/rectangle16button2521-lrcf-200h.png"
          alt="Rectangle16button2521"
          className="view-settledbills-dashboard-rectangle16button"
        />
        <img
          src="/playground_assets/rectangle17button2521-0x5w-200h.png"
          alt="Rectangle17button2521"
          className="view-settledbills-dashboard-rectangle17button"
        />
        <img
          src="/playground_assets/rectangle18button2521-sx4j-200h.png"
          alt="Rectangle18button2521"
          className="view-settledbills-dashboard-rectangle18button"
        />
        <img
          src="/playground_assets/rectangle19button2521-kme7-200h.png"
          alt="Rectangle19button2521"
          className="view-settledbills-dashboard-rectangle19button"
        />
        <img
          src="/playground_assets/rectangle20button2522-gqsn-200h.png"
          alt="Rectangle20button2522"
          className="view-settledbills-dashboard-rectangle20button"
        />
        <img
          src="/playground_assets/rectangle21button2522-rmza-200h.png"
          alt="Rectangle21button2522"
          className="view-settledbills-dashboard-rectangle21button"
        />
        <span className="view-settledbills-dashboard-text08">
          <span>
          <Link to="/employee-dashboardcopy1">Employee</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text10">
          <span>
          <Link to="/view-customers">Customer</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text12">
          <span>
          <Link to="/supply-dashboard2">Supplier</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text14">
          <span>
          <Link to="#">Rentals</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text16">
          <span>
          <Link to="/salesmanager-dashboard">Spare Parts</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text18">
          <span>
          <Link to = "/invent-dashboard">Inventory</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text20">
          <span>
          <Link to ="#">Payment</Link>
          </span>
        </span>
        <span className="view-settledbills-dashboard-text22">
          <span>
          <Link to="#">Utility Bills</Link>
          </span>
        </span>
        <img
          src="/playground_assets/rectangle142523-km5r-200h.png"
          alt="Rectangle142523"
          className="view-settledbills-dashboard-rectangle14"
        />
        <span className="view-settledbills-dashboard-text24">
          <span>
            <button style={{ color: 'black', fontWeight: 'bold' }}>
              <Link to='/'>Log Out</Link>
            </button>
          </span>
        </span>
        <img
          src="/playground_assets/mdiaccount2523-a4yg.svg"
          alt="mdiaccount2523"
          className="view-settledbills-dashboard-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd2523-k7mm.svg"
          alt="materialsymbolsadd2523"
          className="view-settledbills-dashboard-materialsymbolsadd"
        />
        <img
          src="/playground_assets/materialsymbolsdownloadrounded2523-tky.svg"
          alt="materialsymbolsdownloadrounded2523"
          className="view-settledbills-dashboard-materialsymbolsdownloadrounded"
        />

        <div className="view-settledbills-dashboard-frame22 view-settledbills-dashboard-frame22">
          <table id='bills'>
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Name</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Settled Date</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((bill) => (
                  <tr key={bill._id}>
                    <td>{bill.billId}</td>
                    <td>{bill.name}</td>
                    <td>{bill.month}</td>
                    <td>{bill.amount}</td>
                    <td>{bill.date}</td>
                    <td>{bill.note}</td>
                    <td>
                      <Link to={`/viewasettledbill/${bill._id}`}>
                        <button>
                          <span>
                            <AiOutlineEye size={18} color='#4B259B' />
                          </span>
                        </button>
                      </Link>
                      <button onClick={() => handleUpdateBill(bill)}>
                        <span>
                          <FaEdit size={18} color='#4B259B' />
                        </span>
                      </button>
                      <button onClick={() => handleDelete(bill._id)}>
                        <span>
                          <FaTrashAlt size={18} color='#4B259B' />
                        </span>
                      </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>

        <img
          src="/playground_assets/rectangle232522-wgmo-200h.png"
          alt="Rectangle232522"
          className="view-settledbills-dashboard-rectangle23"
        />
        <span className="view-settledbills-dashboard-text70">
          <span>{currentMonth} - Total Expenditure Amount</span>
        </span>
        <span className="view-settledbills-dashboard-text72">
          <span>: Rs. {totalAmount} /=</span>
        </span>
        <img
          src="/playground_assets/rectangle24button2522-7z9-200h.png"
          alt="Rectangle24button2522"
          className="view-settledbills-dashboard-rectangle24button"
        />
        <span className="view-settledbills-dashboard-text74">
          <span>
            <button style={{ color: 'white', fontWeight: 'bold' }}>
              <Link to='/viewallpendingbills-sorted'>View Pending Bills</Link>
            </button>
          </span>
        </span>
      </div>
    </div>
  )
}

export default ViewSettledbillsDashboard