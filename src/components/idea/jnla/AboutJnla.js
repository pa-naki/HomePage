import React from 'react'
import styledComponents from 'styled-components'

const AboutJnla = () => {
  return (
    <Wrapper>
      <h3>評価技術センターについて</h3>
      <div>
        <h1>近年、清潔で快適な生活・衛生面への関心等で抗菌製品の需要が高まっています。</h1>
        <p>
          それにより、抗菌効果の信頼性も重要となってきました。<br />
          当社は、より一層の抗菌試験及び、防かび試験の信頼性を高めるため、独立した試験部門として評価技術センターを設立しました。 評価技術センターは、工業標準化法（JIS法）に基づく試験事業者登録制度 （JNLA：Japan National Laboratory Accreditation　system）の試験事業者として登録されています。（登録番号090289JP）<br />
          また、一般社団法人 繊維評価技術協議会（JTETC）の指定検査機関、及び一般社団法人 日本衛生材料工業連合会（JHPIA）の認定試験機関（ウェットワイパー類の除菌性能試験、衛生用品の抗菌性能試験）としても登録されています。下記の試験項目についてはJNLA標章付き試験証明書を第３者の立場で発行することができます。<br />
          抗菌性試験、かび抵抗性試験以外についても対応致しますのでお気軽に御相談下さい。
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`
  background-color: red;
`

export default AboutJnla
