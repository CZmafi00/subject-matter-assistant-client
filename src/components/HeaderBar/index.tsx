import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'

const { Link } = Typography

const { Header } = Layout

const HeaderBar = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
          <img alt="logo" src="https://yt3.googleusercontent.com/ytc/AIf8zZSNx8f-qz9gvMIyUHgrT9fIubxl4ZbRyaygUita9w=s900-c-k-c0x00ffffff-no-rj" />
            <h1>Student office assistant</h1>
          </Link>
        </div>
        <Space className={styles.right} size={0}>
          <span className={styles.right}>
            <Link
              className={styles.action}
              href="https://github.com/CZmafi00/subject-matter-assistant-client"
              target="_blank"
            >
              <GithubOutlined />
            </Link>
          </span>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
