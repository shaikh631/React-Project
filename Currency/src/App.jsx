import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'
import UseCurrenceInfo from './Hooks/UseCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] =useState("usd")
  const [to, setTo] = useState('inr')
  const [convertAmount, setConvertAmount] =useState(0)

  const currencyInfo = UseCurrenceInfo(from)
  const option = Object.keys(currencyInfo)
  

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
  }

  const convert =() =>{
    setConvertAmount (amount * currencyInfo[to])
  }

       return (
        <div
            className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1604987556311-eb5400d504b7?w=1200&h=800&fit=crop')`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-transparent"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

            <div className="w-full relative z-10">
                <div className="w-full max-w-md mx-auto border border-gray-200 rounded-2xl p-8 backdrop-blur-xl bg-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-6 transition-transform duration-200 hover:translate-x-1">
                            <InputBox
                                label="From"
                            amount={amount}
                            currencyOption={option}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-6 mb-4 transition-transform duration-200 hover:translate-x-1">
                            <InputBox
                              label="To"
                            amount={convertAmount}
                            currencyOption={option}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
         </div> 
    );
  
}

export default App
