import Image from 'next/image'

interface SettingsProps {
  setShowModal: (value: boolean) => void
}

const timerOptions = [
  { name: 'pomodoro', label: 'pomodoro' },
  { name: 'short-break', label: 'short break' },
  { name: 'long-break', label: 'long break' }
]

export default function Settings ({ setShowModal }: SettingsProps) {
  return (
    <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto py-2 bg-white absolute">
      <div className='flex justify-between items-baseline w-full p-4 border-b'>
        <p className='font-bold'>Settings</p>
        <Image
          src='/images/icon-close.svg'
          alt='close icon'
          className='decoration-[#EFF1FA]'
          width={15}
          height={15}
          priority
          onClick={() => { setShowModal(false) }}
        />
      </div>
      <div className='flex flex-col p-4 w-full'>
        <h2 className='font-semibold text-center uppercase text-[0.8125rem] pb-[1rem]'>time ( minutes )</h2>
        {timerOptions.map((option, index) => {
          return (
            // TODO: change this logic to make it more readable and reusable without using ternary operators like this one. Dynamic placeholder needed
            <div key={index} className='flex justify-between w-full'>
              <p >{option.label}</p>
              <div>
                <p> {option.label === 'pomodoro'
                  ? '25'
                  : option.label === 'short break'
                    ? '5'
                    : '15'}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
