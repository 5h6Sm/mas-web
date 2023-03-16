import { useMotionValue, useTransform , useCycle} from "framer-motion";
import './App.css';

import React from 'react';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"

import sun from './images/sun.png'
import star from './images/star.png';
import moon from './images/moon.png';
import top from './images/upButton.png';


const MyComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const opacity = useMotionValue(0.5);
  const opacityHover = useTransform(opacity, [0.5, 1], [0.5, 1]);
  const opacityTap = useTransform(opacity, [0.5, 1], [0.6, 1]);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <motion.div
      style={{ opacity }}
      whileHover={opacityHover}
      whileTap={opacityTap}
      onClick={handleClick}
    >
    </motion.div>
  );
};

function Component(){
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return(
    <motion.div 
      animate={{ opacity: isActive ? 1 : 0.5 }}
      whileHover={{ opacity: 1 }}
      whileTap={{ opacity: 1 }}
      onClick={toggleActive}
      >
      <div class="per_project">개인프로젝트 </div>
    </motion.div>
  )
}

function MyComponent2() {
  const [isHovered, toggleHover] = useCycle(false, true);

  return (
    <motion.div
      whileHover={{ opacity: 1 }}
      whileTap={{ opacity: 1 }}
      animate={{ opacity: isHovered ? 1 : 0.5 }}
      onClick={() => toggleHover()}
    >
      {/* 컨텐츠 */}
    </motion.div>
  );
}


