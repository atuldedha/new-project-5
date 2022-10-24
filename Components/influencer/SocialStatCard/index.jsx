import Image from 'next/image'
import React from 'react'
import styles from './SocialStatCard.module.css'
import lineChartImage from '../../../public/Images/Vector 3.2.png'

function SocialStatCard({ title, value, image }) {
  return (
    <div className="shadow-sm px-4 py-3 mb-3 bg-body rounded">
      <div className="d-flex gap-3 align-items-center">
        <div xs="auto">
          <Image src={image} alt={`${title} logo`} height={40} width={40} />
        </div>
        <div className="text-secondary fw-bolder">{title}</div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className={`${styles.valueText} mt-3 mb-0`}>{value}</p>
        <Image src={lineChartImage} alt="linechart vector" />
      </div>
      <p className="text-muted">Influencers since last month</p>
    </div>
  )
}

export default SocialStatCard
