import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../public/Images/PatientsInfluencePanel1PNG.png'
import Dashboard from '../public/Images/QrCodedash.png'
import Discover from '../public/Images/CirclesThreePlusdiscover.png'
import Influencers from '../public/Images/ApplePodcastsLogoInfluencers.png'
import Clients from '../public/Images/UserSwitchclients.png'
import Campaigns from '../public/Images/Graphcampaigns.png'
import Reports from '../public/Images/ChartBar.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  const [showDiscover, setShowDiscover] = useState(false)
  let [isActive, setIsActive] = useState('Dash')
  function handleSwitch(camp) {
    setIsActive((isActive = camp))
  }

  return (
    <div className="sidebar">
      <Image
        src={Logo}
        className="logo"
        alt="logo"
        width="160px"
        height="80px"
      />
      <div className="BTNsEC">
        <Link
          href="/"
          onClick={() => {
            handleSwitch('Dash')
          }}
        >
          <div
            className={`switchBtn ${
              isActive === 'Dash' ? 'activeBtnSide' : 'inactiveBtn'
            }`}
          >
            <Image src={Dashboard} alt="dash" />
            &nbsp;Dashboard
          </div>
        </Link>
        <div href="/" onClick={() => setShowDiscover(prevState => !prevState)}>
          <div className={`switchBtn2 dropDownSidebAR `}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image src={Discover} alt="dash" />
              &nbsp;Campaigns
            </div>
            {showDiscover && (
              <div className="indisBtb">
                <Link
                  href="discoverinfluencers"
                  onClick={() => {
                    handleSwitch('DisInfu')
                  }}
                >
                  Influencers
                </Link>
                <Link
                  href="discoverclient"
                  onClick={() => {
                    handleSwitch('DisCli')
                  }}
                >
                  Clients
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="switchBtn dropDownSidebAR disBtb"  onClick={() => setShowDiscover(prevState => !prevState)}>
        <Image src={Discover} alt="dash"/> &nbsp;Discover 
        {!showDiscover && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
        {showDiscover && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
        {showDiscover && 
        <div className='indisBtb'>
          <Link href="discoverinfluencers" onClick={ () => {handleSwitch("DisInfu")}}>Influencers</Link>
          <Link href="discoverclient" onClick={ () => {handleSwitch("DisCli")}}>Clients</Link>
        </div>}
        </div> */}
        <Link
          href="/influencers"
          onClick={() => {
            handleSwitch('Infu')
          }}
        >
          <div
            className={` switchBtn ${
              isActive === 'Infu' ? 'activeBtnSide' : 'inactiveBtn'
            }`}
          >
            <Image src={Influencers} alt="dash" />
            &nbsp;Income 
          </div>
        </Link>
        <Link
          href="/clients"
          onClick={() => {
            handleSwitch('Cli')
          }}
        >
          <div
            className={` switchBtn ${
              isActive === 'Cli' ? 'activeBtnSide' : 'inactiveBtn'
            }`}
          >
            <Image src={Clients} alt="dash" />
            &nbsp;Account 
          </div>
        </Link>
        <Link
          href="/campaigns"
          onClick={() => {
            handleSwitch('Camp')
          }}
        >
          <div
            className={` switchBtn ${
              isActive === 'Camp' ? 'activeBtnSide' : 'inactiveBtn'
            }`}
          >
            <Image src={Campaigns} alt="dash" />
            &nbsp;Help 
          </div>
        </Link>
      </div>
    </div>
  )
}
