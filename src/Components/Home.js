import style from './Components.module.css'
export default function Home(){
    return(
        <div className={style.Home}>
            <div className={style.HomeBlur}>
                <br />
           <h1>Bem-Vindo <br /> ao <br /> Jirezen</h1><br />
           <h3>Eu sou o Chefe Julian nosso restaurante está de pé a pelo menos 10 anos de muita felicidade e comidas gostosas</h3>
           <h5>localização</h5>
           <p>R. Joroslau Sochaki, num 798 - Ipê, São José dos Pinhais - PR, 83055-400</p>
            </div>
        </div>
    )
}
