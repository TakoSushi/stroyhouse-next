'use client'
import Script from 'next/script';
import * as Tabs from '@radix-ui/react-tabs';

import styles from "./styles/index.module.css";
import { useState } from 'react';

const hiddenStyles = {
  display: 'hidden',
  width: '0',
  height: '0',
}

export function SectionMap() {
  const [activeTab, setActiveTab] = useState('tab1');

  const hiddenMap1 = () => {
    if (activeTab === 'tab2') return hiddenStyles;
  }

  const hiddenMap2 = () => {
    if (activeTab === 'tab1') return hiddenStyles;
  }

  return (
    <>
      <div className="sectionWrapper">
        <section className={styles.sectionMap}>
          <div>
            <h3 className={styles.sectionMapTitle}>Наши офисы</h3>
            <Tabs.Root
              value={activeTab}
              defaultValue="tab1"
              onValueChange={value => setActiveTab(value)}
            >
              <Tabs.List className={styles.sectionMapTabList}>
                <Tabs.Trigger value="tab1" className={styles.sectionMapTabTrigger}>в Москве</Tabs.Trigger>
                <Tabs.Trigger value="tab2" className={styles.sectionMapTabTrigger}>в подмосковье</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="tab1" className={styles.sectionMapAdressBlock}>
                <div>
                  <p className={styles.sectionMapAdressTime}>Москва, проспект Мира, 36с1</p>
                  <p className={styles.sectionMapAdressTime}>Пн - Пт: с 10:00 до 19:00</p>
                </div>
                <p className={styles.sectionMapDescript} > Офис А-класса в центре Москвы. Обсудим финансы, архитектурные решения и познакомимся.</p>
              </Tabs.Content>
              <Tabs.Content value="tab2" className={styles.sectionMapAdressBlock}>
                <div>
                  <p className={styles.sectionMapAdressTime}>Московская область, Истринский район, Веледниково, улица Живописная, дом 25</p>
                  <p className={styles.sectionMapAdressTime}>Пн - Пт: с 10:00 до 19:00</p>
                  <p className={styles.sectionMapAdressTime}>Сб.: с 11:00 до 17:00</p>
                </div>
                <p className={styles.sectionMapDescript} > Офис в Подмосковье. Обсудим финансы, архитектурные решения и познакомимся.</p>
              </Tabs.Content>
            </Tabs.Root>
          </div>
          <div className={styles.YMapBlock} id="mymap" style={hiddenMap1()}></div>
          <div className={styles.YMapBlock} id="mymap2" style={hiddenMap2()}></div>
        </section >
      </div >
      <Script id='mymap' type="text/javascript" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A92a68f793435b1d2ea29a5f4da1f3a4b3fc56721776981b82e9a41be9d3d766c&amp;id=mymap&amp;scroll=false&amp;">
      </Script>
      <Script id='mymap2' type="text/javascript" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9d3af420f77e196b28d19d53d076000b201cca03aeee6a1b50ace038c205e35d&amp;&amp;id=mymap2&amp;lang=ru_RU&amp;scroll=false&amp;">
      </Script>
    </>
  )
}
