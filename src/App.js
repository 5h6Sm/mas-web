import './App.css';
import './index.css'

function Top(){
  return (
    <div className='all_wrapper'>
       <div class="top">
            <div class="top_text">
                <h1>MAS 2ND:<br/>PROJECT</h1>
            </div>
            <div class="text_img">
                <div class="op">about 🔅</div>
                <div class="op">memeber 🔅</div>
                <div class="op">project 🔅</div>
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
  return (
    <div className='all_wrapper'>
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
                        <div class="per_project">개인프로젝트 </div>
                        <div>&nbsp; | &nbsp;</div>
                        <div class="org_project"> 단체프로젝트</div>
                    </div>
                    <div class="project_num">
                        <div class="seme_title">2022 1학기</div>
                        <div class="using_tool">Adobe illustrator</div>
                        <div class="using_tool">Adobe photoshop</div>
                        <div class="text_project_name">프로젝트 이름을 쓰세요</div>
                    </div>
                    <div class="project_num">
                        <div class="seme_title">2022 1학기</div>
                        <div class="using_tool">Adobe illustrator</div>
                        <div class="using_tool">리스트 간격은 46px</div>
                        <div class="text_project_name">프로젝트 이름을 쓰세요</div>
                    </div>
                </div>

            </div>
        </div>
        </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Line />
        <Main />
      </header>
    </div>
  );
}

export default App;