function Top(){
  const [isVisible1, setIsVisible1] = useState('');
  const [isVisible2, setIsVisible2] = useState('');
  const [isVisible3, setIsVisible3] = useState('');

  return (
    <div className='all_wrapper'>
       <div class="top">
            <div class="top_text">
                <h1>MAS 2ND:<br/>PROJECT</h1>
            </div>
            <div class="text_img">
              
                <div class="op">
                  
                    <div>
                    {/* 해버튼 마우스 닿을 시 글자 나옴 */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                      <motion.a
                        onHoverStart={(e) => setIsVisible1(true)}
                        onHoverEnd={(e) => setIsVisible1(false)}
                      >
                        <a href=''><img src={sun} alt="ABOUT" className="sun_buttons" /></a><br />
                      </motion.a>
                    </motion.div>
                    <AnimatePresence>
                      {isVisible1 && (
                        <motion.div
                          className="navigation-text"
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 3 }}
                          exit={{ x: -30, opacity: 0 }}
                          transition={{ duration: 1 }}>
                          <span className="text">ABOUT</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div class="op">
                        <div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                            <motion.a
                              onHoverStart={() => { setIsVisible2(true) }}
                              onHoverEnd={() => { setIsVisible2(false) }}
                            >
                              <a href=''><img src={star} alt="MEMBER" className="buttons" /></a><br />
                            </motion.a>
                          </motion.div>
                          <AnimatePresence>
                            {isVisible2 && (
                              <motion.div
                                className="navigation-text"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 3 }}
                                exit={{ x: -30, opacity: 0 }}
                                transition={{ duration: 1 }}>
                                <span className="text">MEMBER</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                </div>
                <div class="op">
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                        <motion.a
                          onHoverStart={() => { setIsVisible3(true) }}
                          onHoverEnd={() => { setIsVisible3(false) }}
                        >
                          <a href=''><img src={moon} alt="PROJECT" className="buttons" /></a><br />
                        </motion.a>
                      </motion.div>
                      <AnimatePresence>
                        {isVisible3 && (
                          <motion.div
                            className="navigation-text"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 3 }}
                            exit={{ x: -30, opacity: 0 }}
                            transition={{ duration: 1 }}>
                            <span className="text">PROJECT</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

function Line(){
  return (
    <div className="App-Navigation-line">
      <div
        style={{
          width: "100%",
          borderBottom: "1px dashed #aaa",
          lineHeight: "0.1em"
        }}
      >
      </div>
    </div>
  )
}

function Main(){

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  

  const toggleActive1 = () => {
    setIsActive1(!isActive1);
  };
  const toggleActive2 = () => {
    setIsActive2(!isActive2);
  };
  const toggleActive3 = () => {
    setIsActive3(!isActive3);
  };
  const toggleActive4 = () => {
    setIsActive4(!isActive4);
  };

  return (
    
    <div className='all_wrapper'>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 3 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}>
          <div >
            <div class="main">
                    <div class="toptom_text">
                        Ji Su Yeon’s PROJECT
                    </div>
                    <div class="line"></div>
                    <div class="project_intro">
                        <div class="project_pre">
                            <div class="project_pic"></div>
                            <div class="project_name">프로젝트 이름</div>
                            <div class="project_cal">2022.08.04 ~ 2022.08.04</div>
                            <div class="project_info_text">최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다.
                                <br />이런 용도로 사용할 때 로렘 입숨을 그리킹이라고도 부르며, 때</div>
                            <div class="project_pic2"></div>
                            <div class="project_info_text">이미지와 텍스트 사이즈는 유동적으로 조정, 두 개체의 사이 간격은 16px</div>
                            <div class="project_pic3"></div>
                            <div class="project_info_text">이미지와 텍스트 사이즈는 유동적으로 조정, 두 개체의 사이 간격은 16px, 이미지와 텍스트 사이즈는 유동적으로 조정, 두 개체의 사이 간격은 16px, 이미지와 텍스트 사이즈는 유동적으로 조정, 두 개체의 사이 간격은 16px,이미지와 텍스트 사이즈는 유동적으로 조정, 두 개체의 사이 간격은 위 16px, 아래 26px</div>
                            <div class="project_pic3"></div>
                            
                        </div>
                        <div class="side_line"></div>
                        <div class="project_info_side">
                            <div class="project_title">PROJECT</div>
                            <div class="select_project">
                            <motion.div 
                                animate={{ opacity: isActive1 ? 1 : 0.5 }}
                                whileHover={{ opacity: 1 }}
                                whileTap={{ opacity: 1 }}
                                onClick={toggleActive1}
                                >
                                <div class="per_project">개인프로젝트 </div>
                              </motion.div>
                                <div>&nbsp; | &nbsp;</div>
                                <motion.div 
                                  animate={{ opacity: isActive2 ? 1 : 0.5 }}
                                  whileHover={{ opacity: 1 }}
                                  whileTap={{ opacity: 1 }}
                                  onClick={toggleActive2}
                                >
                                <div class="org_project"> 단체프로젝트</div>
                                </motion.div>
                            </div>
                            <motion.div 
                                  animate={{ opacity: isActive3 ? 1 : 0.5 }}
                                  whileHover={{ opacity: 1 }}
                                  whileTap={{ opacity: 1 }}
                                  onClick={toggleActive3}
                                >
                            <div class="project_num">
                                <div class="seme_title">2022 1학기</div>
                                <div class="using_tool">Adobe illustrator</div>
                                <div class="using_tool">Adobe photoshop</div>
                                <div class="text_project_name">프로젝트 이름을 쓰세요</div>
                            </div>
                              </motion.div>
                              <motion.div 
                                  animate={{ opacity: isActive4 ? 1 : 0.5 }}
                                  whileHover={{ opacity: 1 }}
                                  whileTap={{ opacity: 1 }}
                                  onClick={toggleActive4}
                                >
                            <div class="project_num">
                                <div class="seme_title">2022 1학기</div>
                                <div class="using_tool">Adobe illustrator</div>
                                <div class="using_tool">리스트 간격은 46px</div>
                                <div class="text_project_name">프로젝트 이름을 쓰세요</div>
                            </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

          </div>
      </motion.div>
        </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <MyComponent/>
        <Line />
        <Main />
      </header>
    </div>
  );
}

export default App;
