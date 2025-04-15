import { useRef, useState } from "react"
import { playAudio, handleResult } from "../utils"
import BaseButton from "../components/BaseButton"

const Home = () => {
  const [result, setResult] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [resultStyle, setResultStyle] = useState<string>('')
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioHaha = useRef<HTMLAudioElement | null>(null);
  const [isBroken, setIsBroken] = useState<boolean>(false)
  
  const handleButtonClick = (value: string) => {
    playAudio(audioRef)

    if ((input.match(/0/g) || []).length > 3) { // jumlah 0 ada 5 atau lebih
      setResult('Kebanyakan 0! Mau hitung apa coba?')
      setResultStyle('text-2xl font-medium')
    }
    
    if (value === 'Ac') { // All Clear
      setResult('')
      setInput('')
    } else if (value === 'Br') { // Broken
      setResult('Jangan Tekan tombol ini!')
      setResultStyle('text-4xl font-medium')
      setInput('')
      if (result === 'Jangan Tekan tombol ini!') {
        setResult('Sudah dibilangin, masih saja ditekan!😑')
      }
      if (result === 'Sudah dibilangin, masih saja ditekan!😑') {
        setResult('Hmm ... ngeyel dikasih tau?🤬')
      }
      if (result === 'Hmm ... ngeyel dikasih tau?🤬') {
        setResult('Tekan sekali lagi dan kalkulator ini akan rusak!')
      }
      if (result === 'Tekan sekali lagi dan kalkulator ini akan rusak!') {
        setResult('Kalkulator ini rusak, hahaha🤣')
        playAudio(audioHaha)
        setIsBroken(true)
      }
    }
     else if (value === '=') { // Calculate result
      try {
        const evalResult = eval(input.replace(/x/g, '*').replace(/,/g, '.'))
        setResult(evalResult.toString())
        if (Number(evalResult.toString()) > 10000) {
          setResultStyle('text-2xl font-medium')
        } else {
          setResultStyle('text-4xl font-medium')
        }
      } catch (error) {
        setResultStyle('')
        setResult('Yang bener woy inputnya!')
      }

    } else if (value === 'Delete') { // Delete last character
      setInput(input.slice(0, -1))
    } else { // Append value to input
      if (result === 'Jangan Tekan tombol ini!' || result === 'Sudah dibilangin, masih saja ditekan!😑' || result === 'Hmm ... ngeyel dikasih tau?🤬' || result === 'Tekan sekali lagi dan kalkulator ini akan rusak!') {
        setResult('')
      }
      setInput(prev => prev + value);
    }
  }

  
  return (
    <div className="px-4 sm:px-6 pb-4">

      <div className="bg-slate-200 dark:bg-slate-600 h-44 rounded-lg p-3 flex items-end justify-end mb-4">
        <div className="text-end w-full">

          {/* result */}
          <div hidden={result.length === 0}>
            <p className={resultStyle}>{handleResult(result)}</p>
            <hr className="border-gray-500 dark:border-gray-400 my-2 rounded-full" />
          </div>

          <p className="text-3xl">{input}</p>
        </div>
      </div>

      <audio ref={audioRef} src="/sounds/tnt_u_click.mp3" />
      <audio ref={audioHaha} src="/sounds/haha-funy.mp3" />
      {!isBroken && (
        <div className="grid grid-cols-4 gap-2 w-full">
          <BaseButton onClick={() => handleButtonClick('Ac')} text="Ac" color="yellow" />
          <BaseButton onClick={() => handleButtonClick('Br')} text="Br" color="yellow" />
          <BaseButton onClick={() => handleButtonClick('Delete')} text={<i className="fa-solid fa-delete-left"></i>} color="yellow" />
          <BaseButton onClick={() => handleButtonClick('/')} text="/" color="yellow" />

          <BaseButton onClick={() => handleButtonClick('7')} text="7" />
          <BaseButton onClick={() => handleButtonClick('8')} text="8" />
          <BaseButton onClick={() => handleButtonClick('9')} text="9" />
          <BaseButton onClick={() => handleButtonClick('*')} text={<i className="fa-solid fa-xmark"></i>} color="yellow" />

          <BaseButton onClick={() => handleButtonClick('4')} text="4" />
          <BaseButton onClick={() => handleButtonClick('5')} text="5" />
          <BaseButton onClick={() => handleButtonClick('6')} text="6" />
          <BaseButton onClick={() => handleButtonClick('-')} text={<i className="fa-solid fa-minus"></i>} color="yellow" />

          <BaseButton onClick={() => handleButtonClick('1')} text="1" />
          <BaseButton onClick={() => handleButtonClick('2')} text="2" />
          <BaseButton onClick={() => handleButtonClick('3')} text="3" />
          <BaseButton onClick={() => handleButtonClick('+')} text={<i className="fa-solid fa-plus"></i>} color="yellow" />

          <BaseButton onClick={() => handleButtonClick('0')} text="0" className="col-span-3" />
          <BaseButton onClick={() => handleButtonClick('=')} text={<i className="fa-solid fa-equals"></i>} color="darkYellow" />
        </div>
      )}

    </div>
  )
}

export default Home