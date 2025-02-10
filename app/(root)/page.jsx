import RightSideBar from "@/components/RightSideBars";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";


export default function Home(){
    const loggedIn = {firstName: "Mendelsson", lastName:"Dias", email:"mendersson@hotmail.com"}
    return (
       <section className="home">
        <div className="home-content">
            <header  className="home-header">
                <HeaderBox
                  type="saudações"
                  title="Bem vindo"
                  user={loggedIn?.firstName || 'Convidado'}
                  subtext="Acesse e gerencie sua conta e transações com eficiência"/>

                  <TotalBalanceBox
                    accouts={[]}
                    totalBanks={1}
                    totalCurrentBalance={500245.39}/>
            </header>

        </div>

        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 54000.14 }, {currentBalance: 111254.39}]} />

       </section>
    )
}