import React from 'react'
import { DemoBlock } from 'demos'
import { SideBar } from 'antd-mobile'
import { tabs } from './tabs'
import styles from './demo2.less'

export default () => {
  return (
    <>
      <DemoBlock title='自定义宽度' padding='0'>
        <SideBar style={{ '--width': '120px' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='自定义选项圆角' padding='0'>
        <SideBar style={{ '--item-border-radius': '0px' }}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title='增加计数' padding='0'>
        <SideBar>
          <SideBar.Item
            key='key1'
            title={
              <div>
                选项一
                <span className={styles.count}>(8)</span>
              </div>
            }
          />
          <SideBar.Item
            key='key2'
            title={
              <div>
                选项二有点长它折行了
                <span className={styles.count}>(5)</span>
              </div>
            }
          />
        </SideBar>
      </DemoBlock>
    </>
  )
}
